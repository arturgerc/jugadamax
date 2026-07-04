import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildEnMetadata({
  title: "Responsible Gambling",
  description:
    "Responsible gambling information for JugadaMax readers: adults 18+ only, gambling involves risk, and help resources if play stops being entertainment.",
  path: "/en/responsible-gambling",
  languageAlternates: {
    "es-MX": "/juego-responsable",
    en: "/en/responsible-gambling",
  },
});

export default function EnResponsibleGamblingPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Responsible Gambling", path: "/en/responsible-gambling" },
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
            Responsible Gambling
          </h1>
          <p className="text-muted-foreground">
            Gambling should remain entertainment — not a way to solve financial problems.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            <strong className="text-foreground">Adults 18+ only.</strong> Online gambling is not
            for minors. If you are under the legal age in your jurisdiction, do not register or
            play.
          </p>
          <p>
            <strong className="text-foreground">Gambling involves risk.</strong> You can lose
            money. Outcomes are uncertain and operators retain a mathematical edge over time. Never
            gamble with money you cannot afford to lose.
          </p>
          <p>
            Stop or take a break if gambling causes stress, debt, loss of control, or conflict with
            family or work. Chasing losses often makes outcomes worse.
          </p>
          <p>
            Consider setting deposit limits, session time limits and loss limits before you play.
            Many licensed operators offer self-exclusion and limit tools — check what is available
            in your account settings and local regulations.
          </p>
          <p>
            If you need support, look for recognised responsible gambling and problem-gambling
            helplines in your country or region. JugadaMax does not provide counselling or legal
            advice; we encourage readers to use official local resources when needed.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          JugadaMax is an editorial media site. We do not operate casinos, process payments or
          guarantee winnings or withdrawals.
        </p>
      </article>
    </Container>
  );
}
