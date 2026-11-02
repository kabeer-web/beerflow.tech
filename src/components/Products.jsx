import { motion } from "framer-motion";
import { ExternalLink, Building2, UtensilsCrossed, Globe } from "lucide-react";
import { products } from "../data/company";

const icons = {
  "tape-factory": Building2,
  "restaurant-pos": UtensilsCrossed,
  "qalandari-biryani": Globe,
  "pizza-party": Globe,
};

export default function Products() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Real projects we have delivered
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Live software systems and client websites — not mockups. Click through
            the demos above, or open the live websites we built for restaurants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const Icon = icons[p.id] || Building2;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center">
                    <Icon size={20} className="text-violet-300" />
                  </div>
                  <span
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                      p.status?.includes("Live") || p.status?.includes("client")
                        ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                        : "bg-zinc-500/10 border-zinc-500/20 text-zinc-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {p.name}
                </h3>
                {p.client && (
                  <p className="text-sm text-violet-300/90 mb-2">
                    Client: {p.client}
                  </p>
                )}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {p.description}
                </p>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    View live site <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
