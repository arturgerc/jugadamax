import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { SLOTORO_MAIN_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { SlotoroFeaturedCard } from "@/components/affiliate/SlotoroFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "Slotoro availability depends on the player's jurisdiction and the operator's current restricted-country list. Several major markets are restricted. Check local law and live Slotoro terms before registering. Do not use a VPN or false location information.";

const EXTERNAL_RISK_NOTE =
  "Independent assessments are broadly positive on licensing and product breadth, but player-feedback data remains limited and mixed. Bonus conversion rules, wagering, KYC and withdrawal limits should be reviewed before depositing.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Fiat-led multi-currency casino with sportsbook additional" },
  { title: "Welcome", text: "Up to 2,500 + 250 FS across three deposits" },
  { title: "Payments", text: "Cards, e-wallets and Interac; selected crypto where enabled" },
  { title: "Main caution", text: "40x wagering, five-day expiry and withdrawal rules" },
] as const;

const WELCOME_DEPOSITS = [
  {
    label: "First deposit",
    value: "100% up to 500 + 100 FS",
    note: "Minimum deposit 10",
  },
  {
    label: "Second deposit",
    value: "75% up to 500 + 50 FS",
    note: "Or 125% up to 1,000 + 75 FS with higher minimum",
  },
  {
    label: "Third deposit",
    value: "150% up to 1,000 + 75 FS",
    note: "Minimum deposit 25",
  },
] as const;

const BONUS_CONDITION_CARDS = [
  { title: "40x wagering", text: "Applies to cash bonus and free-spin winnings per published bonus terms." },
  { title: "5-day wagering period", text: "Unless specific terms state otherwise for a given promotion." },
  { title: "Maximum conversion: 5x initial deposit", text: "Bonus winnings may be capped relative to the qualifying deposit." },
  { title: "Maximum bonus bet approximately 5", text: "Currency equivalent limits apply during bonus play." },
  { title: "Slots generally contribute 100%", text: "Eligible slot titles may change — verify in live bonus terms." },
  { title: "Live/table/instant games contribute 0%", text: "Table games, live casino and instant formats typically excluded." },
] as const;

const PRODUCT_CARDS = [
  { title: "Slots", text: "Broad slot lobby; the official site markets more than 6,000 titles, but regional catalogues can change." },
  { title: "Live casino", text: "Live dealer tables including roulette and blackjack where providers enable them." },
  { title: "Table games", text: "RNG table and card formats alongside video poker." },
  { title: "Insta / crash games", text: "Instant and crash-style formats subject to regional availability." },
  { title: "Wheel of Fortune", text: "In-product wheel mechanic separate from Royal Piggy partner landing." },
  { title: "Tournaments and loyalty", text: "Seasonal tournaments, loyalty tiers and promotional events." },
  { title: "VIP programme", text: "VIP Space and tiered rewards subject to account activity and terms." },
  { title: "Sportsbook additional", text: "Sports betting is available as an additional product — JugadaMax classifies Slotoro as a fiat casino." },
] as const;

