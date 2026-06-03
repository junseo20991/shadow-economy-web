import type { Lang } from '../context/LanguageContext'

export type PricingUiStrings = {
  pricingNotice: string
  selectRegion: string
  regionModalTitle: string
  regionModalClose: string
  regionSearchPlaceholder: string
  perReportSuffix: string
  /** Shown next to pack prices when tax is included in the listed price (not US/Canada). */
  taxIncludedLabel: string
}

export const PRICING_UI: Record<Lang, PricingUiStrings> = {
  en: {
    pricingNotice:
      'Our pricing policy is based on Apple App Store regional price guidelines, and for some countries we aim to offer prices that are more favorable to users than App Store policy alone. Prices may differ by country because of exchange rates and value-added tax (VAT) in your region of residence. In some countries, such as the United States and Canada, taxes are added separately at checkout under local policy and law, so listed prices may appear relatively lower than in other countries. In most other countries, the prices shown already include tax. Select your region below to see prices.',
    selectRegion: 'Select your region',
    regionModalTitle: 'Choose your region',
    regionModalClose: 'Close',
    regionSearchPlaceholder: 'Search country or region',
    perReportSuffix: '/ report',
    taxIncludedLabel: '(tax included)',
  },
  ko: {
    pricingNotice:
      '본사의 가격 방침은 Apple App Store의 국가/지역별 가격 가이드라인을 참고하였으며, 일부 국가에 대해서는 App Store 방침보다 더 사용자 친화적인 가격을 제공하고자 하였습니다. 일부 국가에서 가격이 다른 것은 거주 지역의 환율 및 부가가치세(VAT) 영향이 있을 수 있습니다. 미국, 캐나다와 같은 일부 국가에서는 각국 정책 및 법에 따라 표기된 가격에 별도로 세금이 결제 시점에 부과되므로, 다른 국가들에 비해 상대적으로 저렴해 보일 수 있습니다. 반면, 그 외 대부분의 국가에서는 이미 세금이 포함된 가격이 표기되어 있습니다. 아래에서 거주 지역을 선택하여 가격을 확인하십시오.',
    selectRegion: '거주 지역 선택',
    regionModalTitle: '국가/지역 선택',
    regionModalClose: '닫기',
    regionSearchPlaceholder: '국가·지역 검색',
    perReportSuffix: '/ 보고서',
    taxIncludedLabel: '(세금 포함)',
  },
  ja: {
    pricingNotice:
      '当社の価格方針は Apple App Store の国・地域別価格ガイドラインを参考にしており、一部の国では App Store の方針よりも利用者にとって有利な価格を目指しています。国によって価格が異なる場合は、居住地域の為替レートや付加価値税（VAT）の影響によることがあります。米国やカナダなど一部の国では、各国の政策・法令により表示価格に加えて税金が決済時に別途課されるため、他国と比べて相対的に安く見えることがあります。一方、その他のほとんどの国では、すでに税込みの価格が表示されています。下から居住地域を選択して価格をご確認ください。',
    selectRegion: '居住地域を選択',
    regionModalTitle: '国・地域を選択',
    regionModalClose: '閉じる',
    regionSearchPlaceholder: '国・地域を検索',
    perReportSuffix: '/ レポート',
    taxIncludedLabel: '(税込)',
  },
  zh: {
    pricingNotice:
      '本公司的定价政策参考 Apple App Store 各国家/地区价格指南，对部分国家/地区，我们力求提供比 App Store 政策对用户更友好的价格。不同国家/地区的价格可能因您居住地的汇率和增值税（VAT）而有所不同。在美国、加拿大等部分国家/地区，根据当地政策与法律，标示价格之外会在结账时另行收取税费，因此与其他国家/地区相比可能显得相对更低。而在大多数其他国家/地区，标示价格已包含税费。请在下方选择您的居住地以查看价格。',
    selectRegion: '选择您的地区',
    regionModalTitle: '选择国家/地区',
    regionModalClose: '关闭',
    regionSearchPlaceholder: '搜索国家/地区',
    perReportSuffix: '/ 报告',
    taxIncludedLabel: '(含税)',
  },
  es: {
    pricingNotice:
      'Nuestra política de precios se basa en las directrices regionales de precios de Apple App Store y, en algunos países, buscamos ofrecer precios más favorables para el usuario que la política estricta de App Store. Los precios pueden variar según el país por el tipo de cambio y el IVA de su región de residencia. En algunos países, como Estados Unidos y Canadá, los impuestos se añaden por separado al pagar según la normativa local, por lo que los precios mostrados pueden parecer relativamente más bajos que en otros países. En la mayoría de los demás países, los precios mostrados ya incluyen impuestos. Seleccione su región abajo para ver los precios.',
    selectRegion: 'Seleccionar su región',
    regionModalTitle: 'Elegir país o región',
    regionModalClose: 'Cerrar',
    regionSearchPlaceholder: 'Buscar país o región',
    perReportSuffix: '/ informe',
    taxIncludedLabel: '(impuestos incluidos)',
  },
  sv: {
    pricingNotice:
      'Vår prispolicy bygger på Apple App Stores regionala prisriktlinjer, och för vissa länder strävar vi efter priser som är mer användarvänliga än enbart App Store-policyn. Priser kan skilja sig mellan länder på grund av växelkurs och moms (VAT) i din bosättningsregion. I vissa länder, till exempel USA och Kanada, läggs skatt till separat vid betalning enligt lokal lagstiftning, vilket kan göra att angivna priser verkar relativt lägre än i andra länder. I de flesta andra länder ingår skatt redan i det angivna priset. Välj din region nedan för att se priser.',
    selectRegion: 'Välj din region',
    regionModalTitle: 'Välj land eller region',
    regionModalClose: 'Stäng',
    regionSearchPlaceholder: 'Sök land eller region',
    perReportSuffix: '/ rapport',
    taxIncludedLabel: '(inkl. moms)',
  },
  fr: {
    pricingNotice:
      'Notre politique tarifaire s’appuie sur les lignes directrices régionales de prix de l’Apple App Store et, pour certains pays, nous visons des prix plus favorables à l’utilisateur que la seule politique App Store. Les prix peuvent varier selon les pays en raison des taux de change et de la TVA dans votre région de résidence. Dans certains pays, comme les États-Unis et le Canada, des taxes sont ajoutées séparément au moment du paiement conformément à la réglementation locale, ce qui peut faire paraître les prix affichés relativement plus bas que dans d’autres pays. Dans la plupart des autres pays, les prix affichés incluent déjà les taxes. Sélectionnez votre région ci-dessous pour voir les prix.',
    selectRegion: 'Sélectionner votre région',
    regionModalTitle: 'Choisir un pays ou une région',
    regionModalClose: 'Fermer',
    regionSearchPlaceholder: 'Rechercher un pays ou une région',
    perReportSuffix: '/ rapport',
    taxIncludedLabel: '(taxes incluses)',
  },
  de: {
    pricingNotice:
      'Unsere Preispolitik orientiert sich an den regionalen Preisrichtlinien des Apple App Store, und in einigen Ländern möchten wir Preise anbieten, die für Nutzer günstiger sind als die reine App-Store-Richtlinie. Preise können je nach Land aufgrund von Wechselkursen und Mehrwertsteuer (MwSt.) in Ihrer Wohnregion variieren. In einigen Ländern wie den USA und Kanada werden Steuern gemäß lokaler Vorschriften beim Bezahlen zusätzlich erhoben, sodass die angezeigten Preise im Vergleich zu anderen Ländern relativ niedriger wirken können. In den meisten anderen Ländern sind die angezeigten Preise bereits steuerlich enthalten. Wählen Sie unten Ihre Region, um Preise anzuzeigen.',
    selectRegion: 'Region auswählen',
    regionModalTitle: 'Land oder Region wählen',
    regionModalClose: 'Schließen',
    regionSearchPlaceholder: 'Land oder Region suchen',
    perReportSuffix: '/ Bericht',
    taxIncludedLabel: '(inkl. MwSt.)',
  },
  ru: {
    pricingNotice:
      'Наша ценовая политика основана на региональных рекомендациях Apple App Store, а для некоторых стран мы стремимся предлагать цены, более выгодные для пользователя, чем одна лишь политика App Store. Цены могут отличаться в зависимости от страны из‑за обменного курса и НДС в вашем регионе проживания. В некоторых странах, таких как США и Канада, налоги взимаются отдельно при оплате согласно местному законодательству, поэтому указанные цены могут казаться относительно ниже, чем в других странах. В большинстве остальных стран указанные цены уже включают налог. Выберите регион ниже, чтобы увидеть цены.',
    selectRegion: 'Выбрать регион',
    regionModalTitle: 'Выбор страны или региона',
    regionModalClose: 'Закрыть',
    regionSearchPlaceholder: 'Поиск страны или региона',
    perReportSuffix: '/ отчёт',
    taxIncludedLabel: '(с учётом налога)',
  },
  ar: {
    pricingNotice:
      'تستند سياسة التسعير لدينا إلى إرشادات Apple App Store الإقليمية للأسعار، وفي بعض البلدان نسعى إلى تقديم أسعار أكثر ملاءمة للمستخدم من سياسة App Store وحدها. قد تختلف الأسعار حسب البلد بسبب أسعار الصرف وضريبة القيمة المضافة (VAT) في منطقة إقامتك. في بعض البلدان، مثل الولايات المتحدة وكندا، تُفرض الضرائب بشكل منفصل عند الدفع وفقًا للسياسات والقوانين المحلية، لذا قد تبدو الأسعار المعروضة أقل نسبيًا مقارنةً ببلدان أخرى. في معظم البلدان الأخرى، تتضمن الأسعار المعروضة الضريبة مسبقًا. اختر منطقتك أدناه لعرض الأسعار.',
    selectRegion: 'اختر منطقتك',
    regionModalTitle: 'اختيار البلد أو المنطقة',
    regionModalClose: 'إغلاق',
    regionSearchPlaceholder: 'البحث عن بلد أو منطقة',
    perReportSuffix: '/ تقرير',
    taxIncludedLabel: '(شامل الضريبة)',
  },
  pt: {
    pricingNotice:
      'A nossa política de preços baseia-se nas diretrizes regionais de preços da Apple App Store e, em alguns países, procuramos oferecer preços mais favoráveis ao utilizador do que a política estrita da App Store. Os preços podem variar conforme o país devido à taxa de câmbio e ao IVA na sua região de residência. Em alguns países, como os Estados Unidos e o Canadá, os impostos são acrescentados separadamente no momento do pagamento, de acordo com a legislação local, pelo que os preços apresentados podem parecer relativamente mais baixos do que noutros países. Na maioria dos outros países, os preços apresentados já incluem impostos. Selecione a sua região abaixo para ver os preços.',
    selectRegion: 'Selecionar a sua região',
    regionModalTitle: 'Escolher país ou região',
    regionModalClose: 'Fechar',
    regionSearchPlaceholder: 'Pesquisar país ou região',
    perReportSuffix: '/ relatório',
    taxIncludedLabel: '(impostos incluídos)',
  },
  it: {
    pricingNotice:
      'La nostra politica dei prezzi si basa sulle linee guida regionali di prezzo dell’Apple App Store e, per alcuni paesi, miriamo a offrire prezzi più favorevoli all’utente rispetto alla sola politica App Store. I prezzi possono variare per paese a causa dei tassi di cambio e dell’IVA nella tua regione di residenza. In alcuni paesi, come Stati Uniti e Canada, le imposte vengono aggiunte separatamente al momento del pagamento secondo le normative locali, quindi i prezzi indicati possono sembrare relativamente più bassi rispetto ad altri paesi. Nella maggior parte degli altri paesi, i prezzi indicati includono già le imposte. Seleziona la tua regione qui sotto per vedere i prezzi.',
    selectRegion: 'Seleziona la tua regione',
    regionModalTitle: 'Scegli paese o regione',
    regionModalClose: 'Chiudi',
    regionSearchPlaceholder: 'Cerca paese o regione',
    perReportSuffix: '/ rapporto',
    taxIncludedLabel: '(IVA inclusa)',
  },
  nl: {
    pricingNotice:
      'Ons prijsbeleid is gebaseerd op de regionale prijsrichtlijnen van de Apple App Store en voor sommige landen streven we naar prijzen die gunstiger zijn voor de gebruiker dan het App Store-beleid alleen. Prijzen kunnen per land verschillen door wisselkoersen en btw in uw woonregio. In sommige landen, zoals de Verenigde Staten en Canada, worden belastingen volgens het lokale beleid en de wet apart bij de betaling toegevoegd, waardoor de getoonde prijzen relatief lager kunnen lijken dan in andere landen. In de meeste andere landen is de getoonde prijs al inclusief belasting. Selecteer hieronder uw regio om prijzen te zien.',
    selectRegion: 'Selecteer uw regio',
    regionModalTitle: 'Kies land of regio',
    regionModalClose: 'Sluiten',
    regionSearchPlaceholder: 'Zoek land of regio',
    perReportSuffix: '/ rapport',
    taxIncludedLabel: '(incl. btw)',
  },
  id: {
    pricingNotice:
      'Kebijakan harga kami mengacu pada panduan harga regional Apple App Store, dan untuk beberapa negara kami berupaya menawarkan harga yang lebih ramah pengguna daripada kebijakan App Store semata. Harga dapat berbeda menurut negara karena nilai tukar dan PPN (VAT) di wilayah tempat tinggal Anda. Di beberapa negara, seperti Amerika Serikat dan Kanada, pajak ditambahkan secara terpisah saat pembayaran sesuai kebijakan dan hukum setempat, sehingga harga yang ditampilkan dapat tampak relatif lebih rendah dibanding negara lain. Di sebagian besar negara lainnya, harga yang ditampilkan sudah termasuk pajak. Pilih wilayah Anda di bawah untuk melihat harga.',
    selectRegion: 'Pilih wilayah Anda',
    regionModalTitle: 'Pilih negara atau wilayah',
    regionModalClose: 'Tutup',
    regionSearchPlaceholder: 'Cari negara atau wilayah',
    perReportSuffix: '/ laporan',
    taxIncludedLabel: '(termasuk pajak)',
  },
}
