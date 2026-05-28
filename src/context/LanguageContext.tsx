import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'sv'

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'ES' },
  { code: 'sv', label: 'SV' },
]

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: 'en', setLang: () => {} })

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && ['en', 'ko', 'ja', 'zh', 'es', 'sv'].includes(saved)) return saved
  } catch {
    // Some private or hardened browser contexts block storage access.
  }
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('ja')) return 'ja'
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('sv')) return 'sv'
  return 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      // Ignore storage failures and keep the in-memory language selection.
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
