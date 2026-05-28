import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    philosophyTitle: 'Design principles',
    philosophy: [
      { title: 'Survival first', body: 'Cash flow keeps you in the game. If it stops, the run ends. Net worth only matters if you can keep going.' },
      { title: 'Instincts are not facts', body: 'Debt can feel dangerous. Cash can feel safe. The game shows where those instincts help, and where they cost you.' },
      { title: 'Wealth leaves a mark', body: 'Every asset changes the Ward around you. The Ward changes you back.' },
      { title: 'No single answer', body: 'The simulation does not pick a winner. It shows the cost of each path.' },
    ],
    shadowTitle: 'The Ward',
    shadowBody: 'Your Ward responds to every move you make.',
    shadowBody2: 'Storefronts dim. Streets quiet down. Property values move. The change is visible before it is explained.',
    shadowQuote: 'Your decisions shape the Ward. The Ward shapes your returns.',
    mechanicsTitle: 'Mechanics',
    mechanics: [
      { title: 'Credit score', body: 'A clean record has a ceiling. The system rewards managing debt, not avoiding it.' },
      { title: 'Delayed effects', body: 'Choices do not settle at once. Their effects return a few turns later, often after you have moved on.' },
      { title: 'Cash flow vs. net worth', body: 'You can own more than you can pay for. Most losses come from timing, not ownership.' },
    ],
    whyTitle: 'Why a simulation',
    whyBody: 'Books explain the rules. A simulation lets you test them under pressure.',
    whyBody2: 'That makes the lesson easier to remember. A mistake costs a reset, not years.',
    whoTitle: 'Made for players who',
    whoProfiles: [
      { quote: '"Everyone around me is investing, but I do not even know what to ask."', label: 'Need a starting point' },
      { quote: '"I know the concepts. I still freeze when it is time to decide."', label: 'Know the theory, not the move' },
      { quote: '"I have read the books. Nothing really changed how I think about money."', label: 'Learned, but unchanged' },
      { quote: '"I want to understand how the system works, not just how to survive in it."', label: 'Curious about the structure' },
    ],
    whoClose: 'The game does not tell you what to do. It shows what your choices reveal.',
  },
  ko: {
    philosophyTitle: '설계 원칙',
    philosophy: [
      { title: '생존이 먼저입니다', body: '현금흐름이 끊기면 게임은 끝납니다. 순자산보다 중요한 것은 계속 갈 수 있는지입니다.' },
      { title: '직관은 사실이 아닙니다', body: '부채는 위험하게 느껴지고, 현금은 안전하게 느껴집니다. 게임은 그 감각이 언제 맞고 언제 비용이 되는지 보여줍니다.' },
      { title: '부는 흔적을 남깁니다', body: '자산은 주변 Ward를 바꾸고, Ward는 다시 당신에게 영향을 줍니다.' },
      { title: '정해진 답은 없습니다', body: '시뮬레이션은 승자를 고르지 않습니다. 각 경로의 비용만 보여줍니다.' },
    ],
    shadowTitle: 'Ward',
    shadowBody: '당신의 Ward는 모든 선택에 반응합니다.',
    shadowBody2: '상점 불이 꺼지고, 거리가 조용해지고, 부동산 가치가 움직입니다. 설명되기 전에 먼저 보입니다.',
    shadowQuote: '당신의 결정이 Ward를 만들고, Ward가 당신의 수익을 만듭니다.',
    mechanicsTitle: '메커니즘',
    mechanics: [
      { title: '신용점수', body: '깨끗한 기록에도 한계가 있습니다. 시스템은 부채를 피하는 것보다 관리하는 것을 더 높게 봅니다.' },
      { title: '지연되는 효과', body: '선택은 바로 끝나지 않습니다. 효과는 몇 턴 뒤에 돌아오고, 대부분 그때쯤이면 잊고 있습니다.' },
      { title: '현금흐름과 순자산', body: '보유한 것보다 지불할 수 있는지가 더 중요합니다. 손실은 대부분 시점에서 생깁니다.' },
    ],
    whyTitle: '왜 시뮬레이션인가',
    whyBody: '책은 규칙을 설명합니다. 시뮬레이션은 그 규칙을 압박 속에서 시험하게 합니다.',
    whyBody2: '그래서 더 오래 남습니다. 실수의 대가는 리셋 한 번이면 충분합니다.',
    whoTitle: '이런 분들을 위해 만들었습니다',
    whoProfiles: [
      { quote: '"주변에서는 다 투자하는데, 저는 뭐부터 물어봐야 할지 모르겠어요."', label: '시작점이 필요한 분' },
      { quote: '"개념은 알아요. 막상 결정하려면 멈춥니다."', label: '이론은 알지만 손이 안 가는 분' },
      { quote: '"책도 읽고 영상도 봤지만, 돈에 대한 생각은 그대로예요."', label: '배웠지만 달라지지 않은 분' },
      { quote: '"시스템이 왜 이렇게 돌아가는지 이해하고 싶어요."', label: '구조가 궁금한 분' },
    ],
    whoClose: '이 게임은 무엇을 해야 하는지 말하지 않습니다. 당신의 선택이 무엇을 드러내는지 보여줍니다.',
  },
  ja: {
    philosophyTitle: '設計原則',
    philosophy: [
      { title: '生存が先', body: 'キャッシュフローが止まれば、そこで終わりです。純資産より、続けられるかどうかが大事です。' },
      { title: '直感は事実ではない', body: '借金は危険に、現金は安全に感じます。ゲームは、その感覚がいつ役立ち、いつコストになるかを示します。' },
      { title: '富は跡を残す', body: '資産はWardを変え、Wardはあなたを変えます。' },
      { title: '正解はひとつではない', body: 'シミュレーションは勝者を決めません。それぞれの道のコストを見せます。' },
    ],
    shadowTitle: 'Ward',
    shadowBody: 'あなたのWardは、すべての選択に反応します。',
    shadowBody2: '店の明かりが消え、通りが静かになり、資産価値が動きます。説明される前に、まず見えます。',
    shadowQuote: 'あなたの決断がWardを形作り、Wardがあなたのリターンを形作ります。',
    mechanicsTitle: '仕組み',
    mechanics: [
      { title: '信用スコア', body: 'きれいな記録にも上限があります。システムは、借金を避けるより管理することを評価します。' },
      { title: '遅れて返る効果', body: '選択はすぐには終わりません。効果は数ターン後に戻り、その頃には忘れていることが多いのです。' },
      { title: 'キャッシュフローと純資産', body: '持っている額より、払えるかどうかが大事です。損失の多くはタイミングで起きます。' },
    ],
    whyTitle: 'なぜシミュレーションなのか',
    whyBody: '本はルールを説明します。シミュレーションは、そのルールを圧力の中で試せます。',
    whyBody2: 'その方が、長く残ります。失敗の代償は、リセットひとつで済みます。',
    whoTitle: 'こんな方のために作りました',
    whoProfiles: [
      { quote: '「周りはみんな投資しているのに、何を聞けばいいかもわかりません。」', label: '出発点がほしい方' },
      { quote: '「概念はわかります。いざ決めると止まります。」', label: '理屈はわかるが動けない方' },
      { quote: '「本も動画も見ました。でも、お金の見方は変わっていません。」', label: '学んでも変わらない方' },
      { quote: '「このシステムがなぜこう動くのか知りたいです。」', label: '構造が気になる方' },
    ],
    whoClose: 'このゲームは、何をすべきかを教えません。選択が何を明らかにするかを示します。',
  },
  zh: {
    philosophyTitle: '设计原则',
    philosophy: [
      { title: '生存优先', body: '现金流让你留在局里。它一停，游戏就结束。净资产只有在你还能继续时才有意义。' },
      { title: '直觉不等于事实', body: '债务会让人觉得危险，现金会让人觉得安全。游戏会告诉你，这种直觉什么时候有用，什么时候会付出代价。' },
      { title: '财富会留下痕迹', body: '每项资产都会改变你周围的 Ward，Ward 也会反过来改变你。' },
      { title: '没有唯一答案', body: '模拟不会替你选赢家。它只展示每条路径的代价。' },
    ],
    shadowTitle: 'Ward',
    shadowBody: '你的 Ward 会对每个选择做出反应。',
    shadowBody2: '店铺的灯光变暗，街道安静下来，房产价值开始移动。往往还没解释，你就已经看见了变化。',
    shadowQuote: '你的决定塑造 Ward，Ward 也塑造你的回报。',
    mechanicsTitle: '机制',
    mechanics: [
      { title: '信用分数', body: '干净的记录也有上限。系统更看重管理债务，而不是回避债务。' },
      { title: '延迟效果', body: '选择不会马上结束。它们会在几回合后回来，通常那时你已经忘了。' },
      { title: '现金流与净资产', body: '拥有多少，不如能不能付得起。多数损失来自时机，而不是所有权。' },
    ],
    whyTitle: '为什么是模拟',
    whyBody: '书会解释规则。模拟让你在压力下试一次。',
    whyBody2: '这样更容易记住。失误的代价，只是一回重置。',
    whoTitle: '为这样的你而生',
    whoProfiles: [
      { quote: '"周围的人都在投资，我却不知道该问什么。"', label: '需要起点的人' },
      { quote: '"概念我懂。真到要决定时，我会停住。"', label: '懂理论，难行动' },
      { quote: '"书也读了，视频也看了。看钱的方式还是没变。"', label: '学过，但没变' },
      { quote: '"我想知道系统为什么这样运作。"', label: '想了解结构的人' },
    ],
    whoClose: '这款游戏不会告诉你该做什么。它会展示你的选择说明了什么。',
  },
  es: {
    philosophyTitle: 'Principios de diseño',
    philosophy: [
      { title: 'Primero, sobrevivir', body: 'El flujo de caja te mantiene en partida. Si se corta, la partida termina. El patrimonio neto solo importa si puedes seguir.' },
      { title: 'El instinto no siempre acierta', body: 'La deuda puede parecer peligrosa y el efectivo, seguro. El juego muestra cuándo ese instinto ayuda y cuándo cuesta.' },
      { title: 'La riqueza deja huella', body: 'Cada activo cambia tu Ward. Y el Ward te cambia a ti.' },
      { title: 'No hay una sola respuesta', body: 'La simulación no elige ganador. Muestra el coste de cada camino.' },
    ],
    shadowTitle: 'El Ward',
    shadowBody: 'Tu Ward responde a cada decisión.',
    shadowBody2: 'Las tiendas se apagan, las calles se callan y los valores se mueven. Lo ves antes de que te lo expliquen.',
    shadowQuote: 'Tus decisiones dan forma al Ward. El Ward da forma a tus rendimientos.',
    mechanicsTitle: 'Mecánicas',
    mechanics: [
      { title: 'Puntuación crediticia', body: 'Incluso un historial limpio tiene un techo. El sistema premia gestionar deuda, no evitarla.' },
      { title: 'Efectos diferidos', body: 'Las decisiones no se cierran al instante. Vuelven unas rondas después, cuando ya has pasado página.' },
      { title: 'Flujo de caja y patrimonio neto', body: 'Importa más lo que puedes pagar que lo que posees. La mayoría de las pérdidas vienen del momento, no de la propiedad.' },
    ],
    whyTitle: 'Por qué una simulación',
    whyBody: 'Los libros explican las reglas. La simulación te deja probarlas bajo presión.',
    whyBody2: 'Así se recuerdan mejor. El error cuesta un reinicio, no años.',
    whoTitle: 'Hecho para jugadores que',
    whoProfiles: [
      { quote: '"Todos invierten en algo. Yo no sé ni por dónde empezar."', label: 'Necesito un punto de partida' },
      { quote: '"Entiendo los conceptos. Cuando toca decidir, me quedo quieto."', label: 'Sé la teoría, no el paso' },
      { quote: '"Leí libros, vi videos. Mi forma de pensar sobre el dinero sigue igual."', label: 'Aprendí, pero no cambié' },
      { quote: '"Quiero entender cómo funciona el sistema."', label: 'Curioso por la estructura' },
    ],
    whoClose: 'El juego no te dice qué hacer. Te muestra lo que revelan tus decisiones.',
  },
  sv: {
    philosophyTitle: 'Designprinciper',
    philosophy: [
      { title: 'Överlevnad först', body: 'Kassaflödet håller dig kvar i spelet. Stannar det, är rundan slut. Nettovärde spelar bara roll om du kan fortsätta.' },
      { title: 'Instinkt är inte fakta', body: 'Skuld kan kännas farligt och kontanter kan kännas säkra. Spelet visar när den känslan hjälper och när den kostar.' },
      { title: 'Värde lämnar spår', body: 'Varje tillgång förändrar ditt Ward. Och Ward förändrar dig tillbaka.' },
      { title: 'Det finns inget enda svar', body: 'Simuleringen väljer ingen vinnare. Den visar kostnaden för varje väg.' },
    ],
    shadowTitle: 'Ward',
    shadowBody: 'Ditt Ward reagerar på varje beslut.',
    shadowBody2: 'Butiker släcks, gator tystnar och värden flyttas. Du ser det innan du får en förklaring.',
    shadowQuote: 'Dina beslut formar Ward. Ward formar dina avkastningar.',
    mechanicsTitle: 'Mekanik',
    mechanics: [
      { title: 'Kreditpoäng', body: 'Även en ren historik har ett tak. Systemet premierar att hantera skuld, inte att undvika den.' },
      { title: 'Fördröjda effekter', body: 'Beslut avslutas inte direkt. Effekterna kommer tillbaka några drag senare, när du redan har gått vidare.' },
      { title: 'Kassaflöde och nettovärde', body: 'Det viktiga är vad du kan betala, inte bara vad du äger. De flesta förluster handlar om timing.' },
    ],
    whyTitle: 'Varför en simulering',
    whyBody: 'Böcker förklarar reglerna. Simuleringen låter dig prova dem under press.',
    whyBody2: 'Det är lättare att minnas. Ett misstag kostar en återställning, inte år.',
    whoTitle: 'Gjort för spelare som',
    whoProfiles: [
      { quote: '"Alla investerar i något. Jag vet inte ens vad jag ska fråga."', label: 'Behöver en startpunkt' },
      { quote: '"Jag fattar teorin. När det är dags att välja stannar jag upp."', label: 'Kan teorin, fastnar i valet' },
      { quote: '"Jag har läst och sett allt. Min syn på pengar är ändå densamma."', label: 'Lärde mig, men ändrades inte' },
      { quote: '"Jag vill förstå hur systemet fungerar."', label: 'Nyfiken på strukturen' },
    ],
    whoClose: 'Spelet säger inte vad du ska göra. Det visar vad dina val avslöjar.',
  },
}

