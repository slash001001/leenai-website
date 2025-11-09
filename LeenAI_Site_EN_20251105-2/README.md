
# LeenAI — English Website Package (Next.js 14)
**Date:** 2025-11-05

This package contains a complete, English-only, developer-ready website for **LeenAI**: pages, copy, SEO metadata,
JSON‑LD, GA4 analytics spec, QA/acceptance, and a Next.js 14 scaffold.

## Assumptions & Inputs used
- 6–8 week **AI Pilot Studio** focus; KSA-first positioning; PDPL by default; on‑prem/sovereign options.
- Prior LeenAI internal plans and prompts informed structure (agents + guardrails, impact/effort, 90‑day goals). fileciteturn1file19 fileciteturn1file20

## KPIs (90 days)
- Organic CTR (cornerstone) ≥ 3.5%; Solution-page conversion ≥ 4%; 15–25 qualified inbound leads; LCP ≤ 2.5s (mobile).

## Acceptance Criteria
- Unique Titles/Metas/H1; valid JSON‑LD; robots/sitemap submitted; GA4 events firing; Lighthouse (mobile) ≥ 90.

## Structure
- `/site` — Next.js app (App Router) with rich content pages.
- `/seo` — Titles/Metas/H1 + OG schema.
- `/schema` — JSON‑LD (Organization, Website, Service, FAQ, Article, Breadcrumb).
- `/analytics` — GA4 events spec.
- `/ab_tests` — Hero/CTA variants.
- `/qa` — QA & Acceptance.
- `/design` — Design tokens.
