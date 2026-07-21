import { CryptoTopCasinoCard } from "@/components/verticals/crypto/CryptoTopCasinoCard";
import { CRYPTO_TOP_SIX } from "@/components/verticals/crypto/crypto-page-config";
import {
  getCryptoEditorialRating,
  getCryptoPaymentNames,
} from "@/components/verticals/crypto/crypto-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Main TOP-6 crypto recommendations for /casinos-crypto.
 */
export function CryptoTopRanking() {
  const cards = CRYPTO_TOP_SIX.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    if (!casino) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getCryptoEditorialRating(entry.operatorId),
        paymentNames: getCryptoPaymentNames(entry.operatorId),
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="top-crypto"
      aria-labelledby="top-crypto-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1.5">
        <h2
          id="top-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Casinos crypto recomendados por JugadaMax
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Selección editorial basada en interés de los usuarios, producto, pagos, especialización y
          condiciones publicadas. El orden puede diferir de las puntuaciones individuales.
        </p>
        <details className="group rounded-md border border-white/8 bg-[#0A1931]/40 open:border-primary/20">
          <summary
            className={cn(
              "cursor-pointer list-none px-2.5 py-1.5 text-xs font-medium text-foreground sm:px-3 sm:py-2 sm:text-sm",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <span className="flex items-center justify-between gap-2">
              ¿Cómo se ordena esta selección?
              <span
                aria-hidden="true"
                className="text-primary transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="border-t border-white/6 px-2.5 pb-2.5 pt-1.5 text-xs leading-relaxed text-muted-foreground sm:px-3 sm:pb-3 sm:pt-2 sm:text-sm">
            El orden combina interés de los usuarios, especialización, métodos de pago, producto y
            evaluación editorial. No representa una clasificación universal y puede cambiar cuando
            cambian las condiciones.
          </p>
        </details>
      </div>

      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {cards.slice(0, 3).map((card) => (
            <li
              key={card.operatorId}
              className={cn("min-w-0", card.featured && "sm:col-span-2 xl:col-span-2")}
            >
              <CryptoTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                secondaryName={card.secondaryName}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                chips={card.chips}
                kycLabel={card.kycLabel}
                paymentNames={card.paymentNames}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
                theme={card.theme}
                featured={card.featured}
                position={card.position}
                logo={card.logo}
              />
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {cards.slice(3).map((card) => (
            <li key={card.operatorId} className="min-w-0">
              <CryptoTopCasinoCard
                operatorId={card.operatorId}
                name={card.name}
                secondaryName={card.secondaryName}
                badge={card.badge}
                purpose={card.purpose}
                summary={card.summary}
                chips={card.chips}
                kycLabel={card.kycLabel}
                paymentNames={card.paymentNames}
                rating={card.rating}
                primaryCtaLabel={card.ctaLabel}
                primaryCtaHref={card.ctaHref}
                reviewHref={card.reviewHref}
                theme={card.theme}
                featured={card.featured}
                position={card.position}
                logo={card.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
