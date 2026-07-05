import type { Metadata } from "next";
import Link from "next/link";
import { getGlobalCasinosByVertical, getGlobalReviews } from "@/lib/content/global";
import { buildEnMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";

export const metadata: Metadata = buildEnMetadata({
  title: "Best Crypto Casinos — Global Reviews & Payment Guides",
  description:
    "Editorial ranking of global crypto casinos with jurisdiction-aware reviews, payment notes and responsible gambling information. Adults 18+.",
  path: "/en/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-crypto",
    en: "/en/casinos-crypto",
  },
});

function uniqueCryptoPayments(casinos: ReturnType<typeof getGlobalCasinosByVertical>) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "crypto") names.add(p.name);
    }
  }
  return [...names];
}

export default function EnCryptoCasinosPage() {
  const casinos = getGlobalCasinosByVertical("crypto-casino");
  const reviews = getGlobalReviews();
  const reviewSlugByCasinoId = Object.fromEntries(reviews.map((r) => [r.casinoId, r.slug]));
  const cryptoPayments = uniqueCryptoPayments(casinos);

  return (
    <Container className="py-8 sm:py-10">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Best Crypto Casinos — Global Reviews
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Editorial comparison of crypto casinos for international readers. We assess payments,
            licensing information published by operators, and user experience — without hype or
            guaranteed outcomes.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Page focus">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Bitcoin · Ethereum · USDT
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Editorial review
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosureEn />
        <ResponsibleGamblingNoticeEn />
        <JurisdictionWarning>
          Availability varies by jurisdiction. Check local laws and official operator terms before
          registering. Do not use VPNs or false location data to access restricted services.
        </JurisdictionWarning>
      </div>

      <section aria-label="Global crypto casino ranking" className="mb-6">
        <RankingList
          casinos={casinos}
          vertical="crypto-casino"
          market="global"
          locale="en"
          reviewBasePath="/en/reviews"
          reviewSlugByCasinoId={reviewSlugByCasinoId}
          emptyMessage="Global operator coverage coming soon."
          reviewLabel="Read review"
          topRankLabel="Editorial pick"
        />
      </section>

      <section aria-labelledby="en-comparison-heading" className="mb-12">
        <h2 id="en-comparison-heading" className="text-xl font-bold text-foreground sm:text-2xl">
          Comparison table
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Summary of operators and payment methods. Affiliate CTAs appear only when approved links
          are configured.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable
            casinos={casinos}
            vertical="crypto-casino"
            market="global"
            locale="en"
            reviewBasePath="/en/reviews"
            reviewSlugByCasinoId={reviewSlugByCasinoId}
            reviewLabel="Read review"
            visitLabel="Visit"
            methodologyHref="/en/how-we-review"
            methodologyLabel="How we review"
          />
        </div>
      </section>

      {cryptoPayments.length > 0 ? (
        <section
          aria-labelledby="en-payments-heading"
          className="mb-12 rounded-lg border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="en-payments-heading" className="text-lg font-semibold text-foreground">
            Payment methods in this ranking
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {cryptoPayments.join(", ")} — confirm networks, fees and limits on each operator&apos;s
            official site.
          </p>
        </section>
      ) : null}

      <div className="space-y-12">
        <section aria-labelledby="en-methodology-heading">
          <h2
            id="en-methodology-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            How we choose crypto casinos
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            JugadaMax publishes editorial rankings — not neutral facts or user score aggregates. We
            assess each operator against the criteria below and update coverage when official terms
            change. Our reviews do not guarantee operator safety, payouts or account outcomes.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 sm:text-base">
            <li>Jurisdiction and official terms published by the operator.</li>
            <li>Payment methods, supported networks, limits and stated processing information.</li>
            <li>Licensing and corporate information the operator discloses.</li>
            <li>User experience: site navigation, game catalogue and support channels.</li>
            <li>Transparency of bonuses and promotions without fabricated urgency.</li>
            <li>Responsible gambling messaging and account controls where visible.</li>
            <li>Verification and account rules as described in operator policies.</li>
          </ul>
          <Link
            href="/en/how-we-review"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2"
          >
            Read our full methodology
          </Link>
        </section>

        <section aria-labelledby="en-stake-bcgame-heading">
          <h2
            id="en-stake-bcgame-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Stake vs BC.Game: quick comparison
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Both brands appear in our global crypto ranking. Neither is presented as universally
            available — always check official terms for your jurisdiction before registering.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">Stake</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Strong brand recognition in crypto iGaming.</li>
                <li>Crypto casino and sportsbook under one platform.</li>
                <li>Broad international presence, but many restricted jurisdictions.</li>
                <li>Payments include major cryptocurrencies; networks and limits vary.</li>
              </ul>
              <Link
                href="/en/reviews/stake"
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-2"
              >
                Read Stake review
              </Link>
            </article>
            <article className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">BC.Game</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Crypto-native platform with a broad token list.</li>
                <li>Provably fair games and crypto-first product focus.</li>
                <li>Availability and verification requirements vary by jurisdiction.</li>
                <li>Payment options and limits depend on official operator terms.</li>
              </ul>
              <Link
                href="/en/reviews/bcgame"
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-2"
              >
                Read BC.Game review
              </Link>
            </article>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            We do not claim either operator is better for every user. Compare official terms,
            supported payments and restrictions before choosing.
          </p>
        </section>

        <section aria-labelledby="en-crypto-payments-heading">
          <h2
            id="en-crypto-payments-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Crypto payment methods
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Crypto casinos in this ranking commonly support Bitcoin, Ethereum, USDT and Litecoin.
            Using crypto for gambling carries technical and financial risks beyond standard gambling
            risk.
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">Bitcoin (BTC)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Widely accepted. Confirmations can take longer during network congestion. Fees vary
                with mempool activity. Always send on the Bitcoin network — not a wrapped or
                alternate chain unless explicitly supported.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">Ethereum (ETH)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Common for deposits and withdrawals. Gas fees fluctuate. Some operators support
                ERC-20 tokens — verify the exact contract and network on the operator&apos;s deposit
                page before sending.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">Tether (USDT)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Stablecoin option, but network choice matters: ERC-20, TRC-20, BEP-20 and others are
                not interchangeable. Sending USDT on the wrong network can result in lost funds.
                Check which network the operator expects.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <h3 className="font-semibold text-foreground">Litecoin (LTC)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Often used for faster confirmation times than Bitcoin on some networks. Still verify
                address format and minimum deposit amounts on the official site.
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong className="font-medium text-foreground">Network selection:</strong> match the
              exact chain shown on the operator deposit screen.
            </li>
            <li>
              <strong className="font-medium text-foreground">Fees and confirmations:</strong>{" "}
              blockchain fees and processing times are not controlled by JugadaMax or operators in
              all cases.
            </li>
            <li>
              <strong className="font-medium text-foreground">Withdrawal limits:</strong> minimums,
              maximums and review periods are set by each operator.
            </li>
            <li>
              <strong className="font-medium text-foreground">Wallet accuracy:</strong> double-check
              every character in deposit and withdrawal addresses.
            </li>
            <li>
              <strong className="font-medium text-foreground">Volatility risk:</strong> crypto values
              can change between deposit, play and withdrawal — this is separate from gambling
              outcomes.
            </li>
          </ul>
        </section>

        <section aria-labelledby="en-jurisdiction-heading">
          <h2
            id="en-jurisdiction-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Jurisdiction, verification and account rules
          </h2>
          <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 sm:p-6">
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <li>
                Availability depends on your jurisdiction and each operator&apos;s official terms —
                not on affiliate marketing pages.
              </li>
              <li>Check local laws before registering or depositing.</li>
              <li>
                Operators may request identity verification (KYC) at registration, deposit or
                withdrawal — policies vary and can change.
              </li>
              <li>
                Do not use VPNs or false location information to access restricted services.
              </li>
              <li>
                A crypto casino is not the same as anonymous or risk-free gambling. You can still
                lose funds, face account restrictions or encounter payment delays.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="en-bonuses-heading">
          <h2
            id="en-bonuses-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Bonuses and promotions
          </h2>
          <div className="mt-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Welcome offers, reload bonuses and promotions are marketing tools — not guaranteed
              profit. We do not publish specific bonus amounts on this page because terms change
              frequently and vary by jurisdiction.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
              <li>Wagering requirements may apply before bonus funds can be withdrawn.</li>
              <li>Expiry dates, maximum bet rules and game weightings can restrict how bonuses work.</li>
              <li>Some games may be excluded or contribute less toward wagering.</li>
              <li>Read official terms on the operator&apos;s site before opting in.</li>
              <li>No bonus removes gambling risk. 18+ only.</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="en-faq-heading">
          <h2
            id="en-faq-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-5 space-y-5">
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                Are crypto casinos available everywhere?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No. Most major crypto casino brands restrict certain countries and regions. Always
                check the operator&apos;s official terms and your local laws before registering.
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                Can I use Bitcoin or USDT at crypto casinos?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Stake and BC.Game in our ranking commonly support Bitcoin and USDT among other
                tokens, but supported assets and networks depend on the operator and your account
                settings. Confirm on the official deposit page before sending funds.
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                Is a crypto casino the same as no-KYC?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No. Accepting cryptocurrency does not mean an operator skips verification. Many
                brands request KYC at deposit, withdrawal or under compliance triggers. Do not
                assume anonymous play.
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                How does JugadaMax rank crypto casinos?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We apply editorial criteria including jurisdiction clarity, payments, licensing
                information, user experience, bonus transparency and responsible gambling messaging.
                Rankings reflect our editorial judgement, not user vote totals or guaranteed safety.
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                Why do Stake and BC.Game appear on this page?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                They are among the crypto casino brands we currently cover with full English
                reviews. Inclusion reflects editorial coverage — not a claim that either is right
                for every user or jurisdiction. Some links may be affiliate links with sponsored
                attributes.
              </dd>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <dt className="font-semibold text-foreground">
                Do crypto casinos guarantee faster withdrawals?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No. Crypto can reduce certain banking steps, but operators still apply review
                periods, limits and verification checks. Network congestion and incorrect addresses
                can also delay or prevent withdrawals. Nothing guarantees instant payouts.
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="en-related-heading">
          <h2
            id="en-related-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Continue reading
          </h2>
          <nav aria-label="Related guides and reviews" className="mt-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              <li>
                <Link
                  href="/en/reviews/stake"
                  className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                >
                  Stake review
                </Link>
              </li>
              <li>
                <Link
                  href="/en/reviews/bcgame"
                  className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                >
                  BC.Game review
                </Link>
              </li>
              <li>
                <Link
                  href="/en/guides/best-crypto-casinos"
                  className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                >
                  Best crypto casinos guide
                </Link>
              </li>
              <li>
                <Link
                  href="/en/how-we-review"
                  className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                >
                  How we review
                </Link>
              </li>
              <li className="sm:col-span-2">
                <Link
                  href="/en/responsible-gambling"
                  className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                >
                  Responsible gambling
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </Container>
  );
}
