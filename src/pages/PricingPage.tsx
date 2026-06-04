import { useEffect, useState } from 'react'
import { GlobeMark } from '../components/GlobeMark'
import { Layout } from '../components/Layout'
import { PricingRegionPicker } from '../components/PricingRegionPicker'
import { useLanguage } from '../context/LanguageContext'
import {
  LANG_DEFAULT_REGION,
  PRICING_REGION_BY_ID,
  formatPackPrice,
  formatPerReportPrice,
  regionPricesIncludeTax,
  readStoredRegionId,
  regionDisplayName,
  storeRegionId,
  type PricingRegionId,
} from '../data/appleStorePricing'
import { PRICING_UI } from '../i18n/pricingUi'

const content = {
  "en": {
    "badge": "Report Credits",
    "headline": "Choose the report that fits your play.",
    "sub": "1 credit unlocks 1 personalized report for one completed game. Credits never expire.",
    "starter": {
      "name": "Observer",
      "credits": "3 credits · 1 credit per completed game",
      "tagline": "Worth at least three playthroughs. There is no single right way. Just experience it. Feel something new.",
      "perReport": "$3.00 / report",
      "cta": "In-app purchase only"
    },
    "middle": {
      "name": "Explorer",
      "credits": "5 credits · 1 credit per completed game",
      "tagline": "More experience. More choice. Better value, shaped by your own hands.",
      "perReport": "$2.60 / report",
      "cta": "In-app purchase only"
    },
    "power": {
      "name": "Analyst",
      "valueBadge": "Best Value",
      "credits": "8 credits · 1 credit per completed game",
      "tagline": "The full path of an analyst. How will you be recorded? Experience and traces, your world alone.",
      "perReport": "$2.00 / report",
      "cta": "In-app purchase only"
    },
    "features": [
      "One report per completed playthrough",
      "Decision retrospective",
      "Cognitive signature analysis",
      "Hidden information reveal",
      "Alternative path simulation"
    ],
    "howTitle": "How it works",
    "how": [
      {
        "step": "1",
        "title": "Finish a run",
        "body": "Complete a game to unlock the report screen."
      },
      {
        "step": "2",
        "title": "Use one credit",
        "body": "One credit unlocks the full report generated from that completed run."
      },
      {
        "step": "3",
        "title": "Play again",
        "body": "Each run creates a different report."
      }
    ],
    "note": "Credits are added to your account right after purchase. They never expire and carry over between sessions.",
    "disclaimer": "Shadow Economy is an educational simulation. Reports are not financial, investment, tax, legal, or professional advice, and buying or reading a report does not guarantee any real-world outcome."
  },
  "ko": {
    "badge": "보고서 크레딧",
    "headline": "당신의 플레이에 맞는 보고서를 고르세요.",
    "sub": "1 크레딧으로 완료된 게임 1개에 대한 맞춤 보고서 1개가 잠금 해제됩니다. 크레딧은 만료되지 않습니다.",
    "starter": {
      "name": "관찰자",
      "credits": "크레딧 3개 · 완료한 게임 1회당 1개",
      "tagline": "최소 세 번은 플레이해볼 가치가 있어요. 정해진 유일한 방법은 없습니다. 그저 경험해 보세요. 새로운 것을 느껴 보세요.",
      "perReport": "보고서 1회당 $3.00",
      "cta": "앱 내 구매만 가능"
    },
    "middle": {
      "name": "탐구자",
      "credits": "크레딧 5개 · 완료한 게임 1회당 1개",
      "tagline": "더 많은 경험, 더 많은 선택. 당신만의 가치를 만들어가세요.",
      "perReport": "보고서 1회당 $2.60",
      "cta": "앱 내 구매만 가능"
    },
    "power": {
      "name": "분석가",
      "valueBadge": "최고 가치",
      "credits": "크레딧 8개 · 완료한 게임 1회당 1개",
      "tagline": "완전한 분석가의 길, 어떤 사람으로 기록될까요? 경험과 흔적, 오직 당신의 세계입니다.",
      "perReport": "보고서 1회당 $2.00",
      "cta": "앱 내 구매만 가능"
    },
    "features": [
      "완료된 플레이당 보고서 1개",
      "결정의 회고",
      "인지 서명 분석",
      "숨겨진 정보 공개",
      "대안 경로 시뮬레이션"
    ],
    "howTitle": "사용 방법",
    "how": [
      {
        "step": "1",
        "title": "한 판을 끝냅니다",
        "body": "게임을 완료하면 보고서 화면이 열립니다."
      },
      {
        "step": "2",
        "title": "1크레딧을 사용하세요",
        "body": "1크레딧은 완료된 실행에서 생성된 전체 보고서의 잠금을 해제합니다."
      },
      {
        "step": "3",
        "title": "다시 플레이합니다",
        "body": "다음 판은 다른 보고서를 만듭니다."
      }
    ],
    "note": "구매 후 크레딧이 즉시 계정에 추가됩니다. 만료되지 않으며 세션 간에 유지됩니다.",
    "disclaimer": "Shadow Economy는 교육 시뮬레이션입니다. 보고서는 재정, 투자, 세금, 법률 또는 전문적인 조언이 아니며, 보고서를 구매하거나 읽는다고 해서 실제 결과가 보장되는 것은 아닙니다."
  },
  "ja": {
    "badge": "レポートクレジット",
    "headline": "あなたのプレイに合うレポートを選んでください。",
    "sub": "1 クレジットで、1 つの完了したゲームについて 1 つのパーソナライズされたレポートのロックが解除されます。クレジットに有効期限はありません。",
    "starter": {
      "name": "観察者",
      "credits": "クレジット3個・クリアしたプレイ1回につき1個",
      "tagline": "少なくとも3回は遊ぶ価値があります。唯一の正解はありません。ただ体験してください。新しい何かを感じてください。",
      "perReport": "レポート1件あたり $3.00",
      "cta": "アプリ内購入のみ"
    },
    "middle": {
      "name": "探究者",
      "credits": "クレジット5個 · 完了したゲーム1回につき1個",
      "tagline": "より多くの体験、より多くの選択。あなた自身の手で、より良い価値を形にしてください。",
      "perReport": "レポート1件あたり $2.60",
      "cta": "アプリ内購入のみ"
    },
    "power": {
      "name": "分析家",
      "valueBadge": "最もお得",
      "credits": "クレジット8個 · 完了したゲーム1回につき1個",
      "tagline": "完全な分析家の道。あなたはどんな人物として記録されるでしょうか。経験と痕跡、ただあなたの世界です。",
      "perReport": "レポート1件あたり $2.00",
      "cta": "アプリ内購入のみ"
    },
    "features": [
      "プレイ完了ごとにレポート1件",
      "決断の回顧",
      "認知的シグネチャー分析",
      "隠れた情報の開示",
      "代替ルートシミュレーション"
    ],
    "howTitle": "使い方",
    "how": [
      {
        "step": "1",
        "title": "1回プレイを終える",
        "body": "ゲームを完了すると、レポート画面が開きます。"
      },
      {
        "step": "2",
        "title": "1 クレジットを使用する",
        "body": "1 クレジットを使用すると、完了した実行から生成された完全なレポートのロックが解除されます。"
      },
      {
        "step": "3",
        "title": "もう一度遊ぶ",
        "body": "次のプレイで、別のレポートが生まれます。"
      }
    ],
    "note": "購入後、クレジットはすぐにアカウントへ追加されます。有効期限はなく、セッション間でも引き継がれます。",
    "disclaimer": "Shadow Economy は教育シミュレーションです。レポートは財務、投資、税金、法律、または専門的なアドバイスではなく、レポートを購入または読んでも、実際の結果が保証されるものではありません。"
  },
  "zh": {
    "badge": "报告积分",
    "headline": "选择适合你游玩的报告。",
    "sub": "1 个积分可解锁一款已完成游戏的 1 份个性化报告。积分永不过期。",
    "starter": {
      "name": "观察者",
      "credits": "3 个积分 · 每完成一局消耗 1 个",
      "tagline": "至少值得玩三次。没有唯一正确的方法。去体验它，感受一些新的东西。",
      "perReport": "每份报告 $3.00",
      "cta": "仅限应用内购买"
    },
    "middle": {
      "name": "探索者",
      "credits": "5个积分 · 每完成一局使用1个",
      "tagline": "更多体验，更多选择。由你亲手打造更好的价值。",
      "perReport": "每份报告 $2.60",
      "cta": "仅限应用内购买"
    },
    "power": {
      "name": "分析师",
      "valueBadge": "最超值",
      "credits": "8个积分 · 每完成一局使用1个",
      "tagline": "完整的分析家之路。你会被记录成怎样的人？经验与痕迹，只属于你的世界。",
      "perReport": "每份报告 $2.00",
      "cta": "仅限应用内购买"
    },
    "features": [
      "每次完整游玩一份报告",
      "决策回顾",
      "认知特征分析",
      "隐藏信息揭示",
      "替代路径模拟"
    ],
    "howTitle": "使用方法",
    "how": [
      {
        "step": "1",
        "title": "完成一局",
        "body": "游戏结束后，报告界面会开启。"
      },
      {
        "step": "2",
        "title": "使用一个积分",
        "body": "一个积分可解锁从完成的运行中生成的完整报告。"
      },
      {
        "step": "3",
        "title": "再次游玩",
        "body": "下一局会生成另一份报告。"
      }
    ],
    "note": "购买后，积分会立即添加到账户。不会过期，也会在会话之间保留。",
    "disclaimer": "Shadow Economy 是一款教育模拟游戏。报告不是财务、投资、税务、法律或专业建议，购买或阅读报告并不能保证任何现实结果。"
  },
  "es": {
    "badge": "Créditos de informe",
    "headline": "Elige el informe que encaja con tu partida.",
    "sub": "1 crédito desbloquea 1 informe personalizado por un juego completado. Los créditos nunca caducan.",
    "starter": {
      "name": "Observador",
      "credits": "3 créditos · 1 crédito por partida completada",
      "tagline": "Vale la pena jugarlo al menos tres veces. No existe una única manera correcta. Solo vívelo. Descubre algo nuevo.",
      "perReport": "$3.00 / informe",
      "cta": "Solo compra en la app"
    },
    "middle": {
      "name": "Explorador",
      "credits": "5 créditos · 1 crédito por partida completada",
      "tagline": "Más experiencia, más opciones. Mejor valor, creado por tus propias manos.",
      "perReport": "$2.60 / informe",
      "cta": "Solo compra en la app"
    },
    "power": {
      "name": "Analista",
      "valueBadge": "Mejor valor",
      "credits": "8 créditos · 1 crédito por partida completada",
      "tagline": "El camino completo del analista. ¿Cómo quedarás registrado? Experiencia y huellas, solo tu mundo.",
      "perReport": "$2.00 / informe",
      "cta": "Solo compra en la app"
    },
    "features": [
      "Un informe por partida completada",
      "Retrospectiva de decisiones",
      "Análisis de firma cognitiva",
      "Revelación de información oculta",
      "Simulación de caminos alternativos"
    ],
    "howTitle": "Cómo funciona",
    "how": [
      {
        "step": "1",
        "title": "Termina una partida",
        "body": "Al finalizar, se abre la pantalla del informe."
      },
      {
        "step": "2",
        "title": "Usa un crédito",
        "body": "Un crédito desbloquea el informe completo generado a partir de esa ejecución completa."
      },
      {
        "step": "3",
        "title": "Juega otra vez",
        "body": "La siguiente partida genera otro informe."
      }
    ],
    "note": "Los créditos se añaden a tu cuenta justo después de la compra. No caducan y se mantienen entre sesiones.",
    "disclaimer": "Shadow Economy es una simulación educativa. Los informes no son asesoramiento financiero, de inversión, fiscal, legal o profesional, y comprar o leer un informe no garantiza ningún resultado en el mundo real."
  },
  "sv": {
    "badge": "Rapportkrediter",
    "headline": "Välj den rapport som passar ditt spel.",
    "sub": "1 kredit låser upp 1 personlig rapport för ett avslutat spel. Krediter går aldrig ut.",
    "starter": {
      "name": "Observatör",
      "credits": "3 krediter · 1 kredit per slutförd omgång",
      "tagline": "Värt minst tre genomspelningar. Det finns inget enda rätt sätt. Upplev det bara. Känn något nytt.",
      "perReport": "$3.00 / rapport",
      "cta": "Endast i appen"
    },
    "middle": {
      "name": "Utforskare",
      "credits": "5 krediter · 1 kredit per slutförd omgång",
      "tagline": "Mer upplevelse, fler val. Bättre värde, format av dina egna händer.",
      "perReport": "$2.60 / rapport",
      "cta": "Endast i appen"
    },
    "power": {
      "name": "Analytiker",
      "valueBadge": "Bäst värde",
      "credits": "8 krediter · 1 kredit per slutförd omgång",
      "tagline": "Den fullständiga analytikerns väg. Hur kommer du att bli ihågkommen? Upplevelse och spår, bara din värld.",
      "perReport": "$2.00 / rapport",
      "cta": "Endast i appen"
    },
    "features": [
      "En rapport per slutförd genomspelning",
      "Beslutsutvärdering",
      "Kognitiv signaturanalys",
      "Avslöjande av dold information",
      "Simulering av alternativa vägar"
    ],
    "howTitle": "Så här fungerar det",
    "how": [
      {
        "step": "1",
        "title": "Slutför en runda",
        "body": "När spelet är klart öppnas rapportskärmen."
      },
      {
        "step": "2",
        "title": "Använd en kredit",
        "body": "En kredit låser upp hela rapporten som genereras från den avslutade körningen."
      },
      {
        "step": "3",
        "title": "Spela igen",
        "body": "Nästa runda ger en ny rapport."
      }
    ],
    "note": "Krediter läggs till kontot direkt efter köp. De löper aldrig ut och följer med mellan sessioner.",
    "disclaimer": "Shadow Economy är en pedagogisk simulering. Rapporter är inte finansiella, investerings-, skatte-, juridiska eller professionella råd, och att köpa eller läsa en rapport garanterar inte något verkligt resultat."
  },
  "fr": {
    "badge": "Crédits du rapport",
    "headline": "Choisissez le rapport qui correspond à votre jeu.",
    "sub": "1 crédit débloque 1 rapport personnalisé pour une partie terminée. Les crédits n'expirent jamais.",
    "starter": {
      "name": "Observateur",
      "credits": "3 crédits · 1 crédit par partie terminée",
      "tagline": "Cela vaut au moins trois parties. Il n’existe pas une seule bonne façon de jouer. Vivez l’expérience. Ressentez quelque chose de nouveau.",
      "perReport": "$3.00 / rapport",
      "cta": "Achat intégré uniquement"
    },
    "middle": {
      "name": "Explorateur",
      "credits": "5 crédits · 1 crédit par partie terminée",
      "tagline": "Plus d’expérience, plus de choix. Une meilleure valeur, façonnée par vos propres mains.",
      "perReport": "$2.60 / rapport",
      "cta": "Achat intégré uniquement"
    },
    "power": {
      "name": "Analyste",
      "valueBadge": "Meilleure valeur",
      "credits": "8 crédits · 1 crédit par partie terminée",
      "tagline": "Le parcours complet de l’analyste. Comment serez-vous consigné ? Expériences et traces, votre monde à vous seul.",
      "perReport": "$2.00 / rapport",
      "cta": "Achat intégré uniquement"
    },
    "features": [
      "Un rapport par partie terminée",
      "Rétrospective de la décision",
      "Analyse des signatures cognitives",
      "Informations cachées révélées",
      "Simulation de chemin alternatif"
    ],
    "howTitle": "Comment ça marche",
    "how": [
      {
        "step": "1",
        "title": "Terminer une course",
        "body": "Terminez une partie pour déverrouiller l'écran de rapport."
      },
      {
        "step": "2",
        "title": "Utiliser un crédit",
        "body": "Un crédit débloque le rapport complet généré à partir de cette exécution terminée."
      },
      {
        "step": "3",
        "title": "Rejouer",
        "body": "Chaque exécution crée un rapport différent."
      }
    ],
    "note": "Les crédits sont ajoutés à votre compte immédiatement après l’achat. Ils n’expirent jamais et restent entre les sessions.",
    "disclaimer": "Shadow Economy est une simulation pédagogique. Les rapports ne constituent pas des conseils financiers, d’investissement, fiscaux, juridiques ou professionnels, et l’achat ou la lecture d’un rapport ne garantit aucun résultat réel."
  },
  "de": {
    "badge": "Berichtsguthaben",
    "headline": "Wählen Sie den Bericht, der zu Ihrem Stück passt.",
    "sub": "1 Guthaben schaltet 1 personalisierten Bericht für ein abgeschlossenes Spiel frei. Credits verfallen nie.",
    "starter": {
      "name": "Beobachter",
      "credits": "3 Guthaben · 1 Guthaben pro abgeschlossenem Spiel",
      "tagline": "Es lohnt sich, es mindestens dreimal zu spielen. Es gibt keinen einzigen richtigen Weg. Erlebe es einfach. Spüre etwas Neues.",
      "perReport": "$3.00 / Bericht",
      "cta": "Nur In-App-Kauf"
    },
    "middle": {
      "name": "Entdecker",
      "credits": "5 Guthaben · 1 Guthaben pro abgeschlossenem Spiel",
      "tagline": "Mehr Erfahrung. Mehr Auswahl. Besserer Wert, geformt durch deine eigenen Hände.",
      "perReport": "$2.60 / Bericht",
      "cta": "Nur In-App-Kauf"
    },
    "power": {
      "name": "Analyst",
      "valueBadge": "Bester Wert",
      "credits": "8 Guthaben · 1 Guthaben pro abgeschlossenem Spiel",
      "tagline": "Der vollständige Weg eines Analysten. Als was werden Sie festgehalten? Erfahrung und Spuren, allein Ihre Welt.",
      "perReport": "$2.00 / Bericht",
      "cta": "Nur In-App-Kauf"
    },
    "features": [
      "Ein Bericht pro abgeschlossenem Spieldurchgang",
      "Entscheidungsrückblick",
      "Kognitive Signaturanalyse",
      "Versteckte Informationen enthüllen",
      "Alternative Pfadsimulation"
    ],
    "howTitle": "Wie es funktioniert",
    "how": [
      {
        "step": "1",
        "title": "Beende einen Lauf",
        "body": "Schließe ein Spiel ab, um den Berichtsbildschirm freizuschalten."
      },
      {
        "step": "2",
        "title": "Verwenden Sie ein Guthaben",
        "body": "Mit einem Guthaben wird der vollständige Bericht freigeschaltet, der aus diesem abgeschlossenen Lauf erstellt wurde."
      },
      {
        "step": "3",
        "title": "Spielen Sie noch einmal",
        "body": "Bei jedem Lauf wird ein anderer Bericht erstellt."
      }
    ],
    "note": "Guthaben werden deinem Konto sofort nach dem Kauf gutgeschrieben. Sie laufen nie ab und bleiben zwischen Sitzungen erhalten.",
    "disclaimer": "Shadow Economy ist eine Lernsimulation. Bei Berichten handelt es sich nicht um Finanz-, Anlage-, Steuer-, Rechts- oder Fachberatung, und der Kauf oder das Lesen eines Berichts ist keine Garantie für ein reales Ergebnis."
  },
  "ru": {
    "badge": "Кредиты для отчётов",
    "headline": "Выберите отчет, который соответствует вашей игре.",
    "sub": "1 кредит открывает 1 персональный отчет по одной завершенной игре. Кредиты никогда не истекают.",
    "starter": {
      "name": "Наблюдатель",
      "credits": "3 кредита · 1 кредит за завершённую игру",
      "tagline": "Игра стоит как минимум трёх прохождений. Единственно верного способа нет. Просто проживите её. Почувствуйте что-то новое.",
      "perReport": "$3.00 / отчёт",
      "cta": "Только внутриигровая покупка"
    },
    "middle": {
      "name": "Исследователь",
      "credits": "5 кредитов · 1 кредит за завершённую игру",
      "tagline": "Больше опыта, больше выбора. Лучшая ценность, созданная вашими собственными руками.",
      "perReport": "$2.60 / отчёт",
      "cta": "Только внутриигровая покупка"
    },
    "power": {
      "name": "Аналитик",
      "valueBadge": "Лучшее предложение",
      "credits": "8 кредитов · 1 кредит за завершённую игру",
      "tagline": "Полный путь аналитика. Каким человеком вы останетесь в записи? Опыт и следы, только ваш мир.",
      "perReport": "$2.00 / отчёт",
      "cta": "Только внутриигровая покупка"
    },
    "features": [
      "Один отчет за завершенное прохождение",
      "Ретроспектива решений",
      "Когнитивный анализ сигнатур",
      "Скрытая информация раскрывается",
      "Альтернативное моделирование пути"
    ],
    "howTitle": "Как это работает",
    "how": [
      {
        "step": "1",
        "title": "Завершите игру",
        "body": "Завершите игру, чтобы разблокировать экран отчета."
      },
      {
        "step": "2",
        "title": "Используйте один кредит",
        "body": "Один кредит открывает полный отчет, созданный по результатам завершенного запуска."
      },
      {
        "step": "3",
        "title": "Играй еще раз",
        "body": "При каждом запуске создается отдельный отчет."
      }
    ],
    "note": "Кредиты сразу добавляются на ваш счёт после покупки. Они не истекают и сохраняются между сессиями.",
    "disclaimer": "Shadow Economy — образовательный симулятор. Отчеты не являются финансовыми, инвестиционными, налоговыми, юридическими или профессиональными советами, и покупка или чтение отчета не гарантирует какого-либо реального результата."
  },
  "ar": {
    "badge": "أرصدة التقارير",
    "headline": "اختر التقرير الذي يناسب لعبتك.",
    "sub": "رصيد واحد يفتح تقريرًا مخصصًا واحدًا للعبة واحدة مكتملة. الاعتمادات لا تنتهي أبدا.",
    "starter": {
      "name": "مراقب",
      "credits": "3 أرصدة · رصيد واحد لكل لعبة مكتملة",
      "tagline": "تستحق ذلك ثلاث مرات على الأقل. لا توجد طريقة واحدة صحيحة. فقط جرّبها. واشعر بشيء جديد.",
      "perReport": "$3.00 / تقرير",
      "cta": "الشراء داخل التطبيق فقط"
    },
    "middle": {
      "name": "مستكشف",
      "credits": "5 أرصدة · رصيد واحد لكل لعبة مكتملة",
      "tagline": "مزيد من التجربة، ومزيد من الخيارات. قيمة أفضل، تشكّلها بيديك.",
      "perReport": "$2.60 / تقرير",
      "cta": "الشراء داخل التطبيق فقط"
    },
    "power": {
      "name": "محلل",
      "valueBadge": "أفضل قيمة",
      "credits": "8 أرصدة · رصيد واحد لكل لعبة مكتملة",
      "tagline": "المسار الكامل للمحلل. كيف سيتم تسجيلك؟ التجربة والآثار، عالمك وحدك.",
      "perReport": "$2.00 / تقرير",
      "cta": "الشراء داخل التطبيق فقط"
    },
    "features": [
      "تقرير واحد لكل عملية تشغيل مكتملة",
      "القرار بأثر رجعي",
      "تحليل التوقيع المعرفي",
      "كشف المعلومات المخفية",
      "محاكاة المسار البديل"
    ],
    "howTitle": "كيف يعمل",
    "how": [
      {
        "step": "1",
        "title": "أكمل جولة",
        "body": "أكمل لعبة لفتح شاشة التقرير."
      },
      {
        "step": "2",
        "title": "استخدم رصيدًا واحدًا",
        "body": "يفتح رصيد واحد التقرير الكامل الذي تم إنشاؤه من هذا التشغيل المكتمل."
      },
      {
        "step": "3",
        "title": "العب مرة أخرى",
        "body": "يقوم كل تشغيل بإنشاء تقرير مختلف."
      }
    ],
    "note": "تُضاف الاعتمادات إلى حسابك فور الشراء. لا تنتهي صلاحيتها وتنتقل بين الجلسات.",
    "disclaimer": "Shadow Economy هي محاكاة تعليمية. التقارير ليست مشورة مالية أو استثمارية أو ضريبية أو قانونية أو مهنية، كما أن شراء تقرير أو قراءته لا يضمن أي نتيجة واقعية."
  },
  "pt": {
    "badge": "Créditos do relatório",
    "headline": "Escolha o relatório que se adapta ao seu jogo.",
    "sub": "1 crédito desbloqueia 1 relatório personalizado para um jogo concluído. Os créditos nunca expiram.",
    "starter": {
      "name": "Observador",
      "credits": "3 créditos · 1 crédito por jogo concluído",
      "tagline": "Vale a pena jogar pelo menos três vezes. Não existe uma única maneira certa. Apenas viva a experiência. Sinta algo novo.",
      "perReport": "$3.00 / relatório",
      "cta": "Apenas compra no app"
    },
    "middle": {
      "name": "Explorador",
      "credits": "5 créditos · 1 crédito por jogo concluído",
      "tagline": "Mais experiência, mais escolha. Melhor valor, moldado pelas suas próprias mãos.",
      "perReport": "$2.60 / relatório",
      "cta": "Apenas compra no app"
    },
    "power": {
      "name": "Analista",
      "valueBadge": "Melhor valor",
      "credits": "8 créditos · 1 crédito por jogo concluído",
      "tagline": "O caminho completo do analista. Como você será registrado? Experiência e vestígios, apenas o seu mundo.",
      "perReport": "$2.00 / relatório",
      "cta": "Apenas compra no app"
    },
    "features": [
      "Um relatório por jogo concluído",
      "Retrospectiva de decisão",
      "Análise de assinatura cognitiva",
      "Informações ocultas reveladas",
      "Simulação de caminho alternativo"
    ],
    "howTitle": "Como funciona",
    "how": [
      {
        "step": "1",
        "title": "Terminar uma corrida",
        "body": "Complete um jogo para desbloquear a tela de relatório."
      },
      {
        "step": "2",
        "title": "Use um crédito",
        "body": "Um crédito desbloqueia o relatório completo gerado a partir da execução concluída."
      },
      {
        "step": "3",
        "title": "Jogue novamente",
        "body": "Cada execução cria um relatório diferente."
      }
    ],
    "note": "Os créditos são adicionados à sua conta imediatamente após a compra. Eles nunca expiram e permanecem entre as sessões.",
    "disclaimer": "Shadow Economy é uma simulação educacional. Os relatórios não constituem aconselhamento financeiro, de investimento, fiscal, jurídico ou profissional, e comprar ou ler um relatório não garante qualquer resultado no mundo real."
  },
  "it": {
    "badge": "Crediti per i report",
    "headline": "Scegli il rapporto adatto al tuo gioco.",
    "sub": "1 credito sblocca 1 report personalizzato per un gioco completato. I crediti non scadono mai.",
    "starter": {
      "name": "Osservatore",
      "credits": "3 crediti · 1 credito per partita completata",
      "tagline": "Vale la pena giocarlo almeno tre volte. Non esiste un solo modo giusto. Vivilo e basta. Prova qualcosa di nuovo.",
      "perReport": "$3.00 / rapporto",
      "cta": "Solo acquisto in-app"
    },
    "middle": {
      "name": "Esploratore",
      "credits": "5 crediti · 1 credito per partita completata",
      "tagline": "Più esperienza, più scelta. Un valore migliore, modellato dalle tue mani.",
      "perReport": "$2.60 / rapporto",
      "cta": "Solo acquisto in-app"
    },
    "power": {
      "name": "Analista",
      "valueBadge": "Miglior valore",
      "credits": "8 crediti · 1 credito per partita completata",
      "tagline": "Il percorso completo dell’analista. Come verrai ricordato? Esperienza e tracce, solo il tuo mondo.",
      "perReport": "$2.00 / rapporto",
      "cta": "Solo acquisto in-app"
    },
    "features": [
      "Un rapporto per ogni partita completata",
      "Decisione retrospettiva",
      "Analisi delle firme cognitive",
      "Rivelazione di informazioni nascoste",
      "Simulazione di percorsi alternativi"
    ],
    "howTitle": "Come funziona",
    "how": [
      {
        "step": "1",
        "title": "Termina una corsa",
        "body": "Completa un gioco per sbloccare la schermata dei rapporti."
      },
      {
        "step": "2",
        "title": "Utilizza un credito",
        "body": "Un credito sblocca il report completo generato da quella corsa completata."
      },
      {
        "step": "3",
        "title": "Gioca di nuovo",
        "body": "Ogni esecuzione crea un report diverso."
      }
    ],
    "note": "I crediti vengono aggiunti subito al tuo account dopo l’acquisto. Non scadono mai e restano tra le sessioni.",
    "disclaimer": "Shadow Economy è una simulazione educativa. I report non costituiscono consulenza finanziaria, di investimento, fiscale, legale o professionale e l'acquisto o la lettura di un report non garantisce alcun risultato reale."
  },
  "nl": {
    "badge": "Rapportcredits",
    "headline": "Kies het rapport dat bij uw spel past.",
    "sub": "Met 1 tegoed ontgrendel je 1 persoonlijk rapport voor één voltooid spel. Tegoeden verlopen nooit.",
    "starter": {
      "name": "Waarnemer",
      "credits": "3 tegoeden · 1 tegoed per voltooid spel",
      "tagline": "Het is minstens drie keer spelen waard. Er is niet één juiste manier. Beleef het gewoon. Voel iets nieuws.",
      "perReport": "$3.00 / rapport",
      "cta": "Alleen in-app aankoop"
    },
    "middle": {
      "name": "Ontdekker",
      "credits": "5 tegoeden · 1 tegoed per voltooid spel",
      "tagline": "Meer ervaring, meer keuze. Betere waarde, gevormd door je eigen handen.",
      "perReport": "$2.60 / rapport",
      "cta": "Alleen in-app aankoop"
    },
    "power": {
      "name": "Analist",
      "valueBadge": "Beste waarde",
      "credits": "8 tegoeden · 1 tegoed per voltooid spel",
      "tagline": "Het volledige pad van de analist. Hoe word jij vastgelegd? Ervaring en sporen, alleen jouw wereld.",
      "perReport": "$2.00 / rapport",
      "cta": "Alleen in-app aankoop"
    },
    "features": [
      "Eén rapport per voltooide playthrough",
      "Beslissing met terugwerkende kracht",
      "Cognitieve signatuuranalyse",
      "Verborgen informatie onthullen",
      "Alternatieve padsimulatie"
    ],
    "howTitle": "Hoe het werkt",
    "how": [
      {
        "step": "1",
        "title": "Maak een run af",
        "body": "Voltooi een spel om het rapportscherm te ontgrendelen."
      },
      {
        "step": "2",
        "title": "Gebruik één tegoed",
        "body": "Met één tegoed wordt het volledige rapport ontgrendeld dat is gegenereerd op basis van die voltooide run."
      },
      {
        "step": "3",
        "title": "Speel opnieuw",
        "body": "Elke run creëert een ander rapport."
      }
    ],
    "note": "Credits worden direct na aankoop aan je account toegevoegd. Ze verlopen nooit en blijven tussen sessies behouden.",
    "disclaimer": "Shadow Economy is een educatieve simulatie. Rapporten zijn geen financieel, investerings-, fiscaal, juridisch of professioneel advies, en het kopen of lezen van een rapport garandeert geen resultaat in de echte wereld."
  },
  "id": {
    "badge": "Kredit Laporan",
    "headline": "Pilih laporan yang sesuai dengan permainan Anda.",
    "sub": "1 kredit membuka 1 laporan yang dipersonalisasi untuk satu game yang diselesaikan. Kredit tidak pernah kedaluwarsa.",
    "starter": {
      "name": "Pengamat",
      "credits": "3 kredit · 1 kredit per permainan selesai",
      "tagline": "Layak dimainkan setidaknya tiga kali. Tidak ada satu cara yang benar. Rasakan saja. Rasakan sesuatu yang baru.",
      "perReport": "$3.00 / laporan",
      "cta": "Pembelian dalam aplikasi saja"
    },
    "middle": {
      "name": "Penjelajah",
      "credits": "5 kredit · 1 kredit per permainan selesai",
      "tagline": "Lebih banyak pengalaman, lebih banyak pilihan. Nilai yang lebih baik, dibentuk oleh tanganmu sendiri.",
      "perReport": "$2.60 / laporan",
      "cta": "Pembelian dalam aplikasi saja"
    },
    "power": {
      "name": "Analis",
      "valueBadge": "Nilai terbaik",
      "credits": "8 kredit · 1 kredit per permainan selesai",
      "tagline": "Jalur lengkap seorang analis. Akan tercatat sebagai orang seperti apa Anda? Pengalaman dan jejak, hanya dunia Anda.",
      "perReport": "$2.00 / laporan",
      "cta": "Pembelian dalam aplikasi saja"
    },
    "features": [
      "Satu laporan per permainan yang diselesaikan",
      "Retrospektif pengambilan keputusan",
      "Analisis tanda tangan kognitif",
      "Informasi tersembunyi terungkap",
      "Simulasi jalur alternatif"
    ],
    "howTitle": "Bagaimana cara kerjanya",
    "how": [
      {
        "step": "1",
        "title": "Selesaikan lari",
        "body": "Selesaikan permainan untuk membuka kunci layar laporan."
      },
      {
        "step": "2",
        "title": "Gunakan satu kredit",
        "body": "Satu kredit membuka laporan lengkap yang dihasilkan dari proses yang telah selesai."
      },
      {
        "step": "3",
        "title": "Mainkan lagi",
        "body": "Setiap proses menghasilkan laporan yang berbeda."
      }
    ],
    "note": "Kredit akan langsung ditambahkan ke akun Anda setelah pembelian. Tidak pernah kedaluwarsa dan terbawa antar sesi.",
    "disclaimer": "Shadow Economy adalah simulasi pendidikan. Laporan bukanlah nasihat keuangan, investasi, pajak, hukum, atau profesional, dan membeli atau membaca laporan tidak menjamin hasil apa pun di dunia nyata."
  }
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
  const ui = PRICING_UI[lang]
  const [regionId, setRegionId] = useState<PricingRegionId>(
    () => readStoredRegionId() ?? LANG_DEFAULT_REGION[lang],
  )
  const [pickerOpen, setPickerOpen] = useState(false)

  useEffect(() => {
    const stored = readStoredRegionId()
    if (!stored) setRegionId(LANG_DEFAULT_REGION[lang])
  }, [lang])

  const region = PRICING_REGION_BY_ID[regionId]
  const regionLabel = regionDisplayName(region, lang)

  const handleRegionSelect = (id: PricingRegionId) => {
    setRegionId(id)
    storeRegionId(id)
  }

  const perReport = (pack: 'starter' | 'middle' | 'power') =>
    `${formatPerReportPrice(region, pack)} ${ui.perReportSuffix}`

  const showTaxIncluded = regionPricesIncludeTax(regionId)

  const packPriceLine = (
    pack: 'starter' | 'middle' | 'power',
    priceClass: string,
    taxClass: string,
  ) => (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
      <span className={priceClass}>{formatPackPrice(region, pack)}</span>
      {showTaxIncluded ? (
        <span className={taxClass}>{ui.taxIncludedLabel}</span>
      ) : null}
    </div>
  )

  return (
    <Layout>
      {/* Hero */}
      <section className="w-full px-2 sm:px-2.5 md:px-3 pt-14 pb-10 sm:pt-24 sm:pb-16 text-center">
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
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
          <div className="mb-8 rounded-2xl border border-gray-800 bg-gray-900/40 p-5 sm:p-6 text-left">
            <p className="text-sm leading-relaxed text-gray-400">{ui.pricingNotice}</p>
            <button
              type="button"
              onClick={() => setPickerOpen(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-300 transition-colors hover:bg-amber-500/20"
            >
              <GlobeMark className="text-base" />
              {ui.selectRegion}
              <span className="text-amber-400/80 font-normal">· {regionLabel}</span>
            </button>
          </div>

          <PricingRegionPicker
            open={pickerOpen}
            lang={lang}
            selectedId={regionId}
            title={ui.regionModalTitle}
            closeLabel={ui.regionModalClose}
            searchPlaceholder={ui.regionSearchPlaceholder}
            onClose={() => setPickerOpen(false)}
            onSelect={handleRegionSelect}
          />

          <div className="grid sm:grid-cols-3 gap-5">

            {/* Starter */}
            <div className="flex flex-col rounded-2xl border border-gray-700 bg-gray-900/50 p-6 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-1">{tx.starter.name}</p>
                {packPriceLine(
                  'starter',
                  'text-4xl font-bold text-white',
                  'text-sm font-normal text-gray-500',
                )}
                <p className="text-xs text-gray-500 mb-4">{tx.starter.credits} · {perReport('starter')}</p>
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
                {packPriceLine(
                  'middle',
                  'text-4xl font-bold text-white',
                  'text-sm font-normal text-gray-500',
                )}
                <p className="text-xs text-gray-500 mb-4">{tx.middle.credits} · {perReport('middle')}</p>
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
                {packPriceLine(
                  'power',
                  'text-4xl font-bold text-white',
                  'text-sm font-normal text-amber-500/60',
                )}
                <p className="text-xs text-amber-500/70 mb-4">{tx.power.credits} · {perReport('power')}</p>
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

          <p className="text-center text-xs text-gray-600 mt-6">{tx.note}</p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[11px] leading-relaxed text-gray-700">{tx.disclaimer}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-800 bg-gray-900/30">
        <div className="w-full px-2 sm:px-2.5 md:px-3 py-14 sm:py-20">
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
