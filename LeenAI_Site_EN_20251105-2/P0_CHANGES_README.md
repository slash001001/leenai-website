# LeenAI Site — P0 Fixes Applied (2025-11-09T11:54:08.490981Z)

This patch implements **P0** items: contact form with PDPL consent + GA4 events, GA4 instrumentation, OG images, and PDPL Privacy updates.

## What changed
- **GA4**: Added GA4 snippet in `site/app/layout.tsx`. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in environment.
- **Client Analytics**: `site/components/ClientAnalytics.tsx` logs `cta_click`, `lead_submit`, and `doc_download`.
- **Contact form**: `site/app/contact/page.tsx` (client form) + `site/app/api/contact/route.ts` (SMTP email). Sends `lead_submit` GA event.
- **Privacy**: `site/app/privacy/page.tsx` rewritten with DSAR contact and **≤ 90 days** retention.
- **OG images**: generated in `site/public/og/*.png` for main pages (1200×630).
- **Beta badge**: small "Beta" ribbon in header for soft‑launch.

## Environment variables (Vercel/Next.js)
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional SMTP to receive leads by email
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=mailer@leenai.sa
SMTP_PASS=yourpassword
LEENAI_LEADS_TO=leads@leenai.sa
```

## Events
- `cta_click`: main hero CTA and any link with `data-ga="cta_click"`.
- `lead_submit`: fired on successful contact form submission.
- `doc_download`: fired when a link has `download` attribute or `data-ga="download"`.

## PDPL defaults
- DSAR email: `privacy@leenai.sa` (change if needed).
- Retention: ≤ 90 days for contact submissions unless a contract is signed.

## Notes
- Robots/sitemap already allow indexing. OG images are now real; LinkedIn/Twitter previews will be clean.
- If SMTP is not set, leads are logged to server console but not emailed.