import Link from "next/link";
import { EN_REVIEW_METHODOLOGY_CRITERIA } from "@/components/verticals/reviews/en/en-reviews-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * Explains how to read JugadaMax editorial ratings (not user aggregates).
 */
export function EnReviewMethodology() {
  return (
    <section
      id="ratings-methodology"
      aria-labelledby="en-ratings-methodology-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-ratings-methodology-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          How to read JugadaMax editorial ratings
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Each score is an editorial opinion assigned to the review author or editorial team. It is
          not a user-vote average, an AggregateRating or a guarantee of safety, licensing, payments
          or withdrawals.
        </p>
      </div>

      <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {EN_REVIEW_METHODOLOGY_CRITERIA.map((item, index) => (
          <li
            key={item.heading}
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
                <h3 className="text-sm font-semibold text-foreground">
                  {item.heading}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
        For the full methodology, see{" "}
        <Link
          href="/en/how-we-review"
          className={cn(
            "font-medium text-primary underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          how we review operators
        </Link>
        .
      </p>
    </section>
  );
}
