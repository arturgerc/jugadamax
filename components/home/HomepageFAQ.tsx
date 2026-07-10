import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "¿JugadaMax es un casino?",
    answer:
      "No. JugadaMax es un sitio editorial y de comparación. No acepta depósitos ni opera juegos.",
  },
  {
    question: "¿Cómo se ordenan los rankings?",
    answer:
      "Evaluamos seguridad informada, pagos, bonos, experiencia y términos. Las relaciones de afiliación se divulgan y no eliminan la necesidad de revisar cada operador.",
  },
  {
    question: "¿JugadaMax recibe comisión?",
    answer:
      "Podemos recibir una comisión cuando un usuario se registra mediante determinados enlaces. Esto no añade un coste directo al usuario.",
  },
  {
    question: "¿Qué debo revisar antes de aceptar un bono?",
    answer:
      "Requisitos de apuesta, juegos elegibles, límites, vencimiento, verificación y reglas de retiro.",
  },
  {
    question: "¿Qué diferencia hay entre casino crypto y fiat?",
    answer:
      "Los casinos crypto usan activos y redes blockchain; los operadores fiat suelen usar tarjetas, transferencias o métodos locales como OXXO y SPEI.",
  },
  {
    question: "¿Puedo jugar desde cualquier país?",
    answer:
      "No necesariamente. La disponibilidad depende del operador, tu jurisdicción y sus términos oficiales.",
  },
] as const;

/**
 * Homepage FAQ with native disclosure elements (P14C).
 * Presentational only — no FAQPage JSON-LD (project has no reusable FAQ schema helper).
 */
export function HomepageFAQ() {
  return (
    <section aria-labelledby="faq-homepage-heading" className="py-8 pb-10">
      <Container>
        <h2
          id="faq-homepage-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Preguntas frecuentes
        </h2>

        <div className="mt-5 space-y-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/8 bg-[#111417]/50 open:border-primary/25 open:bg-[#16233f]/40"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-foreground sm:px-5 sm:text-base",
                  "[&::-webkit-details-marker]:hidden",
                )}
              >
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/6 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground sm:px-5">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
