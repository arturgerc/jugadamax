import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function MethodologyUpdates() {
  return (
    <section
      aria-labelledby="method-updates-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/90 via-[#111417]/85 to-[#0f1620]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="method-updates-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Actualizaciones y correcciones
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Las fechas de publicación y actualización salen del registro editorial. No las cambiamos
          solo para parecer recientes.
        </p>
        <p>
          Los bonos caducados o modificados deben corregirse o etiquetarse. Las correcciones
          factuales se hacen cuando hay evidencia fiable.
        </p>
        <p>
          Puedes reportar errores, enlaces rotos o datos desactualizados a través de contacto.
        </p>
      </div>
      <Link
        href="/contacto"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
          focusRing,
        )}
      >
        Solicitar una corrección
      </Link>
    </section>
  );
}
