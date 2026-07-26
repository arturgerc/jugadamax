import Link from "next/link";

const LINKS = [
  { href: "/casinos-fiat", label: "Casinos fiat y multidivisa" },
  { href: "/apuestas", label: "Cobertura de apuestas deportivas" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
  { href: "/juego-responsable", label: "Juego responsable" },
] as const;

/**
 * Shared Spanish fiat-review “Sigue leyendo” grid.
 * Internal Spanish routes only — do not use on English pages.
 */
export function SpanishFiatContinueReading() {
  return (
    <section aria-labelledby="spanish-fiat-continue-reading-heading">
      <h2
        id="spanish-fiat-continue-reading-heading"
        className="text-xl font-semibold text-foreground"
      >
        Sigue leyendo
      </h2>
      <nav aria-label="Guías y páginas relacionadas" className="mt-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
