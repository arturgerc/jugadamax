import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuthorById } from "@/lib/content";
import { getGlobalGuideBySlug } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Crypto Casinos — What to Check Before You Register",
  description:
    "Editorial guide to evaluating crypto casinos: jurisdiction, licensing, payments, bonus terms and responsible gambling. Adults 18+.",
  path: "/en/guides/best-crypto-casinos",
});

export default function EnBestCryptoCasinosGuidePage() {
  const guide = getGlobalGuideBySlug("best-crypto-casinos");
  if (!guide) notFound();

  const author = getAuthorById(guide.authorId);

  return (
    <Container className="py-8">
      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {guide.title}
          </h1>
          <p className="text-muted-foreground">{guide.summary}</p>
          {author ? (
            <AuthorByline
              author={author}
              publishedAt={guide.publishedAt}
              updatedAt={guide.updatedAt}
              locale="en"
            />
          ) : null}
        </header>

        <ResponsibleGamblingNoticeEn />
        <JurisdictionWarning>
          This guide is for informational purposes. Availability varies by jurisdiction. Do not use
          VPNs or false location data to access restricted gambling services.
        </JurisdictionWarning>

        <div className="space-y-4">
          {guide.body
            .split(/\n\s*\n/)
            .filter((p) => p.trim().length > 0)
            .map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph.trim()}
              </p>
            ))}
        </div>
      </article>
    </Container>
  );
}