const PAYMENT_CARDS = [
  { title: "Visa / Mastercard", text: "Cards where the cashier supports them; limits vary by country and account." },
  { title: "E-wallets", text: "Skrill, Neteller, MiFinity, Jeton, MuchBetter and AstroPay where enabled." },
  { title: "Interac / bank methods", text: "Interac and bank transfer may appear in supported regions — not universal." },
  { title: "Selected crypto", text: "Bitcoin, Ethereum, USDT and Litecoin may appear as secondary options depending on cashier and country." },
  { title: "KYC", text: "Verification may be required at or above 1,000 USD/EUR and in other risk-based situations." },
  { title: "Withdrawals and limits", text: "Same-method rules, approval windows, low-turnover fees and lifetime-deposit limits may apply." },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Slotoro presents a commercially strong fiat-led casino package: a three-deposit welcome structure marketed as up to 2,500 in bonus value plus up to 250 free spins, alongside Wheel of Fortune, tournaments, VIP Space and a loyalty programme. JugadaMax classifies Slotoro as a fiat / multi-currency casino — sportsbook is available as an additional product but is not the basis for this integration.",
  "The welcome offer is split across three deposits with alternative second-deposit paths and GEO-specific currency presentation. Compact JugadaMax cards intentionally avoid a universal currency symbol because official pages, partner creatives and account cashiers may show USD, EUR or other supported currencies. Always confirm the live offer after redirect.",
  "Bonus rules require careful reading: 40x wagering on bonus and free-spin winnings, a five-day wagering period in published terms, maximum conversion capped at five times the initial deposit and maximum bonus bet limits. Withdrawing before completing wagering forfeits bonus funds and associated winnings. Live casino, table games and instant formats typically contribute 0% toward wagering.",
  "Payment breadth is a positive when methods are available — cards, e-wallets, Interac and selected crypto assets — but routes are not equal in every country. KYC may be triggered at verification thresholds, and withdrawal timing, same-method rules and lifetime-deposit restrictions can affect cashout expectations.",
  "Licence transparency is clearer than many offshore brands: Wiraon B.V. (146886) holds Curaçao licence OGL/2024/686/0183 with Briantie Limited as payment agent. That is not local authorisation in restricted markets. JugadaMax rates Slotoro 4.1/5 as a reviewed secondary international option — treat affiliate links as discovery only, read live terms and never use VPNs or false location data. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Slotoro welcome bonus?",
    answer:
      "The operator markets a three-deposit welcome package presented as up to 2,500 in bonus value plus up to 250 free spins. Currency presentation, caps, eligible games and availability vary by country and account. Confirm the exact offer shown after redirect.",
  },
  {
    question: "How is the Slotoro bonus split across deposits?",
    answer:
      "The first deposit is 100% up to 500 plus 100 free spins (minimum deposit 10). The second deposit offers either 75% up to 500 plus 50 FS or 125% up to 1,000 plus 75 FS with a higher minimum. The third deposit is 150% up to 1,000 plus 75 FS (minimum deposit 25). Alternatives and caps may differ by account.",
  },
  {
    question: "What are the Slotoro wagering requirements?",
    answer:
      "Published bonus terms include 40x wagering on cash bonus and free-spin winnings, a five-day wagering period unless stated otherwise, maximum conversion limits and maximum bonus bet rules. Slots generally contribute 100%; live, table and instant games typically contribute 0%.",
  },
  {
    question: "What is the Royal Piggy wheel?",
    answer:
      "Royal Piggy is a partner promotional landing presenting a variable reward wheel with free-spin prizes up to 250 FS. The actual reward, availability, expiry, wagering and eligibility depend on the landing, account, country and live terms — it does not replace official welcome-package conditions.",
  },
  {
    question: "Does Slotoro support fiat payments?",
    answer:
      "Yes where enabled. Slotoro is positioned as a fiat-led multi-currency casino supporting cards, e-wallets, Interac and traditional currencies in supported regions. Methods and limits vary by jurisdiction and account.",
  },
  {
    question: "Does Slotoro support crypto payments?",
    answer:
      "Selected crypto assets such as Bitcoin, Ethereum, USDT and Litecoin may appear as secondary payment options depending on the cashier and country. Slotoro is not classified as a crypto casino on JugadaMax.",
  },
  {
    question: "Is Slotoro licensed?",
    answer:
      "Slotoro is operated by Wiraon B.V. under Curaçao licence OGL/2024/686/0183. Briantie Limited (HE 385770) acts as payment agent. This is not local authorisation in every market.",
  },
  {
    question: "Which countries are restricted?",
    answer:
      "Official general terms list multiple restricted jurisdictions including the United Kingdom, United States, Australia, Belgium, France, Italy, Spain, Netherlands, Cyprus, Malta, Turkey, Ukraine, Russia and Brazil, among others. The list can change — verify live terms before registering.",
  },
  {
    question: "Does Slotoro require KYC?",
    answer:
      "The official KYC policy applies verification at or above 1,000 USD/EUR and in other risk-based situations. The operator may request identity, payment ownership and address documents before withdrawals.",
  },
  {
    question: "How long do Slotoro withdrawals take?",
    answer:
      "Withdrawal approval windows vary by amount and account status. Low turnover may trigger fees, and a lifetime-deposit rule can limit withdrawals to 5,000 EUR per 30 days in published terms. JugadaMax does not promise fixed payout times.",
  },
  {
    question: "Does Slotoro have a sportsbook?",
    answer:
      "Yes — sportsbook is available as an additional product on the official site. JugadaMax covers Slotoro as a fiat casino only and does not place it on betting rankings or sportsbook surfaces.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Slotoro official homepage", href: "https://slotoro.bet/en" },
  { label: "Slotoro General T&C", href: "https://slotoro.bet/en/terms-and-conditions" },
  { label: "Slotoro Bonus T&C", href: "https://slotoro.bet/en/bonus-terms" },
  { label: "Slotoro KYC Policy", href: "https://slotoro.bet/en/kyc-policy" },
  { label: "Slotoro Responsible Gambling", href: "https://slotoro.bet/en/responsible-gambling" },
  {
    label: "Curaçao certificate — OGL/2024/686/0183",
    href: "https://cert.cga.cw/certificate?id=ZXlKcGRpSTZJa3g2TWpGTmNUQXhaVlpNU0RGM1QyY3pWMjkzV1djOVBTSXNJblpoYkhWbElqb2lRbk5JWXpCVGJtZDRRV05YTWt4T1ozRm5WRmRXVVQwOUlpd2liV0ZqSWpvaU5XUmhaRFV3TldFNVpqUXlOamsyT1RRNE1UbG1NVFUyWXpRM016ZGtaV0kxTkdRNU5qY3dPR1UyTkRrNU1XUTBOVEExWWpVM01XVmxNekUwT0Rnd1lTSXNJblJoWnlJNklpSjk%3D",
    note: "Official operator licence registry entry for Wiraon B.V.",
  },
  {
    label: "Casino Guru Slotoro review",
    href: "https://casino.guru/slotoro-casino-review",
    note: "Third-party safety assessment — not a JugadaMax rating.",
  },
  {
    label: "AskGamblers Slotoro review",
    href: "https://www.askgamblers.com/online-casinos/reviews/slotoro-casino",
    note: "Third-party player-feedback context — not a JugadaMax rating.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
];

