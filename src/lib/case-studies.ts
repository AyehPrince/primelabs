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