import type { Metadata } from "next";
import Link from "next/link";
import { getGlobalGuides } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildEnMetadata({
  title: "Guides — Crypto Casinos & Payment Education",
  description:
    "English editorial guides on crypto casinos, payments and responsible gambling for global 18+ audiences.",
  path: "/en/guides",
  languageAlternates: {
    "es-MX": "/guias",
    en: "/en/guides",
  },
});

export default function EnGuidesIndexPage() {
  const guides = getGlobalGuides();

  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Guides
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Editorial guides on crypto casinos, payments and responsible gambling for global readers.
            Mexico-first Spanish guides remain on the main site.
          </p>
        </div>
      </header>

      {guides.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 sm:p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                <Link
                  href={`/en/guides/${guide.slug}`}
                  className={cn("transition-colors hover:text-primary", focusRing)}
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{guide.summary}</p>
              <Link
                href={`/en/guides/${guide.slug}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border/60 bg-card p-5 sm:p-6">
          <p className="text-sm text-muted-foreground sm:text-base">
            English guides are being prepared. For current Spanish guides, visit the{" "}
            <Link href="/guias" className="font-medium text-primary underline underline-offset-2">
              Spanish guides section
            </Link>
            .
          </p>
        </div>
      )}
    </Container>
  );
}
