import Link from "next/link";
import Logo from "@/components/Logo";
import { PLAY_STORE_P3DAN } from "@/lib/links";

const studioLinks = [
  { href: "/case-studies", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="PrimeLabsAfrica home"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Logo size={36} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Production software for businesses and institutions in Ghana.
              Built in Accra, built to travel across Africa.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-ink">Studio</p>
            <ul className="mt-4 grid gap-3">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-ink">Apps</p>
            <ul className="mt-4 grid gap-3">
              <li>
                <a
                  href={PLAY_STORE_P3DAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  p3dan on Google Play
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-ink-muted">
          <p>© 2026 PrimeLabsAfrica. Accra, Ghana.</p>
        </div>
      </div>
    </footer>
  );
}