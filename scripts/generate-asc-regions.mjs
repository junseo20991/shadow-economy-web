/**
 * Generates src/data/pricingRegionsData.ts from scripts/asc-tier9-export.txt
 * Run: node scripts/generate-asc-regions.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import countries from 'i18n-iso-countries'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const UI_LANGS = ['en', 'ko', 'ja', 'zh', 'es', 'sv', 'fr', 'de', 'ru', 'ar', 'pt', 'it', 'nl', 'id']

for (const code of UI_LANGS) {
  const mod = await import(`i18n-iso-countries/langs/${code}.json`, { with: { type: 'json' } })
  countries.registerLocale(mod.default)
}

/** Region slug → ISO 3166-1 alpha-2 (two-letter ids use uppercase id as ISO). */
const REGION_ISO = {
  greece: 'GR',
  netherlands: 'NL',
  latvia: 'LV',
  luxembourg: 'LU',
  lithuania: 'LT',
  malta: 'MT',
  belgium: 'BE',
  bosnia: 'BA',
  bulgaria: 'BG',
  serbia: 'RS',
  slovakia: 'SK',
  slovenia: 'SI',
  ireland: 'IE',
  estonia: 'EE',
  kosovo: 'XK',
  croatia: 'HR',
  cyprus: 'CY',
  finland: 'FI',
  ghana: 'GH',
  gabon: 'GA',
  guyana: 'GY',
  gambia: 'GM',
  guatemala: 'GT',
  grenada: 'GD',
  guinea_bissau: 'GW',
  namibia: 'NA',
  nauru: 'NR',
  nepal: 'NP',
  niger: 'NE',
  nicaragua: 'NI',
  dominican_republic: 'DO',
  dominica: 'DM',
  laos: 'LA',
  liberia: 'LR',
  lebanon: 'LB',
  rwanda: 'RW',
  libya: 'LY',
  madagascar: 'MG',
  macau: 'MO',
  malawi: 'MW',
  mali: 'ML',
  morocco: 'MA',
  mauritius: 'MU',
  mauritania: 'MR',
  mozambique: 'MZ',
  montenegro: 'ME',
  montserrat: 'MS',
  moldova: 'MD',
  maldives: 'MV',
  mongolia: 'MN',
  myanmar: 'MM',
  micronesia: 'FM',
  vanuatu: 'VU',
  bahrain: 'BH',
  barbados: 'BB',
  bahamas: 'BS',
  bermuda: 'BM',
  benin: 'BJ',
  venezuela: 'VE',
  belarus: 'BY',
  belize: 'BZ',
  botswana: 'BW',
  bolivia: 'BO',
  burkina_faso: 'BF',
  bhutan: 'BT',
  north_macedonia: 'MK',
  brunei: 'BN',
  sao_tome: 'ST',
  senegal: 'SN',
  seychelles: 'SC',
  saint_lucia: 'LC',
  saint_vincent: 'VC',
  saint_kitts: 'KN',
  solomon_islands: 'SB',
  suriname: 'SR',
  sri_lanka: 'LK',
  sierra_leone: 'SL',
  armenia: 'AM',
  argentina: 'AR',
  azerbaijan: 'AZ',
  afghanistan: 'AF',
  albania: 'AL',
  algeria: 'DZ',
  angola: 'AO',
  antigua: 'AG',
  anguilla: 'AI',
  eswatini: 'SZ',
  ecuador: 'EC',
  el_salvador: 'SV',
  british_virgin_islands: 'VG',
  yemen: 'YE',
  oman: 'OM',
  honduras: 'HN',
  jordan: 'JO',
  uganda: 'UG',
  uruguay: 'UY',
  uzbekistan: 'UZ',
  ukraine: 'UA',
  iraq: 'IQ',
  jamaica: 'JM',
  zambia: 'ZM',
  georgia: 'GE',
  zimbabwe: 'ZW',
  chad: 'TD',
  cameroon: 'CM',
  cape_verde: 'CV',
  cambodia: 'KH',
  kenya: 'KE',
  cayman_islands: 'KY',
  costa_rica: 'CR',
  ivory_coast: 'CI',
  congo: 'CG',
  dr_congo: 'CD',
  kuwait: 'KW',
  kyrgyzstan: 'KG',
  tajikistan: 'TJ',
  tanzania: 'TZ',
  turks_caicos: 'TC',
  tonga: 'TO',
  turkmenistan: 'TM',
  tunisia: 'TN',
  trinidad: 'TT',
  panama: 'PA',
  paraguay: 'PY',
  papua_new_guinea: 'PG',
  palau: 'PW',
  fiji: 'FJ',
}

