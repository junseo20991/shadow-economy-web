import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

const t = {
  "en": {
    "brand": "Shadow Economy",
    "game": "About the Game",
    "report": "About the Report",
    "pricing": "Pricing",
    "support": "Support",
    "privacy": "Privacy",
    "terms": "Terms",
    "footerGame": "About the Game",
    "footerReport": "About the Report",
    "footerPricing": "Pricing",
    "footerPrivacy": "Privacy Policy",
    "footerTerms": "Terms of Service",
    "footerSupport": "Support",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Account Deletion",
    "footerAccountDeletion": "Account Deletion",
    "disclaimer": "Shadow Economy is an educational simulation game. It is not financial, investment, tax, legal, accounting, or other professional advice."
  },
  "ko": {
    "brand": "Shadow Economy",
    "game": "게임 소개",
    "report": "보고서 소개",
    "pricing": "가격",
    "support": "고객지원",
    "privacy": "개인정보처리방침",
    "terms": "이용약관",
    "footerGame": "게임 소개",
    "footerReport": "보고서 소개",
    "footerPricing": "가격",
    "footerPrivacy": "개인정보처리방침",
    "footerTerms": "이용약관",
    "footerSupport": "고객지원",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "계정 삭제",
    "footerAccountDeletion": "계정 삭제",
    "disclaimer": "Shadow Economy는 교육용 시뮬레이션 게임입니다. 이는 재정, 투자, 세금, 법률, 회계 또는 기타 전문적인 조언이 아닙니다."
  },
  "ja": {
    "brand": "Shadow Economy",
    "game": "ゲーム紹介",
    "report": "レポート紹介",
    "pricing": "料金",
    "support": "サポート",
    "privacy": "プライバシー",
    "terms": "利用規約",
    "footerGame": "ゲーム紹介",
    "footerReport": "レポート紹介",
    "footerPricing": "料金",
    "footerPrivacy": "プライバシーポリシー",
    "footerTerms": "利用規約",
    "footerSupport": "サポート",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "アカウントの削除",
    "footerAccountDeletion": "アカウントの削除",
    "disclaimer": "Shadow Economy は教育シミュレーション ゲームです。これは財務、投資、税金、法律、会計、その他の専門的なアドバイスではありません。"
  },
  "zh": {
    "brand": "Shadow Economy",
    "game": "游戏介绍",
    "report": "报告介绍",
    "pricing": "定价",
    "support": "支持",
    "privacy": "隐私",
    "terms": "条款",
    "footerGame": "游戏介绍",
    "footerReport": "报告介绍",
    "footerPricing": "定价",
    "footerPrivacy": "隐私政策",
    "footerTerms": "服务条款",
    "footerSupport": "支持",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "帐户删除",
    "footerAccountDeletion": "帐户删除",
    "disclaimer": "Shadow Economy是一款教育模拟游戏。它不是财务、投资、税务、法律、会计或其他专业建议。"
  },
  "es": {
    "brand": "Shadow Economy",
    "game": "El Juego",
    "report": "El Informe",
    "pricing": "Precios",
    "support": "Soporte",
    "privacy": "Privacidad",
    "terms": "Términos",
    "footerGame": "El Juego",
    "footerReport": "El Informe",
    "footerPricing": "Precios",
    "footerPrivacy": "Política de Privacidad",
    "footerTerms": "Términos de Servicio",
    "footerSupport": "Soporte",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Eliminación de cuenta",
    "footerAccountDeletion": "Eliminación de cuenta",
    "disclaimer": "Shadow Economy es un juego de simulación educativo. No se trata de asesoramiento financiero, de inversión, fiscal, legal, contable ni de otro tipo."
  },
  "sv": {
    "brand": "Shadow Economy",
    "game": "Om spelet",
    "report": "Om rapporten",
    "pricing": "Priser",
    "support": "Support",
    "privacy": "Integritet",
    "terms": "Villkor",
    "footerGame": "Om spelet",
    "footerReport": "Om rapporten",
    "footerPricing": "Priser",
    "footerPrivacy": "Integritetspolicy",
    "footerTerms": "Användarvillkor",
    "footerSupport": "Support",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Radering av konto",
    "footerAccountDeletion": "Radering av konto",
    "disclaimer": "Shadow Economy är ett pedagogiskt simuleringsspel. Det är inte finansiell rådgivning, investeringsrådgivning, skatt, juridisk rådgivning, redovisning eller annan professionell rådgivning."
  },
  "fr": {
    "brand": "Shadow Economy",
    "game": "À propos du jeu",
    "report": "À propos du rapport",
    "pricing": "Tarifs",
    "support": "Assistance",
    "privacy": "Confidentialité",
    "terms": "Conditions",
    "footerGame": "À propos du jeu",
    "footerReport": "À propos du rapport",
    "footerPricing": "Tarifs",
    "footerPrivacy": "Politique de confidentialité",
    "footerTerms": "Conditions d'utilisation",
    "footerSupport": "Assistance",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Suppression de compte",
    "footerAccountDeletion": "Suppression de compte",
    "disclaimer": "Shadow Economy est un jeu de simulation pédagogique. Il ne s’agit pas de conseils financiers, d’investissement, fiscaux, juridiques, comptables ou autres conseils professionnels."
  },
  "de": {
    "brand": "Shadow Economy",
    "game": "Über das Spiel",
    "report": "Über den Bericht",
    "pricing": "Preise",
    "support": "Unterstützung",
    "privacy": "Privatsphäre",
    "terms": "Bedingungen",
    "footerGame": "Über das Spiel",
    "footerReport": "Über den Bericht",
    "footerPricing": "Preise",
    "footerPrivacy": "Datenschutzrichtlinie",
    "footerTerms": "Nutzungsbedingungen",
    "footerSupport": "Unterstützung",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Kontolöschung",
    "footerAccountDeletion": "Kontolöschung",
    "disclaimer": "Shadow Economy ist ein pädagogisches Simulationsspiel. Es handelt sich nicht um Finanz-, Anlage-, Steuer-, Rechts-, Buchhaltungs- oder sonstige professionelle Beratung."
  },
  "ru": {
    "brand": "Shadow Economy",
    "game": "Об игре",
    "report": "Об отчете",
    "pricing": "Цены",
    "support": "Поддержка",
    "privacy": "Конфиденциальность",
    "terms": "Условия",
    "footerGame": "Об игре",
    "footerReport": "Об отчете",
    "footerPricing": "Цены",
    "footerPrivacy": "Политика конфиденциальности",
    "footerTerms": "Условия использования",
    "footerSupport": "Поддержка",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Удаление учетной записи",
    "footerAccountDeletion": "Удаление учетной записи",
    "disclaimer": "Shadow Economy — образовательная игра-симулятор. Это не финансовая, инвестиционная, налоговая, юридическая, бухгалтерская или другая профессиональная консультация."
  },
  "ar": {
    "brand": "Shadow Economy",
    "game": "حول اللعبة",
    "report": "حول التقرير",
    "pricing": "التسعير",
    "support": "الدعم",
    "privacy": "الخصوصية",
    "terms": "الشروط",
    "footerGame": "حول اللعبة",
    "footerReport": "حول التقرير",
    "footerPricing": "التسعير",
    "footerPrivacy": "سياسة الخصوصية",
    "footerTerms": "شروط الخدمة",
    "footerSupport": "الدعم",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "حذف الحساب",
    "footerAccountDeletion": "حذف الحساب",
    "disclaimer": "Shadow Economy هي لعبة محاكاة تعليمية. إنها ليست نصيحة مالية أو استثمارية أو ضريبية أو قانونية أو محاسبية أو أي نصيحة مهنية أخرى."
  },
  "pt": {
    "brand": "Shadow Economy",
    "game": "Sobre o jogo",
    "report": "Sobre o relatório",
    "pricing": "Preços",
    "support": "Suporte",
    "privacy": "Privacidade",
    "terms": "Termos",
    "footerGame": "Sobre o jogo",
    "footerReport": "Sobre o relatório",
    "footerPricing": "Preços",
    "footerPrivacy": "Política de Privacidade",
    "footerTerms": "Termos de Serviço",
    "footerSupport": "Suporte",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Exclusão de conta",
    "footerAccountDeletion": "Exclusão de conta",
    "disclaimer": "Shadow Economy é um jogo de simulação educacional. Não se trata de aconselhamento financeiro, de investimento, fiscal, jurídico, contábil ou outro aconselhamento profissional."
  },
  "it": {
    "brand": "Shadow Economy",
    "game": "Informazioni sul gioco",
    "report": "Informazioni sul rapporto",
    "pricing": "Prezzi",
    "support": "Supporto",
    "privacy": "Privacy",
    "terms": "Termini",
    "footerGame": "Informazioni sul gioco",
    "footerReport": "Informazioni sul rapporto",
    "footerPricing": "Prezzi",
    "footerPrivacy": "politica sulla riservatezza",
    "footerTerms": "Termini di servizio",
    "footerSupport": "Supporto",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Cancellazione dell'account",
    "footerAccountDeletion": "Cancellazione dell'account",
    "disclaimer": "Shadow Economy è un gioco di simulazione educativo. Non si tratta di consulenza finanziaria, di investimento, fiscale, legale, contabile o di altro tipo."
  },
  "nl": {
    "brand": "Shadow Economy",
    "game": "Over het spel",
    "report": "Over het rapport",
    "pricing": "Prijzen",
    "support": "Ondersteuning",
    "privacy": "Privacy",
    "terms": "Voorwaarden",
    "footerGame": "Over het spel",
    "footerReport": "Over het rapport",
    "footerPricing": "Prijzen",
    "footerPrivacy": "Privacybeleid",
    "footerTerms": "Servicevoorwaarden",
    "footerSupport": "Ondersteuning",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Accountverwijdering",
    "footerAccountDeletion": "Accountverwijdering",
    "disclaimer": "Shadow Economy is een educatief simulatiespel. Het is geen financieel, investerings-, fiscaal, juridisch, boekhoudkundig of ander professioneel advies."
  },
  "id": {
    "brand": "Shadow Economy",
    "game": "Tentang Permainan",
    "report": "Tentang Laporan",
    "pricing": "Harga",
    "support": "Dukungan",
    "privacy": "Privasi",
    "terms": "Ketentuan",
    "footerGame": "Tentang Permainan",
    "footerReport": "Tentang Laporan",
    "footerPricing": "Harga",
    "footerPrivacy": "Kebijakan Privasi",
    "footerTerms": "Ketentuan Layanan",
    "footerSupport": "Dukungan",
    "copyright": "© 2026 Shadow Economy. All rights reserved.",
    "accountDeletion": "Penghapusan Akun",
    "footerAccountDeletion": "Penghapusan Akun",
    "disclaimer": "Shadow Economy adalah game simulasi edukasi. Ini bukan nasihat keuangan, investasi, pajak, hukum, akuntansi, atau profesional lainnya."
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const { lang, setLang } = useLanguage()
  const tx = t[lang]
  const [menuOpen, setMenuOpen] = useState(false)

  function close() {
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <header className="relative z-40 border-b border-gray-800">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link to="/" onClick={close} className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-wide text-amber-400">
            <img
              src="/shadow-economy-logo.png"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 rounded-md object-cover ring-1 ring-amber-400/20"
            />
            <span>{tx.brand}</span>
          </Link>

          <nav className="hidden items-center gap-5 text-xs text-gray-400 sm:flex">
            <Link to="/game" className={pathname === '/game' ? 'text-white' : 'transition-colors hover:text-white'}>
              {tx.game}
            </Link>
            <Link to="/report" className={`${pathname === '/report' ? 'text-amber-400' : 'hover:text-amber-400'} transition-colors font-medium`}>
              {tx.report}
            </Link>
            <Link to="/pricing" className={`${pathname === '/pricing' ? 'text-amber-400' : 'hover:text-amber-400'} transition-colors font-medium`}>
              {tx.pricing}
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/support" className={pathname === '/support' ? 'text-white' : 'transition-colors hover:text-white'}>
              {tx.support}
            </Link>
            <Link to="/privacy" className={pathname === '/privacy' ? 'text-white' : 'transition-colors hover:text-white'}>
              {tx.privacy}
            </Link>
            <Link to="/terms" className={pathname === '/terms' ? 'text-white' : 'transition-colors hover:text-white'}>
              {tx.terms}
            </Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="ml-1 cursor-pointer rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-amber-500"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="cursor-pointer rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-amber-500"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 -mr-1 text-gray-400 transition-colors hover:text-white"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <rect y="3" width="18" height="2" rx="1" />
                  <rect y="8" width="18" height="2" rx="1" />
                  <rect y="13" width="18" height="2" rx="1" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute w-full border-t border-gray-800 bg-gray-950 shadow-xl sm:hidden">
            <nav className="mx-auto flex max-w-4xl flex-col px-4 py-3">
              <Link
                to="/game"
                onClick={close}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  pathname === '/game' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                }`}
              >
                {tx.game}
              </Link>
              <Link
                to="/report"
                onClick={close}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  pathname === '/report' ? 'bg-gray-800 text-amber-400' : 'text-amber-500/80 hover:bg-gray-800/60 hover:text-amber-400'
                }`}
              >
                {tx.report}
              </Link>
              <Link
                to="/pricing"
                onClick={close}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  pathname === '/pricing' ? 'bg-gray-800 text-amber-400' : 'text-amber-500/80 hover:bg-gray-800/60 hover:text-amber-400'
                }`}
              >
                {tx.pricing}
              </Link>
              <div className="my-2 border-t border-gray-800" />
              <Link
                to="/support"
                onClick={close}
                className={`rounded-lg px-3 py-2.5 text-xs transition-colors ${
                  pathname === '/support' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-800/60 hover:text-gray-300'
                }`}
              >
                {tx.support}
              </Link>
              <Link
                to="/privacy"
                onClick={close}
                className={`rounded-lg px-3 py-2.5 text-xs transition-colors ${
                  pathname === '/privacy' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-800/60 hover:text-gray-300'
                }`}
              >
                {tx.privacy}
              </Link>
              <Link
                to="/terms"
                onClick={close}
                className={`rounded-lg px-3 py-2.5 text-xs transition-colors ${
                  pathname === '/terms' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-800/60 hover:text-gray-300'
                }`}
              >
                {tx.terms}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-800 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 text-xs text-gray-600 sm:flex-row sm:px-6">
          <span className="text-center sm:text-left">{tx.copyright}</span>
          <p className="max-w-xl text-center text-[11px] leading-relaxed text-gray-700 sm:text-left">{tx.disclaimer}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <Link to="/game" className="transition-colors hover:text-gray-400">{tx.footerGame}</Link>
            <Link to="/report" className="transition-colors hover:text-gray-400">{tx.footerReport}</Link>
            <Link to="/pricing" className="transition-colors hover:text-gray-400">{tx.footerPricing}</Link>
            <Link to="/privacy" className="transition-colors hover:text-gray-400">{tx.footerPrivacy}</Link>
            <Link to="/terms" className="transition-colors hover:text-gray-400">{tx.footerTerms}</Link>
            <Link to="/support" className="transition-colors hover:text-gray-400">{tx.footerSupport}</Link>
            <Link to="/account-deletion" className="transition-colors hover:text-gray-400">{tx.footerAccountDeletion}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
