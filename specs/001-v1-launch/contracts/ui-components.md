# Contract: UI Components & Page Composition

**Feature**: JugadaMax V1 | **Related**: [plan.md](../plan.md), [spec.md](../spec.md)

Defines the UI contract: which pages exist, which components compose them, and the props/behavior
each key component MUST honor. Components are mobile-first, dark-premium, lightweight-motion only.
(No implementation here — this is the interface contract for `/speckit-tasks`.)

## Routes (App Router)

| Route | Page | Primary content | Spec refs |
|-------|------|-----------------|-----------|
| `/` | Homepage | 11 required sections | FR-001 |
| `/casinos-crypto` | Top Crypto Casinos in Mexico | ranked crypto casinos + comparison | FR-002, FR-009/010 |
| `/casinos-fiat` | Top Fiat Casinos in Mexico | ranked fiat casinos + comparison | FR-003 |
| `/apuestas` | Top Betting Sites in Mexico | ranked sportsbooks + comparison | FR-004 |
| `/reviews/[slug]` | Casino review | verdict, pros/cons, bonus, payments, trust, byline | FR-005, FR-016 |
| `/guias`, `/guias/[slug]` | Guides index + article | list + article template | FR-006 |
| `/noticias`, `/noticias/[slug]` | News index + article | list + article template | FR-006 |
| `/como-evaluamos` | Evaluation methodology | ranking criteria | FR-007, FR-011 |
| `/divulgacion-afiliados` | Affiliate disclosure | disclosure text | FR-007, FR-014 |
| `/juego-responsable` | Responsible gambling (18+) | 18+ + responsible play | FR-007, FR-015 |
| `/acerca-de`, `/contacto` | About / Contact | brand + contact | FR-007 |

## Homepage section contract (in order — FR-001)

1. Hero — brand promise + primary CTA (no autoplay video, no particles).
2. QuickCategories — links to the 3 verticals.
3. Top Crypto Casinos in Mexico (most prominent — SC-010).
4. Top Fiat Casinos in Mexico.
5. Top Betting Sites in Mexico.
6. Bonus/payment highlights.
7. Cómo evaluamos los casinos (methodology preview → `/como-evaluamos`).
8. Guides preview.
9. News preview.
10. Responsible Gambling / Affiliate Disclosure block (18+).
11. Footer.

## Navigation contract (SiteHeader / MobileNav / SiteFooter)

`SiteHeader`, `MobileNav`, and `SiteFooter` MUST expose primary navigation to the following
destinations so every V1 page is reachable via navigation and footer (SC-002, FR-007):

| Label (es-MX) | Destination route |
|---------------|-------------------|
| Crypto Casinos | `/casinos-crypto` |
| Fiat Casinos | `/casinos-fiat` |
| Betting Sites | `/apuestas` |
| Guides | `/guias` |
| News | `/noticias` |
| Reviews | reviews entry point (`/reviews/[slug]` targets; via ranking/review links) |
| Responsible Gambling | `/juego-responsable` |
| Affiliate Disclosure | `/divulgacion-afiliados` |
| Contact | `/contacto` |

- `SiteHeader` + `MobileNav` MUST surface the primary content destinations (Crypto Casinos, Fiat
  Casinos, Betting Sites, Guides, News) and provide access to Reviews (e.g., via the ranking pages
  and casino cards that link to `/reviews/[slug]`).
- `SiteFooter` MUST include all of the above, including the trust/legal links (Responsible Gambling,
  Affiliate Disclosure, Contact) and the evaluation methodology (`/como-evaluamos`).
- All labels render in Spanish (`es-MX`); the table's English labels are for spec traceability only.

## Key component contracts

### `RankingCard`
- **Props**: `casino: Casino`, `vertical: Vertical`, `rank: number`.
- **MUST render**: rank, name/logo, editorial rating (only if present), headline bonus, key payment
  badges, and a primary CTA.
- **MUST**: route CTA through `AffiliateCta`; never fabricate ratings or proof.

