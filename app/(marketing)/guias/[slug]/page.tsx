import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, getAuthorById } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";
import { cn, focusRing } from "@/lib/utils";

const GUIDE_RELATED_READING: Record<string, { href: string; label: string }[]> = {
  "casinos-no-kyc-mexico": [
    { href: "/reviews/cryptocasino", label: "CryptoCasino.CC" },
    { href: "/reviews/ethcasino", label: "ETH Casino" },
    { href: "/reviews/ltccasino", label: "LTC Casino" },
    { href: "/reviews/bitcasino", label: "Bitcasino.io" },
    { href: "/casinos-crypto", label: "Ver casinos crypto" },
  ],
  "casinos-con-usdt-mexico": [
    { href: "/reviews/bitcasino", label: "Bitcasino.io" },
    { href: "/reviews/cryptocasino", label: "CryptoCasino.CC" },
    { href: "/reviews/ethcasino", label: "ETH Casino" },
    { href: "/reviews/ltccasino", label: "LTC Casino" },
    { href: "/casinos-crypto", label: "Ver casinos crypto" },
  ],
  "casinos-con-bitcoin-mexico": [
    { href: "/reviews/bitcasino", label: "Bitcasino.io" },
    { href: "/reviews/cryptocasino", label: "CryptoCasino.CC" },
    { href: "/reviews/ethcasino", label: "ETH Casino" },
    { href: "/reviews/ltccasino", label: "LTC Casino" },
    { href: "/guias/casinos-con-usdt-mexico", label: "Casinos con USDT" },
    { href: "/casinos-crypto", label: "Ver casinos crypto" },
  ],
};

const GUIDE_SOURCE_LINKS: Record<string, { label: string; url: string }[]> = {
  "casinos-con-usdt-mexico": [
    {
      label: "Tether Transparency",
      url: "https://tether.to/en/transparency/",
    },
    {
      label: "Coinbase — What is a stablecoin?",
      url: "https://www.coinbase.com/learn/crypto-basics/what-is-a-stablecoin",
    },
  ],
  "casinos-con-bitcoin-mexico": [
    {
      label: "Bitcoin.org — FAQ",
      url: "https://bitcoin.org/en/faq",
    },
    {
      label: "Coinbase — What is Bitcoin?",
      url: "https://www.coinbase.com/learn/crypto-basics/what-is-bitcoin",
    },
    {
      label: "Bitcoin Whitepaper",
      url: "https://bitcoin.org/bitcoin.pdf",
    },
  ],
};

function renderGuideBlock(paragraph: string, index: number) {
  if (paragraph.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="border-l-2 border-primary/60 pl-3 text-lg font-bold tracking-tight text-foreground sm:text-xl"
      >
        {paragraph.slice(3)}
      </h2>
    );
  }

  if (paragraph.startsWith("### ")) {
    return (
      <h3 key={index} className="text-base font-semibold text-foreground sm:text-lg">
        {paragraph.slice(4)}
      </h3>
    );
  }

  return (
    <p key={index} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
      {paragraph}
    </p>
  );
}

export function generateStaticParams() {
  return getArticles("guide").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("guide", slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/guias/${article.slug}`,
    type: "article",
  });
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug("guide", slug);
  if (!article) notFound();

  const author = getAuthorById(article.authorId);
  if (!author) notFound();

  const paragraphs = article.body.split("\n\n").filter(Boolean);
  const relatedReading = GUIDE_RELATED_READING[slug];
  const sourceLinks = GUIDE_SOURCE_LINKS[slug];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
    { name: article.title, path: `/guias/${article.slug}` },
  ]);

  const jsonLd = articleJsonLd({
    headline: article.title,
    path: `/guias/${article.slug}`,
    authorName: author.name,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    type: "Article",
  });

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Guía</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {article.title}
          </h1>
          <p className="text-muted-foreground">{article.summary}</p>
          <AuthorByline
            author={author}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
          />
        </header>

        {article.coverImage ? (
          <div className="aspect-[1200/630] w-full overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              width={article.coverImage.width}
              height={article.coverImage.height}
              className="block h-full w-full object-cover object-center"
              decoding="async"
            />
          </div>
        ) : null}

        <div className="space-y-5">{paragraphs.map(renderGuideBlock)}</div>

        {sourceLinks ? (
          <section
            aria-labelledby="source-links-heading"
            className="rounded-xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <h2
              id="source-links-heading"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Fuentes y lecturas
            </h2>
            <ul className="mt-4 space-y-2">
              {sourceLinks.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-2 hover:underline",
                      focusRing,
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {relatedReading ? (
          <section
            aria-labelledby="related-reading-heading"
            className="rounded-xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <h2
              id="related-reading-heading"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Lecturas relacionadas
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {relatedReading.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary",
                      focusRing,
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
