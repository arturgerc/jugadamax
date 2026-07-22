import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { BETTING_QUICK_LINKS } from "@/components/verticals/betting/betting-page-config";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Mercados y cuotas",
  "Bonos deportivos",
  "Pagos y retiros",
  "KYC y términos",
] as const;

const FOCUS_BADGES = [
  "Fútbol · Liga MX",
  "Sportsbook",
  "Evaluación editorial",
  "18+",
] as const;

/**
 * Compact two-column betting hero for /apuestas.
 * Mobile: tighter spacing; hero anchor pills hidden (quick-nav covers them).
 */
export function BettingPageHero() {
  return (
    <header className="relative mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[var(--jm-navy)] sm:mb-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.06),transparent_50%)]"
      />
      <div className="relative grid gap-3 p-4 sm:gap-4 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-2 sm:space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-accent sm:px-3 sm:py-1 sm:text-xs">
            México · Apuestas deportivas
          </span>
          <h1 className="text-[1.65rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.15rem] lg:text-[2.35rem]">
            Casas de apuestas en México
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Compara casas de apuestas según mercados, pagos, promociones deportivas, KYC, retiros y
            evaluación editorial. El foco principal de JugadaMax sigue siendo casino; esta sección
            cubre sportsbook como vertical adicional.
          </p>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Enfoque de la página">
            {FOCUS_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground sm:px-2.5 sm:py-1 sm:text-xs"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-labelledby="betting-hero-check-heading"
          className="rounded-xl border border-white/10 bg-[#111417]/80 p-2.5 sm:p-4"
        >
          <h2
            id="betting-hero-check-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            Qué revisamos
          </h2>
          <ul className="mt-1.5 grid grid-cols-2 gap-1 sm:mt-2 sm:gap-1.5">
            {CHECK_ITEMS.map((title) => (
              <li
                key={title}
                className="rounded-md border border-white/8 bg-[#0A1931]/50 px-2 py-1 text-[0.65rem] font-semibold leading-tight text-foreground sm:py-1.5 sm:text-xs"
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="mt-1.5 text-[0.65rem] leading-snug text-muted-foreground sm:mt-2">
            Cuotas, mercados y promociones cambian. Confirma siempre en el operador.{" "}
            <Link
              href="/como-evaluamos"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Metodología
            </Link>
          </p>
          <nav
            aria-label="Accesos rápidos del hero"
            className="mt-3 hidden flex-wrap gap-1.5 md:flex"
          >
            {BETTING_QUICK_LINKS.slice(0, 3).map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                event="betting_page_nav_click"
                section="hero"
                destination={link.href}
                className="inline-flex min-h-11 items-center rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
