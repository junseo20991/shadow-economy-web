import { Link, useLocation } from 'react-router-dom'

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Nav */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-amber-400 tracking-wide">
            SHADOW ECONOMY
          </Link>
          <nav className="flex items-center gap-6 text-xs text-gray-400">
            <Link to="/support" className={pathname === '/support' ? 'text-white' : 'hover:text-white transition-colors'}>
              Support
            </Link>
            <Link to="/privacy" className={pathname === '/privacy' ? 'text-white' : 'hover:text-white transition-colors'}>
              Privacy
            </Link>
            <Link to="/terms" className={pathname === '/terms' ? 'text-white' : 'hover:text-white transition-colors'}>
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Shadow Economy. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link to="/support" className="hover:text-gray-400 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
