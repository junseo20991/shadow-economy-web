import { Layout } from '../components/Layout'
import { PAGE_SECTION } from '../constants/layout'
import { useLanguage } from '../context/LanguageContext'

const content = {
  "en": {
    "badge": "Turn-Based Economic Simulation",
    "headline1": "Every decision leaves",
    "headline2": "a trace.",
    "sub": "A turn-based simulation about financial choices, community change, and what remains after each turn.",
    "appStore": "Download on the App Store",
    "googlePlay": "Google Play launch in preparation",
    "features": [
      {
        "icon": "●",
        "title": "Real Economic Logic",
        "desc": "Assets, liabilities, credit scores, and cash flow follow grounded rules."
      },
      {
        "icon": "◆",
        "title": "Community Impact",
        "desc": "Your decisions change the world around you and what comes next."
      },
      {
        "icon": "◐",
        "title": "Personalized Analysis",
        "desc": "The report shows what happened, what it means, and what changed."
      }
    ],
    "quote": "\"What you build is only part of the story.\"",
    "quoteSub": "Shadow Economy focuses on cost, tradeoffs, and what remains."
  },
  "ko": {
    "badge": "턴제 경제 시뮬레이션",
    "headline1": "모든 선택은",
    "headline2": "흔적을 남깁니다.",
    "sub": "금융 선택, 공동체의 변화, 그리고 한 턴 뒤에도 남는 결과를 다루는 턴제 시뮬레이션입니다.",
    "appStore": "App Store에서 다운로드",
    "googlePlay": "Google Play 출시 준비 중",
    "features": [
      {
        "icon": "●",
        "title": "실제 경제 원리",
        "desc": "자산, 부채, 신용점수, 현금흐름은 현실적인 규칙으로 움직입니다."
      },
      {
        "icon": "◆",
        "title": "공동체의 변화",
        "desc": "당신의 선택은 주변 세계를 바꾸고, 다음 국면으로 이어집니다."
      },
      {
        "icon": "◐",
        "title": "개인화 분석",
        "desc": "중요한 선택 뒤에 무엇이 일어났는지, 무엇이 달라졌는지 보여줍니다."
      }
    ],
    "quote": "\"만든 것만이 이야기는 아닙니다.\"",
    "quoteSub": "이 게임은 비용과 남는 영향까지 함께 보여줍니다."
  },
  "ja": {
    "badge": "ターン制の経済シミュレーション",
    "headline1": "すべての選択が",
    "headline2": "痕跡を残す。",
    "sub": "金融の選択、コミュニティの変化、そして一手ごとに残る結果を扱うターン制シミュレーションです。",
    "appStore": "App Storeでダウンロード",
    "googlePlay": "Google Play 配信準備中",
    "features": [
      {
        "icon": "●",
        "title": "現実的な経済ロジック",
        "desc": "資産、負債、信用スコア、キャッシュフローは現実に沿ったルールで動きます。"
      },
      {
        "icon": "◆",
        "title": "コミュニティへの影響",
        "desc": "あなたの選択は周囲を変え、次の展開へつながります。"
      },
      {
        "icon": "◐",
        "title": "個別化された分析",
        "desc": "重要な選択のあとに、何が起きたか、何が変わったかを示します。"
      }
    ],
    "quote": "\"作ったものだけが物語ではありません。\"",
    "quoteSub": "このゲームは、コストと残る影響まで扱います。"
  },
  "zh": {
    "badge": "回合制经济模拟",
    "headline1": "每个选择都会",
    "headline2": "留下痕迹。",
    "sub": "一款围绕金融选择、社区变化，以及每回合之后仍然存在的结果的回合制模拟游戏。",
    "appStore": "在 App Store 下载",
    "googlePlay": "Google Play 上线准备中",
    "features": [
      {
        "icon": "●",
        "title": "真实的经济逻辑",
        "desc": "资产、负债、信用分数和现金流都按现实规则运作。"
      },
      {
        "icon": "◆",
        "title": "社区影响",
        "desc": "你的每个选择都会改变周围世界，并影响后续走向。"
      },
      {
        "icon": "◐",
        "title": "个性化分析",
        "desc": "重要决策后，报告会展示发生了什么，以及哪些地方发生了变化。"
      }
    ],
    "quote": "\"作品只是故事的一部分。\"",
    "quoteSub": "这款游戏呈现结果、代价与留下的影响。"
  },
  "es": {
    "badge": "Simulación económica por turnos",
    "headline1": "Cada decisión deja",
    "headline2": "una huella.",
    "sub": "Una simulación por turnos sobre decisiones financieras, cambio comunitario y lo que permanece después de cada turno.",
    "appStore": "Disponible en App Store",
    "googlePlay": "Lanzamiento en Google Play en preparación",
    "features": [
      {
        "icon": "●",
        "title": "Lógica económica real",
        "desc": "Activos, pasivos, puntuación crediticia y flujo de caja siguen reglas concretas."
      },
      {
        "icon": "◆",
        "title": "Impacto comunitario",
        "desc": "Cada decisión cambia el mundo que te rodea y lo que viene después."
      },
      {
        "icon": "◐",
        "title": "Análisis personalizado",
        "desc": "Después de decisiones clave, el informe muestra qué ocurrió y qué cambió."
      }
    ],
    "quote": "\"Lo que construyes es solo una parte de la historia.\"",
    "quoteSub": "El juego pone el foco en el coste, el intercambio y lo que queda."
  },
  "sv": {
    "badge": "Turbaserad ekonomisimulering",
    "headline1": "Varje beslut lämnar",
    "headline2": "ett spår.",
    "sub": "En turbaserad simulering om finansiella beslut, samhällsförändring och det som består efter varje tur.",
    "appStore": "Hämta i App Store",
    "googlePlay": "Google Play-lansering förbereds",
    "features": [
      {
        "icon": "●",
        "title": "Verklig ekonomisk logik",
        "desc": "Tillgångar, skulder, kreditpoäng och kassaflöde följer konkreta regler."
      },
      {
        "icon": "◆",
        "title": "Påverkan på omgivningen",
        "desc": "Varje beslut förändrar världen omkring dig och det som kommer efter."
      },
      {
        "icon": "◐",
        "title": "Personlig analys",
        "desc": "Efter viktiga beslut visar rapporten vad som hände och vad som förändrades."
      }
    ],
    "quote": "\"Det du bygger är bara en del av berättelsen.\"",
    "quoteSub": "Spelet lyfter fram kostnaden, avvägningen och det som blir kvar."
  },
  "fr": {
    "badge": "Simulation économique au tour par tour",
    "headline1": "Chaque décision laisse",
    "headline2": "une trace.",
    "sub": "Une simulation au tour par tour sur les choix financiers, les changements communautaires et ce qui reste après chaque tour.",
    "appStore": "Disponible sur l’App Store",
    "googlePlay": "Lancement Google Play en préparation",
    "features": [
      {
        "icon": "●",
        "title": "Logique économique réaliste",
        "desc": "Actifs, passifs, score de crédit et trésorerie suivent des règles cohérentes."
      },
      {
        "icon": "◆",
        "title": "Impact sur le quartier",
        "desc": "Vos décisions transforment le quartier autour de vous et la suite de la partie."
      },
      {
        "icon": "◐",
        "title": "Analyse personnalisée",
        "desc": "Le rapport explique ce qui s’est passé, ce que cela signifie et ce qui a changé."
      }
    ],
    "quote": "\"Ce que vous construisez n'est qu'une partie de l'histoire.\"",
    "quoteSub": "Shadow Economy se concentre sur les coûts, les compromis et ce qui reste."
  },
  "de": {
    "badge": "Rundenbasierte Wirtschaftssimulation",
    "headline1": "Jede Entscheidung hinterlässt",
    "headline2": "eine Spur.",
    "sub": "Eine rundenbasierte Simulation über finanzielle Entscheidungen, Veränderungen in der Gemeinschaft und was nach jeder Runde übrig bleibt.",
    "appStore": "Im App Store erhältlich",
    "googlePlay": "Google Play-Start in Vorbereitung",
    "features": [
      {
        "icon": "●",
        "title": "Realistische Wirtschaftslogik",
        "desc": "Vermögenswerte, Verbindlichkeiten, Kreditwürdigkeit und Cashflow folgen nachvollziehbaren Regeln."
      },
      {
        "icon": "◆",
        "title": "Auswirkungen auf das Umfeld",
        "desc": "Ihre Entscheidungen verändern Ihr Umfeld und den weiteren Verlauf."
      },
      {
        "icon": "◐",
        "title": "Personalisierte Analyse",
        "desc": "Der Bericht zeigt, was passiert ist, was es bedeutet und was sich verändert hat."
      }
    ],
    "quote": "„Was Sie bauen, ist nur ein Teil der Geschichte.“",
    "quoteSub": "Shadow Economy konzentriert sich auf Kosten, Abwägungen und das, was zurückbleibt."
  },
  "ru": {
    "badge": "Пошаговая экономическая симуляция",
    "headline1": "Каждое решение оставляет",
    "headline2": "след.",
    "sub": "Пошаговая симуляция финансового выбора, изменений в сообществе и того, что остается после каждого хода.",
    "appStore": "Доступно в App Store",
    "googlePlay": "Запуск в Google Play готовится",
    "features": [
      {
        "icon": "●",
        "title": "Реалистичная экономическая логика",
        "desc": "Активы, обязательства, кредитный рейтинг и денежный поток подчиняются понятным правилам."
      },
      {
        "icon": "◆",
        "title": "Влияние на район",
        "desc": "Ваши решения меняют район вокруг вас и дальнейший ход игры."
      },
      {
        "icon": "◐",
        "title": "Персонализированный анализ",
        "desc": "Отчёт показывает, что произошло, что это значит и что изменилось."
      }
    ],
    "quote": "«То, что вы строите, — это только часть истории».",
    "quoteSub": "Shadow Economy фокусируется на издержках, компромиссах и том, что остаётся."
  },
  "ar": {
    "badge": "محاكاة اقتصادية قائمة على الأدوار",
    "headline1": "كل قرار يترك",
    "headline2": "أثرًا.",
    "sub": "محاكاة تعتمد على الأدوار حول الاختيارات المالية وتغيير المجتمع وما يتبقى بعد كل دور.",
    "appStore": "متاح على App Store",
    "googlePlay": "إطلاق Google Play قيد التحضير",
    "features": [
      {
        "icon": "●",
        "title": "منطق اقتصادي واقعي",
        "desc": "تخضع الأصول والالتزامات ودرجة الائتمان والتدفق النقدي لقواعد واضحة."
      },
      {
        "icon": "◆",
        "title": "أثر على المجتمع",
        "desc": "تغيّر قراراتك العالم من حولك وما يحدث بعد ذلك."
      },
      {
        "icon": "◐",
        "title": "تحليل شخصي",
        "desc": "يوضح التقرير ما حدث، وما يعنيه ذلك، وما الذي تغيّر."
      }
    ],
    "quote": "\"ما تبنيه ليس سوى جزء من القصة.\"",
    "quoteSub": "يركز Shadow Economy على التكلفة والمفاضلات وما يبقى."
  },
  "pt": {
    "badge": "Simulação econômica por turnos",
    "headline1": "Toda decisão deixa",
    "headline2": "um rastro.",
    "sub": "Uma simulação baseada em turnos sobre escolhas financeiras, mudanças na comunidade e o que resta após cada turno.",
    "appStore": "Disponível na App Store",
    "googlePlay": "Lançamento no Google Play em preparação",
    "features": [
      {
        "icon": "●",
        "title": "Lógica econômica realista",
        "desc": "Ativos, passivos, score de crédito e fluxo de caixa seguem regras consistentes."
      },
      {
        "icon": "◆",
        "title": "Impacto na comunidade",
        "desc": "Suas decisões mudam o mundo ao seu redor e o que vem a seguir."
      },
      {
        "icon": "◐",
        "title": "Análise personalizada",
        "desc": "O relatório mostra o que aconteceu, o que significa e o que mudou."
      }
    ],
    "quote": "\"O que você constrói é apenas parte da história.\"",
    "quoteSub": "Shadow Economy se concentra em custos, trade-offs e no que fica."
  },
  "it": {
    "badge": "Simulazione economica a turni",
    "headline1": "Ogni decisione lascia",
    "headline2": "una traccia.",
    "sub": "Una simulazione a turni sulle scelte finanziarie, il cambiamento della comunità e ciò che rimane dopo ogni turno.",
    "appStore": "Disponibile su App Store",
    "googlePlay": "Lancio su Google Play in preparazione",
    "features": [
      {
        "icon": "●",
        "title": "Logica economica realistica",
        "desc": "Attività, passività, punteggi di credito e flusso di cassa seguono regole coerenti."
      },
      {
        "icon": "◆",
        "title": "Impatto sulla comunità",
        "desc": "Le tue decisioni cambiano il mondo intorno a te e il seguito della partita."
      },
      {
        "icon": "◐",
        "title": "Analisi personalizzata",
        "desc": "Il report mostra cosa è successo, che cosa significa e che cosa è cambiato."
      }
    ],
    "quote": "\"Ciò che costruisci è solo una parte della storia.\"",
    "quoteSub": "Shadow Economy si concentra sui costi, sui compromessi e su ciò che rimane."
  },
  "nl": {
    "badge": "Beurtgebaseerde economische simulatie",
    "headline1": "Elke beslissing laat",
    "headline2": "een spoor na.",
    "sub": "Een turn-based simulatie over financiële keuzes, veranderingen in de gemeenschap en wat er na elke beurt overblijft.",
    "appStore": "Beschikbaar in de App Store",
    "googlePlay": "Google Play-lancering in voorbereiding",
    "features": [
      {
        "icon": "●",
        "title": "Echte economische logica",
        "desc": "Activa, passiva, kredietscores en cashflow volgen gefundeerde regels."
      },
      {
        "icon": "◆",
        "title": "Impact op de gemeenschap",
        "desc": "Je beslissingen veranderen de wereld om je heen en wat daarna gebeurt."
      },
      {
        "icon": "◐",
        "title": "Gepersonaliseerde analyse",
        "desc": "Het rapport laat zien wat er is gebeurd, wat het betekent en wat er is veranderd."
      }
    ],
    "quote": "\"Wat je bouwt is slechts een deel van het verhaal.\"",
    "quoteSub": "Shadow Economy richt zich op kosten, afwegingen en wat er overblijft."
  },
  "id": {
    "badge": "Simulasi ekonomi berbasis giliran",
    "headline1": "Setiap keputusan meninggalkan",
    "headline2": "jejak.",
    "sub": "Simulasi berbasis giliran tentang pilihan finansial, perubahan komunitas, dan apa yang tersisa setelah setiap giliran.",
    "appStore": "Tersedia di App Store",
    "googlePlay": "Peluncuran Google Play sedang disiapkan",
    "features": [
      {
        "icon": "●",
        "title": "Logika ekonomi realistis",
        "desc": "Aset, kewajiban, skor kredit, dan arus kas mengikuti aturan yang jelas."
      },
      {
        "icon": "◆",
        "title": "Dampak komunitas",
        "desc": "Keputusan Anda mengubah dunia di sekitar Anda dan apa yang akan terjadi selanjutnya."
      },
      {
        "icon": "◐",
        "title": "Analisis personal",
        "desc": "Laporan menunjukkan apa yang terjadi, artinya, dan apa yang berubah."
      }
    ],
    "quote": "“Apa yang Anda bangun hanyalah sebagian dari cerita.”",
    "quoteSub": "Shadow Economy berfokus pada biaya, trade-off, dan hal yang tersisa."
  }
}

export function Landing() {
  const { lang } = useLanguage()
  const tx = content[lang]

  return (
    <Layout>
      <section className={`${PAGE_SECTION} py-14 text-center sm:py-24`}>
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
        <div className={`${PAGE_SECTION} grid gap-8 py-14 sm:grid-cols-3 sm:gap-10 sm:py-20`}>
          {tx.features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-3xl mb-4 text-amber-400">{f.icon}</div>
              <h3 className="text-white font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${PAGE_SECTION} py-14 text-center sm:py-20`}>
        <blockquote className="text-lg sm:text-xl text-gray-300 italic leading-relaxed mb-4">{tx.quote}</blockquote>
        <p className="text-sm text-gray-600">{tx.quoteSub}</p>
      </section>
    </Layout>
  )
}
