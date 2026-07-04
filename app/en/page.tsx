import type { Metadata } from "next";
import Link from "next/link";
import { getGlobalReviews } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { RankingList } from "@/components/ranking/RankingList";
import { getGlobalCasinosByVertical } from "@/lib/content/global";

export const metadata: Metadata = {
  ...buildEnMetadata({
    title: "JugadaMax Global — Crypto Casino Reviews & Guides",
    description:
      "Independent English editorial coverage of crypto casinos, payment guides and responsible gambling. Adults 18+. Availability varies by jurisdiction.",
    path: "/en",
    languageAlternates: {
      "es-MX": "/",
      en: "/en",
    },
  }),
  title: {
    absolute: "JugadaMax Global — Crypto Casino Reviews & Guides",
  },
};

export default function EnHomePage() {
  const casinos = getGlobalCasinosByVertical("crypto-casino");
  const reviews = getGlobalReviews();
  const reviewSlugByCasinoId = Object.fromEntries(reviews.map((r) => [r.casinoId, r.slug]));

  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            JugadaMax Global
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Independent editorial coverage of crypto casinos, global operator reviews, payment
            guides and responsible gambling information. Mexico-first Spanish content remains at{" "}
            <Link href="/" className="font-medium text-primary underline underline-offset-2">
              jugadamax.com
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosureEn />
        <ResponsibleGamblingNoticeEn />
        <JurisdictionWarning>
          Availability varies by jurisdiction. Check local laws and operator terms before
          registering. Do not use VPNs or false location information to access restricted services.
        </JurisdictionWarning>
      </div>

      <section aria-labelledby="en-crypto-heading" className="mb-10">
        <h2 id="en-crypto-heading" className="text-xl font-bold text-foreground sm:text-2xl">
          Global crypto casino coverage
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Editorial rankings for international readers. Outbound links appear only when approved
          affiliate or official URLs are configured.
        </p>
        <div className="mt-5">
          <RankingList
            casinos={casinos}
            vertical="crypto-casino"
            market="global"
            locale="en"
            reviewBasePath="/en/reviews"
            reviewSlugByCasinoId={reviewSlugByCasinoId}
            emptyMessage="Global operator coverage coming soon."
            reviewLabel="Read review"
            topRankLabel="Editorial pick"
          />
        </div>
        <Link
          href="/en/casinos-crypto"
          className="mt-4 inline-flex text-sm font-medium text-primary underline underline-offset-2"
        >
          View all crypto casinos
        </Link>
      </section>

      <section aria-labelledby="en-reviews-heading">
        <h2 id="en-reviews-heading" className="text-xl font-bold text-foreground sm:text-2xl">
          Latest reviews
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.id}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  <Link
                    href={`/en/reviews/${review.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {review.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{review.verdict}</p>
                <Link
                  href={`/en/reviews/${review.slug}`}
                  className="mt-4 text-sm font-medium text-primary underline underline-offset-2"
                >
                  Read review
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
