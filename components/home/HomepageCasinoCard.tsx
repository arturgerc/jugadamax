import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

export type CasinoCardTheme =
  | "anonymous"
  | "bitcasino"
  | "ltccasino"
  | "ethcasino"
  | "sportsbetio"
  | "betsson";

export type HomepageCasinoCardProps = {
  operatorId: string;
  name: string;
  secondaryName?: string;
  badge: string;
  purpose: string;
  summary: string;
  chips: readonly string[];
  rating?: number;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  reviewHref: string;
  theme: CasinoCardTheme;
  featured?: boolean;
  position: number;
  logo?: ImageRef;
  className?: string;
};

const THEMES: Record<
  CasinoCardTheme,
  { card: string; badge: string; purpose: string; accent: string }
> = {
  anonymous: {
    card: "border-[#E0001B]/30 bg-gradient-to-b from-[#0B0D12] via-[#111417] to-[#050607] shadow-[0_0_28px_-12px_rgba(224,0,27,0.35)]",
    badge: "border-[#E0001B]/40 bg-[#E0001B]/12 text-[#FF8A8F]",
    purpose: "text-[#FF8A8F]",
    accent: "text-[#FF1C24]",
  },
  bitcasino: {
    card: "border-[#6519A8]/30 bg-gradient-to-b from-[#12051F] via-[#1a0a2e] to-[#0A1931]",
    badge: "border-[#7B22D3]/40 bg-[#7B22D3]/12 text-violet-200",
    purpose: "text-violet-300",
    accent: "text-orange-300",
  },
  ltccasino: {
    card: "border-[#2156FF]/30 bg-gradient-to-b from-[#171821] via-[#1D1F2A] to-[#0A1931]",
    badge: "border-[#4B6FFF]/40 bg-[#2156FF]/12 text-blue-200",
    purpose: "text-blue-300",
    accent: "text-[#4B6FFF]",
  },
  ethcasino: {
    card: "border-[#10BBD7]/30 bg-gradient-to-b from-[#080D18] via-[#0D1824] to-[#0A1931]",
    badge: "border-[#21D6EB]/40 bg-[#10BBD7]/12 text-cyan-200",
    purpose: "text-cyan-300",
    accent: "text-[#21D6EB]",
  },
  sportsbetio: {
    card: "border-[#36B958]/30 bg-gradient-to-b from-[#11161C] via-[#171E25] to-[#0A1931]",
    badge: "border-[#45D067]/40 bg-[#36B958]/12 text-emerald-200",
    purpose: "text-emerald-300",
    accent: "text-[#45D067]",
  },
  betsson: {
    card: "border-amber-500/25 bg-gradient-to-b from-[#0a1628] via-[#111417] to-[#0A1931]",
    badge: "border-amber-400/40 bg-amber-500/10 text-amber-200",
    purpose: "text-amber-300",
    accent: "text-amber-300",
  },
};

/**
 * Compact homepage casino recommendation card.
 */
export function HomepageCasinoCard({
  operatorId,
  name,
  secondaryName,
  badge,
  purpose,
  summary,
  chips,
  rating,
  primaryCtaLabel,
  primaryCtaHref,
  reviewHref,
  theme,
  featured = false,
  position,
  logo,
  className,
}: HomepageCasinoCardProps) {
  const styles = THEMES[theme];
  const ratingLabel =
    typeof rating === "number" && Number.isFinite(rating) ? rating.toFixed(1) : null;

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border p-3 sm:p-4",
        styles.card,
        featured && "sm:p-5",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-1">
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide",
            styles.badge,
          )}
        >
          {badge}
        </span>
        {ratingLabel ? (
          <span className={cn("text-sm font-bold tabular-nums", styles.accent)}>
            {ratingLabel}
            <span className="text-xs font-medium text-muted-foreground">/5</span>
          </span>
        ) : null}
      </div>

      <p
        className={cn(
          "mt-1 text-[0.65rem] font-medium uppercase tracking-wide",
          styles.purpose,
        )}
      >
        {purpose}
      </p>

      <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-2.5">
        <div className="origin-left scale-90 sm:scale-100">
          <OperatorLogo logo={logo} name={name} operatorId={operatorId} />
        </div>
        <div className="min-w-0">
          <h3
            className={cn(
              "font-bold tracking-tight text-foreground",
              featured ? "text-sm sm:text-lg" : "text-sm sm:text-base",
            )}
          >
            {name}
          </h3>
          {secondaryName ? (
            <p className="text-[0.7rem] text-muted-foreground sm:text-xs">{secondaryName}</p>
          ) : null}
        </div>
      </div>

      <p
        className={cn(
          "mt-1.5 text-[0.8125rem] leading-snug text-muted-foreground sm:mt-2 sm:text-sm",
          "line-clamp-2",
        )}
      >
        {summary}
      </p>

      <ul className="mt-2 flex flex-wrap gap-1 sm:mt-2.5 sm:gap-1.5">
        {chips.slice(0, 3).map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2 py-0.5 text-[0.62rem] font-medium text-muted-foreground"
          >
            {chip}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-1 pt-2.5 sm:gap-1.5 sm:pt-3">
        <TrackedLink
          href={primaryCtaHref}
          external
          event="homepage_affiliate_click"
          section="top-casinos"
          position={position}
          operator={operatorId}
          ctaType="primary"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
        >
          {primaryCtaLabel}
        </TrackedLink>
        <TrackedLink
          href={reviewHref}
          event="homepage_review_click"
          section="top-casinos"
          position={position}
          operator={operatorId}
          destination={reviewHref}
          className="inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Leer reseña
        </TrackedLink>
      </div>
    </article>
  );
}
