LeenAI Website (Next.js 14 + Tailwind + TypeScript)

- App path: `LeenAI_Site_EN_20251105-2/site`
- Tech: Next.js App Router, TailwindCSS, TypeScript, GA4 (optional), Nodemailer (optional)
- Branding: Inter/Poppins, gradient `#00AEBF → #0B3D5C`, subtle motion via Framer Motion, dark mode toggle
- Bilingual: EN + AR routes (see `app/ar`)

Getting started
- `cd LeenAI_Site_EN_20251105-2/site`
- `npm install`
- `npm run dev`

Environment (optional)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX`
- `SMTP_HOST=...`, `SMTP_PORT=587`, `SMTP_USER=...`, `SMTP_PASS=...`, `LEENAI_LEADS_TO=leads@leenai.sa`

Deploy (Vercel)
- Import repo into Vercel
- Set Root Directory to `LeenAI_Site_EN_20251105-2/site`
- Framework: Next.js; Build Command: `next build`; Output: `.next`
- DNS: point `leenai.ai` to `cname.vercel-dns.com` via CNAME (root/apex uses Vercel A/AAAA)

Structure
- `site/app` pages: Home, Solutions, Case Studies, Resources, About, Contact (+ AR)
- `site/public/og` for OG images, `site/app/icon.svg` for favicon
- `seo/seo.yml` + `seo/summary.md` for metadata

Notes
- Contact form enforces PDPL consent; logs to console if SMTP is not configured.
- Tailwind is integrated (dark mode = class). Only key areas use Tailwind; legacy CSS remains for stability.
