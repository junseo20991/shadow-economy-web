/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'

const Landing = lazy(() => import('./pages/Landing').then((m) => ({ default: m.Landing })))
const GamePage = lazy(() => import('./pages/GamePage').then((m) => ({ default: m.GamePage })))
const ReportPage = lazy(() => import('./pages/ReportPage').then((m) => ({ default: m.ReportPage })))
const PricingPage = lazy(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })))
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })))
const Terms = lazy(() => import('./pages/Terms').then((m) => ({ default: m.Terms })))
const Support = lazy(() => import('./pages/Support').then((m) => ({ default: m.Support })))
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage').then((m) => ({ default: m.AccountDeletionPage })))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-gray-950" />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="/account-deletion" element={<AccountDeletionPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
