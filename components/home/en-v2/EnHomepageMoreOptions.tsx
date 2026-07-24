import { HomepageContainer } from "@/components/home/HomepageContainer";
import { HomepageOperatorRow } from "@/components/home/HomepageOperatorRow";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  EN_HOME_MORE_OPTIONS,
  type EnMoreOptionsOperator,
  type EnMoreOptionsPanel,
} from "@/components/home/en-v2/en-home-config";
import { getCasinoById, getReviewForCasino } from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalReviewForCasino,
} from "@/lib/content/global";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";
import { cn, focusRing } from "@/lib/utils";

const DEFAULT_VISIBLE_COUNT = 3;
const DEFAULT_MORE_LABEL = "Show {count} more";
const DEFAULT_HIDE_LABEL = "Hide {count} operators";

function resolveCasino(operatorId: string) {
  const globalCasino = getGlobalCasinoById(operatorId);
  const mxCasino = getCasinoById(operatorId);
  if (!globalCasino && !mxCasino) return undefined;
  if (!globalCasino) return mxCasino;
  if (!mxCasino) return globalCasino;
  return {
    ...globalCasino,
    logo: globalCasino.logo ?? mxCasino.logo,
  };
}

function resolveRating(entry: EnMoreOptionsOperator): number | undefined {
  const rating =
    entry.ratingSource === "global"
      ? getGlobalReviewForCasino(entry.operatorId)?.rating
      : getReviewForCasino(entry.operatorId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

function resolveEnReviewHref(operatorId: string): string | undefined {
  const review = getGlobalReviewForCasino(operatorId);
  return review?.slug ? `/en/reviews/${review.slug}` : undefined;
}

function resolveOutboundHref(operatorId: string): string | undefined {
  return resolveOperatorLink(operatorId, "global")?.url;
}

function formatPanelLabel(template: string, count: number): string {
  return template.replace("{count}", String(count));
}

function renderOperatorRow(
  panel: EnMoreOptionsPanel,
  entry: EnMoreOptionsOperator,
  index: number,
) {
  const casino = resolveCasino(entry.operatorId);
  if (!casino) return null;

  const reviewHref = resolveEnReviewHref(entry.operatorId);
  const outboundHref = resolveOutboundHref(entry.operatorId);
  if (!reviewHref && !outboundHref) return null;

  return (
    <li key={`${panel.id}-${entry.operatorId}-${index}`}>
      <HomepageOperatorRow
        operatorId={entry.operatorId}
        name={entry.displayName ?? casino.name}
        label={entry.label}
        reviewHref={reviewHref}
        href={reviewHref ? undefined : outboundHref}
        external={!reviewHref && Boolean(outboundHref)}
        rating={resolveRating(entry)}
        logo={casino.logo}
        category={panel.id}
        position={index + 1}
        marketBadge={entry.marketBadge}
        actionLabel={reviewHref ? "Read review" : "Visit operator"}
      />
    </li>
  );
}

/**
 * Compact English “More options by category” — operator comparison panels.
 * Shows `visibleCount` operators immediately; remaining rows stay in closed `<details>`.
 */
export function EnHomepageMoreOptions() {
  return (
    <section aria-labelledby="en-more-options-heading" className="py-6 sm:py-8">
      <HomepageContainer>
        <div className="max-w-2xl space-y-1">
          <h2
            id="en-more-options-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            More options by category
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore additional operators by casino type and market. Availability, payments and
            terms depend on jurisdiction.
          </p>
          <p className="text-xs text-muted-foreground/90">
            These lists expand the main homepage selection. Ratings are JugadaMax editorial
            opinions.
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 md:items-stretch md:gap-4">
          {EN_HOME_MORE_OPTIONS.map((panel) => {
            const visibleCount = panel.visibleCount ?? DEFAULT_VISIBLE_COUNT;
            const visibleOperators = panel.operators.slice(0, visibleCount);
            const collapsedOperators = panel.operators.slice(visibleCount);
            const collapsedCount = collapsedOperators.length;
            const moreLabel = formatPanelLabel(
              panel.moreLabel ?? DEFAULT_MORE_LABEL,
              collapsedCount,
            );
            const hideLabel = formatPanelLabel(
              panel.hideLabel ?? DEFAULT_HIDE_LABEL,
              collapsedCount,
            );

            return (
              <li key={panel.id} className="min-w-0">
                <article
                  className={cn(
                    "flex h-full min-w-0 flex-col rounded-xl border p-3.5 sm:p-4",
                    panel.theme,
                  )}
                >
                  <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                    {panel.heading}
                  </h3>
                  <p className="mt-1 hidden text-xs leading-snug text-muted-foreground sm:line-clamp-2 sm:block">
                    {panel.description}
                  </p>

                  <ul className="mt-2 space-y-0 sm:mt-3 sm:space-y-0.5">
                    {visibleOperators.map((entry, index) =>
                      renderOperatorRow(panel, entry, index),
                    )}
                  </ul>

                  {collapsedCount > 0 ? (
                    <details className="group mt-2 rounded-lg border border-white/10 bg-[#0A1931]/35 open:border-primary/20">
                      <summary
                        className={cn(
                          "cursor-pointer list-none px-2.5 py-2 text-xs font-semibold text-foreground sm:text-sm",
                          "[&::-webkit-details-marker]:hidden",
                          focusRing,
                        )}
                      >
                        <span className="flex min-h-10 items-center justify-between gap-2">
                          <span>
                            <span className="group-open:hidden">{moreLabel}</span>
                            <span className="hidden group-open:inline">{hideLabel}</span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-primary transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </span>
                      </summary>
                      <ul className="space-y-0 border-t border-white/8 px-1 pb-1.5 pt-1 sm:space-y-0.5">
                        {collapsedOperators.map((entry, index) =>
                          renderOperatorRow(panel, entry, visibleCount + index),
                        )}
                      </ul>
                    </details>
                  ) : null}

                  <div className="mt-auto pt-2.5 sm:pt-3">
                    <TrackedLink
                      href={panel.ctaHref}
                      event="homepage_category_click"
                      section="more-options"
                      destination={panel.ctaHref}
                      category={panel.id}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/12 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {panel.ctaLabel}
                    </TrackedLink>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </HomepageContainer>
    </section>
  );
}
