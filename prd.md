# ZAYATHON Website Redesign — Product Requirements Document (PRD)

| Field | Value |
|---|---|
| **Product** | ZAYATHON — student hackathon website (redesign) |
| **Organizer** | ZAYA CODE HUB (ZAYA Group of Company) |
| **Status** | Draft v1.0 — pending organizer verification of flagged facts |
| **Date** | September 6, 2026 |
| **Reference** | Official site: https://www.zayathon.in/ (used as factual/branding reference only — **not** to be copied in layout or visual style) |

---

## 1. Background & Context

ZAYATHON is a student-focused, in-person tech hackathon organized by **ZAYA CODE HUB**, held at **Sona College of Technology, Salem, Tamil Nadu, India**. Its tagline is **"Build. Innovate. Win."**; the 2026 edition carries the theme subtitle **"Code for Coexistence."**

The current official website (zayathon.in) is a JavaScript-rendered single-page app that is functional but offers limited information (no FAQ, no guidelines, no sponsor page) and follows a generic hackathon-template aesthetic. This project delivers a **completely new website** — new information architecture, new layout, new visual identity — that:

1. Preserves all factual information accurately.
2. Expands content coverage (FAQ, guidelines, sponsors, event program, venue, contact).
3. Does **not** reproduce the existing site's layout or UI.
4. Does **not** invent facts — every claim must trace to a verified source or be explicitly marked as pending confirmation.

### Sources
- **Official site (primary):** zayathon.in — rendered content extracted September 6, 2026.
- **Revamped companion site (secondary, flagged):** zayathon-website-for-hackathon.vercel.app ("Revamped With AJ STUDIOZ") — same event, later template version; contains pages the official site lacks (FAQ, guidelines, sponsors, brand system, payment portal, event program).
- **Social/PR:** Instagram @zayacodehub (event announcement), Facebook sponsor post by Rahul Kumar Yadav, LinkedIn organizer profile.

> **Source tags used throughout:** `[official]` = zayathon.in · `[draft]` = Vercel companion site · `[social]` = Instagram/Facebook/LinkedIn · `[⚠️]` = conflicting or unverified, **must confirm before publishing**.

---

## 2. Problem Statement

- The existing site under-delivers on information students need to decide and register: no eligibility/FAQ detail, no guidelines, no fee clarity, no sponsor visibility.
- The existing visual identity is template-generic and does not express the event's ambition ("India's premier student hackathon" positioning) or its "Code for Coexistence" theme.
- Key facts currently **conflict between the live site and the draft version** (dates, duration, prize pool, participant counts) — the redesign must publish a single, organizer-confirmed set of facts.

## 3. Goals

1. **Inform:** Present complete, accurate event details (eligibility, dates, fees, rules, prizes, venue) in a clear information architecture.
2. **Convert:** Drive team registrations via prominent, friction-reduced registration CTAs.
3. **Position:** Establish ZAYATHON as a professional, credible, student-first hackathon brand distinct from the template look.
4. **Attract sponsors:** Provide a dedicated sponsorship section with clear contact path.
5. **Engage:** Build pre-event excitement with a countdown, domain previews, team, and community hooks.

### Success metrics (targets to set with organizers)
- Registration form completions (primary KPI).
- Bounce rate on the homepage (target: below current baseline).
- Time on page / scroll depth on the "Domains" and "Prizes" sections.
- Sponsor inquiries via the sponsor CTA (count).
- Lighthouse performance & accessibility scores (target: ≥ 90 on all four axes for the landing page).
- Mobile share of traffic (event likely discovered via social/mobile) — must be fully responsive.

## 4. Non-Goals (v1)

