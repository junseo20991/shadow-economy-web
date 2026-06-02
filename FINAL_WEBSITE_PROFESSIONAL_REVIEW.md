# FINAL_WEBSITE_PROFESSIONAL_REVIEW.md

Final pre-release, public-facing quality pass for the **Shadow Economy** marketing/legal website
(`www.shadoweconomyapp.com`).

- **Repository reviewed:** `shadow-economy-web` (separate from the game app repo `shadow-economy`; the
  app README points here for "웹사이트·법적 문서"). Source of truth = the repository, read directly.
- **Stack:** React 19 + Vite + React Router (client-side SPA), Tailwind, deployed on Vercel.
- **Date:** 2026-06-02
- **Reviewer perspective:** visitor / prospective customer / App Review reviewer / journalist / educator /
  first-time player.

---

## 1. Pages reviewed (all routes in `src/main.tsx`)

| Route | File | Notes |
|-------|------|-------|
| `/` Landing | `src/pages/Landing.tsx` | Hero, 3 feature tiles, closing quote |
| `/game` About the Game | `src/pages/GamePage.tsx` | Design principles, Ward, mechanics, "who it's for" |
| `/report` About the Report | `src/pages/ReportPage.tsx` | Value, purpose, differentiation, contents, CTA |
| `/pricing` Pricing | `src/pages/PricingPage.tsx` | 3 credit packs, features, how-it-works, disclaimer |
| `/support` Support | `src/pages/Support.tsx` | FAQ (6) + contact |
| `/privacy` Privacy Policy | `src/pages/Privacy.tsx` + `policy-data/privacy/*` | 20 sections, 14 locales |
| `/terms` Terms of Service | `src/pages/Terms.tsx` + `policy-data/terms/*` | 32 sections, 14 locales |
| `/account-deletion` Account Deletion | `src/pages/AccountDeletionPage.tsx` | Steps, email path, retention notes |
| Shared chrome | `src/components/Layout.tsx`, `src/i18n/siteNav.ts` | Header nav, mobile menu, language switcher, footer, disclaimer |
| Document head | `index.html` | Title, description, OG/theme metadata |

Also inspected: `LanguageContext.tsx` (detection, RTL handling), `PolicyBlocks.tsx`, `vercel.json`
(redirects/SPA rewrite), `public/` assets (favicon, logo), `package.json`, build output (`dist/`).

## 2. Locales reviewed (14)

`en, ko, ja, zh, es, sv, fr, de, ru, ar, pt, it, nl, id`

**Translation quality is two-tier — this is the single most important finding:**

- **Tier A — professionally localized, premium-grade:** `en, ko, ja, zh, es, sv`.
  These read as written by a native, with adapted (not literal) marketing voice. The KO/JA/ZH/ES
  Report and Game pages even carry richer, hand-tuned copy than the English source.
- **Tier B — machine-translation grade:** `fr, de, ru, ar, pt, it, nl, id`.
  Grammatically mostly intact but full of literal/word-sense errors, register slips, and several
  outright howlers. A native speaker would immediately recognize these as machine output.

The English Privacy Policy and Terms of Service are genuinely well-drafted, comprehensive, and
consistent (independent-developer operator model, NZ governing law, Apple/Google store clauses,
GDPR/CCPA/LGPD/PIPA regional notices). Not machine-translated.

---

## 3. Findings

### CRITICAL (release-blocking: broken / nonsensical / misleading in customer-facing copy) — all FIXED

1. **Pricing hero badge mistranslated as a verb in 4 locales + wrong noun in 1.** The "Report Credits"
   pill — the first thing seen on the purchase page — rendered as:
   - DE `"Credits melden"` → "*Report (a complaint about) credits*"
   - RU `"Сообщить об авторах"` → "*Report about the authors*" (completely wrong meaning)
   - IT `"Segnala crediti"` → "*Flag/report credits*" (imperative verb)
   - NL `"Credits rapporteren"` → "*Reporting credits*" (gerund, wrong sense)
   - AR `"تقرير الاعتمادات"` → reversed/odd; inconsistent with the noun used in the body.
   → Fixed to the correct noun phrase, matching the term already used elsewhere in each language
   (`Berichtsguthaben`, `Кредиты для отчётов`, `Crediti per i report`, `Rapportcredits`, `أرصدة التقارير`).

2. **Support "Contact" body broken in all 14 locales.** The English source repeated the brand name
   ("Email Shadow Economy and Shadow Economy will respond…"), which machine translation turned into
   ungrammatical fragments everywhere (e.g. KO "이메일 Shadow Economy 및 Shadow Economy는…", JA "電子メール
   Shadow Economy および Shadow Economy は…", FR "Email Shadow Economy et Shadow Economy répondront…",
   plural-agreement errors in ES/IT/PT). On the one page a confused user lands on, the call-to-action read
   as gibberish. → Rewritten in all 14 locales to a natural "Email us and we'll reply within 1–2 business
   days where possible." (meaning unchanged).

