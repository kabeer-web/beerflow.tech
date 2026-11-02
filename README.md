# BeerFlow Technologies Website

Premium corporate website for BeerFlow Technologies — custom website and software development company based in Karachi, Pakistan.

## Stack
- React 19 + Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router
- Build-time prerender for SEO (titles, meta, JSON-LD, sitemap, robots)

## Scripts
```bash
npm install
npm run dev
npm run build
npm run preview
```

After `npm run build`, `dist/` contains prerendered HTML per route, sitemap.xml and robots.txt.

## Key configuration
- `src/data/company.js` — company identity, services, FAQs, process
- `src/data/seo.js` — SITE_URL, page metadata, landings, structured data helpers
- `src/data/work.js` — portfolio demos
- `scripts/prerender.mjs` — post-build SEO files

## Important rules
- Only Kabeer is presented as the public founder/representative.
- Do not invent clients, reviews, ratings, awards or office addresses.
- Keep SITE_URL in sync with the live domain.
- Never commit API secrets.

## Documentation
See `/docs` for:
- IMPLEMENTATION_REPORT.md
- MANUAL_SETUP.md
- SEO_AND_GEO.md

## Deploy
Push to GitHub and connect to Vercel, or upload the project. Existing vercel.json is configured for clean URLs and correct sitemap/robots headers.