- Building a full registration/payment **backend** (registration may link out to the organizers' existing form/payment portal; a static capture form is acceptable if agreed).
- Building a participant dashboard, team management, or live event features.
- Replicating any part of the current site's visual layout.
- Inventing problem statements, prize amounts, or sponsor names (see §14).

---

## 5. Target Users & Personas

| Persona | Needs |
|---|---|
| **Student builder (1st–3rd yr, primary)** | Eligibility, team rules, fee, dates, domains, prizes, how to register |
| **Student beginner** | Reassurance ("open to all students", mentorship, beginner-friendly language, FAQ) |
| **Potential sponsor / partner** | Why sponsor, audience numbers, contact path, partnership tiers |
| **College admin / faculty** | Venue, organizer credibility, contact details |
| **Press / community** | Quick facts: who, what, when, where, how to reach organizers |

---

## 6. Scope — Site Structure & Content Mapping

Proposed new information architecture (single-page + minimal secondary pages, or full multi-page — final choice in §12):

### 6.1 Homepage (primary conversion surface)
| Section | Content (sourced) |
|---|---|
| **Hero** | Event name + edition theme "Code for Coexistence"; tagline **"Build. Innovate. Win."**; event month "FEBRUARY 2026"; **live countdown timer** `[official]`; primary CTA "Register Your Team" + secondary CTA "Learn More" |
| **About / Why ZAYATHON** | "Join the most anticipated hackathon of the year. Open to all students from 1st to 3rd year." `[official]`; pillars: non-stop coding, team collaboration, real-world problems from corporate partners, mentoring & workshops `[official]`; draft framing: Open Innovation → Intelligent Collaboration → Launch & Scale `[draft]` |
| **Stats band** | ⚠️ Conflicting numbers — see §14 (official: 500+ participants / 100+ teams / ₹10,000 pool / 10+ domains `[official]`; draft: 200+ teams / 48 hrs / 20+ mentors `[draft]`) |
| **Problem domains** | 9 domains `[official]`: Agentic AI · Robotics & Autonomous Systems · Cybersecurity & Threat Intelligence · HealthTech & MedAI · FinTech & Blockchain · Smart Cities & IoT · Agritech & Rural Innovation · Transportation & Logistics · Open Innovation. Copy: "Choose from 20+ industry-relevant problem statements" `[official]` |
| **Prize pool** | Tiers `[official]` — see §10. Special-category amounts are undisclosed (site shows "****") — render as "To be revealed" |
| **Timeline** | ⚠️ Two versions exist (Feb 6/7/10 `[official]` vs Feb 2/3/5/15/16 `[draft]`) — publish only after confirmation. Include milestone status (completed/upcoming) |
| **Why participate / benefits** | Certificates for all valid participants `[draft FAQ]`; internships & placement opportunities `[official]`/`[draft]`; goodies & swags; free meals & refreshments; mentorship; networking `[draft]` |
| **Venue** | Sona College of Technology, Junction Main Road, Salem, Tamil Nadu, India `[draft]`/`[social]`; campus support: Wi-Fi, power backup, mentor desks, presentation rooms `[draft]` |
| **Sponsors** | ⚠️ No real sponsors exist on the official site. See §12 — placeholder-safe section or "Become a Sponsor" CTA |
| **Organizing team** | Rahul Kumar Yadav (Lead Organizer) · Aditya Chaurasiya (Technical Head) · Akash Adhikari (Operations Lead) · Shivshankar Kumar Jaisawal (Marketing Head) `[official]` |
| **FAQ** | 4 Q&As from `[draft]` (eligibility, format, fee, certificates) — see §13 |
| **Footer** | Contact: zayacodehub@gmail.com · +91 70333 99183 · Sona College of Technology, Salem `[draft]`/`[social]`; © 2026 Zaya Code Hub; socials (@zayacodehub); legal links (Terms, Privacy) |

### 6.2 Secondary pages (recommended, pending scope decision)
- **Register** — team form fields (team name, members, emails, college, year, domain choice, problem statement choice), fee & payment instructions `[draft: INR 200/team ⚠️]`, benefits checklist, guidelines summary.
- **Domains / Problem statements** — 9 domain cards with descriptions.
- **Timeline / Schedule** — milestone list + day-of event program `[draft]`: Opening Ceremony (Day 1 · 9 AM), Mentor Connect (Day 1 · 1 PM), Prototype Review (Day 2 · 10 AM), Final Demo + Awards (Day 2 · 4 PM).
- **Sponsors** — tiers (Platinum/Gold/Silver as in `[draft]` **template**) + "Become a Sponsor" CTA (contact: zayacodehub@gmail.com `[social]`).
- **Guidelines** `[draft]`: team 2–4 · build during event · open-source allowed w/ attribution · submit source + demo video · plagiarism → disqualification · judges' decision final.
- **FAQ** — expanded from the 4 known Q&As.
- **Contact** — email, phone, address, venue map.

---

## 7. Content Requirements (factual reference)

> Source key: `[official]` zayathon.in · `[draft]` Vercel companion · `[social]` Instagram/Facebook/LinkedIn · `[⚠️]` unverified/conflicting — **confirm before publishing**.

### 7.1 What ZAYATHON is
Student hackathon by **ZAYA CODE HUB** at **Sona College of Technology, Salem**; tagline **"Build. Innovate. Win."**; 2026 edition theme **"Code for Coexistence"** `[social]`.

### 7.2 Eligibility
Open to **1st–3rd year students** `[official]`.

### 7.3 Team size
**2–4 members** `[draft]` ("up to 4 members" `[official]`).

### 7.4 Duration
⚠️ **Conflict:** 10 hours on a single day `[official]` vs "48 Hours" / 2-day event `[draft]`. Instagram corroborates a single day (8:30 AM–7:00 PM) `[social]`. **Resolve with organizers.**

### 7.5 Problem statements / domains
9 domains listed in §6.1 `[official]`; "20+ industry-relevant problem statements" `[official]`; individual statements not public on the site.

### 7.6 Registration
Register a team on the website → teams selected & announced (confirmation by email) `[official]`. Fee: **INR 200/team** `[draft] ⚠️`. Payment portal exists in the draft version `[draft]`.

### 7.7 Prizes (as published on official site)
- **1st / Grand Champion — ₹3,000** + internship opportunity + goodies & swags + certificate
- **2nd / First Runner Up — ₹2,000** + goodies & swags + certificate
- **3rd / Second Runner Up — ₹1,000** + goodies & swags + certificate
- **Special categories:** Best UI/UX · Best Innovation · Best Use of AI · People's Choice — amounts **undisclosed** (displayed as "****"); render as "To be revealed".
- Total pool: **"worth over ₹10,000"** `[official]` ⚠️ vs "₹**** Lakhs" (redacted) `[draft]` — **resolve**.

### 7.8 Benefits
Certificates (all valid participants) · internship/placement opportunities · goodies/swags · swag kits for registered teams · free meals & refreshments · mentorship from industry professionals · networking `[draft]`.

### 7.9 Organizing organization
**ZAYA CODE HUB** (ZAYA Group of Company) — coding arena / proctored exam portal / internship platform (zayacodehub.in, zayacodehub.online) · © 2026 Zaya Code Hub.

### 7.10 Contact
zayacodehub@gmail.com · +91 70333 99183 (also +977 98028 77474 on sponsor post `[social]`) · Sona College of Technology, Junction Main Road, Salem, Tamil Nadu, India.

### 7.11 Existing FAQ (4 questions, draft source)
1. **Who can participate?** 1st–3rd year students, teams of 2–4.
2. **Online or on-site?** On-site + hybrid participation based on selected team slots.
3. **Registration fee?** INR 200 per team unless updated in the official notice.
4. **Certificates?** Yes, all valid participants receive participation certificates.

---

## 8. Design & Branding Requirements

### 8.1 Mandatory (no design freedom)
- Keep the **ZAYATHON wordmark** as the primary logo asset (organizers' logo file to be provided; current asset: `zaya.png` on the draft site).
- Preserve key phrases: **"Build. Innovate. Win."**, **"Code for Coexistence"**, "The Ultimate Hackathon Experience for Students up to 3rd Year."
- Display "Created by ZAYA CODE HUB Team" attribution.
- Do **not** reuse the existing site's layout, section structure, or component styling.

### 8.2 Design freedom (explicitly open)
- **No official brand-color documentation exists.** The palette is open to a new proposal. (The draft's "brand system" page documents only generic shadcn-style tokens: background/foreground/primary/secondary/muted/border/accent, rounded-full buttons, ~2rem card radius, subtle glow shadows — treat as reference for *token structure*, not brand color.)
- Typography: open; the draft wordmark uses a "custom Orenza style" — new type system should be proposed and approved.
- Imagery: open — organizers to provide photo assets (venue, past event, team headshots).
- Proposed direction (for design team): a **professional, energetic, "student innovator" aesthetic** — bold editorial typography, a distinctive accent color system, strong hierarchy, dark or light theme decision to be made during design exploration. Theme concepts should riff on **"Code for Coexistence"** (collaboration, human + technology).

### 8.3 Accessibility & quality bar
- WCAG 2.1 AA (contrast, focus states, keyboard navigation, semantic HTML).
- Fully responsive (mobile-first; significant mobile traffic expected from Instagram/social).
- Performance: Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO (landing).
- SEO: meta title/description, Open Graph (social sharing is the main acquisition channel), structured data (Event schema) for the hackathon.

---

## 9. Functional Requirements

| # | Requirement | Priority |
|---|---|---|
| F1 | Live countdown timer to event date (date configurable post-verification) | P1 |
| F2 | Registration CTA on hero + persistent nav; links to register page/form | P1 |
| F3 | Domain filter/browse on the Domains section (static content OK) | P1 |
| F4 | Timeline with milestone status (completed/upcoming) | P1 |
| F5 | FAQ accordion | P1 |
| F6 | Sponsor inquiry CTA → mailto or contact form | P1 |
| F7 | Contact section with email/phone/address/map embed | P2 |
| F8 | Multi-page or single-page navigation (decision in §12) with anchor/route to every section | P1 |
| F9 | Social links (Instagram @zayacodehub) | P2 |
| F10 | Cookie-consent banner if analytics/cookies used | P3 |
| F11 | Optional: newsletter/notify-me capture for updates | P3 |

---

## 10. Non-Functional Requirements

- **Static-first architecture** (fast, cheap, SEO-friendly) unless organizers request dynamic features (payment/forms).
- Content editable by non-technical organizers (CMS or structured data file).
- Deployment on a service the organizers control (e.g., Vercel/Netlify) or provided hosting.
- No analytics without consent; keep dependencies minimal.

---

## 11. Tech Stack (recommendation, to be confirmed at kickoff)

- **Framework:** React (Next.js) or Astro + TypeScript — Astro recommended for static-first + islands, Next.js if a registration backend is planned.
- **Styling:** Tailwind CSS + CSS variables for design tokens (matches the draft's token structure, keeps theming simple).
- **Content:** Markdown/MDX or JSON content files so organizers can update facts (dates, prizes, sponsors) without code changes.
- **Analytics:** Privacy-friendly (e.g., Plausible) — only if approved by organizers.

---

## 12. Open Decisions (for kickoff)

1. Single-page vs multi-page IA (recommended: single-page marketing site + dedicated Register/FAQ/Sponsors pages).
2. Event date/duration — which version is correct (see §14).
3. Registration: link out to organizers' existing form vs. build a capture form vs. full payment integration (fee: INR 200/team `[draft]`).
4. Dark vs light theme direction.
5. Content language(s): English only, or English + regional languages.

---

## 13. Milestones & Deliverables (proposed)

| Milestone | Deliverable |
|---|---|
| M1 — Kickoff | Resolve §14 verification list; confirm IA; collect assets (logo, photos, sponsor list) |
| M2 — Content finalization | Approved fact sheet, copy draft |
| M3 — Design | Visual identity proposal (palette, type, components) + hi-fi mockups of key sections |
| M4 — Build | Implemented site (pages/sections per §6) |
| M5 — QA | A11y, responsive, performance, fact-check pass against the approved fact sheet |
| M6 — Launch | Deploy, submit to search engines, enable social sharing cards |

---

## 14. Risk Register — Facts to Verify with Organizers (BLOCKERS for launch)

| # | Item | Official site says | Draft site says | Action |
|---|---|---|---|---|
| 1 | Event date & duration | Feb 10, 2026 · 10 hours | Feb 15–16 · "48 Hours" (timeline says 10 hrs) | Confirm exact date(s) & hours |
| 2 | Total prize pool | "Over ₹10,000" | "₹**** Lakhs" (redacted) | Confirm final pool |
| 3 | Special-category prize amounts | "****" (undisclosed) | "****" (undisclosed) | Confirm or show "To be revealed" |
| 4 | Registration fee | Not stated | INR 200/team | Confirm fee & payment method |
| 5 | Participant/team stats | 500+ participants · 100+ teams | 200+ teams · 20+ mentors | Confirm which figures to publish |
| 6 | Sponsors | None listed | Placeholder names (TechCorp, InnovateTech, DevStudio, CloudBase, AILabs, StartupHub, CodeSchool, DataDrive, WebFlow) | Obtain real sponsor list; never publish placeholders |
| 7 | Domain count | Lists 9 domains; stats say "10+" | — | Confirm 9 vs 10+ |
| 8 | Sponsor contact email | — | mailto:director@zayathon.in (unverified) | Use zayacodehub@gmail.com unless confirmed |
| 9 | Problem statement titles | "20+ industry-relevant problem statements" (titles not public) | Empty page | Obtain titles or keep generic |

**Rule:** Any unverified item must be omitted or rendered as "To be announced" — never invented.

---

## 15. Content Assets Needed from Organizers

- ZAYATHON logo (vector preferred) + any brand marks (ZAYA CODE HUB).
- Confirmed fact sheet (per §14).
- Problem statement titles & descriptions for the 9 domains (optional but recommended).
- Organizer/team headshots (or permission to use existing).
- Venue & past-event photos.
- Real sponsor list + logos (if any).
- Registration form URL / payment portal details.
- Social handles & any community links.

---

## 16. Appendix — Full Fact Reference (quick copy source)

- **Name:** ZAYATHON ("Zaya Thon") · **Theme 2026:** Code for Coexistence · **Tagline:** Build. Innovate. Win.
- **Organizer:** ZAYA CODE HUB (ZAYA Group of Company), © 2026.
- **Eligibility:** 1st–3rd year students · **Teams:** 2–4 members.
- **Venue:** Sona College of Technology, Junction Main Road, Salem, Tamil Nadu, India.
- **Prizes:** ₹3,000 / ₹2,000 / ₹1,000 + internships, goodies, certificates; special categories: Best UI/UX, Best Innovation, Best Use of AI, People's Choice.
- **Domains:** Agentic AI; Robotics & Autonomous Systems; Cybersecurity & Threat Intelligence; HealthTech & MedAI; FinTech & Blockchain; Smart Cities & IoT; Agritech & Rural Innovation; Transportation & Logistics; Open Innovation.
- **Contact:** zayacodehub@gmail.com · +91 70333 99183.
- **Team:** Rahul Kumar Yadav (Lead Organizer) · Aditya Chaurasiya (Technical Head) · Akash Adhikari (Operations Lead) · Shivshankar Kumar Jaisawal (Marketing Head).