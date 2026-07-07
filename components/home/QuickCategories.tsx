import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

/**
 * Quick category navigation (FR-001). Casino-first ordering: crypto casinos, fiat
 * casinos, bonuses and guides come first; the sportsbook section is marked as a
 * secondary/additional section. Mobile-first grid that reflows from 1 to 3
 * columns without horizontal overflow.
 */
const categories = [
  {
    label: "Casinos Crypto",
    href: "/casinos-crypto",
    description: "Bitcoin, USDT y guías de casino crypto para México y LATAM.",
  },
  {
    label: "Casinos Fiat",
    href: "/casinos-fiat",
    description: "Casino online con operadores fiat y métodos de pago locales en México.",
  },
  {
    label: "Bonos de casino",
    href: "/bonos",
    description: "Bonos de casino, requisitos de apuesta y términos, con juego responsable.",
  },
  {
    label: "Guía de casinos con USDT",
    href: "/guias/casinos-con-usdt-mexico",
    description: "Redes, riesgos de stablecoins y qué revisar antes de depositar en México y LATAM.",
  },
] as const;

const secondaryCategory = {
  label: "Apuestas deportivas",
  href: "/apuestas",
  description:
    "Sección adicional para comparar operadores con sportsbook. JugadaMax sigue siendo casino-first.",
} as const;

export function QuickCategories({ className }: { className?: string }) {
  return (
    <section aria-label="Categorías" className={cn("py-10", className)}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={cn(
                "rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              <h2 className="text-lg font-semibold text-foreground">{cat.label}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
            </Link>
          ))}
        </div>

        <Link
          href={secondaryCategory.href}
          className={cn(
            "mt-4 flex flex-col gap-1 rounded-lg border border-dashed border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
            focusRing,
          )}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-semibold text-foreground">{secondaryCategory.label}</h2>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                Sección adicional
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{secondaryCategory.description}</p>
          </div>
          <span className="text-sm font-medium text-primary">Ver apuestas →</span>
        </Link>
      </Container>
    </section>
  );
}
