import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { TEXT_SECTION } from '../constants/layout'
import { useLanguage } from '../context/LanguageContext'
import { siteNav } from '../i18n/siteNav'

const content = {
  "en": {
    "title": "Account Deletion",
    "intro": "You can delete your Shadow Economy account in the app or request deletion by email. This page explains the public account-deletion path for users and reviewers.",
    "inAppTitle": "Delete your account in the app",
    "steps": [
      "Open Shadow Economy.",
      "Sign in to the account you want to delete.",
      "Open Settings → Account → Delete Account.",
      "Read the confirmation and confirm deletion."
    ],
    "emailTitle": "Email request",
    "emailBody": "If you cannot access the app, email Shadow Economy from the email address linked to your account and request account deletion.",
    "deletedTitle": "What happens after deletion",
    "deletedBody": "Cloud game progress, report credits, saved reports, and sync data are generally deleted or anonymized after account deletion, except where retention is required by law, security, fraud prevention, dispute handling, payment verification, refund handling, or backup preservation.",
    "notesTitle": "Important notes",
    "notes": [
      "Deleting the app or clearing local browser data does not by itself delete your Shadow Economy account.",
      "Deleted report credits, saved reports, and cloud data may not be recoverable.",
      "Report credits are consumable digital items. Credits already used to unlock a report are not restored as unused credits.",
      "Refund requests for app-store purchases are handled under Apple App Store or Google Play policies and procedures."
    ],
    "policyPrefix": "For more detail, review the",
    "policyMiddle": "and",
  },
  "fr": {
    "title": "Suppression de compte",
    "intro": "Vous pouvez supprimer votre compte Shadow Economy dans l'application ou demander la suppression par e-mail. Cette page explique la procédure publique de suppression de compte pour les utilisateurs et les équipes de vérification des apps.",
    "inAppTitle": "Supprimez votre compte dans l'application",
    "steps": [
      "Ouvrez Shadow Economy.",
      "Connectez-vous au compte que vous souhaitez supprimer.",
      "Ouvrez Paramètres → Compte → Supprimer le compte.",
      "Lisez la confirmation et confirmez la suppression."
    ],
    "emailTitle": "Demande par e-mail",
    "emailBody": "Si vous ne pouvez pas accéder à l'application, envoyez un e-mail à Shadow Economy à partir de l'adresse e-mail liée à votre compte et demandez la suppression du compte.",
    "deletedTitle": "Que se passe-t-il après la suppression",
    "deletedBody": "La progression du jeu cloud, les crédits de rapport, les rapports enregistrés et les données de synchronisation sont généralement supprimés ou anonymisés après la suppression du compte, sauf lorsque la conservation est requise par la loi, la sécurité, la prévention de la fraude, la gestion des litiges, la vérification des paiements, la gestion des remboursements ou la conservation des sauvegardes.",
    "notesTitle": "Remarques importantes",
    "notes": [
      "La suppression de l'application ou la suppression des données du navigateur local ne supprime pas en soi votre compte Shadow Economy.",
      "Les crédits de rapport supprimés, les rapports enregistrés et les données cloud peuvent ne pas être récupérables.",
      "Les crédits de rapport sont des éléments numériques consommables. Les crédits déjà utilisés pour débloquer un rapport ne sont pas restitués en tant que crédits inutilisés.",
      "Les demandes de remboursement pour les achats sur l'App Store sont traitées conformément aux politiques et procédures Apple App Store ou Google Play."
    ],
    "policyPrefix": "Pour plus de détails, consultez le",
    "policyMiddle": "et",
  },
  "de": {
    "title": "Kontolöschung",
    "intro": "Sie können Ihr Shadow Economy-Konto in der App löschen oder die Löschung per E-Mail beantragen. Diese Seite erklärt den öffentlichen Kontolöschungsprozess für Nutzer und App-Prüfer.",
    "inAppTitle": "Löschen Sie Ihr Konto in der App",
    "steps": [
      "Öffnen Sie Shadow Economy.",
      "Melden Sie sich bei dem Konto an, das Sie löschen möchten.",
      "Öffnen Sie Einstellungen → Konto → Konto löschen.",
      "Lesen Sie die Bestätigung und bestätigen Sie den Löschvorgang."
    ],
    "emailTitle": "E-Mail-Anfrage",
    "emailBody": "Wenn Sie nicht auf die App zugreifen können, senden Sie eine E-Mail an Shadow Economy von der mit Ihrem Konto verknüpften E-Mail-Adresse und fordern Sie die Löschung des Kontos an.",
    "deletedTitle": "Was passiert nach dem Löschen?",
    "deletedBody": "Cloud-Spielfortschritte, Berichtsguthaben, gespeicherte Berichte und Synchronisierungsdaten werden im Allgemeinen nach der Kontolöschung gelöscht oder anonymisiert, es sei denn, die Aufbewahrung ist gesetzlich, aus Sicherheitsgründen, zur Betrugsprävention, zur Streitbeilegung, zur Zahlungsüberprüfung, zur Rückerstattungsabwicklung oder zur Aufbewahrung von Backups erforderlich.",
    "notesTitle": "Wichtige Hinweise",
    "notes": [
      "Durch das Löschen der App oder das Löschen lokaler Browserdaten wird Ihr Shadow Economy-Konto nicht automatisch gelöscht.",
      "Gelöschte Berichtsguthaben, gespeicherte Berichte und Cloud-Daten können möglicherweise nicht wiederhergestellt werden.",
      "Berichtsguthaben sind digitale Verbrauchsgegenstände. Bereits zum Entsperren eines Berichts verwendete Credits werden nicht als ungenutzte Credits wiederhergestellt.",
      "Rückerstattungsanträge für App-Store-Käufe werden gemäß den Richtlinien und Verfahren des Apple App Store oder von Google Play bearbeitet."
    ],
    "policyPrefix": "Weitere Einzelheiten finden Sie in der",
    "policyMiddle": "und",
  },
  "ru": {
    "title": "Удаление аккаунта",
    "intro": "Вы можете удалить свой аккаунт Shadow Economy в приложении или запросить удаление по электронной почте. На этой странице описан публичный процесс удаления аккаунта для пользователей и проверяющих приложений.",
    "inAppTitle": "Удалить аккаунт в приложении",
    "steps": [
      "Откройте Shadow Economy.",
      "Войдите в аккаунт, который хотите удалить.",
      "Откройте «Настройки» → «Аккаунт» → «Удалить аккаунт».",
      "Прочтите подтверждение и подтвердите удаление."
    ],
    "emailTitle": "Запрос по электронной почте",
    "emailBody": "Если вы не можете получить доступ к приложению, отправьте электронное письмо Shadow Economy с адреса электронной почты, связанного с вашим аккаунтом, и запросите удаление аккаунта.",
    "deletedTitle": "Что происходит после удаления",
    "deletedBody": "Прогресс в облачной игре, кредиты для отчётов, сохранённые отчёты и данные синхронизации обычно удаляются или анонимизируются после удаления аккаунта, за исключением случаев, когда сохранение требуется по закону, безопасности, предотвращению мошенничества, разрешению споров, проверке платежей, обработке возмещения или сохранению резервной копии.",
    "notesTitle": "Важные примечания",
    "notes": [
      "Удаление приложения или очистка данных локального браузера само по себе не приводит к удалению вашего аккаунта Shadow Economy.",
      "Удалённые кредиты для отчётов, сохранённые отчёты и облачные данные невозможно восстановить.",
      "Кредиты для отчётов — это расходуемые цифровые предметы. Кредиты, уже использованные для разблокировки отчёта, не восстанавливаются как неиспользованные кредиты.",
      "Запросы на возврат средств за покупки в магазине приложений обрабатываются в соответствии с политиками и процедурами Apple App Store или Google Play."
    ],
    "policyPrefix": "Для более подробной информации ознакомьтесь с",
    "policyMiddle": "и",
  },
  "ar": {
    "title": "حذف الحساب",
    "intro": "يمكنك حذف حساب Shadow Economy من داخل التطبيق أو طلب الحذف عبر البريد الإلكتروني. توضّح هذه الصفحة مسار حذف الحساب المتاح للمستخدمين ومراجعي التطبيق.",
    "inAppTitle": "احذف حسابك في التطبيق",
    "steps": [
      "افتح Shadow Economy.",
      "قم بتسجيل الدخول إلى الحساب الذي تريد حذفه.",
      "افتح الإعدادات ← الحساب ← حذف الحساب.",
      "اقرأ التأكيد وأكد الحذف."
    ],
    "emailTitle": "طلب البريد الإلكتروني",
    "emailBody": "إذا لم تتمكن من الوصول إلى التطبيق، فأرسل بريدًا إلكترونيًا إلى Shadow Economy من عنوان البريد الإلكتروني المرتبط بحسابك واطلب حذف الحساب.",
    "deletedTitle": "ماذا يحدث بعد الحذف",
    "deletedBody": "يتم عمومًا حذف التقدم في اللعبة السحابية، وأرصدة التقارير، والتقارير المحفوظة، وبيانات المزامنة أو إخفاء هويتها بعد حذف الحساب، باستثناء الحالات التي يكون فيها الاحتفاظ مطلوبًا بموجب القانون، أو الأمن، أو منع الاحتيال، أو التعامل مع النزاعات، أو التحقق من الدفع، أو معالجة استرداد الأموال، أو الاحتفاظ بنسخة احتياطية.",
    "notesTitle": "ملاحظات مهمة",
    "notes": [
      "لا يؤدي حذف التطبيق أو مسح بيانات المتصفح المحلي في حد ذاته إلى حذف حساب Shadow Economy الخاص بك.",
      "قد لا تكون أرصدة التقارير المحذوفة والتقارير المحفوظة والبيانات السحابية قابلة للاسترداد.",
      "أرصدة التقارير هي عناصر رقمية قابلة للاستهلاك. لا تتم استعادة الأرصدة المستخدمة بالفعل لفتح التقرير كأرصدة غير مستخدمة.",
      "تتم معالجة طلبات استرداد الأموال الخاصة بمشتريات متجر التطبيقات بموجب سياسات وإجراءات Apple App Store أو Google Play."
    ],
    "policyPrefix": "لمزيد من التفاصيل، قم بمراجعة",
    "policyMiddle": "و",
  },
  "pt": {
    "title": "Exclusão de conta",
    "intro": "Você pode excluir sua conta Shadow Economy no aplicativo ou solicitar a exclusão por e-mail. Esta página explica o processo público de exclusão de conta para usuários e revisores do app.",
    "inAppTitle": "Exclua sua conta no aplicativo",
    "steps": [
      "Abra Shadow Economy.",
      "Faça login na conta que deseja excluir.",
      "Abra Configurações → Conta → Excluir conta.",
      "Leia a confirmação e confirme a exclusão."
    ],
    "emailTitle": "Solicitação por e-mail",
    "emailBody": "Se você não conseguir acessar o aplicativo, envie um e-mail para Shadow Economy do endereço de e-mail vinculado à sua conta e solicite a exclusão da conta.",
    "deletedTitle": "O que acontece após a exclusão",
    "deletedBody": "O progresso do jogo na nuvem, os créditos dos relatórios, os relatórios salvos e os dados de sincronização são geralmente excluídos ou tornados anônimos após a exclusão da conta, exceto quando a retenção for exigida por lei, segurança, prevenção de fraudes, tratamento de disputas, verificação de pagamento, tratamento de reembolso ou preservação de backup.",
    "notesTitle": "Notas importantes",
    "notes": [
      "Excluir o aplicativo ou limpar os dados do navegador local não exclui, por si só, sua conta Shadow Economy.",
      "Os créditos de relatórios excluídos, os relatórios salvos e os dados na nuvem podem não ser recuperáveis.",
      "Os créditos de relatório são itens digitais consumíveis. Os créditos já utilizados para desbloquear um relatório não são restaurados como créditos não utilizados.",
      "As solicitações de reembolso para compras na app store são tratadas de acordo com as políticas e procedimentos Apple App Store ou Google Play."
    ],
    "policyPrefix": "Para mais detalhes, revise o",
    "policyMiddle": "e",
  },
  "it": {
    "title": "Cancellazione dell'account",
    "intro": "Puoi eliminare il tuo account Shadow Economy nell'app o richiederne l'eliminazione via e-mail. Questa pagina spiega la procedura pubblica di eliminazione dell'account per utenti e revisori dell'app.",
    "inAppTitle": "Elimina il tuo account nell'app",
    "steps": [
      "Apri Shadow Economy.",
      "Accedi all'account che desideri eliminare.",
      "Apri Impostazioni → Account → Elimina account.",
      "Leggi la conferma e conferma la cancellazione."
    ],
    "emailTitle": "Richiesta e-mail",
    "emailBody": "Se non riesci ad accedere all'app, invia un'e-mail a Shadow Economy dall'indirizzo e-mail collegato al tuo account e richiedi la cancellazione dell'account.",
    "deletedTitle": "Cosa succede dopo la cancellazione",
    "deletedBody": "I progressi di gioco nel cloud, i crediti dei report, i report salvati e i dati di sincronizzazione vengono generalmente eliminati o resi anonimi dopo l'eliminazione dell'account, tranne nei casi in cui la conservazione è richiesta dalla legge, dalla sicurezza, dalla prevenzione delle frodi, dalla gestione delle controversie, dalla verifica dei pagamenti, dalla gestione dei rimborsi o dalla conservazione dei backup.",
    "notesTitle": "Note importanti",
    "notes": [
      "L'eliminazione dell'app o la cancellazione dei dati del browser locale non elimina di per sé il tuo account Shadow Economy.",
      "I crediti dei report eliminati, i report salvati e i dati cloud potrebbero non essere recuperabili.",
      "I crediti dei report sono elementi digitali consumabili. I crediti già utilizzati per sbloccare un report non vengono ripristinati come crediti inutilizzati.",
      "Le richieste di rimborso per gli acquisti effettuati sull'app store vengono gestite in base alle politiche e procedure Apple App Store o Google Play."
    ],
    "policyPrefix": "Per maggiori dettagli, consulta",
    "policyMiddle": "e",
  },
  "nl": {
    "title": "Accountverwijdering",
    "intro": "Je kunt je Shadow Economy-account in de app verwijderen of per e-mail om verwijdering vragen. Deze pagina beschrijft het openbare proces voor accountverwijdering voor gebruikers en app-reviewers.",
    "inAppTitle": "Verwijder je account in de app",
    "steps": [
      "Open Shadow Economy.",
      "Log in op het account dat je wilt verwijderen.",
      "Open Instellingen → Account → Account verwijderen.",
      "Lees de bevestiging en bevestig de verwijdering."
    ],
    "emailTitle": "Verzoek per e-mail",
    "emailBody": "Als je geen toegang hebt tot de app, mail Shadow Economy dan vanaf het e-mailadres dat aan je account is gekoppeld en vraag om accountverwijdering.",
    "deletedTitle": "Wat gebeurt er na verwijdering",
    "deletedBody": "Voortgang van cloudgames, rapportcredits, opgeslagen rapporten en synchronisatiegegevens worden over het algemeen verwijderd of geanonimiseerd na het verwijderen van een account, behalve wanneer bewaring vereist is door de wet, beveiliging, fraudepreventie, geschillenbehandeling, betalingsverificatie, afhandeling van terugbetalingen of het bewaren van back-ups.",
    "notesTitle": "Belangrijke opmerkingen",
    "notes": [
      "Als je de app verwijdert of lokale browsergegevens wist, wordt je Shadow Economy-account niet automatisch verwijderd.",
      "Verwijderde rapportcredits, opgeslagen rapporten en cloudgegevens kunnen mogelijk niet worden hersteld.",
      "Rapportcredits zijn digitale verbruiksartikelen. Tegoeden die al zijn gebruikt om een ​​rapport te ontgrendelen, worden niet hersteld als ongebruikte tegoeden.",
      "Terugbetalingsverzoeken voor aankopen in de app-store worden afgehandeld volgens het beleid en de procedures van Apple App Store of Google Play."
    ],
    "policyPrefix": "Voor meer informatie, raadpleeg",
    "policyMiddle": "en",
  },
  "id": {
    "title": "Penghapusan Akun",
    "intro": "Anda dapat menghapus akun Shadow Economy Anda di aplikasi atau meminta penghapusan melalui email. Halaman ini menjelaskan proses penghapusan akun yang tersedia untuk pengguna dan peninjau aplikasi.",
    "inAppTitle": "Hapus akun Anda di aplikasi",
    "steps": [
      "Buka Shadow Economy.",
      "Masuk ke akun yang ingin Anda hapus.",
      "Buka Pengaturan → Akun → Hapus Akun.",
      "Baca konfirmasi dan konfirmasi penghapusan."
    ],
    "emailTitle": "Permintaan email",
    "emailBody": "Jika Anda tidak dapat mengakses aplikasi, kirim email ke Shadow Economy dari alamat email yang tertaut ke akun Anda dan minta penghapusan akun.",
    "deletedTitle": "Apa yang terjadi setelah penghapusan",
    "deletedBody": "Kemajuan game cloud, kredit laporan, laporan tersimpan, dan data sinkronisasi umumnya dihapus atau dianonimkan setelah penghapusan akun, kecuali jika penyimpanan diwajibkan oleh hukum, keamanan, pencegahan penipuan, penanganan perselisihan, verifikasi pembayaran, penanganan pengembalian dana, atau penyimpanan cadangan.",
    "notesTitle": "Catatan penting",
    "notes": [
      "Menghapus aplikasi atau menghapus data browser lokal tidak dengan sendirinya menghapus akun Shadow Economy Anda.",
      "Kredit laporan yang dihapus, laporan tersimpan, dan data cloud mungkin tidak dapat dipulihkan.",
      "Kredit laporan adalah item digital habis pakai. Kredit yang telah digunakan untuk membuka laporan tidak dikembalikan sebagai kredit yang belum digunakan.",
      "Permintaan pengembalian dana untuk pembelian toko aplikasi ditangani berdasarkan kebijakan dan prosedur Apple App Store atau Google Play."
    ],
    "policyPrefix": "Untuk detail selengkapnya, lihat",
    "policyMiddle": "dan",
  },
  "ko": {
    "title": "계정 삭제",
    "intro": "앱에서 Shadow Economy 계정을 삭제하거나 이메일로 삭제를 요청할 수 있습니다. 이 페이지에서는 사용자와 앱 심사자가 확인할 수 있는 계정 삭제 방법을 안내합니다.",
    "inAppTitle": "앱에서 계정 삭제",
    "steps": [
      "Shadow Economy를 엽니다.",
      "삭제하려는 계정에 로그인하세요.",
      "설정 → 계정 → 계정 삭제를 엽니다.",
      "확인 내용을 읽고 삭제를 확인하세요."
    ],
    "emailTitle": "이메일 요청",
    "emailBody": "앱에 접속할 수 없는 경우, 계정에 연결된 이메일 주소에서 Shadow Economy로 이메일을 보내 계정 삭제를 요청하세요.",
    "deletedTitle": "삭제 후 어떻게 되나요?",
    "deletedBody": "클라우드 게임 진행 상황, 보고서 크레딧, 저장된 보고서 및 동기화 데이터는 법률, 보안, 사기 방지, 분쟁 처리, 결제 확인, 환불 처리 또는 백업 보존에 따라 보관이 필요한 경우를 제외하고 일반적으로 계정 삭제 후 삭제되거나 익명화됩니다.",
    "notesTitle": "중요 사항",
    "notes": [
      "앱을 삭제하거나 로컬 브라우저 데이터를 삭제해도 Shadow Economy 계정 자체가 삭제되지는 않습니다.",
      "삭제된 보고서 크레딧, 저장된 보고서 및 클라우드 데이터는 복구되지 않을 수 있습니다.",
      "보고서 크레딧은 소모성 디지털 항목입니다. 보고서 잠금 해제에 이미 사용된 크레딧은 미사용 크레딧으로 복원되지 않습니다.",
      "앱 스토어 구매에 대한 환불 요청은 Apple App Store 또는 Google Play 정책 및 절차에 따라 처리됩니다."
    ],
    "policyPrefix": "자세한 내용은",
    "policyMiddle": "및",
  },
  "ja": {
    "title": "アカウントの削除",
    "intro": "アプリ内で Shadow Economy アカウントを削除するか、メールで削除をリクエストできます。このページでは、ユーザーおよびストア審査担当者向けに公開しているアカウント削除手順を説明します。",
    "inAppTitle": "アプリ内でアカウントを削除する",
    "steps": [
      "Shadow Economyを開きます。",
      "削除するアカウントにサインインします。",
      "「設定」→「アカウント」→「アカウントの削除」を開きます。",
      "確認を読み、削除を確認します。"
    ],
    "emailTitle": "メールリクエスト",
    "emailBody": "アプリにアクセスできない場合は、アカウントにリンクされているメールアドレスから Shadow Economy にメールを送信し、アカウントの削除をリクエストしてください。",
    "deletedTitle": "削除後に何が起こるか",
    "deletedBody": "クラウドゲームの進行状況、レポートクレジット、保存されたレポート、および同期データは通常、法律、セキュリティ、詐欺防止、紛争処理、支払い確認、返金処理、またはバックアップ保存によって保持が義務付けられている場合を除き、アカウント削除後に削除または匿名化されます。",
    "notesTitle": "重要な注意事項",
    "notes": [
      "アプリを削除したり、ローカルブラウザデータを消去しても、それだけでは Shadow Economy アカウントは削除されません。",
      "削除されたレポートクレジット、保存されたレポート、クラウドデータは回復できない場合があります。",
      "レポートクレジットは消耗品のデジタルアイテムです。レポートのロックを解除するためにすでに使用されているクレジットは、未使用のクレジットとして復元されません。",
      "アプリストアでの購入に対する返金リクエストは、Apple App Store または Google Play のポリシーと手順に基づいて処理されます。"
    ],
    "policyPrefix": "詳しくは",
    "policyMiddle": "および",
  },
  "zh": {
    "title": "删除账户",
    "intro": "您可以在应用中删除您的 Shadow Economy 账户或通过电子邮件请求删除。本页说明用户和应用审核人员可查看的账户删除方式。",
    "inAppTitle": "在应用中删除账户",
    "steps": [
      "打开 Shadow Economy。",
      "登录您要删除的账户。",
      "打开设置 → 账户 → 删除账户。",
      "阅读确认信息并确认删除。"
    ],
    "emailTitle": "电子邮件请求",
    "emailBody": "如果您无法访问该应用，请使用与您的账户关联的电子邮件地址向 Shadow Economy 发送电子邮件并请求删除账户。",
    "deletedTitle": "删除后会发生什么",
    "deletedBody": "云游戏进度、报告积分、保存的报告和同步数据通常会在账户删除后被删除或匿名化，除非法律、安全、防欺诈、争议处理、付款验证、退款处理或备份保存要求保留。",
    "notesTitle": "重要提示",
    "notes": [
      "删除应用或清除本地浏览器数据本身并不会删除您的 Shadow Economy 账户。",
      "删除的报告积分、保存的报告和云数据可能无法恢复。",
      "报告积分属于消耗性数字项目。已用于解锁报告的积分不会恢复为未使用的积分。",
      "应用商店购买的退款请求根据 Apple App Store 或 Google Play 政策和程序进行处理。"
    ],
    "policyPrefix": "有关更多详细信息，请查看",
    "policyMiddle": "和",
  },
  "es": {
    "title": "Eliminación de cuenta",
    "intro": "Puedes eliminar tu cuenta de Shadow Economy en la app o solicitar la eliminación por correo electrónico. Esta página explica el proceso de eliminación de cuenta para usuarios y revisores de la app.",
    "inAppTitle": "Elimina tu cuenta en la app",
    "steps": [
      "Abre Shadow Economy.",
      "Inicia sesión en la cuenta que quieres eliminar.",
      "Abre Configuración → Cuenta → Eliminar cuenta.",
      "Lee la confirmación y confirma la eliminación."
    ],
    "emailTitle": "Solicitud por correo electrónico",
    "emailBody": "Si no puedes acceder a la app, escribe a Shadow Economy desde la dirección de correo vinculada a tu cuenta y solicita la eliminación de la cuenta.",
    "deletedTitle": "¿Qué sucede después de la eliminación?",
    "deletedBody": "El progreso del juego en la nube, los créditos de los informes, los informes guardados y los datos de sincronización generalmente se eliminan o se anonimizan después de la eliminación de la cuenta, excepto cuando la ley, la seguridad, la prevención de fraude, el manejo de disputas, la verificación de pagos, el manejo de reembolsos o la preservación de copias de seguridad exigen su retención.",
    "notesTitle": "Notas importantes",
    "notes": [
      "Eliminar la app o borrar los datos locales del navegador no elimina por sí solo tu cuenta Shadow Economy.",
      "Es posible que los créditos de informes eliminados, los informes guardados y los datos de la nube no se puedan recuperar.",
      "Los créditos de informes son artículos digitales consumibles. Los créditos ya utilizados para desbloquear un informe no se restauran como créditos no utilizados.",
      "Las solicitudes de reembolso para compras en tiendas de aplicaciones se manejan según las políticas y procedimientos Apple App Store o Google Play."
    ],
    "policyPrefix": "Para más detalles, revisa",
    "policyMiddle": "y",
  },
  "sv": {
    "title": "Radering av konto",
    "intro": "Du kan ta bort ditt Shadow Economy-konto i appen eller begära radering via e-post. Den här sidan beskriver den offentliga kontoraderingsprocessen för användare och appgranskare.",
    "inAppTitle": "Ta bort ditt konto i appen",
    "steps": [
      "Öppna Shadow Economy.",
      "Logga in på kontot du vill ta bort.",
      "Öppna Inställningar → Konto → Ta bort konto.",
      "Läs bekräftelsen och bekräfta raderingen."
    ],
    "emailTitle": "E-postförfrågan",
    "emailBody": "Om du inte kan komma åt appen, skicka e-post till Shadow Economy från den e-postadress som är länkad till ditt konto och begär att kontot raderas.",
    "deletedTitle": "Vad händer efter radering",
    "deletedBody": "Molnspelets framsteg, rapportkrediter, sparade rapporter och synkroniseringsdata raderas eller anonymiseras vanligtvis efter borttagning av kontot, utom där lagring krävs enligt lag, säkerhet, bedrägeriförebyggande, tvisthantering, betalningsverifiering, återbetalningshantering eller säkerhetskopiering.",
    "notesTitle": "Viktigt att veta",
    "notes": [
      "Att ta bort appen eller rensa lokal webbläsardata tar inte i sig bort ditt Shadow Economy-konto.",
      "Raderade rapportkrediter, sparade rapporter och molndata kanske inte kan återställas.",
      "Rapportkrediter är digitala förbrukningsartiklar. Krediter som redan använts för att låsa upp en rapport återställs inte som oanvända krediter.",
      "Återbetalningsbegäranden för köp i appbutiker hanteras enligt Apple App Store eller Google Play policyer och procedurer."
    ],
    "policyPrefix": "För mer information, se",
    "policyMiddle": "och",
  }
}

