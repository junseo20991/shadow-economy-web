/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'sv' | 'fr' | 'de' | 'ru' | 'ar' | 'pt' | 'it' | 'nl' | 'id'

/** Endonym labels (each language’s name in that language). */
export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'sv', label: 'Svenska' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'id', label: 'Bahasa Indonesia' },
]

const LANGUAGE_CODES = LANGUAGES.map((language) => language.code)

function isLang(value: string | null): value is Lang {
  return !!value && (LANGUAGE_CODES as string[]).includes(value)
}

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: 'en', setLang: () => {} })

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (isLang(saved)) return saved
  } catch {
    // Some private or hardened browser contexts block storage access.
  }
  const nav = navigator.language.toLowerCase()
  const base = nav.split('-')[0]
  if (isLang(base)) return base
  if (nav.startsWith('zh')) return 'zh'
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
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
