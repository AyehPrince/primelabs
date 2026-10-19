"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const links = [
  { href: "/case-studies", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl rounded-2xl border border-line bg-surface/90 shadow-[0_10px_30px_-14px_rgba(14,26,20,0.22)] backdrop-blur-md"
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            aria-label="PrimeLabsAfrica home"
            onClick={() => setIsOpen(false)}
            className={`rounded-md ${focusRing}`}
          >
            <Logo />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${focusRing} ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1.5 h-px origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] ${focusRing}`}
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full md:hidden ${focusRing}`}
          >
            <span
              className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          inert={!isOpen}
          className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-line px-4 pb-4 pt-3">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3 py-3.5 text-base font-medium transition-colors ${focusRing} ${
                      active
                        ? "bg-surface-2 text-ink"
                        : "text-ink-muted hover:bg-surface-2 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`mt-2 rounded-full bg-accent px-5 py-3.5 text-center text-base font-medium text-canvas active:scale-[0.98] ${focusRing}`}
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}