import { Layout } from '../components/Layout'
import { linkifyText } from '../components/LinkedText'
import { TEXT_SECTION } from '../constants/layout'
import { useLanguage } from '../context/LanguageContext'

type Faq = { q: string; a: string }

const content: Record<string, { title: string; faqTitle: string; faqs: Faq[]; contactTitle: string; contactBody: string; contactNote?: string }> = {
  "en": {
    "title": "Support",
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "How do I sync my game across devices?",
        "a": "Create an account and sign in on each device. Your game state syncs to that account when the app syncs after gameplay changes."
      },
      {
        "q": "Can I restore report credits?",
        "a": "Report credits are tied to the Shadow Economy account that was signed in when checkout completed. Sign in with the same app account. If a completed purchase does not appear, contact Shadow Economy with your App Store or Google Play receipt. Because report credits are consumable, credits already used to unlock a report cannot be restored as unused credits."
      },
      {
        "q": "Can you access my report?",
        "a": "Reports are generated for your account from completed gameplay data. Shadow Economy does not review individual saved report content except where necessary for service operation, security, customer support, legal compliance, or handling your request."
      },
      {
        "q": "I purchased report credits but they are not showing.",
        "a": "Restart the app and make sure you are signed in to the same Shadow Economy account used during purchase. If the issue persists, contact Shadow Economy with your App Store or Google Play purchase receipt and Shadow Economy will review it manually."
      },
      {
        "q": "How do I delete my account?",
        "a": "Open the in-app menu, go to Settings → Account → Delete Account, or email contact@shadoweconomyapp.com from the email address linked to your account. Account deletion generally deletes or anonymizes cloud game data, report credits, saved reports, and sync data except where retention is required by law, security, fraud prevention, dispute handling, payment verification, refund handling, or backups."
      },
      {
        "q": "The game is showing a blank screen.",
        "a": "Restart the app, check for updates, and confirm your network connection. On Android, clearing the app cache may also help. If the issue continues, contact Shadow Economy."
      }
    ],
    "contactTitle": "Contact Shadow Economy",
    "contactBody": "Can't find your answer? Email us and we'll reply within 1–2 business days where possible."
  },
  "ko": {
    "title": "지원",
    "faqTitle": "자주 묻는 질문",
    "faqs": [
      {
        "q": "여러 기기에서 게임을 어떻게 동기화하나요?",
        "a": "계정을 만들고 각 기기에서 로그인하세요. 게임 플레이 변경 후 앱이 동기화되면 진행 상태가 해당 계정에 저장됩니다."
      },
      {
        "q": "보고서 크레딧을 복원할 수 있나요?",
        "a": "보고서 크레딧은 결제 완료 시 로그인한 Shadow Economy 계정에 연결되어 있습니다. 동일한 앱 계정으로 로그인하세요. 완료된 구매 내역이 표시되지 않으면 App Store 또는 Google Play 영수증을 가지고 Shadow Economy에 문의하세요. 보고서 크레딧은 소모 가능하므로 보고서 잠금 해제에 이미 사용된 크레딧은 미사용 크레딧으로 복원할 수 없습니다."
      },
      {
        "q": "Shadow Economy가 제 보고서에 접근할 수 있나요?",
        "a": "완료된 게임 플레이 데이터를 바탕으로 계정 보고서가 생성됩니다. Shadow Economy는 서비스 운영, 보안, 고객 지원, 법률 준수 또는 요청 처리에 필요한 경우를 제외하고 저장된 개별 보고서 내용을 검토하지 않습니다."
      },
      {
        "q": "보고서 크레딧을 구매했지만 표시되지 않습니다.",
        "a": "앱을 다시 시작하고 구매 시 사용한 것과 동일한 Shadow Economy 계정으로 로그인했는지 확인하세요. 문제가 지속되는 경우 App Store 또는 Google Play 구매 영수증을 가지고 Shadow Economy에 문의하시면 Shadow Economy에서 수동으로 검토해 드립니다."
      },
      {
        "q": "내 계정을 어떻게 삭제하나요?",
        "a": "인앱 메뉴를 열고 설정 → 계정 → 계정 삭제로 이동하거나, 계정에 연결된 이메일 주소에서 contact@shadoweconomyapp.com로 이메일을 보내세요. 계정 삭제는 법률, 보안, 사기 방지, 분쟁 처리, 결제 확인, 환불 처리 또는 백업에 따라 보존이 필요한 경우를 제외하고 일반적으로 클라우드 게임 데이터, 보고서 크레딧, 저장된 보고서 및 동기화 데이터를 삭제하거나 익명화합니다."
      },
      {
        "q": "게임에 빈 화면이 표시됩니다.",
        "a": "앱을 다시 시작하고, 업데이트를 확인하고, 네트워크 연결을 확인하세요. Android에서는 앱 캐시를 지우는 것도 도움이 될 수 있습니다. 문제가 계속되면 Shadow Economy에 문의하세요."
      }
    ],
    "contactTitle": "Shadow Economy에 문의하세요",
    "contactBody": "원하는 답을 찾지 못하셨나요? 이메일을 보내 주시면 가능한 경우 영업일 기준 1~2일 이내에 답변드리겠습니다."
  },
  "ja": {
    "title": "サポート",
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "デバイス間でゲームを同期するにはどうすればよいですか?",
        "a": "アカウントを作成し、各デバイスでサインインします。ゲームプレイの変更後にアプリが同期されると、ゲームの状態がそのアカウントに同期されます。"
      },
      {
        "q": "レポートクレジットを復元できますか?",
        "a": "レポートクレジットは、チェックアウト完了時にサインインした Shadow Economy アカウントに関連付けられます。同じアプリアカウントでサインインします。完了した購入が表示されない場合は、App Store または Google Play の領収書を添えて Shadow Economy にご連絡ください。レポートクレジットは消耗品であるため、レポートのロックを解除するためにすでに使用されているクレジットを未使用のクレジットとして復元することはできません。"
      },
      {
        "q": "Shadow Economy は私のレポートにアクセスできますか？",
        "a": "完了したゲームプレイデータをもとに、アカウント向けのレポートが生成されます。Shadow Economy は、サービス運営、セキュリティ、カスタマーサポート、法令遵守、またはリクエスト対応に必要な場合を除き、保存済みの個別レポート内容を確認しません。"
      },
      {
        "q": "レポートクレジットを購入しましたが、表示されません。",
        "a": "アプリを再起動し、購入時に使用したのと同じ Shadow Economy アカウントにサインインしていることを確認します。問題が解決しない場合は、App Store または Google Play の購入レシートを添えて Shadow Economy にご連絡ください。Shadow Economy が手動で確認します。"
      },
      {
        "q": "アカウントを削除するにはどうすればよいですか?",
        "a": "アプリ内メニューを開き、「設定」→「アカウント」→「アカウントの削除」に移動するか、アカウントにリンクされているメールアドレスから contact@shadoweconomyapp.com にメールを送信してください。アカウントを削除すると、通常、法律、セキュリティ、詐欺防止、紛争処理、支払い確認、返金処理、またはバックアップによって保持が義務付けられている場合を除き、クラウドゲームデータ、レポートクレジット、保存されたレポート、および同期データが削除または匿名化されます。"
      },
      {
        "q": "ゲームに空白の画面が表示されます。",
        "a": "アプリを再起動し、アップデートを確認し、ネットワーク接続を確認します。 Android では、アプリのキャッシュをクリアすることも役立つ場合があります。問題が解決しない場合は、Shadow Economy にお問い合わせください。"
      }
    ],
    "contactTitle": "お問い合わせ",
    "contactBody": "お探しの答えが見つかりませんか？メールをお送りいただければ、可能な限り 1〜2 営業日以内にご返信します。"
  },
  "zh": {
    "title": "帮助与支持",
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "如何跨设备同步我的游戏？",
        "a": "创建账户并在每台设备上登录。当游戏更改后应用同步时，您的游戏状态会同步到该账户。"
      },
      {
        "q": "我可以恢复报告积分吗？",
        "a": "报告积分与结账完成时登录的 Shadow Economy 账户绑定。使用同一应用账户登录。如果未显示已完成的购买，请使用您的 App Store 或 Google Play 收据联系 Shadow Economy。由于报告积分是消耗性的，已用于解锁报告的积分无法恢复为未使用的积分。"
      },
      {
        "q": "Shadow Economy 可以访问我的报告吗？",
        "a": "报告会根据已完成的游戏数据为您的账户生成。除非服务运营、安全、客户支持、法律合规或处理您的请求确有必要，Shadow Economy 不会查看单个已保存报告的内容。"
      },
      {
        "q": "我购买了报告积分，但它们没有显示。",
        "a": "重新启动应用并确保您登录到购买时使用的同一个 Shadow Economy 账户。如果问题仍然存在，请携带您的 App Store 或 Google Play 购买收据联系 Shadow Economy，Shadow Economy 将手动审核。"
      },
      {
        "q": "如何删除我的账户？",
        "a": "打开应用内菜单，转至设置 → 账户 → 删除账户，或通过与您账户关联的电子邮件地址向 contact@shadoweconomyapp.com 发送电子邮件。账户删除通常会删除或匿名化云游戏数据、报告积分、保存的报告和同步数据，除非法律、安全、欺诈预防、争议处理、付款验证、退款处理或备份要求保留。"
      },
      {
        "q": "游戏显示空白屏幕。",
        "a": "重新启动应用，检查更新并确认您的网络连接。在 Android 上，清除应用缓存也可能有所帮助。如果问题仍然存在，请联系 Shadow Economy。"
      }
    ],
    "contactTitle": "联系 Shadow Economy",
    "contactBody": "没有找到您要的答案？给我们发送电子邮件，我们会尽可能在 1-2 个工作日内回复。"
  },
  "es": {
    "title": "Soporte",
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo sincronizo mi juego entre dispositivos?",
        "a": "Crea una cuenta e inicia sesión en cada dispositivo. Cuando la app se sincroniza después de cambios en la partida, tu progreso queda asociado a esa cuenta."
      },
      {
        "q": "¿Puedo restaurar los créditos del informe?",
        "a": "Los créditos del informe están vinculados a la cuenta Shadow Economy en la que se inició sesión cuando se completó el pago. Inicia sesión con la misma cuenta de la app. Si no aparece una compra completada, contacta con Shadow Economy con tu recibo de App Store o Google Play. Como los créditos del informe son consumibles, los créditos que ya se utilizaron para desbloquear un informe no se pueden restaurar como créditos no utilizados."
      },
      {
        "q": "¿Shadow Economy puede acceder a mi informe?",
        "a": "Los informes se generan para tu cuenta a partir de datos de juego completados. Shadow Economy no revisa el contenido de informes guardados individuales salvo cuando sea necesario para operar el servicio, mantener la seguridad, ofrecer soporte, cumplir la ley o atender tu solicitud."
      },
      {
        "q": "Compré créditos de informe pero no se muestran.",
        "a": "Reinicia la app y asegúrate de haber iniciado sesión en la misma cuenta Shadow Economy utilizada durante la compra. Si el problema persiste, contacta con Shadow Economy con tu recibo de compra de App Store o Google Play y Shadow Economy lo revisará manualmente."
      },
      {
        "q": "¿Cómo elimino mi cuenta?",
        "a": "Abre el menú de la app, ve a Configuración → Cuenta → Eliminar cuenta, o envía un correo a contact@shadoweconomyapp.com desde la dirección vinculada a tu cuenta. La eliminación de una cuenta generalmente elimina o anonimiza los datos del juego en la nube, los créditos de informes, los informes guardados y los datos de sincronización, excepto cuando la ley, la seguridad, la prevención de fraude, el manejo de disputas, la verificación de pagos, el manejo de reembolsos o las copias de seguridad exigen su retención."
      },
      {
        "q": "El juego muestra una pantalla en blanco.",
        "a": "Reinicia la app, busca actualizaciones y confirma tu conexión de red. En Android, borrar el caché de la aplicación también puede ser útil. Si el problema continúa, contacta con Shadow Economy."
      }
    ],
    "contactTitle": "Contacto Shadow Economy",
    "contactBody": "¿No encuentras tu respuesta? Escríbenos por correo electrónico y te responderemos en un plazo de 1 a 2 días hábiles siempre que sea posible."
  },
  "sv": {
    "title": "Support",
    "faqTitle": "Vanliga frågor",
    "faqs": [
      {
        "q": "Hur synkroniserar jag mitt spel mellan enheter?",
        "a": "Skapa ett konto och logga in på varje enhet. Din spelstatus synkroniseras med det kontot när appen synkroniseras efter att spelet ändras."
      },
      {
        "q": "Kan jag återställa rapportkrediter?",
        "a": "Rapportkrediter är kopplade till Shadow Economy-kontot som var inloggat när köpet slutfördes. Logga in med samma appkonto. Om ett genomfört köp inte visas, kontakta Shadow Economy med ditt App Store- eller Google Play-kvitto. Eftersom rapportkrediter är förbrukningsbara kan krediter som redan använts för att låsa upp en rapport inte återställas som oanvända krediter."
      },
      {
        "q": "Kan du komma åt min rapport?",
        "a": "Rapporter skapas för ditt konto från slutförda speldata. Shadow Economy granskar inte innehållet i enskilda sparade rapporter utom när det behövs för drift av tjänsten, säkerhet, kundsupport, juridisk efterlevnad eller för att hantera din begäran."
      },
      {
        "q": "Jag köpte rapportkrediter men de visas inte.",
        "a": "Starta om appen och se till att du är inloggad på samma Shadow Economy-konto som användes vid köpet. Om problemet kvarstår, kontakta Shadow Economy med ditt App Store eller Google Play inköpskvitto och Shadow Economy kommer att granska det manuellt."
      },
      {
        "q": "Hur tar jag bort mitt konto?",
        "a": "Öppna menyn i appen, gå till Inställningar → Konto → Ta bort konto, eller skicka e-post till contact@shadoweconomyapp.com från den e-postadress som är kopplad till ditt konto. Radering av konto tar i allmänhet bort eller anonymiserar data från molnspel, rapporterar tillgodohavanden, sparade rapporter och synkroniserar data utom där lagring krävs enligt lag, säkerhet, bedrägeriförebyggande, tvisthantering, betalningsverifiering, återbetalningshantering eller säkerhetskopiering."
      },
      {
        "q": "Spelet visar en tom skärm.",
        "a": "Starta om appen, leta efter uppdateringar och bekräfta din nätverksanslutning. På Android kan det också hjälpa att rensa appcachen. Kontakta Shadow Economy om problemet kvarstår."
      }
    ],
    "contactTitle": "Kontakta Shadow Economy",
    "contactBody": "Hittar du inte ditt svar? Mejla oss så svarar vi inom 1–2 arbetsdagar när det är möjligt."
  },
  "fr": {
    "title": "Assistance",
    "faqTitle": "Foire aux questions",
    "faqs": [
      {
        "q": "Comment synchroniser mon jeu sur tous les appareils ?",
        "a": "Créez un compte et connectez-vous sur chaque appareil. Lorsque l'application se synchronise après des changements de partie, votre progression est associée à ce compte."
      },
      {
        "q": "Puis-je restaurer les crédits de rapport ?",
        "a": "Les crédits de rapport sont liés au compte Shadow Economy qui a été connecté une fois le paiement terminé. Connectez-vous avec le même compte d'application. Si un achat finalisé n'apparaît pas, contactez Shadow Economy avec votre reçu App Store ou Google Play. Les crédits de rapport étant des consommables, les crédits déjà utilisés pour débloquer un rapport ne peuvent pas être restaurés en tant que crédits inutilisés."
      },
      {
        "q": "Shadow Economy peut-elle accéder à mon rapport ?",
        "a": "Les rapports sont générés pour votre compte à partir de données de parties terminées. Shadow Economy n'examine pas le contenu de rapports enregistrés individuels, sauf lorsque cela est nécessaire au fonctionnement du service, à la sécurité, au support client, à la conformité légale ou au traitement de votre demande."
      },
      {
        "q": "J'ai acheté des crédits de rapport mais ils ne s'affichent pas.",
        "a": "Redémarrez l'application et assurez-vous que vous êtes connecté au même compte Shadow Economy que celui utilisé lors de l'achat. Si le problème persiste, contactez Shadow Economy avec votre reçu d'achat App Store ou Google Play et Shadow Economy l'examinera manuellement."
      },
      {
        "q": "Comment supprimer mon compte ?",
        "a": "Ouvrez le menu de l'application, accédez à Paramètres → Compte → Supprimer le compte ou envoyez un e-mail à contact@shadoweconomyapp.com à partir de l'adresse e-mail liée à votre compte. La suppression du compte supprime ou anonymise généralement les données de jeu dans le cloud, les crédits de rapport, les rapports enregistrés et les données de synchronisation, sauf lorsque la conservation est requise par la loi, la sécurité, la prévention de la fraude, la gestion des litiges, la vérification des paiements, la gestion des remboursements ou les sauvegardes."
      },
      {
        "q": "Le jeu affiche un écran vide.",
        "a": "Redémarrez l'application, recherchez les mises à jour et confirmez votre connexion réseau. Sur Android, vider le cache de l'application peut également aider. Si le problème persiste, contactez Shadow Economy."
      }
    ],
    "contactTitle": "Contacter Shadow Economy",
    "contactBody": "Vous ne trouvez pas votre réponse ? Écrivez-nous par e-mail et nous vous répondrons sous 1 à 2 jours ouvrables dans la mesure du possible."
  },
  "de": {
    "title": "Unterstützung",
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Wie synchronisiere ich mein Spiel geräteübergreifend?",
        "a": "Erstellen Sie ein Konto und melden Sie sich auf jedem Gerät an. Ihr Spielstand wird mit diesem Konto synchronisiert, wenn die App nach Änderungen im Spiel synchronisiert wird."
      },
      {
        "q": "Kann ich Berichtsguthaben wiederherstellen?",
        "a": "Berichtsguthaben sind an das Shadow Economy-Konto gebunden, mit dem Sie beim Abschluss des Bezahlvorgangs angemeldet waren. Melden Sie sich mit demselben App-Konto an. Wenn kein abgeschlossener Kauf angezeigt wird, wenden Sie sich mit Ihrer App Store- oder Google Play-Quittung an Shadow Economy. Da Guthaben für Berichte verbrauchbar sind, können Guthaben, die bereits zum Entsperren eines Berichts verwendet wurden, nicht als ungenutzte Guthaben wiederhergestellt werden."
      },
      {
        "q": "Können Sie auf meinen Bericht zugreifen?",
        "a": "Berichte werden aus abgeschlossenen Spieldaten für Ihr Konto erstellt. Shadow Economy prüft einzelne gespeicherte Berichtsinhalte nur, wenn dies für den Betrieb des Dienstes, Sicherheit, Kundensupport, rechtliche Compliance oder die Bearbeitung Ihrer Anfrage erforderlich ist."
      },
      {
        "q": "Ich habe Berichtsguthaben erworben, aber sie werden nicht angezeigt.",
        "a": "Starten Sie die App neu und stellen Sie sicher, dass Sie bei demselben Shadow Economy-Konto angemeldet sind, das Sie beim Kauf verwendet haben. Wenn das Problem weiterhin besteht, wenden Sie sich mit Ihrem App Store- oder Google Play-Kaufbeleg an Shadow Economy, und Shadow Economy wird es manuell überprüfen."
      },
      {
        "q": "Wie lösche ich mein Konto?",
        "a": "Öffnen Sie das In-App-Menü, gehen Sie zu Einstellungen → Konto → Konto löschen oder senden Sie eine E-Mail an contact@shadoweconomyapp.com von der mit Ihrem Konto verknüpften E-Mail-Adresse. Durch das Löschen eines Kontos werden im Allgemeinen Cloud-Spieldaten, Berichtsguthaben, gespeicherte Berichte und Synchronisierungsdaten gelöscht oder anonymisiert, es sei denn, die Aufbewahrung ist gesetzlich, aus Sicherheitsgründen, zur Betrugsprävention, zur Streitbeilegung, zur Zahlungsüberprüfung, zur Rückerstattungsabwicklung oder zur Sicherung erforderlich."
      },
      {
        "q": "Das Spiel zeigt einen leeren Bildschirm.",
        "a": "Starten Sie die App neu, suchen Sie nach Updates und bestätigen Sie Ihre Netzwerkverbindung. Unter Android kann auch das Leeren des App-Cache hilfreich sein. Wenn das Problem weiterhin besteht, wenden Sie sich an Shadow Economy."
      }
    ],
    "contactTitle": "Kontaktieren Sie Shadow Economy",
    "contactBody": "Sie finden Ihre Antwort nicht? Schreiben Sie uns eine E-Mail und wir antworten Ihnen nach Möglichkeit innerhalb von 1–2 Werktagen."
  },
  "ru": {
    "title": "Поддержка",
    "faqTitle": "Часто задаваемые вопросы",
    "faqs": [
      {
        "q": "Как синхронизировать игру между устройствами?",
        "a": "Создайте аккаунт и войдите в него на каждом устройстве. Состояние игры синхронизируется с этим аккаунтом, когда приложение синхронизируется после изменений игрового процесса."
      },
      {
        "q": "Могу ли я восстановить кредиты для отчётов?",
        "a": "Кредиты для отчётов привязаны к аккаунту Shadow Economy, в который был выполнен вход при завершении покупки. Войдите с тем же аккаунтом приложения. Если совершенная покупка не отображается, обратитесь в Shadow Economy и предоставьте квитанцию ​​App Store или Google Play. Поскольку кредиты для отчётов расходуются, кредиты, уже использованные для разблокировки отчёта, не могут быть восстановлены как неиспользованные кредиты."
      },
      {
        "q": "Может ли Shadow Economy получить доступ к моему отчёту?",
        "a": "Отчёты создаются для вашего аккаунта на основе завершённых игровых данных. Shadow Economy не просматривает содержимое отдельных сохранённых отчётов, кроме случаев, когда это необходимо для работы сервиса, безопасности, поддержки клиентов, соблюдения закона или обработки вашего запроса."
      },
      {
        "q": "Я приобрел кредиты для отчётов, но они не отображаются.",
        "a": "Перезапустите приложение и убедитесь, что вы вошли в тот же аккаунт Shadow Economy, которая использовалась при покупке. Если проблема не устранена, обратитесь в Shadow Economy, предоставив квитанцию ​​о покупке App Store или Google Play, и Shadow Economy проверит ее вручную."
      },
      {
        "q": "Как удалить аккаунт?",
        "a": "Откройте меню приложения, выберите «Настройки» → «Учетная запись» → «Удалить учетную запись» или отправьте электронное письмо по адресу contact@shadoweconomyapp.com с адреса электронной почты, связанного с вашим аккаунтом. При удалении аккаунта обычно удаляются или анонимизируются данные облачных игр, кредиты для отчётов, сохраненные отчёты и данные синхронизации, за исключением случаев, когда сохранение требуется по закону, безопасности, предотвращению мошенничества, разрешению споров, проверке платежей, обработке возмещения или резервному копированию."
      },
      {
        "q": "Игра показывает пустой экран.",
        "a": "Перезапустите приложение, проверьте наличие обновлений и подтвердите сетевое соединение. На Android также может помочь очистка кеша приложения. Если проблема не исчезнет, ​​обратитесь в Shadow Economy."
      }
    ],
    "contactTitle": "Свяжитесь с Shadow Economy",
    "contactBody": "Не нашли ответ? Напишите нам на электронную почту, и мы ответим в течение 1–2 рабочих дней, когда это возможно."
  },
  "ar": {
    "title": "الدعم",
    "faqTitle": "الأسئلة المتداولة",
    "faqs": [
      {
        "q": "كيف أقوم بمزامنة لعبتي عبر الأجهزة؟",
        "a": "قم بإنشاء حساب وقم بتسجيل الدخول على كل جهاز. تتم مزامنة حالة لعبتك مع هذا الحساب عندما تتم مزامنة التطبيق بعد تغيير طريقة اللعب."
      },
      {
        "q": "هل يمكنني استعادة أرصدة التقارير؟",
        "a": "ترتبط أرصدة التقارير بحساب Shadow Economy الذي تم تسجيل الدخول إليه عند اكتمال عملية الدفع. قم بتسجيل الدخول بنفس حساب التطبيق. إذا لم تظهر عملية الشراء المكتملة، فاتصل بـ Shadow Economy باستخدام إيصال App Store أو Google Play. نظرًا لأن أرصدة التقارير قابلة للاستهلاك، فلا يمكن استعادة الأرصدة المستخدمة بالفعل لفتح التقرير كأرصدة غير مستخدمة."
      },
      {
        "q": "هل يمكن لـ Shadow Economy الوصول إلى تقريري؟",
        "a": "تُنشأ التقارير لحسابك من بيانات لعب مكتملة. لا تراجع Shadow Economy محتوى التقارير المحفوظة الفردية إلا عند الضرورة لتشغيل الخدمة أو الأمان أو دعم العملاء أو الامتثال القانوني أو التعامل مع طلبك."
      },
      {
        "q": "لقد اشتريت أرصدة التقارير لكنها لا تظهر.",
        "a": "أعد تشغيل التطبيق وتأكد من تسجيل الدخول إلى نفس حساب Shadow Economy المستخدم أثناء الشراء. إذا استمرت المشكلة، فاتصل بـ Shadow Economy باستخدام إيصال الشراء App Store أو Google Play وسيقوم Shadow Economy بمراجعته يدويًا."
      },
      {
        "q": "كيف يمكنني حذف حسابي؟",
        "a": "افتح القائمة داخل التطبيق، وانتقل إلى الإعدادات → الحساب → حذف الحساب، أو أرسل بريدًا إلكترونيًا إلى contact@shadoweconomyapp.com من عنوان البريد الإلكتروني المرتبط بحسابك. يؤدي حذف الحساب عمومًا إلى حذف بيانات الألعاب السحابية أو إخفاء هويتها، وأرصدة التقارير، والتقارير المحفوظة، ومزامنة البيانات باستثناء الحالات التي يكون فيها الاحتفاظ مطلوبًا بموجب القانون أو الأمان أو منع الاحتيال أو معالجة النزاعات أو التحقق من الدفع أو معالجة استرداد الأموال أو النسخ الاحتياطية."
      },
      {
        "q": "تظهر اللعبة شاشة فارغة.",
        "a": "أعد تشغيل التطبيق، وتحقق من وجود تحديثات، وأكد اتصالك بالشبكة. في Android، قد يساعد أيضًا مسح ذاكرة التخزين المؤقت للتطبيق. إذا استمرت المشكلة، فاتصل بـ Shadow Economy."
      }
    ],
    "contactTitle": "اتصل بـ Shadow Economy",
    "contactBody": "لم تجد إجابتك؟ راسلنا عبر البريد الإلكتروني وسنرد عليك خلال يوم إلى يومَي عمل كلما أمكن ذلك."
  },
  "pt": {
    "title": "Suporte",
    "faqTitle": "Perguntas frequentes",
    "faqs": [
      {
        "q": "Como sincronizo meu jogo entre dispositivos?",
        "a": "Crie uma conta e faça login em cada dispositivo. O estado do seu jogo é sincronizado com essa conta quando o aplicativo sincroniza após alterações na partida."
      },
      {
        "q": "Posso restaurar os créditos do relatório?",
        "a": "Os créditos do relatório estão vinculados à conta Shadow Economy que foi conectada quando a compra foi concluída. Faça login com a mesma conta do aplicativo. Se uma compra concluída não aparecer, entre em contato com Shadow Economy com o recibo da App Store ou do Google Play. Como os créditos do relatório são consumíveis, os créditos já utilizados para desbloquear um relatório não podem ser restaurados como créditos não utilizados."
      },
      {
        "q": "A Shadow Economy pode acessar meu relatório?",
        "a": "Os relatórios são gerados para sua conta a partir de dados de partidas concluídas. A Shadow Economy não revisa o conteúdo de relatórios salvos individualmente, exceto quando necessário para operar o serviço, manter a segurança, oferecer suporte, cumprir a lei ou tratar sua solicitação."
      },
      {
        "q": "Comprei créditos de relatório, mas eles não estão aparecendo.",
        "a": "Reinicie o aplicativo e certifique-se de estar conectado à mesma conta Shadow Economy usada durante a compra. Se o problema persistir, entre em contato com Shadow Economy com o recibo de compra da App Store ou do Google Play e Shadow Economy irá revisá-lo manualmente."
      },
      {
        "q": "Como excluo minha conta?",
        "a": "Abra o menu do aplicativo, vá para Configurações → Conta → Excluir conta ou envie um e-mail para contact@shadoweconomyapp.com do endereço de e-mail vinculado à sua conta. A exclusão da conta geralmente exclui ou anonimiza dados de jogos na nuvem, créditos de relatórios, relatórios salvos e dados de sincronização, exceto quando a retenção for exigida por lei, segurança, prevenção de fraudes, tratamento de disputas, verificação de pagamento, tratamento de reembolso ou backups."
      },
      {
        "q": "O jogo está mostrando uma tela em branco.",
        "a": "Reinicie o aplicativo, verifique se há atualizações e confirme sua conexão de rede. No Android, limpar o cache do aplicativo também pode ajudar. Se o problema persistir, entre em contato com Shadow Economy."
      }
    ],
    "contactTitle": "Contato Shadow Economy",
    "contactBody": "Não encontrou sua resposta? Envie-nos um e-mail e responderemos em 1 a 2 dias úteis, sempre que possível."
  },
  "it": {
    "title": "Supporto",
    "faqTitle": "Domande frequenti",
    "faqs": [
      {
        "q": "Come sincronizzo il gioco su più dispositivi?",
        "a": "Crea un account e accedi su ciascun dispositivo. I tuoi progressi si sincronizzano con quell'account quando l'app si aggiorna dopo modifiche alla partita."
      },
      {
        "q": "Posso ripristinare i crediti dei report?",
        "a": "I crediti del report sono legati all'account Shadow Economy a cui è stato effettuato l'accesso al completamento del pagamento. Accedi con lo stesso account dell'app. Se un acquisto completato non viene visualizzato, contatta Shadow Economy con la ricevuta App Store o Google Play. Poiché i crediti del report sono consumabili, i crediti già utilizzati per sbloccare un report non possono essere ripristinati come crediti inutilizzati."
      },
      {
        "q": "Shadow Economy può accedere al mio report?",
        "a": "I report vengono generati per il tuo account a partire dai dati di una partita completata. Shadow Economy non esamina il contenuto dei singoli report salvati, salvo quando necessario per il funzionamento del servizio, la sicurezza, l'assistenza clienti, la conformità legale o la gestione della tua richiesta."
      },
      {
        "q": "Ho acquistato crediti di report ma non vengono visualizzati.",
        "a": "Riavvia l'app e assicurati di aver effettuato l'accesso allo stesso account Shadow Economy utilizzato durante l'acquisto. Se il problema persiste, contatta Shadow Economy con la ricevuta di acquisto App Store o Google Play e Shadow Economy la esaminerà manualmente."
      },
      {
        "q": "Come posso eliminare il mio account?",
        "a": "Apri il menu in-app, vai su Impostazioni → Account → Elimina account o invia un'e-mail a contact@shadoweconomyapp.com dall'indirizzo e-mail collegato al tuo account. L'eliminazione dell'account generalmente elimina o rende anonimi i dati di gioco nel cloud, i crediti dei report, i report salvati e i dati di sincronizzazione, tranne nei casi in cui la conservazione è richiesta dalla legge, dalla sicurezza, dalla prevenzione delle frodi, dalla gestione delle controversie, dalla verifica dei pagamenti, dalla gestione dei rimborsi o dai backup."
      },
      {
        "q": "Il gioco mostra una schermata vuota.",
        "a": "Riavvia l'app, controlla gli aggiornamenti e conferma la connessione di rete. Su Android, anche svuotare la cache dell'app può essere d'aiuto. Se il problema persiste, contatta Shadow Economy."
      }
    ],
    "contactTitle": "Contatta Shadow Economy",
    "contactBody": "Non trovi la tua risposta? Scrivici un'e-mail e ti risponderemo entro 1-2 giorni lavorativi, ove possibile."
  },
  "nl": {
    "title": "Ondersteuning",
    "faqTitle": "Veelgestelde vragen",
    "faqs": [
      {
        "q": "Hoe synchroniseer ik mijn spel op meerdere apparaten?",
        "a": "Maak een account aan en log in op elk apparaat. Je spelstand wordt met dat account gesynchroniseerd wanneer de app synchroniseert na wijzigingen in het spel."
      },
      {
        "q": "Kan ik rapportcredits herstellen?",
        "a": "Rapportcredits zijn gekoppeld aan het Shadow Economy-account waarop was ingelogd toen het afrekenen was voltooid. Log in met hetzelfde app-account. Als er geen voltooide aankoop verschijnt, neem dan contact op met Shadow Economy met je App Store- of Google Play-bon. Omdat rapportcredits verbruikbaar zijn, kunnen credits die al zijn gebruikt om een ​​rapport te ontgrendelen, niet worden hersteld als ongebruikte credits."
      },
      {
        "q": "Heeft Shadow Economy toegang tot mijn rapport?",
        "a": "Rapporten worden voor je account gemaakt op basis van voltooide spelgegevens. Shadow Economy bekijkt de inhoud van afzonderlijke opgeslagen rapporten alleen wanneer dat nodig is voor de werking van de dienst, beveiliging, klantenservice, wettelijke naleving of de afhandeling van je verzoek."
      },
      {
        "q": "Ik heb rapportcredits gekocht, maar deze worden niet weergegeven.",
        "a": "Start de app opnieuw en zorg dat je bent ingelogd op hetzelfde Shadow Economy-account dat u tijdens de aankoop heeft gebruikt. Als het probleem zich blijft voordoen, neem dan contact op met Shadow Economy met je App Store- of Google Play-aankoopbon. Shadow Economy zal het handmatig controleren."
      },
      {
        "q": "Hoe verwijder ik mijn account?",
        "a": "Open het in-app-menu, ga naar Instellingen → Account → Account verwijderen of stuur een e-mail naar contact@shadoweconomyapp.com vanaf het e-mailadres dat aan je account is gekoppeld. Het verwijderen van een account verwijdert of anonimiseert doorgaans cloudgamegegevens, rapportcredits, opgeslagen rapporten en synchronisatiegegevens behalve wanneer bewaring vereist is door de wet, beveiliging, fraudepreventie, geschillenbehandeling, betalingsverificatie, terugbetalingsafhandeling of back-ups."
      },
      {
        "q": "Het spel toont een leeg scherm.",
        "a": "Start de app opnieuw, controleer op updates en bevestig je netwerkverbinding. Op Android kan het wissen van de app-cache ook helpen. Neem contact op met Shadow Economy als het probleem zich blijft voordoen."
      }
    ],
    "contactTitle": "Neem contact op met Shadow Economy",
    "contactBody": "Vind je je antwoord niet? Stuur ons een e-mail en we reageren waar mogelijk binnen 1–2 werkdagen."
  },
  "id": {
    "title": "Dukungan",
    "faqTitle": "Pertanyaan yang Sering Diajukan",
    "faqs": [
      {
        "q": "Bagaimana cara menyinkronkan game saya di seluruh perangkat?",
        "a": "Buat akun dan masuk di setiap perangkat. Status game Anda disinkronkan ke akun tersebut saat aplikasi disinkronkan setelah gameplay berubah."
      },
      {
        "q": "Bisakah saya memulihkan kredit laporan?",
        "a": "Kredit laporan terhubung ke akun Shadow Economy yang digunakan saat pembayaran selesai. Masuk dengan akun aplikasi yang sama. Jika pembelian yang telah selesai tidak muncul, hubungi Shadow Economy dengan tanda terima App Store atau Google Play Anda. Karena kredit laporan bersifat habis pakai, kredit yang sudah digunakan untuk membuka laporan tidak dapat dikembalikan sebagai kredit yang belum digunakan."
      },
      {
        "q": "Apakah Shadow Economy dapat mengakses laporan saya?",
        "a": "Laporan dibuat untuk akun Anda dari data permainan yang telah selesai. Shadow Economy tidak meninjau isi laporan tersimpan satu per satu kecuali jika diperlukan untuk pengoperasian layanan, keamanan, dukungan pelanggan, kepatuhan hukum, atau penanganan permintaan Anda."
      },
      {
        "q": "Saya membeli kredit laporan tetapi tidak muncul.",
        "a": "Mulai ulang aplikasi dan pastikan Anda masuk ke akun Shadow Economy yang sama dengan yang digunakan saat pembelian. Jika masalah terus berlanjut, hubungi Shadow Economy dengan membawa tanda terima pembelian App Store atau Google Play Anda dan Shadow Economy akan meninjaunya secara manual."
      },
      {
        "q": "Bagaimana cara menghapus akun saya?",
        "a": "Buka menu dalam aplikasi, buka Pengaturan → Akun → Hapus Akun, atau kirim email ke contact@shadoweconomyapp.com dari alamat email yang tertaut ke akun Anda. Penghapusan akun umumnya menghapus atau menganonimkan data game cloud, kredit laporan, laporan tersimpan, dan data sinkronisasi kecuali jika penyimpanan diwajibkan oleh hukum, keamanan, pencegahan penipuan, penanganan perselisihan, verifikasi pembayaran, penanganan pengembalian dana, atau pencadangan."
      },
      {
        "q": "Game ini menampilkan layar kosong.",
        "a": "Mulai ulang aplikasi, periksa pembaruan, dan konfirmasi koneksi jaringan Anda. Di Android, menghapus cache aplikasi juga dapat membantu. Jika masalah berlanjut, hubungi Shadow Economy."
      }
    ],
    "contactTitle": "Hubungi Shadow Economy",
    "contactBody": "Tidak menemukan jawaban Anda? Kirim email kepada kami dan kami akan membalas dalam 1–2 hari kerja jika memungkinkan."
  }
}

export function Support() {
  const { lang } = useLanguage()
  const tx = content[lang] ?? content['en']

  return (
    <Layout>
      <div className={`${TEXT_SECTION} py-12 sm:py-16`}>
        <h1 className="text-3xl font-bold text-white mb-10">{tx.title}</h1>
        <div className="space-y-10 text-sm text-gray-300">
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">{tx.faqTitle}</h2>
            <div className="space-y-5">
              {tx.faqs.map(({ q, a }) => (
                <div key={q} className="border-l-2 border-gray-700 pl-4">
                  <p className="text-white font-medium mb-1">{q}</p>
                  <p className="text-gray-400">{linkifyText(a)}</p>
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
