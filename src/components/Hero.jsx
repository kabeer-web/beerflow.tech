import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[6%] h-[240px] w-[240px] sm:h-[400px] sm:w-[400px] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="absolute top-[35%] right-[4%] h-[260px] w-[260px] sm:h-[440px] sm:w-[440px] rounded-full bg-violet-600/12 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[180px] w-[280px] sm:h-[280px] sm:w-[480px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.95fr] gap-12 lg:gap-16 items-center">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur px-4 py-1.5 text-xs text-zinc-300 mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Custom development · Karachi, Pakistan
          </motion.span>

          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.06]">
            <span className="block text-white">Technology Built</span>
            <span className="gradient-text">Around Your Business.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl"
          >
            From custom websites to powerful business software, BeerFlow Technologies designs and develops digital solutions tailored to the way your company actually works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-8px_rgba(59,130,246,0.45)] hover:shadow-[0_0_50px_-4px_rgba(59,130,246,0.6)] transition-shadow"
            >
              {company.primaryCta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/work"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-7 py-3.5 text-sm font-medium text-white hover:bg-white/[0.08] transition-colors"
            >
              {company.secondaryCta}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-4 sm:gap-10"
          >
            {[
              ["Custom", "Websites & Software"],
              ["Karachi", "Based in Pakistan"],
              ["Practical", "Built for real workflows"],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="text-xl sm:text-2xl font-bold text-white">{a}</p>
                <p className="text-xs text-zinc-500 mt-1">{b}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
