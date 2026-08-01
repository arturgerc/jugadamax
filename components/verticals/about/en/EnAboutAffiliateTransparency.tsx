import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";

export function EnAboutAffiliateTransparency() {
  return (
    <section
      aria-labelledby="en-about-affiliate-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a1510]/90 via-[#111417]/85 to-[#0d1820]/90 p-4 sm:mb-10 sm:p-5"
    >
      <h2
        id="en-about-affiliate-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Affiliate model and transparency
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          JugadaMax may receive a commission when a reader uses certain commercial links. This does
          not add a direct extra cost to the reader.
        </p>
        <p>
          Commercial relationships may influence which operators receive visibility or placement on
          rankings and commercial pages. Ratings remain JugadaMax editorial opinions — not neutral
          facts or user scores.
        </p>
        <p>
          Affiliate links and commercial surfaces are disclosed. The full policy is on the
          disclosure page.
        </p>
      </div>
      <Link
        href="/en/affiliate-disclosure"
        className={cn(
          "mt-4 inline-flex min-h-11 items-center rounded-md border border-primary/40 bg-primary/15 px-4 text-sm font-semibold text-primary",
          focusRing,
        )}
      >
        Affiliate disclosure
      </Link>
    </section>
  );
}
