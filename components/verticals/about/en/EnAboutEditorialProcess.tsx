import Link from "next/link";
import { EN_ABOUT_PROCESS_STEPS } from "@/components/verticals/about/en/en-about-config";
import { cn, focusRing } from "@/lib/utils";

export function EnAboutEditorialProcess() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="en-about-process-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-about-process-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          How we work
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Public editorial criteria. We do not promise daily verification or gambling outcomes.
        </p>
      </div>
      <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {EN_ABOUT_PROCESS_STEPS.map((step, index) => (
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
      <p className="mt-4 text-sm text-muted-foreground">
        Read the full methodology in{" "}
        <Link
          href="/en/how-we-review"
          className={cn("font-medium text-primary underline underline-offset-2", focusRing)}
        >
          How we review
        </Link>
        .
      </p>
    </section>
  );
}
