import Link from "next/link";
import type { Casino, Vertical } from "@/types/content";
import type { Market } from "@/types/operator-links";
import { getBonusesForCasino, getReviewForCasino } from "@/lib/content";
import { getCasinoOutboundLink } from "@/lib/affiliate/operator-links";
import { cn, focusRing } from "@/lib/utils";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { RankBadge } from "@/components/ranking/RankBadge";
import { RatingStars } from "@/components/ranking/RatingStars";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { OperatorCta } from "@/components/trust/OperatorCta";
import { featuredBonusLabel, type UiLocale } from "@/lib/i18n/ui-labels";
import { LicenseInfo } from "@/components/trust/LicenseInfo";

const cardSurface =
  "rounded-2xl border border-white/10 bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-200 hover:border-white/15 hover:shadow-[0_6px_28px_-6px_rgba(0,0,0,0.5)]";

/**
 * Ranking card v2 — affiliate-style 3-zone layout (FR-009/FR-012).
 *
 * Left: rank + operator monogram. Center: identity, editorial score, summary,
 * bonus, payments, license. Right: affiliate CTA. Same base surface for every
 * rank; #1 gets a subtle accent only.
 */
export function RankingCard({
  casino,
  vertical,
  rank,
  className,
  market = "mx",
  locale = "es",
  reviewHref,
  reviewLabel = "Leer reseña",
  topRankLabel = "Selección editorial",
}: {
  casino: Casino;
  vertical: Vertical;
  rank: number;
  className?: string;
  market?: Market;
  locale?: UiLocale;
  /** Override review link when using global content loaders. */
  reviewHref?: string;
  reviewLabel?: string;
  topRankLabel?: string;
}) {
  const headlineBonus =
    market === "mx"
      ? getBonusesForCasino(casino.id).find((b) => b.active)?.title
      : undefined;
  const review = getReviewForCasino(casino.id);
  const resolvedReviewHref = reviewHref ?? (review ? `/reviews/${review.slug}` : undefined);
  const outboundLink = getCasinoOutboundLink(casino, market);
  const isTopRank = rank === 1;

  return (
    <article
      className={cn(
        cardSurface,
        "flex flex-col gap-4 p-4 sm:p-5",
        isTopRank && "border-l-2 border-l-primary/40 pl-[calc(1.25rem-2px)] sm:pl-[calc(1.25rem-2px)]",
        "lg:grid lg:grid-cols-[auto_minmax(0,1fr)_minmax(12.5rem,14.375rem)] lg:items-start lg:gap-x-6 lg:gap-y-0",
        className,
      )}
      data-vertical={vertical}
      data-rank={rank}
    >
      {/* Mobile / tablet identity row */}
      <div className="flex min-w-0 items-start gap-3 lg:hidden">
        <RankBadge
          rank={rank}
          className={cn(
            isTopRank &&
              "h-9 w-9 bg-gradient-to-br from-[var(--jm-gold)] to-[var(--jm-gold-strong)] text-[var(--jm-navy)] shadow-[0_2px_8px_-2px_rgba(255,184,0,0.35)] ring-1 ring-primary/25",
          )}
        />
        <OperatorLogo name={casino.name} logo={casino.logo} operatorId={casino.id} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold leading-snug text-foreground">{casino.name}</h3>
            {isTopRank ? (
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-primary">
                {topRankLabel}
              </span>
            ) : null}
          </div>
          {casino.rating !== undefined && <RatingStars rating={casino.rating} className="mt-1" />}
        </div>
      </div>

      {/* Desktop left zone: rank + logo */}
      <div className="hidden shrink-0 flex-col items-center gap-3 pt-0.5 lg:flex">
        <RankBadge
          rank={rank}
          className={cn(
            isTopRank &&
              "h-10 w-10 text-base bg-gradient-to-br from-[var(--jm-gold)] to-[var(--jm-gold-strong)] text-[var(--jm-navy)] shadow-[0_2px_8px_-2px_rgba(255,184,0,0.35)] ring-1 ring-primary/25",
          )}
        />
        <OperatorLogo name={casino.name} logo={casino.logo} operatorId={casino.id} />
      </div>

      {/* Center zone: name, editorial, summary, bonus, trust, payments */}
      <div className="min-w-0 flex flex-col gap-3 lg:gap-2.5">
        <div className="hidden min-w-0 lg:block">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-lg font-semibold leading-snug text-foreground">{casino.name}</h3>
            {isTopRank ? (
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-primary">
                {topRankLabel}
              </span>
            ) : null}
          </div>
          {casino.rating !== undefined && <RatingStars rating={casino.rating} className="mt-1.5" />}
        </div>

        {casino.summary ? (
          <p className="line-clamp-2 text-sm leading-relaxed text-pretty text-muted-foreground">
            {casino.summary}
          </p>
        ) : null}

        {headlineBonus ? (
          <div className="rounded-lg border border-white/8 bg-[#16233f]/60 px-3 py-2.5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
              {featuredBonusLabel(locale)}
            </p>
            <p className="mt-1 text-sm leading-snug text-foreground">{headlineBonus}</p>
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <PaymentBadges payments={casino.payments} max={4} />
          <LicenseInfo licensing={casino.licensing} locale={locale} />
        </div>

        {resolvedReviewHref ? (
          <Link
            href={resolvedReviewHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-[var(--jm-gold-strong)] lg:min-h-0 lg:py-1",
              focusRing,
            )}
          >
            {reviewLabel}
          </Link>
        ) : null}
      </div>

      {/* Right zone: CTA */}
      <div
        className={cn(
          "border-t border-white/8 pt-4 lg:flex lg:flex-col lg:justify-center lg:border-t-0 lg:border-l lg:border-white/8 lg:pl-5 lg:pt-0",
          market === "global" &&
            outboundLink &&
            "rounded-lg border border-primary/20 bg-primary/8 p-3 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:p-0 lg:pl-5",
        )}
      >
        {outboundLink ? (
          <OperatorCta
            link={outboundLink}
            className="w-full whitespace-nowrap shadow-[0_2px_12px_-4px_rgba(255,184,0,0.3)] lg:w-full"
          />
        ) : null}
      </div>
    </article>
  );
}
