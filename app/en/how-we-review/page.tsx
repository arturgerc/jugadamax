import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";

export const metadata: Metadata = buildEnMetadata({
  title: "How We Review Crypto Casinos",
  description:
    "JugadaMax editorial methodology for reviewing crypto casinos: safety, licensing, payments, user experience, transparency, bonuses and responsible gambling. No fake ratings.",
  path: "/en/how-we-review",
  languageAlternates: {
    "es-MX": "/como-evaluamos",
    en: "/en/how-we-review",
  },
});

export default function EnHowWeReviewPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "How We Review", path: "/en/how-we-review" },
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
            How We Review
          </h1>
          <p className="text-muted-foreground">
            Our rankings and reviews reflect editorial judgement — not neutral facts or user
            aggregates.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Review criteria</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong className="text-foreground">Safety & trust:</strong> licensing information
              published by the operator, transparency about ownership and terms. When we cannot
              verify a claim independently, we say so clearly.
            </li>
            <li>
              <strong className="text-foreground">Payments:</strong> supported cryptocurrencies or
              methods, stated limits, fees and processing information from official sources.
            </li>
            <li>
              <strong className="text-foreground">User experience:</strong> site usability, game or
              market coverage, mobile access and support channels as observed editorially.
            </li>
            <li>
              <strong className="text-foreground">Transparency:</strong> clarity of terms,
              jurisdiction restrictions, verification requirements and promotional rules.
            </li>
            <li>
              <strong className="text-foreground">Bonuses:</strong> how offers are presented and
              whether terms appear understandable. We do not invent bonus amounts or promise
              guaranteed value.
            </li>
            <li>
              <strong className="text-foreground">Responsible gambling:</strong> whether the
              operator publishes age limits, limit tools and responsible play messaging.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <h2 className="text-xl font-semibold text-foreground">What we do not do</h2>
          <p>
            We do not publish AggregateRating schema, fake user reviews, fabricated payout proof or
            guaranteed withdrawal claims. Editorial ratings shown on JugadaMax are author-attributed
            opinions — not aggregated player scores.
          </p>
          <p>
            Availability, bonuses and payment conditions change. Always confirm details on the
            operator&apos;s official site before registering.
          </p>
        </section>

        <ResponsibleGamblingNoticeEn />
      </article>
    </Container>
  );
}
