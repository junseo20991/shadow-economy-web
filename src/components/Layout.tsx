import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, LANGUAGES } from '../context/LanguageContext'

import { siteNav as t } from '../i18n/siteNav'

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
            <Link
              to="/account-deletion"
              className={pathname === '/account-deletion' ? 'text-white' : 'transition-colors hover:text-white'}
            >
              {tx.accountDeletion}
            </Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="ml-1 max-w-[11rem] cursor-pointer rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-amber-500"
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
              className="max-w-[9.5rem] cursor-pointer rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-amber-500"
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
              <Link
                to="/account-deletion"
                onClick={close}
                className={`rounded-lg px-3 py-2.5 text-xs transition-colors ${
                  pathname === '/account-deletion' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-800/60 hover:text-gray-300'
                }`}
              >
                {tx.accountDeletion}
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
