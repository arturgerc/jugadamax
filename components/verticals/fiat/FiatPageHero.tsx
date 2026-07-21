import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Pagos locales",
  "Casino y live",
  "Bonos",
  "Verificación y retiros",
] as const;

const QUICK_LINKS = [
  { label: "Top fiat", href: "#top-fiat" },
  { label: "Comparativa", href: "#comparativa-fiat" },
  { label: "Pagos locales", href: "#pagos-locales" },
  { label: "Operadores locales", href: "#operadores-locales" },
  { label: "Metodología", href: "#como-evaluamos-fiat" },
] as const;

const FOCUS_BADGES = ["OXXO", "SPEI", "Tarjetas", "Evaluación editorial", "18+"] as const;

/**
 * Compact fiat-page hero aligned with Crypto Page V2 / Homepage V3.
 */
export function FiatPageHero() {
  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/10 bg-[var(--jm-navy)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            México · Pagos fiat
          </span>
          <h1 className="text-[1.85rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.15rem] lg:text-[2.35rem]">
            Mejores Casinos Fiat en México
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Comparamos casinos con OXXO, SPEI, tarjetas y otros métodos tradicionales según pagos,
            juegos, promociones, verificación y condiciones publicadas por cada operador.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            {FOCUS_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
          <nav aria-label="Navegación rápida" className="flex flex-wrap gap-2 pt-0.5">
            {QUICK_LINKS.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                event="fiat_page_category_click"
                section="hero"
                destination={link.href}
                className="inline-flex min-h-11 items-center rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>
        </div>

        <aside
          aria-labelledby="fiat-hero-check-heading"
          className="max-h-[190px] overflow-hidden rounded-xl border border-white/10 bg-[#111417]/80 p-3 sm:max-h-none sm:p-4"
        >
          <h2
            id="fiat-hero-check-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            Qué comparamos
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {CHECK_ITEMS.map((title) => (
              <li
                key={title}
                className="rounded-md border border-white/8 bg-[#0A1931]/50 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
            Confirma siempre métodos, límites y términos en el operador.{" "}
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
        </aside>
      </div>
    </header>
  );
}
