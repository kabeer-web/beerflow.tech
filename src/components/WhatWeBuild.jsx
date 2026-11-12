import { motion } from "framer-motion";
import { UtensilsCrossed, Factory, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Plain-language answer to "what does this company actually make for me?"
const items = [
  {
    icon: UtensilsCrossed,
    who: "Restaurants & cafes",
    problem: "Orders on WhatsApp, bills on paper, stock guessed.",
    result: "One system: customer orders from a link, the kitchen sees it, the bill prints, stock updates itself.",
    href: "/restaurant-pos-karachi",
    cta: "See restaurant POS",
  },
  {
    icon: Factory,
    who: "Factories & distributors",
    problem: "Stock in registers, balances in Excel, bills by hand.",
    result: "Live stock, production records, invoices and every party's balance in one place, on phone or PC.",
    href: "/factory-management-software",
    cta: "See factory software",
  },
  {
    icon: Globe,
    who: "Any business that needs a website",
    problem: "No online presence, or a site that does not bring enquiries.",
    result: "A fast, mobile-friendly website with a WhatsApp button, built to turn visitors into messages.",
    href: "/custom-business-software-karachi",
    cta: "See what we build",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-16 sm:py-24 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">What we build</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            We replace registers, Excel and WhatsApp chaos with software your team can use.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Pick the line that sounds like your business. Each one links to a working example.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, who, problem, result, href, cta }, i) => (
            <motion.div
              key={who}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
            >
              <Icon size={22} className="text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{who}</h3>
              <p className="mt-3 text-sm text-zinc-500"><span className="text-zinc-400 font-medium">Problem:</span> {problem}</p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed"><span className="text-zinc-200 font-medium">What you get:</span> {result}</p>
              <Link to={href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-white mt-auto pt-5">
                {cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
