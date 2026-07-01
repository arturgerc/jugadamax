# Feature Specification: JugadaMax V1 Launch

**Feature Branch**: `001-v1-launch`

**Created**: 2026-07-01

**Status**: Draft

**Input**: User description: "Create a V1 product specification for JugadaMax — a premium mobile-first crypto-first iGaming affiliate/media website for Mexico first and Spanish-speaking LATAM later."

## Overview

JugadaMax V1 is the first public launch of a premium, mobile-first, crypto-first iGaming
affiliate/media brand for Mexico (Spanish-speaking LATAM to follow). The launch delivers a
homepage, three ranked vertical listing pages (Crypto Casinos, Fiat Casinos, Betting Sites),
a reusable casino review page, a guides/news content structure, and the trust and compliance
pages required to operate an affiliate/media gambling brand responsibly. Content weighting
follows the brand focus: ~60% Crypto Casinos, ~25% Sports Betting, ~15% Fiat Online Casinos.

Demo slots / tragamonedas are explicitly **out of scope for V1** and will ship as a separate
section later. The V1 data structure MUST be designed so casinos, bonuses, authors, and reviews
can be extended without a rewrite.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover and compare top crypto casinos in Mexico (Priority: P1)

A Mexican visitor lands on JugadaMax (typically on a phone) wanting to find a trustworthy crypto
casino. From the homepage they immediately see the brand's premium dark design, quick category
navigation, and a ranked list of Top Crypto Casinos in Mexico with key facts (bonus, payments,
rating) and a clear call-to-action to visit each casino. They can open the full "Top Crypto
Casinos in Mexico" page to compare options side by side.

**Why this priority**: Crypto casinos are 60% of the business focus and the primary revenue and
traffic driver. This journey is the core value proposition and defines the MVP.

**Independent Test**: Load the homepage on a mobile viewport, confirm the ranked crypto casino
list renders with per-casino key facts and working CTAs, navigate to the full Top Crypto Casinos
ranking page, and confirm a comparison table with a stable, methodology-based ordering.

**Acceptance Scenarios**:

1. **Given** a visitor on a mobile device, **When** they open the homepage, **Then** they see the
   hero, quick categories, and a ranked list of top crypto casinos with rank, name, rating,
   headline bonus, key payment methods, and a prominent CTA per entry.
2. **Given** a visitor on the homepage, **When** they tap the crypto casinos category or "see all",
   **Then** they land on the Top Crypto Casinos in Mexico page showing a comparison table.
3. **Given** a visitor viewing any ranking, **When** they look for how the order was decided,
   **Then** they can reach the "Cómo evaluamos los casinos" methodology explanation.
4. **Given** a visitor taps a casino CTA, **When** the outbound link opens, **Then** it is an
   affiliate link accompanied by a visible affiliate disclosure and an 18+ notice.

---

### User Story 2 - Read an in-depth casino review (Priority: P2)

A visitor who is comparing options wants deeper detail before signing up. They open a casino
review page built from the reusable review template, which presents a structured verdict:
rating, pros/cons, bonus terms, supported payments (crypto and fiat), games overview, trust and
licensing notes, author attribution, and a clear CTA.

**Why this priority**: Reviews convert comparison-stage visitors and are the primary E-E-A-T and
SEO surface. They depend on the ranking pages existing (P1) but add essential decision-making depth.

**Independent Test**: Open a single casino review page and confirm all structured sections render
from the underlying data (rating, pros/cons, bonus, payments, trust/licensing, author byline, CTA),
independent of the homepage.

**Acceptance Scenarios**:

1. **Given** a visitor on a ranking page, **When** they select a casino's review, **Then** they see
   a review page with a consistent structure: summary verdict, rating, pros/cons, bonus details,
   payment methods, trust/licensing, and a CTA.
2. **Given** a review page, **When** the visitor looks for authorship, **Then** they see an author
   byline (E-E-A-T attribution) and the review's publish/update date.
3. **Given** a review page, **When** the visitor reaches any CTA, **Then** the affiliate disclosure
   and 18+ responsible-gambling notice are present on the page.

---

### User Story 3 - Compare fiat casinos and betting sites (Priority: P3)

A visitor interested in fiat online casinos or sports betting browses the Top Fiat Casinos in
Mexico and Top Betting Sites in Mexico pages, each presenting ranked, comparable entries in the
same premium format as crypto casinos.

