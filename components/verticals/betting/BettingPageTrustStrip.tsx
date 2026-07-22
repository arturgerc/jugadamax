import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + responsible gambling strip for /apuestas.
 */
export function BettingPageTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-3 flex items-start gap-2 rounded-lg border border-white/10 bg-[#111417]/80 px-2.5 py-2 sm:mb-6 sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/35 bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] font-semibold text-emerald-300 sm:px-2 sm:text-[0.7rem]">
        +18
      </span>
      <p className="min-w-0 flex-1 text-[0.75rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        <span className="sm:hidden">
          Enlaces afiliados posibles. Opiniones editoriales; verifica términos.{" "}
        </span>
        <span className="hidden sm:inline">
          +18 · Algunos enlaces son afiliados. JugadaMax puede recibir una comisión sin costo
          adicional para ti. Las puntuaciones son opiniones editoriales y no garantizan cuotas,
          pagos, licencias ni resultados. La disponibilidad depende de tu jurisdicción.{" "}
        </span>
        <Link
          href="/divulgacion-afiliados"
          className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
        >
          Divulgación
        </Link>
        {" · "}
        <Link
          href="/juego-responsable"
          className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
        >
          Juego responsable
        </Link>
        .
      </p>
    </div>
  );
}
