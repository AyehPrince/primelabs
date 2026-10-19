import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | PrimeLabsAfrica",
  description:
    "Customize a system we have already built, or commission something new. Pricing in GHS and USD, with hosting and support on every project.",
};

const paths = [
  {
    title: "Customize an existing system",
    speed: "Faster, lower cost",
    description:
      "Take LunchOS, PrimeFit, Prime Klazroom or PrimePOS and adapt it: your branding, your data, deployed on your own domain. The hard part is already built.",
    bestFor: "Standard ordering, membership or point-of-sale needs.",
  },
  {
    title: "Build something new",
    speed: "Fully custom",
    description:
      "A system built from scratch around a workflow that does not fit an existing one, like FPMI's combined admissions, fees and hostel management.",
    bestFor: "Operations with unique or combined requirements.",
  },
];

const pricing = [
  {
    tier: "Customized deployment",
    local: "GH\u20B54,000 \u2013 10,000",
    intl: "$400 \u2013 1,200",
    note: "Branding, setup and light customization of an existing system.",
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
    note: "Included with every project. See below.",
  },
];

const included = [
  "Hosting and deployment on your own domain",
  "Ongoing updates, bug fixes and uptime monitoring",
  "Direct support from the people who built it, not a ticket queue",
  "Your data stays yours: export it anytime, with no lock-in",
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function ServicesPage() {
  return (
    <main id="main" className="min-h-screen bg-canvas text-ink">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 md:px-10 lg:pt-20">
        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
          Start from something proven, or build something new.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Every system begins from one of two places. Either way, hosting and
          support come standard.
        </p>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {paths.map((path) => (
            <li
              key={path.title}
              className="grid gap-4 py-8 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:gap-12"
            >
              <div>
                <h2 className="font-display text-2xl font-medium">
                  {path.title}
                </h2>
                <p className="mt-3 inline-block rounded-full border border-line-accent bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                  {path.speed}
                </p>
              </div>
              <p className="leading-relaxed text-ink-muted">
                {path.description}
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                <span className="block font-medium text-ink">Best for</span>
                {path.bestFor}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Pricing
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Starting points for a conversation, not a fixed price list. Final
            numbers depend on scope.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <div className="hidden grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-line bg-surface-2 px-6 py-4 text-sm font-medium text-ink-muted md:grid">
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
                  <p className="mt-1 text-sm text-ink-muted">{row.note}</p>
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

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
            Working with a tighter budget? Come with what you have. We can
            usually find a version of this that works.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Included with every project
          </h2>
          <ul className="divide-y divide-line border-y border-line">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-4 py-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path
                    d="M4.5 10.5l3.5 3.5 7.5-8"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Not sure which path fits?
            </h2>
            <p className="mt-4 text-ink-muted">
              Tell us what you are trying to solve. We will tell you honestly
              whether it is a customization or a full build.
            </p>
          </div>
          <Link
            href="/contact"
            className={`self-start rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] md:self-auto ${focus}`}
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}