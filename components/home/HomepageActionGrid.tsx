import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

type IntentTheme = "crypto" | "local" | "bonuses" | "reviews" | "usdt" | "sportsbook";

type IntentCard = {
  title: string;
  text: string;
  href: string;
  badge: string;
  cta: string;
  theme: IntentTheme;
};

const intentCards: IntentCard[] = [
  {
    title: "Quiero jugar con crypto",
    text: "Compara casinos con BTC, USDT, Originals, rewards y sportsbook.",
    href: "/casinos-crypto",
    badge: "Crypto",
    cta: "Ver ranking crypto",
    theme: "crypto",
  },
  {
    title: "Quiero pagar con OXXO o SPEI",
    text: "Opciones fiat y locales para usuarios de México.",
    href: "/casinos-fiat",
    badge: "México",
    cta: "Ver casinos fiat",
    theme: "local",
  },
  {
    title: "Quiero comparar bonos",
    text: "Revisa giros gratis, requisitos de apuesta, límites y elegibilidad.",
    href: "/bonos",
    badge: "Bonos",
    cta: "Ver promociones",
    theme: "bonuses",
  },
  {
    title: "Quiero revisar un operador",
    text: "Análisis, pros, contras, pagos y condiciones antes de registrarte.",
    href: "/reviews",
    badge: "Reseñas",
    cta: "Leer reseñas",
    theme: "reviews",
  },
  {
    title: "Quiero usar USDT",
    text: "Redes, wallets, stablecoins, límites y riesgos que debes comprobar.",
    href: "/guias/casinos-con-usdt-mexico",
    badge: "USDT",
    cta: "Leer guía USDT",
    theme: "usdt",
  },
  {
    title: "Quiero casino y sportsbook",
    text: "Compara operadores que combinan casino online y apuestas deportivas.",
    href: "/apuestas",
    badge: "Sportsbook",
    cta: "Ver apuestas",
    theme: "sportsbook",
  },
];

const THEME_STYLES: Record<
  IntentTheme,
  {
    card: string;
    badge: string;
    iconWrap: string;
    cta: string;
  }
> = {
  crypto: {
    card: "border-violet-500/30 bg-gradient-to-br from-[#1a1038]/90 via-[#16233f]/95 to-[#0A1931]/90 ring-1 ring-violet-400/10 hover:border-violet-400/45 hover:shadow-[0_10px_32px_-12px_rgba(139,92,246,0.28)]",
    badge: "border-violet-400/35 bg-violet-500/12 text-violet-200",
    iconWrap: "border-violet-400/25 bg-violet-500/10 text-violet-200",
    cta: "text-violet-200 group-hover:text-violet-100",
  },
  local: {
    card: "border-emerald-500/30 bg-gradient-to-br from-[#061a14]/90 via-[#0A1931]/95 to-[#111417]/90 ring-1 ring-emerald-400/10 hover:border-emerald-400/45 hover:shadow-[0_10px_32px_-12px_rgba(52,211,153,0.22)]",
    badge: "border-emerald-400/35 bg-emerald-500/12 text-emerald-200",
    iconWrap: "border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
    cta: "text-emerald-200 group-hover:text-emerald-100",
  },
  bonuses: {
    card: "border-amber-500/30 bg-gradient-to-br from-[#1a1408]/90 via-[#16233f]/95 to-[#0A1931]/90 ring-1 ring-amber-400/10 hover:border-amber-400/45 hover:shadow-[0_10px_32px_-12px_rgba(255,184,0,0.2)]",
    badge: "border-amber-400/35 bg-amber-500/12 text-amber-200",
    iconWrap: "border-amber-400/25 bg-amber-500/10 text-amber-200",
    cta: "text-amber-200 group-hover:text-primary",
  },
  reviews: {
    card: "border-cyan-500/25 bg-gradient-to-br from-[#0A1931] via-[#0d1f35]/95 to-[#111417]/90 ring-1 ring-cyan-400/10 hover:border-cyan-400/40 hover:shadow-[0_10px_32px_-12px_rgba(34,211,238,0.18)]",
    badge: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    iconWrap: "border-cyan-400/25 bg-cyan-500/10 text-cyan-200",
    cta: "text-cyan-200 group-hover:text-cyan-100",
  },
  usdt: {
    card: "border-teal-500/30 bg-gradient-to-br from-[#061a1a]/90 via-[#0A1931]/95 to-[#111417]/90 ring-1 ring-teal-400/10 hover:border-teal-400/45 hover:shadow-[0_10px_32px_-12px_rgba(45,212,191,0.2)]",
    badge: "border-teal-400/35 bg-teal-500/12 text-teal-200",
    iconWrap: "border-teal-400/25 bg-teal-500/10 text-teal-200",
    cta: "text-teal-200 group-hover:text-teal-100",
  },
  sportsbook: {
    card: "border-rose-500/25 bg-gradient-to-br from-[#1a0a12]/90 via-[#0A1931]/95 to-[#111417]/90 ring-1 ring-blue-400/10 hover:border-rose-400/40 hover:shadow-[0_10px_32px_-12px_rgba(244,63,94,0.2)]",
    badge: "border-rose-400/30 bg-rose-500/10 text-rose-200",
    iconWrap: "border-rose-400/25 bg-rose-500/10 text-rose-200",
    cta: "text-rose-200 group-hover:text-rose-100",
  },
};

function IntentIcon({ theme }: { theme: IntentTheme }) {
  const className = "size-5 shrink-0";

  switch (theme) {
    case "crypto":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 12h8M12 8v8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "local":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "bonuses":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 4l1.8 3.6L18 8.4l-3 2.9.7 4.1L12 13.8 8.3 15.4 9 11.3 6 8.4l4.2-.8L12 4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "reviews":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M6 5h12v12H9l-3 3V5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9 9h6M9 12.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "usdt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 9.5h7v1.8a3.2 3.2 0 0 1-3.5 3.2 3.2 3.2 0 0 1-3.5-3.2V9.5z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 14.5v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "sportsbook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6.5 12c2-2.5 9-2.5 11 0M6.5 12c2 2.5 9 2.5 11 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Intent-based internal navigation hub (P14B).
 *
 * Server-rendered route cards with distinct accents and visible CTAs — no
 * external links, carousels or heavy assets.
 */
export function HomepageActionGrid() {
  return (
    <section aria-labelledby="elige-segun-heading" className="py-10">
      <Container>
        <div className="max-w-2xl space-y-1">
          <h2
            id="elige-segun-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Elige según lo que buscas
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Encuentra casinos, bonos y guías según tu forma de jugar y pagar.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {intentCards.map((card) => {
            const styles = THEME_STYLES[card.theme];

            return (
              <li key={card.href} className="min-w-0">
                <Link
                  href={card.href}
                  className={cn(
                    "group flex h-full min-h-[11rem] min-w-0 flex-col rounded-xl border p-5 transition-[border-color,box-shadow,transform] duration-200 md:hover:-translate-y-0.5",
                    styles.card,
                    focusRing,
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                        styles.badge,
                      )}
                    >
                      {card.badge}
                    </span>
                    <span
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-lg border",
                        styles.iconWrap,
                      )}
                    >
                      <IntentIcon theme={card.theme} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>

                  <span
                    className={cn(
                      "mt-4 inline-flex min-h-11 w-full items-center justify-between gap-2 text-sm font-semibold",
                      styles.cta,
                    )}
                  >
                    {card.cta}
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