3. **GamePage German howler:** credit-score copy read `"Eine saubere Schallplatte hat eine Obergrenze"`
   = "*A clean **vinyl record** has a ceiling*" (literal mistranslation of "clean record").
   → Fixed to `"Eine saubere Kredithistorie hat eine Obergrenze."`

4. **GamePage Dutch broken/garbled string:** `"Winkelpuien afm. … Eigenschapswaarden bewegen."` —
   "afm." is a broken truncation, and "Eigenschapswaarden" means *attribute/property (programming) values*,
   not real-estate values. Looks unfinished. → Fixed to `"Etalages doven. … Vastgoedwaarden verschuiven."`

5. **GamePage Arabic:** `"يستجيب جهاز Ward الخاص بك"` = "*Your Ward **device** responds*" (treats the Ward
   as a gadget). → Fixed to drop "جهاز/device".

### MAJOR (noticeably unprofessional / wrong meaning, confident fixes) — FIXED

6. **ReportPage "comes from play, not a form" mistranslated as "shape/form" in 8 locales.** The intended
   "form" = a questionnaire you fill in; MT chose the geometric/abstract sense (FR/DE/PT/NL "forme/Form/forma/vorm",
   RU "формы", IT "forma", ID "bentuk", AR "الشكل"). → Fixed each to the questionnaire sense
   (`formulaire / Formular / formulário / formulier / анкета / questionario / kuesioner / استبيان`).

7. **ReportPage FR "Clair, pas trop de monde."** = "*Clear, not too many **people**.*" (literal of "not crowded").
   → Fixed to `"Clair, pas surchargé."`

8. **ReportPage PT "Começa com uma brincadeira"** = "*Begins with a **joke/prank**.*" (mistranslation of
   "begins with play"). → Fixed to `"Começa com o jogo."`

9. **ReportPage AR/RU "run/playthrough" mistranslated.** AR onceTitle `"مسرحية واحدة"` = "*one (theatrical)
   play*"; AR onceBody2 `"الجري الحقيقي"` and RU onceBody2 `"реальному пробегу"` = "*real jogging/mileage*";
   RU ctaTitle `"свой собственный узор"` = "*your decorative pattern*". → Fixed to game/play and "закономерности".

10. **PricingPage "Finish a run" → jogging.** AR step `"قم بإنهاء الجري"` and RU `"Завершить пробежку"`
    both meant physical jogging. → Fixed to "complete a round / finish the game".

11. **Landing AR badge `"…القائمة على الدوران"`** = "*based on **rotation/spinning***" (vs. the correct
    "turn-based" used in the body). → Fixed to `"قائمة على الأدوار"`.

12. **Landing NL "geaarde regels"** = "*earthed (electrical) rules*" for "grounded rules".
    → Fixed to `"gefundeerde regels"`.

13. **Footer label IT `"politica sulla riservatezza"`** — lowercased and non-idiomatic among otherwise
    Title-Case footer labels. → Fixed to `"Informativa sulla privacy"`.

### MINOR (polish; documented, mostly not changed to avoid over-editing)

- **No per-route `<title>`/meta.** Every route serves the static `index.html` title
  ("Shadow Economy — Turn-Based Economic Simulation") and one description; the SPA never updates
  `document.title` per page. Acceptable for launch but weak for SEO/sharing of deep links.
- **`/game` page has no `<h1>`** (opens straight into an `<h2>` "Design principles"). Minor heading-hierarchy/SEO gap.
- **Tier-B residual MT phrasing** beyond the items fixed above: pervasive "run" → "race/corsa/course/corrida"
  renderings, stiff register, and literal idioms remain in `fr/de/ru/ar/pt/it/nl/id` Report/Game/Pricing prose.
  These are not broken, but they are not premium. (See Remaining Risks.)
- **`Ward` article/gender inconsistency** within some Tier-B locales (DE "die Ward"/"der Ward",
  IT "lo Ward"/"la Ward"). Cosmetic.
- **Repo `README.md`** is still the default Vite template text. Not served to users; housekeeping only.
- **`og:image` was absent** (now added).

### Things that are GOOD (no change needed)

- No placeholders, TODO/FIXME, `lorem ipsum`, `localhost`, `example.com`, dev URLs, or debug content
  anywhere in `src`, `public`, or `index.html`.
- Favicon (`favicon.svg`) and logo present; `vercel.json` correctly bare-domain-redirects and SPA-rewrites.
- RTL handled: `LanguageContext` sets `document.documentElement.dir = 'rtl'` for Arabic.
- Language switcher present in both desktop and mobile headers; selection persisted to `localStorage`,
  with graceful fallback when storage is blocked.
