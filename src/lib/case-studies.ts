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
      "FPMI, a media training institute in Accra, needed a real online presence for prospective students and a way to actually run the school digitally — admissions, student registration, fee tracking, hostel payments — instead of managing it all manually.",
    build:
      "Two connected systems. A public-facing website (Next.js) with a prospectus-style programs page, online applications, and Paystack-powered payments, so a prospective student can discover, apply, and pay without ever walking in. And a full admin portal (React/Vite) for the school's staff — student registration, an admissions pipeline, fee tracking with auto-generated PDF receipts, and a hostel fee manager with payment history.",
    proof:
      "Both are live today — the website on Cloudflare Pages, the admin portal on Vercel, running on a shared Supabase backend — an institution's actual daily infrastructure, not a prototype.",
    result:
      "Staff no longer track admissions, fees, or hostel payments on paper. Applications and payments happen online instead of walk-in only, receipts generate instantly instead of by hand, and the full student database lives online permanently — no more paper records that can be lost or damaged.",
    timeline: "Built and shipped in about 6 weeks.",
    screenshots: [
      {
        src: "/screenshots/fpmi-homepage.webp",
        alt: "Flash Prime Media Institute public website homepage",
        label: "Public website",
      },
      {
        src: "/screenshots/fpmi-programs.webp",
        alt: "FPMI programs page showing the Broadcast Journalism curriculum",
        label: "Programs page",
      },
      {
        src: "/screenshots/fpmi-admin-dashboard.webp",
        alt: "FPMI admin dashboard showing student, fee, and hostel overview",
        label: "Admin portal",
      },
    ],
  },
  {
    slug: "lunchos",
    tag: "Flagship",
    status: "Built & live",
    title: "LunchOS",
    oneLiner:
      "A multi-tenant ordering platform, ready to deploy for your office or vendor operation.",
    problem:
      "Offices, campuses, and vendors running lunch or canteen ordering by word-of-mouth or spreadsheets — no way for people to pre-order, no clean way for vendors to track what's coming, no record of who paid for what.",
    build:
      "A full multi-tenant SaaS — separate dashboards for admins, employees, and vendors, all sharing one system. Real payment and email infrastructure, a fast PIN-based login so employees don't need to remember passwords, and built-in security like rate limiting and protection against replayed sessions.",
    proof:
      "Live right now on its own domain, lunch-os.com — not a mockup, a real deployed product.",
    result:
      "Built and ready — this is a system we can customize and deploy for your office or vendor operation in weeks, not months, because the hard part is already done.",
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
    status: "Live",
    title: "p3dan",
    oneLiner:
      "A rental discovery platform for Ghana's housing market — live on web and native Android.",
    problem:
      "Ghana's rental market runs largely on word-of-mouth and agent networks, with inconsistent fee structures, no centralized listings, and frequent mismatches between what's advertised and what's actually available.",
    build:
      "p3dan lets landlords list properties directly, filterable by real local room types — single room, chamber and hall, self-contain, and more — and searchable by area via live Google Places integration covering all of Ghana, not a fixed list. Every listing shows transparent pricing, lease terms, and payment structure upfront, with contact happening directly between seeker and landlord via WhatsApp — no agent middleman fees. Every listing is manually reviewed before going live, backed by a verified-badge system, a trusted-landlord designation, and a reporting and moderation pipeline, all managed through a purpose-built admin panel with real-time analytics.",
    proof:
      "Built as a React Native / Expo mobile app distributed via EAS Build, alongside a Next.js web platform on Vercel, sharing one Supabase backend (Postgres, Auth, Storage) with Row Level Security enforcing every permission boundary — including an admin role system that underwent a real security audit, catching and fixing two privilege-escalation vulnerabilities before launch.",
    result:
      "Live on both platforms as of July 2026, with a working end-to-end pipeline from listing creation through moderation, discovery, and direct contact.",
    screenshots: [
      {
        src: "/screenshots/p3dan-landing-mobile.webp",
        alt: "p3dan public website homepage with mobile map view",
        label: "Public website + mobile map",
      },
      {
        src: "/screenshots/p3dan-listings-mobile.webp",
        alt: "p3dan listings browse page with mobile listings view",
        label: "Listings + mobile view",
      },
      {
        src: "/screenshots/p3dan-admin-mobile.webp",
        alt: "p3dan admin dashboard with mobile home screen",
        label: "Admin dashboard + mobile app",
      },
    ],
  },
  {
    slug: "primepos",
    tag: "Flagship",
    status: "Live",
    title: "PrimePOS",
    oneLiner:
      "A multi-tenant point-of-sale system with a guided setup wizard, live analytics, and shift management.",
    problem:
      "Retail shops, salons, and service businesses running sales manually or on disconnected tools — no unified way to track inventory, staff shifts, tax, or daily revenue in one place.",
    build:
      "A complete point-of-sale platform: a guided onboarding wizard that sets up a business's logo, currency, tax/VAT rate, and payment methods in minutes; a fast POS terminal with category filtering and cart management; shift management with opening floats and per-shift order tracking; and a full analytics dashboard covering revenue trends, tax collected, payment method breakdown, and top products by revenue.",
    proof:
      "Rebuilt as a Next.js monolith for simpler deployment, live at primelabs-pos.vercel.app — a fully working multi-tenant system, not a demo account.",
    result:
      "Live and ready to onboard a real business — the full flow, from business setup to daily reporting, already works end to end.",
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
    status: "Demo-able on request",
    title: "PrimeFit",
    oneLiner: "A multi-tenant gym management platform, built and functional.",
    problem:
      "Gyms running memberships, payments, and scheduling manually or on disconnected tools — no unified system to manage multiple locations or client bases.",
    build:
      "A full multi-tenant gym management platform — member management, Paystack-integrated payments, built on a modern production stack (Next.js, Fastify API, Prisma, Supabase). Deployed and tested end-to-end.",
    proof:
      "Fully built and functional — available to demo directly or redeploy for a client's gym or fitness business.",
  },
  {
    slug: "prime-klazroom",
    tag: "Supporting",
    status: "Demo-able on request",
    title: "Prime Klazroom",
    oneLiner:
      "A school management platform for Ghanaian primary and JHS schools.",
    problem:
      "Ghanaian primary and JHS schools managing student records, grading, and performance tracking on paper or fragmented spreadsheets — no unified system, and no easy way for schools to see how students are actually performing over time.",
    build:
      "A multi-tenant school management platform with role-based access control, student registration, and automated report card generation with class rankings — plus performance dashboards so schools can see trends, not just individual grades.",
    proof:
      "Fully built and functional — available to demo directly or deploy for a school's setup.",
  },
];