export function SlotoroReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
          <JurisdictionWarning>{JURISDICTION_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <SlotoroFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="slotoro-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="slotoro-quick-summary-heading" className="text-lg font-semibold text-foreground">
            Quick summary
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUICK_SUMMARY.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="slotoro-welcome-heading">
          <h2 id="slotoro-welcome-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Three-deposit welcome breakdown
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Currency caps and free-spin titles may vary by country and account. Free spins on the first
            deposit may be credited as 50 per day.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {WELCOME_DEPOSITS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-fuchsia-500/20 bg-[#130020]/80 p-3"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold text-[#F4FF00]">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="slotoro-wheel-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="slotoro-wheel-heading" className="text-lg font-semibold text-foreground">
            Royal Piggy wheel
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Royal Piggy promotional landing with variable wheel rewards. The supplied landing shows
            prizes up to 250 FS, but the actual reward, availability, expiry, wagering and eligibility
            depend on the landing, account, country and live terms.
          </p>
        </section>

        <section aria-labelledby="slotoro-bonus-conditions-heading">
          <h2
            id="slotoro-bonus-conditions-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Bonus conditions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BONUS_CONDITION_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="slotoro-product-heading">
          <h2 id="slotoro-product-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Games and product
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="slotoro-payments-heading">
          <h2 id="slotoro-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Payments
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="slotoro-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="slotoro-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator</dt>
              <dd>Wiraon B.V. — registration number 146886</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Registered address</dt>
              <dd>Korporaalweg 10, Willemstad, Curaçao</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence</dt>
              <dd>Curaçao — OGL/2024/686/0183 (Curaçao Gaming Control Board)</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Payment agent</dt>
              <dd>Briantie Limited — Cyprus registration HE 385770</dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="slotoro-external-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="slotoro-external-heading" className="text-lg font-semibold text-foreground">
            External assessment note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru currently shows a Very High Safety Index, while AskGamblers shows a more
            moderate editorial score and limited mixed player feedback. These third-party scores are not
            JugadaMax ratings. JugadaMax independently assigns 4.1/5.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <section aria-label="Pros and cons">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros and cons</h2>
          <ProsCons pros={review.pros} cons={review.cons} locale="en" />
        </section>

        <section aria-label="Analysis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="slotoro-final-cta-heading"
          className="rounded-xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/8 via-card to-[#130020] p-4 sm:p-5"
        >
          <h2 id="slotoro-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review Slotoro
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the live welcome offer, payment methods, verification rules, restricted-country list
            and withdrawal limits on the official site before depositing.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={SLOTORO_MAIN_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#F4FF00] text-[#080014] transition-colors hover:bg-[#FFE600]",
                focusRing,
              )}
            >
              View Slotoro welcome offer
            </a>
            <Link
              href="/en/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-fuchsia-400/35 px-5 py-2.5 text-sm font-semibold text-fuchsia-200 transition-colors hover:bg-fuchsia-500/10",
                focusRing,
              )}
            >
              Compare fiat casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="slotoro-faq-heading">
          <h2 id="slotoro-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-4 py-1 sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SourceReferenceBlock
          title="Sources & references"
          description="Official operator sources, third-party assessments and JugadaMax editorial methodology. Third-party reviews inform caution — they are not JugadaMax ratings."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="View"
        compactSecondaryLabel="Compare"
        primaryLabel="View Slotoro"
        primaryHref={SLOTORO_MAIN_AFFILIATE_URL}
        secondaryLabel="Compare"
        secondaryHref="/en/casinos-fiat"
      />
    </>
  );
}
