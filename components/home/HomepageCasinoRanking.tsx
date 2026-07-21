import Link from "next/link";
import {
  HomepageCasinoCard,
  type CasinoCardTheme,
} from "@/components/home/HomepageCasinoCard";
import { HomepageContainer } from "@/components/home/HomepageContainer";
import { getCasinoById, getReviewForCasino } from "@/lib/content";
import {
  ANONYMOUS_CASINO_AFFILIATE_URL,
  BETSSON_MX_HOME_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
  ETHCASINO_AFFILIATE_URL,
  LTCCASINO_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { cn, focusRing } from "@/lib/utils";

/** Editorial rating from the published review record; omit when missing. */
function getEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

type RankingEntry = {
  operatorId: string;
  name: string;
  secondaryName?: string;
  badge: string;
  purpose: string;
  summary: string;
  chips: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  theme: CasinoCardTheme;
  featured?: boolean;
  position: number;
};

const RANKING: readonly RankingEntry[] = [
  {
    operatorId: "cryptocasino",
    name: "Anonymous Casino",
    secondaryName: "CryptoCasino.CC",
    badge: "TOP SIN KYC",
    purpose: "Privacidad y crypto",
    summary:
      "Registro con email y contraseña, política pública sin KYC y amplio catálogo crypto.",
    chips: ["Sin KYC", "BTC / ETH", "Crypto games"],
    ctaLabel: "Registrarse",
    ctaHref: ANONYMOUS_CASINO_AFFILIATE_URL,
    reviewHref: "/reviews/cryptocasino",
    theme: "anonymous",
    featured: true,
    position: 1,
  },
  {
    operatorId: "bitcasino",
    name: "Bitcasino.io",
    badge: "CASINO CRYPTO",
    purpose: "Casino y live",
    summary: "Slots, Originals, live casino y promociones para usuarios crypto.",
    chips: ["BTC / USDT", "Originals", "Live Casino"],
    ctaLabel: "Visitar Bitcasino",
    ctaHref: BITCASINO_REGISTRATION_AFFILIATE_URL,
    reviewHref: "/reviews/bitcasino",
    theme: "bitcasino",
    position: 2,
  },
  {
    operatorId: "ltccasino",
    name: "LTC Casino",
    badge: "LITECOIN SIN KYC",
    purpose: "Privacidad y Litecoin",
    summary:
      "Casino crypto orientado a Litecoin, email y contraseña y política pública sin KYC.",
    chips: ["Sin KYC", "LTC", "Crypto-only"],
    ctaLabel: "Registrarse",
    ctaHref: LTCCASINO_AFFILIATE_URL,
    reviewHref: "/reviews/ltccasino",
    theme: "ltccasino",
    position: 3,
  },
  {
    operatorId: "ethcasino",
    name: "ETH Casino",
    badge: "ETHEREUM SIN KYC",
    purpose: "Ethereum y privacidad",
    summary: "Ethereum-first, registro mediante email y contraseña y política sin KYC.",
    chips: ["Sin KYC", "ETH", "Live Casino"],
    ctaLabel: "Registrarse",
    ctaHref: ETHCASINO_AFFILIATE_URL,
    reviewHref: "/reviews/ethcasino",
    theme: "ethcasino",
    position: 4,
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "CRYPTO CASINO + SPORTS",
    purpose: "Casino y sportsbook",
    summary: "Sportsbook crypto, live betting, slots, Originals y casino en vivo.",
    chips: ["USDT", "Sports", "Casino"],
    ctaLabel: "Visitar Sportsbet.io",
    ctaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    reviewHref: "/reviews/sportsbet-io",
    theme: "sportsbetio",
    position: 5,
  },
  {
    operatorId: "betsson",
    name: "Betsson México",
    badge: "FIAT MÉXICO",
    purpose: "Pagos locales",
    summary: "Casino, live casino y apuestas con métodos de pago locales para México.",
    chips: ["OXXO", "SPEI", "Tarjetas"],
    ctaLabel: "Visitar Betsson",
    ctaHref: BETSSON_MX_HOME_URL,
    reviewHref: "/reviews/betsson",
    theme: "betsson",
    position: 6,
  },
] as const;

/**
 * Homepage top-six casino selection — appears immediately after the hero.
 * Explicit curated list; not a generic surface feed.
 */
export function HomepageCasinoRanking() {
  const cards = RANKING.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    if (!casino) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getEditorialRating(entry.operatorId),
      },
    ];
  });

  if (cards.length === 0) return null;

  return (
    <section
      id="top-casinos"
      aria-labelledby="top-casinos-heading"
      className="scroll-mt-24 py-4 sm:py-7"
    >
      <HomepageContainer>
        <div className="max-w-3xl space-y-1.5 sm:space-y-2">
          <h2
            id="top-casinos-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Casinos recomendados por JugadaMax
          </h2>
          <p className="text-sm leading-snug text-muted-foreground sm:text-base sm:leading-relaxed">
            Operadores seleccionados por interés de los usuarios, producto, pagos y evaluación
            editorial. El orden de esta selección puede diferir de las puntuaciones individuales.
          </p>

          <p
            role="note"
            className="rounded-md border border-white/10 bg-[#111417]/70 px-2.5 py-1.5 text-[0.75rem] leading-snug text-muted-foreground sm:px-3 sm:py-2 sm:text-[0.8125rem]"
          >
            <span className="font-semibold text-emerald-300">+18</span>
            {" · "}
            Algunos enlaces son afiliados. JugadaMax puede recibir una comisión sin costo
            adicional para ti. Las puntuaciones son opiniones editoriales, no garantías.{" "}
            <Link
              href="/divulgacion-afiliados"
              className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
            >
              Divulgación
            </Link>
            {" · "}
            <Link
              href="/juego-responsable"
              className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
            >
              Juego responsable
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
              El orden combina interés de los usuarios, especialización del operador, métodos de
              pago, producto y evaluación editorial. No representa una clasificación universal y
              puede actualizarse cuando cambian las condiciones.
            </p>
          </details>
        </div>

        <div className="mt-4 space-y-3 sm:space-y-4">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {cards.slice(0, 3).map((card) => (
              <li
                key={card.operatorId}
                className={cn("min-w-0", card.featured && "sm:col-span-2 xl:col-span-2")}
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
                  theme={card.theme}
                  featured={card.featured}
                  position={card.position}
                  logo={card.logo}
                />
              </li>
            ))}
          </ul>
        </div>
      </HomepageContainer>
    </section>
  );
}
