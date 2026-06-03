/**
 * Apple App Store IAP pricing helpers (formatters, region builder, locale sort).
 * Territory prices: pricingRegionsData.ts (ASC export tiers 9, 13 & 16).
 */

import type { Lang } from '../context/LanguageContext'

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
  | 'huf'
  | 'brl'
  | 'php'
  | 'tzs'

export interface PricingRegion {
  id: string
  labelEn: string
  localizedNames: Partial<Record<Lang, string>>
  tiers: TierPrices
  format: ApplePriceFormat
}

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
  huf: (n) => `${Math.round(n).toLocaleString('hu-HU')} Ft`,
  brl: (n) => `R$${formatCommaDecimal(n, 2)}`,
  php: (n) => `₱${n.toFixed(2)}`,
  tzs: (n) => `TZS ${Math.round(n).toLocaleString('en-US')}`,
}

function formatThousandsDot(value: number, fractionDigits: number): string {
  const [intPart, frac] = value.toFixed(fractionDigits).split('.')
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return fractionDigits > 0 && frac ? `${grouped},${frac}` : grouped
}

function formatCommaDecimal(value: number, fractionDigits: number): string {
  return value.toFixed(fractionDigits).replace('.', ',')
}

export function region(
  id: string,
  labelEn: string,
  tiers: TierPrices,
  format: ApplePriceFormat,
  opts?: { localizedNames?: Partial<Record<Lang, string>> },
): PricingRegion {
  return {
    id,
    labelEn,
    localizedNames: opts?.localizedNames ?? {},
    tiers,
    format,
  }
}

const CREDITS = { starter: 3, middle: 5, power: 8 } as const

/** US & Canada list pre-tax prices; App Store adds tax at checkout. */
const TAX_EXCLUDED_AT_CHECKOUT = new Set(['us', 'ca'])

export function regionPricesIncludeTax(regionId: string): boolean {
  return !TAX_EXCLUDED_AT_CHECKOUT.has(regionId)
}

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
  'tzs',
  'kzt',
])

export function regionDisplayName(regionDef: PricingRegion, lang: Lang): string {
  return (
    regionDef.localizedNames[lang] ??
    regionDef.localizedNames.en ??
    regionDef.labelEn
  )
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

export function sortRegionsForLang(
  lang: Lang,
  regions: PricingRegion[],
  priorityIds: string[] = [],
): PricingRegion[] {
  const priority = priorityIds
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
