"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mx-auto max-w-6xl px-6 py-8 md:px-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.2em] uppercase"
          onClick={() => setIsOpen(false)}
        >
          PrimeLabs
        </Link>

        <div className="hidden items-center gap-8 font-mono text-xs tracking-[0.15em] uppercase text-ink-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-line-accent px-4 py-2 text-accent hover:bg-accent hover:text-canvas transition-colors"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
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
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          isOpen ? "grid-rows-[1fr] mt-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex flex-col gap-1 overflow-hidden border-t border-line pt-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-2 py-3 font-mono text-sm tracking-[0.1em] uppercase text-ink-muted hover:bg-surface hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-medium text-canvas"
          >
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}