import type { Metadata } from "next";
import Link from "next/link";
import { getAuthorById } from "@/lib/content";
import { getGlobalCasinoById, getGlobalReviews } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildEnMetadata({
  title: "Crypto Casino Reviews — Global Editorial Coverage",
  description:
    "Independent English reviews of global crypto casinos including Stake and BC.Game. Jurisdiction-aware, adults 18+, no hype.",
  path: "/en/reviews",
});

export default function EnReviewsIndexPage() {
  const reviews = getGlobalReviews();

  return (
    <Container className="py-8">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Crypto Casino Reviews
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Editorial assessments of global crypto operators. Gambling involves risk. Check local laws
          and operator terms before registering.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {reviews.map((review) => {
          const casino = getGlobalCasinoById(review.casinoId);
          const author = getAuthorById(review.authorId);
          const href = `/en/reviews/${review.slug}`;

          return (
            <li key={review.id}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5">
                {casino ? (
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {casino.name} review
                  </p>
                ) : null}
                <h2 className="mt-1 text-lg font-semibold text-foreground">
                  <Link href={href} className="transition-colors hover:text-primary">
                    {review.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {review.verdict}
                </p>
                {author ? (
                  <p className="mt-3 text-xs text-muted-foreground">
                    {author.name}
                    {review.updatedAt ? ` · Updated ${review.updatedAt}` : null}
                  </p>
                ) : null}
                <Link
                  href={href}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2"
                >
                  Read review
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
