import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

export type TopPickTheme = "anonymous" | "betfury" | "betsson";

export type HomepageTopPickCardProps = {
  operatorId: string;
  operatorName: string;
  subBrand?: string;
  badge: string;
  rating: number;
  valueProposition: string;
  features: readonly [string, string];
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  termsLine: string;
  logo?: ImageRef;
  theme: TopPickTheme;
  position: number;
};

const THEMES: Record<
  TopPickTheme,
  { card: string; badge: string; accent: string; glow: string }
> = {
  anonymous: {
    card: "border-[#E0001B]/25 bg-gradient-to-b from-[#0B0D12] via-[#111417] to-[#050607]",
    badge: "border-[#E0001B]/40 bg-[#E0001B]/12 text-[#FF8A8F]",
    accent: "text-[#FF1C24]",
    glow: "shadow-[0_0_28px_-12px_rgba(224,0,27,0.35)]",
  },
  betfury: {
    card: "border-orange-500/20 bg-gradient-to-b from-[#1a1208] via-[#111417] to-[#0A1931]",
    badge: "border-orange-400/35 bg-orange-500/10 text-orange-200",
    accent: "text-orange-300",
    glow: "shadow-[0_0_28px_-12px_rgba(249,115,22,0.25)]",
  },
  betsson: {
    card: "border-sky-500/20 bg-gradient-to-b from-[#0a1628] via-[#111417] to-[#0A1931]",
    badge: "border-sky-400/35 bg-sky-500/10 text-sky-200",
    accent: "text-sky-300",
    glow: "shadow-[0_0_28px_-12px_rgba(56,189,248,0.2)]",
  },
};

/**
 * Compact homepage recommendation card — not the full OfferCard layout.
 */
export function HomepageTopPickCard({
  operatorId,
  operatorName,
  subBrand,
  badge,
  rating,
  valueProposition,
  features,
  ctaLabel,
  ctaHref,
  reviewHref,
  termsLine,
  logo,
  theme,
  position,
}: HomepageTopPickCardProps) {
  const styles = THEMES[theme];
  const ratingLabel = Number.isFinite(rating) ? rating.toFixed(1) : "—";

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border p-3.5 sm:p-5",
        styles.card,
        styles.glow,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
            styles.badge,
          )}
        >
          {badge}
        </span>
        <span className={cn("text-sm font-bold tabular-nums", styles.accent)}>
          {ratingLabel}
          <span className="text-xs font-medium text-muted-foreground">/5</span>
        </span>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5 sm:mt-3 sm:gap-3">
        <OperatorLogo logo={logo} name={operatorName} operatorId={operatorId} />
        <div className="min-w-0">
          <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            {operatorName}
          </h3>
          {subBrand ? (
            <p className="text-xs text-muted-foreground">{subBrand}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground sm:mt-3 sm:line-clamp-none">
        {valueProposition}
      </p>

      <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-xs leading-snug text-foreground/90 sm:text-[0.8125rem]"
          >
            <span aria-hidden="true" className={cn("mt-0.5 shrink-0", styles.accent)}>
              •
            </span>
            <span className="line-clamp-1 sm:line-clamp-none">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-1.5 pt-3 sm:gap-2 sm:pt-4">
        <TrackedLink
          href={ctaHref}
          external
          event="homepage_affiliate_click"
          section="top-picks"
          position={position}
          operator={operatorId}
          ctaType="primary"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
        >
          {ctaLabel}
        </TrackedLink>
        <TrackedLink
          href={reviewHref}
          event="homepage_review_click"
          section="top-picks"
          position={position}
          operator={operatorId}
          destination={reviewHref}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          Leer reseña
        </TrackedLink>
        <p className="line-clamp-2 text-[0.65rem] leading-snug text-muted-foreground sm:text-[0.7rem]">
          {termsLine}
        </p>
      </div>
    </article>
  );
}
