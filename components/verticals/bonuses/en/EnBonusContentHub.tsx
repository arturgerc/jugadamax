import Link from "next/link";

import {

  BONUS_SURFACES,

  sectionHeadingClassName,

} from "@/components/verticals/bonuses/bonus-visual";

import { cn, focusRing } from "@/lib/utils";



const REVIEW_LINKS = [

  { href: "/en/reviews/betsson", label: "Betsson Mexico review" },

  { href: "/en/reviews/xonbet", label: "XON.BET review" },

  { href: "/en/reviews/slotoro", label: "Slotoro review" },

  { href: "/en/reviews/1xbet", label: "1xBet review" },

  { href: "/en/reviews/mostbet", label: "Mostbet review" },

  { href: "/en/reviews/melbet", label: "Melbet review" },

  { href: "/en/reviews", label: "All English reviews" },

] as const;



const GUIDE_LINKS = [

  {

    href: "/en/guides/best-crypto-casinos",

    title: "Best crypto casinos guide",

    summary: "How to compare crypto operators, payments and jurisdiction limits.",

  },

  {

    href: "/en/how-we-review",

    title: "How we review",

    summary: "Editorial methodology, affiliate disclosure and responsible gambling.",

  },

  {

    href: "/en/casinos-fiat",

    title: "Fiat & multi-currency casinos",

    summary: "Mexico-facing and international fiat rankings including XON.BET and Slotoro.",

  },

  {

    href: "/en/casinos-crypto",

    title: "Crypto casinos ranking",

    summary: "Crypto-first operators, payments and no-KYC cross-links.",

  },

] as const;



/**

 * Bonus content hub — news, guides, and full English reviews (3-column desktop).

 */

export function EnBonusContentHub() {

  return (

    <section

      id="bonus-hub"

      aria-labelledby="bonus-hub-heading"

      className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"

    >

      <div className={BONUS_SURFACES.editorialShell}>

        <div

          aria-hidden="true"

          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_55%)]"

        />

        <div className="relative p-3.5 sm:p-5 lg:p-6">

          <div className="max-w-3xl space-y-1">

            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sky-300/90">

              Editorial content

            </p>

            <h2 id="bonus-hub-heading" className={sectionHeadingClassName()}>

              News, guides and bonus-related reviews

            </h2>

            <p className="text-sm text-muted-foreground sm:text-base">

              Read methodology, rankings and full English reviews before accepting a promotion.

            </p>

          </div>



          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">

            <div className="rounded-xl border border-sky-500/15 bg-[#0d1520]/70 p-3.5 sm:p-4">

              <h3 className="text-sm font-semibold text-foreground sm:text-base">

                News & updates

              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

                English news coverage is being prepared. Read current editorial updates,

                methodology and operator changes in the English news section.

              </p>

              <Link

                href="/en/news"

                className={cn(

                  "mt-3 inline-flex min-h-11 items-center text-sm font-medium text-sky-200 underline-offset-2 hover:underline",

                  focusRing,

                )}

              >

                View news →

              </Link>

            </div>



            <div className="rounded-xl border border-sky-500/15 bg-[#0d1520]/70 p-3.5 sm:p-4">

              <h3 className="text-sm font-semibold text-foreground sm:text-base">

                Guides and rankings

              </h3>

              <ul className="mt-3 space-y-1.5">

                {GUIDE_LINKS.map((item) => (

                  <li key={item.href}>

                    <Link

                      href={item.href}

                      className={cn(

                        "block rounded-lg border border-transparent px-2 py-2 transition-colors duration-150 hover:border-sky-400/20 hover:bg-sky-500/[0.06]",

                        focusRing,

                      )}

                    >

                      <span className="text-sm font-medium text-foreground">

                        {item.title}

                        <span aria-hidden="true" className="ml-1 text-sky-300/70">

                          →

                        </span>

                      </span>

                      <span className="mt-0.5 block text-xs text-muted-foreground">

                        {item.summary}

                      </span>

                    </Link>

                  </li>

                ))}

              </ul>

            </div>



            <div className="rounded-xl border border-sky-500/15 bg-[#0d1520]/70 p-3.5 sm:p-4">

              <h3 className="text-sm font-semibold text-foreground sm:text-base">

                Full reviews

              </h3>

              <ul className="mt-3 space-y-1.5">

                {REVIEW_LINKS.map((item) => (

                  <li key={item.href}>

                    <Link

                      href={item.href}

                      className={cn(

                        "block rounded-lg border border-transparent px-2 py-2 text-sm font-medium text-foreground transition-colors duration-150 hover:border-sky-400/20 hover:bg-sky-500/[0.06]",

                        focusRing,

                      )}

                    >

                      {item.label}

                      <span aria-hidden="true" className="ml-1 text-sky-300/70">

                        →

                      </span>

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
