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

## Acceptance

- [ ] Every route above renders and is reachable via header/footer navigation (SC-002).
- [ ] Any page with `AffiliateCta` also shows disclosure + 18+ notice (SC-004).
- [ ] Every ranking page shows a comparison view + methodology link (SC-005).
- [ ] Every review/article shows author + date (SC-006).
- [ ] No prohibited/fabricated UI elements present anywhere (SC-007).
