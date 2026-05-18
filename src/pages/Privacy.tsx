import { Layout } from '../components/Layout'

export function Privacy() {
  const updated = 'May 19, 2026'

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-2">개인정보 처리방침</p>
        <p className="text-xs text-gray-600 mb-10">Last updated: {updated}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect the following information when you use Shadow Economy:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Email address (for account creation and authentication)</li>
              <li>Display name (from social login providers)</li>
              <li>Game progress and saved state</li>
              <li>Purchase records (if you unlock the full report)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>To authenticate your account and sync your game progress across devices</li>
              <li>To process purchases and verify access to premium content</li>
              <li>To send transactional emails (account confirmation, password reset)</li>
              <li>To improve the game experience</li>
            </ul>
            <p className="mt-3">We do <strong className="text-white">not</strong> sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Data Storage</h2>
            <p>
              Your data is stored on <a href="https://supabase.com" className="text-amber-400 underline underline-offset-2">Supabase</a>,
              hosted in the Asia Pacific (Singapore) region. Game state is also stored locally
              on your device using browser localStorage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li><strong className="text-white">Supabase</strong> — authentication and database</li>
              <li><strong className="text-white">Stripe</strong> — payment processing (we do not store card details)</li>
              <li><strong className="text-white">Google OAuth</strong> — optional social sign-in</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at the address below. Account deletion removes all associated game data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Children's Privacy</h2>
            <p>Shadow Economy is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of significant changes via the app or by email.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact</h2>
            <p>
              For privacy-related questions, contact us at{' '}
              <a href="mailto:support@shadow-economy.app" className="text-amber-400 underline underline-offset-2">
                support@shadow-economy.app
              </a>
            </p>
          </section>

          <hr className="border-gray-800 my-8" />
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">한국어 요약</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shadow Economy는 계정 생성, 게임 진행 동기화, 결제 처리를 위해 이메일 주소 및 표시 이름을 수집합니다.
              개인정보는 제3자에게 판매되지 않으며, Supabase(싱가포르 리전)에 저장됩니다.
              데이터 열람·수정·삭제를 원하시면 아래 이메일로 문의해 주세요.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
