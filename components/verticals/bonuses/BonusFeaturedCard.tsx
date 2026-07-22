import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { ResolvedBonusRow } from "@/components/verticals/bonuses/bonus-data";
import {
  BONUS_SURFACES,
  featuredThemeForOperator,
} from "@/components/verticals/bonuses/bonus-visual";
import { cn } from "@/lib/utils";

/**
 * Compact featured bonus card — editorial selection, not a numeric ranking.
 */
export function BonusFeaturedCard({
  row,
  position,
  featured = false,
}: {
  row: ResolvedBonusRow;
  position: number;
  featured?: boolean;
}) {
  const theme = featuredThemeForOperator(row.casinoId);

  return (
    <article
      className={cn(
        "relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border p-3.5 sm:p-4",
        theme.card,
        BONUS_SURFACES.cardHover,
        featured && "sm:p-5 shadow-[0_0_32px_-14px_rgba(255,184,0,0.32)]",
      )}
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", theme.glow)}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r",
          theme.accentBar,
        )}
      />

      <div className="relative flex flex-wrap items-center justify-between gap-1.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide",
              theme.badge,
            )}
          >
            {featured ? "Selección destacada" : "Promoción destacada"}
          </span>
          {row.cta.badge ? (
            <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/50 px-2 py-0.5 text-[0.62rem] font-medium text-muted-foreground">
              {row.cta.badge}
            </span>
          ) : null}
        </div>
        <span className="rounded-full border border-white/10 bg-[#0A1931]/45 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
          {row.statusLabel}
        </span>
      </div>

      <div className="relative mt-2.5 flex items-center gap-2.5">
        <OperatorLogo
          logo={row.logo}
          name={row.operatorName}
          operatorId={row.casinoId}
          variant="compact-row"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
            {row.operatorName}
          </h3>
          <p className="truncate text-[0.7rem] text-muted-foreground">{row.productLabel}</p>
        </div>
      </div>

      <p className="relative mt-2.5 line-clamp-2 text-[0.95rem] font-bold leading-snug text-foreground sm:text-base">
        {row.offerText}
      </p>

      <dl className="relative mt-3 grid grid-cols-2 gap-2 text-[0.7rem]">
        <div className={BONUS_SURFACES.dataCell}>
          <dt className="text-muted-foreground">Depósito mín.</dt>
          <dd className="mt-0.5 font-medium text-foreground">{row.minDeposit}</dd>
        </div>
        <div className={BONUS_SURFACES.dataCell}>
          <dt className="text-muted-foreground">Wagering</dt>
          <dd className="mt-0.5 font-medium text-foreground">{row.wagering}</dd>
        </div>
        <div className={BONUS_SURFACES.dataCell}>
          <dt className="text-muted-foreground">Vigencia</dt>
          <dd className="mt-0.5 font-medium text-foreground">{row.validity}</dd>
        </div>
        <div className={BONUS_SURFACES.dataCell}>
          <dt className="text-muted-foreground">Código</dt>
          <dd className="mt-0.5">
            {row.cta.promoCode ? (
              <span className={BONUS_SURFACES.promoChip}>{row.cta.promoCode}</span>
            ) : (
              <span className="font-medium text-foreground">No publicado</span>
            )}
          </dd>
        </div>
      </dl>

      <div className="relative mt-2.5 rounded-md border border-white/8 bg-[#0A1931]/35 px-2.5 py-2">
        <p className="line-clamp-2 text-[0.7rem] leading-snug text-muted-foreground">
          {row.bonus.terms ?? "Confirma términos oficiales en el operador."}
        </p>
      </div>

      <div className="relative mt-auto flex flex-col gap-1.5 pt-3">
        <TrackedLink
          href={row.cta.ctaHref}
          external
          event="bonus_page_affiliate_click"
          section="featured"
          position={position}
          operator={row.casinoId}
          ctaType="primary"
          className={cn(BONUS_SURFACES.goldCta, "w-full")}
        >
          {row.cta.ctaLabel}
        </TrackedLink>
        {row.reviewHref ? (
          <TrackedLink
            href={row.reviewHref}
            event="bonus_page_review_click"
            section="featured"
            position={position}
            operator={row.casinoId}
            destination={row.reviewHref}
            className="inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-muted-foreground underline-offset-2 transition-colors duration-150 hover:text-foreground hover:underline"
          >
            Leer reseña
          </TrackedLink>
        ) : null}
      </div>
    </article>
  );
}
