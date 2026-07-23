import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

const CHECK_ITEMS = [
  "Noticias con fuentes",
  "Análisis y opinión",
  "Cambios de bonos",
  "Regulación México",
] as const;

/**
 * Compact two-column News Hub hero — editorial, no affiliate CTA.
 */
export function NewsHubHero() {
  return (
    <header className="relative mb-7 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-[#10182a] via-[#0A1931] to-[#0c1424] shadow-[0_0_40px_-24px_rgba(56,189,248,0.25)] sm:mb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.12),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,184,0,0.08),transparent_55%)]"
      />
      <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:p-8">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
            México · Noticias · Análisis · Opinión
          </span>
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.1rem] lg:text-[2.3rem]">
            Noticias de casinos, crypto y apuestas en México
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Actualidad editorial, análisis y comentario de autor sobre regulación,
            operadores, bonos y pagos. Separamos hechos atribuibles de opinión y
            citamos fuentes cuando aplican.
          </p>
          <div className="flex flex-wrap gap-2 pt-0.5">
            <Link
              href="#destacadas"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
                focusRing,
              )}
            >
              Ver destacadas
            </Link>
            <Link
              href="#archivo"
              className={cn(
                "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-sky-400/50",
                focusRing,
              )}
            >
              Archivo de noticias
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="news-hero-cover-heading"
          className="relative overflow-hidden rounded-xl border border-white/12 bg-gradient-to-b from-[#141b28]/95 to-[#111417]/90 p-3 sm:p-4"
        >
          <h2
            id="news-hero-cover-heading"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            Qué encontrarás aquí
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-1.5">
            {CHECK_ITEMS.map((title) => (
              <li
                key={title}
                className="rounded-md border border-sky-500/15 bg-[#0A1931]/65 px-2 py-1.5 text-[0.7rem] font-semibold leading-tight text-foreground sm:text-xs"
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[0.65rem] leading-snug text-muted-foreground">
            No fabricamos eventos, estadísticas ni urgencia. +18. Juega responsable.
          </p>
        </aside>
      </div>
    </header>
  );
}
