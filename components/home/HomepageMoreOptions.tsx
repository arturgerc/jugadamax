import { HomepageContainer } from "@/components/home/HomepageContainer";
import { HomepageOperatorRow } from "@/components/home/HomepageOperatorRow";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getCasinoById, getReviewForCasino } from "@/lib/content";
import { cn } from "@/lib/utils";

type PanelOperator = {
  operatorId: string;
  label: string;
};

type PanelConfig = {
  id: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  theme: string;
  operators: readonly PanelOperator[];
};

const PANELS: readonly PanelConfig[] = [
  {
    id: "crypto",
    heading: "Crypto internacionales",
    description: "Más casinos con BTC, ETH, USDT, slots y productos crypto.",
    ctaLabel: "Ver ranking crypto",
    ctaHref: "/casinos-crypto",
    theme:
      "border-violet-500/20 bg-gradient-to-b from-[#12102a]/70 via-[#111417]/80 to-[#0A1931]/90",
    operators: [
      { operatorId: "roobet", label: "Casino crypto + sportsbook" },
      { operatorId: "rainbet", label: "Crypto rewards" },
      { operatorId: "gamdom", label: "Casino crypto y Originals" },
    ],
  },
  {
    id: "fiat",
    heading: "Casino fiat y operadores mixtos",
    description: "Casino, pagos tradicionales y operadores con varios productos.",
    ctaLabel: "Ver casinos fiat",
    ctaHref: "/casinos-fiat",
    theme:
      "border-amber-500/20 bg-gradient-to-b from-[#161208]/60 via-[#111417]/80 to-[#0A1931]/90",
    operators: [
      { operatorId: "1xbet", label: "Casino + sportsbook" },
      { operatorId: "mostbet", label: "Casino, apuestas y app" },
      { operatorId: "awintura", label: "Casino mixto internacional" },
    ],
  },
  {
    id: "sports",
    heading: "Apuestas deportivas",
    description: "Sportsbooks y operadores mixtos con mercados pre-match y en vivo.",
    ctaLabel: "Ver casas de apuestas",
    ctaHref: "/apuestas",
    theme:
      "border-emerald-500/15 bg-gradient-to-b from-[#0d1512]/60 via-[#111417]/70 to-[#0A1931]/90",
    operators: [
      { operatorId: "sportsbetio", label: "Sportsbook crypto + casino" },
      { operatorId: "mostbet", label: "Casino, apuestas y app" },
      { operatorId: "1xbet", label: "Casino + sportsbook" },
    ],
  },
] as const;

function getEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

function getReviewHref(casinoId: string): string | undefined {
  const review = getReviewForCasino(casinoId);
  return review?.slug ? `/reviews/${review.slug}` : undefined;
}

/**
 * Compact secondary discovery panels — internal review/category links only.
 */
export function HomepageMoreOptions() {
  return (
    <section aria-labelledby="mas-opciones-heading" className="py-6 sm:py-8">
      <HomepageContainer>
        <div className="max-w-2xl space-y-1">
          <h2
            id="mas-opciones-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            Más opciones por categoría
          </h2>
          <p className="text-sm text-muted-foreground">
            Explora otros operadores según el tipo de casino, pagos o producto que buscas.
          </p>
          <p className="text-xs text-muted-foreground/90">
            Estas listas amplían la selección principal. Las puntuaciones son opiniones editoriales
            de JugadaMax.
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 md:items-stretch">
          {PANELS.map((panel) => (
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
                  {panel.operators.map((entry, index) => {
                    const casino = getCasinoById(entry.operatorId);
                    const reviewHref = getReviewHref(entry.operatorId);
                    if (!casino || !reviewHref) return null;

                    return (
                      <li key={`${panel.id}-${entry.operatorId}`}>
                        <HomepageOperatorRow
                          operatorId={entry.operatorId}
                          name={casino.name}
                          label={entry.label}
                          reviewHref={reviewHref}
                          rating={getEditorialRating(entry.operatorId)}
                          logo={casino.logo}
                          category={panel.id}
                          position={index + 1}
                        />
                      </li>
                    );
                  })}
                </ul>

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
          ))}
        </ul>
      </HomepageContainer>
    </section>
  );
}
