import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import kabeerPhoto from "../assets/kabeer-photo.webp";

export default function About() {
  const founder = company.team[0];

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">
            About BeerFlow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Technology Built Around Your Business
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              BeerFlow Technologies is a custom software and website development company based in Karachi, Pakistan.
              We help businesses transform ideas and operations into reliable digital systems — websites, web applications,
              POS platforms, inventory tools, factory software, and automation solutions.
            </p>
            <p>
              We do not sell one-size-fits-all products. We study how your team already works, then design and build
              technology that fits those workflows. The result is software people actually use.
            </p>
          </div>
        </motion.div>

        {/* Founder card — professional two-column layout */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="grid lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr]">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-zinc-900"
            >
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <img
                  src={kabeerPhoto}
                  alt={`${founder.name}, ${founder.title} at BeerFlow Technologies`}
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
                  loading="lazy"
                  width={750}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a0a]/40" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-col justify-center p-8 sm:p-10 lg:p-12"
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 mb-3">
                Founder
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {founder.name}
              </h3>
              <p className="text-blue-300/90 mt-1.5 mb-6 text-[15px]">
                {founder.title}
              </p>

              <p className="text-zinc-400 leading-relaxed mb-5 max-w-xl">
                {founder.description}
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-xl">
                Every engagement starts with understanding the business problem. From there we design,
                build and refine solutions that are practical, maintainable and ready for real daily use.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.08] transition"
                >
                  Contact form
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-zinc-600" />
                  {company.location}
                </span>
                <span className="hidden sm:inline text-zinc-700">·</span>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-zinc-300 transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
