import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn, focusRing } from "@/lib/utils";

export type SourceReferenceKind = "affiliate" | "official-doc" | "third-party";

export type SourceReference = {
  label: string;
  href?: string;
  note?: string;
  external?: boolean;
  /** Controls rel + analytics for external rows. */
  kind?: SourceReferenceKind;
  /** Operator id for affiliate source analytics. */
  operatorId?: string;
};

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function inferKind(item: SourceReference): SourceReferenceKind | undefined {
  if (item.kind) return item.kind;
  if (!item.href || !isExternalHref(item.href)) return undefined;
  const href = item.href.toLowerCase();
  if (
    href.includes("casino.guru") ||
    href.includes("askgamblers.com") ||
    href.includes("kick.com") ||
    href.includes("ttrblog.io")
  ) {
    return "third-party";
  }
  // External operator document / homepage fallback without affiliate flag.
  return "official-doc";
}

function relForKind(kind: SourceReferenceKind | undefined): string {
  if (kind === "affiliate") return "sponsored nofollow noopener noreferrer";
  if (kind === "official-doc") return "noopener noreferrer";
  // third-party + default external
  return "nofollow noopener noreferrer";
}

function SourceReferenceLink({ item }: { item: SourceReference }) {
  const className = cn(
    "font-medium text-primary underline-offset-2 hover:underline",
    focusRing,
  );

  if (!item.href) {
    return <span className="font-medium text-foreground">{item.label}</span>;
  }

  const kind = inferKind(item);
  const isExternal = item.external ?? isExternalHref(item.href);

  if (!isExternal) {
    return (
      <Link href={item.href} className={className}>
        {item.label}
      </Link>
    );
  }

  if (kind === "affiliate") {
    return (
      <TrackedLink
        href={item.href}
        external
        rel={relForKind(kind)}
        className={className}
        event="review_source_affiliate_click"
        section="sources"
        operator={item.operatorId}
        ctaType="source"
      >
        {item.label}
      </TrackedLink>
    );
  }

  return (
    <a href={item.href} target="_blank" rel={relForKind(kind)} className={className}>
      {item.label}
    </a>
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
