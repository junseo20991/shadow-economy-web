import { Layout } from '../components/Layout'

export function Support() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Support</h1>
        <p className="text-sm text-gray-500 mb-10">고객 지원 / 문의</p>

        <div className="space-y-10 text-sm text-gray-300">

          {/* FAQ */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How do I sync my game across devices?',
                  a: 'Create an account and sign in on each device. Your game state will automatically sync when you advance turns.',
                },
                {
                  q: "I purchased the report but it's not unlocked.",
                  a: "Try signing out and back in. If the issue persists, contact us with your purchase receipt and we'll resolve it manually.",
                },
                {
                  q: 'How do I delete my account?',
                  a: 'Go to Settings → Account → Delete Account inside the app. This permanently removes all your data.',
                },
                {
                  q: 'The game is showing a blank screen.',
                  a: 'Try clearing your browser cache or app data and restarting. If the issue continues, contact us.',
                },
                {
                  q: '게임 진행이 저장되지 않아요.',
                  a: '계정에 로그인되어 있는지 확인해 주세요. 게스트 모드에서는 앱을 닫으면 진행이 초기화될 수 있습니다.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-l-2 border-gray-700 pl-4">
                  <p className="text-white font-medium mb-1">{q}</p>
                  <p className="text-gray-400">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-xl bg-gray-900 border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Can't find your answer? Send us an email and we'll get back to you within 1–2 business days.
            </p>
            <a
              href="mailto:support@shadow-economy.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg transition-colors text-sm"
            >
              support@shadow-economy.app
            </a>
            <p className="mt-4 text-xs text-gray-600">
              이메일로 문의 시 사용 중인 기기 정보와 문제 설명을 함께 보내주시면 빠른 처리에 도움이 됩니다.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  )
}
