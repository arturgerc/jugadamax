import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildEnMetadata({
  title: "Privacy Policy",
  description:
    "How JugadaMax handles contact information, basic technical data, external links and privacy on its editorial iGaming media site. Adults 18+.",
  path: "/en/privacy-policy",
  languageAlternates: {
    "es-MX": "/politica-de-privacidad",
    en: "/en/privacy-policy",
  },
});

export default function EnPrivacyPolicyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Privacy Policy", path: "/en/privacy-policy" },
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: July 2026. This policy describes how JugadaMax handles information on its
            editorial site.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax (jugadamax.com) is an editorial and media site covering online casinos, sports
            betting, payment methods and responsible gambling. Our Spanish coverage focuses on Mexico
            and LATAM; our English pages serve international readers. We do not operate casinos and
            we do not process bets, deposits or withdrawals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">What information we may process</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            As an informational site, we may process limited data: information you send us by email,
            basic technical browsing data (such as IP address, browser type or pages visited) and
            aggregated analytics data if analytics tools are active.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact information</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            If you email us, we use your message and contact details to respond to editorial
            questions, corrections or collaboration proposals. We do not sell contact lists or share
            your email with gambling operators by default.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Technical data, cookies and analytics
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We may use cookies or similar technologies for basic site function, traffic measurement
            or improvements. If we implement analytics tools, we aim to configure them in an
            aggregated way. You can manage cookies in your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            External links and gambling operators
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax links to third-party sites, including casino and betting operators. Those sites
            have their own privacy policies, terms and data practices. When you leave jugadamax.com,
            the destination site&apos;s rules apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Affiliates and click measurement</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Some links are affiliate links. When a link is active and approved, we may earn a
            commission if you register with an operator. This may involve tracking parameters in the
            operator URL. See our{" "}
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
          <h2 className="text-xl font-semibold text-foreground">Minors</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax is intended for adults 18+. We do not knowingly collect information from minors.
            If we become aware of a minor&apos;s data, we will seek to delete it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Security</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We apply reasonable measures to protect information we manage. No website can guarantee
            absolute security; please avoid sending sensitive data through insecure channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Changes to this policy</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We may update this policy to reflect changes to the site or our practices. The update
            date will be shown on this page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Privacy questions:{" "}
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
