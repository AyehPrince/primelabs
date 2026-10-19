import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AfricaDotMap from "@/components/AfricaDotMap";
import ExpansionSection from "@/components/ExpansionSection";
import PlayStoreSection from "@/components/PlayStoreSection";

const systems = [
  {
    title: "Ordering and fulfilment",
    description:
      "Pre-order and payment systems for offices, campuses and vendors, so orders stop living in chat messages.",
    proof: "Built as LunchOS: live, multi-tenant, processing real payments.",
  },
  {
    title: "Membership and fees",
    description:
      "Registration, fee collection and performance tracking for schools, gyms and training institutes.",
    proof: "Built as Prime Klazroom and PrimeFit, both fully working.",
  },
  {
    title: "Marketplaces and discovery",
    description:
      "Two-sided listing platforms with search, discovery and direct contact between buyers and sellers.",
    proof: "Built as p3dan: live on web and native Android.",
  },
  {
    title: "Point of sale",
    description:
      "Inventory, shifts and payments for retail and service businesses.",
    proof: "Built as PrimePOS: live, with a guided setup wizard and analytics.",
  },
];

const featured = [
  {
    href: "/case-studies/fpmi",
    src: "/screenshots/fpmi-homepage.webp",
    alt: "Flash Prime Media Institute website",
    label: "Live client",
    title: "Flash Prime Media Institute",
    text: "A full admissions, fee and hostel management system, built and shipped in six weeks.",
  },
  {
    href: "/case-studies/p3dan",
    src: "/screenshots/p3dan-landing-mobile.webp",
    alt: "p3dan rental discovery platform",
    label: "Live on web and Android",
    title: "p3dan",
    text: "A rental discovery platform for Ghana with a security-audited admin system.",
  },
  {
    href: "/case-studies/lunchos",
    src: "/screenshots/lunchos-landing.webp",
    alt: "LunchOS landing page",
    label: "Ready to deploy",
    title: "LunchOS",
    text: "A multi-tenant ordering platform, live with real payments and ready to adapt for your operation.",
  },
];

export default function Home() {
  return (
    <main id="main" className="bg-canvas text-ink">
      <Nav />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-8 pb-20 md:px-10 lg:min-h-[calc(100dvh-6rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-4 lg:pb-12">
        <div>
          <h1 className="font-display text-5xl leading-[1.04] font-semibold tracking-tight md:text-6xl">
            Software for the way Ghana works.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            We build ordering, membership, marketplace and point-of-sale
            systems already live in Ghana, with the rest of Africa next.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Start a project
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              See our work
            </Link>
          </div>
        </div>

        <AfricaDotMap className="mx-auto w-full max-w-[420px] lg:max-w-[460px] lg:justify-self-end" />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            What we build
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system.title}
                className="flex flex-col gap-4 bg-surface p-8"
              >
                <h3 className="font-display text-xl font-medium">
                  {system.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {system.description}
                </p>
                <p className="mt-auto border-t border-line pt-4 text-xs text-ink-muted">
                  {system.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpansionSection />

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Proven in production
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
              >
                <div className="relative aspect-[16/10] w-full border-b border-line">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 380px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent">
                    {item.label}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PlayStoreSection />

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Still running this on paper?
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Tell us what you manage by hand, and we&apos;ll show you what it
            could look like as a real system.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}