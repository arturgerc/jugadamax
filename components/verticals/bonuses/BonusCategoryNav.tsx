import { TrackedLink } from "@/components/analytics/TrackedLink";
import { NAV_LINK_ACCENTS } from "@/components/verticals/bonuses/bonus-visual";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Destacadas", href: "#promociones-destacadas" },
  { label: "Comparativa", href: "#comparativa-bonos" },
  { label: "Casino MX", href: "#bonos-casino-mx" },
  { label: "Crypto", href: "#bonos-crypto-rewards" },
  { label: "Apuestas", href: "#bonos-sports-mixed" },
  { label: "Guías y reseñas", href: "#hub-bonos" },
  { label: "Términos", href: "#terminos-bonos" },
] as const;

/**
 * Quick in-page category navigation for /bonos.
 */
export function BonusCategoryNav() {
  return (
    <nav
      aria-label="Navegación de categorías de bonos"
      className="mb-7 rounded-xl border border-white/10 bg-[#111417]/55 p-2.5 sm:mb-10 sm:p-3"
    >
      <p className="mb-2 px-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Ir a la sección
      </p>
      <div className="flex flex-wrap gap-2">
        {NAV_LINKS.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            event="bonus_page_category_click"
            section="category-nav"
            destination={link.href}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-150 sm:text-sm",
              NAV_LINK_ACCENTS[link.href],
            )}
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </nav>
  );
}
