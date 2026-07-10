import Link from "next/link";
import type { Casino } from "@/types/content";
import { getBonusesForCasino, getCasinoById } from "@/lib/content";
import {
  BETFURY_AFFILIATE_URL,
  BETSSON_MX_CASINO_WELCOME_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
} from "@/lib/affiliate/constants";
import { cn, focusRing } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { OperatorLogo } from "@/components/brand/OperatorLogo";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

type OfferTheme = "betfury" | "betsson" | "rainbet" | "fivehundred";

type FeaturedOfferConfig = {
  operatorId: string;
  badge: string;
  theme: OfferTheme;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  reviewHref: string;
  reviewLabel?: string;
  paymentChips?: string[];
  disclaimer: string;
};

const FEATURED_OFFERS: FeaturedOfferConfig[] = [
  {
    operatorId: "betfury",
    badge: "Crypto destacado",
    theme: "betfury",
    primaryCtaLabel: "Ver bonos BetFury",
    primaryCtaHref: BETFURY_AFFILIATE_URL,
    reviewHref: "/reviews/betfury",
    paymentChips: ["BFG", "Free Spins", "Cashback"],
    disclaimer: "Promoción publicada por el operador. Verifica disponibilidad y elegibilidad según términos oficiales.",
  },
  {
    operatorId: "betsson",
    badge: "Fiat México",
    theme: "betsson",
    primaryCtaLabel: "Ver bono Betsson",
    primaryCtaHref: BETSSON_MX_CASINO_WELCOME_URL,
    reviewHref: "/reviews/betsson",
    paymentChips: ["OXXO", "SPEI", "Visa"],
    disclaimer: "Promoción publicada por Betsson MX. Revisa requisitos y elegibilidad según términos oficiales.",
  },
  {
    operatorId: "rainbet",
    badge: "Crypto rewards",
    theme: "rainbet",
    primaryCtaLabel: "Ver promociones Rainbet",
    primaryCtaHref: RAINBET_REFERRAL_URL,
    reviewHref: "/reviews/rainbet",
    paymentChips: ["Rewards", "Free spins", "Crypto"],
    disclaimer: "Promociones publicadas por el operador. Verifica disponibilidad y elegibilidad según términos oficiales.",
  },
  {
    operatorId: "500-casino",
    badge: "Crypto candidato",
    theme: "fivehundred",
    primaryCtaLabel: "Visitar 500 Casino",
    primaryCtaHref: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    reviewHref: "/reviews/500-casino",
    paymentChips: ["Crypto", "Slots", "Sportsbook"],
    disclaimer: "Promociones visibles según términos oficiales. Verifica disponibilidad y elegibilidad antes de depositar.",
  },
];

const THEME_STYLES: Record<
  OfferTheme,
  {
    card: string;
    badge: string;
    offer: string;
    chip: string;
    cta: string;
    review: string;
  }
> = {
  betfury: {
    card: "border-fuchsia-500/35 bg-gradient-to-br from-[#1a0f2e]/90 via-card/95 to-[#0A1931]/90 shadow-[0_6px_28px_-10px_rgba(217,70,239,0.28)] ring-1 ring-fuchsia-400/12",
    badge: "border-fuchsia-400/35 bg-fuchsia-500/12 text-fuchsia-200",
    offer: "border-fuchsia-400/20 bg-fuchsia-500/6",
    chip: "border-fuchsia-400/25 bg-fuchsia-500/8 text-fuchsia-100/90",
    cta: "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-[0_2px_14px_-4px_rgba(217,70,239,0.45)] hover:from-fuchsia-500 hover:to-pink-500",
    review: "text-fuchsia-200/90 hover:text-fuchsia-100",
  },
  betsson: {
    card: "border-amber-500/30 bg-gradient-to-br from-[#0A1931] via-[#121a28] to-[#111417] shadow-[0_6px_28px_-10px_rgba(255,184,0,0.18)] ring-1 ring-amber-400/10",
    badge: "border-amber-400/35 bg-amber-500/10 text-amber-200",
    offer: "border-amber-400/20 bg-amber-500/6",
    chip: "border-amber-400/25 bg-amber-500/8 text-amber-100/90",
    cta: "bg-primary text-primary-foreground shadow-[0_2px_14px_-4px_rgba(255,184,0,0.35)] hover:bg-[var(--jm-gold-strong)]",
    review: "text-amber-200/90 hover:text-primary",
  },
  rainbet: {
    card: "border-emerald-500/30 bg-gradient-to-br from-[#030712] via-[#0A1628]/95 to-[#061018] shadow-[0_6px_28px_-10px_rgba(52,211,153,0.22)] ring-1 ring-cyan-400/10",
    badge: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    offer: "border-emerald-400/20 bg-emerald-500/6",
    chip: "border-cyan-400/25 bg-cyan-500/8 text-cyan-100/90",
    cta: "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-[0_2px_14px_-4px_rgba(52,211,153,0.35)] hover:from-emerald-500 hover:to-cyan-500",
    review: "text-emerald-200/90 hover:text-emerald-100",
  },
  fivehundred: {
    card: "border-pink-500/30 bg-gradient-to-br from-[#120818]/95 via-[#16121f]/95 to-[#0A1931]/90 shadow-[0_6px_28px_-10px_rgba(236,72,153,0.22)] ring-1 ring-pink-400/10",
    badge: "border-pink-400/35 bg-pink-500/10 text-pink-200",
    offer: "border-pink-400/20 bg-pink-500/6",
    chip: "border-pink-400/25 bg-pink-500/8 text-pink-100/90",
    cta: "bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white shadow-[0_2px_14px_-4px_rgba(236,72,153,0.35)] hover:from-pink-500 hover:to-fuchsia-600",
    review: "text-pink-200/90 hover:text-pink-100",
  },
};

