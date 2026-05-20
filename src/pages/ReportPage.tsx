import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    badge: 'Post-Mortem Report',
    headline: 'A report that has never existed before.',
    headlineSub: 'And will never exist again.',
    sub: 'Every playthrough of Shadow Economy generates a post-mortem report built entirely from your data — your decisions, your timing, your instincts under pressure. No two are alike.',
    uniqueTitle: 'Why It\'s Unlike Anything Else',
    unique: [
      { title: 'It\'s about you. Specifically.', body: 'Not a tutorial. Not a generic summary. The report reads your credit trajectory, your cash flow decisions, the exact turns where your Ward started declining — and traces them back to what you did.' },
      { title: 'It shows you what you couldn\'t see in the moment.', body: 'When you made your decisions, you had incomplete information. The report reconstructs the full picture — including the signals that were visible at the time, and what they were pointing to.' },
      { title: 'It names the instinct that was working against you.', body: 'Debt aversion. Loss avoidance. Present bias. The report identifies which cognitive patterns shaped your choices — not as a judgment, but as data. Your gameplay is the dataset.' },
    ],
    mirrorTitle: 'A Financial Mirror, Not a Financial Advisor',
    mirrorBody: 'Other tools tell you what to do next time. This report shows you who you already are — how you respond to risk, how you handle pressure, what you prioritize when the trade-offs are real.',
    mirrorBody2: 'That\'s a different kind of value. It\'s not prescriptive. It\'s diagnostic. And it\'s only possible because of what happened inside the simulation.',
    mirrorQuote: '"You thought you were playing a game. The report shows you what you were actually doing."',
    whatTitle: 'What the Report Contains',
    what: [
      { icon: '⏱', title: 'Decision Retrospective', body: 'The exact moment your trajectory changed — and what you chose that made it happen.' },
      { icon: '🕳', title: 'Hidden Information', body: 'Data that was available in the simulation but never surfaced. What you would have needed to know.' },
      { icon: '⚖️', title: 'Alternative Paths', body: 'Three diverging outcomes modeled from the same starting point. One better. One similar. One worse — to break hindsight bias.' },
      { icon: '🧠', title: 'Cognitive Signature', body: 'The pattern of instincts and biases embedded in your choices, extracted from your full game history.' },
    ],
    onceTitle: 'You Only Get One',
    onceBody: 'The report is generated at the end of your playthrough. It captures a specific version of you — the one who played this particular game, under these particular pressures, and made these particular choices.',
    onceBody2: 'You can play again. You\'ll get a different report. But this one, this version of your thinking, exists only once.',
    ctaTitle: 'Ready to capture your playthrough?',
    ctaBody: 'Get report credits and unlock your post-mortem after your next game.',
    ctaButton: 'See pricing',
  },
  ko: {
    badge: '부검 보고서',
    headline: '지금까지 존재한 적 없는 보고서.',
    headlineSub: '그리고 다시는 존재하지 않을.',
    sub: 'Shadow Economy의 모든 플레이는 오직 당신의 데이터로 만들어진 부검 보고서를 생성합니다. 당신의 결정, 당신의 타이밍, 압박 속에서 드러난 당신의 본능. 같은 보고서는 존재하지 않습니다.',
    uniqueTitle: '어디에도 없는 이유',
    unique: [
      { title: '이것은 당신에 관한 이야기입니다. 구체적으로.', body: '튜토리얼도 아니고 일반적인 요약도 아닙니다. 보고서는 당신의 신용도 궤적, 현금흐름 결정, Ward가 쇠퇴하기 시작한 정확한 턴을 읽고 — 그것을 당신이 한 행동으로 역추적합니다.' },
      { title: '그 순간에는 볼 수 없었던 것을 보여줍니다.', body: '결정을 내릴 때, 당신은 불완전한 정보를 가지고 있었습니다. 보고서는 전체 그림을 재구성합니다 — 그 시점에 보였던 신호들과 그것이 가리키고 있던 것을 포함하여.' },
      { title: '당신에게 불리하게 작동하던 본능을 지목합니다.', body: '부채 회피. 손실 기피. 현재 편향. 보고서는 당신의 선택을 형성한 인지 패턴을 식별합니다 — 판단이 아니라 데이터로서. 당신의 게임 플레이가 데이터셋입니다.' },
    ],
    mirrorTitle: '재무 조언자가 아닌 재무 거울',
    mirrorBody: '다른 도구들은 다음에 무엇을 해야 하는지 말합니다. 이 보고서는 당신이 이미 어떤 사람인지를 보여줍니다 — 리스크에 어떻게 반응하는지, 압박을 어떻게 처리하는지, 트레이드오프가 현실일 때 무엇을 우선시하는지.',
    mirrorBody2: '그것은 다른 종류의 가치입니다. 처방적이지 않습니다. 진단적입니다. 그리고 그것은 오직 시뮬레이션 안에서 일어난 일 덕분에 가능합니다.',
    mirrorQuote: '"게임을 하고 있다고 생각했습니다. 보고서는 당신이 실제로 무엇을 하고 있었는지를 보여줍니다."',
    whatTitle: '보고서에 담긴 것',
    what: [
      { icon: '⏱', title: '결정의 회고', body: '당신의 궤적이 바뀐 정확한 순간 — 그리고 그것을 만든 선택.' },
      { icon: '🕳', title: '숨겨진 정보', body: '시뮬레이션에서 이용 가능했지만 드러나지 않았던 데이터. 당신이 알았어야 할 것.' },
      { icon: '⚖️', title: '대안 경로', body: '동일한 출발점에서 갈라지는 세 가지 결과. 하나는 더 낫고, 하나는 비슷하고, 하나는 더 나쁩니다 — 사후확신 편향을 깨기 위해.' },
      { icon: '🧠', title: '인지 서명', body: '전체 게임 기록에서 추출된, 당신의 선택에 내재된 본능과 편향의 패턴.' },
    ],
    onceTitle: '단 한 번만 받게 됩니다',
    onceBody: '보고서는 플레이 종료 시 생성됩니다. 특정한 버전의 당신을 포착합니다 — 이 특정한 게임을, 이 특정한 압박 아래서 플레이하고, 이 특정한 선택들을 한 당신.',
    onceBody2: '다시 플레이할 수 있습니다. 다른 보고서를 받게 됩니다. 하지만 이것, 이 버전의 당신의 사고방식은 단 한 번만 존재합니다.',
    ctaTitle: '플레이를 기록할 준비가 되셨나요?',
    ctaBody: '보고서 크레딧을 구매하고, 다음 플레이 후 부검 보고서를 받으세요.',
    ctaButton: '가격 보기',
  },
  ja: {
    badge: '死後分析レポート',
    headline: 'これまでに存在したことのないレポート。',
    headlineSub: 'そして二度と存在しないでしょう。',
    sub: 'Shadow Economyのすべてのプレイは、あなたのデータだけで作られた死後分析レポートを生成します。あなたの決断、あなたのタイミング、プレッシャーの下で現れたあなたの本能。同じレポートは存在しません。',
    uniqueTitle: 'どこにもない理由',
    unique: [
      { title: 'これはあなたについての話です。具体的に。', body: 'チュートリアルでも一般的なまとめでもありません。レポートはあなたの信用スコアの軌跡、キャッシュフローの決断、Wardが衰退し始めた正確なターンを読み取り――それをあなたがした行動に遡ります。' },
      { title: 'その瞬間には見えなかったものを見せます。', body: '決断を下した時、あなたは不完全な情報しか持っていませんでした。レポートは全体像を再構築します――その時点で見えていたシグナルと、それが指し示していたものを含めて。' },
      { title: 'あなたに不利に働いていた本能を名指しします。', body: '借金回避。損失嫌悪。現在バイアス。レポートはあなたの選択を形成した認知パターンを特定します――判断としてではなく、データとして。あなたのゲームプレイがデータセットです。' },
    ],
    mirrorTitle: '財務アドバイザーではなく、財務の鏡',
    mirrorBody: '他のツールは次に何をすべきかを教えます。このレポートはあなたがすでにどういう人物かを見せます――リスクにどう反応するか、プレッシャーをどう処理するか、トレードオフが現実の時に何を優先するか。',
    mirrorBody2: 'それは異なる種類の価値です。処方的ではありません。診断的です。そしてそれは、シミュレーションの中で起きたことがあるからこそ可能です。',
    mirrorQuote: '「ゲームをしていると思っていました。レポートはあなたが実際に何をしていたかを見せます。」',
    whatTitle: 'レポートに含まれるもの',
    what: [
      { icon: '⏱', title: '決断の回顧', body: 'あなたの軌跡が変わった正確な瞬間――そしてそれを生み出した選択。' },
      { icon: '🕳', title: '隠れた情報', body: 'シミュレーションで利用可能だったが表面化しなかったデータ。あなたが知る必要があったこと。' },
      { icon: '⚖️', title: '代替経路', body: '同じ出発点から分岐する3つの結果。一つはより良く、一つは似ており、一つはより悪い――後知恵バイアスを破るために。' },
      { icon: '🧠', title: '認知的シグネチャー', body: 'ゲーム全体の履歴から抽出された、あなたの選択に埋め込まれた本能とバイアスのパターン。' },
    ],
    onceTitle: '一度しか手に入りません',
    onceBody: 'レポートはプレイ終了時に生成されます。特定のバージョンのあなたを捉えます――この特定のゲームを、この特定のプレッシャーの下でプレイし、この特定の選択をしたあなたを。',
    onceBody2: 'もう一度プレイできます。別のレポートを受け取るでしょう。しかしこれ、この版のあなたの思考は、一度だけ存在します。',
    ctaTitle: 'プレイを記録する準備はできていますか？',
    ctaBody: 'レポートクレジットを購入して、次のプレイ後に死後分析レポートを受け取りましょう。',
    ctaButton: '料金を見る',
  },
  zh: {
    badge: '死后复盘报告',
    headline: '一份从未存在过的报告。',
    headlineSub: '也将永远不会再次存在。',
    sub: 'Shadow Economy 的每一次游玩都会生成一份完全基于你的数据构建的复盘报告——你的决策、你的时机、你在压力下展现的本能。没有两份报告是相同的。',
    uniqueTitle: '独一无二的原因',
    unique: [
      { title: '这是关于你的。具体地说。', body: '不是教程，不是通用摘要。报告会读取你的信用轨迹、现金流决策、你的社区开始衰退的确切回合——并将其追溯到你所做的行为。' },
      { title: '它向你展示你在那一刻看不到的东西。', body: '当你做决定时，你拥有的是不完整的信息。报告重建了完整的图景——包括当时可见的信号，以及它们指向的方向。' },
      { title: '它指出了在背后对你不利运作的本能。', body: '债务厌恶。损失规避。现时偏见。报告识别出塑造你选择的认知模式——不是作为判断，而是作为数据。你的游戏过程就是数据集。' },
    ],
    mirrorTitle: '财务镜子，而非财务顾问',
    mirrorBody: '其他工具告诉你下次该做什么。这份报告展示你已经是什么样的人——你如何应对风险，如何处理压力，当权衡是真实的时候你优先考虑什么。',
    mirrorBody2: '这是不同种类的价值。它不是规定性的，而是诊断性的。而这只有因为模拟中发生的事情才成为可能。',
    mirrorQuote: '"你以为自己在玩游戏。报告向你展示你实际上在做什么。"',
    whatTitle: '报告包含的内容',
    what: [
      { icon: '⏱', title: '决策回顾', body: '你的轨迹改变的确切时刻——以及导致这一切发生的选择。' },
      { icon: '🕳', title: '隐藏信息', body: '模拟中可用但从未浮现的数据。你本应知道的事情。' },
      { icon: '⚖️', title: '替代路径', body: '从同一起点模拟的三种分歧结果。一种更好，一种相似，一种更差——打破后见之明偏见。' },
      { icon: '🧠', title: '认知特征', body: '从完整游戏历史中提取的，嵌入你选择中的本能和偏见模式。' },
    ],
    onceTitle: '只有一次',
    onceBody: '报告在游戏结束时生成。它捕捉了特定版本的你——那个在特定压力下玩了这场特定游戏、做出了这些特定选择的你。',
    onceBody2: '你可以再玩一次。你会得到一份不同的报告。但这一份，这个版本的你的思维方式，只存在一次。',
    ctaTitle: '准备好记录你的游玩了吗？',
    ctaBody: '购买报告积分，在下次游玩后解锁你的复盘报告。',
    ctaButton: '查看定价',
  },
  es: {
    badge: 'Informe post-mortem',
    headline: 'Un informe que nunca ha existido antes.',
    headlineSub: 'Y que nunca volverá a existir.',
    sub: 'Cada partida de Shadow Economy genera un informe post-mortem construido enteramente con tus datos — tus decisiones, tu timing, tus instintos bajo presión. No hay dos iguales.',
    uniqueTitle: 'Por qué es como ningún otro',
    unique: [
      { title: 'Es sobre ti. Específicamente.', body: 'No es un tutorial. No es un resumen genérico. El informe lee tu trayectoria crediticia, tus decisiones de flujo de caja, los turnos exactos donde tu barrio empezó a declinar — y los rastrea hasta lo que hiciste.' },
      { title: 'Te muestra lo que no podías ver en ese momento.', body: 'Cuando tomaste tus decisiones, tenías información incompleta. El informe reconstruye el panorama completo — incluyendo las señales que eran visibles en ese momento y hacia dónde apuntaban.' },
      { title: 'Nombra el instinto que estaba trabajando en tu contra.', body: 'Aversión a la deuda. Evitación de pérdidas. Sesgo del presente. El informe identifica qué patrones cognitivos dieron forma a tus elecciones — no como un juicio, sino como datos. Tu gameplay es el conjunto de datos.' },
    ],
    mirrorTitle: 'Un espejo financiero, no un asesor financiero',
    mirrorBody: 'Otras herramientas te dicen qué hacer la próxima vez. Este informe te muestra quién ya eres — cómo respondes al riesgo, cómo manejas la presión, qué priorizas cuando los intercambios son reales.',
    mirrorBody2: 'Ese es un tipo de valor diferente. No es prescriptivo. Es diagnóstico. Y solo es posible gracias a lo que ocurrió dentro de la simulación.',
    mirrorQuote: '"Pensabas que estabas jugando un juego. El informe te muestra lo que realmente estabas haciendo."',
    whatTitle: 'Qué contiene el informe',
    what: [
      { icon: '⏱', title: 'Retrospectiva de decisiones', body: 'El momento exacto en que cambió tu trayectoria — y lo que elegiste que lo hizo posible.' },
      { icon: '🕳', title: 'Información oculta', body: 'Datos que estaban disponibles en la simulación pero que nunca afloraron. Lo que necesitabas saber.' },
      { icon: '⚖️', title: 'Caminos alternativos', body: 'Tres resultados divergentes modelados desde el mismo punto de partida. Uno mejor. Uno similar. Uno peor — para romper el sesgo retrospectivo.' },
      { icon: '🧠', title: 'Firma cognitiva', body: 'El patrón de instintos y sesgos integrados en tus elecciones, extraído de tu historial completo de juego.' },
    ],
    onceTitle: 'Solo obtienes uno',
    onceBody: 'El informe se genera al final de tu partida. Captura una versión específica de ti — la que jugó este juego particular, bajo estas presiones particulares, y tomó estas elecciones particulares.',
    onceBody2: 'Puedes volver a jugar. Obtendrás un informe diferente. Pero este, esta versión de tu pensamiento, existe solo una vez.',
    ctaTitle: '¿Listo para documentar tu partida?',
    ctaBody: 'Consigue créditos de informe y desbloquea tu post-mortem tras tu próxima partida.',
    ctaButton: 'Ver precios',
  },
  sv: {
    badge: 'Post-mortem-rapport',
    headline: 'En rapport som aldrig funnits tidigare.',
    headlineSub: 'Och som aldrig kommer att finnas igen.',
    sub: 'Varje genomspelning av Shadow Economy genererar en post-mortem-rapport byggd helt från dina data — dina beslut, din timing, dina instinkter under press. Inga två är likadana.',
    uniqueTitle: 'Varför den är unik',
    unique: [
      { title: 'Den handlar om dig. Specifikt.', body: 'Inte en handledning. Inte en generisk sammanfattning. Rapporten läser din kreditbana, dina kassaflödebeslut, de exakta varven då ditt kvarter började försämras — och spårar dem tillbaka till vad du gjorde.' },
      { title: 'Den visar dig vad du inte kunde se i stunden.', body: 'När du fattade dina beslut hade du ofullständig information. Rapporten rekonstruerar hela bilden — inklusive de signaler som var synliga då, och vart de pekade.' },
      { title: 'Den namnger instinkten som jobbade mot dig.', body: 'Skuldskygghet. Förlustaversion. Nutidssnedvridning. Rapporten identifierar vilka kognitiva mönster som formade dina val — inte som en dom, utan som data. Ditt spelande är datamängden.' },
    ],
    mirrorTitle: 'En finansiell spegel, inte en finansiell rådgivare',
    mirrorBody: 'Andra verktyg berättar vad du ska göra nästa gång. Den här rapporten visar vem du redan är — hur du reagerar på risk, hur du hanterar press, vad du prioriterar när avvägningarna är verkliga.',
    mirrorBody2: 'Det är ett annat slags värde. Det är inte föreskrivande. Det är diagnostiskt. Och det är bara möjligt på grund av vad som hände inuti simuleringen.',
    mirrorQuote: '"Du trodde att du spelade ett spel. Rapporten visar vad du faktiskt höll på med."',
    whatTitle: 'Vad rapporten innehåller',
    what: [
      { icon: '⏱', title: 'Beslutsutvärdering', body: 'Det exakta ögonblicket din bana förändrades — och vad du valde som fick det att hända.' },
      { icon: '🕳', title: 'Dold information', body: 'Data som fanns tillgänglig i simuleringen men aldrig framkom. Det du skulle ha behövt veta.' },
      { icon: '⚖️', title: 'Alternativa vägar', body: 'Tre avvikande utfall modellerade från samma utgångspunkt. Ett bättre. Ett liknande. Ett sämre — för att bryta efterklokhetsprejudicen.' },
      { icon: '🧠', title: 'Kognitiv signatur', body: 'Mönstret av instinkter och fördomar inbäddade i dina val, extraherade från din fullständiga spelhistorik.' },
    ],
    onceTitle: 'Du får bara en',
    onceBody: 'Rapporten genereras i slutet av din genomspelning. Den fångar en specifik version av dig — den som spelade just det här spelet, under just det här trycket, och fattade just de här valen.',
    onceBody2: 'Du kan spela igen. Du får en annan rapport. Men den här, den här versionen av ditt tänkande, finns bara en gång.',
    ctaTitle: 'Redo att fånga din genomspelning?',
    ctaBody: 'Köp rapportkrediter och lås upp din post-mortem efter nästa spel.',
    ctaButton: 'Se priser',
  },
}