- Responsive layout is consistent (`max-w-*` containers, `sm:` breakpoints, mobile hamburger menu,
  flex-wrapping footer). No overflow/clipping issues found in markup review.
- **Purchase clarity (Phase 5):** Pricing + Report + Account-Deletion + Support consistently state:
  1 credit = 1 report for 1 completed game; credits never expire; credits are consumable and a used credit
  is not restored as unused; credits tie to the signed-in account; "in-app purchase only"; USD prices are
  reference and final terms are shown by the store. This is clear and internally consistent.
- **App-Review / trust (Phase 8):** Strong, repeated educational-simulation disclaimers in the footer,
  Pricing, Report, Privacy §5.4, and Terms §15 — explicitly "not financial, investment, tax, legal,
  accounting, or professional advice" and "does not guarantee any real-world outcome." No investment/tax/legal
  advice language, no earnings guarantees, no misleading claims. Account-deletion path is documented for
  reviewers (in-app + email), satisfying store account-deletion requirements.

---

## 4. Fixes applied & files changed

7 files in `shadow-economy-web` (build + lint pass):

| File | Change |
|------|--------|
| `index.html` | Added `og:url`, `og:image`, and Twitter card (`summary`) metadata. |
| `src/i18n/siteNav.ts` | IT footer privacy label → "Informativa sulla privacy". |
| `src/pages/Landing.tsx` | AR badge "rotation"→"turn-based"; NL "geaarde"→"gefundeerde regels". |
| `src/pages/PricingPage.tsx` | 5 badge noun fixes (DE/RU/IT/NL/AR); AR/RU "finish a run" jogging fix. |
| `src/pages/ReportPage.tsx` | 8× "form"→questionnaire; FR "not crowded"; PT "joke"; AR play/jog; RU pattern/run. |
| `src/pages/Support.tsx` | Rewrote broken `contactBody` in all 14 locales; ZH `contactTitle` "联系方式"→"联系". |
| `src/pages/GamePage.tsx` | DE "vinyl record"; NL garbled storefront/property line; AR "Ward device". |

No business policy, pricing, or legal meaning was changed. No redesign; no new product claims.

## 5. Validation results

- `npm run lint` → **clean** (no warnings/errors).
- `npm run build` (`tsc -b && vite build`) → **success**; all 14 locale chunks compiled, Arabic/RU RTL
  bundles included. (LF→CRLF git warnings only; cosmetic.)
- All 8 routes resolve in `main.tsx`; SPA rewrite + bare-domain redirect verified in `vercel.json`.
- No untracked content ships: `.cursor/` and `scripts/` are untracked dev folders; `dist/` contains only
  built assets + favicon/logo.

## 6. Remaining risks

1. **Tier-B locales are not yet premium-grade (Major, not blocking).** I corrected every broken/nonsensical
   string and the highest-confidence word-sense errors, but `fr, de, ru, ar, pt, it, nl, id` still contain
   machine-translation register and residual literal phrasings on the Game/Report/Pricing marketing prose and
   throughout the long-form Privacy/Terms translations. **Recommendation:** before promoting the site as
   "premium" in those 8 markets, commission a native-linguist proofreading pass. I deliberately did **not**
   rewrite entire paragraphs (especially legal text) wholesale, because broad re-translation risks introducing
   new errors and the legal docs carry a Korean-governing-language clause (Terms §31.6) that makes other
   languages "for convenience."
2. **SEO/social for deep links (Minor).** Client-side SPA with a single static title/description; crawlers and
   share unfurls of `/pricing`, `/report`, etc. all show the homepage title. Consider per-route titles
   (lightweight `document.title` effect or prerender/SSG) post-launch.
3. **Legal translation fidelity (low, by design).** The translated Privacy/Terms were not line-by-line
   verified against the English/Korean source for legal equivalence; the convenience-translation + governing
   clause mitigates this, but a counsel review of at least the EU-market translations is advisable.

## 7. Final release recommendation

**Ship-ready for launch in the 6 fully-localized markets (en, ko, ja, zh, es, sv).** After this pass, a
first-time visitor in those languages gets a clean, trustworthy, internally consistent experience:
the game's purpose, the Ward concept, the report system, the educational framing, and exactly what a purchase
buys are all clear and credible. No release-blocking issues remain — every Critical and Major item found has
been fixed, and the build/lint are green.

**Conditional for the other 8 markets (fr, de, ru, ar, pt, it, nl, id):** the embarrassing/broken strings are
fixed, so nothing now reads as *broken* — but the prose still reads as *machine-translated* in places. These
locales are safe to launch, but a native-speaker editorial pass is recommended before they meet the
"premium product" bar the brand is aiming for.
