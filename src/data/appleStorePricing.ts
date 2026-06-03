/**
 * Apple App Store IAP customer prices for legacy tiers 9 / 13 / 16
 * (US base: $8.99 / $12.99 / $15.99).
 *
 * Sources: equinux App Store Price Matrix (storefront customer prices);
 * Apple Korea (KRW) equalization from JPY tier ratios + Apple KRW price conventions
 * (developer.apple.com/kr/in-app-purchase); EUR uses USD numerals per product policy.
 */

import type { Lang } from '../context/LanguageContext'

export type PricingRegionId =
  | 'us'
  | 'ca'
  | 'mx'
  | 'au'
  | 'nz'
  | 'jp'
  | 'cn'
  | 'kr'
  | 'hk'
  | 'tw'
  | 'sg'
  | 'id'
  | 'in'
  | 'gb'
  | 'eu'
  | 'se'
  | 'no'
  | 'ch'
  | 'ru'
  | 'tr'
  | 'sa'
  | 'ae'
  | 'pl'
  | 'th'
  | 'vn'
  | 'ph'
  | 'cz'
  | 'ro'
  | 'my'
  | 'ng'
  | 'eg'
  | 'il'
  | 'za'
  | 'dk'
  | 'cl'
  | 'co'
  | 'pe'
  | 'pk'
  | 'qa'
  | 'kz'
  | 'bg'
  | 'hu'
  | 'hr'
  | 'br'
  | 'is'

/** [Observer tier 9, Explorer tier 13, Analyst tier 16] */
export type TierPrices = readonly [number, number, number]

export type ApplePriceFormat =
  | 'usd'
  | 'cad'
  | 'mxn'
  | 'aud'
  | 'nzd'
  | 'jpy'
  | 'cny'
  | 'krw'
  | 'sgd'
  | 'hkd'
  | 'twd'
  | 'idr'
  | 'inr'
  | 'rub'
  | 'try'
  | 'gbp'
  | 'sek'
  | 'nok'
  | 'chf'
  | 'eur'
  | 'pln'
  | 'thb'
  | 'vnd'
  | 'sar'
  | 'aed'
  | 'czk'
  | 'ron'
  | 'myr'
  | 'ngn'
  | 'egp'
  | 'ils'
  | 'zar'
  | 'dkk'
  | 'clp'
  | 'cop'
  | 'pen'
  | 'pkr'
  | 'qar'
  | 'kzt'
  | 'bgn'
  | 'huf'
  | 'hrk'
  | 'brl'
  | 'php'

export interface PricingRegion {
  id: PricingRegionId
  labelEn: string
  localizedNames: Partial<Record<Lang, string>>
  /** When true, tiers are USD numerals displayed with € (8.99 / 12.99 / 15.99). */
  eurUsdParity: boolean
  tiers: TierPrices
  format: ApplePriceFormat
}

const USD_TIERS: TierPrices = [8.99, 12.99, 15.99]

/** Korea KRW: Apple auto-equalized from US $8.99 / $12.99 / $15.99 (May 2026 tier grid). */
const KR_TIERS: TierPrices = [12900, 18900, 22900]