export function AccountDeletionPage() {
  const { lang } = useLanguage()
  const tx = content[lang]
  const nav = siteNav[lang]

  return (
    <Layout>
      <div className={`${TEXT_SECTION} py-12 sm:py-16`}>
        <h1 className="text-3xl font-bold text-white mb-4">{tx.title}</h1>
        <p className="text-sm text-gray-400 leading-relaxed mb-8">{tx.intro}</p>

        <section className="rounded-xl border border-gray-800 bg-gray-900/40 p-5 sm:p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">{tx.inAppTitle}</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-400">
            {tx.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{tx.emailTitle}</h2>
            <p>{tx.emailBody}</p>
            <a href="mailto:contact@shadoweconomyapp.com" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-400">
              contact@shadoweconomyapp.com
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{tx.deletedTitle}</h2>
            <p>{tx.deletedBody}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{tx.notesTitle}</h2>
            <ul className="list-disc list-inside space-y-2">
              {tx.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-gray-600">
            {tx.policyPrefix}{' '}
            <Link to="/privacy" className="text-amber-400 hover:text-amber-300">{nav.footerPrivacy}</Link>
            {' '}{tx.policyMiddle}{' '}
            <Link to="/terms" className="text-amber-400 hover:text-amber-300">{nav.footerTerms}</Link>.
          </p>
        </section>
      </div>
    </Layout>
  )
}
