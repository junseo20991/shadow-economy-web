import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

type Section = { title: string; content: string | string[] }

const content: Record<string, { title: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Privacy Policy', updated: 'Last updated: May 19, 2026',
    sections: [
      { title: '1. Information We Collect', content: ['Email address (for account creation and authentication)', 'Display name (from social login providers)', 'Game progress and saved state', 'Purchase records (if you unlock the full report)'] },
      { title: '2. How We Use Your Information', content: ['To authenticate your account and sync your game progress across devices', 'To process purchases and verify access to premium content', 'To send transactional emails (account confirmation, password reset)', 'To improve the game experience', 'We do not sell your personal data to third parties.'] },
      { title: '3. Data Storage', content: 'Your data is stored on Supabase, hosted in the Asia Pacific (Singapore) region. Game state is also stored locally on your device using browser localStorage.' },
      { title: '4. Third-Party Services', content: ['Supabase — authentication and database', 'Google Play Billing / Apple In-App Purchase — payment processing for report credits (we do not store card details)', 'Google OAuth — optional social sign-in'] },
      { title: '5. Your Rights', content: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at the address below. Account deletion removes all associated game data.' },
      { title: '6. Children\'s Privacy', content: 'Shadow Economy is not directed at children under 13. We do not knowingly collect personal information from children under 13.' },
      { title: '7. Changes to This Policy', content: 'We may update this policy from time to time. We will notify you of significant changes via the app or by email.' },
      { title: '8. Contact', content: 'For privacy-related questions, contact us at support@shadow-economy.app' },
    ],
  },
  ko: {
    title: '개인정보 처리방침', updated: '최종 업데이트: 2026년 5월 19일',
    sections: [
      { title: '1. 수집하는 정보', content: ['이메일 주소 (계정 생성 및 인증)', '표시 이름 (소셜 로그인 제공업체로부터)', '게임 진행 상황 및 저장 데이터', '결제 기록 (전체 보고서 잠금 해제 시)'] },
      { title: '2. 정보 이용 목적', content: ['계정 인증 및 기기 간 게임 진행 동기화', '결제 처리 및 프리미엄 콘텐츠 접근 확인', '거래 이메일 발송 (계정 확인, 비밀번호 재설정)', '게임 경험 개선', '개인정보는 제3자에게 판매하지 않습니다.'] },
      { title: '3. 데이터 저장', content: '데이터는 Supabase의 아시아 태평양(싱가포르) 리전에 저장됩니다. 게임 상태는 기기의 브라우저 localStorage에도 저장됩니다.' },
      { title: '4. 제3자 서비스', content: ['Supabase — 인증 및 데이터베이스', 'Google Play 결제 / Apple 인앱 결제 — 보고서 크레딧 결제 처리 (카드 정보는 저장하지 않음)', 'Google OAuth — 선택적 소셜 로그인'] },
      { title: '5. 이용자 권리', content: '언제든지 아래 연락처로 개인정보 열람, 수정, 삭제를 요청하실 수 있습니다. 계정 삭제 시 관련 게임 데이터가 모두 삭제됩니다.' },
      { title: '6. 아동 개인정보', content: 'Shadow Economy는 만 13세 미만 아동을 대상으로 하지 않습니다. 당사는 만 13세 미만 아동의 개인정보를 고의로 수집하지 않습니다.' },
      { title: '7. 방침 변경', content: '본 방침은 수시로 업데이트될 수 있습니다. 중요한 변경 사항은 앱 또는 이메일을 통해 공지합니다.' },
      { title: '8. 문의', content: '개인정보 관련 문의: support@shadow-economy.app' },
    ],
  },
  ja: {
    title: 'プライバシーポリシー', updated: '最終更新日: 2026年5月19日',
    sections: [
      { title: '1. 収集する情報', content: ['メールアドレス（アカウント作成および認証のため）', '表示名（ソーシャルログインプロバイダーから）', 'ゲームの進行状況と保存データ', '購入記録（完全なレポートのロックを解除した場合）'] },
      { title: '2. 情報の利用目的', content: ['アカウントの認証とデバイス間のゲーム進行の同期', '購入処理とプレミアムコンテンツへのアクセス確認', 'トランザクションメールの送信（アカウント確認、パスワードリセット）', 'ゲーム体験の改善', '個人データを第三者に販売することはありません。'] },
      { title: '3. データの保存', content: 'データはSupabaseのアジア太平洋（シンガポール）リージョンに保存されます。ゲームの状態はブラウザのlocalStorageを使用してデバイスにもローカル保存されます。' },
      { title: '4. 第三者サービス', content: ['Supabase — 認証とデータベース', 'Google Playビリング / Apple App内課金 — レポートクレジットの決済処理（カード情報は保存しません）', 'Google OAuth — オプションのソーシャルサインイン'] },
      { title: '5. お客様の権利', content: '個人データへのアクセス、修正、削除はいつでも下記アドレスまでご連絡ください。アカウントを削除すると、関連するゲームデータもすべて削除されます。' },
      { title: '6. 子どものプライバシー', content: 'Shadow Economyは13歳未満の子どもを対象としていません。当社は13歳未満の子どもの個人情報を故意に収集しません。' },
      { title: '7. ポリシーの変更', content: '本ポリシーは随時更新される場合があります。重要な変更はアプリまたはメールでお知らせします。' },
      { title: '8. お問い合わせ', content: 'プライバシーに関するご質問: support@shadow-economy.app' },
    ],
  },
  zh: {
    title: '隐私政策', updated: '最后更新：2026年5月19日',
    sections: [
      { title: '1. 我们收集的信息', content: ['电子邮件地址（用于账户创建和身份验证）', '显示名称（来自社交登录提供商）', '游戏进度和保存状态', '购买记录（如果您解锁完整报告）'] },
      { title: '2. 我们如何使用您的信息', content: ['验证您的账户并跨设备同步游戏进度', '处理购买并验证对高级内容的访问', '发送交易邮件（账户确认、密码重置）', '改善游戏体验', '我们不会将您的个人数据出售给第三方。'] },
      { title: '3. 数据存储', content: '您的数据存储在 Supabase 上，托管在亚太（新加坡）地区。游戏状态也通过浏览器 localStorage 存储在您的设备本地。' },
      { title: '4. 第三方服务', content: ['Supabase — 身份验证和数据库', 'Google Play结算 / Apple应用内购买 — 报告积分支付处理（我们不存储卡片详情）', 'Google OAuth — 可选的社交登录'] },
      { title: '5. 您的权利', content: '您可以随时通过以下地址联系我们，请求访问、更正或删除您的个人数据。删除账户将删除所有关联的游戏数据。' },
      { title: '6. 儿童隐私', content: 'Shadow Economy 不面向13岁以下儿童。我们不会故意收集13岁以下儿童的个人信息。' },
      { title: '7. 政策变更', content: '我们可能会不时更新本政策。我们将通过应用或电子邮件通知您重大变更。' },
      { title: '8. 联系方式', content: '如有隐私相关问题，请联系：support@shadow-economy.app' },
    ],
  },
  es: {
    title: 'Política de Privacidad', updated: 'Última actualización: 19 de mayo de 2026',
    sections: [
      { title: '1. Información que recopilamos', content: ['Dirección de correo electrónico (para creación de cuenta y autenticación)', 'Nombre para mostrar (de proveedores de inicio de sesión social)', 'Progreso del juego y estado guardado', 'Registros de compra (si desbloqueas el informe completo)'] },
      { title: '2. Cómo usamos tu información', content: ['Para autenticar tu cuenta y sincronizar tu progreso entre dispositivos', 'Para procesar compras y verificar el acceso a contenido premium', 'Para enviar correos transaccionales (confirmación de cuenta, restablecimiento de contraseña)', 'Para mejorar la experiencia del juego', 'No vendemos tus datos personales a terceros.'] },
      { title: '3. Almacenamiento de datos', content: 'Tus datos se almacenan en Supabase, alojado en la región Asia Pacífico (Singapur). El estado del juego también se almacena localmente en tu dispositivo usando localStorage del navegador.' },
      { title: '4. Servicios de terceros', content: ['Supabase — autenticación y base de datos', 'Google Play Billing / Apple In-App Purchase — procesamiento de pagos de créditos de informe (no almacenamos detalles de tarjetas)', 'Google OAuth — inicio de sesión social opcional'] },
      { title: '5. Tus derechos', content: 'Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento contactándonos en la dirección indicada. La eliminación de la cuenta elimina todos los datos de juego asociados.' },
      { title: '6. Privacidad infantil', content: 'Shadow Economy no está dirigido a menores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años.' },
      { title: '7. Cambios en esta política', content: 'Podemos actualizar esta política de vez en cuando. Te notificaremos sobre cambios significativos a través de la app o por correo electrónico.' },
      { title: '8. Contacto', content: 'Para preguntas sobre privacidad: support@shadow-economy.app' },
    ],
  },
  sv: {
    title: 'Integritetspolicy', updated: 'Senast uppdaterad: 19 maj 2026',
    sections: [
      { title: '1. Information vi samlar in', content: ['E-postadress (för kontoskapande och autentisering)', 'Visningsnamn (från leverantörer av social inloggning)', 'Spelframsteg och sparad status', 'Köpregistreringar (om du låser upp hela rapporten)'] },
      { title: '2. Hur vi använder din information', content: ['För att autentisera ditt konto och synkronisera spelframsteg mellan enheter', 'För att behandla köp och verifiera åtkomst till premiuminnehåll', 'För att skicka transaktionella e-postmeddelanden (kontobekräftelse, lösenordsåterställning)', 'För att förbättra spelupplevelsen', 'Vi säljer inte dina personuppgifter till tredje part.'] },
      { title: '3. Datalagring', content: 'Dina data lagras på Supabase, hostad i Asien-Stillahavsregionen (Singapore). Spelstatus lagras även lokalt på din enhet med hjälp av webbläsarens localStorage.' },
      { title: '4. Tredjepartstjänster', content: ['Supabase — autentisering och databas', 'Google Play Billing / Apple In-App Purchase — betalningshantering för rapportkrediter (vi lagrar inte kortuppgifter)', 'Google OAuth — valfri social inloggning'] },
      { title: '5. Dina rättigheter', content: 'Du kan när som helst begära tillgång till, korrigering av eller radering av dina personuppgifter genom att kontakta oss på adressen nedan. Kontoborttagning tar bort alla associerade speldata.' },
      { title: '6. Barns integritet', content: 'Shadow Economy riktar sig inte till barn under 13 år. Vi samlar inte medvetet in personuppgifter från barn under 13 år.' },
      { title: '7. Ändringar i denna policy', content: 'Vi kan uppdatera denna policy då och då. Vi meddelar dig om väsentliga ändringar via appen eller e-post.' },
      { title: '8. Kontakt', content: 'För integritetsfrågor: support@shadow-economy.app' },
    ],
  },
}

export function Privacy() {
  const { lang } = useLanguage()
  const tx = content[lang] ?? content['en']

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-white mb-2">{tx.title}</h1>
        <p className="text-xs text-gray-600 mb-10">{tx.updated}</p>
        <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
          {tx.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-semibold text-white mb-3">{s.title}</h2>
              {Array.isArray(s.content) ? (
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {s.content.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p className="text-gray-400">{s.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  )
}
