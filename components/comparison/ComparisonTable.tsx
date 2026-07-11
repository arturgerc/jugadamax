import Link from "next/link";
import type { Casino, Vertical } from "@/types/content";
import type { Market } from "@/types/operator-links";
import { comparisonTableLabels, type UiLocale } from "@/lib/i18n/ui-labels";
import { getBonusesForCasino, getReviewForCasino } from "@/lib/content";
import { getCasinoOutboundLink } from "@/lib/affiliate/operator-links";
import { cn } from "@/lib/utils";
import { RatingStars } from "@/components/ranking/RatingStars";
import { OperatorCta } from "@/components/trust/OperatorCta";

/**
 * Side-by-side comparison table (FR-010).
 *
 * Horizontal overflow is confined to the inner scroll wrapper (`overflow-x-auto`)
 * so it never causes horizontal PAGE overflow (FR-031). Links to the evaluation
 * methodology (FR-011).
 */
export function ComparisonTable({
  casinos,
  vertical,
  className,
  market = "mx",
  locale = "es",
  reviewBasePath = "/reviews",
  reviewLabel = "Leer reseña",
  visitLabel,
  methodologyHref = "/como-evaluamos",
  methodologyLabel = "metodología de evaluación",
  reviewSlugByCasinoId,
}: {
  casinos: Casino[];
  vertical: Vertical;
  className?: string;
  market?: Market;
  locale?: UiLocale;
  reviewBasePath?: string;
  reviewLabel?: string;
  visitLabel?: string;
  methodologyHref?: string;
  methodologyLabel?: string;
  reviewSlugByCasinoId?: Record<string, string>;
}) {
  if (casinos.length === 0) return null;

  const labels = comparisonTableLabels(locale);

  return (
    <div className={cn("min-w-0 w-full space-y-3", className)}>
      <div
        className="w-full max-w-full overflow-x-auto overscroll-x-contain rounded-lg border border-border/60 [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
        role="region"
        aria-label={labels.ariaLabel}
      >
        <table className="w-max min-w-[42rem] border-collapse text-left text-sm md:min-w-0 md:w-full">
          <thead>
            <tr className="border-b border-border/60 bg-card/60 text-muted-foreground">
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium">#</th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium">{labels.operator}</th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium">{labels.rating}</th>
              <th scope="col" className="min-w-[11rem] px-3 py-2.5 font-medium">{labels.bonus}</th>
              <th scope="col" className="min-w-[9rem] px-3 py-2.5 font-medium">{labels.payments}</th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium">{labels.action}</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, index) => {
              const rank = casino.rankByVertical[vertical] ?? index + 1;
              const headlineBonus =
                market === "mx"
                  ? getBonusesForCasino(casino.id).find((b) => b.active)?.title
                  : undefined;
              const payments = (casino.payments ?? []).map((p) => p.name).join(", ");
              const reviewSlug = reviewSlugByCasinoId
                ? reviewSlugByCasinoId[casino.id]
                : getReviewForCasino(casino.id)?.slug;
              const outboundLink = getCasinoOutboundLink(casino, market);

              return (
                <tr key={casino.id} className="border-b border-border/40 align-top last:border-0">
                  <td className="whitespace-nowrap px-3 py-3 font-semibold text-foreground">{rank}</td>
                  <td className="min-w-[6.5rem] px-3 py-3 font-medium text-foreground">
                    {casino.name}
                    {reviewSlug ? (
                      <Link
                        href={`${reviewBasePath}/${reviewSlug}`}
                        className="mt-0.5 block text-xs font-normal text-primary underline underline-offset-2"
                      >
                        {reviewLabel}
                      </Link>
                    ) : null}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {casino.rating !== undefined ? (
                      <RatingStars rating={casino.rating} />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="min-w-[11rem] px-3 py-3 text-muted-foreground">{headlineBonus ?? "—"}</td>
                  <td className="min-w-[9rem] px-3 py-3 text-muted-foreground">{payments || "—"}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <OperatorCta
                      link={
                        outboundLink
                          ? { ...outboundLink, label: visitLabel ?? outboundLink.label }
                          : undefined
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        {labels.orderPrefix}{" "}
        <Link
          href={methodologyHref}
          className="font-medium text-primary underline underline-offset-2"
        >
          {methodologyLabel}
        </Link>
        .
      </p>
    </div>
  );
}
