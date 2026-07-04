import type { Metadata } from "next";
import Link from "next/link";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";

export const metadata: Metadata = buildEnMetadata({
  title: "Partners / Media Kit",
  description:
    "Partner and media kit information for JugadaMax — independent iGaming editorial media covering Mexico, Spanish LATAM and global crypto casino audiences.",
  path: "/en/partners",
  languageAlternates: {
    "es-MX": "/partners",
    en: "/en/partners",
  },
});

const audienceCards = [
  {
    title: "Mexico-first Spanish",
    description:
      "Hispanic audiences interested in crypto casinos, fiat casinos, sports betting and payment guides at jugadamax.com.",
  },
  {
    title: "English / global",
    description:
      "International readers under /en seeking jurisdiction-aware crypto casino reviews and educational content.",
  },
  {
    title: "18+ only",
    description:
      "All JugadaMax content is for adults. We include responsible gambling messaging on relevant pages.",
  },
] as const;

const trafficSources = [
  { label: "SEO", detail: "Guides, reviews and vertical landing pages" },
  { label: "TikTok", detail: "Short-form social content" },
  { label: "Instagram", detail: "Visual updates and editorial highlights" },
  { label: "YouTube", detail: "Guides and video explainers" },
  { label: "Telegram", detail: "Official channel for updates" },
] as const;

const trafficStandards = [
  "Adults 18+ only",
  "Responsible gambling messaging on relevant pages",
  "No bots, spam or incentivised traffic",
  "No fake reviews or payout proof",
  "No VPN or jurisdiction-evasion messaging",
  "No misleading bonus or guaranteed-winnings claims",
  "No targeting of prohibited jurisdictions",
] as const;

export default function EnPartnersPage() {
  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.07),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.05),transparent_50%)]"
        />
        <div className="relative space-y-4">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Media kit · New project · Editorial only
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Partners / Media Kit
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            JugadaMax is a growing editorial iGaming media project for Mexico, Spanish LATAM and
            global crypto casino audiences. We publish guides, reviews, payment coverage and
            responsible gambling information — we do not operate casinos or process bets.
          </p>
        </div>
      </header>

      <div className="space-y-8">
        <section aria-labelledby="en-partners-about-heading">
          <h2
            id="en-partners-about-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            What JugadaMax is
          </h2>
          <div className="mt-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax (jugadamax.com) is an independent editorial and media site. We provide
              casino reviews, crypto payment guides, sports betting editorial coverage and
              responsible gambling resources. Mexico-first Spanish content lives at the root site;
              English/global coverage is under /en.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We do not operate casinos, process bets, deposits or withdrawals. We do not publish
              fake traffic numbers or claim approved partnerships that do not exist.
            </p>
          </div>
        </section>

        <section aria-labelledby="en-partners-audience-heading">
          <h2
            id="en-partners-audience-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Audiences
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-border/60 bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="en-partners-traffic-heading">
          <h2
            id="en-partners-traffic-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Traffic sources
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trafficSources.map((source) => (
              <div
                key={source.label}
                className="rounded-lg border border-border/60 bg-card p-4"
              >
                <p className="font-semibold text-foreground">{source.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{source.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="en-partners-standards-heading">
          <h2
            id="en-partners-standards-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Traffic standards
          </h2>
          <div className="mt-4 rounded-lg border border-accent/30 bg-accent/5 p-5 sm:p-6">
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 sm:text-base">
              {trafficStandards.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="en-partners-collab-heading">
          <h2
            id="en-partners-collab-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Collaboration opportunities
          </h2>
          <div className="mt-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are open to discussing affiliate partnerships, editorial reviews, payment-method
              guides, crypto casino education, responsible gambling campaigns for 18+ audiences and
              content collaborations for Mexico, LATAM and global readers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We evaluate operators individually, publish balanced pros and cons, and apply
              sponsored/nofollow attributes on affiliate links when applicable.
            </p>
          </div>
        </section>

        <section aria-labelledby="en-partners-contact-heading">
          <h2
            id="en-partners-contact-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Contact
          </h2>
          <div className="mt-4 rounded-lg border border-primary/25 bg-card p-5 sm:p-6">
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
            <Link
              href="/en/contact"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Visit contact page
            </Link>
          </div>
        </section>

        <ResponsibleGamblingNoticeEn />
      </div>
    </Container>
  );
}
