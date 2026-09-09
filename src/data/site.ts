/* ============================================================
   ZAYATHON — single source of truth for site content.

   Every fact below is sourced from the official ZAYATHON website
   (zayathon.in, fetched 2026-09-06) unless tagged otherwise:
     [official] zayathon.in          [draft] companion vercel site
     [social]   Instagram / Facebook / LinkedIn
   Items marked `tba: true` are unverified or undisclosed and are
   rendered by the UI as "To be announced" — never invented.
   Edit content here; components only consume this module.
   ============================================================ */

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: 'ZAYATHON',
  edition: 'February 2026', // [official] header label
  theme: 'Code for Coexistence', // [social] event announcement
  tagline: ['Build.', 'Innovate.', 'Win.'], // [official] / [social]
  byline: 'CREATED BY ZAYA CODE HUB TEAM', // [official] meta description
  org: 'ZAYA CODE HUB',
  copyrightYear: 2026, // [draft] footer © 2026 Zaya Code Hub
  officialUrl: 'https://zayathon-xi.vercel.app/',
  contact: {
    email: 'zayacodehub@gmail.com', // [social] sponsor post; [draft] footer
    phoneDisplay: '+91 70333 99183', // [social] / [draft] footer
    phoneHref: 'tel:+917033399183',
    altPhoneDisplay: '+977 98028 77474', // [social] sponsor post
    instagram: 'https://www.instagram.com/zayacodehub/', // [social]
    venue: 'Sona College of Technology, Salem, Tamil Nadu', // [social] / [draft]
    venueFull: 'Sona College of Technology, Junction Main Road, Salem, Tamil Nadu, India', // [draft] details page
  },
  heroStatus: 'Registrations open', // [official] header
  eventFacts: {
    // Conflict note (prd.md §14): official = single day Feb 10 · draft = Feb 15–16.
    date: 'February 10, 2026', // [official] timeline
    duration: '10 hours of non-stop coding', // [official] about + timeline
    format: 'On-site', // [social] in-person at venue
    teams: '2–4 members per team', // [draft]; [official] "up to 4"
  },
  intro: {
    // [official] about — verbatim
    statement:
      'Join the most anticipated hackathon of the year. Open to all students from 1st to 3rd year.',
    detail:
      'Showcase your skills, learn from experts, and build the future with cutting-edge technologies — guided by mentors, judged on merit, and built for the real world.',
  },
} as const;

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
];

/* ————— Stats [official] home counters ————— */
export const stats = [
  { value: '500+', label: 'Participants' },
  { value: '100+', label: 'Teams' },
  { value: '20+', label: 'Problem statements' },
  { value: '₹10,000+', label: 'Prize pool' },
] as const;

/* ————— Pillars — about feature rows ————— */
export interface FeatureRow {
  title: string;
  text: string;
}

export const pillars: FeatureRow[] = [
  {
    // [official] about feature 1 + timeline
    title: 'One day, ten hours, non-stop building',
    text: 'Non-stop innovation and problem-solving with cutting-edge technologies, mentoring sessions and workshops running through the day.',
  },
  {
    // [official] about feature 2
    title: 'Collaboration over competition — until the stage',
    text: 'Form teams of up to 4 members and work together to build amazing projects from a shared problem statement.',
  },
  {
    // [official] about feature 4
    title: 'Problems that come from industry',
    text: 'Solve actual industry challenges provided by corporate partners — not toy assignments, but problems worth shipping.',
  },
  {
    // [official] prize copy + [draft] register page
    title: 'Rewards that outlast the event',
    text: 'Cash prizes, internship opportunities, goodies and swags, and certificates that recognise the work you put in.',
  },
];

/* ————— Problem domains [official] ————— */
export interface Domain {
  index: string;
  name: string;
  blurb: string;
  icon: DomainIconName;
  accent: 'cyan' | 'violet';
}

export type DomainIconName =
  | 'agent'
  | 'robot'
  | 'shield'
  | 'health'
  | 'chain'
  | 'city'
  | 'agri'
  | 'route'
  | 'spark';

