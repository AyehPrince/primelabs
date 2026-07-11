import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BrowserFrame from "@/components/BrowserFrame";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pt-16 pb-24 md:px-10">
        <Link
          href="/case-studies"
          className="font-mono text-xs tracking-[0.15em] uppercase text-ink-muted hover:text-ink transition-colors"
        >
          ← Case studies
        </Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.15em] text-accent">
            {study.tag.toUpperCase()}
          </span>
          <span className="font-mono text-xs text-ink-muted">
            {study.status}
          </span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          {study.oneLiner}
        </p>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
              The problem
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{study.problem}</p>
          </section>
          <section>
            <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
              What I built
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{study.build}</p>
          </section>

          {study.screenshots && study.screenshots.length > 0 && (
            <section className="space-y-6">
              {study.screenshots.map((shot) => (
                <BrowserFrame
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  label={shot.label}
                />
              ))}
            </section>
          )}

          <section>
            <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
              Proof
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{study.proof}</p>
          </section>
          {study.result && (
            <section>
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
                Result
              </h2>
              <p className="mt-3 text-ink leading-relaxed">{study.result}</p>
            </section>
          )}
        </div>

        {(study.timeline || study.credit) && (
          <div className="mt-16 flex flex-wrap gap-8 border-t border-line pt-8 font-mono text-xs text-ink-muted">
            {study.timeline && <span>{study.timeline}</span>}
            {study.credit && <span>{study.credit}</span>}
          </div>
        )}

        <Link
          href="/contact"
          className="mt-16 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas hover:bg-accent-deep transition-colors"
        >
          Start a project like this →
        </Link>
      </article>
      <Footer />
    </main>
  );
}