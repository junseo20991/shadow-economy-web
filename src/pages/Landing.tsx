import { Layout } from '../components/Layout'

export function Landing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase">
          Turn-Based Economic Simulation
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          The wealth you build<br />
          <span className="text-amber-400">casts a shadow.</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-4">
          Shadow Economy is a turn-based simulation where your financial decisions
          shape — and slowly hollow out — the community around you.
        </p>
        <p className="text-sm text-gray-600 mb-10">
          경제적 결정이 지역 사회에 드리우는 보이지 않는 그림자를 체험하세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-xl transition-colors text-sm"
          >
            Download on App Store
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold rounded-xl transition-colors text-sm"
          >
            Get it on Google Play
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10">
          {[
            {
              icon: '📊',
              title: 'Real Economic Logic',
              ko: '실제 경제 논리',
              desc: 'Assets, liabilities, credit scores, and cash flow — all modeled with realistic mechanics.',
            },
            {
              icon: '🏘️',
              title: 'Community Vitality',
              ko: '지역 활력도 시스템',
              desc: 'Every decision you make ripples through your Ward. Watch the neighborhood change around you.',
            },
            {
              icon: '🔍',
              title: 'Post-Mortem Analysis',
              ko: '의사결정 부검 리포트',
              desc: 'After key decisions, see the hidden information you missed and the paths not taken.',
            },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-xs text-amber-500/70 mb-2">{f.ko}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-xl text-gray-300 italic leading-relaxed mb-4">
          "The moment you felt safe was the moment of quiet extraction."
        </blockquote>
        <p className="text-sm text-gray-600">안도의 한숨을 쉬는 그 순간, 당신은 세 가지를 잃었습니다.</p>
      </section>
    </Layout>
  )
}
