import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

const t = {
  en: {
    game: 'About the Game', report: 'About the Report', pricing: 'Pricing',
    support: 'Support', privacy: 'Privacy', terms: 'Terms',
    footerGame: 'About the Game', footerReport: 'About the Report', footerPricing: 'Pricing',
    footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Service', footerSupport: 'Support',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
  ko: {
    game: '게임 소개', report: '보고서 소개', pricing: '가격',
    support: '고객지원', privacy: '개인정보처리방침', terms: '이용약관',
    footerGame: '게임 소개', footerReport: '보고서 소개', footerPricing: '가격',
    footerPrivacy: '개인정보처리방침', footerTerms: '이용약관', footerSupport: '고객지원',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
  ja: {
    game: 'ゲーム紹介', report: 'レポート紹介', pricing: '料金',
    support: 'サポート', privacy: 'プライバシー', terms: '利用規約',
    footerGame: 'ゲーム紹介', footerReport: 'レポート紹介', footerPricing: '料金',
    footerPrivacy: 'プライバシーポリシー', footerTerms: '利用規約', footerSupport: 'サポート',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
  zh: {
    game: '游戏介绍', report: '报告介绍', pricing: '定价',
    support: '客户支持', privacy: '隐私', terms: '条款',
    footerGame: '游戏介绍', footerReport: '报告介绍', footerPricing: '定价',
    footerPrivacy: '隐私政策', footerTerms: '服务条款', footerSupport: '客户支持',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
  es: {
    game: 'El Juego', report: 'El Informe', pricing: 'Precios',
    support: 'Soporte', privacy: 'Privacidad', terms: 'Términos',
    footerGame: 'El Juego', footerReport: 'El Informe', footerPricing: 'Precios',
    footerPrivacy: 'Política de Privacidad', footerTerms: 'Términos de Servicio', footerSupport: 'Soporte',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
  sv: {
    game: 'Om spelet', report: 'Om rapporten', pricing: 'Priser',
    support: 'Support', privacy: 'Integritet', terms: 'Villkor',
    footerGame: 'Om spelet', footerReport: 'Om rapporten', footerPricing: 'Priser',
    footerPrivacy: 'Integritetspolicy', footerTerms: 'Användarvillkor', footerSupport: 'Support',
    copyright: `© ${new Date().getFullYear()} Shadow Economy. All rights reserved.`,
  },
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const { lang, setLang } = useLanguage()
  const tx = t[lang]
  const [menuOpen, setMenuOpen] = useState(false)

  function close() { setMenuOpen(false) }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <header className="border-b border-gray-800 relative z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={close} className="text-sm font-semibold text-amber-400 tracking-wide shrink-0">
            SHADOW ECONOMY
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-5 text-xs text-gray-400">
            <Link to="/game" className={pathname === '/game' ? 'text-white' : 'hover:text-white transition-colors'}>
              {tx.game}
            </Link>
            <Link to="/report" className={`${pathname === '/report' ? 'text-amber-400' : 'hover:text-amber-400'} transition-colors font-medium`}>
              {tx.report}
            </Link>
            <Link to="/pricing" className={`${pathname === '/pricing' ? 'text-amber-400' : 'hover:text-amber-400'} transition-colors font-medium`}>
              {tx.pricing}
            </Link>
            <span className="text-gray-700">·</span>
            <Link to="/support" className={pathname === '/support' ? 'text-white' : 'hover:text-white transition-colors'}>
              {tx.support}
            </Link>
            <Link to="/privacy" className={pathname === '/privacy' ? 'text-white' : 'hover:text-white transition-colors'}>
              {tx.privacy}
            </Link>
            <Link to="/terms" className={pathname === '/terms' ? 'text-white' : 'hover:text-white transition-colors'}>
              {tx.terms}
            </Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="ml-1 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 px-2 py-1 cursor-pointer focus:outline-none focus:border-amber-500"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </nav>

          {/* Mobile: language + hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="bg-gray-900 border border-gray-700 rounded text-xs text-gray-300 px-2 py-1 cursor-pointer focus:outline-none focus:border-amber-500"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 -mr-1 text-gray-400 hover:text-white transition-colors"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" /><line x1="15" y1="3" x2="3" y2="15" />
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

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute w-full border-t border-gray-800 bg-gray-950 shadow-xl">
            <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-col">
              {/* Primary links — prominent */}
              <Link to="/game" onClick={close}
                className={`px-3 py-3 text-sm font-medium rounded-lg ${pathname === '/game' ? 'text-white bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/60'} transition-colors`}>
                {tx.game}
              </Link>
              <Link to="/report" onClick={close}
                className={`px-3 py-3 text-sm font-medium rounded-lg ${pathname === '/report' ? 'text-amber-400 bg-gray-800' : 'text-amber-500/80 hover:text-amber-400 hover:bg-gray-800/60'} transition-colors`}>
                {tx.report}
              </Link>
              <Link to="/pricing" onClick={close}
                className={`px-3 py-3 text-sm font-medium rounded-lg ${pathname === '/pricing' ? 'text-amber-400 bg-gray-800' : 'text-amber-500/80 hover:text-amber-400 hover:bg-gray-800/60'} transition-colors`}>
                {tx.pricing}
              </Link>
              {/* Divider */}
              <div className="my-2 border-t border-gray-800" />
              {/* Utility links — smaller */}
              <Link to="/support" onClick={close}
                className={`px-3 py-2.5 text-xs rounded-lg ${pathname === '/support' ? 'text-white bg-gray-800' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/60'} transition-colors`}>
                {tx.support}
              </Link>
              <Link to="/privacy" onClick={close}
                className={`px-3 py-2.5 text-xs rounded-lg ${pathname === '/privacy' ? 'text-white bg-gray-800' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/60'} transition-colors`}>
                {tx.privacy}
              </Link>
              <Link to="/terms" onClick={close}
                className={`px-3 py-2.5 text-xs rounded-lg ${pathname === '/terms' ? 'text-white bg-gray-800' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/60'} transition-colors`}>
                {tx.terms}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span className="text-center sm:text-left">{tx.copyright}</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <Link to="/game" className="hover:text-gray-400 transition-colors">{tx.footerGame}</Link>
            <Link to="/report" className="hover:text-gray-400 transition-colors">{tx.footerReport}</Link>
            <Link to="/pricing" className="hover:text-gray-400 transition-colors">{tx.footerPricing}</Link>
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">{tx.footerPrivacy}</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">{tx.footerTerms}</Link>
            <Link to="/support" className="hover:text-gray-400 transition-colors">{tx.footerSupport}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
