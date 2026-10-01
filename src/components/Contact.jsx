import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { company } from "../data/company";
import banner from "../assets/work/brand-banner.webp";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}`;
  const emailUrl = `mailto:${company.email}`;

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tell us how your business runs. We'll show you the system.
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10">
            Tell us what your business needs. We&apos;ll discuss the workflow and
            build the right software around it.
          </p>

          <img src={banner} alt="BeerFlow Tech: technology that moves business" loading="lazy" className="w-full rounded-2xl border border-white/10 mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={emailUrl}
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Mail size={16} />
              Email us
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
            <a
              href={emailUrl}
              className="hover:text-zinc-300 transition-colors"
            >
              {company.email}
            </a>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              {company.whatsappDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
