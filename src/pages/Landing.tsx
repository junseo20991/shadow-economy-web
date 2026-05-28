import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    badge: 'Turn-Based Economic Simulation',
    headline1: 'Every decision leaves',
    headline2: 'a trace.',
    sub: 'A turn-based simulation about financial choices, community change, and what remains after each turn.',
    appStore: 'App Store coming soon',
    googlePlay: 'Google Play coming soon',
    features: [
      { icon: '●', title: 'Structured Economic Model', desc: 'Assets, liabilities, credit scores, and cash flow follow consistent in-game rules designed for learning.' },
      { icon: '◆', title: 'Community Impact', desc: 'Your decisions change the world around you and what comes next.' },
      { icon: '◐', title: 'Personalized Analysis', desc: 'The report shows what happened, what it means, and what changed.' },
    ],
    quote: '"What you build is only part of the story."',
    quoteSub: 'Shadow Economy focuses on cost, tradeoffs, and what remains.',
  },
  ko: {
    badge: '턴제 경제 시뮬레이션',
    headline1: '모든 선택은',
    headline2: '흔적을 남깁니다.',
    sub: '금융 선택, 공동체의 변화, 그리고 한 턴 뒤에도 남는 결과를 다루는 턴제 시뮬레이션입니다.',
    appStore: 'App Store 출시 예정',
    googlePlay: 'Google Play 출시 예정',
    features: [
      { icon: '●', title: '체계적인 경제 모델', desc: '자산, 부채, 신용점수, 현금흐름은 학습을 위해 설계된 일관된 게임 규칙을 따릅니다.' },
      { icon: '◆', title: '공동체의 변화', desc: '당신의 선택은 주변 세계를 바꾸고, 다음 국면으로 이어집니다.' },
      { icon: '◐', title: '개인화 분석', desc: '중요한 선택 뒤에 무엇이 일어났는지, 무엇이 달라졌는지 보여줍니다.' },
    ],
    quote: '"만든 것만이 이야기는 아닙니다."',
    quoteSub: '이 게임은 비용과 남는 영향까지 함께 보여줍니다.',
  },
  ja: {
    badge: 'ターン制の経済シミュレーション',
    headline1: 'すべての選択が',
    headline2: '痕跡を残す。',
    sub: '金融の選択、コミュニティの変化、そして一手ごとに残る結果を扱うターン制シミュレーションです。',
    appStore: 'App Store 近日公開',
    googlePlay: 'Google Play 近日公開',
    features: [
      { icon: '●', title: '体系化された経済モデル', desc: '資産、負債、信用スコア、キャッシュフローは学習のために設計された一貫したゲームルールに従います。' },
      { icon: '◆', title: 'コミュニティへの影響', desc: 'あなたの選択は周囲を変え、次の展開へつながります。' },
      { icon: '◐', title: '個別化された分析', desc: '重要な選択のあとに、何が起きたか、何が変わったかを示します。' },
    ],
    quote: '"作ったものだけが物語ではありません。"',
    quoteSub: 'このゲームは、コストと残る影響まで扱います。',
  },
  zh: {
    badge: '回合制经济模拟',
    headline1: '每个选择都会',
    headline2: '留下痕迹。',
    sub: '一款围绕金融选择、社区变化，以及每回合之后仍然存在的结果的回合制模拟游戏。',
    appStore: 'App Store 即将推出',
    googlePlay: 'Google Play 即将推出',
    features: [
      { icon: '●', title: '结构化的经济模型', desc: '资产、负债、信用分数和现金流遵循为学习而设计的一致游戏规则。' },
      { icon: '◆', title: '社区影响', desc: '你的每个选择都会改变周围世界，并影响后续走向。' },
      { icon: '◐', title: '个性化分析', desc: '重要决策后，报告会展示发生了什么，以及哪些地方发生了变化。' },
    ],
    quote: '"作品只是故事的一部分。"',
    quoteSub: '这款游戏呈现结果、代价与留下的影响。',
  },
  es: {
    badge: 'Simulación económica por turnos',
    headline1: 'Cada decisión deja',
    headline2: 'una huella.',
    sub: 'Una simulación por turnos sobre decisiones financieras, cambio comunitario y lo que permanece después de cada turno.',
    appStore: 'Próximamente en App Store',
    googlePlay: 'Próximamente en Google Play',
    features: [
      { icon: '●', title: 'Modelo económico estructurado', desc: 'Activos, pasivos, puntuación crediticia y flujo de caja siguen reglas coherentes del juego diseñadas para el aprendizaje.' },
      { icon: '◆', title: 'Impacto comunitario', desc: 'Cada decisión cambia el mundo que te rodea y lo que viene después.' },
      { icon: '◐', title: 'Análisis personalizado', desc: 'Después de decisiones clave, el informe muestra qué ocurrió y qué cambió.' },
    ],
    quote: '"Lo que construyes es solo una parte de la historia."',
    quoteSub: 'El juego pone el foco en el coste, el intercambio y lo que queda.',
  },
  sv: {
    badge: 'Turbaserad ekonomisimulering',
    headline1: 'Varje beslut lämnar',
    headline2: 'ett spår.',
    sub: 'En turbaserad simulering om finansiella beslut, samhällsförändring och det som består efter varje tur.',
    appStore: 'Kommer snart till App Store',
    googlePlay: 'Kommer snart till Google Play',
    features: [
      { icon: '●', title: 'Strukturerad ekonomisk modell', desc: 'Tillgångar, skulder, kreditpoäng och kassaflöde följer konsekventa spelregler utformade för lärande.' },
      { icon: '◆', title: 'Påverkan på omgivningen', desc: 'Varje beslut förändrar världen omkring dig och det som kommer efter.' },
      { icon: '◐', title: 'Personlig analys', desc: 'Efter viktiga beslut visar rapporten vad som hände och vad som förändrades.' },
    ],
    quote: '"Det du bygger är bara en del av berättelsen."',
    quoteSub: 'Spelet lyfter fram kostnaden, avvägningen och det som blir kvar.',
  },
}

export function Landing() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-24 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase">
          {tx.badge}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          {tx.headline1}
          <br />
          <span className="text-amber-400">{tx.headline2}</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-10">{tx.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <span className="w-full cursor-default sm:w-auto px-8 py-3.5 bg-amber-500 text-gray-900 font-semibold rounded-xl text-sm">
            {tx.appStore}
          </span>
          <span className="w-full cursor-default sm:w-auto px-8 py-3.5 border border-gray-700 text-gray-300 font-semibold rounded-xl text-sm">
            {tx.googlePlay}
          </span>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid sm:grid-cols-3 gap-8 sm:gap-10">
          {tx.features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-3xl mb-4 text-amber-400">{f.icon}</div>
              <h3 className="text-white font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <blockquote className="text-lg sm:text-xl text-gray-300 italic leading-relaxed mb-4">{tx.quote}</blockquote>
        <p className="text-sm text-gray-600">{tx.quoteSub}</p>
      </section>
    </Layout>
  )
}
