import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  "en": {
    "philosophyTitle": "Design principles",
    "philosophy": [
      {
        "title": "Survival first",
        "body": "Cash flow keeps you in the game. If it stops, the run ends. Net worth only matters if you can keep going."
      },
      {
        "title": "Instincts are not facts",
        "body": "Debt can feel dangerous. Cash can feel safe. The game shows where those instincts help, and where they cost you."
      },
      {
        "title": "Wealth leaves a mark",
        "body": "Every asset changes the Ward around you. The Ward changes you back."
      },
      {
        "title": "No single answer",
        "body": "The simulation does not pick a winner. It shows the cost of each path."
      }
    ],
    "shadowTitle": "The Ward",
    "shadowBody": "Your Ward responds to every move you make.",
    "shadowBody2": "Storefronts dim. Streets quiet down. Property values move. The change is visible before it is explained.",
    "shadowQuote": "Your decisions shape the Ward. The Ward shapes your returns.",
    "mechanicsTitle": "Mechanics",
    "mechanics": [
      {
        "title": "Credit score",
        "body": "A clean record has a ceiling. The system rewards managing debt, not avoiding it."
      },
      {
        "title": "Delayed effects",
        "body": "Choices do not settle at once. Their effects return a few turns later, often after you have moved on."
      },
      {
        "title": "Cash flow vs. net worth",
        "body": "You can own more than you can pay for. Most losses come from timing, not ownership."
      }
    ],
    "whyTitle": "Why a simulation",
    "whyBody": "Books explain the rules. A simulation lets you test them under pressure.",
    "whyBody2": "That makes the lesson easier to remember. A mistake costs a reset, not years.",
    "whoTitle": "Made for players who",
    "whoProfiles": [
      {
        "quote": "\"Everyone around me is investing, but I do not even know what to ask.\"",
        "label": "Need a starting point"
      },
      {
        "quote": "\"I know the concepts. I still freeze when it is time to decide.\"",
        "label": "Know the theory, not the move"
      },
      {
        "quote": "\"I have read the books. Nothing really changed how I think about money.\"",
        "label": "Learned, but unchanged"
      },
      {
        "quote": "\"I want to understand how the system works, not just how to survive in it.\"",
        "label": "Curious about the structure"
      }
    ],
    "whoClose": "The game does not tell you what to do. It shows what your choices reveal."
  },
  "ko": {
    "philosophyTitle": "설계 원칙",
    "philosophy": [
      {
        "title": "생존이 먼저입니다",
        "body": "현금흐름이 끊기면 게임은 끝납니다. 순자산보다 중요한 것은 계속 갈 수 있는지입니다."
      },
      {
        "title": "직관은 사실이 아닙니다",
        "body": "부채는 위험하게 느껴지고, 현금은 안전하게 느껴집니다. 게임은 그 감각이 언제 맞고 언제 비용이 되는지 보여줍니다."
      },
      {
        "title": "부는 흔적을 남깁니다",
        "body": "자산은 주변 Ward를 바꾸고, Ward는 다시 당신에게 영향을 줍니다."
      },
      {
        "title": "정해진 답은 없습니다",
        "body": "시뮬레이션은 승자를 고르지 않습니다. 각 경로의 비용만 보여줍니다."
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "당신의 Ward는 모든 선택에 반응합니다.",
    "shadowBody2": "상점 불이 꺼지고, 거리가 조용해지고, 부동산 가치가 움직입니다. 설명되기 전에 먼저 보입니다.",
    "shadowQuote": "당신의 결정이 Ward를 만들고, Ward가 당신의 수익을 만듭니다.",
    "mechanicsTitle": "메커니즘",
    "mechanics": [
      {
        "title": "신용점수",
        "body": "깨끗한 기록에도 한계가 있습니다. 시스템은 부채를 피하는 것보다 관리하는 것을 더 높게 봅니다."
      },
      {
        "title": "지연되는 효과",
        "body": "선택은 바로 끝나지 않습니다. 효과는 몇 턴 뒤에 돌아오고, 대부분 그때쯤이면 잊고 있습니다."
      },
      {
        "title": "현금흐름과 순자산",
        "body": "보유한 것보다 지불할 수 있는지가 더 중요합니다. 손실은 대부분 시점에서 생깁니다."
      }
    ],
    "whyTitle": "왜 시뮬레이션인가",
    "whyBody": "책은 규칙을 설명합니다. 시뮬레이션은 그 규칙을 압박 속에서 시험하게 합니다.",
    "whyBody2": "그래서 더 오래 남습니다. 실수의 대가는 리셋 한 번이면 충분합니다.",
    "whoTitle": "이런 분들을 위해 만들었습니다",
    "whoProfiles": [
      {
        "quote": "\"주변에서는 다 투자하는데, 저는 뭐부터 물어봐야 할지 모르겠어요.\"",
        "label": "시작점이 필요한 분"
      },
      {
        "quote": "\"개념은 알아요. 막상 결정하려면 멈춥니다.\"",
        "label": "이론은 알지만 손이 안 가는 분"
      },
      {
        "quote": "\"책도 읽고 영상도 봤지만, 돈에 대한 생각은 그대로예요.\"",
        "label": "배웠지만 달라지지 않은 분"
      },
      {
        "quote": "\"시스템이 왜 이렇게 돌아가는지 이해하고 싶어요.\"",
        "label": "구조가 궁금한 분"
      }
    ],
    "whoClose": "이 게임은 무엇을 해야 하는지 말하지 않습니다. 당신의 선택이 무엇을 드러내는지 보여줍니다."
  },
  "ja": {
    "philosophyTitle": "設計原則",
    "philosophy": [
      {
        "title": "生存が先",
        "body": "キャッシュフローが止まれば、そこで終わりです。純資産より、続けられるかどうかが大事です。"
      },
      {
        "title": "直感は事実ではない",
        "body": "借金は危険に、現金は安全に感じます。ゲームは、その感覚がいつ役立ち、いつコストになるかを示します。"
      },
      {
        "title": "富は跡を残す",
        "body": "資産はWardを変え、Wardはあなたを変えます。"
      },
      {
        "title": "正解はひとつではない",
        "body": "シミュレーションは勝者を決めません。それぞれの道のコストを見せます。"
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "あなたのWardは、すべての選択に反応します。",
    "shadowBody2": "店の明かりが消え、通りが静かになり、資産価値が動きます。説明される前に、まず見えます。",
    "shadowQuote": "あなたの決断がWardを形作り、Wardがあなたのリターンを形作ります。",
    "mechanicsTitle": "仕組み",
    "mechanics": [
      {
        "title": "信用スコア",
        "body": "きれいな記録にも上限があります。システムは、借金を避けるより管理することを評価します。"
      },
      {
        "title": "遅れて返る効果",
        "body": "選択はすぐには終わりません。効果は数ターン後に戻り、その頃には忘れていることが多いのです。"
      },
      {
        "title": "キャッシュフローと純資産",
        "body": "持っている額より、払えるかどうかが大事です。損失の多くはタイミングで起きます。"
      }
    ],
    "whyTitle": "なぜシミュレーションなのか",
    "whyBody": "本はルールを説明します。シミュレーションは、そのルールを圧力の中で試せます。",
    "whyBody2": "その方が、長く残ります。失敗の代償は、リセットひとつで済みます。",
    "whoTitle": "こんな方のために作りました",
    "whoProfiles": [
      {
        "quote": "「周りはみんな投資しているのに、何を聞けばいいかもわかりません。」",
        "label": "出発点がほしい方"
      },
      {
        "quote": "「概念はわかります。いざ決めると止まります。」",
        "label": "理屈はわかるが動けない方"
      },
      {
        "quote": "「本も動画も見ました。でも、お金の見方は変わっていません。」",
        "label": "学んでも変わらない方"
      },
      {
        "quote": "「このシステムがなぜこう動くのか知りたいです。」",
        "label": "構造が気になる方"
      }
    ],
    "whoClose": "このゲームは、何をすべきかを教えません。選択が何を明らかにするかを示します。"
  },
  "zh": {
    "philosophyTitle": "设计原则",
    "philosophy": [
      {
        "title": "生存优先",
        "body": "现金流让你留在局里。它一停，游戏就结束。净资产只有在你还能继续时才有意义。"
      },
      {
        "title": "直觉不等于事实",
        "body": "债务会让人觉得危险，现金会让人觉得安全。游戏会告诉你，这种直觉什么时候有用，什么时候会付出代价。"
      },
      {
        "title": "财富会留下痕迹",
        "body": "每项资产都会改变你周围的 Ward，Ward 也会反过来改变你。"
      },
      {
        "title": "没有唯一答案",
        "body": "模拟不会替你选赢家。它只展示每条路径的代价。"
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "你的 Ward 会对每个选择做出反应。",
    "shadowBody2": "店铺的灯光变暗，街道安静下来，房产价值开始移动。往往还没解释，你就已经看见了变化。",
    "shadowQuote": "你的决定塑造 Ward，Ward 也塑造你的回报。",
    "mechanicsTitle": "机制",
    "mechanics": [
      {
        "title": "信用分数",
        "body": "干净的记录也有上限。系统更看重管理债务，而不是回避债务。"
      },
      {
        "title": "延迟效果",
        "body": "选择不会马上结束。它们会在几回合后回来，通常那时你已经忘了。"
      },
      {
        "title": "现金流与净资产",
        "body": "拥有多少，不如能不能付得起。多数损失来自时机，而不是所有权。"
      }
    ],
    "whyTitle": "为什么是模拟",
    "whyBody": "书会解释规则。模拟让你在压力下试一次。",
    "whyBody2": "这样更容易记住。失误的代价，只是一回重置。",
    "whoTitle": "为这样的你而生",
    "whoProfiles": [
      {
        "quote": "\"周围的人都在投资，我却不知道该问什么。\"",
        "label": "需要起点的人"
      },
      {
        "quote": "\"概念我懂。真到要决定时，我会停住。\"",
        "label": "懂理论，难行动"
      },
      {
        "quote": "\"书也读了，视频也看了。看钱的方式还是没变。\"",
        "label": "学过，但没变"
      },
      {
        "quote": "\"我想知道系统为什么这样运作。\"",
        "label": "想了解结构的人"
      }
    ],
    "whoClose": "这款游戏不会告诉你该做什么。它会展示你的选择说明了什么。"
  },
  "es": {
    "philosophyTitle": "Principios de diseño",
    "philosophy": [
      {
        "title": "Primero, sobrevivir",
        "body": "El flujo de caja te mantiene en partida. Si se corta, la partida termina. El patrimonio neto solo importa si puedes seguir."
      },
      {
        "title": "El instinto no siempre acierta",
        "body": "La deuda puede parecer peligrosa y el efectivo, seguro. El juego muestra cuándo ese instinto ayuda y cuándo cuesta."
      },
      {
        "title": "La riqueza deja huella",
        "body": "Cada activo cambia tu Ward. Y el Ward te cambia a ti."
      },
      {
        "title": "No hay una sola respuesta",
        "body": "La simulación no elige ganador. Muestra el coste de cada camino."
      }
    ],
    "shadowTitle": "El Ward",
    "shadowBody": "Tu Ward responde a cada decisión.",
    "shadowBody2": "Las tiendas se apagan, las calles se callan y los valores se mueven. Lo ves antes de que te lo expliquen.",
    "shadowQuote": "Tus decisiones dan forma al Ward. El Ward da forma a tus rendimientos.",
    "mechanicsTitle": "Mecánicas",
    "mechanics": [
      {
        "title": "Puntuación crediticia",
        "body": "Incluso un historial limpio tiene un techo. El sistema premia gestionar deuda, no evitarla."
      },
      {
        "title": "Efectos diferidos",
        "body": "Las decisiones no se cierran al instante. Vuelven unas rondas después, cuando ya has pasado página."
      },
      {
        "title": "Flujo de caja y patrimonio neto",
        "body": "Importa más lo que puedes pagar que lo que posees. La mayoría de las pérdidas vienen del momento, no de la propiedad."
      }
    ],
    "whyTitle": "Por qué una simulación",
    "whyBody": "Los libros explican las reglas. La simulación te deja probarlas bajo presión.",
    "whyBody2": "Así se recuerdan mejor. El error cuesta un reinicio, no años.",
    "whoTitle": "Hecho para jugadores que",
    "whoProfiles": [
      {
        "quote": "\"Todos invierten en algo. Yo no sé ni por dónde empezar.\"",
        "label": "Necesito un punto de partida"
      },
      {
        "quote": "\"Entiendo los conceptos. Cuando toca decidir, me quedo quieto.\"",
        "label": "Sé la teoría, no el paso"
      },
      {
        "quote": "\"Leí libros, vi videos. Mi forma de pensar sobre el dinero sigue igual.\"",
        "label": "Aprendí, pero no cambié"
      },
      {
        "quote": "\"Quiero entender cómo funciona el sistema.\"",
        "label": "Curioso por la estructura"
      }
    ],
    "whoClose": "El juego no te dice qué hacer. Te muestra lo que revelan tus decisiones."
  },
  "sv": {
    "philosophyTitle": "Designprinciper",
    "philosophy": [
      {
        "title": "Överlevnad först",
        "body": "Kassaflödet håller dig kvar i spelet. Stannar det, är rundan slut. Nettovärde spelar bara roll om du kan fortsätta."
      },
      {
        "title": "Instinkt är inte fakta",
        "body": "Skuld kan kännas farligt och kontanter kan kännas säkra. Spelet visar när den känslan hjälper och när den kostar."
      },
      {
        "title": "Värde lämnar spår",
        "body": "Varje tillgång förändrar ditt Ward. Och Ward förändrar dig tillbaka."
      },
      {
        "title": "Det finns inget enda svar",
        "body": "Simuleringen väljer ingen vinnare. Den visar kostnaden för varje väg."
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "Ditt Ward reagerar på varje beslut.",
    "shadowBody2": "Butiker släcks, gator tystnar och värden flyttas. Du ser det innan du får en förklaring.",
    "shadowQuote": "Dina beslut formar Ward. Ward formar dina avkastningar.",
    "mechanicsTitle": "Mekanik",
    "mechanics": [
      {
        "title": "Kreditpoäng",
        "body": "Även en ren historik har ett tak. Systemet premierar att hantera skuld, inte att undvika den."
      },
      {
        "title": "Fördröjda effekter",
        "body": "Beslut avslutas inte direkt. Effekterna kommer tillbaka några drag senare, när du redan har gått vidare."
      },
      {
        "title": "Kassaflöde och nettovärde",
        "body": "Det viktiga är vad du kan betala, inte bara vad du äger. De flesta förluster handlar om timing."
      }
    ],
    "whyTitle": "Varför en simulering",
    "whyBody": "Böcker förklarar reglerna. Simuleringen låter dig prova dem under press.",
    "whyBody2": "Det är lättare att minnas. Ett misstag kostar en återställning, inte år.",
    "whoTitle": "Gjort för spelare som",
    "whoProfiles": [
      {
        "quote": "\"Alla investerar i något. Jag vet inte ens vad jag ska fråga.\"",
        "label": "Behöver en startpunkt"
      },
      {
        "quote": "\"Jag fattar teorin. När det är dags att välja stannar jag upp.\"",
        "label": "Kan teorin, fastnar i valet"
      },
      {
        "quote": "\"Jag har läst och sett allt. Min syn på pengar är ändå densamma.\"",
        "label": "Lärde mig, men ändrades inte"
      },
      {
        "quote": "\"Jag vill förstå hur systemet fungerar.\"",
        "label": "Nyfiken på strukturen"
      }
    ],
    "whoClose": "Spelet säger inte vad du ska göra. Det visar vad dina val avslöjar."
  },
  "fr": {
    "philosophyTitle": "Principes de conception",
    "philosophy": [
      {
        "title": "La survie avant tout",
        "body": "Les flux de trésorerie vous maintiennent dans le jeu. S'il s'arrête, la course se termine. La valeur nette n’a d’importance que si vous pouvez continuer."
      },
      {
        "title": "Les instincts ne sont pas des faits",
        "body": "L’endettement peut sembler dangereux. L’argent liquide peut sembler en sécurité. Le jeu montre où ces instincts vous aident et où ils vous coûtent."
      },
      {
        "title": "La richesse laisse une trace",
        "body": "Chaque atout change le Ward autour de vous. Le Ward vous change."
      },
      {
        "title": "Pas de réponse unique",
        "body": "La simulation ne choisit pas de gagnant. Il montre le coût de chaque chemin."
      }
    ],
    "shadowTitle": "Le Ward",
    "shadowBody": "Votre Ward répond à chaque mouvement que vous effectuez.",
    "shadowBody2": "Les vitrines des magasins sont sombres. Les rues se calment. Les valeurs des propriétés bougent. Le changement est visible avant d’être expliqué.",
    "shadowQuote": "Vos décisions façonnent le Ward. Le Ward façonne vos retours.",
    "mechanicsTitle": "Mécanique",
    "mechanics": [
      {
        "title": "Pointage de crédit",
        "body": "Un dossier vierge a un plafond. Le système récompense la gestion de la dette, pas son évitement."
      },
      {
        "title": "Effets retardés",
        "body": "Les choix ne se décident pas d’un coup. Leurs effets reviennent quelques tours plus tard, souvent après que vous ayez quitté la partie."
      },
      {
        "title": "Flux de trésorerie par rapport à la valeur nette",
        "body": "Vous pouvez posséder plus que ce que vous pouvez payer. La plupart des pertes proviennent du timing et non de la propriété."
      }
    ],
    "whyTitle": "Pourquoi une simulation",
    "whyBody": "Les livres expliquent les règles. Une simulation vous permet de les tester sous pression.",
    "whyBody2": "Cela rend la leçon plus facile à retenir. Une erreur coûte une réinitialisation, pas des années.",
    "whoTitle": "Conçu pour les joueurs qui",
    "whoProfiles": [
      {
        "quote": "\"Tout le monde autour de moi investit, mais je ne sais même pas quoi demander.\"",
        "label": "Besoin d'un point de départ"
      },
      {
        "quote": "\"Je connais les concepts. Je me fige encore quand vient le temps de décider.\"",
        "label": "Connaître la théorie, pas le mouvement"
      },
      {
        "quote": "\"J'ai lu des livres. Rien n'a vraiment changé ma façon de voir l'argent.\"",
        "label": "Appris, mais inchangé"
      },
      {
        "quote": "\"Je veux comprendre comment fonctionne le système, pas seulement comment y survivre.\"",
        "label": "Curieux de connaître la structure"
      }
    ],
    "whoClose": "Le jeu ne vous dit pas quoi faire. Cela montre ce que révèlent vos choix."
  },
  "de": {
    "philosophyTitle": "Gestaltungsprinzipien",
    "philosophy": [
      {
        "title": "Überleben zuerst",
        "body": "Der Cashflow hält Sie im Spiel. Wenn es stoppt, endet der Lauf. Das Vermögen zählt nur, wenn man weitermachen kann."
      },
      {
        "title": "Instinkte sind keine Fakten",
        "body": "Schulden können gefährlich sein. Bargeld kann sich sicher anfühlen. Das Spiel zeigt, wo diese Instinkte helfen und wo sie Sie kosten."
      },
      {
        "title": "Reichtum hinterlässt Spuren",
        "body": "Jeder Vermögenswert verändert die Ward um Sie herum. Der Ward verändert Sie zurück."
      },
      {
        "title": "Keine einheitliche Antwort",
        "body": "Die Simulation ermittelt keinen Gewinner. Es zeigt die Kosten für jeden Pfad."
      }
    ],
    "shadowTitle": "Der Ward",
    "shadowBody": "Ihr Ward reagiert auf jede Ihrer Bewegungen.",
    "shadowBody2": "Schaufenster sind dunkel. Es wird ruhiger auf den Straßen. Immobilienwerte verschieben sich. Die Änderung ist sichtbar, bevor sie erklärt wird.",
    "shadowQuote": "Ihre Entscheidungen prägen den Ward. Der Ward prägt Ihre Rendite.",
    "mechanicsTitle": "Mechanik",
    "mechanics": [
      {
        "title": "Kreditwürdigkeit",
        "body": "Eine saubere Kredithistorie hat eine Obergrenze. Das System belohnt den Umgang mit Schulden, nicht deren Vermeidung."
      },
      {
        "title": "Verzögerte Auswirkungen",
        "body": "Entscheidungen werden nicht sofort getroffen. Ihre Effekte kehren einige Runden später zurück, oft nachdem Sie weitergezogen sind."
      },
      {
        "title": "Cashflow vs. Nettovermögen",
        "body": "Sie können mehr besitzen, als Sie bezahlen können. Die meisten Verluste entstehen durch das Timing, nicht durch Eigentum."
      }
    ],
    "whyTitle": "Warum eine Simulation?",
    "whyBody": "Bücher erklären die Regeln. Mithilfe einer Simulation können Sie sie unter Druck testen.",
    "whyBody2": "Dadurch bleibt die Lektion leichter im Gedächtnis. Ein Fehler kostet einen Reset, nicht Jahre.",
    "whoTitle": "Gemacht für Spieler, die",
    "whoProfiles": [
      {
        "quote": "„Jeder um mich herum investiert, aber ich weiß nicht einmal, was ich fragen soll.“",
        "label": "Brauche einen Ausgangspunkt"
      },
      {
        "quote": "„Ich kenne die Konzepte. Ich friere immer noch, wenn es Zeit ist, eine Entscheidung zu treffen.“",
        "label": "Kennen Sie die Theorie, nicht die Bewegung"
      },
      {
        "quote": "„Ich habe die Bücher gelesen. An meiner Einstellung zu Geld hat sich nichts wirklich geändert.“",
        "label": "Gelernt, aber unverändert"
      },
      {
        "quote": "„Ich möchte verstehen, wie das System funktioniert, und nicht nur, wie man darin überlebt.“",
        "label": "Neugierig auf die Struktur"
      }
    ],
    "whoClose": "Das Spiel sagt einem nicht, was man tun soll. Es zeigt, was Ihre Entscheidungen offenbaren."
  },
  "ru": {
    "philosophyTitle": "Принципы проектирования",
    "philosophy": [
      {
        "title": "Выживание прежде всего",
        "body": "Денежный поток удерживает вас в игре. Если он остановится, пробег закончится. Чистый капитал имеет значение только в том случае, если вы можете продолжать идти вперед."
      },
      {
        "title": "Инстинкты – это не факты",
        "body": "Долг может показаться опасным. Наличные могут чувствовать себя в безопасности. Игра показывает, где эти инстинкты помогают и чего они вам стоят."
      },
      {
        "title": "Богатство оставляет след",
        "body": "Каждый актив меняет Ward вокруг вас. Ward возвращает вас обратно."
      },
      {
        "title": "Нет единого ответа",
        "body": "Симуляция не выбирает победителя. Он показывает стоимость каждого пути."
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "Ваш Ward реагирует на каждое ваше движение.",
    "shadowBody2": "Витрины магазинов тусклые. Улицы затихли. Стоимость недвижимости меняется. Изменение становится видимым еще до того, как оно будет объяснено.",
    "shadowQuote": "Ваши решения формируют Ward. Ward формирует вашу прибыль.",
    "mechanicsTitle": "Механика",
    "mechanics": [
      {
        "title": "Кредитный рейтинг",
        "body": "У чистой записи есть потолок. Система поощряет управление долгом, а не его избегание."
      },
      {
        "title": "Отложенные эффекты",
        "body": "Выбор не принимается сразу. Их эффекты возвращаются через несколько ходов, часто после того, как вы пошли дальше."
      },
      {
        "title": "Денежный поток против собственного капитала",
        "body": "Вы можете владеть большим, чем можете заплатить. Большинство потерь происходит из-за времени, а не из-за владения."
      }
    ],
    "whyTitle": "Почему симуляция",
    "whyBody": "Книги объясняют правила. Моделирование позволяет протестировать их под давлением.",
    "whyBody2": "Это облегчит запоминание урока. Ошибка стоит перезагрузки, а не лет.",
    "whoTitle": "Сделано для игроков, которые",
    "whoProfiles": [
      {
        "quote": "«Все вокруг меня инвестируют, но я даже не знаю, что спросить».",
        "label": "Нужна отправная точка"
      },
      {
        "quote": "«Я знаю концепции. Я все еще замираю, когда приходит время решать».",
        "label": "Знай теорию, а не ход"
      },
      {
        "quote": "«Я читал книги. Ничто по-настоящему не изменило мое отношение к деньгам».",
        "label": "Выучил, но не изменился"
      },
      {
        "quote": "«Я хочу понять, как работает система, а не только то, как в ней выжить».",
        "label": "Интересно о структуре"
      }
    ],
    "whoClose": "Игра не говорит вам, что делать. Это показывает, что показывает ваш выбор."
  },
  "ar": {
    "philosophyTitle": "مبادئ التصميم",
    "philosophy": [
      {
        "title": "البقاء على قيد الحياة أولا",
        "body": "التدفق النقدي يبقيك في اللعبة. إذا توقف، ينتهي السباق. القيمة الصافية مهمة فقط إذا كان بإمكانك الاستمرار."
      },
      {
        "title": "الغرائز ليست حقائق",
        "body": "يمكن أن تبدو الديون خطيرة. يمكن للنقود أن تشعر بالأمان. تُظهر اللعبة أين تساعد هذه الغرائز وأين تكلفك."
      },
      {
        "title": "الثروة تترك علامة",
        "body": "كل أصل يغير Ward من حولك. Ward يغيرك مرة أخرى."
      },
      {
        "title": "لا توجد إجابة واحدة",
        "body": "المحاكاة لا تختار الفائز. ويبين تكلفة كل مسار."
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "يستجيب Ward الخاص بك لكل خطوة تقوم بها.",
    "shadowBody2": "واجهات المحلات قاتمة. الشوارع هادئة. تتحرك قيم الممتلكات. التغيير مرئي قبل أن يتم شرحه.",
    "shadowQuote": "قراراتك تشكل Ward. يشكل Ward عوائدك.",
    "mechanicsTitle": "ميكانيكا",
    "mechanics": [
      {
        "title": "درجة الائتمان",
        "body": "السجل النظيف له سقف. يكافئ النظام إدارة الديون، وليس تجنبها."
      },
      {
        "title": "آثار متأخرة",
        "body": "الاختيارات لا تستقر دفعة واحدة. تعود تأثيراتها بعد عدة دورات، غالبًا بعد انتقالك إلى مكان آخر."
      },
      {
        "title": "التدفق النقدي مقابل صافي القيمة",
        "body": "يمكنك امتلاك أكثر مما يمكنك دفع ثمنه. معظم الخسائر تأتي من التوقيت، وليس الملكية."
      }
    ],
    "whyTitle": "لماذا المحاكاة",
    "whyBody": "كتب تشرح القواعد. تتيح لك المحاكاة اختبارها تحت الضغط.",
    "whyBody2": "وهذا يجعل الدرس أسهل للتذكر. الخطأ يكلف إعادة ضبط، وليس سنوات.",
    "whoTitle": "صنع للاعبين الذين",
    "whoProfiles": [
      {
        "quote": "\"الجميع من حولي يستثمرون، لكنني لا أعرف حتى ما الذي يجب أن أطلبه\".",
        "label": "بحاجة إلى نقطة انطلاق"
      },
      {
        "quote": "\"أنا أعرف المفاهيم. ومازلت أتجمد عندما يحين وقت اتخاذ القرار.\"",
        "label": "تعرف على النظرية، وليس هذه الخطوة"
      },
      {
        "quote": "\"لقد قرأت الكتب. ولم يغير أي شيء حقًا طريقة تفكيري بشأن المال.\"",
        "label": "تعلمت ولكن لم تتغير"
      },
      {
        "quote": "\"أريد أن أفهم كيف يعمل النظام، وليس فقط كيفية البقاء على قيد الحياة فيه.\"",
        "label": "فضولي حول الهيكل"
      }
    ],
    "whoClose": "اللعبة لا تخبرك بما يجب عليك فعله. إنه يوضح ما تكشفه اختياراتك."
  },
  "pt": {
    "philosophyTitle": "Princípios de design",
    "philosophy": [
      {
        "title": "Sobrevivência primeiro",
        "body": "O fluxo de caixa mantém você no jogo. Se parar, a corrida termina. O patrimônio líquido só importa se você continuar."
      },
      {
        "title": "Instintos não são fatos",
        "body": "A dívida pode parecer perigosa. O dinheiro pode parecer seguro. O jogo mostra onde esses instintos ajudam e onde eles custam caro."
      },
      {
        "title": "A riqueza deixa uma marca",
        "body": "Cada ativo muda o Ward ao seu redor. O Ward muda você de volta."
      },
      {
        "title": "Nenhuma resposta única",
        "body": "A simulação não escolhe um vencedor. Mostra o custo de cada caminho."
      }
    ],
    "shadowTitle": "O Ward",
    "shadowBody": "Seu Ward responde a cada movimento que você faz.",
    "shadowBody2": "As vitrines escurecem. As ruas se acalmam. Os valores das propriedades mudam. A mudança é visível antes de ser explicada.",
    "shadowQuote": "Suas decisões moldam o Ward. O Ward molda seus retornos.",
    "mechanicsTitle": "Mecânica",
    "mechanics": [
      {
        "title": "Pontuação de crédito",
        "body": "Um histórico limpo tem um teto. O sistema recompensa a gestão da dívida, não a sua evitação."
      },
      {
        "title": "Efeitos atrasados",
        "body": "As escolhas não são resolvidas de uma só vez. Seus efeitos retornam alguns turnos depois, geralmente após você seguir em frente."
      },
      {
        "title": "Fluxo de caixa vs. patrimônio líquido",
        "body": "Você pode possuir mais do que pode pagar. A maioria das perdas vem do timing e não da propriedade."
      }
    ],
    "whyTitle": "Por que uma simulação",
    "whyBody": "Os livros explicam as regras. Uma simulação permite testá-los sob pressão.",
    "whyBody2": "Isso torna a lição mais fácil de lembrar. Um erro custa uma reinicialização, não anos.",
    "whoTitle": "Feito para jogadores que",
    "whoProfiles": [
      {
        "quote": "“Todo mundo ao meu redor está investindo, mas nem sei o que perguntar.”",
        "label": "Precisa de um ponto de partida"
      },
      {
        "quote": "\"Eu conheço os conceitos. Ainda fico paralisado na hora de decidir.\"",
        "label": "Conheça a teoria, não o movimento"
      },
      {
        "quote": "\"Eu li os livros. Nada realmente mudou a forma como penso sobre dinheiro.\"",
        "label": "Aprendido, mas inalterado"
      },
      {
        "quote": "“Quero entender como funciona o sistema, e não apenas como sobreviver nele.”",
        "label": "Curioso sobre a estrutura"
      }
    ],
    "whoClose": "O jogo não diz o que fazer. Mostra o que suas escolhas revelam."
  },
  "it": {
    "philosophyTitle": "Principi di progettazione",
    "philosophy": [
      {
        "title": "Prima la sopravvivenza",
        "body": "Il flusso di cassa ti mantiene in gioco. Se si ferma, la corsa finisce. Il patrimonio netto conta solo se puoi andare avanti."
      },
      {
        "title": "Gli istinti non sono fatti",
        "body": "Il debito può sembrare pericoloso. I contanti possono sentirsi al sicuro. Il gioco mostra dove questi istinti aiutano e dove ti costano."
      },
      {
        "title": "La ricchezza lascia il segno",
        "body": "Ogni risorsa cambia lo Ward intorno a te. Lo Ward ti cambia."
      },
      {
        "title": "Nessuna risposta unica",
        "body": "La simulazione non sceglie un vincitore. Mostra il costo di ogni percorso."
      }
    ],
    "shadowTitle": "Lo Ward",
    "shadowBody": "Il tuo Ward risponde a ogni tuo movimento.",
    "shadowBody2": "Vetrine dei negozi fioche. Le strade si calmano. I valori delle proprietà si spostano. Il cambiamento è visibile prima ancora che venga spiegato.",
    "shadowQuote": "Le tue decisioni danno forma alla Ward. Lo Ward dà forma ai tuoi rendimenti.",
    "mechanicsTitle": "Meccanica",
    "mechanics": [
      {
        "title": "Punteggio di credito",
        "body": "Un record pulito ha un limite. Il sistema premia la gestione del debito, non l’evitarlo."
      },
      {
        "title": "Effetti ritardati",
        "body": "Le scelte non si risolvono subito. I loro effetti ritornano qualche turno dopo, spesso dopo che sei andato avanti."
      },
      {
        "title": "Flusso di cassa rispetto al patrimonio netto",
        "body": "Puoi possedere più di quanto puoi pagare. La maggior parte delle perdite deriva dalle tempistiche, non dalla proprietà."
      }
    ],
    "whyTitle": "Perché una simulazione",
    "whyBody": "I libri spiegano le regole. Una simulazione consente di testarli sotto pressione.",
    "whyBody2": "Ciò rende la lezione più facile da ricordare. Un errore costa un reset, non anni.",
    "whoTitle": "Realizzato per i giocatori che",
    "whoProfiles": [
      {
        "quote": "\"Tutti intorno a me stanno investendo, ma non so nemmeno cosa chiedere.\"",
        "label": "Serve un punto di partenza"
      },
      {
        "quote": "\"Conosco i concetti. Mi blocco ancora quando è il momento di decidere.\"",
        "label": "Conosci la teoria, non la mossa"
      },
      {
        "quote": "\"Ho letto i libri. Niente ha veramente cambiato il modo in cui penso al denaro.\"",
        "label": "Imparato, ma immutato"
      },
      {
        "quote": "\"Voglio capire come funziona il sistema, non solo come sopravvivere al suo interno.\"",
        "label": "Curioso per la struttura"
      }
    ],
    "whoClose": "Il gioco non ti dice cosa fare. Mostra ciò che rivelano le tue scelte."
  },
  "nl": {
    "philosophyTitle": "Ontwerpprincipes",
    "philosophy": [
      {
        "title": "Overleven eerst",
        "body": "Cashflow houdt je in het spel. Als het stopt, eindigt de run. Het nettovermogen doet er alleen toe als u door kunt gaan."
      },
      {
        "title": "Instincten zijn geen feiten",
        "body": "Schulden kunnen gevaarlijk aanvoelen. Contant geld kan veilig voelen. De game laat zien waar die instincten helpen, en waar ze je kosten."
      },
      {
        "title": "Rijkdom laat sporen na",
        "body": "Elke aanwinst verandert de Ward om je heen. De Ward verandert jou terug."
      },
      {
        "title": "Geen enkel antwoord",
        "body": "De simulatie kiest geen winnaar. Het toont de kosten van elk pad."
      }
    ],
    "shadowTitle": "De Ward",
    "shadowBody": "Je Ward reageert op elke beweging die je maakt.",
    "shadowBody2": "Etalages doven. Straten worden stil. Vastgoedwaarden verschuiven. De verandering is zichtbaar voordat ze wordt uitgelegd.",
    "shadowQuote": "Jouw beslissingen vormen de Ward. De Ward geeft vorm aan uw rendement.",
    "mechanicsTitle": "Mechanica",
    "mechanics": [
      {
        "title": "Kredietscore",
        "body": "Een schoon record heeft een plafond. Het systeem beloont het beheren van schulden, niet het vermijden ervan."
      },
      {
        "title": "Vertraagde effecten",
        "body": "Keuzes zijn niet in één keer beslecht. Hun effecten keren een paar beurten later terug, vaak nadat je verder bent gegaan."
      },
      {
        "title": "Cashflow versus nettowaarde",
        "body": "Je kunt meer bezitten dan waarvoor je kunt betalen. De meeste verliezen komen voort uit timing, niet uit eigendom."
      }
    ],
    "whyTitle": "Waarom een simulatie",
    "whyBody": "Boeken leggen de regels uit. Met een simulatie kunt u ze onder druk testen.",
    "whyBody2": "Dat maakt de les makkelijker te onthouden. Een fout kost een reset, geen jaren.",
    "whoTitle": "Gemaakt voor spelers die",
    "whoProfiles": [
      {
        "quote": "\"Iedereen om mij heen investeert, maar ik weet niet eens wat ik moet vragen.\"",
        "label": "Een startpunt nodig"
      },
      {
        "quote": "\"Ik ken de concepten. Ik bevries nog steeds als het tijd is om te beslissen.\"",
        "label": "Ken de theorie, niet de zet"
      },
      {
        "quote": "\"Ik heb de boeken gelezen. Niets heeft de manier waarop ik over geld denk echt veranderd.\"",
        "label": "Geleerd, maar onveranderd"
      },
      {
        "quote": "\"Ik wil begrijpen hoe het systeem werkt, niet alleen hoe ik erin moet overleven.\"",
        "label": "Benieuwd naar de structuur"
      }
    ],
    "whoClose": "Het spel vertelt je niet wat je moet doen. Het laat zien wat uw keuzes onthullen."
  },
  "id": {
    "philosophyTitle": "Prinsip desain",
    "philosophy": [
      {
        "title": "Bertahan hidup dulu",
        "body": "Arus kas membuat Anda tetap dalam permainan. Jika berhenti, maka perjalanan berakhir. Kekayaan bersih hanya penting jika Anda bisa terus maju."
      },
      {
        "title": "Naluri bukanlah fakta",
        "body": "Hutang bisa terasa berbahaya. Uang tunai bisa terasa aman. Permainan ini menunjukkan di mana naluri tersebut membantu, dan di mana kerugiannya."
      },
      {
        "title": "Kekayaan meninggalkan bekas",
        "body": "Setiap aset mengubah Ward di sekitar Anda. Ward mengubah Anda kembali."
      },
      {
        "title": "Tidak ada jawaban tunggal",
        "body": "Simulasi tidak memilih pemenang. Ini menunjukkan biaya setiap jalur."
      }
    ],
    "shadowTitle": "Ward",
    "shadowBody": "Ward Anda merespons setiap gerakan yang Anda lakukan.",
    "shadowBody2": "Etalase toko redup. Jalanan menjadi tenang. Nilai properti bergerak. Perubahannya terlihat sebelum dijelaskan.",
    "shadowQuote": "Keputusan Anda membentuk Ward. Ward membentuk keuntungan Anda.",
    "mechanicsTitle": "Mekanika",
    "mechanics": [
      {
        "title": "Skor kredit",
        "body": "Rekor yang bersih memiliki batas tertinggi. Sistem ini memberi penghargaan pada pengelolaan utang, bukan menghindarinya."
      },
      {
        "title": "Efek tertunda",
        "body": "Pilihan tidak bisa diselesaikan secara instan. Efeknya kembali beberapa putaran kemudian, sering kali setelah Anda melanjutkan."
      },
      {
        "title": "Arus kas vs. kekayaan bersih",
        "body": "Anda dapat memiliki lebih dari yang dapat Anda bayar. Kebanyakan kerugian berasal dari waktu, bukan kepemilikan."
      }
    ],
    "whyTitle": "Mengapa simulasi",
    "whyBody": "Buku menjelaskan aturannya. Sebuah simulasi memungkinkan Anda mengujinya di bawah tekanan.",
    "whyBody2": "Hal ini membuat pelajaran lebih mudah diingat. Sebuah kesalahan membutuhkan penyetelan ulang, bukan bertahun-tahun.",
    "whoTitle": "Dibuat untuk pemain yang",
    "whoProfiles": [
      {
        "quote": "“Semua orang di sekitar saya berinvestasi, tapi saya bahkan tidak tahu harus bertanya apa.”",
        "label": "Butuh titik awal"
      },
      {
        "quote": "“Saya tahu konsepnya. Saya masih terdiam ketika tiba waktunya untuk mengambil keputusan.”",
        "label": "Ketahui teorinya, bukan langkahnya"
      },
      {
        "quote": "\"Saya sudah membaca bukunya. Tidak ada yang benar-benar mengubah cara berpikir saya tentang uang.\"",
        "label": "Belajar, tapi tidak berubah"
      },
      {
        "quote": "\"Saya ingin memahami cara kerja sistem ini, bukan hanya cara bertahan di dalamnya.\"",
        "label": "Penasaran dengan strukturnya"
      }
    ],
    "whoClose": "Permainan tidak memberi tahu Anda apa yang harus dilakukan. Ini menunjukkan apa yang diungkapkan oleh pilihan Anda."
  }
}

export function GamePage() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className="border-t border-gray-800">
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20 text-center">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-7">{tx.whyTitle}</h2>
          <p className="text-gray-400 leading-relaxed mb-5">{tx.whyBody}</p>
          <p className="text-gray-300 leading-relaxed">{tx.whyBody2}</p>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
