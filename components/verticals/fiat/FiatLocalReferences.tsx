import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  getFiatEditorialRating,
  getFiatPaymentNames,
  getFiatReviewHref,
} from "@/components/verticals/fiat/fiat-data";
import { getCasinoById } from "@/lib/content";

const LOCAL_REFS = [
  {
    operatorId: "caliente",
    badge: "REFERENCIA LOCAL",
    category: "Casino, apuestas y pagos mexicanos",
    description:
      "Marca orientada al mercado mexicano con casino online, sportsbook y métodos locales según información publicada.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"] as const,
  },
  {
    operatorId: "codere",
    badge: "PARTNER PENDIENTE",
    category: "Casino y apuestas con enfoque local",
    description:
      "Operador con presencia local relevante para comparar pagos, casino online y apuestas en México.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"] as const,
  },
] as const;

/**
 * Local editorial-reference operators (non-affiliate commercial CTAs).
 */
export function FiatLocalReferences() {
  const cards = LOCAL_REFS.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    const reviewHref = getFiatReviewHref(entry.operatorId);
    if (!casino || !reviewHref) return [];
    return [
      {
        ...entry,
        name: casino.name,
        logo: casino.logo,
        rating: getFiatEditorialRating(entry.operatorId),
        paymentNames: getFiatPaymentNames(entry.operatorId, entry.paymentPriority),
        reviewHref,
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="operadores-locales"
      aria-labelledby="operadores-locales-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="operadores-locales-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Operadores locales de referencia
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Marcas incluidas por reconocimiento, presencia local y valor comparativo. Estas tarjetas
          no representan una campaña afiliada activa confirmada por JugadaMax.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {cards.map((card) => {
          const ratingLabel =
            typeof card.rating === "number" ? card.rating.toFixed(1) : null;
          return (
            <li key={card.operatorId} className="min-w-0">
              <article className="flex h-full min-w-0 flex-col rounded-xl border border-white/8 bg-[#111417]/50 p-3.5 sm:p-4">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="inline-flex items-center rounded-full border border-white/10 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    {card.badge}
                  </span>
                  {ratingLabel ? (
                    <span className="text-sm font-bold tabular-nums text-muted-foreground">
                      {ratingLabel}
                      <span className="text-xs font-medium">/5</span>
                    </span>
                  ) : null}
                </div>

                <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                  {card.category}
                </p>

                <div className="mt-2 flex items-center gap-2.5">
                  <OperatorLogo
                    logo={card.logo}
                    name={card.name}
                    operatorId={card.operatorId}
                  />
                  <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                    {card.name}
                  </h3>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {card.description}
                </p>

                {card.paymentNames.length > 0 ? (
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {card.paymentNames.map((method) => (
                      <li
                        key={method}
                        className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto pt-3">
                  <TrackedLink
                    href={card.reviewHref}
                    event="fiat_page_review_click"
                    section="operadores-locales"
                    operator={card.operatorId}
                    destination={card.reviewHref}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/10 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                  >
                    Leer reseña
                  </TrackedLink>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
