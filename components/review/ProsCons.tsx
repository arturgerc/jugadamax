import { cn } from "@/lib/utils";

/**
 * Balanced pros/cons block (FR-005/FR-016).
 *
 * Both pros AND cons are required for a balanced, honest review. If either list
 * is empty the component renders nothing rather than showing a one-sided view.
 */
export function ProsCons({
  pros,
  cons,
  className,
}: {
  pros: string[];
  cons: string[];
  className?: string;
}) {
  if (pros.length === 0 || cons.length === 0) return null;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      <section
        aria-label="Puntos a favor"
        className="rounded-lg border border-accent/40 bg-card p-4"
      >
        <h3 className="mb-2 text-base font-semibold text-foreground">A favor</h3>
        <ul className="space-y-1.5">
          {pros.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-accent">
                +
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Puntos en contra" className="rounded-lg border border-border/60 bg-card p-4">
        <h3 className="mb-2 text-base font-semibold text-foreground">En contra</h3>
        <ul className="space-y-1.5">
          {cons.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-muted-foreground">
                −
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
