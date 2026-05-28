import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

type Faq = { q: string; a: string }

const content: Record<string, { title: string; faqTitle: string; faqs: Faq[]; contactTitle: string; contactBody: string; contactNote?: string }> = {
  en: {
    title: 'Support',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How do I sync my game across devices?', a: 'Create an account and sign in with the same Google account on each device. While signed in, your progress is saved to the cloud automatically during play (typically within a few seconds after changes).' },
      { q: 'Which sign-in method is supported?', a: 'Shadow Economy supports Google sign-in where available in the app. Use the same Google account you used at purchase when restoring report credits.' },
      { q: 'Can I restore report credits?', a: 'Report credits are tied to the account used at checkout. Sign in with the same Google account on the device where you made the purchase. If the purchase completed and the balance still does not appear, contact Shadow Economy with your receipt. Because credits are consumable, spent credits cannot be restored.' },
      { q: 'Can you access my report?', a: 'No. Reports are generated only for your account, and Shadow Economy does not access the contents of individual reports.' },
      { q: 'I purchased report credits but they are not showing.', a: "Restart the app and sign in with the same Google account used for purchase. If the issue persists, contact Shadow Economy with your App Store or Google Play purchase receipt and Shadow Economy will resolve it manually." },
      { q: 'How do I delete my account?', a: 'Open the in-app menu, go to Settings → Account → Delete Account. This permanently removes your account and all game data.' },
      { q: 'The game is showing a blank screen.', a: 'Restart the app, check for updates, and confirm your network connection. On Android, clearing the app cache may also help. If the issue continues, contact Shadow Economy.' },
    ],
    contactTitle: 'Contact Shadow Economy',
    contactBody: "Can't find your answer? Email Shadow Economy and Shadow Economy will respond within 1–2 business days.",
  },
  ko: {
    title: '고객지원',
    faqTitle: '자주 묻는 질문',
    faqs: [
      { q: '기기 간에 게임을 동기화하려면 어떻게 하나요?', a: '계정을 만들고 각 기기에서 동일한 Google 계정으로 로그인해 주세요. 로그인 상태에서는 플레이 중 변경 사항이 클라우드에 자동 저장됩니다(보통 변경 후 수 초 이내).' },
      { q: '어떤 로그인 방식을 지원하나요?', a: '앱에서 지원되는 경우 Google 로그인을 사용할 수 있습니다. 크레딧 복원 시 구매에 사용한 동일한 Google 계정으로 로그인해 주세요.' },
      { q: '보고서 크레딧을 복원할 수 있나요?', a: '보고서 크레딧은 결제에 사용한 계정에 연결됩니다. 구매에 사용한 Google 계정으로, 구매한 기기에서 로그인해 주세요. 결제가 완료됐는데도 잔액이 보이지 않으면 영수증과 함께 문의해 주세요. 크레딧은 소모형이므로 이미 사용한 크레딧은 복원할 수 없습니다.' },
      { q: '제 보고서를 볼 수 있나요?', a: '아니요. 보고서는 계정 소유자만을 위해 생성되며, Shadow Economy는 개별 보고서 내용을 열람하지 않습니다.' },
      { q: '보고서 크레딧을 구매했는데 표시되지 않아요.', a: '앱을 재시작하고 구매에 사용한 동일한 Google 계정으로 로그인되어 있는지 확인해 주세요. 문제가 지속되면 App Store 또는 Google Play 구매 영수증과 함께 문의해 주시면 수동으로 처리해 드립니다.' },
      { q: '계정을 삭제하려면 어떻게 하나요?', a: '앱 내 메뉴에서 설정 → 계정 → 계정 삭제로 이동해 주세요. 그러면 계정과 모든 게임 데이터가 영구적으로 삭제됩니다.' },
      { q: '게임이 빈 화면으로 나와요.', a: '앱을 재시작하고, 업데이트가 있는지 확인한 뒤, 네트워크 연결을 확인해 주세요. Android에서는 앱 캐시를 지우는 것도 도움이 될 수 있습니다. 문제가 계속되면 문의해 주세요.' },
    ],
    contactTitle: '문의하기',
    contactBody: '원하시는 답변을 찾지 못하셨나요? 이메일로 문의해 주시면 1~2 영업일 내에 답변해 드립니다.',
  },
  ja: {
    title: 'サポート',
    faqTitle: 'よくある質問',
    faqs: [
      { q: '端末間でゲームを同期するには？', a: 'アカウントを作成し、各端末で同じGoogleアカウントでサインインしてください。サインイン中はプレイ中の変更がクラウドに自動保存されます（通常、変更後数秒以内）。' },
      { q: 'どのサインイン方法に対応していますか？', a: 'アプリで利用可能な場合、Googleサインインに対応しています。クレジット復元時は購入時と同じGoogleアカウントでサインインしてください。' },
      { q: 'レポートクレジットを復元できますか？', a: 'レポートクレジットは購入時に使用したアカウントに紐づきます。購入に使ったGoogleアカウントで、購入した端末にサインインしてください。購入が完了しているのに残高が表示されない場合は、レシートを添えてご連絡ください。クレジットは消費型のため、使用済みのクレジットは復元できません。' },
      { q: 'レポートを閲覧できますか？', a: 'いいえ。レポートはアカウント保有者のためだけに生成され、個別レポートの内容にShadow Economyはアクセスしません。' },
      { q: 'レポートクレジットを購入しましたが、表示されません。', a: 'アプリを再起動し、購入時と同じGoogleアカウントでサインインしていることを確認してください。問題が解決しない場合は、App StoreまたはGoogle Playの購入レシートと共にご連絡ください。手動で対応いたします。' },
      { q: 'アカウントを削除するには？', a: 'アプリ内メニューから「設定」→「アカウント」→「アカウントを削除」に進んでください。アカウントとすべてのゲームデータが完全に削除されます。' },
      { q: 'ゲームが真っ白な画面になります。', a: 'アプリを再起動し、更新があるか確認し、ネットワーク接続を確認してください。Androidではアプリのキャッシュを削除すると改善する場合があります。問題が続く場合はお問い合わせください。' },
    ],
    contactTitle: 'お問い合わせ',
    contactBody: '回答が見つかりませんでしたか？メールでお問い合わせいただければ、1〜2営業日以内にご返答いたします。',
  },
  zh: {
    title: '支持',
    faqTitle: '常见问题',
    faqs: [
      { q: '如何在设备之间同步游戏？', a: '创建账户并在每台设备上使用同一 Google 账户登录。登录后，游玩中的变更会自动保存到云端（通常在变更后几秒内）。' },
      { q: '支持哪种登录方式？', a: '应用在可用时支持 Google 登录。恢复积分时请使用与购买时相同的 Google 账户。' },
      { q: '报告积分可以恢复吗？', a: '报告积分绑定到结账时使用的账户。请使用购买时的同一 Google 账户在设备上登录。如果购买已完成但余额仍未显示，请附上收据联系 Shadow Economy。由于积分属于消耗型内容，已经使用的积分无法恢复。' },
      { q: '你们能查看我的报告吗？', a: '不能。报告仅为您的账户生成，Shadow Economy 不会访问单个报告的内容。' },
      { q: '我购买了报告积分但没有显示。', a: '请重启应用，并确认您使用的是购买时的同一 Google 账户。如果问题持续存在，请携带 App Store 或 Google Play 购买收据联系 Shadow Economy，Shadow Economy 将手动处理。' },
      { q: '如何删除我的账户？', a: '打开应用内菜单，进入“设置”→“账户”→“删除账户”。这将永久删除您的账户和所有游戏数据。' },
      { q: '游戏显示空白屏幕。', a: '请重启应用，检查更新并确认网络连接。在 Android 上，清除应用缓存也可能有帮助。如果问题仍然存在，请联系 Shadow Economy。' },
    ],
    contactTitle: '联系 Shadow Economy',
    contactBody: '找不到答案？向 Shadow Economy 发送电子邮件，Shadow Economy 将在1-2个工作日内回复。',
  },
  es: {
    title: 'Soporte',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Cómo sincronizo mi juego entre dispositivos?', a: 'Crea una cuenta e inicia sesión con la misma cuenta de Google en cada dispositivo. Con la sesión iniciada, el progreso se guarda en la nube automáticamente durante la partida (normalmente en unos segundos tras los cambios).' },
      { q: '¿Qué método de inicio de sesión se admite?', a: 'Shadow Economy admite inicio de sesión con Google cuando está disponible en la app. Usa la misma cuenta de Google que en la compra para restaurar créditos.' },
      { q: '¿Puedo restaurar los créditos de informe?', a: 'Los créditos de informe están vinculados a la cuenta usada al pagar. Inicia sesión con la misma cuenta de Google en el dispositivo donde realizaste la compra. Si la compra se completó y el saldo aún no aparece, contacta a Shadow Economy con tu recibo. Como los créditos son consumibles, los créditos ya usados no se pueden restaurar.' },
      { q: '¿Pueden ver mi informe?', a: 'No. Los informes se generan solo para su cuenta y Shadow Economy no accede al contenido de informes individuales.' },
      { q: 'Compré créditos de informe pero no aparecen.', a: 'Reinicia la app y comprueba que hayas iniciado sesión con la misma cuenta de Google usada para la compra. Si el problema persiste, contacta a Shadow Economy con tu recibo de compra de App Store o Google Play y lo resolveremos manualmente.' },
      { q: '¿Cómo elimino mi cuenta?', a: 'Abre el menú de la app, ve a Configuración → Cuenta → Eliminar cuenta. Esto elimina permanentemente tu cuenta y todos los datos del juego.' },
      { q: 'El juego muestra una pantalla en blanco.', a: 'Reinicia la app, busca actualizaciones y comprueba tu conexión de red. En Android, borrar la caché de la app también puede ayudar. Si el problema continúa, contacta a Shadow Economy.' },
    ],
    contactTitle: 'Contacta a Shadow Economy',
    contactBody: '¿No encuentras tu respuesta? Envía un correo electrónico a Shadow Economy y Shadow Economy responderá en 1-2 días hábiles.',
  },
  sv: {
    title: 'Support',
    faqTitle: 'Vanliga frågor',
    faqs: [
      { q: 'Hur synkroniserar jag mitt spel mellan enheter?', a: 'Skapa ett konto och logga in med samma Google-konto på varje enhet. Medan du är inloggad sparas framsteg automatiskt i molnet under spelet (vanligtvis inom några sekunder efter ändringar).' },
      { q: 'Vilken inloggningsmetod stöds?', a: 'Shadow Economy stöder Google-inloggning där det finns i appen. Använd samma Google-konto som vid köpet när du återställer krediter.' },
      { q: 'Kan jag återställa rapportkrediter?', a: 'Rapportkrediter är kopplade till kontot som användes vid köpet. Logga in med samma Google-konto på enheten där du gjorde köpet. Om köpet gick igenom men saldot fortfarande inte visas, kontakta Shadow Economy med kvittot. Eftersom krediterna är förbrukningsvaror kan redan använda krediter inte återställas.' },
      { q: 'Kan ni se min rapport?', a: 'Nej. Rapporter genereras endast för ditt konto, och Shadow Economy har inte tillgång till innehållet i enskilda rapporter.' },
      { q: 'Jag köpte rapportkrediter men de visas inte.', a: 'Starta om appen och kontrollera att du är inloggad med samma Google-konto som användes vid köpet. Om problemet kvarstår, kontakta Shadow Economy med ditt köpkvitto från App Store eller Google Play så löser Shadow Economy det manuellt.' },
      { q: 'Hur tar jag bort mitt konto?', a: 'Öppna appmenyn, gå till Inställningar → Konto → Ta bort konto. Detta tar permanent bort ditt konto och alla speldata.' },
      { q: 'Spelet visar en tom skärm.', a: 'Starta om appen, kontrollera om det finns uppdateringar och bekräfta nätverksanslutningen. På Android kan det också hjälpa att rensa appens cache. Om problemet fortsätter, kontakta Shadow Economy.' },
    ],
    contactTitle: 'Kontakta Shadow Economy',
    contactBody: 'Hittar du inte ditt svar? Skicka ett e-postmeddelande till Shadow Economy så återkommer Shadow Economy inom 1-2 arbetsdagar.',
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
            <a href="mailto:contact@shadoweconomyapp.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
              contact@shadoweconomyapp.com
            </a>
            {tx.contactNote && <p className="mt-4 text-xs text-gray-600">{tx.contactNote}</p>}
          </section>
        </div>
      </div>
    </Layout>
  )
}
