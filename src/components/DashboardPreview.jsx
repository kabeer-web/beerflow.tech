import { motion } from "framer-motion";
import {
  Package,
  Factory,
  Receipt,
  TrendingUp,
  AlertTriangle,
  Layers,
  Archive,
} from "lucide-react";

const stats = [
  { label: "Jambo Stock", value: "—", icon: Package, color: "#3b82f6" },
  { label: "Core Units", value: "—", icon: Layers, color: "#06b6d4" },
  { label: "Carton Stock", value: "—", icon: Archive, color: "#8b5cf6" },
  { label: "Production", value: "—", icon: Factory, color: "#f59e0b" },
];

const modules = [
  "Jambo Inventory",
  "Core Inventory",
  "Carton Inventory",
  "Production",
  "Sale Invoices",
  "Purchase Invoices",
  "Party Ledger",
  "Analytics",
];

const categories = [
  "Clear",
  "Super Clear",
  "Tan",
  "Super Yellow",
  "Masking",
  "Color",
  "Cloth",
  "Tissue",
  "Foam",
  "Lemon",
];

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-2xl" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[11px] text-zinc-500 font-medium tracking-wide">
              Tape Factory Management System
            </span>
          </div>
        </div>

        {/* Sidebar + content mock */}
        <div className="flex min-h-[320px] sm:min-h-[380px]">
          {/* Mini sidebar */}
          <div className="hidden sm:flex w-14 flex-col items-center gap-3 py-4 border-r border-white/5 bg-white/[0.015]">
            {[Package, Layers, Factory, Receipt, TrendingUp].map((Icon, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === 0
                    ? "bg-blue-500/20 text-violet-300"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                <Icon size={16} />
              </div>
            ))}
          </div>

          {/* Main area */}
          <div className="flex-1 p-4 sm:p-5 space-y-4">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  Dashboard
                </p>
                <p className="text-sm font-medium text-white mt-0.5">
                  HS Packages · Tape Factory
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-1">
                <AlertTriangle size={12} className="text-amber-400" />
                <span className="text-[10px] font-medium text-amber-400">
                  Low stock
                </span>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={{ background: `${s.color}18` }}
                    >
                      <s.icon size={12} style={{ color: s.color }} />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-medium">
                      {s.label}
                    </span>
                  </div>
                  <div className="h-5 w-12 rounded bg-white/5 animate-pulse" />
                </div>
              ))}
            </div>

            {/* Modules chips */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-semibold">
                Modules
              </p>
              <div className="flex flex-wrap gap-1.5">
                {modules.slice(0, 6).map((m) => (
                  <span
                    key={m}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/5 text-zinc-400"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-semibold">
                Tape Categories
              </p>
              <div className="flex flex-wrap gap-1.5">
                {categories.slice(0, 7).map((c) => (
                  <span
                    key={c}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/15 border border-blue-500/15 text-violet-200/80"
                  >
                    {c}
                  </span>
                ))}
                <span className="text-[10px] px-2 py-0.5 rounded-full text-zinc-600">
                  +3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
