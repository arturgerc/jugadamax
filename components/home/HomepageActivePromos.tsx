import { HomepageContainer } from "@/components/home/HomepageContainer";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getBonusesForCasino, getCasinoById } from "@/lib/content";
import {
  BETFURY_AFFILIATE_URL,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { cn } from "@/lib/utils";

type PromoConfig = {
  casinoId: string;
  offerTitle: string;
  chips: readonly [string, string, string];
  termsLine: string;
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  position: number;
  theme: "betfury" | "mostbet";
};

const PROMOS: readonly PromoConfig[] = [
  {
    casinoId: "betfury",
    offerTitle: "Hasta 590% + Free Spins según términos oficiales",
    chips: ["Bonus Cabinet", "Free Spins", "Cashback"],
    termsLine:
      "Bonos, free spins, cashback y elegibilidad dependen de los términos oficiales de BetFury.",
    ctaLabel: "Ver oferta BetFury",
    ctaHref: BETFURY_AFFILIATE_URL,
    reviewHref: "/reviews/betfury",
    position: 1,
    theme: "betfury",
  },
  {
    casinoId: "mostbet",
    offerTitle: "125% + 250 FS en el primer depósito según campaña",
    chips: ["Casino o Sports", MOSTBET_PROMO_CODE, "Primer depósito"],
    termsLine:
      "Importe, wagering, juegos, mercados y elegibilidad dependen de la campaña, cuenta y términos.",
    ctaLabel: "Ver oferta Mostbet",
    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    reviewHref: "/reviews/mostbet",
    position: 2,
    theme: "mostbet",
  },
] as const;

const THEME_STYLES = {
  betfury:
    "border-orange-500/25 bg-gradient-to-br from-[#1a1208]/80 via-card/80 to-[#0A1931]",
  mostbet:
    "border-[#0A5A9C]/30 bg-gradient-to-br from-[#031A36]/80 via-card/80 to-[#0A1931]",
} as const;

/**
 * Compact active promotions — operators not already in the homepage top six.
 */
export function HomepageActivePromos() {
  const cards = PROMOS.flatMap((promo) => {
    const casino = getCasinoById(promo.casinoId);
    const bonus = getBonusesForCasino(promo.casinoId).find((b) => b.active);
    if (!casino || !bonus) return [];
    return [{ ...promo, casino, offerTitle: promo.offerTitle || bonus.title }];
  });

  if (cards.length === 0) return null;

  return (
    <section aria-labelledby="promociones-activas-heading" className="py-6 sm:py-8">
      <HomepageContainer>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl space-y-1">
            <h2
              id="promociones-activas-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Promociones activas
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Ofertas publicadas por los operadores. Revisa depósito, rollover, juegos elegibles,
              límites y vencimiento antes de participar.
            </p>
          </div>
          <TrackedLink
            href="/bonos"
            event="homepage_category_click"
            section="active-promos"
            position="all"
            destination="/bonos"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            Ver todos los bonos
          </TrackedLink>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch">
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
                    name={card.casino.name}
                    operatorId={card.casinoId}
                  />
                  <h3 className="text-base font-semibold text-foreground">{card.casino.name}</h3>
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

                <p className="mt-3 line-clamp-2 text-[0.7rem] leading-snug text-muted-foreground">
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
                  <TrackedLink
                    href={card.reviewHref}
                    event="homepage_review_click"
                    section="active-promos"
                    position={card.position}
                    operator={card.casinoId}
                    destination={card.reviewHref}
                    className="inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    Leer reseña
                  </TrackedLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </HomepageContainer>
    </section>
  );
}
