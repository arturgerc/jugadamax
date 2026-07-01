import type { PaymentMethod } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Renders payment-method badges. Shows up to `max` methods and a "+N" overflow
 * indicator. Renders nothing when there are no payments (graceful — spec edge
 * case).
 */
export function PaymentBadges({
  payments,
  max,
  className,
}: {
  payments?: PaymentMethod[];
  max?: number;
  className?: string;
}) {
  if (!payments || payments.length === 0) return null;

  const shown = typeof max === "number" ? payments.slice(0, max) : payments;
  const remaining = payments.length - shown.length;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((p) => (
        <li
          key={`${p.kind}-${p.name}`}
          className="inline-flex items-center rounded border border-border/60 bg-card/60 px-2 py-0.5 text-xs text-muted-foreground"
        >
          {p.name}
        </li>
      ))}
      {remaining > 0 && (
        <li className="inline-flex items-center px-1 py-0.5 text-xs text-muted-foreground">
          +{remaining}
        </li>
      )}
    </ul>
  );
}
