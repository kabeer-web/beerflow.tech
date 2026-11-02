import { landings } from "../data/seo";

export default function RelatedLinks() {
  const items = Object.entries(landings).slice(0, 8);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Popular solutions"
      className="border-t border-white/5 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
          Solutions
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
          {items.map(([path, page]) => (
            <a
              key={path}
              href={path}
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {page.crumb || page.h1}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
