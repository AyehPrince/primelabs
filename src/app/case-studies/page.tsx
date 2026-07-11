import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
          Case studies
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Systems built and{" "}
          <span className="italic font-medium">shipped</span>, not just
          designed.
        </h1>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  {cs.tag.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  {cs.status}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium">
                {cs.title}
              </h2>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {cs.oneLiner}
              </p>
              <span className="mt-6 inline-block text-sm text-accent group-hover:underline">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}