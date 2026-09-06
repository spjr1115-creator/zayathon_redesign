# ZAYATHON Website — Technical Architecture Document

| Field | Value |
|---|---|
| **Project** | ZAYATHON website (redesign) — see `prd.md` & `design-system.md` |
| **Status** | **v1.1 — aligned with the shipped v0.1 implementation** (2026-09-06) |
| **Date** | September 6, 2026 |
| **Scope** | Greenfield build. Static-first landing page (all 12 sections) shipped; secondary pages & registration flow pending. |

> **v1.1 changes:** framework moved to **Astro 7** (latest, installed from `astro@^7.3.1`); styling is **plain CSS on custom-property tokens** (no Tailwind — the design is bespoke and `design-system.md` forbids extra runtime deps); content lives in a **typed data module** (`src/data/site.ts`) rather than Astro Content Collections (deferred; see §4). Sections marked ✅ below are implemented; ⚠️ are pending.
>
> **v2 — “paper & ink” visual redesign (2026-09-06):** the shipped page was re-composed from the COEXISTENCE SIGNAL system to a **premium editorial/campaign visual language** — cinematic full-viewport video hero (no cards, no grid backgrounds, no gradient text), floating two-pill minimal navigation, light editorial spreads on `#F0F0EE` with `#111` type, blue reserved for interactive details, `Inter Tight` display type, signature vertical interactive domain list, dramatic type-led prizes/timeline/FAQ, and a dark cinematic closer + footer. §6 below documents the **v2 tokens**; the older palette/type directions are superseded.

---

## 1. Guiding Principles

Derived from `prd.md` §3, §8.3, §10:

1. **Static-first.** The site is content-heavy marketing, discovered mostly via social/Instagram and search. Default to static HTML at the edge; add interactivity only where needed (countdown, accordion, domain filter).
2. **Content is data, not markup.** Every fact (dates, prizes, fees, sponsors) lives in structured content files behind a single `site.config`, so organizers can correct facts without touching components — and so unverified facts (PRD §14) can be rendered as "To be announced" by flipping one flag.
3. **No copied UI.** New component system and design tokens; the existing site is a content reference only (PRD §8.1).
4. **A11y & performance are requirements, not polish** (WCAG 2.1 AA, Lighthouse ≥ 90).
5. **Verification-safe content.** Anything unconfirmed is either absent or explicitly "TBA" — never invented (PRD §14).

---

## 2. Recommended Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | **Astro 7 + TypeScript** ✅ | Static-first; zero-JS pages; tiny vanilla-JS islands. Alternative: Next.js if a registration backend appears (see §12) |
| **Styling** | **Plain CSS + design tokens** (`tokens.css`) ✅ | All styles hand-authored on custom properties per `design-system.md`; no utility framework (keeps the bespoke look; Tailwind could be layered later if desired) |
| **Content** | **Typed data module** `src/data/site.ts` ✅ | Single source of truth with exported typed arrays; simplest scheme for a single-page site. Astro Content Collections (with Zod) remain the upgrade path when long-form pages/Markdown arrive |
| **Validation** | **TypeScript types** ✅ (Zod deferred ⚠️) | `tsc`/`astro build` fail on shape drift; a runtime schema layer can be added with Content Collections |
| **Deploy** | Vercel or Netlify (static output) | Free tier, global CDN, preview deploys per branch |
| **Analytics** | Plausible (privacy-friendly, cookieless) — **only if organizers approve** | PRD §10 requires consent-free analytics or none |
| **Image handling** | `@astrojs/image` (astro:assets) | Local + remote image optimization, AVIF/WebP |
| **Testing** | Vitest (unit, utils/config) + Playwright (smoke: nav, countdown, a11y spot checks) | Keep small; site is mostly static |

**Not included (v1):** CMS backend, auth, database, payment processing, forms backend. Registration either links out to the organizers' existing form or uses a static capture form routed to an agreed endpoint (open decision, PRD §12).

---

## 3. High-Level Architecture

```
┌────────────────────────── User ──────────────────────────┐
│  Mobile / Desktop / Social (Instagram, WhatsApp, email)  │
└──────────────────────────┬───────────────────────────────┘
                           │ HTTPS (CDN edge, Vercel/Netlify)
┌──────────────────────────▼───────────────────────────────┐
│                    Static Site (Astro)                    │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │  Pages       │  │  Components  │  │  Islands (JS)  │  │
│  │  (astro)     │  │  (astro)     │  │  (reveal,      │  │
│  └──────┬───────┘  └──────┬───────┘  │   nav, faq)    │  │
│         │                 │          │                 │  │
│  ┌──────▼─────────────────▼──────────▼───────────────┐  │
│  │        Content layer (type-safe, typed module)     │  │
│  │        src/data/site.ts  ·  src/styles/*.css       │  │
│  └───────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                           │ `astro build` → static HTML+assets
┌──────────────────────────▼───────────────────────────────┐
│  Build: `astro check` + Vitest + Playwright + Lighthouse │
│  CI (GitHub Actions) → deploy preview → promote to prod  │
└──────────────────────────────────────────────────────────┘
```

