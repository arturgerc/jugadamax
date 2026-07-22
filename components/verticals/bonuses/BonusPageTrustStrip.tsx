import Link from "next/link";
import { BONUS_PAGE_UPDATED_AT } from "@/components/verticals/bonuses/bonus-page-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + responsible gambling + freshness strip for /bonos.
 */
export function BonusPageTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex flex-col gap-2.5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/95 via-[#111417]/90 to-[#0f1620]/90 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(52,211,153,0.08)] sm:mb-10 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/12 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
          <span
            aria-hidden="true"
            className="inline-block size-1.5 rounded-full bg-emerald-400"
          />
          +18
        </span>
        <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
          Página actualizada ·{" "}
          <time dateTime={BONUS_PAGE_UPDATED_AT} className="ml-1 text-foreground/90">
            {BONUS_PAGE_UPDATED_AT}
          </time>
        </span>
      </div>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        Algunos enlaces son afiliados. JugadaMax puede recibir una comisión sin costo adicional
        para ti. Las promociones y términos pueden cambiar sin aviso. La fecha indica la
        actualización de esta página, no una verificación individual de cada oferta.{" "}
        <Link
          href="/divulgacion-afiliados"
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Divulgación
        </Link>
        {" · "}
        <Link
          href="/juego-responsable"
          className={cn(
            "font-medium text-emerald-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Juego responsable
        </Link>
        {" · "}
        <Link
          href="/como-evaluamos"
          className={cn(
            "font-medium text-foreground underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Metodología
        </Link>
        .
      </p>
    </div>
  );
}
