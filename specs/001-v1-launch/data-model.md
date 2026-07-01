# Phase 1 Data Model: JugadaMax V1 Launch

**Feature**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Date**: 2026-07-01

This model describes the content entities for V1. It is storage-agnostic (V1 implements it as typed
file-based content under `content/` with loaders in `lib/content`), and is designed so new
operators, bonuses, authors, and reviews are added without schema redesign (FR-025..FR-027).

Conventions: `id`/`slug` are stable identifiers; relationships are by id/slug reference; enums are
closed sets; optional fields degrade gracefully in the UI (edge cases in spec).

## Enumerations

- **Vertical**: `crypto-casino` | `fiat-casino` | `sportsbook`
  - A single operator MAY belong to multiple verticals (FR-026).
- **Locale**: `es-MX` (only value in V1; field exists for LATAM readiness — FR-021).
- **BonusType**: `welcome` | `deposit-match` | `no-deposit` | `free-bet` | `cashback` | `reload` | `other`
- **PaymentKind**: `crypto` | `fiat`
- **ArticleType**: `guide` | `news`

## Entity: Casino / Operator

Represents a gambling operator that can appear in one or more vertical rankings.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable unique id |
| `slug` | string | yes | URL-safe; used for review route `reviews/[slug]` |
| `name` | string | yes | Brand name |
| `logo` | ImageRef | no | Local optimized asset reference |
| `verticals` | Vertical[] | yes | ≥1; controls which ranking pages list it (FR-026) |
| `rating` | number (0–5, 1 decimal) | no | JugadaMax **editorial** rating; author-attributed via a Review; never presented as aggregated (Principle V) |
| `rankByVertical` | Record<Vertical, number> | yes | Per-vertical rank position; source of ranking order (FR-009, FR-011) |
| `payments` | PaymentMethod[] | no | Supported deposit/withdrawal methods |
| `licensing` | TrustInfo | no | License/regulator notes, trust signals (real only) |
| `bonusIds` | string[] | no | References to Bonus records (FR-013) |
| `affiliateUrl` | string (URL) | no | Outbound affiliate destination; if absent, CTA degrades gracefully |
| `establishedYear` | number | no | Optional fact |
| `summary` | string | no | Short description for cards |
| `locale` | Locale | yes | `es-MX` in V1 |

**Validation rules**:
- `verticals` non-empty; each value in the Vertical enum.
- `rankByVertical` keys MUST be a subset of `verticals`; ranks are positive integers, unique within
  a vertical.
- `rating` if present within 0–5; only rendered when a corresponding authored Review exists.
- `affiliateUrl` if present is a valid absolute URL; rendered with `rel="sponsored nofollow"`.

**Relationships**: has many Bonus (via `bonusIds`); has 0..1 Review (per operator in V1); appears
in one or more vertical rankings.

## Value Object: PaymentMethod

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | string | yes | e.g., "Bitcoin", "USDT", "OXXO", "Visa" |
| `kind` | PaymentKind | yes | `crypto` or `fiat` |
| `icon` | ImageRef | no | Optional badge icon |

## Value Object: TrustInfo

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `licenseName` | string | no | e.g., regulator/authority name (real) |
| `licenseRef` | string | no | License number/reference if publicly stated |
| `notes` | string | no | Factual trust notes; no fabricated claims |

## Entity: Bonus

Represents a promotional offer tied to an operator.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable unique id |
| `casinoId` | string | yes | Owning operator |
| `title` | string | yes | Headline (e.g., "100% hasta 1 BTC") |
| `type` | BonusType | yes | Closed enum |
| `terms` | string | no | Key terms/conditions summary (honest) |
| `wagering` | string | no | Wagering requirement if applicable |
| `validUntil` | date (ISO) | no | Expiry; omit if evergreen |
| `active` | boolean | yes | Controls display; no fabricated urgency (Principle V) |

**Validation rules**: `casinoId` resolves to a Casino; `type` in enum; `validUntil` (if present) is
a valid ISO date; no countdown/urgency copy derived from this record.

**Relationships**: belongs to one Casino.

## Entity: Author

