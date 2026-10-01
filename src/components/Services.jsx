import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Factory,
  Package,
  Receipt,
  Globe,
  Code2,
  Cloud,
} from "lucide-react";
import { services } from "../data/company";

const iconMap = {
  UtensilsCrossed,
  Factory,
  Package,
  Receipt,
  Globe,
  Code2,
  Cloud,
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Software for the Way Your Business Works.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            BeerFlow Technologies develops practical digital systems tailored to
            real operational workflows — from factory floors to restaurant
            counters.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Code2;
            return (
              <motion.div
                key={s.id}
                variants={item}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/25 hover:bg-white/[0.04] card-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-blue-500/15 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors">
                  <Icon size={20} className="text-violet-300" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
