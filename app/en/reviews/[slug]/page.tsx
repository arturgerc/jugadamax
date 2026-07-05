import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAuthorById,
} from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalReviewBySlug,
  getGlobalReviews,
} from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { getCasinoOutboundLink } from "@/lib/affiliate/operator-links";
import { Container } from "@/components/layout/Container";
import { PaymentBadges } from "@/components/ranking/PaymentBadges";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { OperatorCta } from "@/components/trust/OperatorCta";
import { LicenseInfo } from "@/components/trust/LicenseInfo";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";

export function generateStaticParams() {
  return getGlobalReviews().map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = getGlobalReviewBySlug(slug);
  if (!review) return {};
  const casino = getGlobalCasinoById(review.casinoId);
  const name = casino?.name ?? review.title;

  const languageAlternates =
    slug === "stake"
      ? { "es-MX": `/reviews/${slug}`, en: `/en/reviews/${slug}` }
      : undefined;

  return buildEnMetadata({
    title: review.title,
    description: `Editorial review of ${name}: verdict, pros and cons, payments and licensing. Affiliate disclosure and responsible gambling 18+.`,
    path: `/en/reviews/${review.slug}`,
    type: "article",
    languageAlternates,
  });
}

export default async function EnReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getGlobalReviewBySlug(slug);
  if (!review) notFound();

  const casino = getGlobalCasinoById(review.casinoId);
  const author = getAuthorById(review.authorId);
  if (!casino || !author) notFound();

  const trustNote = review.trustSummary ?? casino.licensing?.notes;
  const outboundLink = getCasinoOutboundLink(casino, "global");

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Reviews", path: "/en/reviews" },
    { name: casino.name, path: `/en/reviews/${review.slug}` },
  ]);

  const article = articleJsonLd({
    headline: review.title,
    path: `/en/reviews/${review.slug}`,
    authorName:
      author.id === "redaccion-jugadamax" ? "JugadaMax Editorial" : author.name,
    datePublished: review.publishedAt,
    dateModified: review.updatedAt,
    type: "Article",
    inLanguage: "en",
  });

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <article className="mx-auto max-w-3xl space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        {outboundLink ? (
          <div className="flex flex-wrap gap-3 border-y border-border/60 py-4">
            <OperatorCta link={outboundLink} className="w-full sm:w-auto" />
          </div>
        ) : null}

        <div className="space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
          <JurisdictionWarning>
            {outboundLink?.geoWarning ??
              "Availability varies by jurisdiction. Check local laws and official operator terms before registering. Do not use VPNs or false location information to access restricted services."}
          </JurisdictionWarning>
        </div>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <section aria-label="Pros and cons">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros and cons</h2>
          <ProsCons pros={review.pros} cons={review.cons} locale="en" />
        </section>

        <section aria-label="Analysis" className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          <div className="space-y-4">
            {review.body
              .split(/\n\s*\n/)
              .filter((paragraph) => paragraph.trim().length > 0)
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </section>

        <section
          aria-label="Payments and licensing"
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Payments</h2>
            <PaymentBadges payments={casino.payments} />
            {review.paymentsSummary ? (
              <p className="mt-2 text-sm text-muted-foreground">{review.paymentsSummary}</p>
            ) : null}
          </div>
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Licensing & trust</h2>
            <LicenseInfo licensing={casino.licensing} locale="en" />
            {trustNote ? (
              <p className="mt-2 text-sm text-muted-foreground">{trustNote}</p>
            ) : null}
          </div>
        </section>

        {outboundLink ? (
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
            <OperatorCta link={outboundLink} />
          </div>
        ) : (
          <p className="border-t border-border/60 pt-6 text-sm text-muted-foreground">
            JugadaMax does not currently publish an affiliate link for {casino.name}. Check the
            operator&apos;s official site directly and verify jurisdiction restrictions before
            registering.
          </p>
        )}
      </article>
    </Container>
  );
}
