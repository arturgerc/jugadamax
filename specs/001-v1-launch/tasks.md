---
description: "Task list for JugadaMax V1 Launch implementation"
---

# Tasks: JugadaMax V1 Launch

**Input**: Design documents from `specs/001-v1-launch/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/,
quickstart.md

**Tests**: Not requested in the spec. No automated test tasks are included; the quality gate is
type-check + lint + the manual `quickstart.md` validation scenarios. Add tests later via
`/speckit-checklist` or a follow-up if desired.

**Organization**: Tasks are grouped by user story (from spec.md priorities) so each story is an
independently implementable, testable increment.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: Which user story the task belongs to (US1–US5); Setup/Foundational/Polish have no label
- File paths are explicit and relative to the repository root

## Path Conventions

- Web application (Next.js App Router), single project at repo root: `app/`, `components/`, `lib/`,
  `types/`, `content/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the project skeleton and confirm tooling. No feature behavior yet.

- [X] T001 Create content directory tree: `content/casinos/`, `content/bonuses/`, `content/authors/`, `content/reviews/`, `content/guides/`, `content/news/` (collections tracked via `index.ts` per collection)
- [X] T002 [P] Create source folders: `types/`, `lib/content/`, `lib/seo/`, `lib/ranking/`, and component folders `components/layout/`, `components/ranking/`, `components/comparison/`, `components/review/`, `components/trust/`, `components/content/`, `components/home/`
- [X] T003 [P] Confirm base tooling runs: `npm run lint` and `npx tsc --noEmit` execute cleanly on the current tree (record any baseline issues; do not run `npm audit fix --force`) — VALIDATED locally: `npx tsc --noEmit` passed, `npm run lint` passed, and `npm run build` passed

**Checkpoint**: Folder structure exists; tooling verified.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Design system, types, content pipeline, layout shell, and compliance primitives that
every user story depends on.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

### Design system (mobile-first premium dark)

- [X] T004 Define brand design tokens as CSS variables in `app/globals.css` (navy `#0A1931`, graphite `#111417`, gold `#FFB800`/`#FFC300`, emerald `#00A86B`, off-white `#F5F5F0`, muted `#B8B8B0`) and map them into the Tailwind v4 theme; set dark background + off-white text defaults and a `prefers-reduced-motion` baseline (no 3D/autoplay/particles). Establish a mobile-first responsive baseline: prevent horizontal page overflow at the root (`overflow-x` confined to intentional inner containers) and reserve sticky-header height so it never covers content (FR-028/029/032)

### Types & content pipeline

- [X] T005 [P] Define shared entity types in `types/content.ts` (Vertical, Locale, BonusType, PaymentKind, ArticleType enums; Casino, PaymentMethod, TrustInfo, Bonus, Author, Review, Article, ImageRef) per `data-model.md`
- [X] T006 Implement content validation schemas in `lib/content/schema.ts` (validate enums, required fields, `rating` 0–5, ISO dates, non-empty `verticals`, `rankByVertical ⊆ verticals`, non-empty pros/cons) per `contracts/content-model.md`
- [X] T007 Implement content loaders in `lib/content/index.ts` (`getCasinos`, `getCasinoBySlug`, `getCasinosByVertical`, `getBonusesForCasino`, `getAuthorById`, `getReviews`, `getReviewBySlug`, `getArticles`, `getArticleBySlug`) that validate at build time and FAIL loudly on invalid records or unresolved references
- [X] T008 [P] Implement ranking/sort helpers in `lib/ranking/index.ts` (deterministic ordering by `rankByVertical`) per `research.md` §3

### SEO foundation

- [X] T009 [P] Implement metadata + JSON-LD helpers in `lib/seo/metadata.ts` and `lib/seo/jsonld.ts` (per-page metadata builder; `Organization`, `WebSite`, `BreadcrumbList`, `Article` generators) — explicitly NO `AggregateRating` and NO casino `Review`/`Product` star markup, per `contracts/seo-schema.md`
- [X] T010 Update `app/layout.tsx`: set `<html lang="es-MX">`, `metadataBase`, brand default metadata + Open Graph/Twitter fallbacks, and inject site-wide `Organization` + `WebSite` JSON-LD; wire header/footer slots

### Layout shell & compliance primitives (used by all stories)

