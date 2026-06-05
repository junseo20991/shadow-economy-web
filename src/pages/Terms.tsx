import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { PolicyBlocks, type PolicyBlock } from '../components/PolicyBlocks'
import { TEXT_SECTION } from '../constants/layout'
import { useLanguage, type Lang } from '../context/LanguageContext'

type Section = { title: string; blocks: PolicyBlock[] }
type TermsContent = {
  title: string
  updated: string
  intro: string | string[]
  sections: Section[]
}

const loaders: Record<Lang, () => Promise<{ default: unknown }>> = {
  en: () => import('./policy-data/terms/en'),
  ko: () => import('./policy-data/terms/ko'),
  ja: () => import('./policy-data/terms/ja'),
  zh: () => import('./policy-data/terms/zh'),
  es: () => import('./policy-data/terms/es'),
  sv: () => import('./policy-data/terms/sv'),
  fr: () => import('./policy-data/terms/fr'),
  de: () => import('./policy-data/terms/de'),
  ru: () => import('./policy-data/terms/ru'),
  ar: () => import('./policy-data/terms/ar'),
  pt: () => import('./policy-data/terms/pt'),
  it: () => import('./policy-data/terms/it'),
  nl: () => import('./policy-data/terms/nl'),
  id: () => import('./policy-data/terms/id'),
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Terms() {
  const { lang } = useLanguage()
  const [tx, setTx] = useState<TermsContent | null>(null)
  const [openSections, setOpenSections] = useState<Set<number>>(new Set())

  useEffect(() => {
    let cancelled = false
    const load = loaders[lang] ?? loaders.en
    load()
      .then((mod) => {
        if (!cancelled) {
          setTx(mod.default as TermsContent)
          setOpenSections(new Set())
        }
      })
      .catch(async () => {
        const fallback = await loaders.en()
        if (!cancelled) {
          setTx(fallback.default as TermsContent)
          setOpenSections(new Set())
        }
      })
    return () => {
      cancelled = true
    }
  }, [lang])

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const introParagraphs = tx
    ? Array.isArray(tx.intro)
      ? tx.intro
      : [tx.intro]
    : []

  return (
    <Layout>
      <div className={`${TEXT_SECTION} py-12 sm:py-16`}>
        {tx ? (
          <>
            <h1 className="mb-2 break-words text-2xl font-bold leading-tight text-white sm:text-3xl">{tx.title}</h1>
            <p className="text-xs text-gray-600 mb-6">{tx.updated}</p>
            <div className="mb-8 space-y-4 break-words text-sm leading-relaxed text-gray-400 [overflow-wrap:anywhere]">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-2">
              {tx.sections.map((section, index) => {
                const isOpen = openSections.has(index)
                const panelId = `terms-section-${index}`
                return (
                  <div
                    key={section.title}
                    className="rounded-lg border border-gray-800/80 bg-gray-900/40 overflow-hidden"
                  >
                    <button
                      type="button"
                      id={`${panelId}-trigger`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleSection(index)}
                      className="flex w-full items-center justify-between gap-3 px-3.5 py-3.5 text-left transition-colors hover:bg-gray-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-inset sm:px-4"
                    >
                      <span className="min-w-0 flex-1 break-words pr-2 text-base font-semibold text-white">{section.title}</span>
                      <Chevron open={isOpen} />
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={`${panelId}-trigger`}
                        className="border-t border-gray-800/80 px-3.5 py-4 sm:px-4"
                      >
                        <PolicyBlocks blocks={section.blocks} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="h-8 w-56 rounded bg-gray-800/70" />
            <div className="h-3 w-32 rounded bg-gray-800/50" />
            <div className="space-y-2 pt-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-12 rounded-lg bg-gray-900/60" />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
