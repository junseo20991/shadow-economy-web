import type { Lang } from '../context/LanguageContext'

export type PricingUiStrings = {
  pricingNotice: string
  selectRegion: string
  regionModalTitle: string
  regionModalClose: string
  perReportSuffix: string
}

export const PRICING_UI: Record<Lang, PricingUiStrings> = {
  en: {
    pricingNotice:
      'Prices may differ by country because of exchange rates and value-added tax (VAT) in your region of residence. Our pricing follows Apple App Store regional price guidelines. Select your region below to see prices. In some regions VAT is billed separately, so displayed prices may look lower or higher; that is unrelated to our internal policies.',
    selectRegion: 'Select your region',
    regionModalTitle: 'Choose your region',
    regionModalClose: 'Close',
    perReportSuffix: '/ report',
  },
  ko: {
    pricingNotice:
      '일부 국가에서 가격이 다른 것은 거주 지역의 환율 및 부가가치세(VAT) 영향이 있을 수 있습니다. 본사의 가격 방침은 Apple App Store의 국가/지역별 가격 가이드라인을 참고하였습니다. 아래에서 거주 지역을 선택하여 가격을 확인하십시오. 일부 지역은 부가가치세가 별도로 청구되어 가격이 더 저렴하거나 비싸게 보일 수 있으며, 이는 내부 정책과 무관합니다.',
    selectRegion: '거주 지역 선택',
    regionModalTitle: '국가/지역 선택',
    regionModalClose: '닫기',
    perReportSuffix: '/ 보고서',
  },
  ja: {
    pricingNotice:
      '国によって価格が異なる場合があります。これは居住地域の為替レートや付加価値税（VAT）の影響によることがあります。当社の価格方針は Apple App Store の国・地域別価格ガイドラインに基づいています。下から居住地域を選択して価格をご確認ください。地域によっては VAT が別途請求され、表示価格が安くまたは高く見える場合がありますが、これは当社の内部方針とは無関係です。',
    selectRegion: '居住地域を選択',
    regionModalTitle: '国・地域を選択',
    regionModalClose: '閉じる',
    perReportSuffix: '/ レポート',
  },
  zh: {
    pricingNotice:
      '不同国家/地区的价格可能因您居住地的汇率和增值税（VAT）而有所不同。我们的定价参考 Apple App Store 各国家/地区价格指南。请在下方选择您的居住地以查看价格。部分地区增值税另行收取，显示价格可能显得更低或更高，这与我们的内部政策无关。',
    selectRegion: '选择您的地区',
    regionModalTitle: '选择国家/地区',
    regionModalClose: '关闭',
    perReportSuffix: '/ 报告',
  },
  es: {
    pricingNotice:
      'Los precios pueden variar según el país por el tipo de cambio y el IVA de su región de residencia. Nuestra política de precios sigue las directrices regionales de Apple App Store. Seleccione su región abajo para ver los precios. En algunas regiones el IVA se factura por separado y los precios pueden parecer más bajos o altos; esto no está relacionado con nuestras políticas internas.',
    selectRegion: 'Seleccionar su región',
    regionModalTitle: 'Elegir país o región',
    regionModalClose: 'Cerrar',
    perReportSuffix: '/ informe',
  },
  sv: {
    pricingNotice:
      'Priser kan skilja sig mellan länder på grund av växelkurs och moms (VAT) i din bosättningsregion. Vår prissättning följer Apple App Stores regionala prisriktlinjer. Välj din region nedan för att se priser. I vissa regioner faktureras moms separat, vilket kan göra att priserna verkar lägre eller högre; detta är inte kopplat till vår interna policy.',
    selectRegion: 'Välj din region',
    regionModalTitle: 'Välj land eller region',
    regionModalClose: 'Stäng',
    perReportSuffix: '/ rapport',
  },
  fr: {
    pricingNotice:
      'Les prix peuvent varier selon les pays en raison des taux de change et de la TVA dans votre région de résidence. Notre politique tarifaire suit les lignes directrices régionales de l’Apple App Store. Sélectionnez votre région ci-dessous pour voir les prix. Dans certaines régions, la TVA est facturée séparément, ce qui peut faire paraître les prix plus bas ou plus élevés ; cela n’est pas lié à nos politiques internes.',
    selectRegion: 'Sélectionner votre région',
    regionModalTitle: 'Choisir un pays ou une région',
    regionModalClose: 'Fermer',
    perReportSuffix: '/ rapport',
  },
  de: {
    pricingNotice:
      'Preise können je nach Land aufgrund von Wechselkursen und Mehrwertsteuer (MwSt.) in Ihrer Wohnregion variieren. Unsere Preisgestaltung orientiert sich an den regionalen Preisrichtlinien des Apple App Store. Wählen Sie unten Ihre Region, um Preise anzuzeigen. In einigen Regionen wird die MwSt. separat berechnet, sodass Preise niedriger oder höher erscheinen können; dies steht nicht im Zusammenhang mit unseren internen Richtlinien.',
    selectRegion: 'Region auswählen',
    regionModalTitle: 'Land oder Region wählen',
    regionModalClose: 'Schließen',
    perReportSuffix: '/ Bericht',
  },
  ru: {
    pricingNotice:
      'Цены могут отличаться в зависимости от страны из‑за обменного курса и НДС в вашем регионе проживания. Наша политика цен основана на региональных рекомендациях Apple App Store. Выберите регион ниже, чтобы увидеть цены. В некоторых регионах НДС выставляется отдельно, поэтому цены могут казаться ниже или выше; это не связано с нашей внутренней политикой.',
    selectRegion: 'Выбрать регион',
    regionModalTitle: 'Выбор страны или региона',
    regionModalClose: 'Закрыть',
    perReportSuffix: '/ отчёт',
  },
  ar: {
    pricingNotice:
      'قد تختلف الأسعار حسب البلد بسبب أسعار الصرف وضريبة القيمة المضافة (VAT) في منطقة إقامتك. تتبع سياسة التسعير لدينا إرشادات Apple App Store الإقليمية. اختر منطقتك أدناه لعرض الأسعار. في بعض المناطق يُفوتر ضريبة القيمة المضافة بشكل منفصل، وقد تبدو الأسعار أقل أو أعلى؛ وهذا لا يتعلق بسياساتنا الداخلية.',
    selectRegion: 'اختر منطقتك',
    regionModalTitle: 'اختيار البلد أو المنطقة',
    regionModalClose: 'إغلاق',
    perReportSuffix: '/ تقرير',
  },
  pt: {
    pricingNotice:
      'Os preços podem variar conforme o país devido à taxa de câmbio e ao IVA na sua região de residência. A nossa política de preços segue as diretrizes regionais da Apple App Store. Selecione a sua região abaixo para ver os preços. Em algumas regiões o IVA é cobrado separadamente, pelo que os preços podem parecer mais baixos ou mais altos; isto não está relacionado com as nossas políticas internas.',
    selectRegion: 'Selecionar a sua região',
    regionModalTitle: 'Escolher país ou região',
    regionModalClose: 'Fechar',
    perReportSuffix: '/ relatório',
  },
  it: {
    pricingNotice:
      'I prezzi possono variare per paese a causa dei tassi di cambio e dell’IVA nella tua regione di residenza. La nostra politica dei prezzi segue le linee guida regionali dell’Apple App Store. Seleziona la tua regione qui sotto per vedere i prezzi. In alcune regioni l’IVA è addebitata separatamente e i prezzi possono sembrare più bassi o più alti; ciò non è legato alle nostre politiche interne.',
    selectRegion: 'Seleziona la tua regione',
    regionModalTitle: 'Scegli paese o regione',
    regionModalClose: 'Chiudi',
    perReportSuffix: '/ rapporto',
  },
  nl: {
    pricingNotice:
      'Prijzen kunnen per land verschillen door wisselkoersen en btw in uw woonregio. Ons prijsbeleid volgt de regionale richtlijnen van de Apple App Store. Selecteer hieronder uw regio om prijzen te zien. In sommige regio’s wordt btw apart in rekening gebracht, waardoor prijzen lager of hoger kunnen lijken; dit hangt niet samen met ons intern beleid.',
    selectRegion: 'Selecteer uw regio',
    regionModalTitle: 'Kies land of regio',
    regionModalClose: 'Sluiten',
    perReportSuffix: '/ rapport',
  },
  id: {
    pricingNotice:
      'Harga dapat berbeda menurut negara karena nilai tukar dan PPN (VAT) di wilayah tempat tinggal Anda. Kebijakan harga kami mengikuti panduan harga regional Apple App Store. Pilih wilayah Anda di bawah untuk melihat harga. Di beberapa wilayah PPN ditagih terpisah sehingga harga dapat tampak lebih rendah atau lebih tinggi; hal ini tidak terkait dengan kebijakan internal kami.',
    selectRegion: 'Pilih wilayah Anda',
    regionModalTitle: 'Pilih negara atau wilayah',
    regionModalClose: 'Tutup',
    perReportSuffix: '/ laporan',
  },
}