const FORMATTERS: Record<ApplePriceFormat, (amount: number) => string> = {
  usd: (n) => `$${n.toFixed(2)}`,
  cad: (n) => `$${n.toFixed(2)}`,
  mxn: (n) => `$${n.toFixed(2)}`,
  aud: (n) => `$${n.toFixed(2)}`,
  nzd: (n) => `$${n.toFixed(2)}`,
  jpy: (n) => `¥${Math.round(n).toLocaleString('en-US')}`,
  cny: (n) => `¥${n.toFixed(2)}`,
  krw: (n) => `₩${Math.round(n).toLocaleString('ko-KR')}`,
  sgd: (n) => `S$${n.toFixed(2)}`,
  hkd: (n) => `HK$${n.toFixed(2)}`,
  twd: (n) => `NT$${Math.round(n).toLocaleString('en-US')}`,
  idr: (n) => `Rp${formatThousandsDot(Math.round(n), 0)}`,
  inr: (n) => `₹${Math.round(n).toLocaleString('en-IN')}`,
  rub: (n) => `${Math.round(n).toLocaleString('ru-RU')} ₽`,
  try: (n) => `${formatCommaDecimal(n, 2)} TL`,
  gbp: (n) => `£${n.toFixed(2)}`,
  sek: (n) => `${formatCommaDecimal(n, 2)} kr`,
  nok: (n) => `${formatCommaDecimal(n, 2)} kr`,
  chf: (n) => `CHF ${n.toFixed(2)}`,
  eur: (n) => `€${n.toFixed(2)}`,
  pln: (n) => `${formatCommaDecimal(n, 2)} zł`,
  thb: (n) => `฿${n.toFixed(2)}`,
  vnd: (n) => `${formatThousandsDot(Math.round(n), 0)}đ`,
  sar: (n) => `${n.toFixed(2)} SAR`,
  aed: (n) => `${n.toFixed(2)} AED`,
  czk: (n) => `${formatCommaDecimal(n, 2)} Kč`,
  ron: (n) => `${formatCommaDecimal(n, 2)} lei`,
  myr: (n) => `RM${n.toFixed(2)}`,
  ngn: (n) => `₦${Math.round(n).toLocaleString('en-US')}`,
  egp: (n) => `EGP${n.toFixed(2)}`,
  ils: (n) => `₪${n.toFixed(2)}`,
  zar: (n) => `R${n.toFixed(2)}`,
  dkk: (n) => `${formatCommaDecimal(n, 2)} kr`,
  clp: (n) => `$${formatThousandsDot(Math.round(n), 0)}`,
  cop: (n) => `$${formatThousandsDot(Math.round(n), 0)}`,
  pen: (n) => `S/ ${n.toFixed(2)}`,
  pkr: (n) => `Rs ${Math.round(n).toLocaleString('en-US')}`,
  qar: (n) => `${n.toFixed(2)} QAR`,
  kzt: (n) => `${formatThousandsDot(n, 2)}₸`,
  bgn: (n) => `${formatCommaDecimal(n, 2)} лв`,
  huf: (n) => `${Math.round(n).toLocaleString('hu-HU')} Ft`,
  hrk: (n) => `${formatCommaDecimal(n, 2)} kn`,
  brl: (n) => `R$${formatCommaDecimal(n, 2)}`,
  php: (n) => `₱${n.toFixed(2)}`,
}

function formatThousandsDot(value: number, fractionDigits: number): string {
  const [intPart, frac] = value.toFixed(fractionDigits).split('.')
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return fractionDigits > 0 && frac ? `${grouped},${frac}` : grouped
}

function formatCommaDecimal(value: number, fractionDigits: number): string {
  return value.toFixed(fractionDigits).replace('.', ',')
}

function region(
  id: PricingRegionId,
  labelEn: string,
  tiers: TierPrices,
  format: ApplePriceFormat,
  opts?: { eurUsdParity?: boolean; localizedNames?: Partial<Record<Lang, string>> },
): PricingRegion {
  const eurUsdParity = opts?.eurUsdParity ?? false
  return {
    id,
    labelEn,
    localizedNames: opts?.localizedNames ?? {},
    eurUsdParity,
    tiers: eurUsdParity ? USD_TIERS : tiers,
    format: eurUsdParity ? 'eur' : format,
  }
}

