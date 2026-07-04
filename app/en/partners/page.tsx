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

export default function EnPartnersPage() {
  return (
    <Container className="py-8">
      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Partners / Media Kit
          </h1>
          <p className="text-muted-foreground sm:text-base">
            JugadaMax is an editorial iGaming media project for Mexico, Spanish LATAM and global
            crypto casino audiences. We publish guides, reviews, payment coverage and responsible
            gambling information for adults 18+.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">What JugadaMax is</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax (jugadamax.com) is a growing editorial and media site. We do not operate
            casinos, process bets, deposits or withdrawals. We provide independent reviews and
            educational content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Audiences</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Mexico-first Spanish content at the root site, plus English/global coverage under /en
            for international crypto casino readers. All content is for adults 18+ only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Traffic standards</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Adults 18+ only</li>
            <li>Responsible gambling messaging on relevant pages</li>
            <li>No bots, spam or incentivised traffic</li>
            <li>No fake reviews or payout proof</li>
            <li>No VPN or jurisdiction-evasion messaging</li>
            <li>No misleading bonus or guaranteed-winnings claims</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Email{" "}
            <a
              href="mailto:jugadamaxcom@gmail.com"
              className="font-medium text-primary underline underline-offset-2"
            >
              jugadamaxcom@gmail.com
            </a>{" "}
            or visit our{" "}
            <Link href="/en/contact" className="font-medium text-primary underline underline-offset-2">
              contact page
            </Link>
            .
          </p>
        </section>

        <ResponsibleGamblingNoticeEn />
      </article>
    </Container>
  );
}
