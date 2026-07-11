import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const EMAIL = "prince.ayeh1423@gmail.com";
const WHATSAPP_NUMBER = "233548392472";

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "New project inquiry"
)}&body=${encodeURIComponent(
  "Hi Prime,\n\nHere's what I'm currently doing manually, and what I'd want a system to handle instead:\n\n"
)}`;

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Prime, I'd like to talk about a project."
)}`;

export default function ContactPage() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-24 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
          Contact
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Let&apos;s talk about what{" "}
          <span className="italic font-medium">you&apos;re</span> building.
        </h1>
        <p className="mt-4 max-w-lg text-ink-muted leading-relaxed">
          Tell me what you&apos;re currently doing manually — on paper, in
          spreadsheets, or by word of mouth — and what you&apos;d want a
          system to handle instead. Reach out either way below.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href={mailtoHref}
            className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong"
          >
            <span className="font-mono text-xs tracking-[0.15em] text-accent">
              EMAIL
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium">
              Send an email
            </h2>
            <p className="mt-3 text-sm text-ink-muted break-all">{EMAIL}</p>
            <span className="mt-6 inline-block text-sm text-accent group-hover:underline">
              Open in mail app →
            </span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong"
          >
            <span className="font-mono text-xs tracking-[0.15em] text-accent">
              WHATSAPP
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium">
              Message on WhatsApp
            </h2>
            <p className="mt-3 text-sm text-ink-muted">+233 54 839 2472</p>
            <span className="mt-6 inline-block text-sm text-accent group-hover:underline">
              Start a chat →
            </span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}