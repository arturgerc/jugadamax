import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Oferta y producto",
  "Depósito y wagering",
  "Vigencia y elegibilidad",
  "Límites y retiros",
] as const;

const FOCUS_BADGES = [
  "México / LATAM",
  "Casino y crypto",
  "Términos y límites",
  "Evaluación editorial",
] as const;

/**
 * Compact two-column hero for /bonos V2 — premium editorial treatment.
 */
export function BonusPageHero() {
  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#10182a] via-[#0A1931] to-[#0c1424] shadow-[0_0_40px_-24px_rgba(255,184,0,0.35)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,184,0,0.12),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent shadow-[0_0_16px_-8px_rgba(0,168,107,0.45)]">
            México · LATAM · Bonos
          </span>
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.1rem] lg:text-[2.3rem]">
            Bonos de casino en México: promociones y condiciones clave
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Comparamos promociones de casino, crypto y apuestas para México y LATAM. Revisa depósito
            mínimo, requisito de apuesta, juegos elegibles, vigencia, límites y verificación antes
            de registrarte.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            {FOCUS_BADGES.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center rounded-full border border-white/12 bg-[#16233f]/70 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-0.5">
            <TrackedLink
              href="#promociones-destacadas"
              event="bonus_page_category_click"
              section="hero"
              destination="#promociones-destacadas"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-10px_rgba(255,184,0,0.55)] transition-colors duration-150 hover:bg-[var(--jm-gold-strong)]"
            >
              Ver promociones destacadas
            </TrackedLink>
            <Link
              href="/como-evaluamos"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/50 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary/50",
                focusRing,
              )}
            >
              Cómo evaluamos
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="bonus-hero-check-heading"
          className="relative overflow-hidden rounded-xl border border-white/12 bg-gradient-to-b from-[#141b28]/95 to-[#111417]/90 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-4"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)]"
          />
          <div className="relative">
            <h2
              id="bonus-hero-check-heading"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Qué revisamos
            </h2>
            <ul className="mt-2 grid grid-cols-2 gap-1.5">
              {CHECK_ITEMS.map((title) => (
                <li
                  key={title}
                  className="rounded-md border border-cyan-500/15 bg-[#0A1931]/65 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
                >
                  {title}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
              Confirma siempre la promoción vigente y los términos en el operador.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
