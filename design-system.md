# ZAYATHON 2026 — Visual & UX Concept: **"COEXISTENCE SIGNAL"**

| Field | Value |
|---|---|
| **Project** | ZAYATHON website redesign — see `prd.md` (requirements) & `architecture.md` (tech) |
| **Status** | Concept v1.0 — palette/type/tokens approved-for-prototype |
| **Date** | September 6, 2026 |
| **Concept codename** | **COEXISTENCE SIGNAL** — *Two signals. One frequency.* |
| **Status** | ⚠️ **Superseded in production (2026-09-06)** — the shipped v0.2 page uses the **“paper & ink” editorial system** in `src/styles/tokens.css` (see note below). Kept as the reference for the earlier dark/gradient exploration. |

> **v2 note — “paper & ink”.** Per the redesign brief, the shipped landing page replaced this system's palette/typography/composition with a premium editorial language: light paper body (`#F0F0EE`, type `#111`), cinematic night surfaces (`#0E0E0E`) only for the video hero / closing CTA / footer, **blue (`#1D4ED8`) reserved for interactive elements and small details**, `Inter Tight` medium-weight display type with tight tracking, no gradients/glows/cards, a full-viewport video hero with floating two-pill navigation, and the vertical interactive domain list. Colour/token/type values above remain valid history but are **not** the current implementation.

> This document defines a **completely original** visual identity. It does not reuse the existing zayathon.in layout, components, colors, or section styling. All facts on the site remain governed by the `confirmed`-flag system in `architecture.md` §8 — every figure below in *italic* is representative placeholder text, not published content.

---

## 1. Creative Concept

ZAYATHON's 2026 theme is **"Code for Coexistence"** — human builders and intelligent machines working as one. The identity makes that idea visible as **two light signals**:

- **Cyan** — the human signal. Code, craft, the builder at the keyboard.
- **Violet** — the machine signal. AI, intelligence, the system answering back.
- **Where they meet** — a cyan→violet gradient we call the **Merge**. Used only at moments of convergence: the hero's central word, the primary action, the winner's moment.

The interface around these signals is deliberately **cold, precise, engineered**: near-black surfaces, hairline rules, mono data readouts, an invisible technical grid. The emotion comes from the signals, not the chrome. It should read like a piece of **precision instrument hardware**, not a college poster.

**Feel keywords:** innovative · bold · technical · youthful · competitive · premium · professional.

**One-sentence brief:** *A dark, precision-engineered stage where two electric signals — human code and machine intelligence — meet, and the whole page glows where they merge.*

---

## 2. Color System

### 2.1 Palette

**Neutrals — "Carbon" scale** (cool, near-black, blue undertone). The UI is 90% these.

| Token | Hex | Role |
|---|---|---|
| `--carbon-950` | `#04060B` | **Void** — deepest layer (behind hero grid, footer) |
| `--carbon-900` | `#070A12` | **Base** — page background |
| `--carbon-850` | `#0C111C` | **Panel** — cards, wells |
| `--carbon-800` | `#131A2A` | **Raised** — hover, popovers, mobile menu |
| `--carbon-700` | `#1D2639` | **Edge solid** — strong dividers, input bg |

**Text — "Ice" scale**

| Token | Hex | Role |
|---|---|---|
| `--ice-100` | `#F2F5FB` | Primary text (≈17:1 on base) |
| `--ice-300` | `#A9B4C9` | Secondary text (≈8.5:1) |
| `--ice-500` | `#6E7A93` | Tertiary / captions (≈5:1 — min for large text only) |

**Signals — accent**

| Token | Hex | Role |
|---|---|---|
| `--cyan` | `#2FE0E6` → refined `#2FD8E6` | **Human signal** — links, live states, active nav, data highlights |
| `--cyan-deep` | `#0E8FA6` | Cyan text on light/bright contexts, pressed states |
| `--violet` | `#9D8CFF` | **Machine signal** — AI domain accents, secondary highlights |
| `--violet-deep` | `#6D5AE6` | Gradient terminus, pressed states |
| `--gold` | `#FFC65C` | Reserved **exclusively** for 1st place / Grand Champion |
| `--ok` | `#3DD68C` | Success (certificates, "completed" timeline chips) |
| `--warn` | `#FFB454` | Warnings / deadlines |
| `--danger` | `#FF6B81` | Errors only |

