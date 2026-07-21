import { HomepageContainer } from "@/components/home/HomepageContainer";
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
    question: "¿Qué significa casino sin KYC?",
    answer:
      "Un casino sin KYC declara que no solicita verificación documental en el flujo habitual. Esto no significa invisibilidad técnica absoluta: email, IP, dispositivo, wallets y blockchain pueden generar trazabilidad.",
  },
  {
    question: "¿Puedo jugar desde cualquier país?",
    answer:
      "No necesariamente. La disponibilidad depende del operador, tu jurisdicción y sus términos oficiales.",
  },
] as const;

/**
 * Homepage FAQ with native disclosure elements (homepage V3 — max 5 items).
 */
export function HomepageFAQ() {
  return (
    <section aria-labelledby="faq-homepage-heading" className="py-6 pb-10 sm:py-8 lg:py-10">
      <HomepageContainer>
        <div className="mx-auto max-w-5xl">
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
        </div>
      </HomepageContainer>
    </section>
  );
}
