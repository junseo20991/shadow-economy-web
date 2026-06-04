import type { Lang } from '../context/LanguageContext'

const NATIVE_LANGUAGE_WORD: Record<Lang, string> = {
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

/** Button label: native word + English “Language” so non-readers can find the control (e.g. 语言 / Language). */
export const LANGUAGE_MENU_LABEL: Record<Lang, string> = Object.fromEntries(
  (Object.entries(NATIVE_LANGUAGE_WORD) as [Lang, string][]).map(([lang, native]) => [
    lang,
    lang === 'en' ? native : `${native} / Language`,
  ]),
) as Record<Lang, string>
