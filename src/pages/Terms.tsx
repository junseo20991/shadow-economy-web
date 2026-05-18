import { Layout } from '../components/Layout'

export function Terms() {
  const updated = 'May 19, 2026'

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-2">이용약관</p>
        <p className="text-xs text-gray-600 mb-10">Last updated: {updated}</p>

        <div className="space-y-8 text-gray-300 leading-relaxed text-sm">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By downloading or using Shadow Economy, you agree to be bound by these Terms of Service. If you do not agree, do not use the app.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Use of the App</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>You must be at least 13 years old to use Shadow Economy.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You may not use the app for any unlawful purpose.</li>
              <li>You may not attempt to reverse-engineer, modify, or exploit the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Accounts</h2>
            <p>You may play as a guest without an account, but game progress may not be preserved across sessions. Creating an account allows cross-device sync. You may delete your account at any time via the in-app settings or by contacting support.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Purchases</h2>
            <p>Shadow Economy offers a one-time in-app purchase to unlock the full post-mortem report. All purchases are final. Refunds may be requested in accordance with the applicable app store policies (Apple App Store / Google Play). We do not process refunds directly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>All content in Shadow Economy — including game design, text, graphics, and code — is owned by the developer. You may not reproduce or distribute any part of the app without permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Disclaimers</h2>
            <p>Shadow Economy is a simulation game for educational and entertainment purposes. Nothing in the game constitutes financial advice. The developer is not responsible for any decisions made based on gameplay.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Contact</h2>
            <p>
              Questions about these terms:{' '}
              <a href="mailto:support@shadow-economy.app" className="text-amber-400 underline underline-offset-2">
                support@shadow-economy.app
              </a>
            </p>
          </section>

          <hr className="border-gray-800 my-8" />
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">한국어 요약</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shadow Economy는 만 13세 이상이 이용할 수 있습니다. 앱 내 구매(보고서 잠금 해제)는 환불이 불가하며,
              환불이 필요한 경우 각 앱스토어 정책을 따릅니다. 본 게임은 교육·오락 목적의 시뮬레이션이며,
              게임 내 내용은 금융 조언이 아닙니다.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
