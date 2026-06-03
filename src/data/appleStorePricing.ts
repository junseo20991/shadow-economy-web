/**
 * Apple App Store IAP customer prices — 175 ASC territories (tier 9 export).
 * Regenerate: node scripts/generate-asc-regions.mjs
 *
 * https://help.apple.com/app-store-connect/#/dev8a18f9b8b
 */

export type { TierPrices, ApplePriceFormat, PricingRegion } from './appleStorePricingCore'
export {
  region,
  regionDisplayName,
  formatApplePrice,
  formatPackPrice,
  formatPerReportPrice,
  sortRegionsForLang,
} from './appleStorePricingCore'

export {
  PRICING_REGION_IDS,
  PRICING_REGIONS,
  type PricingRegionId,
} from './pricingRegionsData'

import type { Lang } from '../context/LanguageContext'
import { PRICING_REGIONS } from './pricingRegionsData'
import type { PricingRegionId } from './pricingRegionsData'

/** Default storefront when the user has not picked a region yet. */
export const LANG_DEFAULT_REGION: Record<Lang, PricingRegionId> = {
  en: 'us',
  ko: 'kr',
  ja: 'jp',
  zh: 'cn',
  es: 'mx',
  sv: 'se',
  fr: 'fr',
  de: 'de',
  ru: 'ru',
  ar: 'sa',
  pt: 'pt',
  it: 'it',
  nl: 'netherlands',
  id: 'id',
}

/** Storefronts listed first in the region picker for each UI language. */
export const LANG_REGION_PRIORITY: Record<Lang, PricingRegionId[]> = {
  en: ['us', 'gb', 'ca', 'nz', 'au', 'ireland'],
  ko: ['kr'],
  ja: ['jp'],
  zh: ['cn', 'hk', 'tw', 'sg', 'macau'],
  es: ['mx', 'es', 'argentina', 'cl', 'co', 'pe', 'us'],
  sv: ['se', 'no', 'dk', 'finland'],
  fr: ['fr', 'belgium', 'luxembourg', 'ch', 'ca', 'senegal', 'ivory_coast'],
  de: ['de', 'at', 'ch', 'luxembourg'],
  ru: ['ru', 'kz', 'ukraine', 'belarus'],
  ar: ['sa', 'ae', 'eg', 'qa', 'kuwait', 'jordan', 'lebanon', 'morocco', 'algeria', 'oman', 'iraq', 'yemen', 'bahrain'],
  pt: ['pt', 'br', 'angola', 'mozambique'],
  it: ['it', 'ch'],
  nl: ['netherlands', 'belgium', 'luxembourg'],
  id: ['id', 'sg', 'my'],
}

const LEGACY_REGION_IDS: Record<string, PricingRegionId> = {
  eu: 'de',
  bg: 'bulgaria',
  hr: 'croatia',
}

export const PRICING_REGION_BY_ID = Object.fromEntries(
  PRICING_REGIONS.map((r) => [r.id, r]),
) as Record<PricingRegionId, (typeof PRICING_REGIONS)[number]>

export function readStoredRegionId(): PricingRegionId | null {
  try {
    const raw = localStorage.getItem('pricingRegion')
    if (!raw) return null
    const mapped = LEGACY_REGION_IDS[raw] ?? raw
    if (mapped in PRICING_REGION_BY_ID) return mapped as PricingRegionId
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
