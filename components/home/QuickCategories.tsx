import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

/**
 * Quick category navigation (FR-001). Casino-first ordering: crypto casinos,
 * no-KYC, fiat casinos, bonuses and guides come first; the sportsbook section is
 * marked as a secondary/additional section. Mobile-first grid that reflows
 * without horizontal overflow.
 */
const categories = [
  {
    label: "Casinos Crypto",
    href: "/casinos-crypto",
    description: "Bitcoin, USDT y guías de casino crypto para México y LATAM.",
    icon: "crypto" as const,
  },
  {
    label: "Casinos sin KYC",
    href: "/casinos-sin-kyc",
    description: "Registro con email, contraseña y pagos crypto",
    icon: "shield" as const,
  },
  {
    label: "Casinos Fiat",
    href: "/casinos-fiat",
    description: "Casino online con operadores fiat y métodos de pago locales en México.",
    icon: "fiat" as const,
  },
  {
    label: "Bonos de casino",
    href: "/bonos",
    description: "Bonos de casino, requisitos de apuesta y términos, con juego responsable.",
    icon: "bonus" as const,
  },
  {
    label: "Guía de casinos con USDT",
    href: "/guias/casinos-con-usdt-mexico",
    description: "Redes, riesgos de stablecoins y qué revisar antes de depositar en México y LATAM.",
    icon: "usdt" as const,
  },
] as const;

const secondaryCategory = {
  label: "Apuestas deportivas",
  href: "/apuestas",
  description:
    "Sección adicional para comparar operadores con sportsbook. JugadaMax sigue siendo casino-first.",
} as const;

function CategoryIcon({ kind }: { kind: (typeof categories)[number]["icon"] }) {
  const className = "size-5 shrink-0 text-primary";

  switch (kind) {
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
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <path
            d="M12 3.5 5.5 6.2v5.1c0 4.2 2.8 7.9 6.5 9.2 3.7-1.3 6.5-5 6.5-9.2V6.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.2 11.2 14l3.5-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "fiat":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "bonus":
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
    case "usdt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8.5 9.5h7v1.8a3.2 3.2 0 0 1-3.5 3.2 3.2 3.2 0 0 1-3.5-3.2V9.5z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M12 14.5v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export function QuickCategories({ className }: { className?: string }) {
  return (
    <section aria-label="Categorías" className={cn("py-10", className)}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={cn(
                "rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60",
                focusRing,
              )}
            >
              <div className="mb-2 inline-flex size-9 items-center justify-center rounded-md border border-primary/20 bg-primary/8">
                <CategoryIcon kind={cat.icon} />
              </div>
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