**Why this priority**: Sports betting (25%) and fiat casinos (15%) complete the vertical coverage
and broaden traffic, but rank below the crypto-first core.

**Independent Test**: Load the Top Fiat Casinos and Top Betting Sites pages independently and
confirm each renders ranked entries with key facts, CTAs, and consistent comparison formatting.

**Acceptance Scenarios**:

1. **Given** a visitor, **When** they open Top Fiat Casinos in Mexico, **Then** they see a ranked
   comparison of fiat casinos with key facts and CTAs.
2. **Given** a visitor, **When** they open Top Betting Sites in Mexico, **Then** they see a ranked
   comparison of sportsbooks with key facts and CTAs.
3. **Given** any vertical listing page, **When** it is displayed, **Then** it uses the same ranking
   and comparison conventions as the crypto casinos page.

---

### User Story 4 - Access trust, disclosure, and responsible gambling information (Priority: P2)

Any visitor (and any regulator or partner) can find the brand's trust pages: how casinos are
evaluated, affiliate disclosure, responsible gambling with an 18+ requirement, and standard legal/
about/contact information. These elements are also surfaced contextually near rankings and CTAs.

**Why this priority**: Compliance and trust are non-negotiable for a gambling affiliate/media brand
and are required regardless of commercial goals; they gate a responsible launch.

**Independent Test**: From the footer and from any ranking/review page, reach the affiliate
disclosure, responsible gambling (18+), and evaluation methodology pages; confirm they exist and
are readable on mobile.

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they view the footer, **Then** they can reach affiliate
   disclosure, responsible gambling (18+), evaluation methodology, and about/contact pages.
2. **Given** a visitor on a page containing affiliate CTAs, **When** the page renders, **Then** an
   affiliate disclosure and an 18+ responsible-gambling notice are visible without extra clicks.
3. **Given** the responsible gambling page, **When** it loads, **Then** it clearly states the 18+
   requirement and provides responsible-play guidance.

---

### User Story 5 - Read guides and news (Priority: P3)

A visitor seeking education or updates browses a guides/news structure — a content index plus
individual article pages — covering topics like how to use crypto at casinos, bonus explainers,
and industry news relevant to Mexico/LATAM.

**Why this priority**: Guides and news build E-E-A-T, organic reach, and repeat visits, but are
secondary to the core ranking-and-review conversion path.

**Independent Test**: Open the guides/news index, confirm it lists articles, open one article and
confirm it renders with title, body, author byline, and date.

**Acceptance Scenarios**:

1. **Given** a visitor, **When** they open the guides/news index, **Then** they see a list of
   articles with titles and summaries.
2. **Given** a visitor on the index, **When** they select an article, **Then** the article page
   renders with title, body content, author byline, and publish/update date.
3. **Given** the homepage, **When** it renders, **Then** it includes a guides preview and a news
   preview linking into the content structure.

---

### Edge Cases

- A casino, bonus, or review has missing optional data (e.g., no fiat payments): the page MUST
  omit or gracefully indicate the missing field without broken layout or empty placeholders.
- A ranking page has fewer entries than a "top N" implies: it MUST display the available entries
  without fabricating filler.
- An affiliate/outbound link is unavailable or unset: the CTA MUST degrade gracefully and MUST NOT
  present a broken or misleading link.
- A visitor arrives directly on a deep page (review or article) via search: trust, disclosure, and
  18+ notices MUST still be reachable, and navigation back to key sections MUST work.
- Content or UI displays in Spanish for the Mexico audience; the structure MUST allow adding more
  Spanish-speaking LATAM locales later without restructuring content.
- A visitor uses a slow mobile connection: core content MUST remain readable and usable quickly.

## Requirements *(mandatory)*

### Functional Requirements

**Site structure & pages**

- **FR-001**: The site MUST provide a homepage that includes, at minimum: hero, quick categories,
  Top Crypto Casinos in Mexico, Top Fiat Casinos in Mexico, Top Betting Sites in Mexico,
  bonus/payment highlights, "Cómo evaluamos los casinos", guides preview, news preview,
  responsible gambling / affiliate disclosure, and footer.