- [X] T011 [P] Create layout components in `components/layout/`: `SiteHeader.tsx`, `MobileNav.tsx`, `SiteFooter.tsx`, and a `Container` wrapper — mobile-first. Per the Navigation contract in `contracts/ui-components.md`, `SiteHeader` + `MobileNav` MUST link to Crypto Casinos (`/casinos-crypto`), Fiat Casinos (`/casinos-fiat`), Betting Sites (`/apuestas`), Guides (`/guias`), News (`/noticias`), and provide access to Reviews (`/reviews/[slug]` via ranking/review links); `SiteFooter` MUST include all of those plus Responsible Gambling (`/juego-responsable`), Affiliate Disclosure (`/divulgacion-afiliados`), Contact (`/contacto`), and the methodology (`/como-evaluamos`). Spanish (`es-MX`) labels. If `SiteHeader` is sticky/fixed, it MUST NOT cover page content (reserve its height; `scroll-margin` for in-page anchors) (FR-032)
- [X] T012 [P] Create compliance components in `components/trust/`: `AffiliateDisclosure.tsx`, `ResponsibleGamblingNotice.tsx` (states 18+, not de-emphasized), `AffiliateCta.tsx` (applies `rel="sponsored nofollow"` + `target="_blank"`, graceful disabled state when `href` missing), and `TrustBadge.tsx` (emerald, real signals only) per `contracts/ui-components.md`

### Seed content (real, non-fabricated)

- [X] T013 [P] Add seed author record(s) in `content/authors/` (real editor name/role/bio)
- [X] T014 [P] Add at least one real casino record per vertical in `content/casinos/` (crypto-casino, fiat-casino, sportsbook) with `verticals`, `rankByVertical`, payments, `affiliateUrl`; add related bonus records in `content/bonuses/` — no fabricated data

**Checkpoint**: Design tokens, types, validated content pipeline, SEO helpers, layout shell, and
compliance components are ready. User stories can now proceed.

---

## Phase 3: User Story 1 - Discover and compare top crypto casinos (Priority: P1) 🎯 MVP

**Goal**: A mobile visitor lands on the homepage, sees the premium dark design and a prominent
ranked Top Crypto Casinos list with CTAs, and can open the full crypto ranking page with a
comparison table and methodology link.

**Independent Test**: On a mobile viewport, load `/`, confirm hero + quick categories + top crypto
casinos list with per-entry key facts and working CTAs; navigate to `/casinos-crypto` and confirm a
comparison table ordered by `rankByVertical` with a link to the methodology.

- [X] T015 [P] [US1] Create ranking display components in `components/ranking/`: `RankBadge.tsx`, `RatingStars.tsx` (renders editorial rating only when present), `PaymentBadges.tsx`
- [X] T016 [US1] Create `components/ranking/RankingCard.tsx` (rank, name/logo, rating, headline bonus, payment badges, primary CTA via `AffiliateCta`) and `components/ranking/RankingList.tsx` (preserves rank order; renders only available entries, no filler)
- [X] T017 [US1] Create `components/comparison/ComparisonTable.tsx` (side-by-side rating/bonus/payments/CTA; links to `/como-evaluamos`). Horizontal overflow MUST be confined to the table's own scroll container and MUST NOT cause horizontal page overflow (FR-031); cards/rows reflow cleanly on small screens (FR-030)
- [X] T018 [US1] Create the crypto ranking page `app/(marketing)/casinos-crypto/page.tsx` using `getCasinosByVertical('crypto-casino')`, `RankingList` + `ComparisonTable`, with `AffiliateDisclosure` + `ResponsibleGamblingNotice`; add per-page metadata + `BreadcrumbList` JSON-LD
- [X] T019 [P] [US1] Create homepage section components in `components/home/`: `Hero.tsx` (no autoplay video/particles) and `QuickCategories.tsx` (links to the 3 verticals)
- [X] T020 [US1] Create `app/page.tsx` MVP composition: Hero, QuickCategories, Top Crypto Casinos section (RankingList), and the Responsible Gambling / Affiliate Disclosure block; add homepage metadata. (Later stories append their sections.)

**Checkpoint**: MVP is live — crypto discovery flow works end-to-end on mobile, independently
testable.

---

## Phase 4: User Story 2 - Read an in-depth casino review (Priority: P2)

**Goal**: A visitor opens a casino review built from the reusable template showing verdict, rating,
balanced pros/cons, bonus, payments, trust/licensing, author byline, and a compliant CTA.

**Independent Test**: Open a `/reviews/[slug]` page and confirm all structured sections render from
the `Review` record, including author byline and publish/update date, with disclosure + 18+ notice.

- [X] T021 [P] [US2] Create review components in `components/review/`: `VerdictBox.tsx`, `ProsCons.tsx` (requires both pros and cons), `ReviewHeader.tsx`, `AuthorByline.tsx` (author name + publish/updated dates)
- [X] T022 [P] [US2] Add seed review record(s) in `content/reviews/` linked to a seeded casino + author (balanced, honest pros/cons)
- [X] T023 [US2] Create the review template page `app/(marketing)/reviews/[slug]/page.tsx` with `generateStaticParams` from reviews, rendering verdict/rating/pros-cons/bonus/payments/trust/byline + `AffiliateCta`, `AffiliateDisclosure`, `ResponsibleGamblingNotice`
- [X] T024 [US2] Add per-review SEO: `generateMetadata` (unique title/description/canonical/OG) and `Article` JSON-LD with real author + `datePublished`/`dateModified` (NO `AggregateRating`/review-star markup) per `contracts/seo-schema.md`
- [X] T025 [US2] Link ranking cards/comparison rows to their review page (`/reviews/[slug]`) where a review exists

