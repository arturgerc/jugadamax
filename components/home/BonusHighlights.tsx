import type { Bonus, Casino } from "@/types/content";
import { getBonusesForCasino } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";

/**
 * Bonus / payment highlights (FR-013, homepage section 6).
 *
 * Surfaces the active headline bonus and key payment methods per operator from
 * real bonus records. Honest by design: no fabricated amounts, no countdowns,
 * no urgency copy (Constitution Principle V). Renders nothing when there is no
 * active bonus to show.
 */
export function BonusHighlights({
  casinos,
  className,
}: {
  casinos: Casino[];
  className?: string;
}) {
  const items = casinos
    .map((casino) => ({
      casino,
      bonus: getBonusesForCasino(casino.id).find((b) => b.active),
    }))
    .filter((item): item is { casino: Casino; bonus: Bonus } => item.bonus !== undefined);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="bonos-heading" className={cn("py-10", className)}>
      <Container>
        <h2
          id="bonos-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Bonos y métodos de pago
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Promociones informadas por cada operador. Verifica siempre los términos y la oferta vigente
          en el sitio oficial.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ casino, bonus }) => (
            <li
              key={casino.id}
              className="rounded-lg border border-border/60 bg-card p-4"
            >
              <h3 className="text-base font-semibold text-foreground">{casino.name}</h3>
              <p className="mt-1 text-sm text-foreground">{bonus.title}</p>
              {bonus.terms && (
                <p className="mt-1 text-xs text-muted-foreground">{bonus.terms}</p>
              )}
              <PaymentBadges payments={casino.payments} max={4} className="mt-3" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
