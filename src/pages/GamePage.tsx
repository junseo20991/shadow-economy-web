import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    philosophyTitle: 'Design Philosophy',
    philosophy: [
      { title: 'Survival Over Growth', body: 'Cash flow is oxygen. The moment it stops, the game ends. Net worth is a vanity metric — what matters is whether you can survive next quarter.' },
      { title: 'Your Instincts Are the Obstacle', body: '"Debt is dangerous." "Cash is safe." These aren\'t truths. They\'re reflexes. Shadow Economy is designed to show you exactly how those reflexes cost you.' },
      { title: 'The Polarization Paradox', body: 'Your wealth doesn\'t exist in a vacuum. Every asset you accumulate changes the community around you — and those changes come back. The shadow is a feedback loop.' },
      { title: 'Moral Neutrality', body: 'The game never tells you what the right answer is. Winning within the system and building an alternative economy are both valid paths. The simulation just shows you the consequences of each.' },
    ],
    shadowTitle: 'The Shadow System',
    shadowBody: 'Your Ward — the community where you live and invest — has a vitality score that responds to every decision you make.',
    shadowBody2: 'Instead, you watch the neighborhood change. Lights go out in storefronts. Streets grow quieter. Property values shift. By the time you understand what\'s happening, it\'s already happened.',
    shadowQuote: 'Your decisions shape the Ward. The Ward shapes your returns.',
    mechanicsTitle: 'Mechanics That Mirror Reality',
    mechanics: [
      { title: 'Credit Score Architecture', body: 'There\'s a ceiling at 740 for anyone who has never held debt. The system rewards the behavior of managing debt — not avoiding it. Your safety instinct is, quietly, a penalty.' },
      { title: 'Delayed Consequences', body: 'Decisions don\'t resolve immediately. The effects of what you choose today queue up and surface two, three, four turns later — often when you\'ve already forgotten the choice.' },
      { title: 'Cash Flow vs. Net Worth', body: 'You can be asset-rich and cash-poor. When the game ends in bankruptcy, it\'s almost never because of what you owned. It\'s because of what you couldn\'t pay.' },
    ],
    whyTitle: 'Why a Simulation, Not a Book',
    whyBody: 'Finance books tell you what the rules are. Courses tell you what to do. Neither puts you in the room where the decision actually happens — under time pressure, with incomplete information, and real consequences if you\'re wrong.',
    whyBody2: 'The only way to understand how your instincts behave under pressure is to put them under pressure. Shadow Economy is that pressure — in a space where the cost of learning is a reset button, not a decade of regret.',
    whoTitle: 'This Game Was Made For You If —',
    whoProfiles: [
      { quote: '"Everyone around me is investing in something. I don\'t even know what questions I should be asking."', label: 'The Overwhelmed Beginner' },
      { quote: '"I understand the concepts. But when I actually have to decide, I freeze — or I go with my gut and regret it."', label: 'The Conceptually Informed, Practically Lost' },
      { quote: '"I\'ve read the books and watched the videos. But nothing actually changed how I think about money."', label: 'The Educated but Unchanged' },
      { quote: '"I want to understand why the system works the way it does — not just how to survive inside it."', label: 'The Structurally Curious' },
    ],
    whoClose: 'Shadow Economy doesn\'t teach you what to do. It puts you in situations where you have to decide — and shows you what those decisions actually reveal.',
  },
  ko: {
    philosophyTitle: '설계 철학',
    philosophy: [
      { title: '성장보다 생존', body: '현금흐름은 산소입니다. 끊기는 순간 게임은 끝납니다. 순자산은 허영 지표입니다. 중요한 것은 다음 분기를 버틸 수 있는가입니다.' },
      { title: '직관이 장애물이다', body: '"부채는 위험하다." "현금이 안전하다." 이것은 진실이 아니라 반사 반응입니다. 그림자 경제는 그 반사 반응이 정확히 어떻게 손실로 이어지는지를 보여주기 위해 설계되었습니다.' },
      { title: '양극화 패러독스', body: '당신의 부는 진공 속에 존재하지 않습니다. 축적되는 모든 자산은 주변 지역사회를 바꾸고, 그 변화는 되돌아옵니다. 그림자는 피드백 루프입니다.' },
      { title: '도덕적 중립성', body: '게임은 어떤 것이 옳은 답인지 말하지 않습니다. 시스템 내에서 이기는 것과 대안 경제를 구축하는 것은 모두 유효한 경로입니다. 시뮬레이션은 각각의 결과를 보여줄 뿐입니다.' },
    ],
    shadowTitle: '그림자 시스템',
    shadowBody: '당신이 살고 투자하는 지역(Ward)은 당신의 모든 결정에 반응하는 활력도를 갖고 있습니다.',
    shadowBody2: '대신, 동네가 변해가는 것을 지켜보게 됩니다. 상점 불이 꺼집니다. 거리가 조용해집니다. 부동산 가치가 움직입니다. 무슨 일이 일어나고 있는지 이해할 때쯤이면, 이미 일어난 뒤입니다.',
    shadowQuote: '당신의 결정이 Ward를 만들고, Ward가 당신의 수익을 만듭니다.',
    mechanicsTitle: '현실을 반영한 메커니즘',
    mechanics: [
      { title: '신용도 구조', body: '부채를 한 번도 보유하지 않은 사람에게는 740이라는 천장이 존재합니다. 시스템은 부채를 피하는 행동이 아니라 관리하는 행동에 보상합니다. 당신의 안전 본능은 조용한 페널티입니다.' },
      { title: '지연되는 결과', body: '결정은 즉시 해소되지 않습니다. 오늘의 선택이 만든 효과는 큐에 쌓여 2~4턴 후에 나타납니다. 대부분 그 선택을 이미 잊었을 때.' },
      { title: '현금흐름 vs. 순자산', body: '자산은 풍부하고 현금은 부족할 수 있습니다. 파산으로 게임이 끝날 때, 원인은 거의 항상 보유한 자산이 아닙니다. 지불하지 못한 것입니다.' },
    ],
    whyTitle: '왜 책이 아닌 시뮬레이션인가',
    whyBody: '경제 책은 규칙을 알려줍니다. 강의는 무엇을 해야 하는지 말해줍니다. 하지만 어느 것도 당신을 실제 결정이 일어나는 그 순간에 데려다 놓지 않습니다 — 시간 압박과 불완전한 정보, 그리고 틀렸을 때의 실제 결과와 함께.',
    whyBody2: '압박 아래에서 당신의 본능이 어떻게 움직이는지 이해하는 유일한 방법은, 그 본능을 압박 아래에 두는 것입니다. 그림자 경제는 그 압박입니다 — 배움의 대가가 리셋 버튼인 공간에서.',
    whoTitle: '이런 분들을 위해 만들었습니다',
    whoProfiles: [
      { quote: '"주변에서 다들 재테크를 하는데, 저는 뭘 물어봐야 하는지조차 모르겠어요."', label: '시작점을 못 찾는 분' },
      { quote: '"개념은 알겠어요. 그런데 막상 결정해야 할 순간이 오면, 멈추거나 감으로 해버리고 후회합니다."', label: '알지만 행동이 안 되는 분' },
      { quote: '"책도 읽고 유튜브도 봤는데, 돈에 대한 생각이 실제로는 바뀐 게 없어요."', label: '공부했지만 변하지 않은 분' },
      { quote: '"시스템이 왜 이렇게 돌아가는지를 이해하고 싶어요. 그 안에서 살아남는 법만이 아니라."', label: '구조 자체가 궁금한 분' },
    ],
    whoClose: '그림자 경제는 무엇을 해야 하는지 알려주지 않습니다. 당신이 직접 결정해야 하는 상황에 놓고 — 그 결정이 실제로 무엇을 드러내는지를 보여줍니다.',
  },
  ja: {
    philosophyTitle: 'デザイン哲学',
    philosophy: [
      { title: '成長より生存', body: 'キャッシュフローは酸素です。止まった瞬間、ゲームは終わります。純資産は見栄の指標です――重要なのは次の四半期を乗り越えられるかどうかです。' },
      { title: '直感こそが障害だ', body: '「借金は危険だ。」「現金は安全だ。」これは真実ではなく、反射です。Shadow Economyは、その反射が正確にどのようにコストをもたらすかを見せるために設計されています。' },
      { title: '格差のパラドックス', body: 'あなたの富は真空の中に存在しません。蓄積されるすべての資産が周囲のコミュニティを変え、その変化が返ってきます。影はフィードバックループです。' },
      { title: '道徳的中立性', body: 'ゲームは何が正しい答えかを教えません。システム内で勝つことも代替経済を構築することも、どちらも有効な道です。シミュレーションはそれぞれの結果を示すだけです。' },
    ],
    shadowTitle: 'シャドーシステム',
    shadowBody: 'あなたが住み投資するWard（地域）は、あなたのすべての決断に反応する活力スコアを持っています。',
    shadowBody2: '代わりに、街が変わっていくのを目の当たりにします。店の明かりが消えます。通りが静かになります。不動産価値が動きます。何が起きているか理解した時には、すでに起きた後です。',
    shadowQuote: 'あなたの決断がWardを形作り、Wardがあなたのリターンを形作ります。',
    mechanicsTitle: '現実を映すメカニズム',
    mechanics: [
      { title: '信用スコアの構造', body: '一度も借金を持ったことがない人には740という天井があります。システムは借金を避ける行動ではなく、管理する行動を評価します。あなたの安全本能は、静かにペナルティです。' },
      { title: '遅れてくる結果', body: '決断はすぐに解決しません。今日の選択が生み出す効果はキューに積まれ、2〜4ターン後に現れます。ほとんどの場合、その選択を忘れた頃に。' },
      { title: 'キャッシュフロー vs. 純資産', body: '資産は豊富でも現金は不足しているという状況があり得ます。破産でゲームが終わる時、原因はほとんどの場合、保有していた資産ではありません。支払えなかったことです。' },
    ],
    whyTitle: 'なぜ本ではなくシミュレーションなのか',
    whyBody: '経済の本はルールを教えます。講座は何をすべきかを伝えます。しかしどちらも、あなたを実際の決断が起こる瞬間に連れて行ってはくれません――時間的プレッシャー、不完全な情報、そして間違えた時の実際の結果と共に。',
    whyBody2: 'プレッシャーの下であなたの直感がどう動くかを理解する唯一の方法は、その直感をプレッシャーの下に置くことです。Shadow Economyはそのプレッシャーです――学びのコストがリセットボタンである空間で。',
    whoTitle: 'こんな方のために作りました',
    whoProfiles: [
      { quote: '「周りはみんな何かに投資しているのに、何を聞けばいいのかすらわかりません。」', label: '始め方がわからない方' },
      { quote: '「概念はわかります。でも実際に決断する場面になると、止まってしまうか、感覚で決めて後悔します。」', label: 'わかるけど動けない方' },
      { quote: '「本も読んでYouTubeも見たのに、お金に対する考え方が実際には何も変わっていません。」', label: '勉強したのに変わらない方' },
      { quote: '「システムがなぜこう動いているのかを理解したい。その中で生き残る方法だけでなく。」', label: '構造そのものが気になる方' },
    ],
    whoClose: 'Shadow Economyは何をすべきかを教えません。あなた自身が決断しなければならない状況に置き――その決断が実際に何を明らかにするかを見せます。',
  },
  zh: {
    philosophyTitle: '设计哲学',
    philosophy: [
      { title: '生存优先于增长', body: '现金流是氧气。一旦中断，游戏就结束了。净资产是虚荣指标——真正重要的是你能否撑过下一个季度。' },
      { title: '直觉是障碍', body: '"债务很危险。""现金很安全。"这些不是真理，而是条件反射。Shadow Economy 的设计正是为了向你展示这些反射如何精确地让你付出代价。' },
      { title: '两极分化悖论', body: '你的财富并非存在于真空中。你积累的每一项资产都在改变周围的社区——而这些变化会反过来影响你。阴影是一个反馈循环。' },
      { title: '道德中立性', body: '游戏从不告诉你什么是正确答案。在体制内取胜和建立替代经济都是有效路径。模拟只是展示每条路的后果。' },
    ],
    shadowTitle: '阴影系统',
    shadowBody: '你居住和投资的社区（Ward）拥有一个活力值，它会对你的每一个决定做出反应。',
    shadowBody2: '相反，你会亲眼看着街区发生变化。店铺的灯光熄灭。街道变得寂静。房产价值移动。等你明白发生了什么，一切已经发生了。',
    shadowQuote: '你的决定塑造了Ward，Ward塑造了你的收益。',
    mechanicsTitle: '映射现实的机制',
    mechanics: [
      { title: '信用评分架构', body: '对于从未持有债务的人，存在740分的上限。系统奖励管理债务的行为，而非回避债务。你的安全本能，悄悄地，是一种惩罚。' },
      { title: '延迟的后果', body: '决策不会立即得到解决。你今天做出的选择所产生的影响会在队列中积累，在两三四个回合后显现——往往是在你已经忘记这个选择的时候。' },
      { title: '现金流 vs. 净资产', body: '你可以资产丰厚却现金匮乏。当游戏以破产告终时，几乎从来不是因为你拥有什么，而是因为你无法支付什么。' },
    ],
    whyTitle: '为什么是模拟，而非书本',
    whyBody: '金融书籍告诉你规则是什么。课程告诉你该做什么。但两者都无法将你带入决策真正发生的那个房间——在时间压力下，信息不完整，如果你错了就有真实后果。',
    whyBody2: '理解你的直觉在压力下如何运作的唯一方法，就是将它置于压力之下。Shadow Economy 就是那种压力——在一个学习代价是重置按钮而非十年遗憾的空间里。',
    whoTitle: '为这样的你而生',
    whoProfiles: [
      { quote: '"周围的人都在投资某些东西。我甚至不知道该问什么问题。"', label: '茫然的入门者' },
      { quote: '"我理解这些概念。但当我真的需要做决定时，我要么僵住，要么凭直觉行事然后后悔。"', label: '懂概念却无从下手的人' },
      { quote: '"我读过书，看过视频。但我对金钱的思考方式实际上没有任何改变。"', label: '学过却没有改变的人' },
      { quote: '"我想理解系统为什么这样运作——不仅仅是如何在其中生存。"', label: '对结构本身好奇的人' },
    ],
    whoClose: 'Shadow Economy 不会告诉你该做什么。它将你置于必须做决定的情境中——然后展示这些决定真正揭示了什么。',
  },
  es: {
    philosophyTitle: 'Filosofía de diseño',
    philosophy: [
      { title: 'Supervivencia sobre crecimiento', body: 'El flujo de caja es oxígeno. En el momento en que se detiene, el juego termina. El patrimonio neto es una métrica vanidosa — lo que importa es si puedes sobrevivir al próximo trimestre.' },
      { title: 'Tus instintos son el obstáculo', body: '"La deuda es peligrosa." "El efectivo es seguro." Estas no son verdades. Son reflejos. Shadow Economy está diseñado para mostrarte exactamente cómo esos reflejos te cuestan.' },
      { title: 'La paradoja de la polarización', body: 'Tu riqueza no existe en el vacío. Cada activo que acumulas cambia la comunidad a tu alrededor — y esos cambios regresan. La sombra es un bucle de retroalimentación.' },
      { title: 'Neutralidad moral', body: 'El juego nunca te dice cuál es la respuesta correcta. Ganar dentro del sistema y construir una economía alternativa son caminos igualmente válidos. La simulación solo muestra las consecuencias de cada uno.' },
    ],
    shadowTitle: 'El sistema de sombras',
    shadowBody: 'Tu barrio (Ward) — la comunidad donde vives e inviertes — tiene una puntuación de vitalidad que responde a cada decisión que tomas.',
    shadowBody2: 'En cambio, observas cómo cambia el vecindario. Las luces se apagan en las tiendas. Las calles se vuelven más silenciosas. Los valores de las propiedades se mueven. Para cuando entiendes lo que está pasando, ya ha pasado.',
    shadowQuote: 'Tus decisiones dan forma al Ward. El Ward da forma a tus rendimientos.',
    mechanicsTitle: 'Mecánicas que reflejan la realidad',
    mechanics: [
      { title: 'Arquitectura de puntuación crediticia', body: 'Existe un techo en 740 para quien nunca ha tenido deuda. El sistema recompensa el comportamiento de gestionar la deuda — no de evitarla. Tu instinto de seguridad es, silenciosamente, una penalización.' },
      { title: 'Consecuencias diferidas', body: 'Las decisiones no se resuelven de inmediato. Los efectos de lo que eliges hoy se acumulan y emergen dos, tres, cuatro turnos después — a menudo cuando ya has olvidado la elección.' },
      { title: 'Flujo de caja vs. patrimonio neto', body: 'Puedes ser rico en activos y pobre en efectivo. Cuando el juego termina en bancarrota, casi nunca es por lo que poseías. Es por lo que no podías pagar.' },
    ],
    whyTitle: 'Por qué una simulación, no un libro',
    whyBody: 'Los libros de finanzas te dicen cuáles son las reglas. Los cursos te dicen qué hacer. Ninguno te pone en la sala donde realmente ocurre la decisión — bajo presión de tiempo, con información incompleta y consecuencias reales si te equivocas.',
    whyBody2: 'La única manera de entender cómo se comportan tus instintos bajo presión es ponerlos bajo presión. Shadow Economy es esa presión — en un espacio donde el costo de aprender es un botón de reinicio, no una década de arrepentimiento.',
    whoTitle: 'Este juego fue hecho para ti si —',
    whoProfiles: [
      { quote: '"Todos a mi alrededor están invirtiendo en algo. Ni siquiera sé qué preguntas debería hacer."', label: 'El principiante abrumado' },
      { quote: '"Entiendo los conceptos. Pero cuando realmente tengo que decidir, me paralizo — o sigo mi instinto y me arrepiento."', label: 'El informado que no sabe actuar' },
      { quote: '"He leído los libros y visto los videos. Pero nada cambió realmente cómo pienso sobre el dinero."', label: 'El educado pero sin cambios' },
      { quote: '"Quiero entender por qué el sistema funciona como lo hace — no solo cómo sobrevivir dentro de él."', label: 'El curioso estructural' },
    ],
    whoClose: 'Shadow Economy no te enseña qué hacer. Te pone en situaciones donde tienes que decidir — y muestra lo que esas decisiones realmente revelan.',
  },
  sv: {
    philosophyTitle: 'Designfilosofi',
    philosophy: [
      { title: 'Överlevnad före tillväxt', body: 'Kassaflöde är syre. Det ögonblick det upphör slutar spelet. Nettovärde är ett fåfängomått — det som spelar roll är om du kan överleva nästa kvartal.' },
      { title: 'Dina instinkter är hindret', body: '"Skuld är farligt." "Kontanter är säkert." Det är inte sanningar. Det är reflexer. Shadow Economy är utformat för att visa dig exakt hur dessa reflexer kostar dig.' },
      { title: 'Polariseringsparadoxen', body: 'Din rikedom existerar inte i ett vakuum. Varje tillgång du samlar på dig förändrar samhället omkring dig — och de förändringarna kommer tillbaka. Skuggan är en återkopplingsloop.' },
      { title: 'Moralisk neutralitet', body: 'Spelet berättar aldrig vad det rätta svaret är. Att vinna inom systemet och att bygga en alternativ ekonomi är båda giltiga vägar. Simuleringen visar bara konsekvenserna av var och en.' },
    ],
    shadowTitle: 'Skuggsystemet',
    shadowBody: 'Ditt kvarter (Ward) — samhället där du bor och investerar — har ett vitalitetspoäng som reagerar på varje beslut du fattar.',
    shadowBody2: 'Istället ser du grannskapet förändras. Ljuset slocknar i butikerna. Gatorna blir tystare. Fastighetsvärden rör sig. När du förstår vad som händer har det redan hänt.',
    shadowQuote: 'Dina beslut formar Ward. Ward formar dina avkastningar.',
    mechanicsTitle: 'Mekanik som speglar verkligheten',
    mechanics: [
      { title: 'Kreditpoängens arkitektur', body: 'Det finns ett tak vid 740 för den som aldrig haft skuld. Systemet belönar beteendet att hantera skuld — inte att undvika den. Din säkerhetsinstinkt är, tyst, ett straff.' },
      { title: 'Försenade konsekvenser', body: 'Beslut löser sig inte omedelbart. Effekterna av vad du väljer idag ackumuleras och dyker upp två, tre, fyra varv senare — ofta när du redan glömt valet.' },
      { title: 'Kassaflöde vs. nettovärde', body: 'Du kan vara rik på tillgångar men fattig på kontanter. När spelet slutar i konkurs beror det nästan aldrig på vad du ägde. Det beror på vad du inte kunde betala.' },
    ],
    whyTitle: 'Varför en simulering, inte en bok',
    whyBody: 'Finansböcker berättar vilka reglerna är. Kurser berättar vad du ska göra. Ingen av dem sätter dig i rummet där beslutet faktiskt fattas — under tidspress, med ofullständig information och verkliga konsekvenser om du har fel.',
    whyBody2: 'Det enda sättet att förstå hur dina instinkter beter sig under press är att utsätta dem för press. Shadow Economy är det trycket — i ett utrymme där kostnaden för att lära sig är en återställningsknapp, inte ett decennium av ånger.',
    whoTitle: 'Det här spelet skapades för dig om —',
    whoProfiles: [
      { quote: '"Alla runt mig investerar i något. Jag vet inte ens vilka frågor jag borde ställa."', label: 'Den överväldigade nybörjaren' },
      { quote: '"Jag förstår begreppen. Men när jag faktiskt måste bestämma, fryser jag — eller följer magkänslan och ångrar mig."', label: 'Den teoretiskt kunnige, praktiskt vilsne' },
      { quote: '"Jag har läst böckerna och sett videorna. Men ingenting förändrade egentligen hur jag tänker om pengar."', label: 'Den utbildade men oförändrade' },
      { quote: '"Jag vill förstå varför systemet fungerar som det gör — inte bara hur man överlever inuti det."', label: 'Den strukturellt nyfikne' },
    ],
    whoClose: 'Shadow Economy lär dig inte vad du ska göra. Det sätter dig i situationer där du måste bestämma — och visar vad dessa beslut faktiskt avslöjar.',
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
