import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAuthorById } from "@/lib/content";
import { getGlobalGuideBySlug } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";

const GUIDE_PATH = "/en/guides/bitcoin-casinos-in-mexico";
const GUIDE_SLUG = "bitcoin-casinos-in-mexico";

export const metadata: Metadata = buildEnMetadata({
  title: "Bitcoin Casinos in Mexico: How They Work, Advantages and What to Check",
  description:
    "Editorial guide to Bitcoin casinos for Mexico and LATAM readers: deposits, wallets, confirmations, fees, volatility, risks and responsible gambling. Adults 18+.",
  path: GUIDE_PATH,
  type: "article",
  image: "/guides/bitcoin-casinos-in-mexico-en.png",
  languageAlternates: {
    "es-MX": "/guias/casinos-con-bitcoin-mexico",
    en: GUIDE_PATH,
  },
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
  { href: "/en/guides/best-crypto-casinos", label: "Best crypto casinos guide" },
  { href: "/en/reviews/cryptocasino", label: "CryptoCasino.CC review" },
  { href: "/en/reviews/ethcasino", label: "ETH Casino review" },
  { href: "/en/reviews/ltccasino", label: "LTC Casino review" },
  { href: "/en/how-we-review", label: "How we review" },
  { href: "/en/responsible-gambling", label: "Responsible gambling" },
  { href: "/en/affiliate-disclosure", label: "Affiliate disclosure" },
] as const;

const guideSourceReferences: SourceReference[] = [
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible gambling", href: "/en/responsible-gambling" },
  {
    label: "Bitcoin.org — FAQ",
    href: "https://bitcoin.org/en/faq",
  },
  {
    label: "Coinbase — What is Bitcoin?",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin",
  },
  {
    label: "Bitcoin Whitepaper",
    href: "https://bitcoin.org/bitcoin.pdf",
  },
  {
    label: "Operator-published terms, restricted-jurisdiction information and payment/cashier pages",
    note:
      "used where relevant; readers should verify live operator terms before registering.",
  },
  {
    label: "Author profile: Arturs Stoliks on LinkedIn",
    href: "https://www.linkedin.com/in/arturs-stoliks-953555280",
    note: "author/profile proof, not a factual source.",
  },
];

export default function EnBitcoinCasinosInMexicoGuidePage() {
  const guide = getGlobalGuideBySlug(GUIDE_SLUG);
  if (!guide) notFound();

  const author = getAuthorById(guide.authorId);
  if (!author) notFound();

  const { mainBlocks, faqItems } = splitBodyAndFaq(guide.body);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/en" },
    { name: "Guides", path: "/en/guides" },
    { name: guide.title, path: GUIDE_PATH },
  ]);
  const article = articleJsonLd({
    headline: guide.title,
    path: GUIDE_PATH,
    authorName: author.name,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    image: guide.coverImage?.src,
    type: "Article",
    inLanguage: "en",
  });

  return (
    <Container className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
          />
          <div className="relative space-y-3">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">Guide</p>
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {guide.title}
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">{guide.summary}</p>
            <AuthorByline
              author={author}
              publishedAt={guide.publishedAt}
              updatedAt={guide.updatedAt}
              locale="en"
            />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Reviewed by <span className="font-medium text-foreground">JugadaMax Editorial</span>.
            </p>
          </div>
        </header>

        {guide.coverImage ? (
          <div className="aspect-[1200/630] w-full overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
            <Image
              src={guide.coverImage.src}
              alt={guide.coverImage.alt}
              width={guide.coverImage.width ?? 1731}
              height={guide.coverImage.height ?? 909}
              sizes="(max-width: 48rem) 100vw, 48rem"
              className="block h-full w-full object-cover object-center"
              priority
            />
          </div>
        ) : null}

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
            href="/en/reviews/cryptocasino"
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            CryptoCasino.CC review
          </Link>
          <Link
            href="/en/reviews/ethcasino"
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            ETH Casino review
          </Link>
          <Link
            href="/en/reviews/ltccasino"
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            LTC Casino review
          </Link>
          <Link
            href="/en/casinos-crypto"
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            Crypto casinos ranking
          </Link>
        </nav>

        {faqItems.length > 0 ? (
          <section aria-labelledby="en-btc-guide-faq-heading">
            <h2
              id="en-btc-guide-faq-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
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

        <SourceReferenceBlock
          title="Sources & references"
          description="Written by Arturs Stoliks and reviewed by JugadaMax Editorial. LinkedIn is author/profile proof, not a factual source. Operator rules can change, so verify live terms before registering."
          items={guideSourceReferences}
        />

        <section aria-labelledby="en-btc-guide-related-heading">
          <h2
            id="en-btc-guide-related-heading"
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
