# Contract: SEO Metadata & Structured Data (Schema) Strategy

**Feature**: JugadaMax V1 | **Related**: [research.md](../research.md) §4–§6

Defines the SEO metadata and JSON-LD contract. **Core rule: no fake `AggregateRating`, and no
self-serving `Review`/`Product` star markup for casinos.** Only truthful, defensible structured
data is emitted.

## Per-page metadata (FR-022)

Every route MUST provide, via the Next.js Metadata API:

| Field | Requirement |
|-------|-------------|
| `title` | Unique per page |
| `description` | Unique, derived from real content/summary |
| `alternates.canonical` | Absolute canonical URL |
| `openGraph` | title, description, url, image, `locale: es_MX`, `type` |
| `twitter` | summary_large_image card with title/description/image |
| `metadataBase` | Set once in root layout |

- Root layout sets brand defaults + `metadataBase`; dynamic routes use `generateMetadata`.
- `<html lang="es-MX">`.

## JSON-LD emitted (allowed)

| Scope | Type | Notes |
|-------|------|-------|
| Site (root layout) | `Organization` | name, url, logo (real brand assets) |
| Site (root layout) | `WebSite` | name, url; optional `SearchAction` only if real search exists |
| All content pages | `BreadcrumbList` | reflects real nav hierarchy |
| Guides/News article | `Article` / `NewsArticle` | `headline`, real `author` → `Person`, `publisher` → `Organization`, `datePublished`, `dateModified` |
| Casino review | `Article` | authored editorial review; `author` = named editor, `datePublished`/`dateModified` |

## JSON-LD forbidden (authenticity — Principle V)

- ❌ `AggregateRating` anywhere — implies aggregated user/third-party ratings we do not have.
- ❌ `Review` + `reviewRating` / `Product` star markup for casinos — self-serving; risks Google
  structured-data manual actions.
- ❌ Any `ratingCount`, `reviewCount`, fake `Rating`, or fabricated `Offer` urgency.

**Editorial rating handling**: the JugadaMax editorial score MAY be shown visually to users on
review/ranking UI, but MUST NOT be encoded as `AggregateRating` or rich-result review stars. It is
presented as an author-attributed opinion, not aggregated data.

## Affiliate & outbound links

- Affiliate/outbound CTAs MUST carry `rel="sponsored nofollow"` (research §6, §9).
- Internal navigation uses normal crawlable links.

## Discovery: sitemap & robots (FR-023)

### `app/sitemap.ts`
- MUST generate entries for: all static pages, every casino review, every guide, every news
  article, from the content collections.
- Each entry SHOULD include `lastModified` from the record's `updatedAt`/`publishedAt`.

### `app/robots.ts`
- MUST allow crawling of public content and reference the sitemap URL.
- MUST disallow non-public/utility paths (if any).

## Structured metadata for rich context (FR-024)

- Reviews and articles carry `Article` authorship/date metadata (above) — the compliant way to
  strengthen search presentation without fabricated ratings.

## Acceptance

- [ ] 100% of pages expose unique title, description, canonical, and social metadata (SC-008).
- [ ] JSON-LD validates and contains **zero** `AggregateRating`/casino `Review` star markup.
- [ ] `Organization` + `WebSite` present site-wide; `Article` present on reviews/guides/news with
      real author + dates.
- [ ] `sitemap.xml` and `robots.txt` are generated and stay in sync with content.
- [ ] All affiliate outbound links carry `rel="sponsored nofollow"`.