function isoForRegionId(id) {
  if (REGION_ISO[id]) return REGION_ISO[id]
  if (id.length === 2) return id.toUpperCase()
  throw new Error(`No ISO code for region id: ${id}`)
}

function buildLocalizedNames(regionId, koLabel, manual = {}) {
  const iso = isoForRegionId(regionId)
  const names = {}
  for (const lang of UI_LANGS) {
    if (lang === 'ko') {
      names.ko = koLabel
      continue
    }
    const fromLib = countries.getName(iso, lang)
    if (fromLib) names[lang] = fromLib
  }
  const en = countries.getName(iso, 'en')
  if (en) names.en = en
  return { ...names, ...manual }
}

const CURRENCY_FORMAT = {
  USD: 'usd',
  EUR: 'eur',
  GBP: 'gbp',
  CAD: 'cad',
  AUD: 'aud',
  NZD: 'nzd',
  JPY: 'jpy',
  CNY: 'cny',
  KRW: 'krw',
  HKD: 'hkd',
  TWD: 'twd',
  SGD: 'sgd',
  IDR: 'idr',
  INR: 'inr',
  RUB: 'rub',
  TRY: 'try',
  SAR: 'sar',
  AED: 'aed',
  PLN: 'pln',
  THB: 'thb',
  VND: 'vnd',
  PHP: 'php',
  CZK: 'czk',
  RON: 'ron',
  MYR: 'myr',
  NGN: 'ngn',
  EGP: 'egp',
  ILS: 'ils',
  ZAR: 'zar',
  DKK: 'dkk',
  CLP: 'clp',
  COP: 'cop',
  PEN: 'pen',
  PKR: 'pkr',
  QAR: 'qar',
  KZT: 'kzt',
  HUF: 'huf',
  BRL: 'brl',
  CHF: 'chf',
  SEK: 'sek',
  NOK: 'nok',
  MXN: 'mxn',
  TZS: 'tzs',
}

