import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  EN_CRYPTO_EDITORIAL_REFERENCES,
  EN_CRYPTO_INTERNATIONAL_ALTERNATIVES,
  resolveEnCryptoCtaHref,
  resolveEnCryptoLinkIsAffiliate,
  type EnCryptoSecondaryEntry,
} from "@/components/verticals/crypto/en/en-crypto-page-config";
import { getEnCryptoReviewHref } from "@/components/verticals/crypto/en/en-crypto-data";
import { getCryptoEditorialRating } from "@/components/verticals/crypto/crypto-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

function SecondaryRow({
  entry,
  section,
}: {
  entry: EnCryptoSecondaryEntry;
  section: "international-alternatives" | "editorial-references";
}) {
  const casino = getCasinoById(entry.operatorId);
  const ctaHref = resolveEnCryptoCtaHref(entry.operatorId);
  if (!casino || !ctaHref) return null;

  const rating = getCryptoEditorialRating(entry.operatorId);
  const ratingLabel = typeof rating === "number" ? rating.toFixed(1) : null;
  const reviewHref = getEnCryptoReviewHref(entry.operatorId);
  const isAffiliate = resolveEnCryptoLinkIsAffiliate(entry.operatorId);
  const affiliateStyle = entry.preferAffiliateStyle && isAffiliate;

  return (
    <li className="min-w-0">
      <div
        className={cn(
          "flex min-h-12 flex-col gap-2 rounded-lg border border-white/8 bg-[#111417]/50 p-3 sm:flex-row sm:items-center sm:gap-3",
          !affiliateStyle && "opacity-90",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <OperatorLogo
            logo={casino.logo}
            name={casino.name}
            operatorId={entry.operatorId}
            variant="compact-row"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="truncate text-sm font-semibold text-foreground">{casino.name}</p>
              {ratingLabel ? (
                <span className="text-xs tabular-nums text-muted-foreground">{ratingLabel}/5</span>
              ) : null}
            </div>
            <p className="mt-0.5 truncate text-[0.7rem] text-muted-foreground">{entry.label}</p>
            <span className="mt-1 inline-flex rounded-full border border-white/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted-foreground">
              {entry.badge}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-1.5 sm:w-40">
          <TrackedLink
            href={ctaHref}
            external
            rel={
              isAffiliate
                ? "sponsored nofollow noopener noreferrer"
                : "nofollow noopener noreferrer"
            }
            event="crypto_page_affiliate_click"
            section={section}
            position={entry.position}
            operator={entry.operatorId}
            ctaType={isAffiliate ? "primary" : "official"}
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md px-3 text-xs font-semibold transition-colors",
              affiliateStyle
                ? "border border-white/15 text-foreground hover:border-primary/40"
                : "border border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground",
            )}
          >
            {entry.ctaLabel}
          </TrackedLink>
          {reviewHref ? (
            <TrackedLink
              href={reviewHref}
              event="crypto_page_review_click"
              section={section}
              position={entry.position}
              operator={entry.operatorId}
              destination={reviewHref}
              className="inline-flex min-h-11 items-center justify-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
            >
              Read review
            </TrackedLink>
          ) : (
            <div className="min-h-11" aria-hidden="true" />
          )}
        </div>
      </div>
    </li>
  );
}

/**
 * Lower-priority international alternatives + editorial reference operators.
 */
export function EnCryptoSecondaryOperators() {
  return (
    <section
      aria-labelledby="en-crypto-secondary-heading"
      className="mb-8 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-crypto-secondary-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          More international options and reviewed references
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Operators included to widen comparison. Always confirm availability, jurisdiction, payments
          and terms for your country before registering.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 items-start gap-5 lg:grid-cols-[3fr_2fr] lg:gap-6">
        <div className="min-w-0 rounded-xl border border-white/8 bg-[#111417]/40 p-3.5 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            Tracked international options
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Operators with configured global tracking destinations. English editorial reviews appear
            where published (Stake, BC.Game).
          </p>
          <p className="mt-2 text-[0.7rem] leading-snug text-amber-200/80">
            Links may redirect by GEO. Confirm availability and terms for your jurisdiction. Do not
            use VPNs or false location data to access restricted services.
          </p>
          <ul className="mt-3 space-y-2">
            {EN_CRYPTO_INTERNATIONAL_ALTERNATIVES.map((entry) => (
              <SecondaryRow
                key={entry.operatorId}
                entry={entry}
                section="international-alternatives"
              />
            ))}
          </ul>
        </div>

        <div className="min-w-0 self-start rounded-xl border border-white/8 bg-[#0A1931]/35 p-3.5 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            Additional international operators
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Included to widen comparison. Confirm availability, payments and terms for your
            jurisdiction before registering.
          </p>
          <ul className="mt-3 space-y-2">
            {EN_CRYPTO_EDITORIAL_REFERENCES.map((entry) => (
              <SecondaryRow
                key={entry.operatorId}
                entry={entry}
                section="editorial-references"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
