export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <span className="font-mono text-sm tracking-[0.2em] uppercase">
            PrimeLabs
          </span>
          <p className="mt-1 font-display text-sm italic text-ink-muted">
            Built by Prime
          </p>
        </div>
        <p className="font-mono text-xs text-ink-muted">
          Accra, Ghana · © 2026
        </p>
      </div>
    </footer>
  );
}