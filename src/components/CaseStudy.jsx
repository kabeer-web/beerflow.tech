import { motion } from "framer-motion";
import { Check, Factory } from "lucide-react";
import { caseStudy } from "../data/company";

export default function CaseStudy() {
  return (
    <section id="solutions" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Featured Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {caseStudy.client}
          </h2>
          <p className="mt-2 text-xl text-zinc-300 font-medium">
            {caseStudy.project}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300">
                <Factory size={12} />
                {caseStudy.industry}
              </span>
              <span className="inline-flex items-center rounded-full bg-violet-500/15 border border-violet-400/25 px-3 py-1 text-xs text-violet-200">
                {caseStudy.solution}
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-8">
              {caseStudy.description}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Modules
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {caseStudy.modules.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2"
                  >
                    <Check size={14} className="text-violet-300 shrink-0" />
                    <span className="text-xs text-zinc-300">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Key capabilities
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-zinc-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — UI mockup panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <span className="flex-1 text-center text-[11px] text-zinc-500">
                  Inventory · Production · Ledger
                </span>
              </div>

              <div className="p-5 space-y-5">
                {/* Flow diagram */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-semibold">
                    Manufacturing flow
                  </p>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex-1 text-center rounded-lg bg-violet-500/15 border border-violet-400/25 px-2 py-3 text-violet-200 font-medium">
                      Jambo
                    </div>
                    <span className="text-zinc-600">→</span>
                    <div className="flex-1 text-center rounded-lg bg-amber-500/10 border border-amber-500/20 px-2 py-3 text-amber-300 font-medium">
                      Production
                    </div>
                    <span className="text-zinc-600">→</span>
                    <div className="flex-1 text-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2 py-3 text-emerald-300 font-medium">
                      Core / Carton
                    </div>
                  </div>
                </div>

                {/* Categories grid */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-semibold">
                    Tape categories managed
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {caseStudy.tapeCategories.map((c) => (
                      <div
                        key={c}
                        className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-zinc-400"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Bill printing",
                    "Ledger PDF",
                    "CSV export",
                    "Backup / restore",
                    "AI bill entry",
                    "Staff login",
                  ].map((f) => (
                    <span
                      key={f}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-zinc-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