/** Korean ASC label → [id, English label, extra localizedNames] */
const KO_META = {
  그리스: ['greece', 'Greece'],
  네덜란드: ['netherlands', 'Netherlands', { nl: 'Nederland' }],
  노르웨이: ['no', 'Norway', { sv: 'Norge' }],
  독일: ['de', 'Germany', { de: 'Deutschland' }],
  라트비아: ['latvia', 'Latvia'],
  룩셈부르크: ['luxembourg', 'Luxembourg'],
  리투아니아: ['lithuania', 'Lithuania'],
  몰타: ['malta', 'Malta'],
  벨기에: ['belgium', 'Belgium', { fr: 'Belgique', nl: 'België' }],
  '보스니아 헤르체고비나': ['bosnia', 'Bosnia and Herzegovina'],
  불가리아: ['bulgaria', 'Bulgaria'],
  세르비아: ['serbia', 'Serbia'],
  스웨덴: ['se', 'Sweden', { sv: 'Sverige' }],
  스페인: ['es', 'Spain', { es: 'España' }],
  슬로바키아: ['slovakia', 'Slovakia'],
  슬로베니아: ['slovenia', 'Slovenia'],
  아일랜드: ['ireland', 'Ireland'],
  에스토니아: ['estonia', 'Estonia'],
  영국: ['gb', 'United Kingdom'],
  오스트리아: ['at', 'Austria', { de: 'Österreich' }],
  이탈리아: ['it', 'Italy', { it: 'Italia' }],
  코소보: ['kosovo', 'Kosovo'],
  크로아티아: ['croatia', 'Croatia'],
  키프로스: ['cyprus', 'Cyprus'],
  포르투갈: ['pt', 'Portugal'],
  프랑스: ['fr', 'France'],
  핀란드: ['finland', 'Finland', { sv: 'Finland' }],
  미국: ['us', 'United States'],
  가나: ['ghana', 'Ghana'],
  가봉: ['gabon', 'Gabon'],
  가이아나: ['guyana', 'Guyana'],
  감비아: ['gambia', 'Gambia'],
  과테말라: ['guatemala', 'Guatemala', { es: 'Guatemala' }],
  그레나다: ['grenada', 'Grenada'],
  기니비사우: ['guinea_bissau', 'Guinea-Bissau'],
  나미비아: ['namibia', 'Namibia'],
  나우루: ['nauru', 'Nauru'],
  나이지리아: ['ng', 'Nigeria'],
  '남아프리카 공화국': ['za', 'South Africa'],
  네팔: ['nepal', 'Nepal'],
  뉴질랜드: ['nz', 'New Zealand'],
  니제르: ['niger', 'Niger'],
  니카라과: ['nicaragua', 'Nicaragua', { es: 'Nicaragua' }],
  대만: ['tw', 'Taiwan', { zh: '台灣' }],
  대한민국: ['kr', 'Korea, Republic of', { ko: '대한민국' }],
  덴마크: ['dk', 'Denmark'],
  '도미니카 공화국': ['dominican_republic', 'Dominican Republic', { es: 'República Dominicana' }],
  도미니카: ['dominica', 'Dominica'],
  라오스: ['laos', 'Laos'],
  라이베리아: ['liberia', 'Liberia'],
  러시아: ['ru', 'Russia', { ru: 'Россия' }],
  레바논: ['lebanon', 'Lebanon', { ar: 'لبنان' }],
  루마니아: ['ro', 'Romania'],
  르완다: ['rwanda', 'Rwanda'],
  리비아: ['libya', 'Libya', { ar: 'ليبيا' }],
  마다가스카르: ['madagascar', 'Madagascar'],
  마카오: ['macau', 'Macau', { zh: '澳門' }],
  말라위: ['malawi', 'Malawi'],
  말레이시아: ['my', 'Malaysia', { id: 'Malaysia' }],
  말리: ['mali', 'Mali'],
  멕시코: ['mx', 'Mexico', { es: 'México' }],
  모로코: ['morocco', 'Morocco', { ar: 'المغرب' }],
  모리셔스: ['mauritius', 'Mauritius'],
  모리타니: ['mauritania', 'Mauritania'],
  모잠비크: ['mozambique', 'Mozambique', { pt: 'Moçambique' }],
  몬테네그로: ['montenegro', 'Montenegro'],
  몬트세랫: ['montserrat', 'Montserrat'],
  몰도바: ['moldova', 'Moldova'],
  몰디브: ['maldives', 'Maldives'],
  몽골: ['mongolia', 'Mongolia'],
  미얀마: ['myanmar', 'Myanmar'],
  미크로네시아: ['micronesia', 'Micronesia'],
  바누아투: ['vanuatu', 'Vanuatu'],
  바레인: ['bahrain', 'Bahrain', { ar: 'البحرين' }],
  바베이도스: ['barbados', 'Barbados'],
  바하마: ['bahamas', 'Bahamas'],
  버뮤다: ['bermuda', 'Bermuda'],
  베냉: ['benin', 'Benin'],
  베네수엘라: ['venezuela', 'Venezuela', { es: 'Venezuela' }],
  베트남: ['vn', 'Vietnam'],
  벨라루스: ['belarus', 'Belarus'],
  벨리즈: ['belize', 'Belize'],
  보츠와나: ['botswana', 'Botswana'],
  볼리비아: ['bolivia', 'Bolivia', { es: 'Bolivia' }],
  부르키나파소: ['burkina_faso', 'Burkina Faso'],
  부탄: ['bhutan', 'Bhutan'],
  북마케도니아: ['north_macedonia', 'North Macedonia'],
  브라질: ['br', 'Brazil', { pt: 'Brasil' }],
  브루나이: ['brunei', 'Brunei'],
  사우디아라비아: ['sa', 'Saudi Arabia', { ar: 'المملكة العربية السعودية' }],
  '상투메 프린시페': ['sao_tome', 'São Tomé and Príncipe', { pt: 'São Tomé e Príncipe' }],
  세네갈: ['senegal', 'Senegal'],
  세이셸: ['seychelles', 'Seychelles'],
  '세인트 루시아': ['saint_lucia', 'Saint Lucia'],
  '세인트 빈센트 그레나딘': ['saint_vincent', 'Saint Vincent and the Grenadines'],
  '세인트 키츠 네비스': ['saint_kitts', 'Saint Kitts and Nevis'],
  '솔로몬 제도': ['solomon_islands', 'Solomon Islands'],
  수리남: ['suriname', 'Suriname'],
  스리랑카: ['sri_lanka', 'Sri Lanka'],
  스위스: ['ch', 'Switzerland', { de: 'Schweiz', fr: 'Suisse' }],
  시에라리온: ['sierra_leone', 'Sierra Leone'],
  싱가포르: ['sg', 'Singapore'],
  아랍에미리트: ['ae', 'United Arab Emirates', { ar: 'الإمارات' }],
  아르메니아: ['armenia', 'Armenia'],
  아르헨티나: ['argentina', 'Argentina', { es: 'Argentina' }],
  아이슬란드: ['is', 'Iceland'],
  아제르바이잔: ['azerbaijan', 'Azerbaijan'],
  아프가니스탄: ['afghanistan', 'Afghanistan'],
  알바니아: ['albania', 'Albania'],
  알제리: ['algeria', 'Algeria', { ar: 'الجزائر' }],
  앙골라: ['angola', 'Angola', { pt: 'Angola' }],
  '앤티가 바부다': ['antigua', 'Antigua and Barbuda'],
  앵귈라: ['anguilla', 'Anguilla'],
  에스와티니: ['eswatini', 'Eswatini'],
  에콰도르: ['ecuador', 'Ecuador', { es: 'Ecuador' }],
  엘살바도르: ['el_salvador', 'El Salvador', { es: 'El Salvador' }],
  '영국령 버진 아일랜드': ['british_virgin_islands', 'British Virgin Islands'],
  예멘: ['yemen', 'Yemen', { ar: 'اليمن' }],
  오만: ['oman', 'Oman', { ar: 'عُمان' }],
  오스트레일리아: ['au', 'Australia'],
  온두라스: ['honduras', 'Honduras', { es: 'Honduras' }],
  요르단: ['jordan', 'Jordan', { ar: 'الأردن' }],
  우간다: ['uganda', 'Uganda'],
  우루과이: ['uruguay', 'Uruguay', { es: 'Uruguay' }],
  우즈베키스탄: ['uzbekistan', 'Uzbekistan'],
  우크라이나: ['ukraine', 'Ukraine', { ru: 'Украина' }],
  이라크: ['iraq', 'Iraq', { ar: 'العراق' }],
  이스라엘: ['il', 'Israel'],
  이집트: ['eg', 'Egypt', { ar: 'مصر' }],
  인도: ['in', 'India'],
  인도네시아: ['id', 'Indonesia', { id: 'Indonesia' }],
  일본: ['jp', 'Japan', { ja: '日本' }],
  자메이카: ['jamaica', 'Jamaica'],
  잠비아: ['zambia', 'Zambia'],
  조지아: ['georgia', 'Georgia'],
  '중국 본토': ['cn', 'China mainland', { zh: '中国大陆' }],
  짐바브웨: ['zimbabwe', 'Zimbabwe'],
  차드: ['chad', 'Chad'],
  체코: ['cz', 'Czechia'],
  칠레: ['cl', 'Chile', { es: 'Chile' }],
  카메룬: ['cameroon', 'Cameroon'],
카보베르데: ['cape_verde', 'Cape Verde', { pt: 'Cabo Verde' }],
  카자흐스탄: ['kz', 'Kazakhstan'],
  카타르: ['qa', 'Qatar', { ar: 'قطر' }],
  캄보디아: ['cambodia', 'Cambodia'],
  캐나다: ['ca', 'Canada'],
  케냐: ['kenya', 'Kenya'],
  '케이맨 제도': ['cayman_islands', 'Cayman Islands'],
  코스타리카: ['costa_rica', 'Costa Rica', { es: 'Costa Rica' }],
  코트디부아르: ['ivory_coast', "Côte d'Ivoire"],
  콜롬비아: ['co', 'Colombia', { es: 'Colombia' }],
  '콩고 공화국': ['congo', 'Congo, Republic of the'],
  '콩고 민주 공화국': ['dr_congo', 'Congo, Democratic Republic of the'],
  쿠웨이트: ['kuwait', 'Kuwait', { ar: 'الكويت' }],
  키르기스스탄: ['kyrgyzstan', 'Kyrgyzstan'],
  타지키스탄: ['tajikistan', 'Tajikistan'],
  탄자니아: ['tanzania', 'Tanzania'],
  태국: ['th', 'Thailand'],
  '터크스 케이커스 제도': ['turks_caicos', 'Turks and Caicos Islands'],
  통가: ['tonga', 'Tonga'],
  투르크메니스탄: ['turkmenistan', 'Turkmenistan'],
  튀니지: ['tunisia', 'Tunisia', { ar: 'تونس' }],
  튀르키예: ['tr', 'Türkiye'],
  '트리니다드 토바고': ['trinidad', 'Trinidad and Tobago'],
  파나마: ['panama', 'Panama', { es: 'Panamá' }],
  파라과이: ['paraguay', 'Paraguay', { es: 'Paraguay' }],
  파키스탄: ['pk', 'Pakistan'],
  파푸아뉴기니: ['papua_new_guinea', 'Papua New Guinea'],
  팔라우: ['palau', 'Palau'],
  페루: ['pe', 'Peru', { es: 'Perú' }],
  폴란드: ['pl', 'Poland'],
  피지: ['fiji', 'Fiji'],
  필리핀: ['ph', 'Philippines'],
  헝가리: ['hu', 'Hungary'],
  홍콩: ['hk', 'Hong Kong', { zh: '香港' }],
}

