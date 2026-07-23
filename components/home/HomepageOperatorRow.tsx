import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

export type HomepageOperatorRowProps = {
  operatorId: string;
  name: string;
  label: string;
  /** Prefer an internal review route when available. */
  reviewHref?: string;
  /**
   * Fallback destination when no review route exists (e.g. outbound operator link).
   * Spanish homepage continues to pass `reviewHref` only.
   */
  href?: string;
  external?: boolean;
  rating?: number;
  logo?: ImageRef;
  category: string;
  position: number;
  /** Optional market chip (e.g. “Mexico only”). */
  marketBadge?: string;
  /** Screen-reader action hint; defaults to Spanish “Reseña”. */
  actionLabel?: string;
};

/**
 * Compact operator row — review link by default; optional outbound fallback.
 */
export function HomepageOperatorRow({
  operatorId,
  name,
  label,
  reviewHref,
  href,
  external = false,
  rating,
  logo,
  category,
  position,
  marketBadge,
  actionLabel = "Reseña",
}: HomepageOperatorRowProps) {
  const destination = reviewHref ?? href;
  if (!destination) return null;

  const isExternal = Boolean(external && !reviewHref);
  const ratingLabel =
    typeof rating === "number" && Number.isFinite(rating) ? rating.toFixed(1) : null;

  return (
    <TrackedLink
      href={destination}
      external={isExternal}
      event={reviewHref ? "homepage_review_click" : "homepage_affiliate_click"}
      section="more-options"
      position={position}
      operator={operatorId}
      category={category}
      destination={destination}
      ctaType={reviewHref ? undefined : "secondary"}
      className={cn(
        "group flex min-h-11 items-center gap-2 rounded-lg border border-transparent px-1 py-1 sm:min-h-12 sm:gap-2.5 sm:px-1.5 sm:py-1.5",
        "transition-colors hover:border-white/10 hover:bg-white/[0.03]",
      )}
    >
      <OperatorLogo
        logo={logo}
        name={name}
        operatorId={operatorId}
        variant="compact-row"
      />
      <span className="min-w-0 flex-1">
        <span className="flex min-w-0 flex-wrap items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-foreground">{name}</span>
          {marketBadge ? (
            <span className="inline-flex shrink-0 items-center rounded border border-amber-400/35 bg-amber-500/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-amber-200">
              {marketBadge}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block truncate text-[0.65rem] text-muted-foreground sm:text-[0.7rem]">
          {label}
        </span>
      </span>
      {ratingLabel ? (
        <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
          {ratingLabel}
          <span className="font-medium text-muted-foreground/70">/5</span>
        </span>
      ) : null}
      <span
        aria-hidden="true"
        className="shrink-0 text-xs text-muted-foreground transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
      <span className="sr-only">{actionLabel}</span>
    </TrackedLink>
  );
}