export function ReportPage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 pb-10 sm:pt-24 sm:pb-16 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase">
          {tx.badge}
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight tracking-tight">
          {tx.headline}
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-8 leading-tight">{tx.headlineSub}</p>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">{tx.sub}</p>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.uniqueTitle}</h2>
          <div className="space-y-4 sm:space-y-5">
            {tx.unique.map((u, i) => (
              <div key={i} className="flex gap-4 sm:gap-5 rounded-xl border border-gray-800 bg-gray-900/50 p-5 sm:p-6">
                <span className="text-amber-500 font-bold text-lg mt-0.5 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">{u.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-7">{tx.mirrorTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.mirrorBody}</p>
          <p className="text-gray-400 leading-relaxed mb-10 sm:mb-12">{tx.mirrorBody2}</p>
          <blockquote className="text-lg sm:text-xl text-gray-200 italic leading-relaxed border-l-4 border-amber-500 pl-5 sm:pl-6 text-left">
            {tx.mirrorQuote}
          </blockquote>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.whatTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {tx.what.map((w) => (
              <div key={w.title} className="flex gap-4 p-4 sm:p-5 rounded-xl border border-gray-800">
                <span className="text-2xl shrink-0">{w.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-sm">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">{tx.onceTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.onceBody}</p>
          <p className="text-gray-300 leading-relaxed font-medium">{tx.onceBody2}</p>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-xl font-bold text-white mb-3">{tx.ctaTitle}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">{tx.ctaBody}</p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-sm font-bold transition-colors"
          >
            {tx.ctaButton}
          </Link>
        </div>
      </section>
    </Layout>
  )
}
