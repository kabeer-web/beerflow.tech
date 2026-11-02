# Manual Setup Guide — BeerFlow Technologies

## 1. Deploy / Redeploy on Vercel
1. Push the updated project to your GitHub repository (or import the ZIP).
2. In Vercel Dashboard → Project → Deployments → Redeploy (or connect the repo).
3. Confirm Production URL: https://beerflow-tech.vercel.app/ (or your custom domain).
4. Verify clean URLs and no trailing-slash redirects (vercel.json already sets cleanUrls + trailingSlash: false).

## 2. Environment / Domain
- If connecting a custom domain: Vercel → Project → Settings → Domains → Add domain.
- Update `SITE_URL` in `src/data/seo.js` to the final production domain, then redeploy.
- Keep Google site verification meta tag in index.html (already present).

## 3. Google Search Console
1. Go to https://search.google.com/search-console
2. Select or add the property for your domain / URL-prefix.
3. Verification: the existing meta tag `google-site-verification` is already in index.html. Confirm it matches the property.
4. Sitemaps → Add sitemap URL: `https://beerflow-tech.vercel.app/sitemap.xml` (or your domain).
5. After deployment, use URL Inspection on the homepage and key service pages and request indexing.

## 4. Bing Webmaster Tools
1. https://www.bing.com/webmasters
2. Add site → verify (meta or XML file method).
3. Submit the same sitemap URL.
4. Optional: enable IndexNow if you later add the API key (do not commit secrets).

## 5. Google Business Profile (existing — do not create a new one)
Update manually:
1. Open Google Business Profile Manager: https://business.google.com
2. Confirm business name: **BeerFlow Technologies**
3. Category recommendations (choose the most accurate primary):
   - Software company
   - Website designer
   - Computer software store / IT services (adjust to best fit)
4. Website: https://beerflow-tech.vercel.app/ (or final domain)
5. Phone: +92 322 2301920
6. Description: use the company description from company.js (custom software & website development).
7. Services: list the core services from the website (Custom Website Development, Custom Software Development, Restaurant POS, etc.).
8. Do **not** invent address if you do not have a public office. Prefer service-area business if that matches reality.
9. Photos: upload genuine project or workspace photos only.
10. Posts: share project updates or insights occasionally.
11. Reviews: ask real clients for honest reviews; never buy or fabricate reviews.

## 6. Contact form
- Current form is frontend. Choose one:
  - Formspree / Getform / Web3Forms (simple, no backend)
  - Or a small serverless function on Vercel
- Never put API secret keys in frontend source.
- After integration, test success and error states.

## 7. Analytics (recommended)
- Google Analytics 4 or Plausible / Umami.
- Add the tracking snippet only after privacy policy is live and consent approach is decided.

## 8. WhatsApp / Email
- WhatsApp: +923222301920 (already used in CTAs)
- Email: beerflowtechnologies@gmail.com
- Keep these consistent across website, GBP, and signatures.

## 9. Social / GitHub
- Update GitHub profile and any LinkedIn presence to match the new positioning.
- sameAs in schema currently points to https://github.com/kabeer-web — keep accurate.

## 10. After deploy checklist
- [ ] Homepage title and H1 correct
- [ ] About shows only Kabeer publicly
- [ ] Sitemap returns 200 and lists important URLs
- [ ] robots.txt allows crawling and points to sitemap
- [ ] Contact / WhatsApp links work on mobile
- [ ] No console errors on main pages
- [ ] 404 page works
- [ ] Open Graph image appears when sharing