function paymentChipsForCasino(casino: Casino, override?: string[]): string[] {
  if (override?.length) return override.slice(0, 3);
  return casino.payments?.slice(0, 3).map((p) => p.name) ?? [];
}

function CompactFeaturedOfferCard({
  casino,
  config,
}: {
  casino: Casino;
  config: FeaturedOfferConfig;
}) {
  const bonus = getBonusesForCasino(casino.id).find((b) => b.active);
  if (!bonus) return null;

  const styles = THEME_STYLES[config.theme];
  const chips = paymentChipsForCasino(casino, config.paymentChips);

  return (
    <li className="flex h-full min-w-0">
      <article
        className={cn(
          "flex h-full w-full min-w-0 flex-col rounded-xl border p-4 sm:p-5",
          styles.card,
        )}
      >
        <div className="flex items-start gap-3">
          <OperatorLogo
            name={casino.name}
            logo={casino.logo}
            operatorId={casino.id}
            className="shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-foreground">{casino.name}</h3>
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
                  styles.badge,
                )}
              >
                {config.badge}
              </span>
            </div>
          </div>
        </div>

        <div className={cn("mt-3 rounded-lg border px-3 py-2.5", styles.offer)}>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
            Promoción
          </p>
          <p className="mt-1 text-sm font-medium leading-snug text-foreground">{bonus.title}</p>
        </div>

        {chips.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Métodos de pago o recompensas">
            {chips.map((label) => (
              <li
                key={label}
                className={cn(
                  "inline-flex items-center rounded-md border px-2 py-0.5 text-[0.65rem] font-medium",
                  styles.chip,
                )}
              >
                {label}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-3 text-[0.65rem] leading-snug text-muted-foreground">{config.disclaimer}</p>

        <div className="mt-auto space-y-2 pt-4">
          <a
            href={config.primaryCtaHref}
            target="_blank"
            rel={AFFILIATE_REL}
            className={cn(
              "inline-flex min-h-11 w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors",
              styles.cta,
              focusRing,
            )}
          >
            {config.primaryCtaLabel}
          </a>
          <Link
            href={config.reviewHref}
            className={cn(
              "inline-flex min-h-11 w-full items-center justify-center text-sm font-medium underline underline-offset-2 transition-colors",
              styles.review,
              focusRing,
            )}
          >
            {config.reviewLabel ?? "Leer reseña"}
          </Link>
          <p className="text-center text-[0.6rem] text-muted-foreground">18+ · Juega con responsabilidad</p>
        </div>
      </article>
    </li>
  );
}

/**
 * Compact featured-offers grid (P14A).
 *
 * High-conversion comparison strip with affiliate CTAs and internal review links.
 * Uses real bonus records; no fabricated amounts, urgency or countdowns.
 */
export function BonusHighlights({ className }: { className?: string }) {
  const cards = FEATURED_OFFERS.map((config) => {
    const casino = getCasinoById(config.operatorId);
    if (!casino) return null;
    return <CompactFeaturedOfferCard key={config.operatorId} casino={casino} config={config} />;
  }).filter(Boolean);

  if (cards.length === 0) return null;

  return (
    <section aria-labelledby="ofertas-destacadas-heading" className={cn("py-10", className)}>
      <Container>
        <h2
          id="ofertas-destacadas-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Ofertas destacadas para comparar
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Promociones publicadas por cada operador. Revisa requisitos, disponibilidad y términos antes
          de depositar.
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">{cards}</ul>
      </Container>
    </section>
  );
}
