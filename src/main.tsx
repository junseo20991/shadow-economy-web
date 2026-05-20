import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import { Landing } from './pages/Landing'
import { GamePage } from './pages/GamePage'
import { ReportPage } from './pages/ReportPage'
import { PricingPage } from './pages/PricingPage'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { Support } from './pages/Support'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