**Checkpoint**: Casino reviews render independently with E-E-A-T byline and compliant CTAs.

---

## Phase 5: User Story 4 - Trust, disclosure & responsible gambling pages (Priority: P2)

**Goal**: All trust/compliance pages exist and are reachable; methodology preview appears on the
homepage. (Sequenced before P3 because it is a P2 compliance gate for a responsible launch.)

**Independent Test**: From the footer and from any ranking/review page, reach the methodology,
affiliate disclosure, responsible gambling (18+), about, and contact pages; confirm each is readable
on mobile.

- [X] T026 [P] [US4] Create `app/(legal)/como-evaluamos/page.tsx` (evaluation methodology explaining ranking criteria) + metadata + breadcrumb
- [X] T027 [P] [US4] Create `app/(legal)/divulgacion-afiliados/page.tsx` (affiliate disclosure) + metadata + breadcrumb
- [X] T028 [P] [US4] Create `app/(legal)/juego-responsable/page.tsx` (responsible gambling, states 18+ and responsible-play guidance) + metadata + breadcrumb
- [X] T029 [P] [US4] Create `app/(legal)/acerca-de/page.tsx` and `app/(legal)/contacto/page.tsx` (about + contact) + metadata + breadcrumb
- [X] T030 [US4] Add the "Cómo evaluamos los casinos" preview section to `app/page.tsx` linking to `/como-evaluamos`
- [X] T031 [US4] Verify `SiteFooter` links resolve to all five trust/legal routes (SC-002)

**Checkpoint**: Compliance/trust surface is complete and reachable site-wide.

---

## Phase 6: User Story 3 - Compare fiat casinos and betting sites (Priority: P3)

**Goal**: Fiat casinos and sportsbooks have ranked listing pages in the same premium format, and
their sections plus bonus/payment highlights appear on the homepage.

**Independent Test**: Load `/casinos-fiat` and `/apuestas` independently; confirm ranked entries
with key facts, CTAs, and comparison tables consistent with the crypto page.

- [X] T032 [P] [US3] Create the fiat casinos page `app/(marketing)/casinos-fiat/page.tsx` using `getCasinosByVertical('fiat-casino')` with `RankingList` + `ComparisonTable`, disclosure + 18+ notice, metadata + breadcrumb
- [X] T033 [P] [US3] Create the betting sites page `app/(marketing)/apuestas/page.tsx` using `getCasinosByVertical('sportsbook')` with `RankingList` + `ComparisonTable`, disclosure + 18+ notice, metadata + breadcrumb
- [X] T034 [P] [US3] Create `components/home/BonusHighlights.tsx` (bonus/payment highlights from bonus records; honest, no urgency)
- [X] T035 [US3] Append Top Fiat Casinos, Top Betting Sites, and Bonus/payment highlights sections to `app/page.tsx` (keep crypto most prominent — SC-010)

**Checkpoint**: All three verticals are fully represented on rankings and homepage.

---

## Phase 7: User Story 5 - Guides and news (Priority: P3)

**Goal**: A guides/news structure (index + article template) exists, and homepage shows guides and
news previews.

**Independent Test**: Open `/guias` and `/noticias`, confirm article lists; open one article of each
and confirm title, body, author byline, and date.

- [X] T036 [P] [US5] Create content components in `components/content/`: `ArticleCard.tsx`, `ArticleList.tsx`, `GuidesPreview.tsx`, `NewsPreview.tsx`
- [X] T037 [P] [US5] Add seed guide article(s) in `content/guides/` and news article(s) in `content/news/` (real, author-attributed)
- [X] T038 [US5] Create guides index `app/(marketing)/guias/page.tsx` and news index `app/(marketing)/noticias/page.tsx` (ArticleList) + metadata + breadcrumb
- [X] T039 [US5] Create article templates `app/(marketing)/guias/[slug]/page.tsx` and `app/(marketing)/noticias/[slug]/page.tsx` with `generateStaticParams`, author byline + dates, `generateMetadata`, and `Article`/`NewsArticle` JSON-LD (real author + dates)
- [X] T040 [US5] Append Guides preview and News preview sections to `app/page.tsx`

**Checkpoint**: All 11 homepage sections present; content structure complete.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Site-wide discovery, SEO completeness, performance, accessibility, and final validation.

