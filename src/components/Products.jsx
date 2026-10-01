import { motion } from "framer-motion";
import { products } from "../data/company";
import { Building2, UtensilsCrossed } from "lucide-react";

const icons = {
  "tape-factory": Building2,
  "restaurant-pos": UtensilsCrossed,
};

export default function Products() {
  return (
    <section id="work" className="py-20 sm:py-28 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Systems We&apos;ve Built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const Icon = icons[p.id] || Building2;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-zinc-300" />
                  </div>
                  <span
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                      p.client
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
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
                  <p className="text-sm text-violet-300/90 mb-3">
                    Client: {p.client}
                  </p>
                )}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
