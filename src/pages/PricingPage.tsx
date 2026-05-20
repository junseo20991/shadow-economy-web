import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const STARTER_PRICE = '$9.99'
const POWER_PRICE = '$25.99'

const content = {
  en: {
    badge: 'Report Credits',
    headline: 'Capture every playthrough.',
    sub: '1 credit = 1 post-mortem report. Credits never expire.',
    starter: {
      name: 'Starter',
      credits: '3 Reports',
      tagline: 'Enough to explore three distinct paths — conservative, aggressive, and the space between.',
      perReport: '$3.33 / report',
      cta: 'Buy Starter Pack',
    },
    power: {
      name: 'Power User',
      valueBadge: 'Best Value',
      credits: '10 Reports',
      tagline: 'For players who push every event, every strategy, every decision path.',
      perReport: '$2.60 / report',
      saving: 'Save 22% per report vs. Starter',
      cta: 'Buy Power Pack',
    },
    features: [
      'One report per completed playthrough',
      'Decision retrospective',
      'Cognitive signature analysis',
      'Hidden information reveal',
      'Alternative path simulation',
    ],
    howTitle: 'How it works',
    how: [
      { step: '1', title: 'Play to completion', body: 'Finish a full game to unlock the report generation screen.' },
      { step: '2', title: 'Generate your report', body: 'One credit is consumed. Your report is built entirely from your specific game data — no two are alike.' },
      { step: '3', title: 'Play again', body: 'Each playthrough reveals something different. Each report is a different version of you.' },
    ],
    note: 'Credits are added to your account immediately after purchase. They never expire and carry over between sessions.',
  },
  ko: {
    badge: '보고서 크레딧',
    headline: '모든 플레이를 기록하세요.',
    sub: '크레딧 1개 = 부검 보고서 1개. 만료 없음.',
    starter: {
      name: '스타터',
      credits: '보고서 3개',
      tagline: '세 가지 경로를 탐구하기에 충분합니다 — 보수적, 공격적, 그리고 그 사이.',
      perReport: '보고서당 $3.33',
      cta: '스타터 팩 구매',
    },
    power: {
      name: '헤비 유저',
      valueBadge: '최고 가치',
      credits: '보고서 10개',
      tagline: '모든 이벤트, 모든 전략, 모든 결정 경로를 탐구하는 플레이어를 위해.',
      perReport: '보고서당 $2.60',
      saving: '스타터 대비 보고서당 22% 절약',
      cta: '파워 팩 구매',
    },
    features: [
      '완료된 플레이당 보고서 1개',
      '결정의 회고',
      '인지 서명 분석',
      '숨겨진 정보 공개',
      '대안 경로 시뮬레이션',
    ],
    howTitle: '사용 방법',
    how: [
      { step: '1', title: '게임을 완료합니다', body: '플레이를 끝까지 진행하면 보고서 생성 화면이 열립니다.' },
      { step: '2', title: '보고서를 생성합니다', body: '크레딧 1개가 소모됩니다. 오직 당신의 게임 데이터로만 보고서가 만들어집니다.' },
      { step: '3', title: '다시 플레이합니다', body: '매 플레이는 다른 것을 드러냅니다. 매 보고서는 다른 버전의 당신입니다.' },
    ],
    note: '구매 후 크레딧은 즉시 계정에 부여됩니다. 만료되지 않으며 세션 간에 유지됩니다.',
  },
  ja: {
    badge: 'レポートクレジット',
    headline: 'すべてのプレイを記録してください。',
    sub: 'クレジット1個 = 死後分析レポート1件。有効期限なし。',
    starter: {
      name: 'スターター',
      credits: 'レポート3件',
      tagline: '3つの異なるルート——保守的、積極的、その中間——を探索するのに十分です。',
      perReport: 'レポートあたり$3.33',
      cta: 'スターターパックを購入',
    },
    power: {
      name: 'ヘビーユーザー',
      valueBadge: '最高コスパ',
      credits: 'レポート10件',
      tagline: 'あらゆるイベント、あらゆる戦略、あらゆる決断ルートを探求するプレイヤーのために。',
      perReport: 'レポートあたり$2.60',
      saving: 'スターターと比べてレポートあたり22%お得',
      cta: 'パワーパックを購入',
    },
    features: [
      'プレイ完了ごとにレポート1件',
      '決断の回顧',
      '認知的シグネチャー分析',
      '隠れた情報の開示',
      '代替ルートシミュレーション',
    ],
    howTitle: '使い方',
    how: [
      { step: '1', title: 'ゲームをクリアする', body: 'プレイを最後まで進めると、レポート生成画面が開きます。' },
      { step: '2', title: 'レポートを生成する', body: 'クレジットが1つ消費されます。あなたのゲームデータだけからレポートが作られます。' },
      { step: '3', title: 'もう一度プレイする', body: 'プレイのたびに新しいことが明らかになります。レポートも毎回異なります。' },
    ],
    note: '購入後、クレジットはすぐにアカウントに付与されます。有効期限はなく、セッション間でも引き継がれます。',
  },
  zh: {
    badge: '报告积分',
    headline: '记录每一次游玩。',
    sub: '1积分 = 1份复盘报告。永不过期。',
    starter: {
      name: '入门版',
      credits: '3份报告',
      tagline: '足以探索三条不同路线——保守型、激进型以及两者之间。',
      perReport: '每份报告 $3.33',
      cta: '购买入门版',
    },
    power: {
      name: '深度玩家',
      valueBadge: '最超值',
      credits: '10份报告',
      tagline: '为探索每一个事件、每一种策略、每一条决策路径的玩家而设计。',
      perReport: '每份报告 $2.60',
      saving: '与入门版相比每份报告节省22%',
      cta: '购买超值版',
    },
    features: [
      '每次完整游玩一份报告',
      '决策回顾',
      '认知特征分析',
      '隐藏信息揭示',
      '替代路径模拟',
    ],
    howTitle: '使用方法',
    how: [
      { step: '1', title: '完成游戏', body: '完整通关后，报告生成界面将会开启。' },
      { step: '2', title: '生成报告', body: '消耗1积分。报告完全根据您的具体游戏数据生成。' },
      { step: '3', title: '再次游玩', body: '每次游玩都揭示不同的东西。每份报告都是不同版本的您。' },
    ],
    note: '购买后，积分将立即添加到您的账户。永不过期，跨会话持续有效。',
  },
  es: {
    badge: 'Créditos de informe',
    headline: 'Documenta cada partida.',
    sub: '1 crédito = 1 informe post-mortem. Sin fecha de caducidad.',
    starter: {
      name: 'Básico',
      credits: '3 informes',
      tagline: 'Suficiente para explorar tres caminos distintos: conservador, agresivo y el espacio intermedio.',
      perReport: '$3.33 / informe',
      cta: 'Comprar pack básico',
    },
    power: {
      name: 'Usuario avanzado',
      valueBadge: 'Mejor valor',
      credits: '10 informes',
      tagline: 'Para jugadores que exploran cada evento, cada estrategia, cada camino de decisión.',
      perReport: '$2.60 / informe',
      saving: 'Ahorra un 22% por informe frente al pack básico',
      cta: 'Comprar pack avanzado',
    },
    features: [
      'Un informe por partida completada',
      'Retrospectiva de decisiones',
      'Análisis de firma cognitiva',
      'Revelación de información oculta',
      'Simulación de caminos alternativos',
    ],
    howTitle: 'Cómo funciona',
    how: [
      { step: '1', title: 'Juega hasta el final', body: 'Completa la partida para desbloquear la pantalla de generación de informe.' },
      { step: '2', title: 'Genera tu informe', body: 'Se consume un crédito. Tu informe se construye exclusivamente con los datos de tu partida.' },
      { step: '3', title: 'Vuelve a jugar', body: 'Cada partida revela algo diferente. Cada informe es una versión diferente de ti.' },
    ],
    note: 'Los créditos se añaden a tu cuenta inmediatamente después de la compra. No caducan y se mantienen entre sesiones.',
  },
  sv: {
    badge: 'Rapportkrediter',
    headline: 'Fånga varje genomspelning.',
    sub: '1 kredit = 1 post-mortem-rapport. Krediterna löper aldrig ut.',
    starter: {
      name: 'Starter',
      credits: '3 rapporter',
      tagline: 'Tillräckligt för att utforska tre distinkta vägar — konservativ, aggressiv och mittemellan.',
      perReport: '$3.33 / rapport',
      cta: 'Köp starterpaket',
    },
    power: {
      name: 'Avancerad',
      valueBadge: 'Bäst värde',
      credits: '10 rapporter',
      tagline: 'För spelare som utforskar varje händelse, varje strategi, varje beslutsväg.',
      perReport: '$2.60 / rapport',
      saving: 'Spara 22% per rapport jämfört med starterpaket',
      cta: 'Köp avancerat paket',
    },
    features: [
      'En rapport per slutförd genomspelning',
      'Beslutsutvärdering',
      'Kognitiv signaturanalys',
      'Avslöjande av dold information',
      'Simulering av alternativa vägar',
    ],
    howTitle: 'Så här fungerar det',
    how: [
      { step: '1', title: 'Spela till slutet', body: 'Slutför en genomspelning för att låsa upp rapportgenereringsskärmen.' },
      { step: '2', title: 'Generera din rapport', body: 'En kredit förbrukas. Din rapport byggs enbart från dina specifika speldata.' },
      { step: '3', title: 'Spela igen', body: 'Varje genomspelning avslöjar något annat. Varje rapport är en annan version av dig.' },
    ],
    note: 'Krediter läggs till ditt konto omedelbart efter köp. De löper aldrig ut och följer med mellan sessioner.',
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
          <div className="grid sm:grid-cols-2 gap-5">

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

              <button className="w-full py-3 px-4 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition-colors">
                {tx.starter.cta}
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

              <button className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-sm font-bold transition-colors">
                {tx.power.cta}
              </button>
            </div>

          </div>

          <p className="text-center text-xs text-gray-600 mt-6">{tx.note}</p>
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