- **FR-002**: The site MUST provide a dedicated "Top Crypto Casinos in Mexico" ranking page.
- **FR-003**: The site MUST provide a dedicated "Top Fiat Casinos in Mexico" ranking page.
- **FR-004**: The site MUST provide a dedicated "Top Betting Sites in Mexico" ranking page.
- **FR-005**: The site MUST provide a reusable casino review page structure that renders a
  consistent set of sections for any casino from underlying data.
- **FR-006**: The site MUST provide a guides/news structure consisting of a content index and
  individual article pages.
- **FR-007**: The site MUST provide trust pages: affiliate disclosure, responsible gambling (18+),
  evaluation methodology ("Cómo evaluamos los casinos"), and about/contact information.
- **FR-008**: Demo slots / tragamonedas MUST NOT be included in V1; the information architecture
  MUST leave room to add such a section later without restructuring existing pages.

**Rankings, comparisons & CTAs**

- **FR-009**: Ranking pages MUST present entries in a clear ranked order with a consistent set of
  key facts per entry (e.g., rank, name, rating, headline bonus, key payment methods).
- **FR-010**: Ranking pages MUST present a comparison view (table or equivalent) enabling side-by-
  side evaluation of listed entries.
- **FR-011**: The ordering of every ranking MUST be attributable to the documented evaluation
  methodology, which MUST be reachable from ranking contexts.
- **FR-012**: Every casino/sportsbook entry and review MUST expose a prominent call-to-action that
  routes to the operator via an affiliate link.
- **FR-013**: The system MUST support configuring affiliate destinations per operator without
  requiring content rewrites.

**Trust, compliance & E-E-A-T**

- **FR-014**: Any page presenting affiliate CTAs MUST display an affiliate disclosure and an 18+
  responsible-gambling notice that are visible without additional navigation.
- **FR-015**: Responsible gambling notices MUST state the 18+ age requirement and MUST NOT be
  hidden, removed, or de-emphasized to increase conversion.
- **FR-016**: Review and article pages MUST display author attribution (byline) and publish/update
  dates to support E-E-A-T; author records MUST be part of the data structure.
- **FR-017**: The site MUST NOT contain fake winners, fake reviews, fake payout screenshots, fake
  social proof, fabricated urgency, or misleading guarantee copy (e.g., "dinero fácil",
  "sin riesgo", "100% gana").

**Design & experience**

- **FR-018**: All pages MUST be designed mobile-first and remain fully usable and readable on small
  screens, then enhance for larger viewports.
- **FR-019**: The visual presentation MUST follow the premium dark crypto iGaming media direction
  and brand palette (deep navy / graphite backgrounds, gold CTAs, emerald trust badges, warm
  off-white text, muted secondary text) with lightweight motion only.
- **FR-020**: V1 MUST NOT use heavy 3D scenes, autoplay hero video, or particle backgrounds.
- **FR-021**: Content MUST be presented in Spanish for the Mexico audience, with a structure that
  supports adding further Spanish-speaking LATAM locales later.

**SEO**

- **FR-022**: Every page MUST support basic SEO essentials: a unique title, meta description,
  canonical reference, heading structure, and social-share metadata.
- **FR-023**: The site MUST expose standard discovery aids (e.g., sitemap and robots directives)
  so pages can be indexed by search engines.
- **FR-024**: Review and article pages MUST support structured metadata appropriate to their type
  (e.g., review/rating and article authorship information) to strengthen search presentation.

**Data structure (future-ready)**

- **FR-025**: The system MUST model Casinos, Bonuses, Authors, and Reviews as distinct, related
  data entities so new operators, bonuses, authors, and reviews can be added without redesign.
- **FR-026**: A casino entity MUST support belonging to one or more verticals (crypto casino, fiat
  casino, sportsbook) so a single operator can appear in the appropriate ranking(s).
- **FR-027**: The data structure MUST accommodate future extension (e.g., a demo slots/tragamonedas
  section and additional locales) without breaking existing entities or pages.

**Responsive layout & cross-device**

- **FR-028**: All pages MUST use a mobile-first layout that is also tablet-safe and desktop-safe —
  laid out and verified across small (mobile), medium (tablet), and large (desktop) viewports.
- **FR-029**: No page may produce horizontal page overflow (no horizontal scrollbar on the document/
  body) at any supported viewport width.
