import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";

export const metadata: Metadata = buildEnMetadata({
  title: "Affiliate Disclosure",
  description:
    "How affiliate links work on JugadaMax: we may earn a commission from operator registrations. This does not influence editorial ratings. Adults 18+.",
  path: "/en/affiliate-disclosure",
  languageAlternates: {
    "es-MX": "/divulgacion-afiliados",
    en: "/en/affiliate-disclosure",
  },
});

export default function EnAffiliateDisclosurePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Affiliate Disclosure", path: "/en/affiliate-disclosure" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Affiliate Disclosure
          </h1>
          <p className="text-muted-foreground">
            JugadaMax is transparent about how affiliate relationships may support this site.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            JugadaMax is an independent iGaming media site. Some outbound links to operators are
            affiliate links. If you register or play through those links, we may receive a
            commission.{" "}
            <strong className="text-foreground">This does not cost you extra.</strong>
          </p>
          <p>
            Affiliate relationships do not determine our editorial ratings, review scores, or
            ranking order. We publish balanced pros and cons and explain our criteria in{" "}
            <Link
              href="/en/how-we-review"
              className="font-medium text-primary underline underline-offset-2"
            >
              How we review
            </Link>
            .
          </p>
          <p>
            Bonuses, payment methods, licensing and availability change frequently. Always verify
            current operator terms, jurisdiction restrictions and promotional conditions on the
            official site before registering or depositing.
          </p>
        </section>

        <ResponsibleGamblingNoticeEn />

        <p className="text-xs text-muted-foreground">
          Adults 18+ only. Gambling involves risk. Play responsibly.
        </p>
      </article>
    </Container>
  );
}
