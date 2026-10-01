import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, MessageCircle } from "lucide-react";
import { demos } from "../data/work";
import { company } from "../data/company";

function Lightbox({ slide, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={slide.title}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white">
        <X size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous" className="absolute left-4 bottom-5 sm:bottom-auto sm:left-3 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white">
        <ChevronLeft size={22} />
      </button>
      <img src={slide.src} alt={slide.title} onClick={(e) => e.stopPropagation()} className="max-h-[78vh] sm:max-h-[90vh] max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-7rem)] object-contain rounded-xl" />
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next" className="absolute right-4 bottom-5 sm:bottom-auto sm:right-3 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white">
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function Showcase() {
  const [demoIdx, setDemoIdx] = useState(0);
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const demo = demos[demoIdx];
  const n = demo.slides.length;
  const slide = demo.slides[i];

  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);
  const pick = (idx) => { setDemoIdx(idx); setI(0); };

  const msg = encodeURIComponent(
    demo.id === "pos"
      ? "Hi BeerFlow, I saw the Restaurant POS demo on your website. I'd like to see it for my restaurant."
      : "Hi BeerFlow, I saw the Tape Factory system on your website. I'd like something like it for my business."
  );

  return (
    <section id="work" className="relative py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Don't take our word for it. Click through the real systems.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            These are working products, not mockups. Step through each one the way your staff would use it.
          </p>
        </div>

        <div role="tablist" aria-label="Choose a system" className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mb-8">
          {demos.map((d, idx) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={idx === demoIdx}
              onClick={() => pick(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-blue-400 ${
                idx === demoIdx ? "bg-white text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {d.tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-start">
          {/* Story column */}
          <div className="order-2 lg:order-1">
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 ${
              demo.id === "tape" ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400" : "bg-violet-500/15 border-violet-400/25 text-violet-200"
            }`}>
              {demo.badge}
            </span>
            <h3 className="text-2xl font-semibold text-white">{demo.title}</h3>
            <p className="mt-2 text-zinc-400 leading-relaxed max-w-md">{demo.summary}</p>

            <AnimatePresence mode="wait">
              <motion.div key={demo.id + i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5" aria-live="polite">
                <p className="text-sm text-violet-200 mb-1">Step {i + 1} of {n}</p>
                <p className="text-lg font-semibold text-white">{slide.title}</p>
                <p className="mt-1 text-zinc-400 text-sm leading-relaxed">{slide.text}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center gap-3 [&>button:last-child]:flex-1 sm:[&>button:last-child]:flex-none">
              <button onClick={prev} aria-label="Previous step" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white focus-visible:outline-2 focus-visible:outline-blue-400"><ChevronLeft size={18} /></button>
              <button onClick={next} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-blue-400">
                Next step <ChevronRight size={16} />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-zinc-400 mb-3">Want this built around your business?</p>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-white"
              >
                <MessageCircle size={16} /> Message us on WhatsApp
              </a>
              <p className="mt-2 text-xs text-zinc-500">Free 15-minute call. No commitment.</p>
            </div>
          </div>

          {/* Viewer column */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0f] p-3 sm:p-4 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.35)]">
              <div className="relative h-[58svh] sm:h-[68vh] max-h-[640px] min-h-[340px] overflow-hidden rounded-2xl bg-black/60 flex items-center justify-center touch-pan-y">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={demo.id + i}
                    src={slide.src}
                    alt={slide.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.2 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => { if (info.offset.x < -60) next(); else if (info.offset.x > 60) prev(); }}
                    className="max-h-full max-w-full object-contain select-none"
                    draggable={false}
                  />
                </AnimatePresence>
                <button onClick={() => setZoom(true)} aria-label="View full size" className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-blue-400">
                  <Maximize2 size={16} />
                </button>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Steps">
                {demo.slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Step ${idx + 1}: ${s.title}`}
                    aria-current={idx === i}
                    className={`shrink-0 h-16 w-12 rounded-lg overflow-hidden border-2 transition-opacity focus-visible:outline-2 focus-visible:outline-blue-400 ${
                      idx === i ? "border-blue-400 opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img src={s.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {zoom && createPortal(<Lightbox slide={slide} onClose={() => setZoom(false)} onPrev={prev} onNext={next} />, document.body)}
    </section>
  );
}
