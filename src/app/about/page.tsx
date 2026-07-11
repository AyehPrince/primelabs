import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-24 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
          About
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Prime, before it was a{" "}
          <span className="italic font-medium">product name</span>.
        </h1>

        <div className="mt-12 space-y-6 text-ink-muted leading-relaxed">
          <p>
            PrimeLabs started as a pattern, not a plan. I kept building
            operational software for Ghanaian institutions — an ordering
            platform here, a school management system there — before I ever
            sat down to name what I was doing.
          </p>
          <p>
            &ldquo;Prime&rdquo; was my own nickname long before it showed up
            in a product. It ended up as the thread running through
            PrimeFit, Prime Klazroom, and PrimePOS — not a brand exercise,
            just what I already called things.
          </p>
          <p>
            I started in IT support at DHL Ghana, then moved through an
            Advanced Diploma in Software Engineering, and I&apos;m currently
            finishing a BSc in Computer Science at Accra Technical
            University. Most of what I&apos;ve built has come from
            recognizing a real operational problem — a school running fee
            tracking on paper, an office with no clean way to order lunch —
            and building the system for it, end to end.
          </p>
          <p>
            PrimeLabs is that same approach, formalized: I design and build
            the software Ghanaian businesses and institutions actually run
            on, and I bring an existing library of proven systems to every
            new project instead of starting from zero.
          </p>
        </div>

        <Link
          href="/case-studies"
          className="mt-16 inline-block rounded-full border border-line px-6 py-3 text-sm font-medium hover:border-line-strong transition-colors"
        >
          See what I&apos;ve built →
        </Link>
      </section>
      <Footer />
    </main>
  );
}