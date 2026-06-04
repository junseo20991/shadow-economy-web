import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { PolicyBlocks, type PolicyBlock } from '../components/PolicyBlocks'
import { useLanguage, type Lang } from '../context/LanguageContext'

type Section = { title: string; blocks: PolicyBlock[] }
type PolicyContent = {
  title: string
  updated: string
  intro: string | string[]
  sections: Section[]
}

const loaders: Record<Lang, () => Promise<{ default: unknown }>> = {
  en: () => import('./policy-data/privacy/en'),
  ko: () => import('./policy-data/privacy/ko'),
  ja: () => import('./policy-data/privacy/ja'),
  zh: () => import('./policy-data/privacy/zh'),
  es: () => import('./policy-data/privacy/es'),
  sv: () => import('./policy-data/privacy/sv'),
  fr: () => import('./policy-data/privacy/fr'),
  de: () => import('./policy-data/privacy/de'),
  ru: () => import('./policy-data/privacy/ru'),
  ar: () => import('./policy-data/privacy/ar'),
  pt: () => import('./policy-data/privacy/pt'),
  it: () => import('./policy-data/privacy/it'),
  nl: () => import('./policy-data/privacy/nl'),
  id: () => import('./policy-data/privacy/id'),
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

export function Privacy() {
  const { lang } = useLanguage()
  const [tx, setTx] = useState<PolicyContent | null>(null)
  const [openSections, setOpenSections] = useState<Set<number>>(new Set())

  useEffect(() => {
    let cancelled = false
    const load = loaders[lang] ?? loaders.en
    load()
      .then((mod) => {
        if (!cancelled) {
          setTx(mod.default as PolicyContent)
          setOpenSections(new Set())
        }
      })
      .catch(async () => {
        const fallback = await loaders.en()
        if (!cancelled) {
          setTx(fallback.default as PolicyContent)
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
      <div className="w-full px-2 sm:px-2.5 md:px-3 py-12 sm:py-16">
        {tx ? (
          <>
            <h1 className="text-3xl font-bold text-white mb-2">{tx.title}</h1>
            <p className="text-xs text-gray-600 mb-6">{tx.updated}</p>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed mb-8">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-2">
              {tx.sections.map((section, index) => {
                const isOpen = openSections.has(index)
                const panelId = `privacy-section-${index}`
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
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-gray-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-inset"
                    >
                      <span className="text-base font-semibold text-white pr-2">{section.title}</span>
                      <Chevron open={isOpen} />
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={`${panelId}-trigger`}
                        className="border-t border-gray-800/80 px-4 py-4"
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
