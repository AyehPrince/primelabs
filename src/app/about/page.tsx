import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PLAY_STORE_P3DAN } from "@/lib/links";

export const metadata: Metadata = {
  title: "About | PrimeLabsAfrica",
  description:
    "PrimeLabsAfrica is a software studio in Accra building ordering, membership, marketplace and point-of-sale systems for Ghana, with the rest of Africa next.",
};

const principles = [
  {
    title: "Start with the problem",
    text: "We look at how the work is done today before we design anything, so the system fits the operation instead of the other way round.",
  },
  {
    title: "Build it end to end",
    text: "Design, build, launch and maintain. We own the system from the first sketch to the first live payment, and after.",
  },
  {
    title: "Reuse what is proven",
    text: "Ordering, payments, roles and admin tools already run in systems we have shipped. New projects start further along.",
  },
];

const facts = [
  { label: "Based in", value: "Accra, Ghana" },
  { label: "Founded by", value: "Prince Ayeh" },
  { label: "We build", value: "Ordering, membership, marketplace and point-of-sale systems" },
];

const link =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen bg-canvas text-ink">
      <Nav />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-12 pb-24 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pt-20">
        <div>
          <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            A software studio in Accra, building for the whole continent.
          </h1>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              PrimeLabsAfrica designs and builds the software that Ghanaian
              businesses and institutions run on: ordering, membership,
              marketplace and point-of-sale systems, live in production.
            </p>
            <p>
              Every project starts with a real operational problem, like a
              school tracking fees on paper or an office with no clean way to
              order lunch. We build the system that replaces it.
            </p>
            <p>
              Ghana is where we begin. What we build here is designed to
              travel, so the rest of West Africa, and then the continent, can
              use it next.
            </p>
          </div>
        </div>

        <aside className="self-start rounded-2xl border border-line bg-surface p-8">
          <dl className="divide-y divide-line">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0">
                <dt className="text-sm text-ink-muted">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
            <div className="pt-4">
              <dt className="text-sm text-ink-muted">On Google Play</dt>
              <dd className="mt-1 font-medium">
                <a
                  href={PLAY_STORE_P3DAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent ${link}`}
                >
                  p3dan
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How we work
          </h2>
          <ol className="divide-y divide-line border-y border-line">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-2 py-7 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="max-w-md font-display text-3xl font-semibold md:text-4xl">
            Tell us what you need built.
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contact"
              className={`rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] ${link}`}
            >
              Start a project
            </Link>
            <Link
              href="/case-studies"
              className={`text-sm font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent ${link}`}
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}