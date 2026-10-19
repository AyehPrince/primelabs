import Image from "next/image";
import { PLAY_STORE_P3DAN } from "@/lib/links";

export default function PlayStoreSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start justify-center gap-6 p-8 md:p-12">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              p3dan is on Google Play
            </h2>
            <p className="max-w-md leading-relaxed text-ink-muted">
              Find a place to rent anywhere in Ghana, straight from your phone.
              Published on Google Play by PrimeLabsAfrica.
            </p>
            <a
              href={PLAY_STORE_P3DAN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Get p3dan on Google Play
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div className="relative min-h-72 border-t border-line bg-surface-2 md:border-t-0 md:border-l">
            <Image
              src="/screenshots/p3dan-landing-mobile.webp"
              alt="The p3dan app showing rental listings"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 420px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}