# Phase 0 Research: JugadaMax V1 Launch

**Feature**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Date**: 2026-07-01

This document resolves the technical unknowns and records the key decisions that shape the V1
implementation. Each item follows: Decision → Rationale → Alternatives considered.

## 1. Content storage: file-based typed content vs CMS/DB

**Decision**: Store all V1 content (casinos, bonuses, authors, reviews, guides, news) as
version-controlled, typed files under `content/`, loaded at build time by helpers in
`lib/content` with runtime validation. Long-form bodies (reviews, guides, news) use MDX; structured
records (casinos, bonuses, authors) use typed data modules.

**Rationale**: Maximizes speed (static generation, no query latency), keeps the site cheap and
simple, versions content in git, and satisfies the "future-ready data structure" requirement —
adding an operator/bonus/author/review is adding a file. No secrets or infrastructure needed for
launch.

**Alternatives considered**:
- Headless CMS (Sanity/Contentful): richer editing but adds cost, network dependency, and
  complexity not justified for a curated V1 catalog.
- Database (Postgres/SQLite): unnecessary without user accounts or user-generated content in V1;
  would violate the speed-first, low-complexity intent.

## 2. Rendering strategy

**Decision**: Static Site Generation (SSG) via App Router Server Components; `generateStaticParams`
for dynamic routes (`reviews/[slug]`, `guias/[slug]`, `noticias/[slug]`). Minimal/no client
components except small interactive bits (mobile nav, comparison table toggles).

**Rationale**: Best possible mobile performance and SEO; content changes only at build time; keeps
client JS minimal per Principle II (speed-first).

**Alternatives considered**:
- SSR on every request: needless server cost/latency for static catalog content.
- Client-side rendering: worse SEO and slower first paint; conflicts with speed-first.

## 3. Ranking & comparison integrity (how order is decided)

**Decision**: Each casino record stores per-vertical ranking metadata (an explicit `rank` and/or
scored criteria). A documented methodology page ("Cómo evaluamos los casinos") explains the
criteria. Ranking helpers in `lib/ranking` sort deterministically from stored data; the methodology
link is surfaced on every ranking context.

**Rationale**: Satisfies Principle III and FR-011 — rankings are transparent, deterministic, and
traceable to a published methodology rather than arbitrary or hidden logic.

**Alternatives considered**:
- Opaque hardcoded ordering with no methodology: violates ranking-integrity principle.
- Live/auto-computed scores from third-party data: out of scope and unverifiable for V1.

## 4. SEO metadata approach

**Decision**: Use Next.js Metadata API. A root `metadata` + `metadataBase` in `app/layout.tsx`
sets brand defaults and Open Graph/Twitter fallbacks; each route exports `generateMetadata` (or a
static `metadata`) producing a unique title, description, canonical, and social image. Locale set to
`es-MX`.

**Rationale**: Native, per-route, statically evaluated; satisfies FR-022 (unique title, meta
description, canonical, social metadata) with no extra dependency.

**Alternatives considered**:
- Manual `<head>` tags: error-prone and not idiomatic in App Router.
- Third-party SEO libs: unnecessary; the framework covers requirements.

## 5. Structured data (JSON-LD) — schema strategy WITHOUT fake AggregateRating

**Decision**: Emit conservative, truthful JSON-LD only:
- Site-wide: `Organization` and `WebSite` in the root layout (name, logo, URL).
- All content pages: `BreadcrumbList`.
- Guides/news: `Article` (or `NewsArticle`) with a real `author` (`Person` linked to the Author
  record) and `publisher` (`Organization`), plus `datePublished`/`dateModified`.
- Casino review pages: represented as `Article` authored by a named editor. **Do NOT** emit
  `AggregateRating`, and **do NOT** emit `Product`/`Review` rich-result markup with star ratings
  for casinos.

**Rationale**: Directly honors the user's explicit constraint and Principle V. `AggregateRating`
implies aggregated third-party/user ratings we do not have — using it would be fabricated data and
risks Google structured-data manual actions. Google also restricts self-serving `Review`/`Product`
star markup for items a site promotes; using `Article` for editorial reviews keeps us compliant
while still earning author/date rich context. The editorial rating is shown visually to users but
is not claimed as aggregated schema.

**Alternatives considered**:
- `Review` + `reviewRating` per casino: risky under Google's self-serving-review guidance; can
  trigger penalties; rejected.
- `AggregateRating`: explicitly prohibited (would be fake). Rejected.
- No structured data at all: leaves SEO value on the table; the truthful `Organization`/`Article`/
  `Breadcrumb` set is safe and beneficial.

## 6. Sitemap & robots strategy

**Decision**: Implement `app/sitemap.ts` to generate the sitemap dynamically from the content
collections (all static pages + every casino review, guide, and news article) with `lastModified`
from record dates. Implement `app/robots.ts` allowing crawling of content and pointing to the
sitemap; disallow any non-public/utility paths. Affiliate outbound links use `rel="sponsored
nofollow"`.

**Rationale**: Satisfies FR-023; keeps discovery aids in sync with content automatically; correct
`rel` on affiliate links is both an SEO best practice and an honesty/compliance signal.

**Alternatives considered**:
- Static `public/sitemap.xml`: drifts out of sync as content grows; rejected.

## 7. Internationalization readiness (Mexico first, LATAM later)

**Decision**: Ship Spanish (`es-MX`) content only in V1, but structure content records and routing
so a locale dimension can be added later (e.g., locale-scoped content folders and/or Next.js i18n
routing) without restructuring entities or existing URLs.

**Rationale**: Satisfies FR-021 and the constitution's Mexico-first, LATAM-later direction without
paying the complexity cost of multi-locale now.

**Alternatives considered**:
- Full i18n routing in V1: premature; adds complexity before there is second-locale content.
- No i18n consideration: would risk a costly restructure later; rejected.

## 8. Design system & UI foundation

**Decision**: Encode the brand palette as CSS variables in `app/globals.css`, mapped into the
Tailwind v4 theme; build components mobile-first from the already-scaffolded shadcn/ui primitives
(`components/ui`) with lucide icons. Motion limited to lightweight opacity/transform transitions
honoring `prefers-reduced-motion`.

**Rationale**: Satisfies Principle I and FR-019/FR-020; reuses existing scaffolding; keeps bundle
small.

**Alternatives considered**:
- Heavy animation/3D libraries: prohibited by constitution and spec.
- A different component kit: shadcn/ui is already configured (`components.json`); no reason to switch.

## 9. Affiliate link handling

**Decision**: Store an affiliate destination per operator in the casino record. Render outbound
CTAs through a shared component that applies `rel="sponsored nofollow"`, `target="_blank"`, and
requires a nearby affiliate disclosure + 18+ notice. If a destination is missing, the CTA degrades
gracefully (disabled/hidden) rather than linking to a broken URL.

**Rationale**: Satisfies FR-012, FR-013, FR-014, and the edge case for unset links; centralizes
compliance so disclosure/age notices can't be forgotten.

**Alternatives considered**:
- Inline ad-hoc links per page: easy to miss `rel`/disclosure; rejected for compliance risk.

## Resolved Unknowns

All Technical Context items are resolved; no `NEEDS CLARIFICATION` markers remain. Assumptions
recorded in the spec (Spanish-first, no accounts, editorial curation, demo slots out of scope)
carry forward unchanged.
