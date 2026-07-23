import Link from "next/link";
import { HomepageContainer } from "@/components/home/HomepageContainer";
import { cn, focusRing } from "@/lib/utils";

/**
 * Compact affiliate + jurisdiction + responsible gambling strip for English homepage V2.
 */
export function EnHomepageTrustStrip({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="en-homepage-trust-heading"
      className={cn("py-6 sm:py-8", className)}
    >
      <HomepageContainer>
        <h2 id="en-homepage-trust-heading" className="sr-only">
          Transparency and responsible gambling
        </h2>
        <div
          role="note"
          className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-[#111417]/80 px-3 py-2.5 sm:items-center sm:gap-3 sm:px-4 sm:py-3"
        >
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-300">
            <span aria-hidden="true">18+</span>
          </span>
          <p className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
            JugadaMax may earn a commission from some links. That does not increase your cost or
            decide our editorial assessment. Availability depends on your jurisdiction. Play
            responsibly.{" "}
            <Link
              href="/en/affiliate-disclosure"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Affiliate disclosure
            </Link>
            {" · "}
            <Link
              href="/en/responsible-gambling"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Responsible gambling
            </Link>
          </p>
        </div>
      </HomepageContainer>
    </section>
  );
}
