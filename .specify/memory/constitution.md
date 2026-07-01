<!--
Sync Impact Report
===================
Version change: TEMPLATE (unratified) → 1.0.0
Rationale: Initial ratification of the JugadaMax constitution (MAJOR baseline).

Modified principles: N/A (initial adoption)
Added principles:
  - I. Premium Dark iGaming Media Design (NON-NEGOTIABLE)
  - II. Mobile-First & Speed-First
  - III. Ranking & Comparison Integrity
  - IV. Trust, Compliance & Responsible Gambling (NON-NEGOTIABLE)
  - V. Authenticity — No Fabricated Signals (NON-NEGOTIABLE)
Added sections:
  - Design & Technical Constraints
  - Development Workflow & Safety
  - Governance

Templates requiring updates:
  - .specify/templates/plan-template.md ✅ reviewed — generic "Constitution Check" gate, no edit required
  - .specify/templates/spec-template.md ✅ reviewed — no constitution-specific edits required
  - .specify/templates/tasks-template.md ✅ reviewed — no constitution-specific edits required

Follow-up TODOs: None. RATIFICATION_DATE set to initial adoption date (2026-07-01).
-->

# JugadaMax Constitution

JugadaMax is a premium, mobile-first, crypto-first iGaming affiliate/media website targeting
Mexico first and Spanish-speaking LATAM later. Editorial and product focus is weighted
approximately 60% Crypto Casinos, 25% Sports Betting, and 15% Fiat Online Casinos.

## Core Principles

### I. Premium Dark iGaming Media Design (NON-NEGOTIABLE)

JugadaMax MUST present as a serious, premium dark crypto iGaming media brand — never as a
generic AI landing page. The visual system MUST use the defined palette: deep navy
(`#0A1931`) and graphite (`#111417`) backgrounds, gold CTA (`#FFB800` / `#FFC300`), emerald
trust badges (`#00A86B`), warm off-white text (`#F5F5F0`), and muted text (`#B8B8B0`).
Motion MUST be lightweight only. Layouts MUST prioritize clear rankings, strong CTA buttons,
and trust blocks. Rationale: design is the primary differentiator and credibility signal for
an affiliate/media brand competing on trust.

### II. Mobile-First & Speed-First

Every page MUST be designed and built mobile-first, then enhanced for larger viewports. Speed
is a first-class feature: pages MUST minimize blocking assets, avoid heavy media, and keep
the critical rendering path lean. Performance regressions MUST be treated as defects.
Rationale: the majority of Mexican and LATAM traffic is mobile, and load speed directly drives
conversion and SEO ranking for affiliate/media sites.

### III. Ranking & Comparison Integrity

Casino and sportsbook rankings and comparison tables MUST be clear, consistent, and driven by
a documented evaluation methodology ("Cómo evaluamos los casinos"). Rankings MUST NOT be
presented as neutral fact when they are commercially influenced; the methodology MUST be
discoverable by users. Comparison data (bonuses, payments, features) MUST be accurate at time
of publication. Rationale: transparent, defensible rankings are the core value proposition and
protect the brand from misleading-advertising liability.

### IV. Trust, Compliance & Responsible Gambling (NON-NEGOTIABLE)

Every relevant page MUST surface trust blocks, a clear affiliate disclosure, and responsible
gambling notices including an 18+ requirement. Responsible gambling and affiliate-disclosure
elements MUST NOT be hidden, removed, or visually de-emphasized to boost conversion. An
E-E-A-T author system MAY be introduced later and, once introduced, author attribution and
credentials MUST be truthful. Rationale: gambling content carries legal and ethical obligations;
compliance is non-negotiable regardless of commercial pressure.

### V. Authenticity — No Fabricated Signals (NON-NEGOTIABLE)

JugadaMax MUST NOT create or display fake winners, fake reviews, fake payout screenshots, fake
social proof, fake countdown timers, or fabricated urgency. Prohibited copy includes claims such
as "dinero fácil", "sin riesgo", and "100% gana". All trust and proof elements MUST represent
real, verifiable information. Rationale: fabricated signals destroy long-term trust, violate
advertising standards, and expose the brand to regulatory and reputational risk.

## Design & Technical Constraints

The following constraints apply to v1 and MAY only be relaxed by an amendment to this document:

- No heavy 3D scenes in v1.
- No autoplay hero video.
- No particles.js or similar decorative particle backgrounds.
- Motion MUST remain lightweight and purposeful.
- The color palette in Principle I is authoritative; deviations require justification.

The homepage MUST include, at minimum: (1) Hero, (2) Quick categories, (3) Top Crypto Casinos
in Mexico, (4) Top Fiat Casinos in Mexico, (5) Top Betting Sites in Mexico, (6) Bonus/payment
highlights, (7) Cómo evaluamos los casinos, (8) Guides preview, (9) News preview,
(10) Responsible Gambling / Affiliate Disclosure, and (11) Footer.

## Development Workflow & Safety

- MUST NOT push to GitHub without explicit user confirmation.
- MUST NOT deploy to Vercel or production without explicit user confirmation.
- MUST NOT edit `.env` or secret files.
- MUST NOT delete files unless explicitly asked.
- MUST NOT run `npm audit fix --force`.
- Before large or structural changes, the plan MUST be explained first.
- After changes, a summary of exactly which files changed MUST be provided.

## Governance

This constitution supersedes conflicting practices, ad-hoc decisions, and stylistic preferences.

Amendments MUST be made by editing this file and MUST include: a rationale, a version bump per
the policy below, and an updated Sync Impact Report. Dependent templates in `.specify/templates/`
and agent guidance files (e.g. `AGENTS.md`, `.cursor/rules/`) MUST be reviewed for alignment when
an amendment changes or removes a principle.

Versioning policy (semantic):
- MAJOR: Backward-incompatible governance changes or principle removals/redefinitions.
- MINOR: A new principle or section is added, or guidance is materially expanded.
- PATCH: Clarifications, wording, or non-semantic refinements.

Compliance: All plans, specs, tasks, and code reviews MUST verify conformance with these
principles. Violations MUST be either corrected or explicitly justified in a plan's Complexity
Tracking (or equivalent) before proceeding. The NON-NEGOTIABLE principles (I, IV, V) MUST NOT be
waived.

**Version**: 1.0.0 | **Ratified**: 2026-07-01 | **Last Amended**: 2026-07-01