- **FR-030**: Ranking cards MUST NOT break, clip, or overlap on small screens; content reflows or
  stacks cleanly.
- **FR-031**: Comparison tables MUST scroll horizontally only inside their own container; the table's
  overflow MUST NOT cause the whole page to scroll horizontally.
- **FR-032**: A sticky/fixed header MUST NOT cover or obscure page content (e.g., in-page anchor
  targets and the top of each page account for the header height).
- **FR-033**: Primary CTA buttons MUST remain visible and tappable on mobile, with an adequate touch
  target size and no reliance on hover.
- **FR-034**: Scrolling MUST remain smooth (no jank/layout thrash) on mobile and tablet.
- **FR-035**: Layouts MUST be validated at the following viewport widths without breakage:
  360px, 390px, 430px, 768px, 1024px, and 1440px.

### Key Entities *(include if feature involves data)*

- **Casino/Operator**: Represents a gambling operator. Key attributes: name, brand/logo reference,
  vertical membership (crypto casino / fiat casino / sportsbook), rating, supported payment methods
  (crypto and/or fiat), licensing/trust notes, affiliate destination, and ranking position within
  each vertical. Relationships: has associated Bonuses and Reviews.
- **Bonus**: Represents a promotional offer tied to an operator. Key attributes: title/headline,
  type, key terms/conditions, and validity/status. Relationships: belongs to a Casino/Operator.
- **Author**: Represents a content author for E-E-A-T. Key attributes: name, role/credentials, bio,
  and profile reference. Relationships: authors Reviews and guide/news articles.
- **Review**: Represents an editorial review of an operator. Key attributes: summary verdict,
  rating, pros/cons, bonus/payment/trust details, publish and update dates. Relationships: belongs
  to a Casino/Operator and is written by an Author.
- **Article (Guide/News)**: Represents an editorial content piece. Key attributes: title, summary,
  body, type (guide or news), publish and update dates. Relationships: written by an Author.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor on a mobile device can find and reach a ranked top crypto casino
  CTA from the homepage within 15 seconds and 2 interactions or fewer.
- **SC-002**: All V1 pages (homepage, three ranking pages, review page, guides/news index and
  article, and all trust pages) are present and reachable via navigation and footer.
- **SC-003**: On a typical mobile connection, primary content on core pages becomes readable within
  3 seconds of navigation.
- **SC-004**: 100% of pages containing affiliate CTAs display both an affiliate disclosure and an
  18+ responsible-gambling notice.
- **SC-005**: 100% of ranking pages provide a comparison view and a reachable link to the evaluation
  methodology.
- **SC-006**: 100% of review and article pages display author attribution and a publish/update date.
- **SC-007**: The site contains zero instances of prohibited content types (fake winners, fake
  reviews, fake payout screenshots, fake social proof, fabricated urgency, or guarantee claims).
- **SC-008**: 100% of pages provide the basic SEO essentials (unique title, meta description,
  canonical reference, and social-share metadata).
- **SC-009**: New casinos, bonuses, authors, and reviews can be added to the data structure without
  modifying existing page structures or other entities.
- **SC-010**: Content weighting at launch reflects the brand focus, with crypto casinos as the most
  prominent vertical on the homepage relative to sports betting and fiat casinos.
- **SC-011**: Every V1 page renders without breakage at 360px, 390px, 430px, 768px, 1024px, and
  1440px viewport widths: zero horizontal page overflow, ranking cards intact, comparison-table
  scrolling contained within its own container, sticky header not covering content, and CTA buttons
  visible and tappable.

## Assumptions

- V1 targets Mexico with Spanish-language content; additional Spanish-speaking LATAM locales are a
  future addition and only require structural readiness now.
- Initial casino, bonus, author, and review content is editorially produced and curated; there is no
  end-user account system, user-generated reviews, or login in V1.
- Rankings are editorially/methodology-driven and may be commercially influenced, disclosed via the
  affiliate disclosure and evaluation methodology; they are not presented as neutral fact.
- Affiliate destinations are configured per operator and may be updated without content rewrites.
- Demo slots / tragamonedas, interactive game embeds, and any real-money transactions are out of
  scope for V1.
- The brand operates as an affiliate/media site and does not itself accept wagers or process gambling
  payments.
- Basic analytics/measurement may be added but is not a defining requirement of this specification.
