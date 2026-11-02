# SEO, Local SEO & GEO Documentation

## Technical SEO (implemented / retained)
- robots.txt generated at build: Allow: / + Sitemap
- sitemap.xml generated from `pages` object in seo.js
- Per-route HTML prerender with unique title, description, canonical, Open Graph, Twitter cards, JSON-LD
- Canonical URLs use SITE_URL + path
- Clean URLs (no trailing slash) via vercel.json
- Structured data: Organization/ProfessionalService, WebSite, BreadcrumbList, Service/SoftwareApplication + FAQPage on landing pages
- No fake aggregateRating or reviews
- Semantic HTML and existing H1 hierarchy to be maintained on new pages

## Keyword → URL mapping (primary intents)
| Intent | Primary URL |
|--------|-------------|
| Custom software development company Karachi / Pakistan | / |
| Website development company Karachi | / and /services |
| Custom website development | /services/custom-website-development (to implement) |
| Restaurant POS software Karachi | /restaurant-pos-karachi |
| Factory management software | /factory-management-software |
| Inventory management software | existing landing / related |
| Billing / accounting software | existing landing |
| Our work / portfolio | /work |
| About founder | /about |
| Contact | /contact |

Avoid keyword cannibalization: each service landing owns one primary intent.

## Local SEO notes
- Consistent NAP: BeerFlow Technologies, Karachi, Pakistan, phone +92 322 2301920, email beerflowtechnologies@gmail.com
- Do not publish a residential address as office
- GBP optimization steps are in MANUAL_SETUP.md
- Use location language naturally (“based in Karachi”, “serving businesses across Pakistan”)

## GEO / AI search foundations
- Clear, factual company identity and founder information
- Crawlable content via prerendered HTML
- Direct answers in FAQs
- Consistent service descriptions
- Structured data aligned with visible content
- robots.txt allows major search crawlers
- Do not block Googlebot / Bingbot
- Optional future: factual llms.txt (not a ranking guarantee)
- Do not promise AI Overview or ChatGPT placement

## Content roadmap (recommended, write only high-quality pieces)
1. Custom Software vs Ready-Made Software
2. How to Choose a Software Development Company in Pakistan
3. Restaurant Management Software: Essential Features
4. Inventory Management Problems and Solutions
5. When Does a Business Need Custom Software?
6. Website Development Cost considerations in Pakistan (mark pricing claims for verification)
7. How Digital Transformation Improves Operations

Publish only after human review. Prefer depth over volume.