const domainBlurb =
  'Tackle real-world challenges in this domain and build innovative solutions.'; // [official]

export const domains: Domain[] = [
  { index: '01', name: 'Agentic AI', icon: 'agent', accent: 'violet', blurb: domainBlurb },
  { index: '02', name: 'Robotics & Autonomous Systems', icon: 'robot', accent: 'cyan', blurb: domainBlurb },
  { index: '03', name: 'Cybersecurity & Threat Intelligence', icon: 'shield', accent: 'violet', blurb: domainBlurb },
  { index: '04', name: 'HealthTech & MedAI', icon: 'health', accent: 'cyan', blurb: domainBlurb },
  { index: '05', name: 'FinTech & Blockchain', icon: 'chain', accent: 'violet', blurb: domainBlurb },
  { index: '06', name: 'Smart Cities & IoT', icon: 'city', accent: 'cyan', blurb: domainBlurb },
  { index: '07', name: 'Agritech & Rural Innovation', icon: 'agri', accent: 'violet', blurb: domainBlurb },
  { index: '08', name: 'Transportation & Logistics', icon: 'route', accent: 'cyan', blurb: domainBlurb },
  { index: '09', name: 'Open Innovation', icon: 'spark', accent: 'violet', blurb: domainBlurb },
];

export const domainsNote =
  'Choose from 20+ industry-relevant problem statements released across these nine domains.'; // [official]

/* ————— Why participate ————— */
export interface Benefit {
  icon: DomainIconName | 'target' | 'award' | 'doc' | 'growth' | 'group';
  title: string;
  text: string;
}

export const benefits: Benefit[] = [
  {
    icon: 'target',
    title: 'Ship for the real world',
    text: 'Problem statements drawn from actual industry challenges, not academic exercises.', // [official]
  },
  {
    icon: 'growth',
    title: 'Learn while you build',
    text: 'Mentoring sessions and workshops run through the hackathon day, with experts on hand.', // [official]
  },
  {
    icon: 'award',
    title: 'Compete for real stakes',
    text: 'Cash prizes, internship opportunities, goodies and swags for the teams that stand out.', // [official]
  },
  {
    icon: 'doc',
    title: 'Walk away with proof',
    text: 'Valid participants receive participation certificates after the event.', // [draft FAQ]
  },
  {
    icon: 'group',
    title: 'Build with a crew of four',
    text: 'Teams of 2–4 collaborators turn one shared problem into one working product.', // [official]/[draft]
  },
  {
    icon: 'spark',
    title: 'Get on the radar',
    text: 'Showcase your skills in front of mentors, judges and partners scouting talent.', // [official]
  },
];

/* ————— Timeline [official] ————— */
export interface TimelineStep {
  date: string;
  title: string;
  text: string;
  step: string;
}

export const timeline: TimelineStep[] = [
  {
    step: 'STEP 01',
    date: 'Feb 06 · 2026',
    title: 'Registration opens',
    text: 'Start registering your team and prepare for the ultimate coding challenge.',
  },
  {
    step: 'STEP 02',
    date: 'Feb 06 · 2026',
    title: 'Problem statements released',
    text: 'Choose from 20+ industry-relevant problem statements.',
  },
  {
    step: 'STEP 03',
    date: 'Feb 07 · 2026',
    title: 'Team selection announced',
    text: 'Selected teams will be announced. Check your email for confirmation.',
  },
  {
    step: 'STEP 04',
    date: 'Feb 10 · 2026',
    title: 'Hackathon day',
    text: '10 hours of non-stop coding, mentoring sessions, and workshops.',
  },
  {
    step: 'STEP 05',
    date: 'Feb 10 · 2026',
    title: 'Final judging & awards',
    text: 'Present your projects and win amazing prizes.',
  },
];

/* ————— Prizes [official] ————— */
export interface PrizeTier {
  place: string;
  title: string;
  amount: string; // official figures
  perks: string[];
  featured: boolean;
}

