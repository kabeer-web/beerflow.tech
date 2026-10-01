import { landings } from "../data/seo";
export default function RelatedLinks() {
  return (
    <nav aria-label="Solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Solutions</p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
        {Object.entries(landings).map(([p, l]) => <a key={p} href={p} className="hover:text-white">{l.h1}</a>)}
      </div>
    </nav>
  );
}