/** Apple matrix customer prices per storefront */
export const PRICING_REGIONS: PricingRegion[] = [
  region('us', 'United States', USD_TIERS, 'usd'),
  region('ca', 'Canada', [11.99, 17.99, 21.99], 'cad'),
  region('mx', 'Mexico', [179, 249, 299], 'mxn', { localizedNames: { es: 'México' } }),
  region('au', 'Australia', [13.99, 19.99, 24.99], 'aud'),
  region('nz', 'New Zealand', [12.99, 18.99, 23.99], 'nzd'),
  region('jp', 'Japan', [1080, 1600, 1900], 'jpy', { localizedNames: { ja: '日本' } }),
  region('cn', 'China mainland', [60, 88, 108], 'cny', { localizedNames: { zh: '中国大陆' } }),
  region('kr', 'Korea, Republic of', KR_TIERS, 'krw', { localizedNames: { ko: '대한민국' } }),
  region('hk', 'Hong Kong', [68, 98, 123], 'hkd', { localizedNames: { zh: '香港' } }),
  region('tw', 'Taiwan', [270, 390, 490], 'twd', { localizedNames: { zh: '台灣' } }),
  region('sg', 'Singapore', [12.98, 17.98, 22.98], 'sgd'),
  region('id', 'Indonesia', [129000, 189000, 239000], 'idr', { localizedNames: { id: 'Indonesia' } }),
  region('in', 'India', [700, 1000, 1250], 'inr'),
  region('gb', 'United Kingdom', USD_TIERS, 'gbp'),
  region('eu', 'Eurozone', USD_TIERS, 'eur', {
    eurUsdParity: true,
    localizedNames: {
      de: 'Eurozone',
      fr: 'Zone euro',
      it: 'Zona euro',
      nl: 'Eurozone',
      pt: 'Zona Euro',
      es: 'Zona euro',
    },
  }),
  region('se', 'Sweden', [95, 139, 169], 'sek', { localizedNames: { sv: 'Sverige' } }),
  region('no', 'Norway', [99, 139, 169], 'nok'),
  region('ch', 'Switzerland', [9, 13, 16], 'chf', { localizedNames: { de: 'Schweiz', fr: 'Suisse' } }),
  region('ru', 'Russia', [699, 999, 1190], 'rub', { localizedNames: { ru: 'Россия' } }),
  region('tr', 'Türkiye', [29.99, 47.99, 57.99], 'try'),
  region('sa', 'Saudi Arabia', [32.99, 47.99, 59.99], 'sar', {
    localizedNames: { ar: 'المملكة العربية السعودية' },
  }),
  region('ae', 'United Arab Emirates', [32.99, 47.99, 59.99], 'aed', { localizedNames: { ar: 'الإمارات' } }),
  region('pl', 'Poland', [42.99, 59.99, 74.99], 'pln'),
  region('th', 'Thailand', [319, 459, 559], 'thb'),
  region('vn', 'Vietnam', [199000, 279000, 349000], 'vnd'),
  region('ph', 'Philippines', [449, 649, 799], 'php'),
  region('cz', 'Czechia', [279, 379, 479], 'czk'),
  region('ro', 'Romania', [44.99, 64.99, 79.99], 'ron'),
  region('my', 'Malaysia', [37.9, 54.9, 64.9], 'myr'),
  region('ng', 'Nigeria', [2700, 3900, 4900], 'ngn'),
  region('eg', 'Egypt', [169.99, 239.99, 299.99], 'egp'),
  region('il', 'Israel', [35.9, 51.9, 63.9], 'ils'),
  region('za', 'South Africa', [139.99, 199.99, 249.99], 'zar'),
  region('dk', 'Denmark', [79, 109, 139], 'dkk'),
  region('cl', 'Chile', [5900, 8500, 10500], 'clp', { localizedNames: { es: 'Chile' } }),
  region('co', 'Colombia', [24900, 37900, 44900], 'cop', { localizedNames: { es: 'Colombia' } }),
  region('pe', 'Peru', [29.9, 42.9, 52.9], 'pen', { localizedNames: { es: 'Perú' } }),
  region('br', 'Brazil', [49.9, 72.9, 89.9], 'brl', { localizedNames: { pt: 'Brasil' } }),
  region('pk', 'Pakistan', [900, 1300, 1600], 'pkr'),
  region('qa', 'Qatar', [32.99, 47.99, 59.99], 'qar'),
  region('kz', 'Kazakhstan', [2990, 4490, 5490], 'kzt'),
  region('bg', 'Bulgaria', [19.99, 27.99, 34.99], 'bgn'),
  region('hu', 'Hungary', [3290, 4790, 5790], 'huf'),
  region('hr', 'Croatia', [79.99, 109.99, 139.99], 'hrk'),
  region('is', 'Iceland', [11.15, 16.11, 19.83], 'usd', { localizedNames: { en: 'Iceland' } }),
]

export const PRICING_REGION_BY_ID = Object.fromEntries(
  PRICING_REGIONS.map((r) => [r.id, r]),
) as Record<PricingRegionId, PricingRegion>

