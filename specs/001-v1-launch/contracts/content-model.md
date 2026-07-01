# Contract: Content Model & Loader Interface

**Feature**: JugadaMax V1 | **Related**: [data-model.md](../data-model.md)

Defines the interface that content collections and their loaders MUST satisfy. This is the internal
"data contract" for a file-based content site (no external API in V1). Types are illustrative
(final field-level details live in `types/` at implementation time).

## Collections

| Collection | Location | Record type | Route(s) it feeds |
|------------|----------|-------------|-------------------|
| casinos | `content/casinos/*` | `Casino` | ranking pages, review pages, homepage sections |
| bonuses | `content/bonuses/*` | `Bonus` | bonus/payment highlights, review pages |
| authors | `content/authors/*` | `Author` | bylines on reviews/articles |
| reviews | `content/reviews/*` | `Review` | `reviews/[slug]` |
| guides | `content/guides/*` | `Article` (type `guide`) | `guias`, `guias/[slug]` |
| news | `content/news/*` | `Article` (type `news`) | `noticias`, `noticias/[slug]` |

## Loader contract (`lib/content`)

Loaders MUST be synchronous or build-time async, pure, and validated:

```ts
getCasinos(): Casino[]
getCasinoBySlug(slug: string): Casino | undefined
getCasinosByVertical(vertical: Vertical): Casino[]   // sorted by rankByVertical[vertical] asc
getBonusesForCasino(casinoId: string): Bonus[]
getAuthorById(id: string): Author | undefined
getReviews(): Review[]
getReviewBySlug(slug: string): Review | undefined
getArticles(type?: ArticleType): Article[]           // sorted by publishedAt desc
getArticleBySlug(type: ArticleType, slug: string): Article | undefined
```

**Guarantees**:
- All returned records are schema-valid (see Validation below) or the build FAILS loudly.
- Referential integrity: every `casinoId`/`authorId`/`bonusId` reference resolves; unresolved
  references FAIL the build (prevents broken pages).
- `getCasinosByVertical` returns a deterministic order from `rankByVertical` (FR-009, FR-011).
- Missing optional fields never throw; consumers render graceful fallbacks (spec edge cases).

## Validation

Each collection MUST be validated at load/build time (e.g., zod or equivalent) against the
`data-model.md` rules. Validation MUST enforce:
- Closed enums (`Vertical`, `BonusType`, `PaymentKind`, `ArticleType`, `Locale`).
- Non-empty `verticals`; `rankByVertical` keys ⊆ `verticals`; unique ranks per vertical.
- `rating` ∈ [0, 5]; ISO dates parse; required fields present.
- Review `pros`/`cons` non-empty (balanced, honest content).

## Integrity / authenticity rules (Principle V)

- No record may encode fabricated winners, testimonials, payout screenshots, social-proof counts,
  or urgency/countdown values.
- `Casino.rating`/`Review.rating` are editorial and MUST be tied to an authored Review; loaders
  MUST NOT synthesize or aggregate ratings.

## Acceptance

- [ ] Build fails on any invalid record or unresolved reference.
- [ ] `getCasinosByVertical` output order matches `rankByVertical`.
- [ ] Adding a new casino/bonus/author/review/article file requires no loader changes (FR-025).
