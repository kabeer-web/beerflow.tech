import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";
import Lenis from "lenis";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (reduced()) return;

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] accent-gradient pointer-events-none"
    />
  );
}

// Internal <a href="/x"> clicks navigate without a full page reload
export function LinkInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='/']");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("//") || href.includes("://")) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [navigate]);

  return null;
}

// Custom cursor removed for performance and accessibility.
// Native cursor is clearer and avoids lag on lower-end devices.
export function Cursor() {
  return null;
}
