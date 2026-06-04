import type { Lang } from '../context/LanguageContext'

/** Header control label: the word “language” in each UI locale (not “idiom”, “bahasa”, etc.). */
export const LANGUAGE_MENU_LABEL: Record<Lang, string> = {
  en: 'Language',
  ko: '언어',
  ja: '言語',
  zh: '语言',
  es: 'Idioma',
  sv: 'Språk',
  fr: 'Langue',
  de: 'Sprache',
  ru: 'Язык',
  ar: 'اللغة',
  pt: 'Idioma',
  it: 'Lingua',
  nl: 'Taal',
  id: 'Bahasa',
}
