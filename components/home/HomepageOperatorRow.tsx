import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

export type HomepageOperatorRowProps = {
  operatorId: string;
  name: string;
  label: string;
  reviewHref: string;
  rating?: number;
  logo?: ImageRef;
  category: string;
  position: number;
};

/**
 * Compact internal navigation row — review link only, no affiliate CTA.
 */
export function HomepageOperatorRow({
  operatorId,
  name,
  label,
  reviewHref,
  rating,
  logo,
  category,
  position,
}: HomepageOperatorRowProps) {
  const ratingLabel =
    typeof rating === "number" && Number.isFinite(rating) ? rating.toFixed(1) : null;

  return (
    <TrackedLink
      href={reviewHref}
      event="homepage_review_click"
      section="more-options"
      position={position}
      operator={operatorId}
      category={category}
      destination={reviewHref}
      className={cn(
        "group flex min-h-11 items-center gap-2 rounded-lg border border-transparent px-1 py-1 sm:min-h-12 sm:gap-2.5 sm:px-1.5 sm:py-1.5",
        "transition-colors hover:border-white/10 hover:bg-white/[0.03]",
      )}
    >
      <span className="origin-left scale-[0.68] sm:scale-[0.78]">
        <OperatorLogo logo={logo} name={name} operatorId={operatorId} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-foreground">{name}</span>
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
      <span className="sr-only">Reseña</span>
    </TrackedLink>
  );
}