/** Default storefront when the user has not picked a region yet. */
export const LANG_DEFAULT_REGION: Record<Lang, PricingRegionId> = {
  en: 'us',
  ko: 'kr',
  ja: 'jp',
  zh: 'cn',
  es: 'mx',
  sv: 'se',
  fr: 'eu',
  de: 'eu',
  ru: 'ru',
  ar: 'sa',
  pt: 'eu',
  it: 'eu',
  nl: 'eu',
  id: 'id',
}

/**
 * Native-language storefronts shown first in the region picker
 * (then all other regions A–Z by localized name).
 */
export const LANG_REGION_PRIORITY: Record<Lang, PricingRegionId[]> = {
  en: ['us', 'gb', 'ca', 'nz', 'au'],
  ko: ['kr'],
  ja: ['jp'],
  zh: ['cn', 'hk', 'tw', 'sg'],
  es: ['mx', 'eu', 'cl', 'co', 'pe', 'us'],
  sv: ['se', 'no', 'dk'],
  fr: ['eu', 'ch', 'ca'],
  de: ['eu', 'ch'],
  ru: ['ru', 'kz'],
  ar: ['sa', 'ae', 'eg'],
  pt: ['eu', 'br'],
  it: ['eu', 'ch'],
  nl: ['eu'],
  id: ['id', 'sg', 'my'],
}

const CREDITS = { starter: 3, middle: 5, power: 8 } as const

const INTEGER_FORMATS: Set<ApplePriceFormat> = new Set([
  'jpy',
  'krw',
  'twd',
  'idr',
  'inr',
  'rub',
  'ngn',
  'vnd',
  'huf',
  'clp',
  'cop',
  'pkr',
])

export function regionDisplayName(regionDef: PricingRegion, lang: Lang): string {
  return regionDef.localizedNames[lang] ?? regionDef.labelEn
}

export function formatApplePrice(regionDef: PricingRegion, amount: number): string {
  const formatter = FORMATTERS[regionDef.format]
  if (INTEGER_FORMATS.has(regionDef.format)) {
    return formatter(Math.round(amount))
  }
  return formatter(amount)
}

export function formatPackPrice(regionDef: PricingRegion, pack: 'starter' | 'middle' | 'power'): string {
  const idx = pack === 'starter' ? 0 : pack === 'middle' ? 1 : 2
  return formatApplePrice(regionDef, regionDef.tiers[idx])
}

export function formatPerReportPrice(
  regionDef: PricingRegion,
  pack: 'starter' | 'middle' | 'power',
): string {
  const idx = pack === 'starter' ? 0 : pack === 'middle' ? 1 : 2
  const credits = pack === 'starter' ? CREDITS.starter : pack === 'middle' ? CREDITS.middle : CREDITS.power
  const unit = regionDef.tiers[idx] / credits
  if (INTEGER_FORMATS.has(regionDef.format)) {
    return formatApplePrice(regionDef, unit)
  }
  const rounded = Math.round(unit * 100) / 100
  return formatApplePrice(regionDef, rounded)
}

export function sortRegionsForLang(lang: Lang, regions: PricingRegion[]): PricingRegion[] {
  const priority = LANG_REGION_PRIORITY[lang] ?? []
  const rank = new Map(priority.map((id, index) => [id, index]))

  return [...regions].sort((a, b) => {
    const aRank = rank.get(a.id)
    const bRank = rank.get(b.id)
    if (aRank !== undefined && bRank !== undefined) return aRank - bRank
    if (aRank !== undefined) return -1
    if (bRank !== undefined) return 1
    return regionDisplayName(a, lang).localeCompare(regionDisplayName(b, lang), lang)
  })
}

export function readStoredRegionId(): PricingRegionId | null {
  try {
    const raw = localStorage.getItem('pricingRegion')
    if (raw && raw in PRICING_REGION_BY_ID) return raw as PricingRegionId
  } catch {
    // ignore
  }
  return null
}

export function storeRegionId(id: PricingRegionId): void {
  try {
    localStorage.setItem('pricingRegion', id)
  } catch {
    // ignore
  }
}
