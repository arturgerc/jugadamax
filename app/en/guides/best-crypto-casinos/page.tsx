import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAuthorById } from "@/lib/content";
import { getGlobalGuideBySlug } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Crypto Casinos — What to Check Before You Register",
  description:
    "Editorial guide to evaluating crypto casinos: jurisdiction, licensing, payments, bonus terms and responsible gambling. Adults 18+.",
  path: "/en/guides/best-crypto-casinos",
});

type BodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

function parseBodyBlocks(body: string): BodyBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block) => {
      if (block.startsWith("## ")) return { type: "h2" as const, text: block.slice(3) };
      if (block.startsWith("### ")) return { type: "h3" as const, text: block.slice(4) };
      return { type: "p" as const, text: block };
    });
}

function splitBodyAndFaq(body: string) {
  const blocks = parseBodyBlocks(body);
  const faqIndex = blocks.findIndex(
    (block) => block.type === "h2" && block.text === "Frequently asked questions",
  );
  if (faqIndex === -1) {
    return { mainBlocks: blocks, faqItems: [] as { question: string; answer: string }[] };
  }

  const mainBlocks = blocks.slice(0, faqIndex);
  const faqBlocks = blocks.slice(faqIndex + 1);
  const faqItems: { question: string; answer: string }[] = [];

  for (let i = 0; i < faqBlocks.length; i++) {
    const block = faqBlocks[i];
    if (block.type === "h3" && faqBlocks[i + 1]?.type === "p") {
      faqItems.push({ question: block.text, answer: faqBlocks[i + 1].text });
      i += 1;
    }
  }

  return { mainBlocks, faqItems };
}

const relatedLinks = [
  { href: "/en/casinos-crypto", label: "Crypto casinos ranking" },
  { href: "/en/reviews/stake", label: "Stake review" },
  { href: "/en/reviews/bcgame", label: "BC.Game review" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
  { href: "/en/affiliate-disclosure", label: "Affiliate disclosure" },
] as const;

export default function EnBestCryptoCasinosGuidePage() {
  const guide = getGlobalGuideBySlug("best-crypto-casinos");
  if (!guide) notFound();

  const author = getAuthorById(guide.authorId);
  const { mainBlocks, faqItems } = splitBodyAndFaq(guide.body);

  return (
    <Container className="py-8 sm:py-10">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
          />
          <div className="relative space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {guide.title}
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">{guide.summary}</p>
            {author ? (
              <AuthorByline
                author={author}
                publishedAt={guide.publishedAt}
                updatedAt={guide.updatedAt}
                locale="en"
              />
            ) : null}
          </div>
        </header>

        <div className="space-y-3">
          <ResponsibleGamblingNoticeEn />
          <JurisdictionWarning>
            This guide is for informational purposes only. Availability depends on your jurisdiction
            and official operator terms. Check local laws before registering. Do not use VPNs or
            false location information to access restricted gambling services.
          </JurisdictionWarning>
        </div>

        <div className="space-y-6">
          {mainBlocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="pt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p
                key={index}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        <nav
          aria-label="Example operator reviews"
          className="flex flex-wrap gap-3 rounded-lg border border-border/60 bg-card p-4"
        >
            <Link
              href="/en/reviews/stake"
              className="text-sm font-medium text-primary underline underline-offset-2"
            >
              Stake review
            </Link>
            <Link
              href="/en/reviews/bcgame"
              className="text-sm font-medium text-primary underline underline-offset-2"
            >
              BC.Game review
            </Link>
            <Link
              href="/en/casinos-crypto"
              className="text-sm font-medium text-primary underline underline-offset-2"
            >
            Crypto casinos ranking
          </Link>
        </nav>

        {faqItems.length > 0 ? (
          <section aria-labelledby="en-guide-faq-heading">
            <h2 id="en-guide-faq-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Frequently asked questions
            </h2>
            <dl className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-lg border border-border/60 bg-card p-4 sm:p-5"
                >
                  <dt className="font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section aria-labelledby="en-guide-related-heading">
          <h2
            id="en-guide-related-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Continue reading
          </h2>
          <nav aria-label="Related guides and reviews" className="mt-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </article>
    </Container>
  );
}
