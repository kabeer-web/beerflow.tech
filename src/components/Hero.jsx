import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, ChefHat, Receipt } from "lucide-react";
import { company } from "../data/company";
import DashboardPreview from "./DashboardPreview";

const line1 = ["Business", "software,"];
const line2 = ["simplified."];
const Word = ({ children, i, grad }) => (
  <span className="inline-block overflow-hidden align-bottom pb-2 mr-[0.25em]">
    <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className={`inline-block ${grad ? "gradient-text" : ""}`}>{children}</motion.span>
  </span>
);

const chips = [
  { icon: CheckCircle2, text: "Order #1019 received", cls: "top-1 -left-1 sm:top-2 sm:-left-10", depth: 30, tone: "text-emerald-300" },
  { icon: ChefHat, text: "Kitchen: ready to serve", cls: "top-[42%] -right-1 sm:-right-10", depth: -40, tone: "text-amber-300" },
  { icon: Receipt, text: "Bill printed in one tap", cls: "-bottom-4 left-4 sm:left-2", depth: 50, tone: "text-sky-300" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yVis = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotY = useTransform(sx, (v) => v * 12), rotX = useTransform(sy, (v) => v * -10);
  const b1x = useTransform(sx, (v) => v * -70), b1y = useTransform(sy, (v) => v * -50);
  const b2x = useTransform(sx, (v) => v * 90), b2y = useTransform(sy, (v) => v * 60);
  const onMove = (e) => { mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5); };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative min-h-[100svh] pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden flex items-center">
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ x: b1x, y: b1y }} className="absolute top-[10%] left-[8%] h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] rounded-full bg-indigo-500/30 blur-[110px]" />
        <motion.div style={{ x: b2x, y: b2y }} className="absolute top-[30%] right-[5%] h-[280px] w-[280px] sm:h-[480px] sm:w-[480px] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[200px] w-[300px] sm:h-[300px] sm:w-[500px] rounded-full bg-cyan-400/15 blur-[110px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs text-zinc-300 mb-7">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Taking new projects, Karachi
          </motion.span>
          <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            {line1.map((w, i) => <Word key={w} i={i}>{w}</Word>)}<br />
            {line2.map((w, i) => <Word key={w} i={i + 2} grad>{w}</Word>)}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-7 text-lg text-zinc-400 leading-relaxed max-w-lg">
            Custom POS, factory and billing systems for restaurants, factories and shops. Built around how you already work.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="mt-9 flex flex-wrap gap-3">
            <a href="/work" className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-5px_rgba(139,92,246,0.7)] hover:shadow-[0_0_60px_0px_rgba(139,92,246,0.9)] transition-shadow">
              See it working <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
              <MessageCircle size={16} /> Talk to the developer
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-4 sm:gap-10">
            {[["~5 yrs", "Development experience"], ["2", "Active clients"], ["2", "Systems live"]].map(([a, b]) => (
              <div key={b}><p className="text-2xl font-bold">{a}</p><p className="text-xs text-zinc-500 mt-1">{b}</p></div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yVis, opacity: fade, perspective: 1200 }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative">
          <motion.div style={{ rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }} className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-2 shadow-[0_40px_120px_-30px_rgba(99,102,241,0.6)]"><DashboardPreview /></div>
            {chips.map(({ icon: Icon, text, cls, depth, tone }, i) => (
              <motion.div key={text} style={{ x: useTransform(sx, (v) => v * depth), y: useTransform(sy, (v) => v * depth) }} className={`absolute ${cls}`}>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 rounded-2xl border border-white/20 bg-[#0b0a18]/60 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-2.5 text-[11px] sm:text-xs font-medium shadow-xl">
                  <Icon size={15} className={tone} /> {text}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
