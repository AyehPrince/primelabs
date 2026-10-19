import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | PrimeLabsAfrica",
  description:
    "Tell us what you run by hand today and we will show you what it could look like as a real system. Reach PrimeLabsAfrica on WhatsApp or email.",
};

const EMAIL = "prince.ayeh1423@gmail.com";
const WHATSAPP_NUMBER = "233548392472";

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "New project inquiry"
)}&body=${encodeURIComponent(
  "Hi PrimeLabsAfrica,\n\nHere is what I currently do by hand, and what I would want a system to handle instead:\n\n"
)}`;

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi PrimeLabsAfrica, I'd like to talk about a project."
)}`;

const helpful = [
  {
    title: "What you manage today",
    text: "Paper, spreadsheets, chat messages or word of mouth. A rough description is enough.",
  },
  {
    title: "Who would use it",
    text: "Staff, customers, students, vendors, or a mix of them.",
  },
  {
    title: "When you need it",
    text: "A target date, or just how urgent it feels.",
  },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function ContactPage() {
  return (
    <main id="main" className="min-h-screen bg-canvas text-ink">
      <Nav />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-12 pb-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
        <div>
          <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Tell us what you do by hand today, and what you would want a system
            to handle instead. Reach us either way.
          </p>

          <h2 className="mt-14 font-display text-xl font-medium">
            It helps if you mention
          </h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {helpful.map((item) => (
              <li key={item.title} className="py-5">
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="self-start rounded-2xl border border-line bg-surface p-8">
          <div>
            <h2 className="font-display text-xl font-medium">WhatsApp</h2>
            <p className="mt-1 text-sm text-ink-muted">+233 54 839 2472</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-canvas transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] ${focus}`}
            >
              Message on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-8 border-t border-line pt-8">
            <h2 className="font-display text-xl font-medium">Email</h2>
            <p className="mt-1 text-sm break-all text-ink-muted">{EMAIL}</p>
            <a
              href={mailtoHref}
              className={`mt-5 inline-flex rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent ${focus}`}
            >
              Send an email
            </a>
          </div>

          <p className="mt-8 border-t border-line pt-6 text-sm text-ink-muted">
            Based in Accra, Ghana. Open to projects across Africa and beyond.
          </p>
        </aside>
      </section>

      <Footer />
    </main>
  );
}