import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useLanguage, type Lang } from '../context/LanguageContext'

type Block = { type: 'p'; text: string } | { type: 'ul'; items: string[] } | { type: 'h3'; text: string }
type Section = { title: string; blocks: Block[] }
type PolicyContent = { title: string; updated: string; intro: string; sections: Section[] }

const loaders: Record<Lang, () => Promise<any>> = {
  en: () => import('./policy-data/privacy/en'),
  ko: () => import('./policy-data/privacy/ko'),
  ja: () => import('./policy-data/privacy/ja'),
  zh: () => import('./policy-data/privacy/zh'),
  es: () => import('./policy-data/privacy/es'),
  sv: () => import('./policy-data/privacy/sv'),
}

export function Privacy() {
  const { lang } = useLanguage()
  const [tx, setTx] = useState<PolicyContent | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = loaders[lang] ?? loaders.en
    setTx(null)
    load()
      .then((mod) => {
        if (!cancelled) setTx(mod.default as PolicyContent)
      })
      .catch(async () => {
        const fallback = await loaders.en()
        if (!cancelled) setTx(fallback.default as PolicyContent)
      })
    return () => {
      cancelled = true
    }
  }, [lang])

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {tx ? (
          <>
            <h1 className="text-3xl font-bold text-white mb-2">{tx.title}</h1>
            <p className="text-xs text-gray-600 mb-4">{tx.updated}</p>
            <p className="text-sm text-gray-400 mb-10 leading-relaxed">{tx.intro}</p>
            <div className="space-y-8 text-sm leading-relaxed">
              {tx.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
                  <div className="space-y-4 text-gray-400">
                    {section.blocks.map((block, i) => {
                      if (block.type === 'p') {
                        return <p key={i}>{block.text}</p>
                      }
                      if (block.type === 'h3') {
                        return <h3 key={i} className="text-white font-semibold">{block.text}</h3>
                      }
                      return (
                        <ul key={i} className="list-disc list-inside space-y-1">
                          {block.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="h-8 w-56 rounded bg-gray-800/70" />
            <div className="h-3 w-32 rounded bg-gray-800/50" />
            <div className="h-4 w-full rounded bg-gray-900/60" />
            <div className="space-y-6 pt-6">
              <div className="h-28 rounded bg-gray-900/60" />
              <div className="h-28 rounded bg-gray-900/60" />
              <div className="h-28 rounded bg-gray-900/60" />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
