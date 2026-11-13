import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Wifi, WifiOff, MessageCircle } from "lucide-react";
import { plans, pricingNotes, monthlyPlans, monthlyStopNote, fmt } from "../data/pricing";
import { company } from "../data/company";

const tabs = [
  { id: "standard", label: "Standard" },
  { id: "branded", label: "Your own brand" },
];

export default function Pricing() {
  const [group, setGroup] = useState("standard");
  const shown = plans.filter((p) => p.group === group);

  return (
    <section id="pricing" className="py-16 sm:py-24 relative border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">Restaurant POS plans</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Simple pricing for Karachi restaurants.</h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            One development fee to build and set up your system, plus a small monthly plan for support and updates.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div role="tablist" aria-label="Plan type" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={group === t.id}
                onClick={() => setGroup(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  group === t.id ? "accent-gradient text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {shown.map((p, i) => {
            const msg = encodeURIComponent(`Hi BeerFlow, I am interested in the ${p.name} plan (${p.tag}). Can I get a demo?`);
            return (
              <motion.div
                key={p.id + group}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
                  p.recommended ? "border-blue-400/40 bg-blue-500/[0.06]" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {p.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full accent-gradient px-3 py-1 text-[11px] font-semibold text-white">
                    Recommended
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">{p.tag}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                    {p.internet ? <Wifi size={13} /> : <WifiOff size={13} />}
                    {p.internet ? "Internet required" : "Works offline"}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{p.tagline}</p>

                <div className="mt-5">
                  <p className="text-4xl font-bold tracking-tight text-white">{fmt(p.dev)}</p>
                  <p className="mt-1 text-xs text-zinc-500">development fee (50% advance, 50% before handover)</p>
                  <p className="mt-3 text-sm text-zinc-200">
                    <span className="font-semibold">+ {fmt(p.monthly)}</span> / month <span className="text-zinc-400">{p.monthlyLabel}</span>
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-zinc-300 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0 text-blue-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  <MessageCircle size={16} /> Get a demo on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white text-center">What does the monthly plan cover?</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {monthlyPlans.map((m) => (
              <div key={m.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">{m.for}</p>
                <p className="mt-1 text-lg font-semibold text-white">{m.title}</p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{m.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {m.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0 text-blue-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-zinc-500">{monthlyStopNote}</p>
        </div>

        <ul className="mt-8 mx-auto max-w-3xl space-y-1.5 text-xs text-zinc-500 leading-relaxed">
          {pricingNotes.map((n) => (
            <li key={n} className="flex gap-2"><span aria-hidden>·</span><span>{n}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
