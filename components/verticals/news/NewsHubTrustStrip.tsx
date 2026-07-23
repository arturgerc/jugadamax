import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function NewsHubTrustStrip({ className }: { className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "mb-7 flex flex-col gap-2.5 rounded-xl border border-sky-500/20 bg-gradient-to-r from-[#101820]/95 via-[#111417]/90 to-[#0f1620]/90 px-3 py-2.5 sm:mb-10 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3",
        className,
      )}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/12 px-2 py-0.5 text-[0.7rem] font-semibold text-sky-200">
          <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-sky-400" />
          +18
        </span>
        <span className="inline-flex items-center rounded-full border border-white/12 bg-[#0A1931]/70 px-2 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
          Hechos ≠ opinión
        </span>
      </div>
      <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
        Noticias con autores identificados, fechas reales y fuentes cuando aplican. Este hub no
        incluye CTAs de registro.{" "}
        <Link
          href="#proceso-editorial"
          className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
        >
          Proceso editorial
        </Link>
        {" · "}
        <Link
          href="/divulgacion-afiliados"
          className={cn(
            "font-medium text-sky-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Divulgación
        </Link>
        {" · "}
        <Link
          href="/juego-responsable"
          className={cn(
            "font-medium text-sky-200/90 underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Juego responsable
        </Link>
        .
      </p>
    </div>
  );
}
