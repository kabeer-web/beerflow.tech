import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { company } from "../data/company";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact && contact.getBoundingClientRect().top < window.innerHeight;
      setShow(window.scrollY > 500 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message BeerFlow on WhatsApp"
      className={`fixed z-40 bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 inline-flex items-center gap-2 rounded-full accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle size={16} /> Chat with us
    </a>
  );
}
