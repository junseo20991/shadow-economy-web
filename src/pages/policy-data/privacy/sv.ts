export default {
  title: 'Integritetspolicy',
  updated: 'Senast uppdaterad: 29 maj 2026',
  intro:
    'Denna integritetspolicy beskriver hur Shadow Economy («vi», «oss» eller «vår») samlar in, använder, lagrar och skyddar personuppgifter när du använder mobilappen Shadow Economy, vår webbplats på shadoweconomyapp.com och relaterade tjänster (sammantaget «Tjänsten»). Shadow Economy är ett utbildningsspel för allmän publik som drivs av en enskild utvecklare. Vi behandlar endast de uppgifter som krävs för att driva Tjänsten och generera utbildningsrapporter för kontoinnehavaren. Vi säljer inte personuppgifter. Vi får inte tillgång till innehållet i enskilda personliga rapporter i klartext för marknadsföring eller andra orelaterade ändamål.',
  sections: [
    {
      title: '1. Personuppgiftsansvarig och tillämpningsområde',
      blocks: [
        {
          type: 'p',
          text: 'Shadow Economy utvecklas och drivs självständigt av en enskild utvecklare med bas i Nya Zeeland (inget bolag). För tillämpliga integritetslagar är den personen personuppgiftsansvarig för Tjänsten. Tjänsten erbjuds användare över hela världen.',
        },
        { type: 'p', text: 'Kontakt: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'Denna policy gäller för appen Shadow Economy (iOS och Android), vår webbplats och kundsupportkanaler som hänvisar till denna policy.',
        },
      ],
    },
    {
      title: '2. Integritet i korthet',
      blocks: [
        {
          type: 'p',
          text: 'Denna sammanfattning tillhandahålls för enkelhetens skull. Om något här skiljer sig från resten av policyn gäller hela policyn.',
        },
        {
          type: 'ul',
          items: [
            'Ansvarig: enskild utvecklare med bas i Nya Zeeland — contact@shadoweconomyapp.com',
            'Vad vi samlar in: kontoidentifierare (e-post; visningsnamn från Google-inloggning där det används), spel- och spardata, saldo för rapportkrediter, metadata för köp i appbutiker och begränsade tekniska loggar (IP-adress, user-agent, tidsstämplar)',
            'Varför vi behandlar: för att driva Tjänsten, synka framsteg, fullgöra köp, generera utbildningsrapporter, upprätthålla säkerhet och följa lag',
            'Försäljning / annonser i korsande sammanhang: vi säljer inte personuppgifter och delar dem inte för beteendestyrd reklam i korsande sammanhang',
            'Analys- / reklam-SDK:er: vi använder inga tredjeparts reklam- eller analys-SDK:er i appen eller på webbplatsen',
            'Vem får uppgifter: Supabase, Vercel, Apple och Google enligt avsnitt 7',
            'Internationell behandling: uppgifter kan lagras eller behandlas i Singapore, USA och andra länder där våra leverantörer verkar',
            'Lagring: så länge ditt konto är aktivt; raderas eller anonymiseras i regel inom 30 dagar efter kontoradering, med lagstadgade undantag',
            'Dina rättigheter: beror på var du befinner dig — se avsnitt 13; kontakta oss för att utöva dem',
          ],
        },
      ],
    },
    {
      title: '3. Uppgifter vi samlar in',
      blocks: [
        { type: 'h3', text: 'Uppgifter du lämnar' },
        {
          type: 'ul',
          items: [
            'E-postadress — när du skapar ett konto eller loggar in',
            'Visningsnamn — när du loggar in med Google (vi tar endast emot det du auktoriserar Google att dela)',
          ],
        },
        { type: 'h3', text: 'Uppgifter som genereras genom din användning av Tjänsten' },
        {
          type: 'ul',
          items: [
            'Spelstatusdata — framsteg, tillgångar, skulder, turhistorik, val i spelet och relaterade spelposter',
            'Saldo för rapportkrediter — krediter kopplade till ditt konto',
            'Språkpreferens — lagras på din enhet och, när du är inloggad, används för att visa Tjänsten på ditt valda språk',
            'Köpposter — transaktions-ID för köp i appen, produkttyp, beviljade krediter och tidsstämplar (från Apple App Store eller Google Play). Betalnings- och faktureringsuppgifter hanteras enbart av respektive butik och delas inte med oss',
          ],
        },
        { type: 'h3', text: 'Uppgifter som samlas in automatiskt' },
        {
          type: 'ul',
          items: [
            'IP-adress, tidsstämplar, HTTP-metod, svarskoder och user-agent-sträng — samlas in av våra värd- och backendleverantörer som del av normal drift och säkerhet',
            'Autentiseringssessionsdata — hanteras via Supabase; vi lagrar inte dina lösenord för tredjepartsinloggning',
          ],
        },
        { type: 'h3', text: 'Uppgifter vi inte samlar in' },
        {
          type: 'ul',
          items: [
            'Exakt geolokalisering',
            'Kamera, mikrofon, kontakter eller fotobibliotek (utom vad operativsystemet kräver i inloggningsflöden du initierar)',
            'Reklamidentifierare (IDFA / GAID) för reklam mellan appar',
            'Beteendebaserade reklamprofiler eller spårning mellan webbplatser för reklam',
            'Tredjeparts reklam-SDK:er',
          ],
        },
      ],
    },
    {
      title: '4. Rättsliga grunder för behandling (EES / Storbritannien)',
      blocks: [
        {
          type: 'p',
          text: 'Om du befinner dig inom Europeiska ekonomiska samarbetsområdet eller Storbritannien behandlar vi personuppgifter på följande grunder:',
        },
        {
          type: 'ul',
          items: [
            'Fullgörande av avtal (art. 6(1)(b) GDPR) — kontoskapande, autentisering, molnsynk av sparfiler, fullgörande av köp och leverans av rapporter',
            'Berättigade intressen (art. 6(1)(f) GDPR) — säkerhet, bedrägeriförebyggande, tillförlitlighet och förbättring av tjänsten, när dina rättigheter inte väger tyngre',
            'Rättslig skyldighet (art. 6(1)(c) GDPR) — när tillämplig lag kräver det',
          ],
        },
        {
          type: 'p',
          text: 'Vi förlitar oss inte enbart på samtycke som rättslig grund för kärndriften av Tjänsten. Om vi inför samtyckesbaserad behandling i framtiden meddelar vi dig och erbjuder ett sätt att återkalla som inte påverkar lagligheten av tidigare behandling.',
        },
      ],
    },
    {
      title: '5. Hur vi använder uppgifter',
      blocks: [
        {
          type: 'ul',
          items: [
            'Tillhandahålla, underhålla och förbättra Tjänsten',
            'Skapa och hantera konton samt autentisera användare',
            'Synkronisera spelframsteg mellan enheter när du är inloggad',
            'Behandla köp i appen och bevilja rapportkrediter',
            'Generera personliga utbildningsrapporter för kontoinnehavaren',
            'Skicka transaktionsmeddelanden (t.ex. inloggnings- eller kontomeddelanden). Vi skickar inte marknadsföringsmejl',
            'Skydda Tjänstens säkerhet och integritet',
            'Uppfylla rättsliga skyldigheter och besvara lagliga förfrågningar',
          ],
        },
        {
          type: 'p',
          text: 'Vi säljer, hyr ut eller handlar inte med dina personuppgifter. Vi använder inte dina uppgifter för tredjepartsreklam.',
        },
      ],
    },
    {
      title: '6. Automatiserad behandling och personliga rapporter',
      blocks: [
        {
          type: 'p',
          text: 'När du låser upp en rapport genererar Tjänsten personlig utbildningstext från dina slutförda speldata med regelbaserad logik i vår programvara. Detta är automatiserad behandling av dina spelstatusuppgifter för att producera rapporten för ditt konto.',
        },
        {
          type: 'p',
          text: 'Vi använder inte dina uppgifter för att fatta beslut som ger rättsliga eller likvärdigt betydande effekter för dig. Vi använder inte tredjepartstjänster för generativ AI för att skriva rapportinnehåll, och vi skapar inte reklamprofiler från ditt spelande eller dina rapporter.',
        },
        {
          type: 'p',
          text: 'Upplåsta rapporter du väljer att spara kan lagras i ditt kontos arkiv på våra servrar så att du kan komma åt dem mellan enheter. Vi använder inte det väsentliga innehållet i sparade rapporter för marknadsföring eller andra orelaterade ändamål.',
        },
      ],
    },
    {
      title: '7. Delning och underleverantörer',
      blocks: [
        {
          type: 'p',
          text: 'Vi delar personuppgifter endast med tjänsteleverantörer som hjälper oss att driva Tjänsten, och endast i den utsträckning som krävs:',
        },
        {
          type: 'ul',
          items: [
            'Supabase, Inc. (USA) — autentisering, databas och molnlagring. Primär värdregion: Asien-Stillahavsområdet (Singapore). Integritetspolicy: supabase.com/privacy',
            'Vercel Inc. (USA) — webbhotell och innehållsleverans för shadoweconomyapp.com. Integritetspolicy: vercel.com/legal/privacy-policy',
            'Apple Inc. — köp i appen via App Store (iOS). Betalning hanteras av Apple. Integritetspolicy: apple.com/legal/privacy',
            'Google LLC — Google-inloggning (där tillgängligt) och köp i appen via Google Play (Android). Betalning för köp hanteras av Google. Integritetspolicy: policies.google.com/privacy',
          ],
        },
        {
          type: 'p',
          text: 'När du använder Google-inloggning eller köper via Apple eller Google kan dessa företag samla in och behandla uppgifter enligt sina egna integritetspolicyer. För dessa aktiviteter agerar de som självständiga personuppgiftsansvariga (eller motsvarande) för sina tjänster, inte som underleverantörer som behandlar uppgifter enligt våra instruktioner.',
        },
        {
          type: 'p',
          text: 'Vi kan lämna ut uppgifter om det krävs enligt lag, förordning, rättslig process eller myndighetsbegäran, eller när vi anser att utlämnande är nödvändigt för att skydda användares, allmänhetens eller Shadow Economys rättigheter, säkerhet eller egendom.',
        },
        {
          type: 'p',
          text: 'Om driften av Tjänsten överförs till en annan part meddelar vi dig i förväg och ger dig möjlighet att radera ditt konto innan överföringen träder i kraft, om inte kortare tid krävs enligt lag.',
        },
      ],
    },
    {
      title: '8. Internationella dataöverföringar',
      blocks: [
        {
          type: 'p',
          text: 'Dina uppgifter kan lagras i Singapore (Supabase) och behandlas i USA och andra länder där våra leverantörer verkar. Lagarna i dessa länder kan skilja sig från lagarna i ditt land.',
        },
        {
          type: 'p',
          text: 'När det krävs för överföringar från EES eller Storbritannien förlitar vi oss på lämpliga skyddsåtgärder, såsom standardavtalsklausuler godkända av Europeiska kommissionen, genom våra avtal med relevanta leverantörer.',
        },
      ],
    },
    {
      title: '9. Lagringstid',
      blocks: [
        {
          type: 'ul',
          items: [
            'Konto- och speldata — behålls så länge ditt konto är aktivt',
            'Efter kontoradering — vi raderar eller anonymiserar tillhörande personuppgifter inom 30 dagar, utom när längre lagring krävs enligt lag, för bedrägeriförebyggande eller tvistlösning',
            'Serverloggar (IP-adress, begärandemetadata) — behålls normalt upp till 90 dagar enligt våra leverantörers standardpolicyer och raderas eller aggregeras därefter',
            'Lokal enhetslagring — finns kvar på din enhet tills du rensar app-/webbplatsdata eller avinstallerar appen',
          ],
        },
      ],
    },
    {
      title: '10. Säkerhet',
      blocks: [
        {
          type: 'ul',
          items: [
            'Data under överföring skyddas med TLS 1.2 eller högre',
            'Data i vila krypteras av våra molnleverantörer med branschstandardmetoder (t.ex. AES-256 där tillämpligt)',
            'Autentisering använder tredjepartsidentitetsleverantörer och Supabase-hanterade sessioner; vi lagrar inte dina lösenord för social inloggning',
            'Åtkomst till produktionssystem begränsas till den enskilda operatören, utöver ovan listade underleverantörer',
            'Vi granskar regelbundet våra säkerhetsrutiner',
          ],
        },
        {
          type: 'p',
          text: 'Ingen överförings- eller lagringsmetod är helt säker. Om du tror att ditt konto har komprometterats, kontakta oss omedelbart på contact@shadoweconomyapp.com.',
        },
        {
          type: 'p',
          text: 'Om vi får kännedom om ett personuppgiftsintrång som sannolikt påverkar dina uppgifter och underrättelse krävs enligt tillämplig lag, meddelar vi dig utan onödigt dröjsmål i enlighet med den lagen.',
        },
      ],
    },
    {
      title: '11. Cookies och lokal lagring',
      blocks: [
        {
          type: 'p',
          text: 'Vi använder inte reklamcookies eller spårningscookies från tredje part på vår webbplats.',
        },
        {
          type: 'p',
          text: 'Mobilapp: vi lagrar spelstatus och sessionsinformation i enhetens lokala lagring för att bevara framsteg lokalt och minska onödiga nätverksförfrågningar. Detta används inte för reklam mellan appar.',
        },
        {
          type: 'p',
          text: 'Webbplats: vi lagrar ditt språkval i webbläsarens lokala lagring så att webbplatsen kan komma ihåg ditt val. Du kan rensa det i webbläsarens inställningar.',
        },
        {
          type: 'p',
          text: 'Om du rensar lokal appdata kan lokalt framsteg återställas; molnsynkroniserad data återställs när du loggar in igen med samma konto.',
        },
      ],
    },
    {
      title: '12. Dina val och kontroller',
      blocks: [
        {
          type: 'p',
          text: 'Kontoradering: du kan radera ditt konto när som helst i appen under Inställningar → Konto → Radera konto, eller genom att mejla contact@shadoweconomyapp.com från adressen som är kopplad till ditt konto. Radering tar bort molnsynkroniserade kontouppgifter med undantag för lagringsundantagen i avsnitt 9.',
        },
        {
          type: 'p',
          text: 'Åtkomst och portabilitet: du kan begära en kopia av personuppgifter vi har om dig i ett strukturerat, allmänt använt och maskinläsbart format när det är tekniskt möjligt genom att kontakta oss.',
        },
        {
          type: 'p',
          text: 'Google-inloggning: du kan granska och återkalla Tjänstens åtkomst till ditt Google-konto via dina Google-kontobehörigheter på myaccount.google.com.',
        },
        {
          type: 'p',
          text: 'Enhets- och butikskontroller: du kan rensa lokal appdata, avinstallera appen och hantera köphistorik i appen via Apple- eller Google-kontoinställningar.',
        },
        {
          type: 'p',
          text: 'Marknadsföring: vi skickar inte kampanjmejl. Transaktionsmeddelanden relaterade till kontosäkerhet eller Tjänsten kan fortfarande skickas när det behövs.',
        },
        {
          type: 'p',
          text: 'Global Privacy Control (GPC) och liknande signaler: där lagen kräver det behandlar vi erkända opt-out-signaler som en begäran om att välja bort försäljning eller delning för beteendestyrd reklam i korsande sammanhang. Eftersom vi inte bedriver sådana aktiviteter ändrar sådana signaler inte våra rutiner utöver att bekräfta den statusen.',
        },
      ],
    },
    {
      title: '13. Dina integritetsrättigheter',
      blocks: [
        {
          type: 'p',
          text: 'Beroende på var du befinner dig kan du ha rätt till åtkomst, rättelse, radering, begränsning, dataportabilitet och att invända mot viss behandling. För att utöva dessa rättigheter, mejla contact@shadoweconomyapp.com. Vi svarar inom 30 dagar om inte längre tid tillåts enligt lag.',
        },
        {
          type: 'p',
          text: 'Vi kan be dig verifiera din identitet (t.ex. genom att bekräfta att du kontrollerar e-postadressen på ditt konto) innan vi fullgör en begäran, för att skydda dina uppgifter mot obehörig åtkomst.',
        },
        { type: 'h3', text: 'EES / Storbritannien (GDPR)' },
        {
          type: 'ul',
          items: [
            'Rätt till åtkomst, rättelse, radering, begränsning och dataportabilitet',
            'Rätt att invända mot behandling som bygger på berättigade intressen',
            'Rätt att inte bli föremål för beslut som enbart bygger på automatiserad behandling med rättsliga eller likvärdigt betydande effekter (vi fattar inte sådana beslut)',
            'Rätt att lämna in klagomål till tillsynsmyndigheten',
          ],
        },
        { type: 'h3', text: 'Kalifornien (CCPA / CPRA)' },
        {
          type: 'ul',
          items: [
            'Rätt att veta vilka personuppgifter som samlas in, används och lämnas ut',
            'Rätt att radera personuppgifter, med undantag',
            'Rätt att välja bort försäljning eller delning för beteendestyrd reklam i korsande sammanhang — vi säljer inte personuppgifter och delar dem inte för beteendestyrd reklam i korsande sammanhang',
            'Rätt att inte diskrimineras för att du utövar integritetsrättigheter',
            'Vi samlar inte in känsliga personuppgifter enligt CPRA:s definition',
            'En auktoriserad ombud kan lämna in begäranden med skriftlig fullmakt och rimlig verifiering',
          ],
        },
        { type: 'h3', text: 'Nya Zeeland' },
        {
          type: 'p',
          text: 'Vi är baserade i Nya Zeeland. När Nya Zeelands Privacy Act 2020 tillämpas hanterar vi personuppgifter i enlighet med dess krav, inklusive åtkomst och rättelse när det är tillämpligt.',
        },
        { type: 'h3', text: 'Andra delstater i USA' },
        {
          type: 'p',
          text: 'Invånare i amerikanska delstater med heltäckande integritetslagar (inklusive, där tillämpligt, Colorado, Connecticut, Virginia, Utah, Oregon, Texas och andra) kan ha rätt till åtkomst, radering, rättelse och att välja bort viss behandling. Eftersom vi inte säljer personuppgifter eller använder dem för riktad reklam enligt dessa lagars definition ändrar många opt-out-mekanismer inte våra rutiner, men du kan fortfarande kontakta oss för att utöva tillämpliga rättigheter.',
        },
        { type: 'h3', text: 'Australien' },
        {
          type: 'p',
          text: 'Om Australian Privacy Act 1988 tillämpas kan du begära åtkomst till och rättelse av personuppgifter vi har om dig, och klaga till Office of the Australian Information Commissioner om du inte är nöjd med vårt svar.',
        },
        { type: 'h3', text: 'Kanada' },
        {
          type: 'p',
          text: 'Om kanadensisk integritetslag tillämpas (inklusive PIPEDA eller i huvudsak likvärdiga provinsiella lagar) kan du begära åtkomst till och rättelse av personuppgifter samt ifrågasätta vår efterlevnad av tillämpliga krav.',
        },
        { type: 'h3', text: 'Brasilien' },
        {
          type: 'p',
          text: 'Om LGPD tillämpas kan du ha rättigheter som inkluderar bekräftelse av behandling, åtkomst, rättelse, anonymisering, portabilitet, radering och information om delning. Kontakta oss för att utöva dem.',
        },
        { type: 'h3', text: 'Andra regioner' },
        {
          type: 'p',
          text: 'Om du bor utanför de regioner som anges ovan kan du fortfarande ha rättigheter enligt integritetslagstiftningen i ditt land eller din region. Kontakta oss på contact@shadoweconomyapp.com så svarar vi i enlighet med tillämplig lag.',
        },
        {
          type: 'p',
          text: 'Överklagande: om vi avslår din begäran förklarar vi skälen när lagen kräver det. Du kan svara för att begära en granskning av vårt beslut. Du kan också lämna in klagomål till en tillsyns- eller integritetsmyndighet i din jurisdiktion.',
        },
        {
          type: 'p',
          text: 'Ingenting i denna policy begränsar obligatoriska konsument- eller integritetsrättigheter som gäller för dig enligt lagarna i ditt bosättningsland.',
        },
      ],
    },
    {
      title: '14. Barns integritet',
      blocks: [
        {
          type: 'p',
          text: 'Tjänsten är avsedd för allmän publik. Vi samlar inte medvetet in personuppgifter från barn under 13 år (eller lägsta ålder enligt din jurisdiktion) utan lämpligt föräldramedgivande när lagen kräver det. Om du tror att ett barn har lämnat personuppgifter utan samtycke, kontakta oss så vidtar vi lämpliga raderingsåtgärder.',
        },
      ],
    },
    {
      title: '15. Ändringar av denna policy',
      blocks: [
        {
          type: 'p',
          text: 'Vi kan uppdatera denna policy från tid till annan. Vid väsentliga ändringar meddelar vi via appen, webbplatsen eller e-post minst 14 dagar före ikraftträdande när det är rimligt möjligt. Datumet «Senast uppdaterad» överst anger gällande version. Fortsatt användning av Tjänsten efter ikraftträdandedatum utgör acceptans av den uppdaterade policyn, utom där ditt samtycke krävs enligt lag.',
        },
      ],
    },
    {
      title: '16. Kontakt och tillsynsmyndigheter',
      blocks: [
        { type: 'p', text: 'Integritetsfrågor och begäranden om rättigheter: contact@shadoweconomyapp.com' },
        {
          type: 'p',
          text: 'Vi strävar efter att svara inom 30 dagar om inte längre tid tillåts enligt lag. Om du inte är nöjd med vårt svar kan du kontakta en tillsynsmyndighet, inklusive:',
        },
        {
          type: 'ul',
          items: [
            'Nya Zeeland — Office of the Privacy Commissioner: privacy.org.nz',
            'EES / Storbritannien — din lokala dataskyddsmyndighet (se edpb.europa.eu/about-edpb/about-edpb/members_en för EU-medlemmar)',
            'Australien — Office of the Australian Information Commissioner: oaic.gov.au',
            'Kalifornien, USA — California Privacy Protection Agency: cppa.ca.gov',
          ],
        },
      ],
    },
  ],
}
