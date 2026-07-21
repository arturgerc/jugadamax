import { CryptoPromotionCard } from "@/components/verticals/crypto/CryptoPromotionCard";
import { CRYPTO_PROMOTIONS } from "@/components/verticals/crypto/crypto-page-config";
import { getCasinoById } from "@/lib/content";

/**
 * Active crypto promotions — operators not in TOP-6.
 */
export function CryptoPromotionHighlights() {
  const cards = CRYPTO_PROMOTIONS.flatMap((promo) => {
    const casino = getCasinoById(promo.operatorId);
    if (!casino) return [];
    return [{ ...promo, name: casino.name, logo: casino.logo }];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="promociones-crypto"
      aria-labelledby="promociones-crypto-heading"
      className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="promociones-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Promociones crypto activas
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Campañas publicadas por los operadores. Revisa depósito, rollover, juegos elegibles,
          límites, verificación y vencimiento.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
        {cards.map((card) => (
          <li key={card.operatorId} className="min-w-0">
            <CryptoPromotionCard
              operatorId={card.operatorId}
              name={card.name}
              offerTitle={card.offerTitle}
              promoCode={card.promoCode}
              chips={card.chips}
              termsLine={card.termsLine}
              ctaLabel={card.ctaLabel}
              ctaHref={card.ctaHref}
              reviewHref={card.reviewHref}
              theme={card.theme}
              position={card.position}
              logo={card.logo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
