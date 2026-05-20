import { Layout } from '../components/Layout'
import { useLanguage } from '../context/LanguageContext'

type Section = { title: string; content: string | string[] }

const content: Record<string, { title: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Terms of Service', updated: 'Last updated: May 19, 2026',
    sections: [
      { title: '1. Acceptance of Terms', content: 'By downloading or using Shadow Economy, you agree to be bound by these Terms of Service. If you do not agree, do not use the app.' },
      { title: '2. Use of the App', content: ['You must be at least 13 years old to use Shadow Economy.', 'You are responsible for maintaining the security of your account credentials.', 'You may not use the app for any unlawful purpose.', 'You may not attempt to reverse-engineer, modify, or exploit the app.'] },
      { title: '3. Accounts', content: 'You may play as a guest without an account, but game progress may not be preserved across sessions. Creating an account allows cross-device sync. You may delete your account at any time via the in-app settings or by contacting support.' },
      { title: '4. Purchases', content: 'Shadow Economy offers a one-time in-app purchase to unlock the full post-mortem report. All purchases are final. Refunds may be requested in accordance with the applicable app store policies (Apple App Store / Google Play). We do not process refunds directly.' },
      { title: '5. Intellectual Property', content: 'All content in Shadow Economy — including game design, text, graphics, and code — is owned by the developer. You may not reproduce or distribute any part of the app without permission.' },
      { title: '6. Disclaimers', content: 'Shadow Economy is a simulation game for educational and entertainment purposes. Nothing in the game constitutes financial advice. The developer is not responsible for any decisions made based on gameplay.' },
      { title: '7. Limitation of Liability', content: 'To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.' },
      { title: '8. Changes to Terms', content: 'We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.' },
      { title: '9. Contact', content: 'Questions about these terms: support@shadow-economy.app' },
    ],
  },
  ko: {
    title: '이용약관', updated: '최종 업데이트: 2026년 5월 19일',
    sections: [
      { title: '1. 약관 동의', content: 'Shadow Economy를 다운로드하거나 사용함으로써 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않는 경우 앱을 사용하지 마십시오.' },
      { title: '2. 앱 이용', content: ['Shadow Economy는 만 13세 이상만 이용할 수 있습니다.', '계정 자격 증명의 보안 유지에 대한 책임은 이용자에게 있습니다.', '앱을 불법적인 목적으로 사용할 수 없습니다.', '앱을 역설계, 수정, 악용하려는 시도는 금지됩니다.'] },
      { title: '3. 계정', content: '계정 없이 게스트로 플레이할 수 있으나, 세션 간 게임 진행이 보존되지 않을 수 있습니다. 계정을 생성하면 기기 간 동기화가 가능합니다. 앱 내 설정 또는 고객지원 연락을 통해 언제든지 계정을 삭제할 수 있습니다.' },
      { title: '4. 구매', content: '전체 부검 보고서 잠금 해제를 위한 일회성 인앱 구매를 제공합니다. 모든 구매는 확정됩니다. 환불은 각 앱스토어 정책에 따라 요청하실 수 있으며, 당사는 직접 환불을 처리하지 않습니다.' },
      { title: '5. 지식재산권', content: '게임 디자인, 텍스트, 그래픽, 코드를 포함한 Shadow Economy의 모든 콘텐츠는 개발자 소유입니다. 허가 없이 앱의 어떠한 부분도 복제하거나 배포할 수 없습니다.' },
      { title: '6. 면책 조항', content: 'Shadow Economy는 교육 및 오락 목적의 시뮬레이션 게임입니다. 게임 내 어떠한 내용도 금융 조언을 구성하지 않습니다. 개발자는 게임 플레이를 기반으로 한 결정에 대해 책임지지 않습니다.' },
      { title: '7. 책임 제한', content: '법률이 허용하는 최대 범위 내에서, 개발자는 앱 사용으로 인한 간접적, 부수적 또는 결과적 손해에 대해 책임지지 않습니다.' },
      { title: '8. 약관 변경', content: '본 약관은 수시로 업데이트될 수 있습니다. 변경 후 앱을 계속 사용하면 새로운 약관에 동의한 것으로 간주됩니다.' },
      { title: '9. 문의', content: '약관 관련 문의: support@shadow-economy.app' },
    ],
  },
  ja: {
    title: '利用規約', updated: '最終更新日: 2026年5月19日',
    sections: [
      { title: '1. 規約への同意', content: 'Shadow Economyをダウンロードまたは使用することで、本利用規約に同意したものとみなされます。同意しない場合は、アプリを使用しないでください。' },
      { title: '2. アプリの利用', content: ['Shadow Economyを利用するには13歳以上である必要があります。', 'アカウント認証情報のセキュリティ維持はユーザーの責任です。', 'アプリを違法な目的で使用することはできません。', 'アプリのリバースエンジニアリング、改変、悪用は禁止されています。'] },
      { title: '3. アカウント', content: 'アカウントなしでゲストとしてプレイできますが、セッション間でゲームの進行が保持されない場合があります。アカウントを作成するとデバイス間の同期が可能になります。アプリ内設定またはサポートへの連絡でいつでもアカウントを削除できます。' },
      { title: '4. 購入', content: '完全な死後分析レポートのロックを解除するための一回限りのアプリ内購入を提供しています。すべての購入は確定します。返金は各アプリストアのポリシー（Apple App Store / Google Play）に従って申請できます。当社は直接返金を処理しません。' },
      { title: '5. 知的財産', content: 'ゲームデザイン、テキスト、グラフィック、コードを含むShadow Economyのすべてのコンテンツは開発者の所有です。許可なくアプリのいかなる部分も複製または配布することはできません。' },
      { title: '6. 免責事項', content: 'Shadow Economyは教育・娯楽目的のシミュレーションゲームです。ゲーム内のいかなる内容も金融アドバイスを構成しません。開発者はゲームプレイに基づく決定について責任を負いません。' },
      { title: '7. 責任の制限', content: '法律が許容する最大範囲において、開発者はアプリの使用から生じる間接的、偶発的または結果的損害について責任を負いません。' },
      { title: '8. 規約の変更', content: '本規約は随時更新される場合があります。変更後もアプリを使用し続けることで、新しい規約に同意したものとみなされます。' },
      { title: '9. お問い合わせ', content: '規約に関するご質問: support@shadow-economy.app' },
    ],
  },
  zh: {
    title: '服务条款', updated: '最后更新：2026年5月19日',
    sections: [
      { title: '1. 条款接受', content: '下载或使用 Shadow Economy 即表示您同意受本服务条款约束。如不同意，请勿使用该应用。' },
      { title: '2. 应用使用', content: ['使用 Shadow Economy 须年满13岁。', '您有责任维护账户凭据的安全。', '不得将应用用于任何非法目的。', '禁止尝试对应用进行逆向工程、修改或利用漏洞。'] },
      { title: '3. 账户', content: '您可以不创建账户以访客身份游玩，但游戏进度可能无法在会话间保留。创建账户可实现跨设备同步。您可以随时通过应用内设置或联系客服删除账户。' },
      { title: '4. 购买', content: 'Shadow Economy 提供一次性应用内购买以解锁完整复盘报告。所有购买均为最终确认。退款可根据适用的应用商店政策（Apple App Store / Google Play）申请。我们不直接处理退款。' },
      { title: '5. 知识产权', content: 'Shadow Economy 的所有内容——包括游戏设计、文本、图形和代码——均为开发者所有。未经许可，不得复制或分发应用的任何部分。' },
      { title: '6. 免责声明', content: 'Shadow Economy 是用于教育和娱乐目的的模拟游戏。游戏中的任何内容均不构成财务建议。开发者对基于游戏做出的任何决定不承担责任。' },
      { title: '7. 责任限制', content: '在法律允许的最大范围内，开发者不对因使用应用而产生的任何间接、附带或后果性损害承担责任。' },
      { title: '8. 条款变更', content: '我们可能会不时更新这些条款。变更后继续使用应用即视为接受新条款。' },
      { title: '9. 联系方式', content: '条款相关问题: support@shadow-economy.app' },
    ],
  },
  es: {
    title: 'Términos de Servicio', updated: 'Última actualización: 19 de mayo de 2026',
    sections: [
      { title: '1. Aceptación de términos', content: 'Al descargar o usar Shadow Economy, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo, no uses la app.' },
      { title: '2. Uso de la app', content: ['Debes tener al menos 13 años para usar Shadow Economy.', 'Eres responsable de mantener la seguridad de tus credenciales de cuenta.', 'No puedes usar la app para ningún propósito ilegal.', 'No puedes intentar realizar ingeniería inversa, modificar o explotar la app.'] },
      { title: '3. Cuentas', content: 'Puedes jugar como invitado sin una cuenta, pero el progreso del juego puede no preservarse entre sesiones. Crear una cuenta permite la sincronización entre dispositivos. Puedes eliminar tu cuenta en cualquier momento a través de la configuración de la app o contactando con soporte.' },
      { title: '4. Compras', content: 'Shadow Economy ofrece una compra única dentro de la app para desbloquear el informe post-mortem completo. Todas las compras son definitivas. Los reembolsos pueden solicitarse de acuerdo con las políticas aplicables de la tienda de apps (Apple App Store / Google Play). No procesamos reembolsos directamente.' },
      { title: '5. Propiedad intelectual', content: 'Todo el contenido de Shadow Economy — incluyendo diseño del juego, texto, gráficos y código — es propiedad del desarrollador. No puedes reproducir o distribuir ninguna parte de la app sin permiso.' },
      { title: '6. Exenciones de responsabilidad', content: 'Shadow Economy es un juego de simulación con fines educativos y de entretenimiento. Nada en el juego constituye asesoramiento financiero. El desarrollador no es responsable de las decisiones tomadas en base al gameplay.' },
      { title: '7. Limitación de responsabilidad', content: 'En la máxima medida permitida por la ley, el desarrollador no será responsable de ningún daño indirecto, incidental o consecuente derivado del uso de la app.' },
      { title: '8. Cambios en los términos', content: 'Podemos actualizar estos términos de vez en cuando. El uso continuado de la app tras los cambios constituye la aceptación de los nuevos términos.' },
      { title: '9. Contacto', content: 'Preguntas sobre estos términos: support@shadow-economy.app' },
    ],
  },
  sv: {
    title: 'Användarvillkor', updated: 'Senast uppdaterad: 19 maj 2026',
    sections: [
      { title: '1. Godkännande av villkor', content: 'Genom att ladda ner eller använda Shadow Economy godkänner du att vara bunden av dessa Användarvillkor. Om du inte godkänner, använd inte appen.' },
      { title: '2. Användning av appen', content: ['Du måste vara minst 13 år för att använda Shadow Economy.', 'Du ansvarar för att hålla dina kontouppgifter säkra.', 'Du får inte använda appen för något olagligt ändamål.', 'Du får inte försöka bakåtkompilera, modifiera eller utnyttja appen.'] },
      { title: '3. Konton', content: 'Du kan spela som gäst utan konto, men spelframsteg kanske inte bevaras mellan sessioner. Att skapa ett konto möjliggör synkronisering mellan enheter. Du kan radera ditt konto när som helst via appinställningarna eller genom att kontakta support.' },
      { title: '4. Köp', content: 'Shadow Economy erbjuder ett engångsköp i appen för att låsa upp hela post-mortem-rapporten. Alla köp är slutgiltiga. Återbetalningar kan begäras i enlighet med tillämpliga appbutiksregler (Apple App Store / Google Play). Vi hanterar inte återbetalningar direkt.' },
      { title: '5. Immateriella rättigheter', content: 'Allt innehåll i Shadow Economy — inklusive speldesign, text, grafik och kod — ägs av utvecklaren. Du får inte reproducera eller distribuera någon del av appen utan tillstånd.' },
      { title: '6. Friskrivningar', content: 'Shadow Economy är ett simuleringsspel för utbildnings- och underhållningsändamål. Ingenting i spelet utgör finansiell rådgivning. Utvecklaren ansvarar inte för beslut som fattas baserat på spelandet.' },
      { title: '7. Ansvarsbegränsning', content: 'I den maximala utsträckning som lagen tillåter ska utvecklaren inte vara ansvarig för indirekta, tillfälliga eller följdskador som uppstår av din användning av appen.' },
      { title: '8. Ändringar av villkor', content: 'Vi kan uppdatera dessa villkor då och då. Fortsatt användning av appen efter ändringar utgör ett godkännande av de nya villkoren.' },
      { title: '9. Kontakt', content: 'Frågor om dessa villkor: support@shadow-economy.app' },
    ],
  },
}

export function Terms() {
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
