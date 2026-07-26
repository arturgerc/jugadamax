import type { Metadata } from "next";
import Link from "next/link";
import { getReviewForCasino } from "@/lib/content";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import {
  EnAnonymousCasinoNoKycCard,
  EnEthCasinoNoKycCard,
  EnLtcCasinoNoKycCard,
} from "@/components/verticals/nokyc/en/EnNoKycFeaturedCards";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildEnMetadata({
  title: "No-KYC Crypto Casinos — Anonymous, ETH & LTC",
  description:
    "Compare Anonymous Casino, ETH Casino and LTC Casino by registration model, crypto payments, privacy positioning, games, limits, withdrawals and jurisdiction risks. Adults 18+.",
  path: "/en/casinos-no-kyc",
  languageAlternates: {
    "es-MX": "/casinos-sin-kyc",
    en: "/en/casinos-no-kyc",
  },
});

const FAQ_ITEMS = [
  {
    question: "What is a no-KYC casino?",
    answer:
      "A casino that publishes a registration policy without traditional document verification. On Anonymous Casino, ETH Casino and LTC Casino the described flow uses email and password. Policies belong to each operator and can change.",
  },
  {
    question: "Does no-KYC mean absolute anonymity?",
    answer:
      "No. Email, IP, device, wallets and public blockchains can still create traceability. No-KYC is not a local licence and not technical invisibility.",
  },
  {
    question: "Which operator does JugadaMax rank first?",
    answer:
      "In this editorial cluster, Anonymous Casino appears first (4.9/5), followed by ETH Casino (4.7/5) and LTC Casino (4.6/5). Scores are JugadaMax editorial opinions.",
  },
  {
    question: "Are Anonymous Casino and CryptoCasino.CC the same?",
    answer:
      "Yes. Anonymous Casino is the promotional brand for the casino available at CryptoCasino.CC.",
  },
  {
    question: "Do these casinos accept local fiat methods?",
    answer:
      "They are not presented here as local fiat casinos. Their positioning is crypto-only with deposits from wallets. Availability still depends on your jurisdiction.",
  },
] as const;

function editorialRating(casinoId: string, fallback: number): number {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : fallback;
}

