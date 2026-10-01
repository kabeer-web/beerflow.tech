import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { landings, pages } from "../data/seo";
import { demos } from "../data/work";
import { company } from "../data/company";

export default function Landing({ path }) {
  const l = landings[path];
  const demo = demos.find((d) => d.id === l.demo);
  const msg = encodeURIComponent(`Hi BeerFlow, I'm interested in: ${l.h1}`);
  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
      <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-6"><a href="/" className="hover:text-white">Home</a> / <span className="text-zinc-300">{l.crumb}</span></nav>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{l.h1}</h1>
      <p className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-2xl">{l.lead}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href={`https://wa.me/${company.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-full accent-gradient px-7 py-3.5 text-sm font-semibold text-white"><MessageCircle size={16} /> Get a quote on WhatsApp</a>
        <a href="/work" className="inline-flex justify-center items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium">See it working <ArrowRight size={16} /></a>
      </div>

      {demo && <img src={demo.slides[l.slide ?? 1].src} alt={`${demo.title} screen: ${demo.slides[l.slide ?? 1].title}`} loading="lazy" className="mt-12 mx-auto max-h-[460px] w-auto rounded-2xl border border-white/10" />}

      <h2 className="mt-16 text-2xl sm:text-3xl font-semibold">What you get</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {l.features.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-white/10 p-5"><h3 className="font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-zinc-400 leading-relaxed">{d}</p></div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl sm:text-3xl font-semibold">Who it is for</h2>
      <ul className="mt-5 space-y-3">{l.useCases.map((u) => <li key={u} className="flex gap-3 text-zinc-300"><Check size={18} className="mt-0.5 shrink-0 text-emerald-400" />{u}</li>)}</ul>

      <h2 className="mt-16 text-2xl sm:text-3xl font-semibold">Frequently asked questions</h2>
      <div className="mt-5 space-y-3">
        {l.faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-white/10 p-5 open:bg-white/[0.04]">
            <summary className="cursor-pointer list-none font-medium text-white flex justify-between gap-4">{q}<span className="text-zinc-500 group-open:rotate-45 transition-transform">+</span></summary>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>

      <h2 className="mt-16 text-xl font-semibold">Related</h2>
      <div className="mt-4 flex flex-wrap gap-3">{l.related.map((r) => <a key={r} href={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">{pages[r].crumb}</a>)}</div>
    </article>
  );
}
