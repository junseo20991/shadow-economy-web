import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  en: {
    badge: 'Personalized Report',
    headline: 'A completed playthrough becomes a report.',
    headlineSub: 'Built from your own decisions.',
    sub: 'One finished game becomes a report built from your decisions, timing, risk tolerance, and tradeoffs.',
    valueTitle: 'What it gives you',
    value: [
      { title: 'A clearer read on your habits', body: 'See how you play when the stakes are real.' },
      { title: 'A bridge to financial literacy', body: 'Game behavior becomes usable economic language.' },
      { title: 'A reason to replay', body: 'A second run creates a new report.' },
    ],
    purposeTitle: 'Why it exists',
    purposeBody1: 'The report is built for players who want to learn economics but need a place to start. It begins with play, then explains what it means.',
    purposeBody2: 'That makes it easier to read, easier to remember, and easier to use.',
    diffTitle: 'Why it stands apart',
    diff: [
      { title: 'It comes from play, not a form.', body: 'The source is the game state itself: choices, timing, assets, liabilities, and outcomes.' },
      { title: 'Each insight points to an action.', body: 'The report links a pattern to what happened in the game.' },
      { title: 'Clear, not crowded.', body: 'The tone stays simple and the content stays usable.' },
    ],
    whatTitle: 'What\'s in the report',
    what: [
      { icon: '⏱', title: 'Decision Retrospective', body: 'The moment your path changed, and the choice behind it.' },
      { icon: '🕳', title: 'Hidden Information', body: 'Signals that were there before you could see them.' },
      { icon: '⚖️', title: 'Alternative Paths', body: 'How different choices from the same situation could have led to different outcomes, explained using your play data.' },
      { icon: '🧠', title: 'Cognitive Signature', body: 'The habits and biases that shaped your choices.' },
    ],
    onceTitle: 'One report, one playthrough',
    onceBody: 'The report is generated at the end of a run. It captures one set of decisions under one set of conditions.',
    onceBody2: 'Play again and the report changes with you. It stays tied to a real run.',
    ctaTitle: 'Ready to see your own pattern?',
    ctaBody: 'Get report credits and unlock your report after your next game.',
    ctaButton: 'See pricing',
  },
  ko: {
    badge: '개별화 정밀 분석 보고서',
    headline: '하나의 플레이가 하나의 보고서가 됩니다.',
    headlineSub: '당신의 선택으로 만들어집니다.',
    sub: 'Shadow Economy는 한 번의 완주를 당신의 데이터로만 만든 보고서로 바꿉니다. 결정, 타이밍, 위험 감수 방식, 압박 속에서 감수한 트레이드오프까지 담겨 있습니다. 실용적이고, 개인적이며, 다시 플레이할 이유가 됩니다.',
    valueTitle: '플레이어에게 주는 가치',
    value: [
      { title: '내 플레이 습관이 보입니다', body: '추상적인 설명이 아니라, 실제로 어떤 판단을 반복하는지 보여줍니다.' },
      { title: '경제를 자기 사례로 배웁니다', body: '게임 속 행동을 현실 경제 개념으로 연결해 줍니다.' },
      { title: '다시 플레이할 이유가 생깁니다', body: '다시 하면 다른 보고서가 나오므로 학습이 누적됩니다.' },
    ],
    purposeTitle: '이 제품의 목적',
    purposeBody1: '경제를 배우고 싶지만 어디서 시작해야 할지 모르는 플레이어를 위한 보고서입니다. 이론부터 시작하지 않고, 자기 플레이부터 시작합니다.',
    purposeBody2: '그래서 보고서는 이해하기 쉽고, 기억에 남고, 돈과 선택을 보는 방식까지 바꾸기 쉽습니다.',
    diffTitle: '차별화되는 이유',
    diff: [
      { title: '설문이 아니라 플레이에서 나옵니다', body: '출발점은 게임 상태 자체입니다. 선택, 타이밍, 자산, 부채, 결과를 모두 읽습니다.' },
      { title: '모든 해석은 행동으로 돌아갑니다', body: '추상적인 칭찬이 아니라, 게임 안에서 실제로 벌어진 일에 연결합니다.' },
      { title: '과장 없이도 프리미엄하게 읽힙니다', body: '톤은 절제되어 있지만, 내용은 분명하고 유용합니다.' },
    ],
    whatTitle: '보고서에 담긴 것',
    what: [
      { icon: '⏱', title: '결정의 회고', body: '궤적이 바뀐 정확한 순간과 그 순간의 선택을 보여줍니다.' },
      { icon: '🕳', title: '숨겨진 정보', body: '당시에는 보이지 않았지만 시뮬레이션 안에 존재했던 신호를 보여줍니다.' },
      { icon: '⚖️', title: '대안 경로', body: '같은 상황에서 다른 선택을 했다면 어떤 결과가 달라졌을 수 있는지, 플레이 데이터를 바탕으로 설명합니다.' },
      { icon: '🧠', title: '인지 서명', body: '전체 플레이 기록에서 추출한 본능과 편향의 패턴을 담습니다.' },
    ],
    onceTitle: '플레이 한 번, 보고서 한 번',
    onceBody: '보고서는 완주 시점에 생성됩니다. 특정한 압박 속에서 내린 선택의 버전을 포착합니다.',
    onceBody2: '다시 플레이하면 보고서도 달라집니다. 그게 이 제품의 핵심입니다. 진짜 플레이를 기준으로 하기 때문입니다.',
    ctaTitle: '당신의 패턴을 볼 준비가 되셨나요?',
    ctaBody: '보고서 크레딧을 구매하고, 다음 플레이 후 개별화 정밀 분석 보고서를 받으세요.',
    ctaButton: '가격 보기',
  },
  ja: {
    badge: '個別化精密分析レポート',
    headline: '一回のプレイが、一つのレポートになる。',
    headlineSub: 'あなたの選択から作られます。',
    sub: 'Shadow Economyは、1回のクリアをあなたのデータだけで作るレポートに変えます。決断、タイミング、リスク許容、プレッシャー下で受け入れたトレードオフが含まれます。実用的で、個人的で、再プレイの理由になります。',
    valueTitle: 'プレイヤーにもたらす価値',
    value: [
      { title: '自分の癖が見える', body: '抽象論ではなく、実際にどの判断を繰り返すのかが分かります。' },
      { title: '経済を自分の経験で学べる', body: 'ゲーム内の行動を、現実の経済概念へとつなげます。' },
      { title: '再プレイの理由になる', body: 'もう一度遊ぶと別のレポートが出るので、学びが積み重なります。' },
    ],
    purposeTitle: 'この製品の目的',
    purposeBody1: '経済を学びたいが、何から始めればいいか分からないプレイヤーのためのレポートです。理論からではなく、自分のプレイから始めます。',
    purposeBody2: 'そのため、レポートは理解しやすく、記憶に残りやすく、お金と選択の見方を変えやすいのです。',
    diffTitle: '何が違うのか',
    diff: [
      { title: 'アンケートではなく、プレイから生まれる', body: '出発点はゲーム状態そのものです。選択、タイミング、資産、負債、結果を読み取ります。' },
      { title: 'すべての示唆が行動に戻る', body: '抽象的な称賛ではなく、ゲーム内で実際に起きたことへつなげます。' },
      { title: '押しつけずに高品質に見える', body: 'トーンは落ち着いていますが、内容は明確で役に立ちます。' },
    ],
    whatTitle: 'レポートに含まれるもの',
    what: [
      { icon: '⏱', title: '決断の回顧', body: '軌跡が変わった正確な瞬間と、その時の選択を示します。' },
      { icon: '🕳', title: '隠れた情報', body: 'その時には見えなかったが、シミュレーション内に存在したシグナルを示します。' },
      { icon: '⚖️', title: '代替経路', body: '同じ状況で別の選択をしていた場合にどう変わり得たかを、プレイデータに基づいて説明します。' },
      { icon: '🧠', title: '認知的シグネチャー', body: '全プレイ履歴から抽出した、本能とバイアスのパターンを収めます。' },
    ],
    onceTitle: '一回のプレイに、一つのレポート',
    onceBody: 'レポートはクリア時に生成されます。特定の圧力下で下した選択の版を捉えます。',
    onceBody2: 'もう一度遊べば、レポートも変わります。だからこそ価値があります。実際のプレイに結びついているからです。',
    ctaTitle: 'あなたのパターンを見る準備はできていますか？',
    ctaBody: 'レポートクレジットを購入して、次のプレイ後に個別化精密分析レポートを受け取りましょう。',
    ctaButton: '料金を見る',
  },
  zh: {
    badge: '个性化精密分析报告',
    headline: '一次完整游玩，生成一份报告。',
    headlineSub: '基于你的选择构建。',
    sub: 'Shadow Economy 会把一局完整游戏变成一份只由你的数据构成的报告：你的决策、节奏、风险偏好，以及你在压力下接受的取舍。它实用、个人化，而且值得反复体验。',
    valueTitle: '它为玩家带来的价值',
    value: [
      { title: '看清自己的游玩习惯', body: '不是抽象建议，而是看到自己在真实压力下如何决策。' },
      { title: '用自己的经历学习经济', body: '把游戏中的行为翻译成可以继续使用的现实经济概念。' },
      { title: '给再次游玩一个理由', body: '再玩一次会得到新报告，学习也会随之累积。' },
    ],
    purposeTitle: '它存在的目的',
    purposeBody1: '这份报告是为那些想学习经济、却不知道从哪里开始的玩家准备的。它不从理论开始，而是从他们自己的游玩开始。',
    purposeBody2: '因此，它更容易吸收、更容易记住，也更容易改变一个人看待金钱的方式。',
    diffTitle: '它为什么不同',
    diff: [
      { title: '来源于游玩，而不是问卷', body: '起点是游戏状态本身：选择、时机、资产、负债和结果。' },
      { title: '每个洞察都能回到动作上', body: '它不会停留在抽象赞美，而是回到游戏里实际发生过什么。' },
      { title: '克制，但依然高级', body: '语气不张扬，内容却清楚、具体，而且有用。' },
    ],
    whatTitle: '报告包含的内容',
    what: [
      { icon: '⏱', title: '决策回顾', body: '展示轨迹发生变化的那个时刻，以及当时的选择。' },
      { icon: '🕳', title: '隐藏信息', body: '展示当时存在、却没有被玩家看见的信号。' },
      { icon: '⚖️', title: '替代路径', body: '根据你的游玩数据，说明在相同情况下若做出不同选择，结果可能如何变化。' },
      { icon: '🧠', title: '认知特征', body: '收录从完整游玩历史中提取出的本能与偏见模式。' },
    ],
    onceTitle: '一次游玩，一份报告',
    onceBody: '报告在通关时生成。它记录的是你在特定压力下做出的那一版选择。',
    onceBody2: '再玩一次，报告也会变化。它之所以有价值，就是因为它对应的是一次真实游玩。',
    ctaTitle: '准备好查看你的模式了吗？',
    ctaBody: '购买报告积分，在下次游玩后解锁你的个性化精密分析报告。',
    ctaButton: '查看定价',
  },
  es: {
    badge: 'Informe de análisis profundo personalizado',
    headline: 'Una partida completada se convierte en un informe.',
    headlineSub: 'Construido desde tus decisiones.',
    sub: 'Shadow Economy convierte una partida terminada en un informe construido con tus datos: tus decisiones, tu ritmo, tu tolerancia al riesgo y los intercambios que aceptaste bajo presión. Es práctico, personal y repetible.',
    valueTitle: 'Qué aporta al jugador',
    value: [
      { title: 'Una lectura más clara de tus hábitos', body: 'Ves cómo juegas cuando hay presión real, no solo teoría.' },
      { title: 'Un puente hacia la educación financiera', body: 'El comportamiento dentro del juego se traduce en conceptos que sí puedes usar.' },
      { title: 'Un motivo para volver a jugar', body: 'Una segunda partida crea un informe nuevo, así que el aprendizaje se acumula.' },
    ],
    purposeTitle: 'Por qué existe',
    purposeBody1: 'El informe está pensado para jugadores que quieren aprender economía pero no saben por dónde empezar. En lugar de comenzar con teoría, comienza con su propia partida.',
    purposeBody2: 'Eso lo hace más fácil de absorber, más fácil de recordar y más probable de cambiar cómo alguien piensa sobre el dinero.',
    diffTitle: 'Por qué se diferencia',
    diff: [
      { title: 'Nace de la partida, no de un cuestionario', body: 'El punto de partida es el estado del juego: decisiones, tiempos, activos, pasivos y resultados.' },
      { title: 'Cada idea vuelve a una acción concreta', body: 'No se queda en elogios abstractos; enlaza patrones con lo que ocurrió dentro del juego.' },
      { title: 'Habla con calma, pero se siente premium', body: 'El tono es contenido, pero el contenido es claro, útil y serio.' },
    ],
    whatTitle: 'Qué contiene el informe',
    what: [
      { icon: '⏱', title: 'Retrospectiva de decisiones', body: 'Muestra el momento exacto en que cambió tu trayectoria y la decisión que lo provocó.' },
      { icon: '🕳', title: 'Información oculta', body: 'Muestra señales que estaban ahí, pero que el jugador no veía en ese momento.' },
      { icon: '⚖️', title: 'Caminos alternativos', body: 'Explica, con datos de tu partida, cómo otros decisiones en la misma situación podrían haber cambiado el resultado.' },
      { icon: '🧠', title: 'Firma cognitiva', body: 'Recoge los patrones de instinto y sesgo extraídos de tu historial completo de juego.' },
    ],
    onceTitle: 'Una partida, un informe',
    onceBody: 'El informe se genera al completar la partida. Captura la versión de tus decisiones bajo esa presión concreta.',
    onceBody2: 'Vuelve a jugar y el informe cambiará contigo. Ahí está su valor: responde a una partida real, no a un perfil genérico.',
    ctaTitle: '¿Listo para ver tu propio patrón?',
    ctaBody: 'Consigue créditos de informe y desbloquea tu informe de análisis profundo personalizado tras tu próxima partida.',
    ctaButton: 'Ver precios',
  },
  sv: {
    badge: 'Personaliserad djupanalysrapport',
    headline: 'En avslutad genomspelning blir en rapport.',
    headlineSub: 'Byggd från dina egna beslut.',
    sub: 'Shadow Economy gör en avslutad omgång till en rapport byggd enbart av dina data: dina beslut, din timing, din risknivå och de avvägningar du accepterade under press. Den är praktisk, personlig och går att återvända till.',
    valueTitle: 'Vad den ger spelaren',
    value: [
      { title: 'En tydligare bild av dina vanor', body: 'Du ser hur du spelar när insatserna är verkliga, inte abstrakta.' },
      { title: 'En bro till ekonomisk förståelse', body: 'Beteende i spelet översätts till ekonomiska begrepp du faktiskt kan använda.' },
      { title: 'En anledning att spela igen', body: 'En ny genomspelning ger en ny rapport, så lärandet fortsätter.' },
    ],
    purposeTitle: 'Varför den finns',
    purposeBody1: 'Rapporten är för spelare som vill lära sig ekonomi men inte vet var de ska börja. I stället för att börja med teori börjar den med deras egen genomspelning.',
    purposeBody2: 'Det gör den lättare att ta till sig, lättare att minnas och mer sannolik att förändra hur någon tänker om pengar.',
    diffTitle: 'Varför den skiljer sig',
    diff: [
      { title: 'Den kommer från spelet, inte från ett formulär', body: 'Utgångspunkten är spelets tillstånd: beslut, timing, tillgångar, skulder och resultat.' },
      { title: 'Varje insikt pekar tillbaka på en handling', body: 'Den stannar inte vid abstrakta påståenden utan kopplar mönster till vad som faktiskt hände.' },
      { title: 'Den är återhållsam men känns premium', body: 'Tonläget är lugnt, men innehållet är tydligt, konkret och användbart.' },
    ],
    whatTitle: 'Vad rapporten innehåller',
    what: [
      { icon: '⏱', title: 'Beslutsutvärdering', body: 'Visar exakt när din bana förändrades och vilket val som orsakade det.' },
      { icon: '🕳', title: 'Dold information', body: 'Visar signaler som fanns där, men som spelaren inte kunde se då.' },
      { icon: '⚖️', title: 'Alternativa vägar', body: 'Förklarar utifrån din speldata hur andra val i samma situation kunde ha gett ett annat utfall.' },
      { icon: '🧠', title: 'Kognitiv signatur', body: 'Samlar mönstren av instinkt och bias från hela din spelhistorik.' },
    ],
    onceTitle: 'En genomspelning, en rapport',
    onceBody: 'Rapporten genereras när du slutför omgången. Den fångar versionen av dina beslut under just det trycket.',
    onceBody2: 'Spelar du igen förändras rapporten med dig. Det är där värdet ligger: den svarar på en verklig omgång, inte på en generell profil.',
    ctaTitle: 'Redo att se ditt eget mönster?',
    ctaBody: 'Köp rapportkrediter och lås upp din personaliserade djupanalysrapport efter nästa spel.',
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
          <h2 className="text-2xl font-bold text-white mb-10 sm:mb-12 text-center">{tx.valueTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {tx.value.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 sm:p-6">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{tx.purposeTitle}</h2>
              <p className="text-gray-400 leading-relaxed mb-4">{tx.purposeBody1}</p>
              <p className="text-gray-400 leading-relaxed">{tx.purposeBody2}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{tx.diffTitle}</h2>
              <div className="space-y-3">
                {tx.diff.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-4">
                    <h3 className="text-white font-semibold mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
