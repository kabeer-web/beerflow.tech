import { Link } from "react-router-dom";
import { company, navLinks } from "../data/company";
import logo from "../assets/beerflow-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="BeerFlow Technologies"
                className="h-9 w-9 rounded-xl object-cover"
                width={36}
                height={36}
              />
              <span className="text-sm font-semibold text-white tracking-tight">
                {company.name}
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed mb-5">
              {company.footerTagline}
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
              Custom websites and business software for companies in Karachi and across Pakistan.
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (short) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  All services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Our work
                </Link>
              </li>
              <li>
                <a href="/restaurant-pos-karachi" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Restaurant POS
                </a>
              </li>
              <li>
                <a href="/factory-management-software" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Factory software
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  WhatsApp · {company.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-sm text-zinc-500 pt-0.5">
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-zinc-600">
            <Link to="/privacy" className="hover:text-zinc-400 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-zinc-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
