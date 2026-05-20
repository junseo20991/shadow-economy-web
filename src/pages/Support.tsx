import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

type Faq = { q: string; a: string }

const content: Record<string, { title: string; faqTitle: string; faqs: Faq[]; contactTitle: string; contactBody: string; contactNote?: string }> = {
  en: {
    title: 'Support', faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How do I sync my game across devices?', a: 'Create an account and sign in on each device. Your game state will automatically sync when you advance turns.' },
      { q: "I purchased the report but it's not unlocked.", a: "Try signing out and back in. If the issue persists, contact us with your purchase receipt and we'll resolve it manually." },
      { q: 'How do I delete my account?', a: 'Open the in-app menu, go to Settings → Account → Delete Account. This permanently removes your account and all game data.' },
      { q: 'The game is showing a blank screen.', a: 'Try clearing your browser cache or app data and restarting. If the issue continues, contact us.' },
    ],
    contactTitle: 'Contact Us', contactBody: "Can't find your answer? Send us an email and we'll get back to you within 1–2 business days.",
  },
  ko: {
    title: '고객지원', faqTitle: '자주 묻는 질문',
    faqs: [
      { q: '기기 간 게임 진행을 동기화하려면 어떻게 하나요?', a: '계정을 만들고 각 기기에서 로그인하세요. 턴을 진행할 때 게임 상태가 자동으로 동기화됩니다.' },
      { q: '보고서를 구매했는데 잠금이 해제되지 않아요.', a: '로그아웃 후 다시 로그인해 보세요. 문제가 지속되면 구매 영수증과 함께 문의해 주시면 수동으로 처리해 드립니다.' },
      { q: '계정을 삭제하려면 어떻게 하나요?', a: '앱 내 메뉴를 열어 설정 → 계정 → 계정 삭제로 이동하세요. 계정과 모든 게임 데이터가 영구적으로 삭제됩니다.' },
      { q: '게임 화면이 빈 화면으로 표시돼요.', a: '브라우저 캐시 또는 앱 데이터를 지우고 재시작해 보세요. 문제가 계속되면 문의해 주세요.' },
      { q: '게임 진행이 저장되지 않아요.', a: '계정에 로그인되어 있는지 확인해 주세요. 게스트 모드에서는 앱을 닫으면 진행이 초기화될 수 있습니다.' },
    ],
    contactTitle: '문의하기', contactBody: '원하시는 답변을 찾지 못하셨나요? 이메일로 문의해 주시면 1~2 영업일 내에 답변해 드립니다.',
    contactNote: '문의 시 사용 중인 기기 정보와 문제 설명을 함께 보내주시면 빠른 처리에 도움이 됩니다.',
  },
  ja: {
    title: 'サポート', faqTitle: 'よくある質問',
    faqs: [
      { q: 'デバイス間でゲームを同期するにはどうすればいいですか？', a: 'アカウントを作成し、各デバイスでサインインしてください。ターンを進めるときにゲームの状態が自動的に同期されます。' },
      { q: 'レポートを購入しましたが、ロックが解除されていません。', a: 'サインアウトして再度サインインしてみてください。問題が解決しない場合は、購入レシートと共にご連絡ください。手動で対応いたします。' },
      { q: 'アカウントを削除するにはどうすればいいですか？', a: 'アプリ内メニューを開き、設定 → アカウント → アカウントを削除 に移動してください。アカウントとすべてのゲームデータが完全に削除されます。' },
      { q: 'ゲームが空白画面を表示しています。', a: 'ブラウザのキャッシュまたはアプリデータをクリアして再起動してみてください。問題が続く場合はご連絡ください。' },
    ],
    contactTitle: 'お問い合わせ', contactBody: '回答が見つかりませんでしたか？メールでお問い合わせいただければ、1〜2営業日以内にご返答いたします。',
  },
  zh: {
    title: '客户支持', faqTitle: '常见问题',
    faqs: [
      { q: '如何在设备间同步游戏进度？', a: '创建账户并在每台设备上登录。每次推进回合时，游戏状态将自动同步。' },
      { q: '我购买了报告但未解锁。', a: '尝试退出登录再重新登录。如果问题持续存在，请携带购买收据联系我们，我们将手动处理。' },
      { q: '如何删除我的账户？', a: '打开应用内菜单，前往设置 → 账户 → 删除账户。这将永久删除您的账户和所有游戏数据。' },
      { q: '游戏显示空白屏幕。', a: '尝试清除浏览器缓存或应用数据并重新启动。如果问题继续，请联系我们。' },
    ],
    contactTitle: '联系我们', contactBody: '找不到答案？发送电子邮件给我们，我们将在1-2个工作日内回复。',
  },
  es: {
    title: 'Soporte', faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Cómo sincronizo mi juego entre dispositivos?', a: 'Crea una cuenta e inicia sesión en cada dispositivo. El estado del juego se sincronizará automáticamente cuando avances los turnos.' },
      { q: 'Compré el informe pero no está desbloqueado.', a: 'Intenta cerrar sesión y volver a iniciarla. Si el problema persiste, contáctanos con tu recibo de compra y lo resolveremos manualmente.' },
      { q: '¿Cómo elimino mi cuenta?', a: 'Abre el menú de la app, ve a Configuración → Cuenta → Eliminar cuenta. Esto elimina permanentemente tu cuenta y todos los datos del juego.' },
      { q: 'El juego muestra una pantalla en blanco.', a: 'Intenta borrar el caché del navegador o los datos de la app y reinicia. Si el problema continúa, contáctanos.' },
    ],
    contactTitle: 'Contáctanos', contactBody: '¿No encuentras tu respuesta? Envíanos un correo electrónico y te responderemos en 1-2 días hábiles.',
  },
  sv: {
    title: 'Support', faqTitle: 'Vanliga frågor',
    faqs: [
      { q: 'Hur synkroniserar jag mitt spel mellan enheter?', a: 'Skapa ett konto och logga in på varje enhet. Ditt spelstatus synkroniseras automatiskt när du går vidare med omgångarna.' },
      { q: 'Jag köpte rapporten men den är inte upplåst.', a: 'Försök logga ut och logga in igen. Om problemet kvarstår, kontakta oss med ditt köpkvitto så löser vi det manuellt.' },
      { q: 'Hur tar jag bort mitt konto?', a: 'Öppna appmenyn, gå till Inställningar → Konto → Ta bort konto. Detta tar permanent bort ditt konto och alla speldata.' },
      { q: 'Spelet visar en tom skärm.', a: 'Försök rensa webbläsarens cache eller appdata och starta om. Om problemet fortsätter, kontakta oss.' },
    ],
    contactTitle: 'Kontakta oss', contactBody: 'Hittar du inte ditt svar? Skicka ett e-postmeddelande till oss så återkommer vi inom 1-2 arbetsdagar.',
  },
}

export function Support() {
  const { lang } = useLanguage()
  const tx = content[lang] ?? content['en']

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-white mb-10">{tx.title}</h1>
        <div className="space-y-10 text-sm text-gray-300">
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">{tx.faqTitle}</h2>
            <div className="space-y-5">
              {tx.faqs.map(({ q, a }) => (
                <div key={q} className="border-l-2 border-gray-700 pl-4">
                  <p className="text-white font-medium mb-1">{q}</p>
                  <p className="text-gray-400">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-gray-900 border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-2">{tx.contactTitle}</h2>
            <p className="text-gray-400 mb-4">{tx.contactBody}</p>
            <a href="mailto:support@shadow-economy.app" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              support@shadow-economy.app
            </a>
            {tx.contactNote && <p className="mt-4 text-xs text-gray-600">{tx.contactNote}</p>}
          </section>
        </div>
      </div>
    </Layout>
  )
}
