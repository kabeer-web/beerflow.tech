import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import Lenis from "lenis";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function SmoothScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (reduced()) return;
    const l = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
    window.__lenis = l;
    let id;
    const raf = (t) => { l.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); window.__lenis = null; };
  }, []);
  useEffect(() => {
    window.__lenis ? window.__lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX: s }} className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] accent-gradient" />;
}

// internal <a href="/x"> clicks navigate without a page reload
export function LinkInterceptor() {
  const nav = useNavigate();
  useEffect(() => {
    const h = (e) => {
      const a = e.target.closest("a[href^='/']");
      if (!a || e.metaKey || e.ctrlKey || a.target === "_blank") return;
      e.preventDefault();
      nav(a.getAttribute("href"));
    };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, [nav]);
  return null;
}

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const dx = useSpring(x, { stiffness: 900, damping: 50, mass: 0.2 });
  const dy = useSpring(y, { stiffness: 900, damping: 50, mass: 0.2 });
  const rx = useSpring(x, { stiffness: 150, damping: 20 });
  const ry = useSpring(y, { stiffness: 150, damping: 20 });
  const [hover, setHover] = useState(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduced()) return;
    setOn(true);
    document.documentElement.classList.add("has-cursor");
    const move = (e) => {
      x.set(e.clientX); y.set(e.clientY);
      setHover(!!e.target.closest("a,button,[role=tab],input,textarea"));
      const card = e.target.closest('[class*="rounded-2xl"][class*="border"], [class*="rounded-3xl"]');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);

  if (!on) return null;
  return (
    <>
      <motion.div style={{ x: dx, y: dy }} className="pointer-events-none fixed top-0 left-0 z-[100] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-white" />
      <motion.div
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed top-0 left-0 z-[99] -ml-[18px] -mt-[18px]"
      >
        <motion.div
          animate={{ scale: hover ? 1.9 : 1, backgroundColor: hover ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0)" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-9 w-9 rounded-full border border-white/50"
        />
      </motion.div>
    </>
  );
}
