import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { BettingCardTheme } from "@/components/verticals/betting/betting-page-config";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/utils";

export type BettingOperatorCardProps = {
  operatorId: string;
  name: string;
  badge: string;
  purpose: string;
  summary: string;
  paymentNames: readonly string[];
  offerTitle: string;
  offerProductLabel?: string;
  promoCode?: string;
  rating?: number;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  reviewHref: string;
  theme: BettingCardTheme;
  featured?: boolean;
  position: number;
  logo?: ImageRef;
  compact?: boolean;
  className?: string;
};

const THEMES: Record<
  BettingCardTheme,
  { card: string; badge: string; purpose: string; accent: string }
> = {
  betsson: {
    card: "border-amber-500/30 bg-gradient-to-b from-[#0c1830] via-[#111c32] to-[#0A1931] shadow-[0_0_28px_-12px_rgba(255,184,0,0.28)]",
    badge: "border-amber-400/40 bg-amber-500/12 text-amber-200",
    purpose: "text-amber-300",
    accent: "text-amber-300",
  },
  onexbet: {
    card: "border-cyan-500/30 bg-gradient-to-b from-[#071528] via-[#0a1a33] to-[#0A1931]",
    badge: "border-cyan-400/40 bg-cyan-500/12 text-cyan-200",
    purpose: "text-cyan-300",
    accent: "text-cyan-300",
  },
  melbet: {
    card: "border-yellow-500/25 bg-gradient-to-b from-[#121417] via-[#161a22] to-[#0A1931]",
    badge: "border-yellow-400/35 bg-yellow-500/10 text-yellow-200",
    purpose: "text-yellow-300/90",
    accent: "text-yellow-300",
  },
  mostbet: {
    card: "border-orange-500/30 bg-gradient-to-b from-[#0c1428] via-[#121a30] to-[#0A1931]",
    badge: "border-orange-400/40 bg-orange-500/12 text-orange-200",
    purpose: "text-orange-300",
    accent: "text-orange-300",
  },
  awintura: {
    card: "border-yellow-600/30 bg-gradient-to-b from-[#0a0c10] via-[#111417] to-[#0A1931]",
    badge: "border-yellow-500/35 bg-yellow-500/10 text-yellow-200",
    purpose: "text-emerald-300/90",
    accent: "text-yellow-300",
  },
  sportsbet: {
    card: "border-emerald-500/30 bg-gradient-to-b from-[#071612] via-[#0c1a16] to-[#0A1931]",
    badge: "border-emerald-400/40 bg-emerald-500/12 text-emerald-200",
    purpose: "text-emerald-300",
    accent: "text-emerald-300",
  },
};

/**
 * Compact sportsbook recommendation card — not a full OfferCard wall.
 */
export function BettingOperatorCard({
  operatorId,
  name,
  badge,
  purpose,
  summary,
  paymentNames,
  offerTitle,
  offerProductLabel,
  promoCode,
  rating,
  primaryCtaLabel,
  primaryCtaHref,
  reviewHref,
  theme,
  featured = false,
  position,
  logo,
  compact = false,
  className,
}: BettingOperatorCardProps) {
  const styles = THEMES[theme];
  const ratingLabel =
    typeof rating === "number" && Number.isFinite(rating) ? rating.toFixed(1) : null;

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border p-3.5 sm:p-4",
        styles.card,
        featured && "sm:p-5",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-1.5">
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

      <p className={cn("mt-1.5 text-[0.65rem] font-medium uppercase tracking-wide", styles.purpose)}>
        {purpose}
      </p>

      <div className="mt-2 flex items-center gap-2.5">
        <OperatorLogo logo={logo} name={name} operatorId={operatorId} />
        <h3
          className={cn(
            "font-bold tracking-tight text-foreground",
            featured ? "text-base sm:text-lg" : "text-sm sm:text-base",
          )}
        >
          {name}
        </h3>
      </div>

      <p
        className={cn(
          "mt-2 text-sm leading-snug text-muted-foreground",
          compact ? "line-clamp-2" : "line-clamp-3",
        )}
      >
        {summary}
      </p>

      {paymentNames.length > 0 ? (
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {paymentNames.slice(0, 4).map((method) => (
            <li
              key={method}
              className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
            >
              {method}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-2 line-clamp-2 text-[0.75rem] font-medium leading-snug text-foreground/90">
        {offerTitle}
      </p>
      {offerProductLabel ? (
        <p className="mt-0.5 text-[0.65rem] text-muted-foreground">{offerProductLabel}</p>
      ) : null}

      {promoCode ? (
        <p className="mt-1 break-all text-[0.7rem] text-muted-foreground">
          Código:{" "}
          <span className="font-semibold tracking-wide text-foreground">{promoCode}</span>
        </p>
      ) : null}

      <div className="mt-auto flex flex-col gap-1.5 pt-3">
        <TrackedLink
          href={primaryCtaHref}
          external
          event="betting_page_affiliate_click"
          section={featured ? "seleccion-principal" : "operadores-adicionales"}
          position={position}
          operator={operatorId}
          ctaType="primary"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
        >
          {primaryCtaLabel}
        </TrackedLink>
        <TrackedLink
          href={reviewHref}
          event="betting_page_review_click"
          section={featured ? "seleccion-principal" : "operadores-adicionales"}
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
