import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor, SITE_URL, BRAND } from "../data/seo";

function upsert(sel, create, attrs) {
  let el = document.head.querySelector(sel);
  if (!el) { el = document.createElement(create); document.head.appendChild(el); }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = metaFor(pathname);
    document.title = m.title;
    upsert('meta[name="description"]', "meta", { name: "description", content: m.description });
    upsert('meta[name="robots"]', "meta", { name: "robots", content: m.robots });
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: m.canonical });
    const og = { "og:title": m.title, "og:description": m.description, "og:url": m.canonical, "og:type": "website", "og:site_name": BRAND.name, "og:image": SITE_URL + BRAND.ogImage, "og:locale": "en_PK" };
    Object.entries(og).forEach(([p, c]) => upsert(`meta[property="${p}"]`, "meta", { property: p, content: c }));
    const tw = { "twitter:card": "summary_large_image", "twitter:title": m.title, "twitter:description": m.description, "twitter:image": SITE_URL + BRAND.ogImage };
    Object.entries(tw).forEach(([n, c]) => upsert(`meta[name="${n}"]`, "meta", { name: n, content: c }));
    document.head.querySelectorAll("script[data-seo]").forEach((s) => s.remove());
    m.jsonld.forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.dataset.seo = "1"; s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [pathname]);
  return null;
}
