import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function EnMethodologyAffiliateTransparency() {
  return (
    <section
      aria-labelledby="en-method-affiliate-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a1510]/90 via-[#111417]/85 to-[#0d1820]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="en-method-affiliate-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Editorial independence and affiliation
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          JugadaMax may receive a commission through approved affiliate links. That compensation
          does not add a direct extra cost to the reader.
        </p>
        <p>
          Affiliation may influence which commercial campaigns are available or how some operators
          are surfaced. It does not turn a commercial claim into verified fact and does not
          guarantee a positive rating.
        </p>
        <p>
          Disclosure must remain visible on commercial pages. We do not claim absolute financial
          independence from affiliate monetisation.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href="/en/affiliate-disclosure"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-primary/40 bg-primary/15 px-4 text-sm font-semibold text-primary",
            focusRing,
          )}
        >
          Affiliate disclosure
        </Link>
        <Link
          href="/en/partners"
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#0A1931]/55 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40",
            focusRing,
          )}
        >
          Partners
        </Link>
      </div>
    </section>
  );
}
