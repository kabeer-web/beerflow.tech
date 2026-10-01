// Called by vite.config.js at the end of every `vite build` (so it runs no matter what build command the host uses). Writes one real HTML file per route (correct title, description, canonical,
// social tags, JSON-LD and crawlable fallback text), plus sitemap.xml, robots.txt and 404.html.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { SITE_URL, BRAND, pages, landings, metaFor } from "../src/data/seo.js";

export function prerender() {
const tpl = readFileSync("dist/index.html", "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function head(m) {
  const img = SITE_URL + BRAND.ogImage;
  return [
    `<link rel="canonical" href="${m.canonical}" />`, `<meta name="robots" content="${m.robots}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`, `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${m.canonical}" />`, `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${BRAND.name}" />`, `<meta property="og:image" content="${img}" />`, `<meta property="og:locale" content="en_PK" />`,
    `<meta name="twitter:card" content="summary_large_image" />`, `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`, `<meta name="twitter:image" content="${img}" />`,
    ...m.jsonld.map((o) => `<script type="application/ld+json" data-seo="1">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`),
  ].join("\n    ");
}

function fallback(path, m) {
  const l = landings[path];
  const nav = Object.keys(pages).map((p) => `<a href="${p}">${pages[p].crumb || "Home"}</a>`).join(" ");
  const body = l ? `<ul>${l.features.map(([t, d]) => `<li><h2>${t}</h2><p>${d}</p></li>`).join("")}</ul>` : "";
  return `<div id="root"><header><nav>${nav}</nav></header><main><h1>${m.h1 || BRAND.name}</h1><p>${m.description}</p>${body}</main></div>`;
}

function build(path, m, file) {
  let html = tpl
    .replace(/<title>.*?<\/title>/s, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace("</head>", `  ${head(m)}\n  </head>`)
    .replace('<div id="root"></div>', fallback(path, m));
  if (file !== "dist/index.html") mkdirSync(file.replace(/\/[^/]+$/, ""), { recursive: true });
  writeFileSync(file, html);
}

for (const path of Object.keys(pages)) build(path, { ...metaFor(path), h1: pages[path].h1 }, path === "/" ? "dist/index.html" : `dist${path}/index.html`);
build("/404", { ...metaFor("/404"), h1: "Page not found" }, "dist/404.html");

const day = new Date().toISOString().slice(0, 10);
writeFileSync("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${day}</lastmod></url>`).join("\n")}\n</urlset>\n`);
writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`prerendered ${Object.keys(pages).length} pages + 404, sitemap.xml, robots.txt`);
}
