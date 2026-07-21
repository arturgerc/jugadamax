import { TrackedLink } from "@/components/analytics/TrackedLink";
import { CRYPTO_NO_KYC_CROSSLINK_IDS } from "@/components/verticals/crypto/crypto-page-config";
import { getCryptoEditorialRating } from "@/components/verticals/crypto/crypto-data";
import { getCasinoById, getReviewForCasino } from "@/lib/content";

const DISPLAY_NAMES: Record<(typeof CRYPTO_NO_KYC_CROSSLINK_IDS)[number], string> = {
  cryptocasino: "Anonymous Casino",
  ethcasino: "ETH Casino",
  ltccasino: "LTC Casino",
};

/**
 * Compact no-KYC cross-link — no duplicate full affiliate cards.
 */
export function CryptoNoKycCrossLink() {
  const items = CRYPTO_NO_KYC_CROSSLINK_IDS.flatMap((id) => {
    const casino = getCasinoById(id);
    const review = getReviewForCasino(id);
    if (!casino || !review?.slug) return [];
    return [
      {
        id,
        name: DISPLAY_NAMES[id],
        rating: getCryptoEditorialRating(id),
        reviewHref: `/reviews/${review.slug}`,
      },
    ];
  });

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="crypto-nokyc-crosslink-heading"
      className="mb-7 rounded-xl border border-dashed border-emerald-500/25 bg-[#0d1512]/40 px-4 py-4 sm:mb-10 sm:px-5 sm:py-5 lg:mb-12"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="min-w-0 max-w-2xl space-y-1.5">
          <h2
            id="crypto-nokyc-crosslink-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            ¿Buscas un casino sin KYC?
          </h2>
          <p className="text-sm text-muted-foreground">
            Compara privacidad, registro, criptomonedas, límites y riesgos de Anonymous Casino, ETH
            Casino y LTC Casino.
          </p>
          <p className="text-xs text-muted-foreground/90">
            Sin KYC no significa anonimato técnico absoluto.
          </p>
        </div>

        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0">
          {items.map((item) => {
            const ratingLabel =
              typeof item.rating === "number" ? item.rating.toFixed(1) : null;
            return (
              <li key={item.id}>
                <TrackedLink
                  href={item.reviewHref}
                  event="crypto_page_review_click"
                  section="no-kyc-crosslink"
                  operator={item.id}
                  destination={item.reviewHref}
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-[#111417]/60 px-3 py-2 text-sm"
                >
                  <span className="font-semibold text-foreground">{item.name}</span>
                  {ratingLabel ? (
                    <span className="tabular-nums text-muted-foreground">{ratingLabel}/5</span>
                  ) : null}
                </TrackedLink>
              </li>
            );
          })}
        </ul>

        <TrackedLink
          href="/casinos-sin-kyc"
          event="crypto_page_category_click"
          section="no-kyc-crosslink"
          destination="/casinos-sin-kyc"
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 px-5 text-sm font-semibold text-primary transition-colors hover:border-primary/60 sm:w-auto"
        >
          Comparar casinos sin KYC
        </TrackedLink>
      </div>
    </section>
  );
}