- [ ] T041 Implement `app/sitemap.ts` generating entries for all static pages + every review, guide, and news article from content loaders, with `lastModified` from record dates (FR-023)
- [ ] T042 [P] Implement `app/robots.ts` allowing public content and referencing the sitemap; disallow any non-public/utility paths
- [ ] T043 [P] Audit every page containing an affiliate CTA to confirm `AffiliateDisclosure` + `ResponsibleGamblingNotice` are present and CTAs use `rel="sponsored nofollow"` (SC-004)
- [ ] T044 [P] Verify all pages expose unique title, description, canonical, and social metadata (SC-008) and that JSON-LD contains zero `AggregateRating`/casino review-star markup (validate with a rich-results checker)
- [ ] T045 [P] Authenticity audit: confirm no fake winners/reviews/payout screenshots/social proof/urgency and no prohibited copy ("dinero fácil", "sin riesgo", "100% gana") anywhere (SC-007)
- [ ] T046 [P] Design + mobile-first pass: confirm palette usage, gold CTAs, emerald trust badges, lightweight motion only, `prefers-reduced-motion` respected, and no layout breaks at small viewport (FR-018/019/020)
- [ ] T047 Run Lighthouse (mobile) on `/` and a ranking page; confirm primary content readable ~3s and Performance/SEO ≥ 90 (SC-003); fix regressions
- [ ] T048 Run `npx tsc --noEmit` and `npm run lint`; then execute the `quickstart.md` validation scenarios end-to-end and record results
- [ ] T049 [P] Responsive/cross-device validation: verify every page at 360px, 390px, 430px, 768px, 1024px, and 1440px with no horizontal page overflow (FR-029), ranking cards intact on small screens (FR-030), comparison-table scroll contained within its own container (FR-031), sticky header not covering content (FR-032), CTAs visible and tappable (FR-033), and smooth scrolling on mobile/tablet (FR-034); confirms SC-011 (FR-028/035)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately.
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories.
- **User Stories (Phases 3–7)**: All depend on Foundational completion.
  - Recommended order: US1 (P1) → US2 (P2) → US4 (P2) → US3 (P3) → US5 (P3).
  - US2, US3, US4, US5 are largely independent after Foundational and may be parallelized by
    different contributors; each appends its own sections to `app/page.tsx` (coordinate that file).
- **Polish (Phase 8)**: Depends on all desired user stories being complete (sitemap/robots and audits
  need the content and pages to exist).

### Story Dependencies

- **US1 (P1)**: Creates ranking components, comparison table, and the homepage shell — foundation for
  other stories' homepage sections; no dependency on other stories.
- **US2 (P2)**: Uses ranking→review links (T025 depends on US1 ranking cards) but review pages render
  independently.
- **US4 (P2)**: Independent; methodology link (T017/T030) complements US1.
- **US3 (P3)**: Reuses US1 ranking/comparison components.
- **US5 (P3)**: Independent content structure.

### Shared-file coordination

- `app/page.tsx` is touched by T020 (US1), T030 (US4), T035 (US3), T040 (US5) — these are sequential
  edits to the same file; do not parallelize them.

## Parallel Opportunities

- Setup: T002 and T003 in parallel.
- Foundational: T005, T008, T009 in parallel; T011, T012, T013, T014 in parallel (after types/loaders
  where referenced).
- US1: T015 and T019 in parallel; then T016 → T017 → T018 → T020.
- US2: T021 and T022 in parallel; then T023 → T024 → T025.
- US4: T026–T029 in parallel; then T030 → T031.
- US3: T032, T033, T034 in parallel; then T035.
- US5: T036 and T037 in parallel; then T038 → T039 → T040.
- Polish: T042–T046 and T049 in parallel; T041 before T047/T048; T049 after the pages it validates exist.

## Implementation Strategy

### MVP First (User Story 1 only)

1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1): crypto discovery + homepage shell.
3. **STOP and VALIDATE**: run the US1 independent test on mobile.
4. This is a demoable MVP.

### Incremental Delivery

1. Setup + Foundational → foundation ready.
2. US1 → MVP (crypto discovery). Validate.
3. US2 (reviews) → validate. US4 (trust pages) → validate.
4. US3 (fiat + betting) → validate. US5 (guides/news) → validate.
5. Polish (sitemap/robots/SEO/perf/audits) → final validation via quickstart.

## Notes

- [P] = different files, no dependency on incomplete tasks.
- Every affiliate CTA page MUST include disclosure + 18+ notice (compliance gate).
- No `AggregateRating` or casino review-star JSON-LD (authenticity gate).
- Do not push/deploy without explicit user confirmation; do not run `npm audit fix --force`.
- Commit after each task or logical group.