export const prizePoolIntro =
  'Compete for amazing prizes worth over ₹10,000 — with cash rewards, internship opportunities, goodies and certificates on the line.'; // [official]

export const prizeTiers: PrizeTier[] = [
  {
    place: '1st place',
    title: 'Grand Champion',
    amount: '₹3,000',
    featured: true,
    perks: ['Cash prize', 'Internship opportunity', 'Goodies & swags', 'Certificate'],
  },
  {
    place: '2nd place',
    title: 'First Runner Up',
    amount: '₹2,000',
    featured: false,
    perks: ['Cash prize', 'Goodies & swags', 'Certificate'],
  },
  {
    place: '3rd place',
    title: 'Second Runner Up',
    amount: '₹1,000',
    featured: false,
    perks: ['Cash prize', 'Goodies & swags', 'Certificate'],
  },
];

export interface SpecialCategory {
  name: string;
  tba: boolean;
}

export const specialCategories: SpecialCategory[] = [
  { name: 'Best UI/UX', tba: true },
  { name: 'Best Innovation', tba: true },
  { name: 'Best Use of AI', tba: true },
  { name: "People's Choice", tba: true },
];

export const specialCategoriesNote =
  'Category prizes are being finalised by the organisers and will be revealed with the event brief.'; // official site shows undisclosed amounts

/* ————— Sponsors / partners ————— */
export interface SponsorReason {
  title: string;
  text: string;
}

// Reasons sourced from the official "Become a Sponsor of ZAYATHON" announcement [social]
export const sponsorReasons: SponsorReason[] = [
  {
    title: 'Reach the builders of tomorrow',
    text: 'Connect with talented students and future tech leaders in one room.',
  },
  {
    title: 'Put your brand in front of builders',
    text: 'Showcase your brand to a highly engaged audience of developers and creators.',
  },
  {
    title: 'Back innovation, visibly',
    text: 'Support creativity and problem-solving, with recognition across the event.',
  },
  {
    title: 'Recruit while they build',
    text: 'Access recruitment and collaboration opportunities with participating students.',
  },
];

export const sponsorsNote =
  'Partner announcements are published here as they are confirmed by the organisers.'; // no confirmed sponsors on [official]

/* ————— FAQ ————— */
export interface FaqItem {
  q: string;
  a: string;
}

// Answers follow the official site and the event registration notice.
export const faqItems: FaqItem[] = [
  {
    q: 'Who can participate in ZAYATHON?',
    a: 'Students from 1st to 3rd year can participate, in teams of 2 to 4 members.', // [official] + [draft FAQ]
  },
  {
    q: 'When and where is the hackathon held?',
    a: 'The hackathon day runs on February 10, 2026 — 10 hours of non-stop building — on-site at Sona College of Technology, Salem, Tamil Nadu.', // [official] timeline + [social]
  },
  {
    q: 'What will teams build?',
    a: 'Teams pick one of 20+ industry-relevant problem statements released across nine domains, from Agentic AI to Open Innovation.', // [official]
  },
  {
    q: 'Is the hackathon online or on-site?',
    a: 'The event is on-site at the college venue; hybrid participation is supported for selected team slots as per the registration notice.', // [draft FAQ]
  },
  {
    q: 'What is the registration fee?',
    a: '₹200 per team, unless updated in the official registration notice.', // [draft FAQ]
  },
  {
    q: 'Do all participants receive certificates?',
    a: 'Yes — all valid participants receive participation certificates after the event.', // [draft FAQ]
  },
  {
    q: 'What should a submission include?',
    a: 'Your source code and a short demo or video of the working product, built during the hackathon timeframe.', // [draft guidelines]
  },
];

/* ————— Register / final CTA ————— */
export const register = {
  heading: 'Ready to take the challenge?',
  sub:
    'Registrations are open. Form your team of 2–4, choose your domain, and be part of the February 2026 edition.', // [official]
  primaryLabel: 'Register your team',
  secondaryLabel: 'Talk to the organisers',
  note:
    'Registration is confirmed by email after team selection. For fee, slot and payment details, contact the organisers directly.', // [official] timeline flow
};
