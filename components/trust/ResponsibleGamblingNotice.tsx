import { cn } from "@/lib/utils";

/**
 * Responsible gambling notice (FR-015). MUST state the 18+ requirement and MUST
 * NOT be hidden or de-emphasized to increase conversion.
 */
export function ResponsibleGamblingNotice({ className }: { className?: string }) {
  return (
    <aside
      role="note"
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-md border border-accent/40 bg-card/60 px-4 py-3 text-sm text-muted-foreground",
        className,
      )}
    >
      <span
        aria-label="Solo para mayores de 18 años"
        className="inline-flex shrink-0 items-center rounded bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground"
      >
        +18
      </span>
      <span>
        El juego puede causar adicción. Juega de forma responsable. Solo para mayores de 18 años.{" "}
        <a href="/juego-responsable" className="font-medium text-primary underline underline-offset-2">
          Juego responsable
        </a>
        .
      </span>
    </aside>
  );
}
