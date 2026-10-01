import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { company, navLinks } from "../data/company";
import logo from "../assets/beerflow-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6">
      <nav className={`mx-auto max-w-5xl flex h-14 items-center justify-between rounded-full px-3 pl-4 border transition-all duration-500 ${scrolled ? "bg-[#0b0a18]/60 border-white/15 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(99,102,241,0.4)]" : "bg-white/[0.03] border-white/10 backdrop-blur-md"}`}>
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-8 w-8 rounded-lg object-cover" />
          <span className="text-sm font-semibold tracking-tight">{company.shortName}<span className="text-zinc-400 font-normal"> Tech</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink key={l.href} to={l.href} end className="relative px-4 py-2 text-sm rounded-full">
              {({ isActive }) => (
                <>
                  {isActive && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-white/10 border border-white/10" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                  <span className={`relative ${isActive ? "text-white" : "text-zinc-400 hover:text-white"} transition-colors`}>{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-full accent-gradient px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition">
          <MessageCircle size={15} /> Chat with us
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden p-2.5 rounded-full text-zinc-300 hover:bg-white/10">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} className="md:hidden mx-auto mt-2 max-w-5xl rounded-3xl border border-white/15 bg-[#0b0a18]/80 backdrop-blur-2xl p-3">
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href} className={`block px-4 py-3 rounded-2xl text-base ${pathname === l.href ? "bg-white/10 text-white" : "text-zinc-300"}`}>{l.label}</Link>
            ))}
            <a href={`https://wa.me/${company.whatsapp}`} className="mt-2 flex justify-center items-center gap-2 rounded-2xl accent-gradient py-3 text-sm font-semibold text-white"><MessageCircle size={16} /> Chat with us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
