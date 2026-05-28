import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { useLanguage, type Lang } from '../context/LanguageContext'

type Section = { title: string; content: string | string[] }
type TermsContent = { title: string; updated: string; sections: Section[] }

const loaders: Record<Lang, () => Promise<any>> = {
  en: () => import('./policy-data/terms/en'),
  ko: () => import('./policy-data/terms/ko'),
  ja: () => import('./policy-data/terms/ja'),
  zh: () => import('./policy-data/terms/zh'),
  es: () => import('./policy-data/terms/es'),
  sv: () => import('./policy-data/terms/sv'),
}

export function Terms() {
  const { lang } = useLanguage()
  const [tx, setTx] = useState<TermsContent | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = loaders[lang] ?? loaders.en
    setTx(null)
    load()
      .then((mod) => {
        if (!cancelled) setTx(mod.default as TermsContent)
      })
      .catch(async () => {
        const fallback = await loaders.en()
        if (!cancelled) setTx(fallback.default as TermsContent)
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
            <p className="text-xs text-gray-600 mb-10">{tx.updated}</p>
            <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
              {tx.sections.map((s) => (
                <section key={s.title}>
                  <h2 className="text-lg font-semibold text-white mb-3">{s.title}</h2>
                  {Array.isArray(s.content) ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {s.content.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className="text-gray-400">{s.content}</p>
                  )}
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="h-8 w-56 rounded bg-gray-800/70" />
            <div className="h-3 w-32 rounded bg-gray-800/50" />
            <div className="space-y-6 pt-6">
              <div className="h-20 rounded bg-gray-900/60" />
              <div className="h-20 rounded bg-gray-900/60" />
              <div className="h-20 rounded bg-gray-900/60" />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
