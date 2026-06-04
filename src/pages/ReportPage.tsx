import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  "en": {
    "badge": "Personalized Report",
    "headline": "A completed playthrough becomes a report.",
    "headlineSub": "Built from your own decisions.",
    "sub": "One finished game becomes a report built from your decisions, timing, risk tolerance, and tradeoffs.",
    "valueTitle": "What it gives you",
    "value": [
      {
        "title": "A clearer read on your habits",
        "body": "See how you played under pressure inside the simulation."
      },
      {
        "title": "A bridge to financial literacy",
        "body": "Game behavior becomes usable economic language."
      },
      {
        "title": "A reason to replay",
        "body": "A second run creates a new report."
      }
    ],
    "purposeTitle": "Why it exists",
    "purposeBody1": "The report is built for players who want to learn economics but need a place to start. It begins with play, then explains what it means.",
    "purposeBody2": "That makes it easier to read, easier to remember, and easier to use.",
    "diffTitle": "Why it stands apart",
    "diff": [
      {
        "title": "It comes from play, not a form.",
        "body": "The source is the game state itself: choices, timing, assets, liabilities, and outcomes."
      },
      {
        "title": "Each insight points to an action.",
        "body": "The report links a pattern to what happened in the game."
      },
      {
        "title": "Clear, not crowded.",
        "body": "The tone stays simple and the content stays usable."
      }
    ],
    "whatTitle": "What's in the report",
    "what": [
      {
        "icon": "⏱",
        "title": "Decision Retrospective",
        "body": "The moment your path changed, and the choice behind it."
      },
      {
        "icon": "🕳",
        "title": "Hidden Information",
        "body": "Signals that were there before you could see them."
      },
      {
        "icon": "⚖️",
        "title": "Alternative Paths",
        "body": "Different possible outcomes from the same starting point, showing how the run could unfold in more than one way."
      },
      {
        "icon": "🧠",
        "title": "Cognitive Signature",
        "body": "The habits and biases that shaped your choices."
      }
    ],
    "onceTitle": "One report, one playthrough",
    "onceBody": "The report is generated at the end of a run. It captures one set of decisions under one set of conditions.",
    "onceBody2": "Play again and the report changes with you. It stays tied to a real run.",
    "ctaTitle": "Ready to see your own pattern?",
    "ctaBody": "Get report credits in the mobile app and unlock your report after your next completed game.",
    "ctaButton": "See pricing"
  },
  "ko": {
    "badge": "개별화 정밀 분석 보고서",
    "headline": "하나의 플레이가 하나의 보고서가 됩니다.",
    "headlineSub": "당신의 선택으로 만들어집니다.",
    "sub": "Shadow Economy는 한 번의 완주를 당신의 데이터로만 만든 보고서로 바꿉니다. 결정, 타이밍, 위험 감수 방식, 압박 속에서 감수한 트레이드오프까지 담겨 있습니다. 실용적이고, 개인적이며, 다시 플레이할 이유가 됩니다.",
    "valueTitle": "플레이어에게 주는 가치",
    "value": [
      {
        "title": "내 플레이 습관이 보입니다",
        "body": "시뮬레이션 내에서 압박감 속에서 어떻게 플레이했는지 확인해 보세요."
      },
      {
        "title": "경제를 자기 사례로 배웁니다",
        "body": "게임 속 행동을 현실 경제 개념으로 연결해 줍니다."
      },
      {
        "title": "다시 플레이할 이유가 생깁니다",
        "body": "다시 하면 다른 보고서가 나오므로 학습이 누적됩니다."
      }
    ],
    "purposeTitle": "이 제품의 목적",
    "purposeBody1": "경제를 배우고 싶지만 어디서 시작해야 할지 모르는 플레이어를 위한 보고서입니다. 이론부터 시작하지 않고, 자기 플레이부터 시작합니다.",
    "purposeBody2": "그래서 보고서는 이해하기 쉽고, 기억에 남고, 돈과 선택을 보는 방식까지 바꾸기 쉽습니다.",
    "diffTitle": "차별화되는 이유",
    "diff": [
      {
        "title": "설문이 아니라 플레이에서 나옵니다",
        "body": "출발점은 게임 상태 자체입니다. 선택, 타이밍, 자산, 부채, 결과를 모두 읽습니다."
      },
      {
        "title": "모든 해석은 행동으로 돌아갑니다",
        "body": "추상적인 칭찬이 아니라, 게임 안에서 실제로 벌어진 일에 연결합니다."
      },
      {
        "title": "과장 없이도 프리미엄하게 읽힙니다",
        "body": "톤은 절제되어 있지만, 내용은 분명하고 유용합니다."
      }
    ],
    "whatTitle": "보고서에 담긴 것",
    "what": [
      {
        "icon": "⏱",
        "title": "결정의 회고",
        "body": "궤적이 바뀐 정확한 순간과 그 순간의 선택을 보여줍니다."
      },
      {
        "icon": "🕳",
        "title": "숨겨진 정보",
        "body": "당시에는 보이지 않았지만 시뮬레이션 안에 존재했던 신호를 보여줍니다."
      },
      {
        "icon": "⚖️",
        "title": "대안 경로",
        "body": "같은 출발점에서 서로 다른 여러 가능한 결과를 보여줍니다."
      },
      {
        "icon": "🧠",
        "title": "인지 서명",
        "body": "전체 플레이 기록에서 추출한 본능과 편향의 패턴을 담습니다."
      }
    ],
    "onceTitle": "플레이 한 번, 보고서 한 번",
    "onceBody": "보고서는 완주 시점에 생성됩니다. 특정한 압박 속에서 내린 선택의 버전을 포착합니다.",
    "onceBody2": "다시 플레이하면 보고서도 달라집니다. 그게 이 제품의 핵심입니다. 진짜 플레이를 기준으로 하기 때문입니다.",
    "ctaTitle": "당신의 패턴을 볼 준비가 되셨나요?",
    "ctaBody": "모바일 앱에서 보고서 크레딧을 받고 다음 게임 완료 후 보고서를 잠금 해제하세요.",
    "ctaButton": "가격 보기"
  },
  "ja": {
    "badge": "個別化精密分析レポート",
    "headline": "一回のプレイが、一つのレポートになる。",
    "headlineSub": "あなたの選択から作られます。",
    "sub": "Shadow Economyは、1回のクリアをあなたのデータだけで作るレポートに変えます。決断、タイミング、リスク許容、プレッシャー下で受け入れたトレードオフが含まれます。実用的で、個人的で、再プレイの理由になります。",
    "valueTitle": "プレイヤーにもたらす価値",
    "value": [
      {
        "title": "自分の癖が見える",
        "body": "シミュレーション内でプレッシャーの下でどのようにプレーしたかを確認してください。"
      },
      {
        "title": "経済を自分の経験で学べる",
        "body": "ゲーム内の行動を、現実の経済概念へとつなげます。"
      },
      {
        "title": "再プレイの理由になる",
        "body": "もう一度遊ぶと別のレポートが出るので、学びが積み重なります。"
      }
    ],
    "purposeTitle": "この製品の目的",
    "purposeBody1": "経済を学びたいが、何から始めればいいか分からないプレイヤーのためのレポートです。理論からではなく、自分のプレイから始めます。",
    "purposeBody2": "そのため、レポートは理解しやすく、記憶に残りやすく、お金と選択の見方を変えやすいのです。",
    "diffTitle": "何が違うのか",
    "diff": [
      {
        "title": "アンケートではなく、プレイから生まれる",
        "body": "出発点はゲーム状態そのものです。選択、タイミング、資産、負債、結果を読み取ります。"
      },
      {
        "title": "すべての示唆が行動に戻る",
        "body": "抽象的な称賛ではなく、ゲーム内で実際に起きたことへつなげます。"
      },
      {
        "title": "押しつけずに高品質に見える",
        "body": "トーンは落ち着いていますが、内容は明確で役に立ちます。"
      }
    ],
    "whatTitle": "レポートに含まれるもの",
    "what": [
      {
        "icon": "⏱",
        "title": "決断の回顧",
        "body": "軌跡が変わった正確な瞬間と、その時の選択を示します。"
      },
      {
        "icon": "🕳",
        "title": "隠れた情報",
        "body": "その時には見えなかったが、シミュレーション内に存在したシグナルを示します。"
      },
      {
        "icon": "⚖️",
        "title": "代替経路",
        "body": "同じ出発点から生まれうるさまざまな結果を示します。"
      },
      {
        "icon": "🧠",
        "title": "認知的シグネチャー",
        "body": "全プレイ履歴から抽出した、本能とバイアスのパターンを収めます。"
      }
    ],
    "onceTitle": "一回のプレイに、一つのレポート",
    "onceBody": "レポートはクリア時に生成されます。特定の圧力下で下した選択の版を捉えます。",
    "onceBody2": "もう一度遊べば、レポートも変わります。だからこそ価値があります。実際のプレイに結びついているからです。",
    "ctaTitle": "あなたのパターンを見る準備はできていますか？",
    "ctaBody": "モバイル アプリでレポート クレジットを取得し、次にゲームを完了した後にレポートのロックを解除します。",
    "ctaButton": "料金を見る"
  },
  "zh": {
    "badge": "个性化精密分析报告",
    "headline": "一次完整游玩，生成一份报告。",
    "headlineSub": "基于你的选择构建。",
    "sub": "Shadow Economy 会把一局完整游戏变成一份只由你的数据构成的报告：你的决策、节奏、风险偏好，以及你在压力下接受的取舍。它实用、个人化，而且值得反复体验。",
    "valueTitle": "它为玩家带来的价值",
    "value": [
      {
        "title": "看清自己的游玩习惯",
        "body": "看看您在模拟中如何在压力下发挥作用。"
      },
      {
        "title": "用自己的经历学习经济",
        "body": "把游戏中的行为翻译成可以继续使用的现实经济概念。"
      },
      {
        "title": "给再次游玩一个理由",
        "body": "再玩一次会得到新报告，学习也会随之累积。"
      }
    ],
    "purposeTitle": "它存在的目的",
    "purposeBody1": "这份报告是为那些想学习经济、却不知道从哪里开始的玩家准备的。它不从理论开始，而是从他们自己的游玩开始。",
    "purposeBody2": "因此，它更容易吸收、更容易记住，也更容易改变一个人看待金钱的方式。",
    "diffTitle": "它为什么不同",
    "diff": [
      {
        "title": "来源于游玩，而不是问卷",
        "body": "起点是游戏状态本身：选择、时机、资产、负债和结果。"
      },
      {
        "title": "每个洞察都能回到动作上",
        "body": "它不会停留在抽象赞美，而是回到游戏里实际发生过什么。"
      },
      {
        "title": "克制，但依然高级",
        "body": "语气不张扬，内容却清楚、具体，而且有用。"
      }
    ],
    "whatTitle": "报告包含的内容",
    "what": [
      {
        "icon": "⏱",
        "title": "决策回顾",
        "body": "展示轨迹发生变化的那个时刻，以及当时的选择。"
      },
      {
        "icon": "🕳",
        "title": "隐藏信息",
        "body": "展示当时存在、却没有被玩家看见的信号。"
      },
      {
        "icon": "⚖️",
        "title": "替代路径",
        "body": "展示从同一起点出发可能出现的多种结果。"
      },
      {
        "icon": "🧠",
        "title": "认知特征",
        "body": "收录从完整游玩历史中提取出的本能与偏见模式。"
      }
    ],
    "onceTitle": "一次游玩，一份报告",
    "onceBody": "报告在通关时生成。它记录的是你在特定压力下做出的那一版选择。",
    "onceBody2": "再玩一次，报告也会变化。它之所以有价值，就是因为它对应的是一次真实游玩。",
    "ctaTitle": "准备好查看你的模式了吗？",
    "ctaBody": "在移动应用程序中获取报告积分，并在下一次完成游戏后解锁您的报告。",
    "ctaButton": "查看定价"
  },
  "es": {
    "badge": "Informe de análisis profundo personalizado",
    "headline": "Una partida completada se convierte en un informe.",
    "headlineSub": "Construido desde tus decisiones.",
    "sub": "Shadow Economy convierte una partida terminada en un informe construido con tus datos: tus decisiones, tu ritmo, tu tolerancia al riesgo y los intercambios que aceptaste bajo presión. Es práctico, personal y repetible.",
    "valueTitle": "Qué aporta al jugador",
    "value": [
      {
        "title": "Una lectura más clara de tus hábitos",
        "body": "Mira cómo jugaste bajo presión dentro de la simulación."
      },
      {
        "title": "Un puente hacia la educación financiera",
        "body": "El comportamiento dentro del juego se traduce en conceptos que sí puedes usar."
      },
      {
        "title": "Un motivo para volver a jugar",
        "body": "Una segunda partida crea un informe nuevo, así que el aprendizaje se acumula."
      }
    ],
    "purposeTitle": "Por qué existe",
    "purposeBody1": "El informe está pensado para jugadores que quieren aprender economía pero no saben por dónde empezar. En lugar de comenzar con teoría, comienza con su propia partida.",
    "purposeBody2": "Eso lo hace más fácil de absorber, más fácil de recordar y más probable de cambiar cómo alguien piensa sobre el dinero.",
    "diffTitle": "Por qué se diferencia",
    "diff": [
      {
        "title": "Nace de la partida, no de un cuestionario",
        "body": "El punto de partida es el estado del juego: decisiones, tiempos, activos, pasivos y resultados."
      },
      {
        "title": "Cada idea vuelve a una acción concreta",
        "body": "No se queda en elogios abstractos; enlaza patrones con lo que ocurrió dentro del juego."
      },
      {
        "title": "Habla con calma, pero se siente premium",
        "body": "El tono es contenido, pero el contenido es claro, útil y serio."
      }
    ],
    "whatTitle": "Qué contiene el informe",
    "what": [
      {
        "icon": "⏱",
        "title": "Retrospectiva de decisiones",
        "body": "Muestra el momento exacto en que cambió tu trayectoria y la decisión que lo provocó."
      },
      {
        "icon": "🕳",
        "title": "Información oculta",
        "body": "Muestra señales que estaban ahí, pero que el jugador no veía en ese momento."
      },
      {
        "icon": "⚖️",
        "title": "Caminos alternativos",
        "body": "Muestra distintos resultados posibles desde el mismo punto de partida."
      },
      {
        "icon": "🧠",
        "title": "Firma cognitiva",
        "body": "Recoge los patrones de instinto y sesgo extraídos de tu historial completo de juego."
      }
    ],
    "onceTitle": "Una partida, un informe",
    "onceBody": "El informe se genera al completar la partida. Captura la versión de tus decisiones bajo esa presión concreta.",
    "onceBody2": "Vuelve a jugar y el informe cambiará contigo. Ahí está su valor: responde a una partida real, no a un perfil genérico.",
    "ctaTitle": "¿Listo para ver tu propio patrón?",
    "ctaBody": "Obtenga créditos de informe en la aplicación móvil y desbloquee su informe después de completar el próximo juego.",
    "ctaButton": "Ver precios"
  },
  "sv": {
    "badge": "Personaliserad djupanalysrapport",
    "headline": "En avslutad genomspelning blir en rapport.",
    "headlineSub": "Byggd från dina egna beslut.",
    "sub": "Shadow Economy gör en avslutad omgång till en rapport byggd enbart av dina data: dina beslut, din timing, din risknivå och de avvägningar du accepterade under press. Den är praktisk, personlig och går att återvända till.",
    "valueTitle": "Vad den ger spelaren",
    "value": [
      {
        "title": "En tydligare bild av dina vanor",
        "body": "Se hur du spelade under press i simuleringen."
      },
      {
        "title": "En bro till ekonomisk förståelse",
        "body": "Beteende i spelet översätts till ekonomiska begrepp du faktiskt kan använda."
      },
      {
        "title": "En anledning att spela igen",
        "body": "En ny genomspelning ger en ny rapport, så lärandet fortsätter."
      }
    ],
    "purposeTitle": "Varför den finns",
    "purposeBody1": "Rapporten är för spelare som vill lära sig ekonomi men inte vet var de ska börja. I stället för att börja med teori börjar den med deras egen genomspelning.",
    "purposeBody2": "Det gör den lättare att ta till sig, lättare att minnas och mer sannolik att förändra hur någon tänker om pengar.",
    "diffTitle": "Varför den skiljer sig",
    "diff": [
      {
        "title": "Den kommer från spelet, inte från ett formulär",
        "body": "Utgångspunkten är spelets tillstånd: beslut, timing, tillgångar, skulder och resultat."
      },
      {
        "title": "Varje insikt pekar tillbaka på en handling",
        "body": "Den stannar inte vid abstrakta påståenden utan kopplar mönster till vad som faktiskt hände."
      },
      {
        "title": "Den är återhållsam men känns premium",
        "body": "Tonläget är lugnt, men innehållet är tydligt, konkret och användbart."
      }
    ],
    "whatTitle": "Vad rapporten innehåller",
    "what": [
      {
        "icon": "⏱",
        "title": "Beslutsutvärdering",
        "body": "Visar exakt när din bana förändrades och vilket val som orsakade det."
      },
      {
        "icon": "🕳",
        "title": "Dold information",
        "body": "Visar signaler som fanns där, men som spelaren inte kunde se då."
      },
      {
        "icon": "⚖️",
        "title": "Alternativa vägar",
        "body": "Visar flera möjliga resultat från samma utgångspunkt."
      },
      {
        "icon": "🧠",
        "title": "Kognitiv signatur",
        "body": "Samlar mönstren av instinkt och bias från hela din spelhistorik."
      }
    ],
    "onceTitle": "En genomspelning, en rapport",
    "onceBody": "Rapporten genereras när du slutför omgången. Den fångar versionen av dina beslut under just det trycket.",
    "onceBody2": "Spelar du igen förändras rapporten med dig. Det är där värdet ligger: den svarar på en verklig omgång, inte på en generell profil.",
    "ctaTitle": "Redo att se ditt eget mönster?",
    "ctaBody": "Få rapportkrediter i mobilappen och lås upp din rapport efter ditt nästa avslutade spel.",
    "ctaButton": "Se priser"
  },
  "fr": {
    "badge": "Rapport personnalisé",
    "headline": "Une partie terminée devient un rapport.",
    "headlineSub": "Construit à partir de vos propres décisions.",
    "sub": "Un jeu terminé devient un rapport construit à partir de vos décisions, de votre timing, de votre tolérance au risque et de vos compromis.",
    "valueTitle": "Ce que ça te donne",
    "value": [
      {
        "title": "Une lecture plus claire de vos habitudes",
        "body": "Découvrez comment vous avez joué sous pression dans la simulation."
      },
      {
        "title": "Un pont vers la littératie financière",
        "body": "Le comportement de jeu devient un langage économique utilisable."
      },
      {
        "title": "Une raison de rejouer",
        "body": "Une deuxième exécution crée un nouveau rapport."
      }
    ],
    "purposeTitle": "Pourquoi ça existe",
    "purposeBody1": "Le rapport est conçu pour les joueurs qui souhaitent apprendre l’économie mais qui ont besoin d’un point de départ. Cela commence par un jeu, puis explique ce que cela signifie.",
    "purposeBody2": "Cela le rend plus facile à lire, plus facile à retenir et plus facile à utiliser.",
    "diffTitle": "Pourquoi il se démarque",
    "diff": [
      {
        "title": "Cela vient du jeu, pas d'un formulaire.",
        "body": "La source est l’état du jeu lui-même : choix, timing, actifs, passifs et résultats."
      },
      {
        "title": "Chaque idée pointe vers une action.",
        "body": "Le rapport relie un modèle à ce qui s’est passé dans le jeu."
      },
      {
        "title": "Clair, pas surchargé.",
        "body": "Le ton reste simple et le contenu reste utilisable."
      }
    ],
    "whatTitle": "Que contient le rapport",
    "what": [
      {
        "icon": "⏱",
        "title": "Rétrospective de la décision",
        "body": "Le moment où votre chemin a changé et le choix qui le sous-tend."
      },
      {
        "icon": "🕳",
        "title": "Informations cachées",
        "body": "Des signaux qui étaient là avant que vous puissiez les voir."
      },
      {
        "icon": "⚖️",
        "title": "Chemins alternatifs",
        "body": "Différents résultats possibles à partir du même point de départ, montrant comment la course pourrait se dérouler de plusieurs manières."
      },
      {
        "icon": "🧠",
        "title": "Signature cognitive",
        "body": "Les habitudes et les préjugés qui ont façonné vos choix."
      }
    ],
    "onceTitle": "Un rapport, une partie",
    "onceBody": "Le rapport est généré à la fin d'une exécution. Il capture un ensemble de décisions dans un ensemble de conditions.",
    "onceBody2": "Jouez à nouveau et le rapport change avec vous. Cela reste lié à une vraie course.",
    "ctaTitle": "Prêt à voir votre propre modèle ?",
    "ctaBody": "Obtenez des crédits de rapport dans l'application mobile et débloquez votre rapport après votre prochaine partie terminée.",
    "ctaButton": "Voir les tarifs"
  },
  "de": {
    "badge": "Personalisierter Bericht",
    "headline": "Ein abgeschlossener Spieldurchgang wird zu einem Bericht.",
    "headlineSub": "Basierend auf Ihren eigenen Entscheidungen.",
    "sub": "Ein abgeschlossenes Spiel wird zu einem Bericht, der auf Ihren Entscheidungen, Ihrem Timing, Ihrer Risikotoleranz und Ihren Kompromissen basiert.",
    "valueTitle": "Was es dir gibt",
    "value": [
      {
        "title": "Eine klarere Aussage über Ihre Gewohnheiten",
        "body": "Sehen Sie, wie Sie in der Simulation unter Druck gespielt haben."
      },
      {
        "title": "Eine Brücke zur Finanzkompetenz",
        "body": "Spielverhalten wird zur nutzbaren Wirtschaftssprache."
      },
      {
        "title": "Ein Grund zum Wiederholen",
        "body": "Bei einem zweiten Durchlauf wird ein neuer Bericht erstellt."
      }
    ],
    "purposeTitle": "Warum es existiert",
    "purposeBody1": "Der Bericht richtet sich an Spieler, die Wirtschaftswissenschaften erlernen möchten, aber einen Ausgangspunkt benötigen. Es beginnt mit einem Spiel und erklärt dann, was es bedeutet.",
    "purposeBody2": "Dadurch ist es leichter zu lesen, leichter zu merken und einfacher zu verwenden.",
    "diffTitle": "Warum es sich von anderen abhebt",
    "diff": [
      {
        "title": "Es kommt aus dem Spiel, nicht aus einem Formular.",
        "body": "Die Quelle ist der Spielzustand selbst: Entscheidungen, Zeitpunkt, Vermögenswerte, Verbindlichkeiten und Ergebnisse."
      },
      {
        "title": "Jede Einsicht weist auf eine Aktion hin.",
        "body": "Der Bericht verknüpft ein Muster mit dem, was im Spiel passiert ist."
      },
      {
        "title": "Übersichtlich, nicht überfüllt.",
        "body": "Der Ton bleibt einfach und der Inhalt bleibt nutzbar."
      }
    ],
    "whatTitle": "Was steht im Bericht?",
    "what": [
      {
        "icon": "⏱",
        "title": "Entscheidungsrückblick",
        "body": "Der Moment, in dem sich Ihr Weg änderte, und die Wahl dahinter."
      },
      {
        "icon": "🕳",
        "title": "Versteckte Informationen",
        "body": "Signale, die da waren, bevor man sie sehen konnte."
      },
      {
        "icon": "⚖️",
        "title": "Alternative Wege",
        "body": "Unterschiedliche mögliche Ergebnisse vom gleichen Ausgangspunkt aus, die zeigen, wie sich der Lauf auf mehr als eine Weise entwickeln könnte."
      },
      {
        "icon": "🧠",
        "title": "Kognitive Signatur",
        "body": "Die Gewohnheiten und Vorurteile, die Ihre Entscheidungen geprägt haben."
      }
    ],
    "onceTitle": "Ein Bericht, ein Durchspielen",
    "onceBody": "Der Bericht wird am Ende eines Laufs generiert. Es erfasst eine Reihe von Entscheidungen unter einer Reihe von Bedingungen.",
    "onceBody2": "Spielen Sie noch einmal und der Bericht ändert sich mit Ihnen. Es bleibt an einen echten Lauf gebunden.",
    "ctaTitle": "Sind Sie bereit, Ihr eigenes Muster zu sehen?",
    "ctaBody": "Holen Sie sich Berichtsguthaben in der mobilen App und schalten Sie Ihren Bericht nach Ihrem nächsten abgeschlossenen Spiel frei.",
    "ctaButton": "Siehe Preise"
  },
  "ru": {
    "badge": "Персонализированный отчет",
    "headline": "Завершенное прохождение становится отчетом.",
    "headlineSub": "Создан на основе ваших собственных решений.",
    "sub": "Одна законченная игра становится отчетом, составленным на основе ваших решений, времени, терпимости к риску и компромиссов.",
    "valueTitle": "Что это дает вам",
    "value": [
      {
        "title": "Более четкое представление о ваших привычках",
        "body": "Посмотрите, как вы играли под давлением внутри симуляции."
      },
      {
        "title": "Мост к финансовой грамотности",
        "body": "Игровое поведение становится удобным экономическим языком."
      },
      {
        "title": "Повод переиграть",
        "body": "При втором запуске создается новый отчет."
      }
    ],
    "purposeTitle": "Почему это существует",
    "purposeBody1": "Отчет создан для игроков, которые хотят изучать экономику, но им нужно с чего начать. Оно начинается с игры, затем объясняется, что это значит.",
    "purposeBody2": "Это облегчает чтение, запоминание и использование.",
    "diffTitle": "Почему он стоит особняком",
    "diff": [
      {
        "title": "Это берётся из игры, а не из анкеты.",
        "body": "Источником является само состояние игры: выбор, время, активы, обязательства и результаты."
      },
      {
        "title": "Каждое понимание указывает на действие.",
        "body": "Отчет связывает закономерность с тем, что произошло в игре."
      },
      {
        "title": "Ясно, не многолюдно.",
        "body": "Тон остается простым, а контент — полезным."
      }
    ],
    "whatTitle": "Что в отчете",
    "what": [
      {
        "icon": "⏱",
        "title": "Ретроспектива решений",
        "body": "Момент, когда изменился твой путь, и выбор, стоящий за ним."
      },
      {
        "icon": "🕳",
        "title": "Скрытая информация",
        "body": "Сигналы, которые были там до того, как вы их увидели."
      },
      {
        "icon": "⚖️",
        "title": "Альтернативные пути",
        "body": "Различные возможные результаты из одной и той же отправной точки, показывающие, как движение может развиваться более чем в одном направлении."
      },
      {
        "icon": "🧠",
        "title": "Когнитивная подпись",
        "body": "Привычки и предубеждения, которые повлияли на ваш выбор."
      }
    ],
    "onceTitle": "Один отчет, одно прохождение",
    "onceBody": "Отчет создается в конце прогона. Он фиксирует один набор решений при одном наборе условий.",
    "onceBody2": "Сыграйте ещё раз, и отчёт изменится вместе с вами. Он остаётся привязанным к реальной игре.",
    "ctaTitle": "Готовы увидеть собственные закономерности?",
    "ctaBody": "Получите баллы за отчеты в мобильном приложении и разблокируйте свой отчет после следующей завершенной игры.",
    "ctaButton": "Посмотреть цены"
  },
  "ar": {
    "badge": "تقرير شخصي",
    "headline": "تتحول عملية التشغيل المكتملة إلى تقرير.",
    "headlineSub": "بنيت من قراراتك الخاصة.",
    "sub": "تصبح اللعبة النهائية بمثابة تقرير مبني على قراراتك، وتوقيتك، وتحمل المخاطر، والمقايضات.",
    "valueTitle": "ما يعطيك",
    "value": [
      {
        "title": "قراءة أوضح لعاداتك",
        "body": "شاهد كيف لعبت تحت الضغط داخل المحاكاة."
      },
      {
        "title": "جسر لمحو الأمية المالية",
        "body": "يصبح سلوك اللعبة لغة اقتصادية قابلة للاستخدام."
      },
      {
        "title": "سبب للإعادة",
        "body": "يؤدي التشغيل الثاني إلى إنشاء تقرير جديد."
      }
    ],
    "purposeTitle": "لماذا هو موجود",
    "purposeBody1": "تم تصميم التقرير للاعبين الذين يرغبون في تعلم الاقتصاد ولكنهم بحاجة إلى مكان للبدء. يبدأ باللعب، ثم يشرح ما يعنيه.",
    "purposeBody2": "وهذا يجعلها أسهل في القراءة، وأسهل في التذكر، وأسهل في الاستخدام.",
    "diffTitle": "لماذا يقف بعيدا",
    "diff": [
      {
        "title": "إنها تأتي من اللعب، وليس من استبيان.",
        "body": "المصدر هو حالة اللعبة نفسها: الاختيارات، والتوقيت، والأصول، والالتزامات، والنتائج."
      },
      {
        "title": "كل رؤية تشير إلى إجراء ما.",
        "body": "يربط التقرير نمطًا بما حدث في اللعبة."
      },
      {
        "title": "واضح وغير مزدحم.",
        "body": "تظل النغمة بسيطة ويظل المحتوى قابلاً للاستخدام."
      }
    ],
    "whatTitle": "ماذا يوجد في التقرير",
    "what": [
      {
        "icon": "⏱",
        "title": "القرار بأثر رجعي",
        "body": "في اللحظة التي تغير فيها طريقك، والاختيار وراءه."
      },
      {
        "icon": "🕳",
        "title": "معلومات مخفية",
        "body": "الإشارات التي كانت موجودة قبل أن تتمكن من رؤيتها."
      },
      {
        "icon": "⚖️",
        "title": "مسارات بديلة",
        "body": "نتائج محتملة مختلفة من نفس نقطة البداية، توضح كيف يمكن للسباق أن يتكشف بأكثر من طريقة."
      },
      {
        "icon": "🧠",
        "title": "التوقيع المعرفي",
        "body": "العادات والتحيزات التي شكلت اختياراتك"
      }
    ],
    "onceTitle": "تقرير واحد، لعبة واحدة",
    "onceBody": "يتم إنشاء التقرير في نهاية التشغيل. فهو يلتقط مجموعة واحدة من القرارات في ظل مجموعة واحدة من الشروط.",
    "onceBody2": "العب مرة أخرى وسيتغير التقرير معك. يبقى مرتبطًا بلعبة حقيقية.",
    "ctaTitle": "على استعداد لرؤية النمط الخاص بك؟",
    "ctaBody": "احصل على أرصدة التقرير في تطبيق الهاتف المحمول وافتح تقريرك بعد اللعبة المكتملة التالية.",
    "ctaButton": "انظر التسعير"
  },
  "pt": {
    "badge": "Relatório personalizado",
    "headline": "Uma jogada concluída torna-se um relatório.",
    "headlineSub": "Construído a partir de suas próprias decisões.",
    "sub": "Um jogo finalizado torna-se um relatório construído a partir de suas decisões, tempo, tolerância ao risco e compensações.",
    "valueTitle": "O que isso te dá",
    "value": [
      {
        "title": "Uma leitura mais clara sobre seus hábitos",
        "body": "Veja como você jogou sob pressão dentro da simulação."
      },
      {
        "title": "Uma ponte para a alfabetização financeira",
        "body": "O comportamento do jogo torna-se uma linguagem económica utilizável."
      },
      {
        "title": "Um motivo para repetir",
        "body": "Uma segunda execução cria um novo relatório."
      }
    ],
    "purposeTitle": "Por que existe",
    "purposeBody1": "O relatório foi elaborado para jogadores que desejam aprender economia, mas precisam de um ponto de partida. Começa com o jogo e depois explica o que significa.",
    "purposeBody2": "Isso torna mais fácil de ler, lembrar e usar.",
    "diffTitle": "Por que isso se destaca",
    "diff": [
      {
        "title": "Vem do jogo, não de um formulário.",
        "body": "A fonte é o próprio estado do jogo: escolhas, timing, ativos, passivos e resultados."
      },
      {
        "title": "Cada insight aponta para uma ação.",
        "body": "O relatório vincula um padrão ao que aconteceu no jogo."
      },
      {
        "title": "Claro, não lotado.",
        "body": "O tom permanece simples e o conteúdo permanece utilizável."
      }
    ],
    "whatTitle": "O que há no relatório",
    "what": [
      {
        "icon": "⏱",
        "title": "Retrospectiva de decisão",
        "body": "O momento em que seu caminho mudou e a escolha por trás dele."
      },
      {
        "icon": "🕳",
        "title": "Informações ocultas",
        "body": "Sinais que existiam antes que você pudesse vê-los."
      },
      {
        "icon": "⚖️",
        "title": "Caminhos Alternativos",
        "body": "Diferentes resultados possíveis a partir do mesmo ponto de partida, mostrando como a corrida poderia se desenrolar de mais de uma maneira."
      },
      {
        "icon": "🧠",
        "title": "Assinatura Cognitiva",
        "body": "Os hábitos e preconceitos que moldaram suas escolhas."
      }
    ],
    "onceTitle": "Um relatório, uma jogada",
    "onceBody": "O relatório é gerado no final de uma execução. Ele captura um conjunto de decisões sob um conjunto de condições.",
    "onceBody2": "Jogue novamente e o relatório muda com você. Ele permanece vinculado a uma corrida real.",
    "ctaTitle": "Pronto para ver seu próprio padrão?",
    "ctaBody": "Obtenha créditos de relatório no aplicativo móvel e desbloqueie seu relatório após a conclusão do próximo jogo.",
    "ctaButton": "Ver preços"
  },
  "it": {
    "badge": "Rapporto personalizzato",
    "headline": "Una partita completata diventa un rapporto.",
    "headlineSub": "Costruito in base alle tue decisioni.",
    "sub": "Un gioco finito diventa un report costruito in base alle tue decisioni, tempistiche, tolleranza al rischio e compromessi.",
    "valueTitle": "Cosa ti dà",
    "value": [
      {
        "title": "Una lettura più chiara delle tue abitudini",
        "body": "Guarda come hai giocato sotto pressione all'interno della simulazione."
      },
      {
        "title": "Un ponte verso l’alfabetizzazione finanziaria",
        "body": "Il comportamento di gioco diventa linguaggio economico utilizzabile."
      },
      {
        "title": "Un motivo per rigiocare",
        "body": "Una seconda esecuzione crea un nuovo report."
      }
    ],
    "purposeTitle": "Perché esiste",
    "purposeBody1": "Il report è pensato per i giocatori che vogliono imparare l'economia ma hanno bisogno di un punto di partenza. Inizia con il gioco, poi spiega cosa significa.",
    "purposeBody2": "Ciò lo rende più facile da leggere, più facile da ricordare e più facile da usare.",
    "diffTitle": "Perché si distingue",
    "diff": [
      {
        "title": "Viene dal gioco, non da un questionario.",
        "body": "La fonte è lo stato del gioco stesso: scelte, tempistiche, attività, passività e risultati."
      },
      {
        "title": "Ogni intuizione indica un'azione.",
        "body": "Il rapporto collega uno schema a ciò che è accaduto nel gioco."
      },
      {
        "title": "Chiaro, non affollato.",
        "body": "Il tono rimane semplice e il contenuto rimane utilizzabile."
      }
    ],
    "whatTitle": "Cosa c'è nel rapporto",
    "what": [
      {
        "icon": "⏱",
        "title": "Retrospettiva della decisione",
        "body": "Il momento in cui il tuo percorso è cambiato e la scelta dietro di esso."
      },
      {
        "icon": "🕳",
        "title": "Informazioni nascoste",
        "body": "Segnali che erano lì prima che tu potessi vederli."
      },
      {
        "icon": "⚖️",
        "title": "Percorsi alternativi",
        "body": "Diversi risultati possibili dallo stesso punto di partenza, mostrando come la corsa potrebbe svolgersi in più di un modo."
      },
      {
        "icon": "🧠",
        "title": "Firma cognitiva",
        "body": "Le abitudini e i pregiudizi che hanno modellato le tue scelte."
      }
    ],
    "onceTitle": "Un resoconto, una riproduzione",
    "onceBody": "Il report viene generato al termine di un'esecuzione. Cattura una serie di decisioni in una serie di condizioni.",
    "onceBody2": "Gioca ancora e il resoconto cambia con te. Rimane legato a una corsa reale.",
    "ctaTitle": "Pronto a vedere il tuo modello?",
    "ctaBody": "Ottieni crediti di report nell'app mobile e sblocca il tuo report dopo il prossimo gioco completato.",
    "ctaButton": "Vedi i prezzi"
  },
  "nl": {
    "badge": "Gepersonaliseerd rapport",
    "headline": "Een voltooide playthrough wordt een rapport.",
    "headlineSub": "Gebouwd op basis van uw eigen beslissingen.",
    "sub": "Eén voltooid spel wordt een rapport dat is opgebouwd op basis van uw beslissingen, timing, risicotolerantie en afwegingen.",
    "valueTitle": "Wat het je geeft",
    "value": [
      {
        "title": "Een duidelijker inzicht in uw gewoonten",
        "body": "Bekijk hoe je onder druk speelde in de simulatie."
      },
      {
        "title": "Een brug naar financiële geletterdheid",
        "body": "Spelgedrag wordt bruikbare economische taal."
      },
      {
        "title": "Een reden om opnieuw te spelen",
        "body": "Bij een tweede run wordt een nieuw rapport gemaakt."
      }
    ],
    "purposeTitle": "Waarom het bestaat",
    "purposeBody1": "Het rapport is bedoeld voor spelers die economie willen leren, maar een plek nodig hebben om te beginnen. Het begint met spelen en legt vervolgens uit wat het betekent.",
    "purposeBody2": "Dat maakt het gemakkelijker te lezen, gemakkelijker te onthouden en gemakkelijker te gebruiken.",
    "diffTitle": "Waarom het zich onderscheidt",
    "diff": [
      {
        "title": "Het komt voort uit spel, niet uit een formulier.",
        "body": "De bron is de spelstatus zelf: keuzes, timing, activa, passiva en resultaten."
      },
      {
        "title": "Elk inzicht verwijst naar een actie.",
        "body": "Het rapport koppelt een patroon aan wat er in het spel is gebeurd."
      },
      {
        "title": "Duidelijk, niet druk.",
        "body": "De toon blijft simpel en de inhoud blijft bruikbaar."
      }
    ],
    "whatTitle": "Wat staat er in het rapport",
    "what": [
      {
        "icon": "⏱",
        "title": "Beslissing Terugblik",
        "body": "Het moment dat jouw pad veranderde, en de keuze daarachter."
      },
      {
        "icon": "🕳",
        "title": "Verborgen informatie",
        "body": "Signalen die er waren voordat je ze kon zien."
      },
      {
        "icon": "⚖️",
        "title": "Alternatieve paden",
        "body": "Verschillende mogelijke uitkomsten vanuit hetzelfde startpunt, die laten zien hoe de run zich op meer dan één manier zou kunnen ontvouwen."
      },
      {
        "icon": "🧠",
        "title": "Cognitieve handtekening",
        "body": "De gewoonten en vooroordelen die uw keuzes hebben gevormd."
      }
    ],
    "onceTitle": "Eén rapport, één playthrough",
    "onceBody": "Het rapport wordt aan het einde van een run gegenereerd. Het omvat één reeks beslissingen onder één reeks voorwaarden.",
    "onceBody2": "Speel opnieuw en het rapport verandert met u mee. Het blijft gekoppeld aan een echte run.",
    "ctaTitle": "Klaar om je eigen patroon te zien?",
    "ctaBody": "Ontvang rapportcredits in de mobiele app en ontgrendel uw rapport na uw volgende voltooide game.",
    "ctaButton": "Zie prijzen"
  },
  "id": {
    "badge": "Laporan yang Dipersonalisasi",
    "headline": "Permainan yang selesai menjadi laporan.",
    "headlineSub": "Dibangun dari keputusan Anda sendiri.",
    "sub": "Satu permainan yang selesai menjadi laporan yang dibuat dari keputusan, waktu, toleransi risiko, dan pengorbanan Anda.",
    "valueTitle": "Apa yang diberikannya kepada Anda",
    "value": [
      {
        "title": "Bacaan yang lebih jelas tentang kebiasaan Anda",
        "body": "Lihat bagaimana Anda bermain di bawah tekanan di dalam simulasi."
      },
      {
        "title": "Sebuah jembatan menuju literasi keuangan",
        "body": "Perilaku permainan menjadi bahasa ekonomi yang dapat digunakan."
      },
      {
        "title": "Alasan untuk memutar ulang",
        "body": "Proses kedua akan membuat laporan baru."
      }
    ],
    "purposeTitle": "Mengapa itu ada",
    "purposeBody1": "Laporan ini dibuat untuk pemain yang ingin belajar ekonomi namun membutuhkan tempat untuk memulai. Dimulai dengan permainan, lalu dijelaskan maksudnya.",
    "purposeBody2": "Itu membuatnya lebih mudah dibaca, lebih mudah diingat, dan lebih mudah digunakan.",
    "diffTitle": "Mengapa itu berdiri terpisah",
    "diff": [
      {
        "title": "Itu berasal dari permainan, bukan dari kuesioner.",
        "body": "Sumbernya adalah keadaan permainan itu sendiri: pilihan, waktu, aset, kewajiban, dan hasil."
      },
      {
        "title": "Setiap wawasan menunjuk pada suatu tindakan.",
        "body": "Laporan tersebut menghubungkan suatu pola dengan apa yang terjadi dalam game."
      },
      {
        "title": "Jelas, tidak ramai.",
        "body": "Nadanya tetap sederhana dan kontennya tetap dapat digunakan."
      }
    ],
    "whatTitle": "Apa yang ada di laporan itu",
    "what": [
      {
        "icon": "⏱",
        "title": "Retrospektif Keputusan",
        "body": "Saat jalan Anda berubah, dan pilihan di baliknya."
      },
      {
        "icon": "🕳",
        "title": "Informasi Tersembunyi",
        "body": "Sinyal yang sudah ada sebelum Anda dapat melihatnya."
      },
      {
        "icon": "⚖️",
        "title": "Jalur Alternatif",
        "body": "Kemungkinan hasil yang berbeda dari titik awal yang sama, menunjukkan bagaimana proses tersebut dapat terjadi melalui lebih dari satu cara."
      },
      {
        "icon": "🧠",
        "title": "Tanda Tangan Kognitif",
        "body": "Kebiasaan dan bias yang membentuk pilihan Anda."
      }
    ],
    "onceTitle": "Satu laporan, satu pemutaran",
    "onceBody": "Laporan ini dihasilkan pada akhir proses. Ini menangkap satu set keputusan dalam satu set kondisi.",
    "onceBody2": "Mainkan lagi dan laporannya berubah sesuai keinginan Anda. Itu tetap terikat pada lari sebenarnya.",
    "ctaTitle": "Siap melihat pola Anda sendiri?",
    "ctaBody": "Dapatkan kredit laporan di aplikasi seluler dan buka kunci laporan Anda setelah permainan selesai berikutnya.",
    "ctaButton": "Lihat harga"
  }
}

export function ReportPage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className="w-full px-2 sm:px-2.5 md:px-3 pt-14 pb-10 sm:pt-24 sm:pb-16 text-center">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">{tx.onceTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.onceBody}</p>
          <p className="text-gray-300 leading-relaxed font-medium">{tx.onceBody2}</p>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20 text-center">
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