### `RankingList`
- **Props**: `casinos: Casino[]`, `vertical: Vertical`.
- **MUST**: preserve `rankByVertical` order; render available entries only (no filler if fewer than
  "top N" — edge case).

### `ComparisonTable`
- **Props**: `casinos: Casino[]`, `vertical: Vertical`, `columns` (rating, bonus, payments, CTA).
- **MUST**: be horizontally usable on mobile (scroll/stack), provide side-by-side comparison
  (FR-010), and link to methodology (FR-011).

### `AffiliateCta` (compliance-critical)
- **Props**: `href?: string`, `label: string`.
- **MUST**: apply `rel="sponsored nofollow"` and `target="_blank"`; when `href` is absent, render a
  disabled/graceful state (no broken link — edge case).
- **MUST**: only appear on pages that also render `AffiliateDisclosure` + `ResponsibleGamblingNotice`
  (FR-014). Enforced by page composition.

### `AffiliateDisclosure` / `ResponsibleGamblingNotice`
- **MUST**: be visible without extra navigation on any page containing affiliate CTAs (FR-014).
- `ResponsibleGamblingNotice` **MUST** state 18+ and MUST NOT be hidden/de-emphasized (FR-015).

### `ReviewHeader` / `ProsCons` / `VerdictBox` / `AuthorByline`
- **MUST**: render consistent review structure from a `Review` record; `AuthorByline` shows author
  name + publish/updated dates (FR-016). Balanced pros AND cons required.

### `ArticleCard` / `ArticleList` / `GuidesPreview` / `NewsPreview`
- **MUST**: show title, summary, author, date; link to the article route.

### `TrustBadge`
- **MUST**: represent only real, verifiable trust signals (emerald styling); no fake certifications.

## Design/behavior invariants (all components)

- Mobile-first; fully usable at small viewport before enhancement (FR-018).
- Palette per Principle I / FR-019; gold for CTAs, emerald for trust, navy/graphite backgrounds.
- Motion lightweight only; respect `prefers-reduced-motion`; no 3D/autoplay/particles (FR-020).
- All user-facing copy in Spanish (`es-MX`) (FR-021).

## Responsive layout invariants (all pages & components)

- **Mobile-first, tablet-safe, desktop-safe**: layouts MUST be built mobile-first and remain correct
  at tablet and desktop widths (FR-028).
- **No horizontal page overflow**: the document/body MUST NOT scroll horizontally at any supported
  width; contain wide content rather than letting it push the page (FR-029).
- **Ranking cards**: MUST reflow/stack cleanly on small screens with no clipping or overlap (FR-030).
- **`ComparisonTable`**: horizontal overflow MUST be confined to the table's own scroll container
  (e.g., an internal overflow wrapper); it MUST NOT cause the page to scroll horizontally (FR-031).
- **Sticky/fixed `SiteHeader`**: MUST NOT cover or obscure content; account for header height for the
  top of pages and in-page anchor targets (e.g., scroll-margin) (FR-032).
- **`AffiliateCta` / primary CTAs**: MUST stay visible and tappable on mobile with an adequate touch
  target and no hover-only behavior (FR-033).
- **Smooth scrolling**: avoid layout thrash / jank on mobile and tablet (FR-034).
- **Validated viewport widths**: 360px, 390px, 430px, 768px, 1024px, 1440px (FR-035).

## Acceptance

- [ ] Every route above renders and is reachable via header/footer navigation (SC-002).
- [ ] Any page with `AffiliateCta` also shows disclosure + 18+ notice (SC-004).
- [ ] Every ranking page shows a comparison view + methodology link (SC-005).
- [ ] Every review/article shows author + date (SC-006).
- [ ] No prohibited/fabricated UI elements present anywhere (SC-007).
- [ ] Every page renders without breakage at 360/390/430/768/1024/1440px: no horizontal page
      overflow, ranking cards intact, comparison-table scroll contained, sticky header not covering
      content, CTAs visible and tappable (SC-011, FR-028–035).
