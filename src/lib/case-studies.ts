import { PLAY_STORE_P3DAN } from "@/lib/links";

export type Screenshot = {
  src: string;
  alt: string;
  label?: string;
};

export type CaseStudy = {
  slug: string;
  tag: "Flagship" | "Supporting";
  status: string;
  title: string;
  oneLiner: string;
  problem: string;
  build: string;
  proof: string;
  result?: string;
  timeline?: string;
  credit?: string;
  link?: { label: string; href: string };
  screenshots?: Screenshot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fpmi",
    tag: "Flagship",
    status: "Live client",
    title: "Flash Prime Media Institute",
    oneLiner:
      "A website and admin system that took a media school fully online in six weeks.",
    problem:
      "FPMI, a media training institute in Accra, needed a real online presence for prospective students and a way to run the school digitally: admissions, student registration, fee tracking and hostel payments, instead of managing it all manually.",
    build:
      "Two connected systems. A public website (Next.js) with a programs page organised around the institute's five departments, online applications with live Paystack payments, and a dedicated track for international students, so a prospective student can discover, apply and pay without ever walking in. And a full admin portal (React/Vite) for the school's staff: student registration, an admissions pipeline, fee tracking with auto-generated PDF receipts, and a hostel fee manager with payment history.",
    proof:
      "Both are live today, the website on Cloudflare Pages and the admin portal on Vercel, running on a shared Supabase backend. This is an institution's actual daily infrastructure, not a prototype.",
    result:
      "Staff no longer track admissions, fees or hostel payments on paper. Applications and payments happen online instead of walk-in only, receipts generate instantly instead of by hand, and the full student database lives online permanently, with no paper records to lose or damage.",
    timeline: "Built and shipped in about 6 weeks.",
    screenshots: [
      {
        src: "/screenshots/fpmi-homepage.webp",
        alt: "Flash Prime Media Institute public website homepage",
        label: "Public website",
      },
      {
        src: "/screenshots/fpmi-apply.webp",
        alt: "FPMI online application page with the registration fee payment step",
        label: "Online application",
      },
      {
        src: "/screenshots/fpmi-gallery.webp",
        alt: "FPMI gallery page with photos filtered by department",
        label: "Gallery",
      },
      {
        src: "/screenshots/fpmi-admin-dashboard.webp",
        alt: "FPMI admin dashboard showing student, fee and hostel overview",
        label: "Admin portal",
      },
    ],
  },
  {
    slug: "flash-tv",
    tag: "Flagship",
    status: "In build",
    title: "Flash TV",
    oneLiner:
      "A public website for a working Ghanaian TV station, with live viewing, a replay library and an advertiser enquiry flow.",
    problem:
      "A live TV station needs a proper home online: somewhere viewers can see what is on, watch live and catch up on episodes they missed, and where advertisers and event organisers can reach the station directly instead of through scattered messages.",
    build:
      "A public website for the station. A home page built around the live broadcast, show pages for its programmes such as Gospel Bulletin and Fancy Ladies Show, and a replay library where every episode stays up after it airs, filterable by show. Event coverage and a blog carry the station's stories. An advertise page lays out the three ways to reach viewers, live show ad slots, squeezebacks and crawlers, with a quote request form. Contact, event and advertising submissions save to the station's own Supabase project, separate from every other system we run, and land in an admin inbox built into the site. A promo band links through to the Flash Prime Media Institute.",
    proof:
      "Built for an operating station, not a showcase: real programmes, real episodes added after each broadcast, and forms that feed straight into the station's own inbox.",
    screenshots: [
      {
        src: "/screenshots/flashtv-home.webp",
        alt: "Flash TV home page with the live broadcast player",
        label: "Home page",
      },
      {
        src: "/screenshots/flashtv-shows.webp",
        alt: "Flash TV shows page listing Gospel Bulletin and Fancy Ladies Show",
        label: "Shows",
      },
      {
        src: "/screenshots/flashtv-replays.webp",
        alt: "Flash TV replay library with episodes filterable by show",
        label: "Replay library",
      },
      {
        src: "/screenshots/flashtv-advertise.webp",
        alt: "Flash TV advertising page with three ad formats and a quote request form",
        label: "Advertising",
      },
    ],
  },
  {
    slug: "lunchos",
    tag: "Flagship",
    status: "Built and live",
    title: "LunchOS",
    oneLiner:
      "A multi-tenant ordering platform, ready to deploy for your office or vendor operation.",
    problem:
      "Offices, campuses and vendors running lunch or canteen ordering by word of mouth or spreadsheets: no way for people to pre-order, no clean way for vendors to track what is coming, and no record of who paid for what.",
    build:
      "A full multi-tenant SaaS with separate dashboards for admins, employees and vendors, all sharing one system. Real payment and email infrastructure, a fast PIN-based login so employees do not need to remember passwords, and built-in security like rate limiting and protection against replayed sessions.",
    proof:
      "Live right now on its own domain, lunch-os.com. Not a mockup, a real deployed product.",
    result:
      "Built and ready: a system we can customize and deploy for your office or vendor operation in weeks, not months, because the hard part is already done.",
    timeline: "Built in about 6 weeks.",
    credit: "Built with Denis Gidisu",
    screenshots: [
      {
        src: "/screenshots/lunchos-landing.webp",
        alt: "LunchOS landing page",
        label: "lunch-os.com",
      },
      {
        src: "/screenshots/lunchos-admin-order.webp",
        alt: "LunchOS employee ordering screen",
        label: "Order screen",
      },
      {
        src: "/screenshots/lunchos-admin-dashboard.webp",
        alt: "LunchOS admin control center dashboard",
        label: "Admin dashboard",
      },
    ],
  },
  {
    slug: "p3dan",
    tag: "Flagship",
    status: "Live on Google Play",
    title: "p3dan",
    oneLiner:
      "A rental discovery platform for Ghana's housing market, live on the web and on Google Play.",
    problem:
      "Ghana's rental market runs largely on word of mouth and agent networks, with inconsistent fee structures, no centralized listings, and frequent mismatches between what is advertised and what is actually available.",
    build:
      "p3dan lets landlords list properties directly, filterable by real local room types like single room, chamber and hall, and self-contain, and searchable by area through live Google Places integration covering all of Ghana, not a fixed list. Every listing shows transparent pricing, lease terms and payment structure upfront, with contact happening directly between seeker and landlord on WhatsApp and no agent middleman fees. Every listing is manually reviewed before going live, backed by a verified-badge system, a trusted-landlord designation, and a reporting and moderation pipeline, all managed through a purpose-built admin panel with real-time analytics.",
    proof:
      "Built as a React Native / Expo mobile app distributed via EAS Build, alongside a Next.js web platform on Vercel, sharing one Supabase backend (Postgres, Auth, Storage) with Row Level Security enforcing every permission boundary. The admin role system went through a real security audit that caught and fixed two privilege-escalation vulnerabilities before launch.",
    result:
      "Live on the web since July 2026 and published on Google Play in October 2026, with a working end-to-end pipeline from listing creation through moderation, discovery and direct contact.",
    link: { label: "Get p3dan on Google Play", href: PLAY_STORE_P3DAN },
    screenshots: [
      {
        src: "/screenshots/p3dan-landing-mobile.webp",
        alt: "p3dan public website homepage with mobile map view",
        label: "Public website and mobile map",
      },
      {
        src: "/screenshots/p3dan-listings-mobile.webp",
        alt: "p3dan listings browse page with mobile listings view",
        label: "Listings and mobile view",
      },
      {
        src: "/screenshots/p3dan-admin-mobile.webp",
        alt: "p3dan admin dashboard with mobile home screen",
        label: "Admin dashboard and mobile app",
      },
    ],
  },
  {
    slug: "primepos",
    tag: "Flagship",
    status: "Live",
    title: "PrimePOS",
    oneLiner:
      "A multi-tenant point-of-sale system with a guided setup wizard, live analytics and shift management.",
    problem:
      "Retail shops, salons and service businesses running sales manually or on disconnected tools, with no unified way to track inventory, staff shifts, tax or daily revenue in one place.",
    build:
      "A complete point-of-sale platform: a guided onboarding wizard that sets up a business's logo, currency, tax or VAT rate and payment methods in minutes; a fast POS terminal with category filtering and cart management; shift management with opening floats and per-shift order tracking; and a full analytics dashboard covering revenue trends, tax collected, payment method breakdown and top products by revenue.",
    proof:
      "Rebuilt as a Next.js monolith for simpler deployment and live at primelabs-pos.vercel.app. A fully working multi-tenant system, not a demo account.",
    result:
      "Live and ready to onboard a real business. The full flow, from business setup to daily reporting, already works end to end.",
    screenshots: [
      {
        src: "/screenshots/primepos-onboarding.webp",
        alt: "PrimePOS business onboarding wizard",
        label: "Setup wizard",
      },
      {
        src: "/screenshots/primepos-terminal.webp",
        alt: "PrimePOS point-of-sale terminal screen",
        label: "POS terminal",
      },
      {
        src: "/screenshots/primepos-reports.webp",
        alt: "PrimePOS analytics and reports dashboard",
        label: "Analytics",
      },
    ],
  },
  {
    slug: "primefit",
    tag: "Supporting",
    status: "Demo available on request",
    title: "PrimeFit",
    oneLiner: "A multi-tenant gym management platform, built and functional.",
    problem:
      "Gyms running memberships, payments and scheduling manually or on disconnected tools, with no unified system to manage multiple locations or client bases.",
    build:
      "A full multi-tenant gym management platform with member management and Paystack-integrated payments, built on a modern production stack (Next.js, Fastify API, Prisma, Supabase). Deployed and tested end to end.",
    proof:
      "Fully built and functional. Available to demo directly or redeploy for a client's gym or fitness business.",
  },
  {
    slug: "prime-klazroom",
    tag: "Supporting",
    status: "Demo available on request",
    title: "Prime Klazroom",
    oneLiner:
      "A school management platform for Ghanaian primary and JHS schools.",
    problem:
      "Ghanaian primary and JHS schools managing student records, grading and performance tracking on paper or fragmented spreadsheets, with no unified system and no easy way to see how students are performing over time.",
    build:
      "A multi-tenant school management platform with role-based access control, student registration, and automated report card generation with class rankings, plus performance dashboards so schools can see trends, not just individual grades.",
    proof:
      "Fully built and functional. Available to demo directly or deploy for a school's setup.",
  },
];