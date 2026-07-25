import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const systems = [
  {
    code: "SYS.ORD",
    title: "Ordering & fulfillment",
    description:
      "Pre-order and payment systems for offices, campuses, and vendors — no more tracking orders by word of mouth.",
    proof: "Built as LunchOS — live, multi-tenant, processing real payments.",
  },
  {
    code: "SYS.MEM",
    title: "Membership & fee management",
    description:
      "Registration, fees, and performance tracking for schools, gyms, and training institutes.",
    proof: "Built as Prime Klazroom and PrimeFit — both fully working.",
  },
  {
    code: "SYS.MKT",
    title: "Marketplace & discovery",
    description:
      "Two-sided listing platforms — search, discovery, and direct contact between buyers and sellers.",
    proof: "Built as p3dan — live on web and native Android.",
  },
  {
    code: "SYS.POS",
    title: "Point of sale",
    description:
      "Inventory, shifts, and payments for retail and service businesses.",
    proof: "Built as PrimePOS — in active development.",
  },
];

export default function Home() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        <p className="animate-fade-up font-mono text-xs tracking-[0.2em] uppercase text-accent">
          Software studio — Accra, Ghana
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-3xl font-display text-5xl leading-[1.1] font-semibold tracking-tight md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          The systems Ghanaian businesses{" "}
          <span className="italic font-medium pb-1">actually</span> run on.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-lg text-ink-muted leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          I design and build ordering, membership, and operations software
          for institutions and businesses across Ghana — proven in
          production, ready to adapt to yours.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas hover:bg-accent-deep transition-colors"
          >
            Start a project →
          </Link>
          <Link
            href="/case-studies"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium hover:border-line-strong transition-colors"
          >
            View case studies
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            The <span className="italic font-medium">systems</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system.code}
                className="bg-surface p-8 flex flex-col gap-4"
              >
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  {system.code}
                </span>
                <h3 className="font-display text-xl font-medium">
                  {system.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {system.description}
                </p>
                <p className="mt-auto pt-4 border-t border-line text-xs text-ink-muted">
                  {system.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Proven, <span className="italic font-medium">not</span> promised
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/case-studies/fpmi"
              className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
            >
              <div className="relative aspect-[16/10] w-full border-b border-line">
                <Image
                  src="/screenshots/fpmi-homepage.webp"
                  alt="Flash Prime Media Institute website"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  LIVE CLIENT
                </span>
                <h3 className="mt-3 font-display text-xl font-medium">
                  Flash Prime Media Institute
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Full admissions, fee, and hostel management system — built
                  and shipped in six weeks.
                </p>
              </div>
            </Link>

            <Link
              href="/case-studies/p3dan"
              className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
            >
              <div className="relative aspect-[16/10] w-full border-b border-line">
                <Image
                  src="/screenshots/p3dan-landing-mobile.webp"
                  alt="p3dan rental discovery platform"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  LIVE — WEB &amp; ANDROID
                </span>
                <h3 className="mt-3 font-display text-xl font-medium">
                  p3dan
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  A rental discovery platform for Ghana, live on two
                  platforms with a security-audited admin system.
                </p>
              </div>
            </Link>

            <Link
              href="/case-studies/lunchos"
              className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
            >
              <div className="relative aspect-[16/10] w-full border-b border-line">
                <Image
                  src="/screenshots/lunchos-landing.webp"
                  alt="LunchOS landing page"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  READY TO DEPLOY
                </span>
                <h3 className="mt-3 font-display text-xl font-medium">
                  LunchOS
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Multi-tenant ordering platform, live with real payments —
                  ready to adapt for your operation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Still running this on{" "}
            <span className="italic font-medium">paper</span>?
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Tell me what you&apos;re managing manually — I&apos;ll show you
            what it could look like as a real system.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas hover:bg-accent-deep transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}