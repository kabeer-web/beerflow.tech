import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { company } from "../data/company";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hi BeerFlow, I would like to discuss a project.")}`;
  const emailUrl = `mailto:${company.email}?subject=${encodeURIComponent("Project inquiry — BeerFlow Technologies")}`;

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.025] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Discuss Your Project
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Tell us how your business runs today. We will discuss the workflow,
            share relevant examples, and outline the right website or software for you.
          </p>
        </motion.div>

        {/* Primary actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_32px_-8px_rgba(59,130,246,0.4)] hover:bg-zinc-100 transition"
          >
            <MessageCircle size={17} />
            Message on WhatsApp
          </a>
          <a
            href={emailUrl}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white hover:bg-white/[0.08] transition"
          >
            <Mail size={17} />
            Send an Email
          </a>
        </motion.div>

        {/* Contact details card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-7 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4 group-hover:bg-emerald-500/15 transition">
                <Phone size={18} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">WhatsApp</p>
              <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                {company.whatsappDisplay}
              </p>
              <p className="text-xs text-zinc-500 mt-1">Usually replies within a few hours</p>
            </a>

            <a
              href={emailUrl}
              className="group flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-7 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/15 transition">
                <Mail size={18} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">Email</p>
              <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors break-all">
                {company.email}
              </p>
              <p className="text-xs text-zinc-500 mt-1">For detailed project briefs</p>
            </a>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 mb-4">
                <MapPin size={18} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">Location</p>
              <p className="text-sm font-medium text-white">{company.location}</p>
              <p className="text-xs text-zinc-500 mt-1">Serving clients across Pakistan</p>
            </div>
          </div>
        </motion.div>

        {/* Founder note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 text-center text-sm text-zinc-500"
        >
          You will speak directly with{" "}
          <span className="text-zinc-300">{company.founder.name}</span>
          {", "}
          {company.founder.title}.
        </motion.p>
      </div>
    </section>
  );
}
