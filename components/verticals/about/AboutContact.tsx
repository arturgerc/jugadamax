import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function AboutContact() {
  return (
    <section
      aria-labelledby="about-contact-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-[#101816]/90 via-[#111417]/85 to-[#0f1620]/90 p-4 sm:mb-10 sm:p-6"
    >
      <h2
        id="about-contact-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Correcciones y contacto
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        ¿Encontraste información desactualizada, un enlace roto, un dato incorrecto de un operador
        o un error de atribución? Escríbenos. Revisamos correcciones cuando hay evidencia
        comprobable.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href="/contacto"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
            focusRing,
          )}
        >
          Contactar con JugadaMax
        </Link>
        <Link
          href="/como-evaluamos"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#0A1931]/55 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-emerald-400/40",
            focusRing,
          )}
        >
          Ver metodología
        </Link>
      </div>
    </section>
  );
}
