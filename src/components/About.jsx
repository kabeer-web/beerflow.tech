import { motion } from "framer-motion";
import { company } from "../data/company";
import kabeerPhoto from "../assets/kabeer-photo.webp";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Building Software That Solves Real Business Problems.
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                BeerFlow Technologies focuses on practical software rather than
                unnecessary complexity. We build systems that fit how businesses
                actually operate — manufacturing floors, restaurant counters,
                inventory rooms and billing desks.
              </p>
              <p>
                Our work covers business systems, manufacturing software, POS,
                inventory, billing, websites, custom applications and cloud SaaS
                solutions. Every system is designed around the real workflow of
                the business using it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-white">~5 years</p>
                <p className="text-xs text-zinc-500 mt-1">Development experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-xs text-zinc-500 mt-1">Active clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Karachi</p>
                <p className="text-xs text-zinc-500 mt-1">Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={kabeerPhoto}
                  alt={company.founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="relative -mt-20 px-6 pb-6 pt-4">
                <h3 className="text-xl font-semibold text-white">
                  {company.founder.name}
                </h3>
                <p className="text-sm text-violet-300 mt-0.5">
                  {company.founder.title}
                </p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {company.founder.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
