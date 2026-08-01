import type { Article } from "@/types/content";

/**
 * English news articles (Article with type "news", locale "en").
 * Adapted from Spanish content/news/index.ts — no invented facts.
 */
export const globalNews: Article[] = [
  {
    id: "news-en-bonus-promotion-changes",
    slug: "how-to-read-bonus-promotion-changes",
    type: "news",
    title:
      "How to Read Bonus and Promotion Changes Without Falling for Artificial Urgency",
    summary:
      "Editorial analysis for telling a real terms change from scarcity marketing. Includes reading criteria and links to JugadaMax methodology and affiliate disclosure.",
    body: [
      "In iGaming media and bonus directories it is common to see “last chance” language, countdown-style framing or striking figures. At JugadaMax we treat those messages with caution: a promotion change is useful only if you can verify the live operator text and understand wagering, eligibility and limits.",
      "Our public methodology explains that rankings and reviews are editorial assessments and may be commercially influenced through affiliate agreements. That is why affiliate disclosure is not a minor detail: when a registration link or promo code appears, it must be clear that compensation may exist.",
      "When we publish a note about bonuses or update the /en/bonuses directory, the goal is not to manufacture urgency. If an offer appears as active, variable or pending verification, that label reflects the editorial register — not an operator guarantee.",
      "If you see a bonus announcement — on JugadaMax or elsewhere — it helps to cross-check: (1) the text on the operator, (2) deposit and play requirements, (3) geographic or account restrictions, and (4) whether the message mixes verifiable fact with commercial opinion. When in doubt, do not deposit.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["bonuses", "analysis", "affiliates"],
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    locale: "en",
    newsKind: "analisis",
    newsCategory: "bonos",
    featured: true,
    keyPoints: [
      "Bonus changes should be confirmed on the operator; urgency marketing is not evidence.",
      "JugadaMax separates editorial assessment from commercial messaging and discloses affiliation when it applies.",
      "Bonus-directory labels are editorial status, not a payment or availability guarantee.",
      "Before depositing, review wagering, limits, eligibility and published restrictions.",
    ],
    sources: [
      {
        label: "How we review casinos and sportsbooks",
        url: "https://jugadamax.com/en/how-we-review",
        publisher: "JugadaMax",
        note: "Public editorial methodology for the English site.",
      },
      {
        label: "Affiliate disclosure",
        url: "https://jugadamax.com/en/affiliate-disclosure",
        publisher: "JugadaMax",
        note: "Transparency policy for commercial links.",
      },
      {
        label: "Responsible gambling",
        url: "https://jugadamax.com/en/responsible-gambling",
        publisher: "JugadaMax",
        note: "Resources and age limits (18+).",
      },
    ],
    relatedLinks: [
      { label: "Bonuses directory", href: "/en/bonuses" },
      { label: "How we review", href: "/en/how-we-review" },
      { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
      { label: "Guides", href: "/en/guides" },
    ],
    authorComment: {
      heading: "Editorial note",
      body: "This analysis does not describe a specific bonus and does not invent amounts, expiry dates or conversion rates. If we later report a promotion change for an operator, we will cite the source and avoid fabricated countdowns or scarcity.",
    },
    coverImage: {
      src: "/editorial/news/bonus-promotions-analysis-2026-en.png",
      alt: "Editorial analysis of welcome bonuses, terms and conditions, wagering and expiry",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "news-en-mexico-regulation-world-cup-2026",
    slug: "mexico-gambling-regulation-world-cup-2026",
    type: "news",
    title:
      "Before the 2026 World Cup, Industry Warned Mexico’s Gambling Reform Was Still Pending",
    summary:
      "In April 2026, iGaming Business reported that industry representatives were pressing Mexico to modernise its federal gambling framework and considered a completed reform unlikely before the World Cup began. Reported facts from that source, separated from JugadaMax editorial commentary (23 July 2026).",
    body: [
      "In April 2026, iGaming Business reported that industry representatives were pressing Mexico to modernise its gambling framework before the FIFA World Cup. The report — published on 20 April 2026 — argued that a completed reform was unlikely to be in place before the tournament began in June.",
      "In that same coverage, Miguel Ángel Ochoa Sánchez, president of the Mexican Association of Licensees, Operators and Suppliers of the Entertainment and Betting Industry (AIEJA), said at the time that the market was “under-regulated”, especially online, and that the sector was still waiting for a final version of the bill advanced after President Sheinbaum’s December 2024 public statement on the need for a new Federal Law on Games and Lotteries.",
      "Timeline judgement and reform-probability assessment belong to that April iGaming Business report; JugadaMax does not invent legislative approval dates and does not convert the pre-tournament prediction into a confirmed post-tournament fact. This editorial note is published on 23 July 2026, after the FIFA World Cup 2026 closed (11 June–19 July 2026), and revisits what the source warned before the championship.",
      "For readers in Mexico, the practical point remains not to anticipate a law that does not yet exist, but to understand that availability, permits, taxes and operator conditions can change with jurisdiction and public policy. Any registration or deposit should be made only on sites whose legality and terms you can verify yourself.",
    ].join("\n\n"),
    authorId: "arturs-stoliks",
    tags: ["regulation", "mexico", "world-cup-2026"],
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    locale: "en",
    newsKind: "noticia-opinion",
    newsCategory: "regulacion",
    featured: true,
    factLabel: "Reported facts",
    opinionLabel: "Editorial commentary",
    keyPoints: [
      "The 20 April 2026 iGaming Business report warned of industry pressure to modernise gambling regulation in Mexico before the World Cup.",
      "At that time, AIEJA described the online market as under-regulated and still waiting for a final bill text.",
      "The same source considered an updated framework ready before the tournament’s June 2026 start unlikely.",
      "JugadaMax does not assert the post-World Cup legislative status and does not invent official Congress timelines; this note is published on 23 July 2026.",
    ],
    sources: [
      {
        label:
          "Pressure mounting for Mexico to modernise its gambling regulation",
        url: "https://igamingbusiness.com/legal-compliance/regulation/industry-pressure-mounting-mexico-modernise-gambling-regulation/",
        publisher: "iGaming Business",
        note: "Published 20 April 2026. Pre-World Cup industry coverage of pending reform and statements attributed to AIEJA.",
      },
      {
        label: "FIFA World Cup 2026™ — Canada, Mexico and United States",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026",
        publisher: "FIFA",
        note: "Confirmation of the joint tournament (11 June–19 July 2026); does not imply a new Mexican regulatory framework.",
      },
    ],
    relatedLinks: [
      { label: "Sports betting sites", href: "/en/betting" },
      { label: "How we review operators", href: "/en/how-we-review" },
      { label: "Responsible gambling", href: "/en/responsible-gambling" },
    ],
    authorComment: {
      heading: "Comment from Arturs Stoliks",
      body: "My editorial reading is cautious: the April 2026 coverage documents an industry warning before the World Cup, not a post-tournament verdict. Until a clear, current framework can be verified, players in Mexico should prioritise terms, payments and risk — not promises of a “modern market”. A World Cup can increase attention on betting, but it does not automatically make an operator safe or authorised. At JugadaMax we will keep labelling opinion versus facts and update content only when there are verifiable sources.",
    },
    coverImage: {
      src: "/editorial/news/regulacion-juegos-mexico-mundial-2026.png",
      alt: "Gambling regulation, sports betting and the 2026 World Cup in Mexico",
      width: 1672,
      height: 941,
    },
  },
  {
    id: "news-en-jugadamax-methodology",
    slug: "jugadamax-editorial-review-methodology",
    type: "news",
    title: "JugadaMax Publishes Its Editorial Review Methodology",
    summary:
      "You can now read the criteria we use to evaluate and order casinos and sportsbooks on JugadaMax.",
    body: [
      "JugadaMax has published its methodology page, where we explain how we evaluate and order the operators that appear on the site.",
      "Our rankings reflect an editorial assessment and may be commercially influenced through affiliate agreements; that is why we disclose this information openly.",
      "You can read the full criteria in How we review. We will continue updating coverage of crypto casinos, fiat casinos and sports betting for global and Mexico-facing readers.",
    ].join("\n\n"),
    authorId: "redaccion-jugadamax",
    tags: ["announcement"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    locale: "en",
    newsKind: "anuncio",
    newsCategory: "jugadamax",
    featured: false,
    keyPoints: [
      "JugadaMax editorial methodology is public at /en/how-we-review.",
      "Rankings are editorial assessments and may carry disclosed commercial influence.",
      "Coverage continues across crypto, fiat and sports betting.",
    ],
    relatedLinks: [
      { label: "How we review", href: "/en/how-we-review" },
      { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
      { label: "Reviews", href: "/en/reviews" },
    ],
    coverImage: {
      src: "/editorial/news/metodologia-evaluacion-jugadamax.png",
      alt: "JugadaMax editorial methodology for evaluation and comparison",
      width: 1672,
      height: 941,
    },
  },
];
