import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + responsible gambling strip for /casinos-fiat.
 */
export function FiatPageTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex items-start gap-2.5 rounded-lg border border-white/10 bg-[#111417]/80 px-3 py-2.5 sm:mb-10 sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
        <span aria-hidden="true">🛡️</span>
        +18
      </span>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        +18 · Algunos enlaces son afiliados. JugadaMax puede recibir una comisión sin costo
        adicional para ti. Las puntuaciones son opiniones editoriales y no garantizan pagos,
        licencias ni resultados. Verifica métodos, disponibilidad y términos.{" "}
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
