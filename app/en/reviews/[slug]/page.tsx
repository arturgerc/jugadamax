import type { Metadata } from "next";
import Link from "next/link";
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
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";

type BodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

function parseBodyBlocks(body: string): BodyBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block) => {
      if (block.startsWith("## ")) return { type: "h2" as const, text: block.slice(3) };
      if (block.startsWith("### ")) return { type: "h3" as const, text: block.slice(4) };
      return { type: "p" as const, text: block };
    });
}

function splitBodyAndFaq(body: string) {
  const blocks = parseBodyBlocks(body);
  const faqIndex = blocks.findIndex(
    (block) => block.type === "h2" && block.text === "Frequently asked questions",
  );
  if (faqIndex === -1) {
    return { mainBlocks: blocks, faqItems: [] as { question: string; answer: string }[] };
  }

  const mainBlocks = blocks.slice(0, faqIndex);
  const faqBlocks = blocks.slice(faqIndex + 1);
  const faqItems: { question: string; answer: string }[] = [];

  for (let i = 0; i < faqBlocks.length; i++) {
    const block = faqBlocks[i];
    if (block.type === "h3" && faqBlocks[i + 1]?.type === "p") {
      faqItems.push({ question: block.text, answer: faqBlocks[i + 1].text });
      i += 1;
    }
  }

  return { mainBlocks, faqItems };
}

function getEnReviewRelatedLinks(slug: string) {
  const otherReview =
    slug === "stake"
      ? { href: "/en/reviews/bcgame", label: "BC.Game review" }
      : { href: "/en/reviews/stake", label: "Stake review" };

  return [
    { href: "/en/casinos-crypto", label: "Crypto casinos ranking" },
    otherReview,
    { href: "/en/guides/best-crypto-casinos", label: "Best crypto casinos guide" },
    { href: "/en/how-we-review", label: "How we review" },
    { href: "/en/responsible-gambling", label: "Responsible gambling" },
  ];
}

function getEnReviewSourceReferences(casinoName: string): SourceReference[] {
  return [
    { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
    { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
    { label: "Responsible gambling", href: "/en/responsible-gambling" },
    {
      label: `${casinoName} official terms, restricted-jurisdiction information and payment/cashier pages`,
      note:
        "operator-published information used where relevant; verify live terms before registering.",
    },
    {
      label: "Author profile: Arturs Stoliks on LinkedIn",
      href: "https://www.linkedin.com/in/arturs-stoliks-953555280",
      note: "author/profile proof, not a factual source.",
    },
  ];
}

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
  const { mainBlocks, faqItems } = splitBodyAndFaq(review.body);
  const relatedLinks = getEnReviewRelatedLinks(slug);
  const sourceReferences = getEnReviewSourceReferences(casino.name);

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

        <section aria-label="Analysis" className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          <div className="space-y-5">
            {mainBlocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h3
                    key={index}
                    className="pt-2 text-lg font-semibold text-foreground sm:text-xl"
                  >
                    {block.text}
                  </h3>
                );
              }
              return (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </section>

        {faqItems.length > 0 ? (
          <section aria-labelledby="en-review-faq-heading">
            <h2 id="en-review-faq-heading" className="text-xl font-semibold text-foreground">
              Frequently asked questions
            </h2>
            <dl className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
                >
                  <dt className="font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

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

        <SourceReferenceBlock
          title="Sources & references"
          description="Written by Arturs Stoliks and reviewed by JugadaMax Editorial. LinkedIn is author/profile proof, not a factual source. Operator terms, payments and verification rules can change without notice."
          items={sourceReferences}
        />

        <section aria-labelledby="en-review-related-heading">
          <h2 id="en-review-related-heading" className="text-xl font-semibold text-foreground">
            Continue reading
          </h2>
          <nav aria-label="Related guides and reviews" className="mt-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
