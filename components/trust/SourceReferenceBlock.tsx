import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export type SourceReference = {
  label: string;
  href?: string;
  note?: string;
  external?: boolean;
};

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function SourceReferenceLink({ item }: { item: SourceReference }) {
  const className = cn(
    "font-medium text-primary underline-offset-2 hover:underline",
    focusRing,
  );

  if (!item.href) {
    return <span className="font-medium text-foreground">{item.label}</span>;
  }

  if (item.external ?? isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function SourceReferenceBlock({
  title,
  description,
  items,
  className,
}: {
  title: string;
  description?: string;
  items: SourceReference[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="source-reference-heading"
      className={cn("rounded-xl border border-border/60 bg-card p-5 sm:p-6", className)}
    >
      <h2 id="source-reference-heading" className="text-lg font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? "note"}`}>
            <SourceReferenceLink item={item} />
            {item.note ? <span className="ml-1">— {item.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
