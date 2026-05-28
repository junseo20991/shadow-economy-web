import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const STARTER_PRICE = '$8.99'
const MIDDLE_PRICE = '$12.99'
const POWER_PRICE = '$15.99'

const priceDisclaimer = {
  en: 'Prices shown are in USD for reference. Actual charges follow Apple App Store or Google Play pricing in your region, including applicable taxes.',
  ko: '표시 가격은 USD 기준 참고용입니다. 실제 결제 금액은 App Store 또는 Google Play에 표시된 귀하의 지역 통화·세금 적용 가격을 따릅니다.',
  ja: '表示価格はUSDの参考価格です。実際の請求は、App StoreまたはGoogle Playに表示されるお住まいの地域の価格・税に従います。',
  zh: '所示价格为美元参考价。实际扣款以 App Store 或 Google Play 在您所在地区显示的价格（含适用税费）为准。',
  es: 'Los precios mostrados son en USD como referencia. El cargo real sigue el precio de App Store o Google Play en tu región, con los impuestos aplicables.',
  sv: 'Priserna visas i USD som referens. Faktisk debitering följer App Store- eller Google Play-priset i din region, inklusive tillämpliga skatter.',
}

const content = {
  en: {
    badge: 'Report Credits',
    headline: 'Choose the report that fits your play.',
    sub: '1 credit unlocks 1 personalized report. Credits never expire.',
    starter: {
      name: 'Observer',
      credits: '3 Reports',
      tagline: 'Worth at least three playthroughs. There is no single right way. Just experience it. Feel something new.',
      perReport: '$3.00 / report',
      cta: 'In-app purchase only',
    },
    middle: {
      name: 'Explorer',
      credits: '5 Reports',
      tagline: 'More experience. More choice. Better value, shaped by your own hands.',
      perReport: '$2.60 / report',
      cta: 'In-app purchase only',
    },
    power: {
      name: 'Analyst',
      valueBadge: 'Best Value',
      credits: '8 Reports',
      tagline: 'The full path of an analyst. How will you be recorded? Experience and traces, your world alone.',
      perReport: '$2.00 / report',
      saving: 'Save 33% per report vs. Observer',
      cta: 'In-app purchase only',
    },
    features: [
      'One report per completed playthrough',
      'Decision retrospective',
      'Cognitive signature analysis',
      'Hidden information reveal',
      'Comparison of alternative choices and outcomes',
    ],
    howTitle: 'How it works',
    how: [
      { step: '1', title: 'Finish a run', body: 'End a playthrough (retirement, bankruptcy, or other supported end state) to open the report screen.' },
      { step: '2', title: 'Use one credit', body: 'Your report is built from that run alone.' },
      { step: '3', title: 'Play again', body: 'Each run creates a different report.' },
    ],
    note: 'Credits are added to your account right after purchase. They never expire and carry over between sessions.',
  },
  ko: {
    badge: '보고서 크레딧',
    headline: '당신의 플레이에 맞는 보고서를 고르세요.',
    sub: '크레딧 1개로 보고서 1개를 해제합니다. 만료되지 않습니다.',
    starter: {
      name: '관찰자',
      credits: '보고서 3개',
      tagline: '최소 세 번은 플레이해볼 가치가 있어요. 정해진 유일한 방법은 없습니다. 그저 경험해 보세요. 새로운 것을 느껴 보세요.',
      perReport: '보고서당 $3.00',
      cta: '앱 내 구매 안내',
    },
    middle: {
      name: '탐험가',
      credits: '보고서 5개',
      tagline: '더 많은 경험, 더 많은 선택. 당신만의 가치를 만들어가세요.',
      perReport: '보고서당 $2.60',
      cta: '앱 내 구매 안내',
    },
    power: {
      name: '분석가',
      valueBadge: '최고 가치',
      credits: '보고서 8개',
      tagline: '완전한 분석가의 길, 어떤 사람으로 기록될까요? 경험과 흔적, 오직 당신의 세계입니다.',
      perReport: '보고서당 $2.00',
      saving: '관찰자 대비 보고서당 33% 절약',
      cta: '앱 내 구매 안내',
    },
    features: [
      '완료된 플레이당 보고서 1개',
      '결정의 회고',
      '인지 서명 분석',
      '숨겨진 정보 공개',
      '다른 선택과 결과 비교',
    ],
    howTitle: '사용 방법',
    how: [
      { step: '1', title: '한 판을 끝냅니다', body: '은퇴·파산 등 한 판이 끝나면 보고서 화면이 열립니다.' },
      { step: '2', title: '크레딧 1개를 사용합니다', body: '보고서는 그 판의 데이터만으로 만들어집니다.' },
      { step: '3', title: '다시 플레이합니다', body: '다음 판은 다른 보고서를 만듭니다.' },
    ],
    note: '구매 후 크레딧은 즉시 계정에 부여됩니다. 만료되지 않으며 세션 간에 유지됩니다.',
  },
  ja: {
    badge: 'レポートクレジット',
    headline: 'あなたのプレイに合うレポートを選んでください。',
    sub: 'クレジット1個でレポート1件を解放します。有効期限はありません。',
    starter: {
      name: '観察者',
      credits: 'レポート3件',
      tagline: '少なくとも3回は遊ぶ価値があります。唯一の正解はありません。ただ体験してください。新しい何かを感じてください。',
      perReport: 'レポートあたり$3.00',
      cta: 'アプリ内購入のみ',
    },
    middle: {
      name: '探検者',
      credits: 'レポート5件',
      tagline: 'より多くの体験、より多くの選択。あなた自身の手で、より良い価値を形にしてください。',
      perReport: 'レポートあたり$2.60',
      cta: 'アプリ内購入のみ',
    },
    power: {
      name: '分析家',
      valueBadge: '最高コスパ',
      credits: 'レポート8件',
      tagline: '完全な分析家の道。あなたはどんな人物として記録されるでしょうか。経験と痕跡、ただあなたの世界です。',
      perReport: 'レポートあたり$2.00',
      saving: '観察者と比べてレポートあたり33%お得',
      cta: 'アプリ内購入のみ',
    },
    features: [
      'プレイ完了ごとにレポート1件',
      '決断の回顧',
      '認知的シグネチャー分析',
      '隠れた情報の開示',
      '別の選択と結果の比較',
    ],
    howTitle: '使い方',
    how: [
      { step: '1', title: '1回プレイを終える', body: '退職・破産など、1回のプレイが終了するとレポート画面が開きます。' },
      { step: '2', title: 'クレジットを使う', body: 'レポートはその1回のデータだけで作られます。' },
      { step: '3', title: 'もう一度遊ぶ', body: '次のプレイで、別のレポートが生まれます。' },
    ],
    note: '購入後、クレジットはすぐにアカウントに付与されます。有効期限はなく、セッション間でも引き継がれます。',
  },
  zh: {
    badge: '报告积分',
    headline: '选择适合你游玩的报告。',
    sub: '1积分可解锁1份个性化报告。永不过期。',
    starter: {
      name: '观察者',
      credits: '3份报告',
      tagline: '至少值得玩三次。没有唯一正确的方法。去体验它，感受一些新的东西。',
      perReport: '每份报告 $3.00',
      cta: '仅限应用内购买',
    },
    middle: {
      name: '探索者',
      credits: '5份报告',
      tagline: '更多体验，更多选择。由你亲手打造更好的价值。',
      perReport: '每份报告 $2.60',
      cta: '仅限应用内购买',
    },
    power: {
      name: '分析师',
      valueBadge: '最超值',
      credits: '8份报告',
      tagline: '完整的分析家之路。你会被记录成怎样的人？经验与痕迹，只属于你的世界。',
      perReport: '每份报告 $2.00',
      saving: '与观察者版相比每份报告节省33%',
      cta: '仅限应用内购买',
    },
    features: [
      '每次完整游玩一份报告',
      '决策回顾',
      '认知特征分析',
      '隐藏信息揭示',
      '不同选择与结果的比较',
    ],
    howTitle: '使用方法',
    how: [
      { step: '1', title: '完成一局', body: '一局结束（退休、破产等支持的结束状态）后，报告界面会开启。' },
      { step: '2', title: '使用1积分', body: '报告只基于这一局的数据生成。' },
      { step: '3', title: '再次游玩', body: '下一局会生成另一份报告。' },
    ],
    note: '购买后，积分会立即加入您的账户。不会过期，也会在会话之间保留。',
  },
  es: {
    badge: 'Créditos de informe',
    headline: 'Elige el informe que encaja con tu partida.',
    sub: '1 crédito desbloquea 1 informe personalizado. Sin fecha de caducidad.',
    starter: {
      name: 'Observador',
      credits: '3 informes',
      tagline: 'Vale la pena jugarlo al menos tres veces. No existe una única manera correcta. Solo vívelo. Descubre algo nuevo.',
      perReport: '$3.00 / informe',
      cta: 'Solo compra en la app',
    },
    middle: {
      name: 'Explorador',
      credits: '5 informes',
      tagline: 'Más experiencia, más opciones. Mejor valor, creado por tus propias manos.',
      perReport: '$2.60 / informe',
      cta: 'Solo compra en la app',
    },
    power: {
      name: 'Analista',
      valueBadge: 'Mejor valor',
      credits: '8 informes',
      tagline: 'El camino completo del analista. ¿Cómo quedarás registrado? Experiencia y huellas, solo tu mundo.',
      perReport: '$2.00 / informe',
      saving: 'Ahorra un 33% por informe frente al pack Observador',
      cta: 'Solo compra en la app',
    },
    features: [
      'Un informe por partida completada',
      'Retrospectiva de decisiones',
      'Análisis de firma cognitiva',
      'Revelación de información oculta',
      'Comparación de otras decisiones y resultados',
    ],
    howTitle: 'Cómo funciona',
    how: [
      { step: '1', title: 'Termina una partida', body: 'Al terminar una partida (jubilación, bancarrota u otro final admitido), se abre la pantalla del informe.' },
      { step: '2', title: 'Usa 1 crédito', body: 'El informe se construye solo con esa partida.' },
      { step: '3', title: 'Juega otra vez', body: 'La siguiente partida genera otro informe.' },
    ],
    note: 'Los créditos se añaden a tu cuenta justo después de la compra. No caducan y se mantienen entre sesiones.',
  },
  sv: {
    badge: 'Rapportkrediter',
    headline: 'Välj den rapport som passar ditt spel.',
    sub: '1 kredit låser upp 1 personaliserad rapport. Krediterna löper aldrig ut.',
    starter: {
      name: 'Observatör',
      credits: '3 rapporter',
      tagline: 'Värt minst tre genomspelningar. Det finns inget enda rätt sätt. Upplev det bara. Känn något nytt.',
      perReport: '$3.00 / rapport',
      cta: 'Endast i appen',
    },
    middle: {
      name: 'Utforskare',
      credits: '5 rapporter',
      tagline: 'Mer upplevelse, fler val. Bättre värde, format av dina egna händer.',
      perReport: '$2.60 / rapport',
      cta: 'Endast i appen',
    },
    power: {
      name: 'Analytiker',
      valueBadge: 'Bäst värde',
      credits: '8 rapporter',
      tagline: 'Den fullständiga analytikerns väg. Hur kommer du att bli ihågkommen? Upplevelse och spår, bara din värld.',
      perReport: '$2.00 / rapport',
      saving: 'Spara 33% per rapport jämfört med Observatör-paket',
      cta: 'Endast i appen',
    },
    features: [
      'En rapport per slutförd genomspelning',
      'Beslutsutvärdering',
      'Kognitiv signaturanalys',
      'Avslöjande av dold information',
      'Jämförelse av andra val och utfall',
    ],
    howTitle: 'Så här fungerar det',
    how: [
      { step: '1', title: 'Slutför en runda', body: 'När en omgång är slut (pension, konkurs eller annat stödd slutläge) öppnas rapportskärmen.' },
      { step: '2', title: 'Använd 1 kredit', body: 'Rapporten bygger bara på den rundan.' },
      { step: '3', title: 'Spela igen', body: 'Nästa runda ger en ny rapport.' },
    ],
    note: 'Krediter läggs till ditt konto direkt efter köp. De löper aldrig ut och följer med mellan sessioner.',
  },
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PricingPage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10 sm:pt-24 sm:pb-16 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase">
          {tx.badge}
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
          {tx.headline}
        </h1>
        <p className="text-base sm:text-lg text-gray-400">{tx.sub}</p>
      </section>

      {/* Pricing cards */}
      <section className="border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid sm:grid-cols-3 gap-5">

            {/* Starter */}
            <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-900/50 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-1">{tx.starter.name}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{STARTER_PRICE}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{tx.starter.credits} · {tx.starter.perReport}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{tx.starter.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tx.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <button disabled className="w-full cursor-default py-3 px-4 rounded-lg border border-gray-600 bg-gray-800 text-white text-sm font-semibold opacity-70">
                {tx.starter.cta}
              </button>
            </div>

            {/* Explorer */}
            <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-900/50 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-1">{tx.middle.name}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{MIDDLE_PRICE}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{tx.middle.credits} · {tx.middle.perReport}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{tx.middle.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tx.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <button disabled className="w-full cursor-default py-3 px-4 rounded-lg border border-gray-600 bg-gray-800 text-white text-sm font-semibold opacity-70">
                {tx.middle.cta}
              </button>
            </div>

            {/* Power User */}
            <div className="flex flex-col rounded-2xl border border-amber-500/50 bg-amber-950/10 p-6 sm:p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-gray-950 text-xs font-bold tracking-wide">
                  {tx.power.valueBadge}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-amber-400 mb-1">{tx.power.name}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{POWER_PRICE}</span>
                </div>
                <p className="text-xs text-amber-500/70 mb-1">{tx.power.credits} · {tx.power.perReport}</p>
                <p className="text-xs text-amber-400/60 mb-4">{tx.power.saving}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{tx.power.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tx.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <button disabled className="w-full cursor-default py-3 px-4 rounded-lg bg-amber-500 text-gray-950 text-sm font-bold opacity-80">
                {tx.power.cta}
              </button>
            </div>

          </div>

          <p className="text-center text-xs text-gray-600 mt-4">{priceDisclaimer[lang]}</p>
          <p className="text-center text-xs text-gray-600 mt-2">{tx.note}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-xl font-bold text-white mb-10 text-center">{tx.howTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {tx.how.map((h) => (
              <div key={h.step} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <span className="w-8 h-8 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-bold flex items-center justify-center mb-4 shrink-0">
                  {h.step}
                </span>
                <h3 className="text-white font-semibold text-sm mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