### 3.1 Data flow
1. **Content module** (`src/data/site.ts`) is the single source of truth — editors change copy/facts in one typed file; components never hardcode event facts. ✅
2. **TypeScript** validates shapes at build (`astro build` runs `astro check`-style diagnostics via the strict tsconfig; a broken array/type fails the build). ✅ Zod deferred ⚠️.
3. **Components** receive typed imports/props only. ✅
4. **Build output** is fully static HTML + hashed CSS + a few kilobytes of vanilla JS (scroll-reveal observer, header menu, native `<details>` FAQ). ✅ No framework islands shipped.

---

## 4. Content Model (single source of truth) — implemented ✅

Location: `src/data/site.ts` (single typed module; one export per content area). Every fact carries a source tag comment (`[official]` / `[draft]` / `[social]`), per `prd.md` §16.

### 4.1 Global facts & disclosure handling
```ts
export const site = {
  name: 'ZAYATHON', edition: 'February 2026', theme: 'Code for Coexistence',
  tagline: ['Build.', 'Innovate.', 'Win.'], byline: 'CREATED BY ZAYA CODE HUB TEAM',
  org: 'ZAYA CODE HUB', copyrightYear: 2026, officialUrl: 'https://zayathon.in/',
  contact: { email, phoneDisplay, phoneHref, altPhoneDisplay, instagram, venue, venueFull },
  heroStatus: 'Registrations open',
  eventFacts: { date, duration, format, teams },   // official-site facts
  intro: { statement, detail },
} as const;

export const stats / pillars / domains / benefits /
               timeline / prizeTiers / specialCategories /
               sponsorReasons / faqItems / register = [...];  // typed arrays
```

**Disclosure handling (PRD §14 in code):**
- Facts that are officially undisclosed are *not* invented — e.g. special-category prize amounts render as `Prize · To be revealed` (`.tba` chip style), and the sponsors list stays empty until organizers confirm (only the “Become a sponsor” CTA + value props render).
- All displayed numbers/dates trace to the official site; conflict notes (Feb 10 vs Feb 15–16, fee, pool size) are documented in the file header and in `prd.md` §14 for organizer sign-off. When verified, edit this one file.
- The planned `confirmed: boolean` flag object (v1.0 §4.1) was simplified: **absence = don't show**, and each data row documents its source. Add explicit flags if a section needs a single switch later.

### 4.2 Exports (typed arrays → sections)
| Export | Renders | Notes |
|---|---|---|
| `site` | Header, Hero, Footer, Final CTA | brand + contact + event facts |
| `navLinks` | Header (desktop + mobile) | 6 anchors |
| `stats` | Stats band | 500+ / 100+ / 20+ / ₹10,000+ `[official]` |
| `pillars` | About | 4 rows `[official]` |
| `domains` (+`domainsNote`) | Domains grid | 9 domains `[official]` |
| `benefits` | Why participate | 6 benefits |
| `timeline` | Timeline | 5 official steps |
| `prizeTiers`, `specialCategories` (+intro/note) | Prizes | official tiers; categories “To be revealed” |
| `sponsorReasons`, `sponsorsNote` | Sponsors | reasons from the official sponsor post |
| `faqItems` | FAQ | 7 Q&As |
| `register` | Final CTA | copy + contact actions |

Astro Content Collections + Zod remain the planned upgrade when `/register`, `/faq` etc. become real pages with Markdown copy — see §5.

---

## 5. Site Structure & Routing — implemented ✅ (landing), ⚠️ (secondary pages)

**Shipped:** a single statically generated landing page at `/` (`src/pages/index.astro`) assembling the sections below in the approved order (1→12). Section navigation uses same-page anchors + CSS smooth scrolling (`scroll-behavior: smooth`; `scroll-margin-top` clears the sticky header). Each section is a component — cutting one = removing one line in `index.astro`.

```
/  index.astro
  1  Header (sticky nav)        7  Timeline   (#timeline)
  2  Hero (#top)                8  Prizes     (#prizes)
  3  About (#about)             9  Sponsors   (#sponsors)
  4  Stats band                 10 FAQ        (#faq)
  5  Domains (#domains)         11 Final CTA  (#register)
  6  Why participate (#why)     12 Footer
```

