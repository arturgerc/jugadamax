import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Partners / Media Kit",
  description:
    "JugadaMax es un proyecto editorial de iGaming para México y LATAM con contenido SEO, guías, reseñas y canales sociales enfocados en tráfico responsable para mayores de 18 años.",
  path: "/partners",
});

export default function PartnersPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Partners / Media Kit", path: "/partners" },
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
            Partners / Media Kit
          </h1>
          <p className="text-muted-foreground">
            JugadaMax — Mexico &amp; Spanish LATAM iGaming media project. Editorial-first, 18+,
            responsible gambling.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">About JugadaMax</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax (jugadamax.com) is a new editorial iGaming media project focused on Mexico first
            and Spanish-speaking LATAM. We publish casino reviews, crypto casino guides, sports
            betting content, payment-method guides, and responsible gambling information. We do not
            operate casinos or process bets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Audience</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Adults 18+ interested in online casinos, crypto casinos, sports betting, and payment
            methods in Mexico and LATAM. Content is in Spanish (es-MX) with a crypto-first editorial
            angle balanced with fiat/local operator coverage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Traffic channels</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>SEO — guides, reviews, vertical landing pages</li>
            <li>TikTok — short-form social content</li>
            <li>Instagram — visual updates</li>
            <li>YouTube — video guides and explainers</li>
            <li>Telegram — official news channel</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Traffic standards</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>18+ audiences only</li>
            <li>Responsible gambling messaging on relevant pages</li>
            <li>No bots, spam, or incentivized traffic</li>
            <li>No fake reviews, fake payout claims, or misleading bonus promises</li>
            <li>No VPN/circumvention or &quot;evade verification&quot; messaging</li>
            <li>No targeting of prohibited jurisdictions</li>
            <li>Compliance-first editorial tone</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">What we do not do</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Fake user reviews or fabricated ratings</li>
            <li>Guaranteed winnings, instant withdrawals, or &quot;no risk&quot; claims</li>
            <li>Fake licenses, awards, or partner approvals</li>
            <li>Money laundering, AML bypass, or anonymous/no-KYC promotion</li>
            <li>Publishing unverified traffic or revenue numbers</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Partnership opportunities</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            We are open to discussing affiliate partnerships, content collaborations, and media
            placements that align with our editorial standards. All outbound operator links use
            sponsored/nofollow attributes where applicable. We evaluate operators individually and
            publish balanced pros and cons.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              Email:{" "}
              <a
                href="mailto:jugadamaxcom@gmail.com"
                className="font-medium text-primary underline underline-offset-2"
              >
                jugadamaxcom@gmail.com
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href="https://t.me/jugadamax"
                target="_blank"
                rel="me noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2"
              >
                @jugadamax
              </a>
            </li>
          </ul>
        </section>

        <p className="text-xs text-muted-foreground">
          18+ only. Responsible gambling. JugadaMax is an editorial site — not a casino operator.
        </p>
      </article>
    </Container>
  );
}
