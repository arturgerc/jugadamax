import { TrackedLink } from "@/components/analytics/TrackedLink";

const RELATED = [
  { href: "/casinos-fiat", label: "Casinos fiat" },
  { href: "/casinos-crypto", label: "Casinos crypto" },
  { href: "/bonos", label: "Bonos" },
  { href: "/guias", label: "Guías" },
  { href: "/reviews", label: "Reseñas" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
] as const;

/**
 * Related commercial and editorial routes for /apuestas.
 */
export function BettingRelatedRoutes() {
  return (
    <section
      aria-labelledby="apuestas-relacionadas-heading"
      className="mb-8 mt-8 sm:mb-10 sm:mt-10 lg:mb-12 lg:mt-12"
    >
      <h2
        id="apuestas-relacionadas-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        También puedes revisar
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Combina sportsbook con casino, bonos, guías y reseñas antes de decidir. El foco principal de
        JugadaMax sigue siendo casino online.
      </p>
      <nav aria-label="Rutas relacionadas" className="mt-4 flex flex-wrap gap-2">
        {RELATED.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            event="betting_page_category_click"
            section="related-links"
            destination={link.href}
            className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            {link.label}
          </TrackedLink>
        ))}
      </nav>
    </section>
  );
}
