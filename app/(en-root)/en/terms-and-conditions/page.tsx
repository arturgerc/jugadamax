import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildEnMetadata({
  title: "Terms & Conditions",
  description:
    "Terms of use for JugadaMax, an editorial media site for adults 18+ covering online casinos, betting, payment methods and responsible gambling.",
  path: "/en/terms-and-conditions",
  languageAlternates: {
    "es-MX": "/terminos-y-condiciones",
    en: "/en/terms-and-conditions",
  },
});

export default function EnTermsAndConditionsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Terms & Conditions", path: "/en/terms-and-conditions" },
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
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: July 2026. By using jugadamax.com you accept these terms.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Use of the site</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax is an informational and editorial site. You may read guides, reviews and
            content about online casinos and betting provided you use the site lawfully and
            responsibly. You must not attempt to harm the site, gain unauthorised access or use the
            content for fraudulent activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Editorial content</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Our content is informational and editorial. It is not legal, financial, tax or betting
            advice. Reviews reflect editorial assessments — not guarantees about operators, bonuses
            or outcomes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Adults 18+</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            The site is intended for adults 18+ in jurisdictions where online gambling is permitted
            for adults. If you are underage, you must not use this site or register with linked
            operators.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Responsible gambling</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We promote responsible gambling. Online gambling should be entertainment, not a source of
            income. See our{" "}
            <Link
              href="/en/responsible-gambling"
              className="font-medium text-primary underline underline-offset-2"
            >
              responsible gambling
            </Link>{" "}
            page for recommendations and risk signals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Operator information</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We describe operators based on public information and our editorial methodology.
            Availability, licences, bonuses, payments and terms can change. Always verify details on
            the operator&apos;s official site and under the laws that apply in your jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">External links and affiliates</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Some links are affiliate links. If you register through them and the link is active, we
            may receive compensation. This does not cost you extra. See the{" "}
            <Link
              href="/en/affiliate-disclosure"
              className="font-medium text-primary underline underline-offset-2"
            >
              affiliate disclosure
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            No guarantee of availability, bonuses or results
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax does not guarantee winnings, payouts, bonuses, odds, operator availability or
            gambling outcomes. Each operator sets its own conditions and may restrict countries,
            payment methods or promotions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Your responsibility</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            You are responsible for checking whether online gambling is legal in your jurisdiction,
            reading operator terms, managing your budget and deciding whether a site or promotion is
            right for you. JugadaMax does not process bets or player funds. Do not use VPNs or false
            location information to access restricted services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax editorial content, design and brand are protected. Do not reproduce site
            material for commercial purposes without permission. Operator trademarks belong to their
            respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Changes to these terms</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We may update these terms. Relevant changes will appear on this page with an update date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Questions about these terms:{" "}
            <a
              href="mailto:jugadamaxcom@gmail.com"
              className="font-medium text-primary underline underline-offset-2"
            >
              jugadamaxcom@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Adults 18+ only. Gambling involves risk. Play responsibly.
        </p>
      </article>
    </Container>
  );
}
