import { HomepageContainer } from "@/components/home/HomepageContainer";
import { HomepageTopPickCard } from "@/components/home/HomepageTopPickCard";
import { getCasinoById, getReviewForCasino } from "@/lib/content";
import {
  ANONYMOUS_CASINO_AFFILIATE_URL,
  BETFURY_AFFILIATE_URL,
  BETSSON_MX_HOME_URL,
} from "@/lib/affiliate/constants";

function ratingFor(casinoId: string): number {
  const review = getReviewForCasino(casinoId);
  return review?.rating ?? 0;
}

/**
 * Three distinct homepage recommendations — each operator appears once.
 */
export function HomepageTopPicks() {
  const anonymous = getCasinoById("cryptocasino");
  const betfury = getCasinoById("betfury");
  const betsson = getCasinoById("betsson");

  if (!anonymous || !betfury || !betsson) {
    return null;
  }

  return (
    <section
      id="recomendados"
      aria-labelledby="recomendados-heading"
      className="scroll-mt-24 py-6 sm:py-8"
    >
      <HomepageContainer>
        <div className="max-w-2xl space-y-1">
          <h2
            id="recomendados-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Recomendados por JugadaMax
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Tres opciones para necesidades distintas. Las puntuaciones son opiniones editoriales de
            JugadaMax, no garantías de pago, licencia o resultados.
          </p>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <li className="min-w-0">
            <HomepageTopPickCard
              operatorId="cryptocasino"
              operatorName="Anonymous Casino"
              subBrand="CryptoCasino.CC"
              badge="Mejor opción sin KYC"
              rating={ratingFor("cryptocasino")}
              valueProposition="Registro con email y contraseña, casino crypto y política pública sin KYC."
              features={[
                "BTC, ETH, USDT, LTC y crypto games",
                `Valoración editorial JugadaMax: ${ratingFor("cryptocasino").toFixed(1)}/5`,
              ]}
              ctaLabel="Registrarse"
              ctaHref={ANONYMOUS_CASINO_AFFILIATE_URL}
              reviewHref="/reviews/cryptocasino"
              termsLine="Sin KYC no significa anonimato técnico absoluto. Aplican Terms y controles antifraude."
              logo={anonymous.logo}
              theme="anonymous"
              position={1}
            />
          </li>
          <li className="min-w-0">
            <HomepageTopPickCard
              operatorId="betfury"
              operatorName="BetFury"
              badge="Promociones crypto"
              rating={ratingFor("betfury")}
              valueProposition="Bonus Cabinet, Free Spins, cashback y recompensas por nivel."
              features={[
                "Hasta 590% + Free Spins según términos",
                "BFG, Bitcoin, USDT y promociones crypto",
              ]}
              ctaLabel="Ver BetFury"
              ctaHref={BETFURY_AFFILIATE_URL}
              reviewHref="/reviews/betfury"
              termsLine="Porcentajes, free spins, wagering y elegibilidad dependen de los términos oficiales."
              logo={betfury.logo}
              theme="betfury"
              position={2}
            />
          </li>
          <li className="min-w-0">
            <HomepageTopPickCard
              operatorId="betsson"
              operatorName="Betsson México"
              badge="Pagos locales México"
              rating={ratingFor("betsson")}
              valueProposition="Casino y apuestas con OXXO, SPEI, tarjetas y métodos locales."
              features={[
                "OXXO, SPEI, Visa y Mastercard según disponibilidad",
                "Casino, live casino y sportsbook en una cuenta",
              ]}
              ctaLabel="Visitar Betsson"
              ctaHref={BETSSON_MX_HOME_URL}
              reviewHref="/reviews/betsson"
              termsLine="Promociones, pagos, verificación y retiros dependen de la cuenta y términos vigentes."
              logo={betsson.logo}
              theme="betsson"
              position={3}
            />
          </li>
        </ul>
      </HomepageContainer>
    </section>
  );
}
