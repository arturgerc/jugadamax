import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

/**
 * Quick category navigation to the three verticals (FR-001). Mobile-first grid
 * that reflows from 1 to 3 columns without horizontal overflow.
 */
const categories = [
  {
    label: "Casinos Crypto",
    href: "/casinos-crypto",
    description: "Los mejores casinos con criptomonedas para México.",
  },
  {
    label: "Casinos Fiat",
    href: "/casinos-fiat",
    description: "Casinos con métodos de pago locales en México.",
  },
  {
    label: "Apuestas Deportivas",
    href: "/apuestas",
    description: "Casas de apuestas deportivas disponibles en México.",
  },
] as const;

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
              <h2 className="text-lg font-semibold text-foreground">{cat.label}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
