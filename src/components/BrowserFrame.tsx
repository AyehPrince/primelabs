import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        {label && (
          <span className="ml-3 truncate font-mono text-xs text-ink-muted">
            {label}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 700px, 100vw"
        />
      </div>
    </div>
  );
}