export default function EnCasinosNoKycPage() {
  const anonymousRating = editorialRating("cryptocasino", 4.9);
  const ethRating = editorialRating("ethcasino", 4.7);
  const ltcRating = editorialRating("ltccasino", 4.6);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "No-KYC Casinos", path: "/en/casinos-no-kyc" },
  ]);

  return (
    <Container className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="relative mb-8 overflow-hidden rounded-2xl border border-[#E0001B]/25 bg-gradient-to-br from-[#050607] via-[#0B0D12] to-[#111417] p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,0,27,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(16,187,215,0.08),transparent_50%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            No-KYC Crypto Casinos
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We compare crypto casinos that publish registration policies without document
            verification. Anonymous Casino (CryptoCasino.CC), ETH Casino and LTC Casino describe
            email-and-password signup in their public materials — but availability, fraud controls,
            networks, limits and withdrawals depend on each operator and your jurisdiction.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Page focus">
            <li className="inline-flex items-center rounded-full border border-[#FF1C24]/35 bg-[#B30016]/20 px-2.5 py-1 text-xs font-medium text-[#FF4A2E]">
              No-KYC
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Crypto-only
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Global / jurisdiction-aware
            </li>
            <li className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
              18+
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Editorial review
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosureEn />
        <ResponsibleGamblingNoticeEn />
      </div>

      <section aria-labelledby="what-nokyc-means" className="mb-8">
        <h2
          id="what-nokyc-means"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          What “no-KYC casino” means
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Here, “no-KYC” describes operators that state they do not require identity documents at
          registration. It does not mean technical invisibility, a local licence or the absence of
          fraud controls. Always confirm rules on the registration domain for your jurisdiction.
        </p>
      </section>

      <section aria-labelledby="anonymous-nokyc-card" className="mb-6">
        <h2 id="anonymous-nokyc-card" className="sr-only">
          Anonymous Casino
        </h2>
        <EnAnonymousCasinoNoKycCard />
      </section>

      <section aria-labelledby="eth-nokyc-card" className="mb-6">
        <h2 id="eth-nokyc-card" className="sr-only">
          ETH Casino
        </h2>
        <EnEthCasinoNoKycCard className="mt-4" />
      </section>

      <section aria-labelledby="ltc-nokyc-card" className="mb-8">
        <h2 id="ltc-nokyc-card" className="sr-only">
          LTC Casino
        </h2>
        <EnLtcCasinoNoKycCard className="mt-4" />
      </section>

      <section aria-labelledby="which-to-choose" className="mb-8">
        <h2
          id="which-to-choose"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          Which should you choose?
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>
            <span className="font-semibold text-foreground">Anonymous Casino:</span> JugadaMax’s
            highest editorial pick for broad no-KYC coverage on CryptoCasino.CC.
          </li>
          <li>
            <span className="font-semibold text-foreground">ETH Casino:</span> best fit for
            Ethereum-focused users.
          </li>
          <li>
            <span className="font-semibold text-foreground">LTC Casino:</span> best fit for
            Litecoin-focused users.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Scores are JugadaMax editorial opinions — not guarantees of payouts, licensing or anonymity.
        </p>
      </section>

      <section aria-labelledby="comparison-summary" className="mb-8">
        <h2
          id="comparison-summary"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          Comparison summary
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/70 p-5">
            <h3 className="font-semibold text-foreground">Anonymous Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>JugadaMax editorial rating: {anonymousRating}/5</li>
              <li>Operates on CryptoCasino.CC</li>
              <li>No-KYC positioning</li>
              <li>Email and password registration</li>
              <li>8 confirmed cryptocurrencies</li>
              <li>Slots, crypto games and live casino</li>
              <li>Multiple accounts per Terms, with abuse caution</li>
            </ul>
            <TrackedLink
              href="/en/reviews/cryptocasino"
              event="crypto_page_review_click"
              section="comparison-summary"
              position={1}
              operator="cryptocasino"
              destination="/en/reviews/cryptocasino"
              className={cn(
                "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#FF4A2E] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Read Anonymous Casino review
            </TrackedLink>
          </article>
          <article className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/70 p-5">
            <h3 className="font-semibold text-foreground">ETH Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>JugadaMax editorial rating: {ethRating}/5</li>
              <li>Ethereum-first focus</li>
              <li>No-KYC per operator</li>
              <li>Email and password registration</li>
              <li>11 cryptocurrencies in the Terms</li>
              <li>Slots, crypto games and live casino</li>
            </ul>
            <TrackedLink
              href="/en/reviews/ethcasino"
              event="crypto_page_review_click"
              section="comparison-summary"
              position={2}
              operator="ethcasino"
              destination="/en/reviews/ethcasino"
              className={cn(
                "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#56E8F6] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Read ETH Casino review
            </TrackedLink>
          </article>
          <article className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/70 p-5">
            <h3 className="font-semibold text-foreground">LTC Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>JugadaMax editorial rating: {ltcRating}/5</li>
              <li>Litecoin focus</li>
              <li>No-KYC per operator</li>
              <li>Email and password registration</li>
              <li>Multiple crypto assets</li>
              <li>Slots and crypto games</li>
            </ul>
            <TrackedLink
              href="/en/reviews/ltccasino"
              event="crypto_page_review_click"
              section="comparison-summary"
              position={3}
              operator="ltccasino"
              destination="/en/reviews/ltccasino"
              className={cn(
                "mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#7F8FFF] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Read LTC Casino review
            </TrackedLink>
          </article>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Ratings above are the same canonical editorial scores used across JugadaMax — not invented
          English scores.
        </p>
      </section>

      <section aria-labelledby="anonymity-limits" className="mb-8">
        <h2
          id="anonymity-limits"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          No-KYC does not mean absolute anonymity
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          An email still exists. IP or device logging, public blockchain traceability, fraud controls
          and local laws can still apply. No-KYC is not a local licence and not a guarantee that
          accounts will never face restrictions.
        </p>
      </section>

      <section aria-labelledby="faq-nokyc" className="mb-8">
        <h2 id="faq-nokyc" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Frequently asked questions
        </h2>
        <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group px-4 py-1 sm:px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-links" className="mb-4">
        <h2
          id="related-links"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          Related links
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3 text-sm">
          <li>
            <Link
              href="/en/reviews/cryptocasino"
              className={cn(
                "font-medium text-[#FF4A2E] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Anonymous Casino review
            </Link>
          </li>
          <li>
            <Link
              href="/en/reviews/ethcasino"
              className={cn(
                "font-medium text-[#56E8F6] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              ETH Casino review
            </Link>
          </li>
          <li>
            <Link
              href="/en/reviews/ltccasino"
              className={cn(
                "font-medium text-[#7F8FFF] underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              LTC Casino review
            </Link>
          </li>
          <li>
            <Link
              href="/en/casinos-crypto"
              className={cn(
                "font-medium text-primary underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Crypto casinos
            </Link>
          </li>
          <li>
            <Link
              href="/en/guides/best-crypto-casinos"
              className={cn(
                "font-medium text-primary underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Crypto casino guide
            </Link>
          </li>
          <li>
            <Link
              href="/en/how-we-review"
              className={cn(
                "font-medium text-primary underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              How we review
            </Link>
          </li>
          <li>
            <Link
              href="/en/responsible-gambling"
              className={cn(
                "font-medium text-primary underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              Responsible gambling
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
