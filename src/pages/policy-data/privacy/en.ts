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
      title: '2. Privacy at a Glance',
      blocks: [
        {
          type: 'p',
          text: 'This summary is provided for convenience. If anything here differs from the rest of this Policy, the full Policy controls.',
        },
        {
          type: 'ul',
          items: [
            'Controller: individual developer based in New Zealand — contact@shadoweconomyapp.com',
            'What we collect: account identifiers (email; display name from Google sign-in where used), gameplay and save data, report-credit balances, in-app purchase metadata from app stores, and limited technical logs (IP address, user-agent, timestamps)',
            'Why we process it: to operate the Service, sync progress, fulfil purchases, generate educational reports, maintain security, and comply with law',
            'Sale / cross-context ads: we do not sell personal information and do not share it for cross-context behavioral advertising',
            'Analytics / ad SDKs: we do not use third-party advertising or analytics SDKs in the app or website',
            'Who receives data: Supabase, Vercel, Apple, and Google as described in Section 7',
            'International processing: data may be stored or processed in Singapore, the United States, and other countries where our providers operate',
            'Retention: while your account is active; generally deleted or anonymized within 30 days after account deletion, subject to legal exceptions',
            'Your rights: depend on your location — see Section 13; contact us to exercise them',
          ],
        },
      ],
    },
    {
      title: '3. Information We Collect',
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
      title: '4. Legal Bases for Processing (EEA / UK)',
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
      title: '5. How We Use Information',
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
      title: '6. Automated Processing and Personalized Reports',
      blocks: [
        {
          type: 'p',
          text: 'When you unlock a report, the Service generates personalized educational text from your completed gameplay data using rule-based logic implemented in our software. This is automated processing of your game-state data to produce the report for your account.',
        },
        {
          type: 'p',
          text: 'We do not use your data to make decisions that produce legal or similarly significant effects about you. We do not use third-party generative-AI services to author report content, and we do not create advertising profiles from your gameplay or reports.',
        },
        {
          type: 'p',
          text: 'Unlocked reports you choose to save may be stored in your account archive on our servers so you can access them across devices. We do not use the substantive content of saved reports for marketing or unrelated purposes.',
        },
      ],
    },
    {
      title: '7. Sharing and Sub-processors',
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
          text: 'When you use Google sign-in or purchase through Apple or Google, those companies may collect and process information under their own privacy policies. For those activities, they act as independent controllers (or equivalent) for their services, not as our sub-processors processing data on our instructions.',
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
      title: '8. International Data Transfers',
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
      title: '9. Data Retention',
      blocks: [
        {
          type: 'ul',
          items: [
            'Account and game data — retained while your account is active',
            'After account deletion — we delete or anonymize associated personal data within 30 days, except where longer retention is required by law, fraud prevention, or dispute resolution',
            'Server logs (IP address, request metadata) — typically retained up to 90 days under our providers\' standard policies, then deleted or aggregated',
            'Local device storage — remains on your device until you clear app/website data or uninstall the app',
          ],
        },
      ],
    },
    {
      title: '10. Security',
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
        {
          type: 'p',
          text: 'If we become aware of a personal data breach that is likely to affect your information and notification is required under applicable law, we will notify you without undue delay and in accordance with that law.',
        },
      ],
    },
    {
      title: '11. Cookies and Local Storage',
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
      title: '12. Your Choices and Controls',
      blocks: [
        {
          type: 'p',
          text: 'Account deletion: you may delete your account at any time in the app under Settings → Account → Delete Account, or by emailing contact@shadoweconomyapp.com from the address associated with your account. Deletion removes cloud-synced account data subject to the retention exceptions in Section 9.',
        },
        {
          type: 'p',
          text: 'Access and portability: you may request a copy of personal data we hold about you in a structured, commonly used, machine-readable format where technically feasible, by contacting us.',
        },
        {
          type: 'p',
          text: 'Google sign-in: you can review and revoke the Service\'s access to your Google account through your Google Account permissions at myaccount.google.com.',
        },
        {
          type: 'p',
          text: 'Device and store controls: you can clear local app data, uninstall the app, and manage in-app purchase history through Apple or Google account settings.',
        },
        {
          type: 'p',
          text: 'Marketing: we do not send promotional emails. Transactional messages related to account security or the Service may still be sent where necessary.',
        },
        {
          type: 'p',
          text: 'Global Privacy Control (GPC) and similar signals: where required by law, we treat recognized opt-out preference signals as a request to opt out of sale or sharing for cross-context behavioral advertising. Because we do not engage in those activities, such signals do not change our practices beyond confirming that status.',
        },
      ],
    },
    {
      title: '13. Your Privacy Rights',
      blocks: [
        {
          type: 'p',
          text: 'Depending on your location, you may have rights to access, correct, delete, restrict, or port your personal data, and to object to certain processing. To exercise these rights, email contact@shadoweconomyapp.com. We will respond within 30 days unless a longer period is permitted by law.',
        },
        {
          type: 'p',
          text: 'We may ask you to verify your identity (for example, by confirming control of the email address on your account) before fulfilling a request, to protect your information from unauthorized access.',
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
            'Right to opt out of sale or sharing for cross-context behavioral advertising — we do not sell personal information and do not share it for cross-context behavioral advertising',
            'Right to non-discrimination for exercising privacy rights',
            'We do not collect sensitive personal information as defined by the CPRA',
            'Authorized agents may submit requests on your behalf with written permission and verification reasonably satisfactory to us',
          ],
        },
        { type: 'h3', text: 'New Zealand' },
        {
          type: 'p',
          text: 'We are based in New Zealand. Where the New Zealand Privacy Act 2020 applies, we handle personal information in accordance with its requirements, including providing access and correction where applicable.',
        },
        { type: 'h3', text: 'Other US states' },
        {
          type: 'p',
          text: 'Residents of US states with comprehensive privacy laws (including, where applicable, Colorado, Connecticut, Virginia, Utah, Oregon, Texas, and others) may have rights to access, delete, correct, and opt out of certain processing. Because we do not sell personal information or use it for targeted advertising as defined by those laws, many opt-out mechanisms do not change our practices, but you may still contact us to exercise applicable rights.',
        },
        { type: 'h3', text: 'Australia' },
        {
          type: 'p',
          text: 'If the Australian Privacy Act 1988 applies, you may request access to and correction of personal information we hold about you, and complain to the Office of the Australian Information Commissioner if you are not satisfied with our response.',
        },
        { type: 'h3', text: 'Canada' },
        {
          type: 'p',
          text: 'If Canadian privacy law applies (including PIPEDA or substantially similar provincial laws), you may request access to and correction of personal information, and challenge our compliance with applicable requirements.',
        },
        { type: 'h3', text: 'Brazil' },
        {
          type: 'p',
          text: 'If the LGPD applies, you may have rights including confirmation of processing, access, correction, anonymization, portability, deletion, and information about sharing. Contact us to exercise these rights.',
        },
        { type: 'h3', text: 'Other regions' },
        {
          type: 'p',
          text: 'If you live outside the regions listed above, you may still have rights under the privacy laws of your country or region. Contact us at contact@shadoweconomyapp.com and we will respond in line with applicable law.',
        },
        {
          type: 'p',
          text: 'Appeals: if we decline your request, we will explain our reasons where required by law. You may reply to request a review of our decision. You may also lodge a complaint with a supervisory or privacy authority in your jurisdiction.',
        },
        {
          type: 'p',
          text: 'Nothing in this Policy limits mandatory consumer or privacy rights that apply to you under the laws of your country or region of residence.',
        },
      ],
    },
    {
      title: '14. Children\'s Privacy',
      blocks: [
        {
          type: 'p',
          text: 'The Service is intended for a general audience. We do not knowingly collect personal information from children under 13 (or the minimum age required in your jurisdiction) without appropriate parental consent where required by law. If you believe a child has provided personal information without consent, contact us and we will take appropriate steps to delete it.',
        },
      ],
    },
    {
      title: '15. Changes to This Policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Policy from time to time. For material changes, we will provide notice through the app, our website, or email at least 14 days before the effective date where practicable. The "Last updated" date at the top indicates the current version. Continued use of the Service after the effective date constitutes acceptance of the updated Policy, except where your consent is required by law.',
        },
      ],
    },
    {
      title: '16. Contact and Supervisory Authorities',
      blocks: [
        { type: 'p', text: 'Privacy inquiries and rights requests: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'We aim to respond within 30 days unless a longer period is permitted by law. If you are not satisfied with our response, you may contact a supervisory authority, including:',
        },
        {
          type: 'ul',
          items: [
            'New Zealand — Office of the Privacy Commissioner: privacy.org.nz',
            'EEA / UK — your local data protection authority (see edpb.europa.eu/about-edpb/about-edpb/members_en for EU members)',
            'Australia — Office of the Australian Information Commissioner: oaic.gov.au',
            'California, USA — California Privacy Protection Agency: cppa.ca.gov',
          ],
        },
      ],
    },
  ],
}