export function GamePage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.philosophyTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {tx.philosophy.map((p) => (
              <div key={p.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 sm:p-6">
                <h3 className="text-amber-400 font-semibold mb-3 text-sm tracking-wide uppercase">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">{tx.shadowTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.shadowBody}</p>
          <p className="text-gray-400 leading-relaxed mb-10">{tx.shadowBody2}</p>
          <div className="flex items-end justify-center gap-2 sm:gap-1.5 mb-10">
            {[
              { label: 'Vibrant', bg: 'bg-emerald-500', h: 'h-16' },
              { label: 'Normal', bg: 'bg-sky-500', h: 'h-12' },
              { label: 'Declining', bg: 'bg-yellow-500', h: 'h-9' },
              { label: 'Deteriorating', bg: 'bg-orange-600', h: 'h-6' },
              { label: 'Collapsed', bg: 'bg-red-900', h: 'h-3' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5">
                <div className={`w-10 sm:w-10 rounded-t ${s.bg} ${s.h} opacity-80`} />
                <span className="text-[9px] text-gray-600 hidden sm:block">{s.label}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-gray-500 text-sm italic border-l-2 border-amber-500/40 pl-4 text-left max-w-sm mx-auto">
            {tx.shadowQuote}
          </blockquote>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.mechanicsTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-6">
            {tx.mechanics.map((m) => (
              <div key={m.title} className="border-t-2 border-amber-500/40 pt-5">
                <h3 className="text-white font-semibold mb-3 text-sm">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-7">{tx.whyTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.whyBody}</p>
          <p className="text-gray-300 leading-relaxed">{tx.whyBody2}</p>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.whoTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {tx.whoProfiles.map((p) => (
              <div key={p.label} className="rounded-xl border border-gray-800 p-5 sm:p-6">
                <p className="text-gray-300 text-sm leading-relaxed italic mb-4">{p.quote}</p>
                <span className="text-xs text-amber-500/70 font-medium tracking-wide">— {p.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">{tx.whoClose}</p>
        </div>
      </section>
    </Layout>
  )
}