**Not yet built (next milestone):** secondary routes `/register`, `/faq`, `/guidelines`, `/sponsors`, `/contact` and venue map — data already exists to render them from the same module. Contact actions currently point to `mailto:` / `tel:` (the organizers' real contact) since no registration URL is confirmed yet (PRD §12).

---

## 6. Design Token System — v2 “paper & ink” ✅

One source of tokens in `src/styles/tokens.css` — the v2 editorial/campaign system:

```css
:root {
  /* paper surfaces */  --paper: #f0f0ee; --paper-2: #e9e9e6; --paper-3: #e1e1dd; --pill: #ededed;
  /* ink (text on paper) */  --ink: #111111; --ink-2/3/4: muted steps;
  /* night (cinematic surfaces) */  --night: #0e0e0e; --night-2: #191919; --on-night(+mute/faint): #f0f0ee;
  /* accent (interactive/small details only) */  --blue: #1d4ed8; --blue-deep: #163daa;
  /* hairlines */  --line(-soft/-strong) on paper; --line-night(-soft);
  --r-sm/md/pill; --shadow-float(-night);
  --font-display: 'Inter Tight'; --font-body: 'Inter'; --font-mono: 'JetBrains Mono';
  --display-hero/lg/md; --h2/h3/lead/body/meta/micro (fluid editorial scale);
  --container(-wide); --space-section; --space-row; --ease-out; --dur-*;
}
```

- Global primitives (buttons, eyebrow, reveal, skip link, focus, reduced-motion) live in `src/styles/base.css`; section styles are scoped per component. The old card/chip/glow/gradient vocabulary was removed from the primitives — the page no longer uses card grids.
- **Colour/type rules:** light editorial body on paper; night reserved for the video hero, closing CTA and footer; blue only on interactive elements and tiny details (dots/arrows/links); display type is medium-weight `Inter Tight` with tight tracking; uppercase only for labels/metadata/display headlines.
- Fonts loaded via Google Fonts `<link>` with `display=swap`; self-hosted woff2 remains on the hardening list (§10).

---

## 7. Component Architecture — implemented ✅

```
src/
├── pages/index.astro        # the single landing page (§5)
├── layouts/BaseLayout.astro # <head> (meta/OG/fonts), skip link, scroll-reveal script
├── components/
│   ├── Header.astro         # floating two-pill nav (logo pill + links pill), scroll transform, mobile menu ✅
│   ├── Footer.astro         # night editorial closer: brand, explore, organisers, contact, venue ✅
│   ├── Icon.astro           # custom 24px stroke glyph set (used in the domain list)
│   └── sections/            # v2 editorial compositions (see §16 addendum)
│       ├── Hero.astro       # 100svh cinematic video hero — corner metadata, lower-left headline, scroll cue, no cards
│       ├── About.astro      # magazine statement spread (“THE WORLD HAS PROBLEMS…”) + footnote facts
│       ├── StatsBand.astro  # quiet typographic figures row (no boxes)
│       ├── Domains.astro    # signature vertical interactive list — hover tint/indent, expand-on-click descriptions
│       ├── Why.astro        # numbered editorial list (BUILD/LEARN/…/SHOWCASE)
│       ├── Timeline.astro   # minimal schedule — large dates + large stage names on hairlines
│       ├── Prizes.astro     # dramatic “WHAT'S AT STAKE?” type + bare numeric podium columns
│       ├── Sponsors.astro   # editorial sponsor wall (no cards/logos until confirmed)
│       ├── Faq.astro        # “YOU ASK. WE ANSWER.” spread + native <details> accordion
│       └── FinalCta.astro   # cinematic night closer (“READY TO BUILD WHAT'S NEXT?”)
├── data/site.ts             # content module (§4)
├── styles/tokens.css        # design tokens (§6)
├── styles/base.css          # primitives + utilities
├── public/favicon.svg       # original Z mark
└── (future) pages/register, /faq, /guidelines, /sponsors, /contact
```

### 7.1 Interactivity budget (implemented — tiny)
| Component | Why JS | Implementation |
|---|---|---|
| Scroll reveal | section entrances | One IntersectionObserver in `BaseLayout`; `[data-reveal]` + stagger `--d`; disabled under reduced motion ✅ |
| Mobile nav | menu + scroll state | ~25-line vanilla script in `Header.astro` (`aria-expanded`, `hidden`, close-on-click) ✅ |
| FAQ | expand/collapse | Native `<details name="…">` — zero JS, grouped accordion ✅ |
| Countdown | hero live timer | ⚠️ **Deferred** — hero ships an “event spec sheet” (date/duration/format/teams) instead; a ticking island is a config flip once the next-edition date is confirmed (PRD §14) |
| DomainsFilter | per-domain statement filtering | ⚠️ Deferred until per-domain statements are published |

Total shipped JS: a few KB (unbundled inline scripts). Target **< 30 KB gzipped** holds with headroom.

### 7.2 Progressive enhancement
- All content readable without JS (server-rendered). ✅
- FAQ & nav work without JS (`<details>`, `hidden` default). ✅
- Smooth scrolling is pure CSS with a reduced-motion fallback. ✅
- Forms: none shipped; `mailto:`/`tel:` contact actions only (registration flow pending PRD §12).

---

## 8. The "To Be Announced" (TBA) System — partial ✅ / ⚠️

Implements PRD §14 mechanically:

1. **Source-tagged content** ✅ — every data row in `site.ts` carries its source tag; disputed facts are documented in the file header rather than asserted.
2. **Designed-in TBA states** ✅ — special-category prizes render `Prize · To be revealed` in dashed `.tba` chips; sponsors section renders the invite CTA + reasons without placeholder logos or names; copy says announcements are confirmed by organisers.
3. **Graceful sections** ✅ — every section is safe to ship with zero sponsor data and undisclosed amounts.
4. **Build-time placeholder lint** ⚠️ — not yet implemented as a script. Until then, the rule is manual: no `TechCorp`/`Lakhs`/`****`-style strings exist anywhere in `src/`. Add as a CI step when CI is set up (§11).

---

## 9. SEO, Social & Structured Data — partial ✅ / ⚠️

- **Meta + OG + canonical** ✅ — implemented in `BaseLayout` (`title`, `description`, `og:*`, theme-color, favicon).
- **sitemap.xml + robots.txt** ⚠️ — add via `@astrojs/sitemap` at deploy time.
- **schema.org `Event` JSON-LD** ⚠️ — deliberately omitted until the event date is confirmed (PRD §14): emitting an unconfirmed date would violate the “never publish wrong facts” rule. Add once organisers confirm the edition window.
- **og:image** ⚠️ — needs a branded social card asset from the final identity.

---

## 10. Performance & Accessibility Budgets

| Metric | Target |
|---|---|
| Lighthouse (mobile) | ≥ 90 all four axes (landing) |
| Initial JS | ≤ 30 KB gzipped (landing) |
| LCP | ≤ 2.5 s (3G-mid / Moto G class) |
| CLS | ≤ 0.1 |
| Fonts | `font-display: swap`; self-hosted woff2 |
| Images | astro:assets → AVIF/WebP, responsive `srcset`, explicit dimensions |

**A11y:** WCAG 2.1 AA — skip link, landmark/semantic HTML, visible focus states, 4.5:1 contrast, reduced-motion support (countdown scroll reveal off), keyboard-operable FAQ/nav, descriptive alt text, `aria-expanded` on accordions, form labels + error announcements.

---

## 11. Build, CI & Quality Gates

```yaml
# .github/workflows/ci.yml (concept)
- npm ci
- astro check          # type + content-schema checks
- vitest run           # unit: config validation, formatters, TBA logic
- npm run lint:tba     # placeholder leak scan (§8.4)
- playwright test      # smoke: nav, register CTA, countdown, a11y spot-checks
- lighthouse-ci        # budgets (§10) on preview URL
```
Deploy: Vercel/Netlify — branch previews on PRs, promote to prod on merge to `main`. **No analytics until organizer approval** (PRD §10); a cookie banner is included only if consent-requiring tools are added.

---

## 12. Decision Points & Alternatives

| Decision | Recommended | Alternative | Trigger to switch |
|---|---|---|---|
| **Framework** | Astro (static-first) | Next.js App Router | Organizers require server-side registration, payment callbacks, or dynamic per-team content in v1 |
| **Forms** | Link out to organizers' existing form | Static capture form → agreed endpoint (Formspree/Web3Forms) | No existing form exists |
| **Payments** | Out of scope v1 | Razorpay (India) via backend | Fee (INR 200) must be collected on-site |
| **CMS** | Content collections + JSON files | Decap/Sanity | Organizers want web-based editing without git |
| **Theme** | Single theme (decision at design kickoff) | Light + dark via `data-theme` | Tokens already support both for free |
| **Countdown date** | From `site.config.event.date` | Hardcoded | Never — config only |

---

## 13. Security & Ops Notes

- Fully static ⇒ no server attack surface; keep third-party JS to zero where possible.
- Forms (if any) submitted to a vetted endpoint; add basic honeypot + rate limiting if self-hosted.
- Supply chain: lockfiles committed; `npm audit` in CI.
- Content files are code — PRs review copy changes (also serves as the fact-approval workflow for PRD §14).
- Backups/recovery: git history is the source of truth; no database.

---

## 14. Milestone Mapping (from PRD §13)

| PRD milestone | Status (2026-09-06) |
|---|---|
| M1 Kickoff | ✅ Stack confirmed (Astro 7, plain-CSS tokens), `site.ts` data skeleton shipped |
| M2 Content finalization | ✅ Typed data module populated from official-site facts; disputes flagged for sign-off |
| M3 Design | ✅ COEXISTENCE SIGNAL identity (design-system.md) → `tokens.css` |
| M4 Build | ✅ Landing with all 12 sections, responsive + sticky nav + smooth scroll (v0.1) |
| M5 QA | ◐ Manual: build passes; DOM/a11y tree verified; mobile visual pass. CI gates (§11) not yet wired |
| M6 Launch | ⚠️ Pending date confirmation → OG image, Event JSON-LD, sitemap, analytics decision

---

## 15. Open Items (inherit from PRD §12/§14)

1. ⚠️ Final event dates/duration → re-enable hero countdown + Event JSON-LD (data module flip).
2. ⚠️ Registration flow: link-out vs. capture form vs. payment (fee ₹200 is draft-sourced only) → drives `/register` page + backend choice.
3. ⚠️ Real sponsor data → fills the sponsors list.
4. ⚠️ Secondary pages `/faq`, `/guidelines`, `/sponsors`, `/contact` (+ venue map).
5. ⚠️ Organizer approval of analytics/cookie banner; og:image asset; self-hosted fonts.
6. ⚠️ CI wiring (placeholder lint, Lighthouse, Playwright smoke) per §11.

---

## 16. Implementation Snapshot (v0.1, 2026-09-06)

**What ships now:**
- `npm run dev` — Astro dev server (default :4321) · `npm run build` — static build to `dist/` · `npm run preview` — serve the build.
- Runtime deps: `astro@^7.3.1` only. Node ≥ 22 recommended.
- Verified: production build passes; one H1; semantic landmarks; single hidden nav duplication avoided (desktop + mobile share one `navLinks` source); FAQ is native `<details>`; mobile menu honours `aria-expanded`/`hidden`; no horizontal overflow at 354px; reveal observer + reduced-motion safe; screenshots reviewed at mobile width.
- Content: only official-site facts displayed; undisclosed items use the designed TBA pattern; every figure traceable to its source comment.

**Known divergences from v1.0 plan (intentional):**
- Astro 5 → **Astro 7** (current stable); API surface used is identical for this site shape.
- Tailwind/Zod/Content Collections **not shipped** — plain CSS tokens + TS types chosen for the bespoke design (see §2/§4 for the upgrade path).
- Hero **spec-sheet module instead of live countdown** until the edition date is confirmed; countdown component design is documented in `design-system.md` §10.
- FAQ grew to 7 Q&As (still source-tagged); organiser **team section deferred** (not in the 12-section brief).

**v0.2 — “paper & ink” visual redesign (2026-09-06, shipped):**
- All 12 sections re-composed to the editorial campaign language in §6; architecture, content module, anchors, semantics and all destinations unchanged.
- Hero: full-viewport `100svh` `<video>` (external CloudFront source, autoplay/muted/loop/playsinline, `object-fit: cover` + a JS retry-play fallback), readability scrims + grain + vignette only, corner metadata (top-left brand, top-right 10 HOURS / UP TO 4 MEMBERS on desktop), lower-left uppercase display headline “BUILD WHAT / THE FUTURE / NEEDS.”, pill CTAs, “SCROLL TO EXPLORE ↓” cue. No spec-sheet card.
- Nav: two floating pills (`#EDEDED`), circular ink “Z” mark + links pill with filled “Register”; gains border/shadow after scrolling; light dropdown menu on mobile.
- Domain list is now the signature piece: full-width rows with thin rules, mono index, glyph, uppercase name; hover = tint + indent + arrow reveal; click/tap expands the description (`aria-expanded`, grid-rows animation).
- Verified: `astro build` passes; video plays (4K, readyState 4); FAQ/menu/domain-row interactions pass; no horizontal overflow at 354px; visual passes on hero, statement, domains, prizes, FAQ, closing CTA + footer. Secondary pages & countdown remain deferred as before.