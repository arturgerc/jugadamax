import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildEnMetadata({
  title: "About JugadaMax",
  description:
    "JugadaMax is an independent editorial comparison and media site covering crypto casinos, fiat casinos and sports betting. Learn who we are and how we work.",
  path: "/en/about",
  languageAlternates: {
    "es-MX": "/acerca-de",
    en: "/en/about",
  },
});

export default function EnAboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "About", path: "/en/about" },
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
            About JugadaMax
          </h1>
          <p className="text-muted-foreground">
            JugadaMax is an independent editorial comparison and media site.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            We publish rankings, comparisons and editorial reviews of crypto casinos, fiat casinos
            and sports betting operators. Our Spanish coverage focuses on Mexico; English pages serve
            international readers. Our goal is to provide clear information so adults 18+ can make
            more informed decisions.
          </p>
          <p>
            We are not a gambling operator and we do not accept bets: we are an independent media
            site that compares and comments on third-party operators. Information about bonuses,
            payments and licences comes from each operator and can change; we recommend verifying it
            on the official operator site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">How we work</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Our rankings reflect editorial judgement — not neutral facts — and may be commercially
            influenced through affiliate agreements. We explain our criteria in{" "}
            <Link
              href="/en/how-we-review"
              className="font-medium text-primary underline underline-offset-2"
            >
              How we review
            </Link>{" "}
            and detail the affiliate model in our{" "}
            <Link
              href="/en/affiliate-disclosure"
              className="font-medium text-primary underline underline-offset-2"
            >
              affiliate disclosure
            </Link>
            . Ratings shown on JugadaMax are editorial opinions from the JugadaMax team — not
            aggregated user scores or third-party score aggregates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Have a question or a content correction? Visit our{" "}
            <Link
              href="/en/contact"
              className="font-medium text-primary underline underline-offset-2"
            >
              contact
            </Link>{" "}
            page.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Adults 18+ only. Gambling can be addictive. Play responsibly.
        </p>
      </article>
    </Container>
  );
}
