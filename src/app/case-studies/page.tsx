import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Our work | PrimeLabsAfrica",
  description:
    "Systems we have built and shipped in Ghana: school administration, a TV station website, ordering, rentals and point of sale.",
};

const flagship = caseStudies.filter((cs) => cs.tag === "Flagship");
const supporting = caseStudies.filter((cs) => cs.tag === "Supporting");

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function CaseStudiesPage() {
  return (
    <main id="main" className="min-h-screen bg-canvas text-ink">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 md:px-10 lg:pt-20">
        <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
          Systems built and shipped, not just designed.
        </h1>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {flagship.map((cs) => {
            const cover = cs.screenshots?.[0];
            return (
              <li key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className={`group grid gap-6 py-8 transition-colors md:grid-cols-[18rem_1fr] md:items-center md:gap-10 ${focus}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface-2">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 288px, 100vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-medium text-ink-muted">
                        {cs.title}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-accent">
                      {cs.status}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-medium md:text-3xl">
                      {cs.title}
                    </h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">
                      {cs.oneLiner}
                    </p>
                    <span className="mt-5 inline-block text-sm font-medium underline decoration-line-strong underline-offset-[6px] transition-colors group-hover:decoration-accent">
                      Read the case study
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Also built
            </h2>
            <p className="mt-4 max-w-xs text-ink-muted">
              Working systems we can demo or redeploy for your business.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {supporting.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className={`group block py-6 ${focus}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-xl font-medium group-hover:text-accent">
                      {cs.title}
                    </h3>
                    <span className="text-sm text-ink-muted">{cs.status}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">
                    {cs.oneLiner}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}