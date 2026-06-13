import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { LanguagePicker } from './LanguagePicker'

import { SITE_GUTTER } from '../constants/layout'
import { LANGUAGE_MENU_LABEL } from '../i18n/languageMenuLabel'
import { siteNav as t } from '../i18n/siteNav'

const navItemClass = 'shrink-0 whitespace-nowrap'

const MENU_TOGGLE_LABELS = {
  en: { open: 'Open menu', close: 'Close menu' },
  ko: { open: '메뉴 열기', close: '메뉴 닫기' },
  ja: { open: 'メニューを開く', close: 'メニューを閉じる' },
  zh: { open: '打开菜单', close: '关闭菜单' },
  es: { open: 'Abrir menú', close: 'Cerrar menú' },
  sv: { open: 'Öppna meny', close: 'Stäng meny' },
  fr: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
  de: { open: 'Menü öffnen', close: 'Menü schließen' },
  ru: { open: 'Открыть меню', close: 'Закрыть меню' },
  ar: { open: 'فتح القائمة', close: 'إغلاق القائمة' },
  pt: { open: 'Abrir menu', close: 'Fechar menu' },
  it: { open: 'Apri menu', close: 'Chiudi menu' },
  nl: { open: 'Menu openen', close: 'Menu sluiten' },
  id: { open: 'Buka menu', close: 'Tutup menu' },
} as const

function BrandLink({ onClick, className = '' }: { onClick?: () => void; className?: string }) {
  const { lang } = useLanguage()
  const tx = t[lang]
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`${navItemClass} flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-400 ${className}`.trim()}
    >
      <img
        src="/shadow-economy-logo.png"
        alt=""
        aria-hidden="true"
        className="h-7 w-7 shrink-0 rounded-md object-cover ring-1 ring-amber-400/20"
      />
      <span className="max-[359px]:hidden sm:inline">{tx.brand}</span>
    </Link>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const { lang, setLang } = useLanguage()
  const tx = t[lang]
  const languageLabel = LANGUAGE_MENU_LABEL[lang]
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleLabel = menuOpen ? MENU_TOGGLE_LABELS[lang].close : MENU_TOGGLE_LABELS[lang].open

  function close() {
    setMenuOpen(false)
  }

  const navLinks = (
    <>
      <Link
        to="/game"
        onClick={close}
        className={`${navItemClass} ${pathname === '/game' ? 'text-white' : 'transition-colors hover:text-white'}`}
      >
        {tx.game}
      </Link>
      <Link
        to="/report"
        onClick={close}
        className={`${navItemClass} ${pathname === '/report' ? 'text-amber-400' : 'hover:text-amber-400'} font-medium transition-colors`}
      >
        {tx.report}
      </Link>
      <Link
        to="/pricing"
        onClick={close}
        className={`${navItemClass} ${pathname === '/pricing' ? 'text-amber-400' : 'hover:text-amber-400'} font-medium transition-colors`}
      >
        {tx.pricing}
      </Link>
      <Link
        to="/support"
        onClick={close}
        className={`${navItemClass} ${pathname === '/support' ? 'text-white' : 'transition-colors hover:text-white'}`}
      >
        {tx.support}
      </Link>
      <Link
        to="/privacy"
        onClick={close}
        className={`${navItemClass} ${pathname === '/privacy' ? 'text-white' : 'transition-colors hover:text-white'}`}
      >
        {tx.privacy}
      </Link>
      <Link
        to="/terms"
        onClick={close}
        className={`${navItemClass} ${pathname === '/terms' ? 'text-white' : 'transition-colors hover:text-white'}`}
      >
        {tx.terms}
      </Link>
      <Link
        to="/account-deletion"
        onClick={close}
        className={`${navItemClass} ${pathname === '/account-deletion' ? 'text-white' : 'transition-colors hover:text-white'}`}
      >
        {tx.accountDeletion}
      </Link>
    </>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <header className="relative z-40 border-b border-gray-800">
        {/* Compact: menu | brand (center) | language */}
        <div className={`grid h-14 w-full grid-cols-[auto_1fr_auto] items-center gap-1.5 xl:hidden ${SITE_GUTTER}`}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuToggleLabel}
            className="flex h-10 w-10 items-center justify-center justify-self-start text-gray-400 transition-colors hover:text-white"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <line x1="3" y1="3" x2="15" y2="15" />
                <line x1="15" y1="3" x2="3" y2="15" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
                <rect y="3" width="18" height="2" rx="1" />
                <rect y="8" width="18" height="2" rx="1" />
                <rect y="13" width="18" height="2" rx="1" />
              </svg>
            )}
          </button>

          <BrandLink onClick={close} className="justify-self-center" />

          <div className="flex justify-end justify-self-end">
            <LanguagePicker lang={lang} onChange={setLang} label={languageLabel} />
          </div>
        </div>

        {/* Desktop: brand (left) | nav (center) | language (right) */}
        <div className={`hidden h-14 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 xl:grid ${SITE_GUTTER}`}>
          <BrandLink onClick={close} className="justify-self-start" />

          <nav
            className="flex min-w-0 flex-nowrap items-center justify-center gap-5 overflow-x-auto overscroll-x-contain px-2 text-xs text-gray-400 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:gap-6"
          >
            {navLinks}
          </nav>

          <div className="flex justify-end justify-self-end pl-2">
            <LanguagePicker lang={lang} onChange={setLang} label={languageLabel} />
          </div>
        </div>

        {menuOpen && (
          <div className="absolute max-h-[calc(100vh-3.5rem)] w-full overflow-y-auto border-t border-gray-800 bg-gray-950 shadow-xl xl:hidden">
            <nav className="flex w-full flex-col px-2 py-3 sm:px-2.5">
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
        <div className={`flex w-full flex-col items-center justify-between gap-3 py-8 text-xs text-gray-400 sm:flex-row ${SITE_GUTTER}`}>
          <span className="text-center sm:text-left">{tx.copyright}</span>
          <p className="max-w-xl text-center text-[11px] leading-relaxed text-gray-500 sm:text-left">{tx.disclaimer}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <Link to="/game" className="transition-colors hover:text-white">{tx.footerGame}</Link>
            <Link to="/report" className="transition-colors hover:text-white">{tx.footerReport}</Link>
            <Link to="/pricing" className="transition-colors hover:text-white">{tx.footerPricing}</Link>
            <Link to="/privacy" className="transition-colors hover:text-white">{tx.footerPrivacy}</Link>
            <Link to="/terms" className="transition-colors hover:text-white">{tx.footerTerms}</Link>
            <Link to="/support" className="transition-colors hover:text-white">{tx.footerSupport}</Link>
            <Link to="/account-deletion" className="transition-colors hover:text-white">{tx.footerAccountDeletion}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
