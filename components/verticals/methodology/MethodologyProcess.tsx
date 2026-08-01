import { METHOD_PROCESS_STEPS } from "@/components/verticals/methodology/methodology-config";
import { cn } from "@/lib/utils";

export function MethodologyProcess() {
  return (
    <section
      id="proceso"
      aria-labelledby="method-process-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="method-process-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Cómo elaboramos una reseña
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Proceso editorial en seis pasos. No pretendemos verificación diaria continua de todos los
          operadores.
        </p>
      </div>
      <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {METHOD_PROCESS_STEPS.map((step, index) => (
          <li
            key={step.heading}
            className="rounded-xl border border-white/10 bg-[#111417]/55 p-3.5"
          >
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                  index % 2 === 0
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
                )}
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{step.heading}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
