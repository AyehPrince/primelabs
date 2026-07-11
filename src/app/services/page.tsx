import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const paths = [
  {
    title: "Customize an existing system",
    speed: "Faster · lower cost",
    description:
      "Take LunchOS, PrimeFit, Prime Klazroom, or PrimePOS and adapt it — your branding, your data, deployed on your own domain. The hard part is already built.",
    bestFor: "Standard ordering, membership, or POS needs.",
  },
  {
    title: "Build something new",
    speed: "Full custom · tailored",
    description:
      "A system built from scratch around a workflow that doesn't fit an existing one — like FPMI's combined admissions, fees, and hostel management.",
    bestFor: "Operations with unique or combined requirements.",
  },
];

const pricing = [
  {
    tier: "Customized deployment",
    local: "GH\u20B54,000 \u2013 10,000",
    intl: "$400 \u2013 1,200",
    note: "Branding, setup, and light customization of an existing system.",
  },
  {
    tier: "Deeper customization",
    local: "GH\u20B510,000 \u2013 25,000",
    intl: "$1,000 \u2013 3,000",
    note: "Added features or workflows on top of an existing system.",
  },
  {
    tier: "Full custom build",
    local: "GH\u20B520,000 \u2013 45,000",
    intl: "$2,500 \u2013 7,000+",
    note: "A new system built from scratch to your spec, like FPMI.",
  },
  {
    tier: "Hosting & support",
    local: "GH\u20B5300 \u2013 800 / mo",
    intl: "$30 \u2013 100 / mo",
    note: "Included with every project — see below.",
  },
];

const included = [
  "Hosting and deployment on your own domain",
  "Ongoing updates, bug fixes, and uptime monitoring",
  "Direct support from me, not a ticket queue",
  "You always own your data — export anytime, no lock-in",
];

export default function ServicesPage() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
          Services
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Two ways to <span className="italic font-medium">get there</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink-muted leading-relaxed">
          Every system starts from one of two places — something I&apos;ve
          already built, or something new. Either way, hosting and support
          come standard.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-line bg-surface p-8"
            >
              <span className="font-mono text-xs tracking-[0.15em] text-accent">
                {path.speed.toUpperCase()}
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium">
                {path.title}
              </h2>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {path.description}
              </p>
              <p className="mt-6 border-t border-line pt-4 text-xs text-ink-muted">
                Best for: {path.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Pricing
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-muted">
            Starting points for a conversation, not a fixed price list —
            final numbers depend on scope.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <div className="hidden grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-line bg-surface-2 px-6 py-4 font-mono text-xs tracking-[0.1em] text-ink-muted uppercase md:grid">
              <span>Tier</span>
              <span>Local (GHS)</span>
              <span>International (USD)</span>
            </div>
            {pricing.map((row) => (
              <div
                key={row.tier}
                className="grid grid-cols-1 gap-2 border-b border-line bg-surface px-6 py-5 last:border-b-0 md:grid-cols-[1.4fr_1fr_1fr] md:items-center md:gap-4"
              >
                <div>
                  <p className="font-medium">{row.tier}</p>
                  <p className="mt-1 text-xs text-ink-muted">{row.note}</p>
                </div>
                <span className="font-mono text-sm text-accent">
                  {row.local}
                </span>
                <span className="font-mono text-sm text-accent">
                  {row.intl}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            Working with a tighter budget? Come with what you&apos;ve got —
            we can usually find a version of this that works.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            What&apos;s <span className="italic font-medium">included</span>,
            always
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-6 text-sm text-ink-muted"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Not sure which <span className="italic font-medium">path</span>{" "}
            fits?
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Tell me what you&apos;re trying to solve — I&apos;ll tell you
            honestly whether it&apos;s a customization or a full build.
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