**The Merge gradient (signature):**
```css
--merge: linear-gradient(120deg, #2FD8E6 0%, #9D8CFF 55%, #6D5AE6 100%);
/* Usage budget: hero headline accent word · primary CTA edge-glow · 1st-prize ring ·
   active page indicator · merge moment only. Max 4–5 instances per viewport. */
```

### 2.2 Usage rules
- **90/8/2:** ≈90% carbon neutrals, ≈8% ice text, ≈2% signal color on any screen.
- One dominant signal per section. Cyan leads; violet supports; gold is a single-object honor, never a theme.
- Signal color is for **meaning, not decoration**: live/active = cyan, AI/innovation = violet, winner = gold.
- Never put signal text on signal backgrounds; never use the Merge on text below 28px (contrast); never more than one gradient per component.
- Hover is communicated with **border + glow**, not hue-shifting whole surfaces.

---

## 3. Typography

### 3.1 Typefaces (all Google Fonts, self-hosted woff2)

| Role | Font | Why |
|---|---|---|
| **Display** | **Space Grotesk** (500–700) | Geometric-tech without being gimmicky; premium startup feel |
| **Body/UI** | **Inter** (400–600) | Neutral, crisp at small sizes |
| **Data** | **JetBrains Mono** (400–600) | Eyebrows, timestamps, countdown, stats — the "instrument readout" voice |

### 3.2 Scale (fluid, modular)

| Step | Size / line-height | Track | Use |
|---|---|---|---|
| **Display / hero** | `clamp(3rem, 7.5vw, 6.5rem)` · 0.98 | `-0.03em` | H1 headline, weight 600, uppercase optional |
| **H2 / section** | `clamp(2rem, 4vw, 3.25rem)` · 1.05 | `-0.02em` | Section titles, weight 600 |
| **H3 / card** | `1.25–1.5rem` · 1.2 | `-0.01em` | Card titles, weight 600 |
| **Lead** | `clamp(1.05rem, 1.6vw, 1.3rem)` · 1.6 | `0` | Section intros, ice-300 |
| **Body** | `1rem` · 1.65 | `0` | Paragraphs, ice-300/100 |
| **Mono sm** | `0.75rem` · 1.4 | `+0.18em` uppercase | Eyebrows, labels, chips |
| **Mono data** | `clamp(1.5rem, 3vw, 2.5rem)` · 1 | `0` tabular-nums | Countdown, big stats |

### 3.3 Voice patterns
- **Eyebrow:** mono, 12px, uppercase, wide-tracked, ice-500 with a cyan index — `01 // DOMAINS`, `02 // PRIZES`.
- **Section headline:** display, ice-100, with one **Merge word** max — e.g. *"Choose your* **arena** *of ideas."*
- **Hero:** three stacked display lines, each ~90 characters wide max; center of the three gets the Merge gradient text treatment (`background-clip: text`).
- Numbers (stats, prizes, countdown, dates) are **always JetBrains Mono** with `font-variant-numeric: tabular-nums` so digits don't jump.

---

## 4. Spacing & Layout Grid

