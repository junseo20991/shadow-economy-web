import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    badge: 'Turn-Based Economic Simulation',
    headline1: 'The wealth you build',
    headline2: 'casts a shadow.',
    sub: 'Shadow Economy is a turn-based simulation where your financial decisions shape — and slowly hollow out — the community around you.',
    appStore: 'Download on App Store',
    googlePlay: 'Get it on Google Play',
    features: [
      { icon: '📊', title: 'Real Economic Logic', desc: 'Assets, liabilities, credit scores, and cash flow — all modeled with realistic mechanics.' },
      { icon: '🏘️', title: 'Community Vitality', desc: 'Every decision you make ripples through your Ward. Watch the neighborhood change around you.' },
      { icon: '🔍', title: 'Post-Mortem Analysis', desc: 'After key decisions, see the hidden information you missed and the paths not taken.' },
    ],
    quote: '"The moment you felt safe was the moment of quiet extraction."',
    quoteSub: 'Every decision has a shadow you cannot see — until it\'s too late.',
  },
  ko: {
    badge: '턴제 경제 시뮬레이션',
    headline1: '당신이 쌓는 부는',
    headline2: '그림자를 드리웁니다.',
    sub: '그림자 경제는 당신의 재무 결정이 주변 지역사회를 서서히 변화시키는 턴제 시뮬레이션 게임입니다.',
    appStore: 'App Store에서 다운로드',
    googlePlay: 'Google Play에서 받기',
    features: [
      { icon: '📊', title: '실제 경제 논리', desc: '자산, 부채, 신용등급, 현금흐름 — 현실적인 메커니즘으로 모델링됩니다.' },
      { icon: '🏘️', title: '지역 활력도 시스템', desc: '당신의 모든 결정은 지역(Ward)에 파문을 일으킵니다. 동네가 변해가는 모습을 직접 목격하세요.' },
      { icon: '🔍', title: '의사결정 부검 리포트', desc: '핵심 결정 이후, 당신이 놓친 숨겨진 정보와 선택하지 않은 경로를 확인하세요.' },
    ],
    quote: '"안도의 한숨을 쉬는 그 순간, 당신은 세 가지를 잃었습니다."',
    quoteSub: '모든 결정에는 보이지 않는 그림자가 있습니다 — 너무 늦기 전까지는.',
  },
  ja: {
    badge: 'ターン制経済シミュレーション',
    headline1: 'あなたが築く富は、',
    headline2: '影を落とします。',
    sub: 'Shadow Economyは、あなたの財務的決断が周囲のコミュニティを形作り、やがて侵食していくターン制シミュレーションゲームです。',
    appStore: 'App Storeでダウンロード',
    googlePlay: 'Google Playで入手',
    features: [
      { icon: '📊', title: 'リアルな経済ロジック', desc: '資産、負債、信用スコア、キャッシュフロー――すべてが現実的なメカニズムでモデル化されています。' },
      { icon: '🏘️', title: 'コミュニティ活力度', desc: 'あなたのすべての決断がWardに波紋を広げます。街が変わっていく様子を目の当たりにしてください。' },
      { icon: '🔍', title: '死後分析レポート', desc: '重要な決断の後、見逃した隠れた情報と歩まなかった道筋を確認できます。' },
    ],
    quote: '「安心したその瞬間こそ、静かな収奪の瞬間だった。」',
    quoteSub: 'すべての決断には見えない影がある――気づいた時にはもう遅い。',
  },
  zh: {
    badge: '回合制经济模拟',
    headline1: '你所积累的财富，',
    headline2: '投下一道阴影。',
    sub: 'Shadow Economy 是一款回合制模拟游戏，你的财务决策将塑造并逐渐掏空身边的社区。',
    appStore: '在 App Store 下载',
    googlePlay: '在 Google Play 获取',
    features: [
      { icon: '📊', title: '真实的经济逻辑', desc: '资产、负债、信用评分和现金流——全部以真实机制建模。' },
      { icon: '🏘️', title: '社区活力系统', desc: '你的每一个决定都会在你的社区（Ward）中激起涟漪。亲眼见证街区的变化。' },
      { icon: '🔍', title: '决策复盘报告', desc: '关键决策后，查看你错过的隐藏信息和未走的道路。' },
    ],
    quote: '"你感到安心的那一刻，正是悄然被剥夺的时刻。"',
    quoteSub: '每一个决定都有你看不见的阴影——直到为时已晚。',
  },
  es: {
    badge: 'Simulación económica por turnos',
    headline1: 'La riqueza que construyes',
    headline2: 'proyecta una sombra.',
    sub: 'Shadow Economy es una simulación por turnos donde tus decisiones financieras moldean —y lentamente vacían— la comunidad que te rodea.',
    appStore: 'Descargar en App Store',
    googlePlay: 'Obtener en Google Play',
    features: [
      { icon: '📊', title: 'Lógica económica real', desc: 'Activos, pasivos, puntuaciones de crédito y flujo de caja — todo modelado con mecánicas realistas.' },
      { icon: '🏘️', title: 'Vitalidad comunitaria', desc: 'Cada decisión que tomas repercute en tu barrio. Observa cómo cambia la comunidad a tu alrededor.' },
      { icon: '🔍', title: 'Análisis post-mortem', desc: 'Tras decisiones clave, descubre la información oculta que perdiste y los caminos no tomados.' },
    ],
    quote: '"El momento en que te sentiste seguro fue el momento de la extracción silenciosa."',
    quoteSub: 'Cada decisión tiene una sombra que no puedes ver — hasta que es demasiado tarde.',
  },
  sv: {
    badge: 'Turbaserad ekonomisimulering',
    headline1: 'Välståndet du bygger',
    headline2: 'kastar en skugga.',
    sub: 'Shadow Economy är en turbaserad simulering där dina finansiella beslut formar — och sakta urholkar — samhället omkring dig.',
    appStore: 'Ladda ner på App Store',
    googlePlay: 'Hämta på Google Play',
    features: [
      { icon: '📊', title: 'Verklig ekonomisk logik', desc: 'Tillgångar, skulder, kreditpoäng och kassaflöde — allt modellerat med realistiska mekaniker.' },
      { icon: '🏘️', title: 'Samhällsvitalitet', desc: 'Varje beslut du fattar skapar ringar på vattnet i ditt kvarter. Se hur grannskapet förändras.' },
      { icon: '🔍', title: 'Post-mortem-analys', desc: 'Efter viktiga beslut — se den dolda information du missade och vägarna du inte tog.' },
    ],
    quote: '"Det ögonblick du kände dig trygg var ögonblicket för tyst utvinning."',
    quoteSub: 'Varje beslut har en skugga du inte kan se — tills det är för sent.',
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
          {tx.headline1}<br />
          <span className="text-amber-400">{tx.headline2}</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-10">{tx.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#" className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-xl transition-colors text-sm">
            {tx.appStore}
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-3.5 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold rounded-xl transition-colors text-sm">
            {tx.googlePlay}
          </a>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid sm:grid-cols-3 gap-8 sm:gap-10">
          {tx.features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
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
