import { HomepageContainer } from "@/components/home/HomepageContainer";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  EN_HOME_PROMOS,
  resolveEnHomeCtaHref,
  type EnHomeOperatorId,
} from "@/components/home/en-v2/en-home-config";
import { getBonusesForCasino, getCasinoById } from "@/lib/content";
import { getGlobalReviewForCasino } from "@/lib/content/global";
import { cn } from "@/lib/utils";

const THEME_STYLES = {
  bitcasino:
    "border-[#6519A8]/30 bg-gradient-to-br from-[#12051F]/80 via-card/80 to-[#0A1931]",
  sportsbetio:
    "border-[#36B958]/30 bg-gradient-to-br from-[#11161C]/80 via-card/80 to-[#0A1931]",
  betsson:
    "border-amber-500/25 bg-gradient-to-br from-[#0a1628]/80 via-card/80 to-[#0A1931]",
} as const;

function getEnReviewHref(casinoId: string): string | undefined {
  const review = getGlobalReviewForCasino(casinoId);
  return review?.slug ? `/en/reviews/${review.slug}` : undefined;
}

function displayName(operatorId: EnHomeOperatorId, fallback: string): string {
  if (operatorId === "betsson") return "Betsson Mexico";
  if (operatorId === "cryptocasino") return "Anonymous Casino";
  return fallback;
}

/**
 * Active promotions for English homepage allowlist operators only.
 */
export function EnHomepageActivePromos() {
  const cards = EN_HOME_PROMOS.flatMap((promo) => {
    const casino = getCasinoById(promo.casinoId);
    const bonus = getBonusesForCasino(promo.casinoId).find((b) => b.active);
    const ctaHref = resolveEnHomeCtaHref(promo.casinoId);
    if (!casino || !bonus || !ctaHref) return [];
    return [
      {
        ...promo,
        casino,
        name: displayName(promo.casinoId, casino.name),
        ctaHref,
        reviewHref: getEnReviewHref(promo.casinoId),
        offerTitle: promo.offerTitle || bonus.offerLabel || bonus.title,
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="active-promotions"
      aria-labelledby="en-active-promos-heading"
      className="scroll-mt-24 py-6 sm:py-8"
    >
      <HomepageContainer>
        <div className="max-w-2xl space-y-1">
          <h2
            id="en-active-promos-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Active promotions
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Offers from the curated English homepage operators. Confirm deposit rules, wagering,
            eligible games, limits and expiry on the official site before opting in.
          </p>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch xl:grid-cols-3">
          {cards.map((card) => (
            <li key={card.casinoId} className="min-w-0">
              <article
                className={cn(
                  "flex h-full min-w-0 flex-col rounded-xl border p-4 sm:p-5",
                  THEME_STYLES[card.theme],
                )}
              >
                <div className="flex items-center gap-3">
                  <OperatorLogo
                    logo={card.casino.logo}
                    name={card.name}
                    operatorId={card.casinoId}
                  />
                  <h3 className="text-base font-semibold text-foreground">{card.name}</h3>
                </div>

                <p className="mt-3 text-sm font-medium leading-snug text-foreground">
                  {card.offerTitle}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {card.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 line-clamp-3 text-[0.7rem] leading-snug text-muted-foreground">
                  {card.termsLine}
                </p>

                <div className="mt-auto flex flex-col gap-2 pt-4">
                  <TrackedLink
                    href={card.ctaHref}
                    external
                    event="homepage_promo_click"
                    section="active-promos"
                    position={card.position}
                    operator={card.casinoId}
                    ctaType="primary"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
                  >
                    {card.ctaLabel}
                  </TrackedLink>
                  {card.reviewHref ? (
                    <TrackedLink
                      href={card.reviewHref}
                      event="homepage_review_click"
                      section="active-promos"
                      position={card.position}
                      operator={card.casinoId}
                      destination={card.reviewHref}
                      className="inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                    >
                      Read review
                    </TrackedLink>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </HomepageContainer>
    </section>
  );
}
