import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

const criteria = [
  {
    title: "Seguridad",
    text: "Licencias informadas, transparencia y señales de confianza que el operador publica.",
    monogram: "S",
    accent: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
  },
  {
    title: "Pagos",
    text: "Crypto, tarjetas o métodos locales como OXXO y SPEI según lo que acepte cada operador.",
    monogram: "P",
    accent: "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
  },
  {
    title: "Bonos",
    text: "Promociones visibles, requisitos de apuesta y condiciones sin urgencia falsa.",
    monogram: "B",
    accent: "border-amber-500/20 bg-amber-500/5 text-amber-300",
  },
  {
    title: "Experiencia",
    text: "Catálogo, navegación, soporte y claridad general al comparar operadores.",
    monogram: "E",
    accent: "border-violet-500/20 bg-violet-500/5 text-violet-300",
  },
] as const;

/**
 * Compact editorial methodology strip (P14C).
 */
export function HomepageMethodology() {
  return (
    <section aria-labelledby="metodologia-compacta-heading" className="py-8">
      <Container>
        <div className="rounded-xl border border-white/8 bg-[#111417]/60 p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="metodologia-compacta-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                Cómo elegimos los casinos
              </h2>
              <p className="text-sm text-muted-foreground">
                Criterios editoriales para ordenar operadores sin presentar los rankings como hechos
                neutrales.
              </p>
            </div>
            <Link
              href="/como-evaluamos"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary",
                focusRing,
              )}
            >
              Ver metodología completa
            </Link>
          </div>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-white/6 bg-[#0A1931]/40 p-3.5"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex size-9 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                      item.accent,
                    )}
                  >
                    {item.monogram}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