Represents a content author for E-E-A-T (FR-016).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable unique id |
| `slug` | string | yes | For a future author page |
| `name` | string | yes | Real author/editor name |
| `role` | string | no | e.g., "Editor de Casinos Crypto" |
| `credentials` | string | no | Truthful experience/credentials |
| `bio` | string | no | Short biography |
| `avatar` | ImageRef | no | Profile image |
| `links` | { label: string; url: string }[] | no | Optional profile/social links |

**Validation rules**: `name` required and truthful (Principle IV/V — no fabricated authors).

**Relationships**: authors many Review and Article records.

## Entity: Review

Represents an editorial review of an operator (FR-005, FR-016).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable unique id |
| `casinoId` | string | yes | Reviewed operator |
| `authorId` | string | yes | Author (byline / E-E-A-T) |
| `slug` | string | yes | Usually equals casino slug for `reviews/[slug]` |
| `title` | string | yes | Page title |
| `verdict` | string | yes | Summary verdict |
| `rating` | number (0–5) | yes | Editorial rating (author-attributed; not aggregated) |
| `pros` | string[] | yes | ≥1 honest pro |
| `cons` | string[] | yes | ≥1 honest con |
| `body` | MDX/markdown | yes | Full review content |
| `paymentsSummary` | string | no | Narrative of payments (crypto + fiat) |
| `trustSummary` | string | no | Licensing/trust narrative (real) |
| `publishedAt` | date (ISO) | yes | For display + schema `datePublished` |
| `updatedAt` | date (ISO) | no | For display + schema `dateModified` |
| `locale` | Locale | no | `es-MX` in V1; optional for LATAM localization readiness (FR-021/FR-027) — defaults to the site locale when omitted |

**Validation rules**: `casinoId` and `authorId` resolve; `rating` within 0–5; `pros` and `cons`
non-empty (balanced, honest); `publishedAt` valid ISO date; `locale` (if present) in the Locale
enum. Rendered as `Article` JSON-LD, never `Review`/`AggregateRating` (see seo-schema contract).

**Relationships**: belongs to one Casino; written by one Author.

## Entity: Article (Guide / News)

Represents an editorial content piece for the guides/news structure (FR-006).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable unique id |
| `slug` | string | yes | Route `guias/[slug]` or `noticias/[slug]` |
| `type` | ArticleType | yes | `guide` or `news` |
| `title` | string | yes | Article title |
| `summary` | string | yes | Card/list summary + meta description source |
| `body` | MDX/markdown | yes | Article content |
| `authorId` | string | yes | Author (byline / E-E-A-T) |
| `coverImage` | ImageRef | no | Optional hero/list image |
| `tags` | string[] | no | Topical tags |
| `publishedAt` | date (ISO) | yes | Display + schema `datePublished` |
| `updatedAt` | date (ISO) | no | Display + schema `dateModified` |
| `locale` | Locale | yes | `es-MX` in V1 |

**Validation rules**: `type` in enum; `authorId` resolves; `publishedAt` valid ISO date.

**Relationships**: written by one Author.

## Supporting type: ImageRef

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `src` | string | yes | Path to local optimized asset |
| `alt` | string | yes | Accessible alt text (Spanish) |
| `width` | number | no | Intrinsic width |
| `height` | number | no | Intrinsic height |

## Relationship summary

```text
Author 1───* Review *───1 Casino 1───* Bonus
   │                         │
   └──* Article              └──(verticals: crypto-casino | fiat-casino | sportsbook)
```

- A Casino belongs to 1..* verticals and drives ranking pages.
- A Casino has 0..* Bonuses and 0..1 Review (V1).
- An Author writes 0..* Reviews and 0..* Articles.

## Future-readiness notes (FR-027)

- Adding a **demo slots / tragamonedas** section later can reuse `Casino`/operator references and a
  new `Game` entity without altering existing entities.
- Adding **LATAM locales** later uses the existing `locale` field on `Casino`, `Article`, and
  `Review` plus locale-scoped content; no entity redesign required.
- Adding **user reviews/ratings** later would introduce a separate `UserReview` entity; the current
  editorial `rating` stays distinct and is never merged into a fake aggregate.
