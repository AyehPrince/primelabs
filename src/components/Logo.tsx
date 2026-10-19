export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="100" height="100" rx="22" className="fill-accent" />
      <rect x="31" y="22" width="14" height="56" rx="3" className="fill-canvas" />
      <path
        d="M 45 22 L 58 22 Q 76 22 76 40 Q 76 58 58 58 L 45 58 Z"
        className="fill-canvas"
      />
      <circle cx="68" cy="72" r="6" className="fill-gold" />
    </svg>
  );
}

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
        PrimeLabs<span className="text-accent">Africa</span>
      </span>
    </span>
  );
}