const INTEGER_FORMATS = new Set([
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

function normalizePrice(value, format) {
  if (INTEGER_FORMATS.has(format)) return Math.round(value)
  return Math.round(value * 100) / 100
}

function buildTiers(t9, t13, t16, format) {
  return [normalizePrice(t9, format), normalizePrice(t13, format), normalizePrice(t16, format)]
}

function parseTierFile(filename) {
  const raw = fs.readFileSync(path.join(__dirname, filename), 'utf8')
  const map = new Map()
  for (const line of raw.split('\n')) {
    const t = line.trim()
    if (!t.includes('|')) continue
    const parts = t.split('|').map((s) => s.trim())
    if (parts.length < 3) continue
    const [ko, currency, priceStr] = parts
    if (!KO_META[ko]) throw new Error(`Missing KO_META for ${ko} in ${filename}`)
    const format = CURRENCY_FORMAT[currency]
    if (!format) throw new Error(`Unknown currency: ${currency} (${ko}) in ${filename}`)
    const price = parseFloat(priceStr.replace(/,/g, ''))
    map.set(ko, { price, currency, format })
  }
  return map
}

function parseExport() {
  const tier9Map = parseTierFile('asc-tier9-export.txt')
  const tier13Map = parseTierFile('asc-tier13-export.txt')
  const tier16Map = parseTierFile('asc-tier16-export.txt')
  if (tier9Map.size !== 175) throw new Error(`Expected 175 tier-9 rows, got ${tier9Map.size}`)
  if (tier13Map.size !== 175) throw new Error(`Expected 175 tier-13 rows, got ${tier13Map.size}`)
  if (tier16Map.size !== 175) throw new Error(`Expected 175 tier-16 rows, got ${tier16Map.size}`)

  const rows = []
  for (const [ko, meta] of Object.entries(KO_META)) {
    const t9row = tier9Map.get(ko)
    const t13row = tier13Map.get(ko)
    const t16row = tier16Map.get(ko)
    if (!t9row) throw new Error(`Missing tier-9 price for: ${ko}`)
    if (!t13row) throw new Error(`Missing tier-13 price for: ${ko}`)
    if (!t16row) throw new Error(`Missing tier-16 price for: ${ko}`)
    rows.push({
      ko,
      t9: t9row.price,
      t13: t13row.price,
      t16: t16row.price,
      format: t9row.format,
      meta,
    })
  }
  return rows
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function emitLocalized(regionId, ko, manual = {}) {
  const names = buildLocalizedNames(regionId, ko, manual)
  const entries = Object.entries(names)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: '${esc(v)}'`)
  if (entries.length === 0) return ''
  return `, { localizedNames: { ${entries.join(', ')} } }`
}

const rows = parseExport()
if (rows.length !== 175) throw new Error(`Expected 175 rows, got ${rows.length}`)

const ids = rows.map((r) => r.meta[0])
if (new Set(ids).size !== ids.length) {
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i)
  throw new Error(`Duplicate ids: ${[...new Set(dup)].join(', ')}`)
}

const regionLines = rows
  .sort((a, b) => a.meta[1].localeCompare(b.meta[1]))
  .map((r) => {
    const [id, labelEn, extra = {}] = r.meta
    const tiers = buildTiers(r.t9, r.t13, r.t16, r.format)
    const loc = emitLocalized(id, r.ko, extra)
    return `  region('${id}', '${esc(labelEn)}', [${tiers.join(', ')}], '${r.format}'${loc}),`
  })

const idUnion = ids.map((id) => `  | '${id}'`).join('\n')

const out = `/** AUTO-GENERATED by scripts/generate-asc-regions.mjs — do not edit by hand
 * Tiers 9 / 13 / 16: App Store Connect export (Observer 3cr / Explorer 5cr / Analyst 8cr).
 */
import { region, type PricingRegion } from './appleStorePricingCore'

export const PRICING_REGION_IDS = [
${ids.map((id) => `  '${id}',`).join('\n')}
] as const

export type PricingRegionId = (typeof PRICING_REGION_IDS)[number]

export const PRICING_REGIONS: PricingRegion[] = [
${regionLines.join('\n')}
]
`

fs.writeFileSync(path.join(root, 'src/data/pricingRegionsData.ts'), out)
console.log(`Wrote ${rows.length} regions to src/data/pricingRegionsData.ts`)
