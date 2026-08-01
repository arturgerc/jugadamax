import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function EnMethodologyRatings() {
  return (
    <section
      id="ratings"
      aria-labelledby="en-method-ratings-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/80 to-[#0c121c]/50 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="en-method-ratings-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        How editorial ratings work
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Scores are qualitative editorial judgements. We do not publish numeric rating bands or a
          weighted mathematical formula that converts criteria into an automatic score.
        </p>
        <p>
          Rating context depends on product, GEO and intended audience. Commercial relationships do
          not guarantee a positive score. Featured placement and rating are separate decisions.
        </p>
        <p>
          Review pages show author or editorial-team attribution, together with dates from the
          editorial record.
        </p>
      </div>
      <Link
        href="/en/reviews"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-4 text-sm font-semibold text-primary",
          focusRing,
        )}
      >
        Browse reviews
      </Link>
    </section>
  );
}
