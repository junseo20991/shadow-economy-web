export default {
  title: 'Privacy Policy',
  updated: 'Last updated: 29 May 2026',
  intro:
    'This Privacy Policy describes how Shadow Economy ("we," "us," or "our") collects, uses, stores, and protects personal information when you use the Shadow Economy mobile application, our website at shadoweconomyapp.com, and related services (collectively, the "Service"). Shadow Economy is a general-audience educational game operated by an individual developer. We process only the data necessary to operate the Service and generate educational reports for the account holder. We do not sell personal information. We do not access the plaintext contents of individual personalized reports for marketing or unrelated purposes.',
  sections: [
    {
      title: '1. Data Controller and Scope',
      blocks: [
        {
          type: 'p',
          text: 'Shadow Economy is independently developed and operated by one individual developer (no corporate entity) based in New Zealand. For purposes of applicable privacy laws, that individual is the data controller for the Service. The Service is offered to users worldwide.',
        },
        { type: 'p', text: 'Contact: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'This Policy applies to the Shadow Economy app (iOS and Android), our website, and customer support channels that reference this Policy.',
        },
      ],
    },
    {
      title: '2. Information We Collect',
      blocks: [
        { type: 'h3', text: 'Information you provide' },
        {
          type: 'ul',
          items: [
            'Email address — when you create an account or sign in',
            'Display name — when you sign in with Google (we receive only what you authorize Google to share)',
          ],
        },
        { type: 'h3', text: 'Information generated through your use of the Service' },
        {
          type: 'ul',
          items: [
            'Game state data — progress, assets, liabilities, turn history, in-game choices, and related gameplay records',
            'Report credit balance — credits associated with your account',
            'Language preference — stored on your device and, when signed in, used to present the Service in your chosen language',
            'Purchase records — in-app purchase transaction identifiers, product type, credits granted, and timestamps (from Apple App Store or Google Play). Payment card and billing details are processed solely by the applicable store and are not shared with us',
          ],
        },
        { type: 'h3', text: 'Information collected automatically' },
        {
          type: 'ul',
          items: [
            'IP address, timestamps, HTTP method, response codes, and user-agent string — collected by our hosting and backend providers as part of standard operation and security',
            'Authentication session data — managed through Supabase; we do not store your third-party login passwords',
          ],
        },
        { type: 'h3', text: 'Information we do not collect' },
        {
          type: 'ul',
          items: [
            'Precise geolocation',
            'Camera, microphone, contacts, or photo library (except as required by the operating system for sign-in flows you initiate)',
            'Advertising identifiers (IDFA / GAID) for cross-app advertising',
            'Behavioral advertising profiles or cross-site tracking for ads',
            'Third-party advertising SDKs',
          ],
        },
      ],
    },
    {
      title: '3. Legal Bases for Processing (EEA / UK)',
      blocks: [
        {
          type: 'p',
          text: 'If you are in the European Economic Area or the United Kingdom, we process personal data on the following bases:',
        },
        {
          type: 'ul',
          items: [
            'Performance of a contract (Art. 6(1)(b) GDPR) — account creation, authentication, cloud save sync, purchase fulfilment, and report delivery',
            'Legitimate interests (Art. 6(1)(f) GDPR) — security, fraud prevention, service reliability, and improvement, where not overridden by your rights',
            'Legal obligation (Art. 6(1)(c) GDPR) — where required by applicable law',
          ],
        },
        {
          type: 'p',
          text: 'We do not rely on consent as the sole legal basis for core Service operation. If we introduce consent-based processing in the future, we will notify you and provide a withdrawal mechanism that does not affect the lawfulness of prior processing.',
        },
      ],
    },
    {
      title: '4. How We Use Information',
      blocks: [
        {
          type: 'ul',
          items: [
            'Provide, maintain, and improve the Service',
            'Create and manage accounts and authenticate users',
            'Synchronize game progress across devices when you are signed in',
            'Process in-app purchases and grant report credits',
            'Generate personalized educational reports for the account holder',
            'Send transactional communications (e.g., sign-in or account notices). We do not send marketing emails',
            'Protect the security and integrity of the Service',
            'Comply with legal obligations and respond to lawful requests',
          ],
        },
        {
          type: 'p',
          text: 'We do not sell, rent, or trade your personal information. We do not use your data for third-party advertising.',
        },
      ],
    },
    {
      title: '5. Sharing and Sub-processors',
      blocks: [
        {
          type: 'p',
          text: 'We share personal information only with service providers that help us operate the Service, and only to the extent necessary:',
        },
        {
          type: 'ul',
          items: [
            'Supabase, Inc. (United States) — authentication, database, and cloud storage. Primary hosting region: Asia-Pacific (Singapore). Privacy policy: supabase.com/privacy',
            'Vercel Inc. (United States) — website hosting and content delivery for shadoweconomyapp.com. Privacy policy: vercel.com/legal/privacy-policy',
            'Apple Inc. — App Store in-app purchases (iOS). Payment processing is handled by Apple. Privacy policy: apple.com/legal/privacy',
            'Google LLC — Google sign-in (where enabled) and Google Play in-app purchases (Android). Payment processing for purchases is handled by Google. Privacy policy: policies.google.com/privacy',
          ],
        },
        {
          type: 'p',
          text: 'We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, safety, or property of users, the public, or Shadow Economy.',
        },
        {
          type: 'p',
          text: 'If operation of the Service is transferred to another party, we will notify you in advance and give you an opportunity to delete your account before the transfer takes effect, unless a shorter period is required by law.',
        },
      ],
    },
    {
      title: '6. International Data Transfers',
      blocks: [
        {
          type: 'p',
          text: 'Your data may be stored in Singapore (Supabase) and processed in the United States and other countries where our providers operate. Laws in those countries may differ from those in your country.',
        },
        {
          type: 'p',
          text: 'Where required for transfers from the EEA or UK, we rely on appropriate safeguards such as Standard Contractual Clauses approved by the European Commission, implemented through our agreements with relevant providers.',
        },
      ],
    },
    {
      title: '7. Data Retention',
      blocks: [
        {
          type: 'ul',
          items: [
            'Account and game data — retained while your account is active',
            'After account deletion — personally identifiable data is deleted within 30 days, except where longer retention is required by law or for dispute resolution',
            'Server logs (IP address, request metadata) — typically retained up to 90 days under our providers\' standard policies, then deleted or aggregated',
            'Local device storage — remains on your device until you clear app/website data or uninstall the app',
          ],
        },
      ],
    },
    {
      title: '8. Security',
      blocks: [
        {
          type: 'ul',
          items: [
            'Data in transit is protected using TLS 1.2 or higher',
            'Data at rest is encrypted by our cloud providers using industry-standard methods (e.g., AES-256 where applicable)',
            'Authentication uses third-party identity providers and Supabase-managed sessions; we do not store your social-login passwords',
            'Access to production systems is limited to the individual operator, in addition to the sub-processors listed above',
            'We periodically review our security practices',
          ],
        },
        {
          type: 'p',
          text: 'No method of transmission or storage is completely secure. If you believe your account has been compromised, contact us immediately at contact@shadoweconomyapp.com.',
        },
      ],
    },
    {
      title: '9. Cookies and Local Storage',
      blocks: [
        {
          type: 'p',
          text: 'We do not use advertising cookies or third-party tracking cookies on our website.',
        },
        {
          type: 'p',
          text: 'Mobile app: we store game state and session information in your device\'s local storage to preserve progress locally and reduce unnecessary network requests. This is not used for cross-app advertising.',
        },
        {
          type: 'p',
          text: 'Website: we store your language preference in your browser\'s local storage so the site can remember your selection. You can clear it through your browser settings.',
        },
        {
          type: 'p',
          text: 'Clearing local app data may reset local progress; cloud-synced data is restored when you sign in again with the same account.',
        },
      ],
    },
    {
      title: '10. Your Privacy Rights',
      blocks: [
        {
          type: 'p',
          text: 'Depending on your location, you may have rights to access, correct, delete, restrict, or port your personal data, and to object to certain processing. To exercise these rights, email contact@shadoweconomyapp.com. We will respond within 30 days unless a longer period is permitted by law.',
        },
        { type: 'h3', text: 'EEA / UK (GDPR)' },
        {
          type: 'ul',
          items: [
            'Right of access, rectification, erasure, restriction, and data portability',
            'Right to object to processing based on legitimate interests',
            'Right not to be subject to decisions based solely on automated processing with legal or similarly significant effects (we do not make such decisions)',
            'Right to lodge a complaint with your supervisory authority',
          ],
        },
        { type: 'h3', text: 'California (CCPA / CPRA)' },
        {
          type: 'ul',
          items: [
            'Right to know what personal information is collected, used, and disclosed',
            'Right to delete personal information, subject to exceptions',
            'Right to opt out of sale — we do not sell personal information',
            'Right to non-discrimination for exercising privacy rights',
          ],
        },
        { type: 'h3', text: 'New Zealand' },
        {
          type: 'p',
          text: 'We are based in New Zealand. Where the New Zealand Privacy Act 2020 applies, we handle personal information in accordance with its requirements, including providing access and correction where applicable.',
        },
        { type: 'h3', text: 'Other regions' },
        {
          type: 'p',
          text: 'If you live outside the regions listed above, you may still have rights under the privacy laws of your country or region. Contact us at contact@shadoweconomyapp.com and we will respond in line with applicable law.',
        },
        {
          type: 'p',
          text: 'Nothing in this Policy limits mandatory consumer or privacy rights that apply to you under the laws of your country or region of residence.',
        },
      ],
    },
    {
      title: '11. Children\'s Privacy',
      blocks: [
        {
          type: 'p',
          text: 'The Service is intended for a general audience. We do not knowingly collect personal information from children under 13 (or the minimum age required in your jurisdiction) without appropriate parental consent where required by law. If you believe a child has provided personal information without consent, contact us and we will take appropriate steps to delete it.',
        },
      ],
    },
    {
      title: '12. Changes to This Policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Policy from time to time. For material changes, we will provide notice through the app, our website, or email at least 14 days before the effective date where practicable. The "Last updated" date at the top indicates the current version. Continued use of the Service after the effective date constitutes acceptance of the updated Policy, except where your consent is required by law.',
        },
      ],
    },
    {
      title: '13. Contact',
      blocks: [
        { type: 'p', text: 'Privacy inquiries and rights requests: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'We aim to respond within 30 days. If you are not satisfied with our response, you may contact your local data protection authority.',
        },
      ],
    },
  ],
}
