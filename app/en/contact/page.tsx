import type { Metadata } from "next";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/social/SocialLinks";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";

export const metadata: Metadata = buildEnMetadata({
  title: "Contact JugadaMax",
  description:
    "Contact the JugadaMax editorial team for affiliate managers, operators and editorial inquiries. Independent iGaming media for Mexico, Spanish LATAM and global crypto casino audiences.",
  path: "/en/contact",
  languageAlternates: {
    "es-MX": "/contacto",
    en: "/en/contact",
  },
});

export default function EnContactPage() {
  return (
    <Container className="py-8">
      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Contact JugadaMax
          </h1>
          <p className="text-muted-foreground">
            Independent iGaming media for affiliate managers, operators and editorial contacts.
          </p>
        </header>

        <section className="space-y-3 text-sm text-muted-foreground sm:text-base">
          <p>
            JugadaMax is an independent iGaming media project covering Mexico, Spanish-speaking
            LATAM and global crypto casino audiences. We publish editorial reviews, payment guides
            and responsible gambling information — we do not operate casinos or process payments.
          </p>
          <p>
            For editorial corrections, partnership inquiries or affiliate manager contact, email us
            at{" "}
            <a
              href="mailto:jugadamaxcom@gmail.com"
              className="font-medium text-primary underline underline-offset-2"
            >
              jugadamaxcom@gmail.com
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="en-contact-channels-heading" className="space-y-4">
          <div className="space-y-2">
            <h2
              id="en-contact-channels-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Official channels
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Follow JugadaMax on our official social channels for updates, guides and reviews.
            </p>
          </div>
          <SocialLinks variant="contact" locale="en" />
        </section>

        <ResponsibleGamblingNoticeEn />

        <p className="text-xs text-muted-foreground">
          Adults 18+ only. Gambling involves risk. Play responsibly.
        </p>
      </article>
    </Container>
  );
}