- **Base unit 4px.** Rhythm scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`.
- **Section padding:** `clamp(88px, 12vh, 160px)` vertical; content column max **1200px**; hero allowed wider (1440px).
- **Grid:** 12 columns desktop (24px gutter), 4 columns mobile (16px gutter). Editorial asymmetry encouraged — e.g., intro text at col 1–5, visual at col 7–12.
- **Rules of rhythm:** consistent section padding beats consistency *within* a section; two adjacent sections never share identical backgrounds without a hairline rule between.

---

## 5. Surfaces, Backgrounds & Patterns

### 5.1 Background stack
- **Base:** `--carbon-900` flat.
- **Void zones** (hero, footer, CTA band): drop to `--carbon-950` with a masked **technical grid**:
```css
.grid-field {
  background-image:
    linear-gradient(rgba(148,163,184,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%);
}
```
- **Signal ambient** (hero only): two masked radial glows — cyan at top-left `rgba(47,216,230,.10)`, violet at bottom-right `rgba(157,140,255,.09)` — never a full-color wash.
- **Merge horizon** (CTA/footer bands): a 1px vertical gradient rule or a 240px masked Merge glow at low opacity (`opacity: .12`), centered — the "frequency" motif.

### 5.2 Card language (see §7) and framing details
- **Corner ticks:** 6px L-shaped hairline marks at card corners (pseudo-elements) — the "instrument panel" detail. Used on featured/stat cards only; never on every card.
- **Data rows:** key/value pairs separated by hairline rules, mono keys — reads like a spec sheet.

---

## 6. Borders, Radii, Shadows & Glows

### 6.1 Borders — "hairline" philosophy
| Token | Value | Use |
|---|---|---|
| `--line-faint` | `1px rgba(236,246,255,.06)` | Default card borders on panels |
| `--line` | `1px rgba(236,246,255,.10)` | Inputs, dividers, raised surfaces |
| `--line-strong` | `1px rgba(236,246,255,.16)` | Focus-adjacent, table headers |
| `--line-signal` | `1px rgba(47,216,230,.45)` | Active states, selected cards |
| `--line-dashed` | `1.5px dashed rgba(110,122,147,.5)` | **TBA placeholders** (see §10) |

### 6.2 Radii — angular-soft (technical, not pill)
`--r-sm: 6px` (chips, inputs) · `--r-md: 10px` (buttons, inputs, wells) · `--r-lg: 14px` (cards) · `--r-xl: 20px` (modals, featured card). **No pill buttons, no 2rem frosted blobs** — this alone separates the design from the template-era draft.

### 6.3 Shadows & glows
```css
--shadow-1: 0 1px 2px rgba(2,4,8,.4);                      /* resting */
--shadow-2: 0 12px 32px -12px rgba(2,4,8,.6);             /* raised */
--glow-cyan: 0 0 0 1px rgba(47,216,230,.18),
             0 8px 40px -12px rgba(47,216,230,.35);       /* hover ring+glow */
--glow-merge: 0 0 0 1px rgba(157,140,255,.25),
              0 12px 48px -12px rgba(109,90,230,.45);     /* featured / 1st prize */
```
- Shadows are **cool-black, tight, low-opacity** — depth from layering, not blur.
- Glows are the only permitted "light spill" and appear on **hover/focus and the single featured object** per section.

---

## 7. Components — Spec

### 7.1 Buttons
```
PRIMARY   ┌──────────────────────────┐   bg: #2FD8E6 (cyan)   text: #04060B
          │  Register Your Team  →   │   weight 600 · radius 10px · h 48–56px
          └──────────────────────────┘   hover: bg #46E3F0 + glow-cyan + 1px sheen sweep
                                         focus-visible: outline 2px cyan offset 3px
                                         active: translateY(1px), bg cyan-deep

SECONDARY ┌──────────────────────────┐   bg: transparent · 1px line border · text ice-100
          │   View Problem Domains   │   hover: border line-signal + bg rgba(47,216,230,.06)
          └──────────────────────────┘

GHOST     View timeline  →               text ice-300; hover text cyan; arrow nudges 2px
```
- **One primary CTA per viewport.** Primary is cyan-filled with dark text (highest contrast, electric, not neon).
- Labels: sentence case, short verb-first ("Register your team", not "Click here").
- Icons: 18–20px, stroke 1.75.

### 7.2 Cards
| Card type | Surface | Border | Hover |
|---|---|---|---|
| **Standard** | transparent or panel | line-faint | bg lifts to panel/850; no scale |
| **Interactive** (domain, team, benefit) | panel | line-faint | `--glow-cyan` ring; icon tints cyan; corner tick appears |
| **Featured / selected** (1st prize, active filter) | panel | merge 1px | `--glow-merge` |

- Card padding 24–32px; header row = mono label + icon; no hover scale/bounce; content never stretches to fill unevenly (use flex alignment).
- **Domain cards** = mini spec sheets: mono index `01`, glyph icon, name in display 600, one-line description, problem-statement count mono `"20+ statements"` *placeholder*, status chip.

### 7.3 Chips & status
Pill (radius 999) allowed for **micro-labels only**: `bg rgba(47,216,230,.08) · 1px rgba(47,216,230,.25) · text #8FE9F2 · mono 11px`. Variants: cyan (live/open), violet (AI), green (verified/completed), gold (winner), dashed outline (TBA).

### 7.4 Forms (register)
Inputs: `bg carbon-800 · 1px line border · radius 10px · h 48px · text ice-100`; focus: `border line-signal + glow-cyan(50%)`; labels mono 12px ice-500; errors inline with `--danger` + `aria-describedby`. Never disable the submit without an explanation; the register route respects the PRD link-out decision (`architecture.md` §12).

### 7.5 Navigation & header
- Sticky glass header: `backdrop-filter: blur(16px) saturate(1.4); background: rgba(7,10,18,.72); border-bottom: 1px line-faint`.
- Left: wordmark lockup. Center/right: mono anchor nav; **active = cyan index tick** under the label. Far right: compact Register primary button.
- Mobile: full-screen carbon-950 menu, display-type links, generous spacing, no hamburger animation theatrics.

---

## 8. Iconography

- **One custom set**, stroke-based, 24px grid, `stroke-width: 1.5`, square-ish geometric caps, drawn on a 1px grid so they feel machined.
- **Duotone rule:** icons render `currentColor` (ice-100/300); a single accent is permitted via a clipped Merge or signal fill **only on the hovered/featured state** — no always-on colored icons en masse.
- Domain glyphs: Agentic AI → node-graph · Robotics → jointed arm · Cybersecurity → shield + trace · HealthTech → pulse/cross in hex · FinTech/Blockchain → chain-link · Smart Cities → grid + pin · AgriTech → sprout in grid · Transport/Logistics → route node · Open Innovation → infinity/spark.
- Micro-icons (arrows, external, check, chevron): same set, 16–18px, used sparingly. No emoji anywhere in UI (copy may use none either).

---

## 9. Motion Principles

### 9.1 Tokens
| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` — expo-style deceleration, used everywhere |
| `--dur-micro` | 150ms (hover, borders, chips) |
| `--dur-fast` | 250ms (menus, accordion, focus) |
| `--dur-reveal` | 700ms (section entrances) |
| `--dur-hero` | 900ms staggered (hero lines, first paint) |

### 9.2 Principles
1. **Motion explains state, never performs.** No bounce, wobble, spin, or pulse loops. No marquees/autoplay.
2. **Reveal, don't fly.** Scroll reveals = `translateY(24px) → 0` + fade, single pass, staggered by ≤80ms per child, triggered once via IntersectionObserver at 15% visibility.
3. **The only continuous motion is data that is true**: the countdown ticks. Countdown digits change with a 120ms crossfade/translateY roll; `tabular-nums` prevents layout shift.
4. **Hover feedback** = border + glow + icon accent (150ms). Interactive elements lift 1px at most.
5. **Respect `prefers-reduced-motion`:** disable reveals and rolls; keep crossfades off; everything remains readable and functional.
6. **Scroll behavior:** smooth-scroll anchors (CSS), subtle 80ms header background transition on scroll state change.

---

## 10. Special UX Patterns

- **The TBA module** (from `architecture.md` §8): unconfirmed facts render as a **dashed-border, mono "TBA // confirmed soon" chip** or line — designed-in honesty, not broken layout. Same visual grammar for redacted prize amounts ("To be revealed" in ice-500 mono). Never placeholder Lorem content on the live build.
- **Countdown data module:** framed hairline panel with mono caption `EVENT STARTS IN`, four tabular mono cells (days/hours/min/sec) separated by `:` and a cyan live dot. Renders static date text without JS.
- **Spec-sheet stats:** mono value + mono label stacked, divided by hairlines, corner-ticked on the first cell.
- **Timeline:** left mono timestamp column + vertical hairline with signal-colored node ticks; status chips (✓ completed / ○ upcoming / ◌ TBA).
- **Team:** organizer photos treated with a cyan/violet **duotone grade** at rest, full color at hover — no raw stock feel, consistent with the instrument aesthetic.
- **Priority rules:** one H1; one primary CTA per screen; hero communicates *what · when · where · act* in the first viewport; register reachable in ≤2 interactions from anywhere.

---

## 11. Page Blueprint (UX flow)

**Landing (long-scroll, anchored):**
1. **Hero (void + grid + dual ambient):** mono eyebrow `ZAYATHON // CODE FOR COEXISTENCE` with cyan `● REGISTRATIONS OPEN` status; display stack — *BUILD.* (ice) / *INNOVATE.* (Merge text) / *WIN.* (ice + glow underline); one-line lead; CTA row [Register → | View domains]; countdown data module lower-right; hero scroll cue as mono `SCROLL ▾`.
2. **About (editorial split):** intro lead left 5 cols, "pillars" list right as hairline data rows.
3. **Stats strip:** full-width hairline band, four spec-sheet cells (*figures TBA-driven*).
4. **Domains (`01`):** 3×3 spec-sheet grid on carbon-950 band with grid-field bg.
5. **Prizes (`02`):** asymmetric podium — 2nd/3rd standard cards left, **1st raised center-right** with corner ticks + gold/mono treatment; special categories as four slim chips/cards beneath.
6. **Timeline + Program (`03`):** two-column: journey milestones left, day-of program right.
7. **Benefits (`04`):** tight 2/3-col card grid, ok-green check chips for "certificate for all" facts.
8. **Venue:** hairline-framed mono address block + map treatment.
9. **Sponsors:** empty-state-safe CTA band ("Become a sponsor" → mailto) that fills with tier cards as data confirms.
10. **Team (`05`):** duotone photo cards, mono roles.
11. **FAQ:** native-accessible accordion, mono index `Q01`.
12. **Final CTA (void + merge horizon):** display line + primary button + contact row.
13. **Footer:** wordmark, mono contact block (email/phone/address), © ZAYA CODE HUB 2026, socials, legal links — hairline top, carbon-950.

Secondary pages (register / faq / guidelines / sponsors / contact) reuse the exact same section grammar; no new visual language per page.

---

## 12. Accessibility & Contrast (design-level)

- All body text ≥ 4.5:1 (`ice-300` on carbon-900 = 8.5:1). Signal text only ≥ 20px or as UI chrome with non-color redundancy (icons + labels, not color alone).
- Focus visible: 2px cyan outline, 3px offset, on every interactive element; never `outline: none` without a replacement.
- Gradient text: always paired with a solid fallback color for `background-clip` unsupported/forced-colors.
- Duotone photos keep subject luminance for contrast; alt text required.
- Countdown/status never rely on color alone (dots + labels + mono text).

---

## 13. Explicit Anti-Patterns (do not ship)

- ❌ Generic Bootstrap/college-template layouts, centered-icon-over-card uniformity
- ❌ Pill buttons, giant rounded `2rem` frosted cards, blob shadows
- ❌ Rainbow/neon misuse — more than one signal per view, more than 2% accent coverage
- ❌ Bounce/float/loop/pulse animations, autoplaying tickers, confetti, cursor trails
- ❌ Stock-photo hero banners with gradient overlays; ungraded random photos
- ❌ Emoji as UI icons; meme/youth slang in UI copy
- ❌ Copying zayathon.in's current section order, cards, countdown placement, or styling
- ❌ Placeholder/redacted content styled to look final (must look intentionally "TBA")

---

## 14. Asset Requirements

- Organizer headshots (min 1200px, uniform crop) for duotone treatment
- ZAYATHON wordmark/logo (SVG on transparent, light + mono variants) — currently `zaya.png`
- Optional venue exterior/hall photos for the venue section
- Confirmed figures to replace *italic* placeholders (PRD §14)

---

## 15. Implementation Notes (bridge to `architecture.md`)

- Tokens above map 1:1 to the CSS custom-property layer in `architecture.md` §6 (`--background`, `--primary`, etc. aliased to the Carbon/Ice/Signal names).
- `font-display` → Space Grotesk · `font-body` → Inter · add `--font-mono` → JetBrains Mono.
- New radius/shadow tokens replace the draft-era `rounded-full` / `rounded-[2rem]` / `shadow-card-glow` tokens — do not inherit them.
- No new runtime dependencies: grid fields, ambient glows, corner ticks, and duotones are all CSS + a tiny IntersectionObserver reveal island (already budgeted in `architecture.md` §7.1).
- Interactive-card glow and duotone hover are pure CSS; the only new island beyond `architecture.md`'s list is the scroll-reveal observer.
