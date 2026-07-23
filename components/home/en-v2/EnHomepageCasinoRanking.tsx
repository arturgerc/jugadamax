import Link from "next/link";
import { HomepageCasinoCard } from "@/components/home/HomepageCasinoCard";
import { HomepageContainer } from "@/components/home/HomepageContainer";
import {
  EN_HOME_RANKING,
  resolveEnHomeCtaHref,
} from "@/components/home/en-v2/en-home-config";
import { getCasinoById, getReviewForCasino } from "@/lib/content";
import { getGlobalReviewForCasino } from "@/lib/content/global";
import { cn, focusRing } from "@/lib/utils";

/**
 * Canonical JugadaMax editorial rating from the authored review record.
 * Same casinoId → same rating across Spanish and English surfaces.
 * Display does not require an English review translation.
 */
function getCanonicalEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

/** English “Read review” only when a real /en/reviews route exists. */
function getEnReviewHref(casinoId: string): string | undefined {
  const review = getGlobalReviewForCasino(casinoId);
  return review?.slug ? `/en/reviews/${review.slug}` : undefined;
}

/**
 * Curated English homepage recommended operators — allowlist only.
 */
export function EnHomepageCasinoRanking() {
  const cards = EN_HOME_RANKING.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    const ctaHref = resolveEnHomeCtaHref(entry.operatorId);
    if (!casino || !ctaHref) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getCanonicalEditorialRating(entry.operatorId),
        ctaHref,
        reviewHref: getEnReviewHref(entry.operatorId),
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="recommended-casinos"
      aria-labelledby="en-recommended-casinos-heading"
      className="scroll-mt-24 py-4 sm:py-7"
    >
      <HomepageContainer>
        <div className="max-w-3xl space-y-1.5 sm:space-y-2">
          <h2
            id="en-recommended-casinos-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Recommended casinos on JugadaMax
          </h2>
          <p className="text-sm leading-snug text-muted-foreground sm:text-base sm:leading-relaxed">
            A curated English homepage selection — privacy-focused crypto, crypto casino/live
            products, crypto sportsbook coverage and a Mexico-facing fiat option. Order can differ
            from individual review scores.
          </p>

          <p
            role="note"
            className="rounded-md border border-white/10 bg-[#111417]/70 px-2.5 py-1.5 text-[0.75rem] leading-snug text-muted-foreground sm:px-3 sm:py-2 sm:text-[0.8125rem]"
          >
            <span className="font-semibold text-emerald-300">18+</span>
            {" · "}
            Some links are affiliate links. JugadaMax may earn a commission at no extra cost to
            you. Ratings are editorial opinions, not guarantees.{" "}
            <Link
              href="/en/affiliate-disclosure"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Disclosure
            </Link>
            {" · "}
            <Link
              href="/en/responsible-gambling"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Responsible gambling
            </Link>
          </p>

          <details className="group rounded-md border border-white/8 bg-[#0A1931]/40 open:border-primary/20">
            <summary
              className={cn(
                "cursor-pointer list-none px-2.5 py-1.5 text-xs font-medium text-foreground sm:px-3 sm:py-2 sm:text-sm",
                "[&::-webkit-details-marker]:hidden",
              )}
            >
              <span className="flex items-center justify-between gap-2">
                How is this selection ordered?
                <span
                  aria-hidden="true"
                  className="text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-white/6 px-2.5 pb-2.5 pt-1.5 text-xs leading-relaxed text-muted-foreground sm:px-3 sm:pb-3 sm:pt-2 sm:text-sm">
              Order combines product focus, payment framing and editorial judgement for English
              readers. It is not a universal ranking and may change when terms or coverage change.
              Availability always depends on your jurisdiction.
            </p>
          </details>
        </div>

        <div className="mt-4 space-y-3 sm:space-y-4">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {cards.slice(0, 3).map((card) => (
              <li
                key={card.operatorId}
                id={card.operatorId === "cryptocasino" ? "anonymous-casino" : undefined}
                className={cn(
                  "min-w-0",
                  card.operatorId === "cryptocasino" && "scroll-mt-24",
                  card.featured && "sm:col-span-2 xl:col-span-2",
                )}
              >
                <HomepageCasinoCard
                  operatorId={card.operatorId}
                  name={card.name}
                  secondaryName={card.secondaryName}
                  badge={card.badge}
                  purpose={card.purpose}
                  summary={card.summary}
                  chips={card.chips}
                  rating={card.rating}
                  primaryCtaLabel={card.ctaLabel}
                  primaryCtaHref={card.ctaHref}
                  reviewHref={card.reviewHref}
                  reviewLabel="Read review"
                  theme={card.theme}
                  featured={card.featured}
                  position={card.position}
                  logo={card.logo}
                />
              </li>
            ))}
          </ul>
          {cards.length > 3 ? (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {cards.slice(3).map((card) => (
                <li key={card.operatorId} className="min-w-0">
                  <HomepageCasinoCard
                    operatorId={card.operatorId}
                    name={card.name}
                    secondaryName={card.secondaryName}
                    badge={card.badge}
                    purpose={card.purpose}
                    summary={card.summary}
                    chips={card.chips}
                    rating={card.rating}
                    primaryCtaLabel={card.ctaLabel}
                    primaryCtaHref={card.ctaHref}
                    reviewHref={card.reviewHref}
                    reviewLabel="Read review"
                    theme={card.theme}
                    featured={card.featured}
                    position={card.position}
                    logo={card.logo}
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </HomepageContainer>
    </section>
  );
}
