import { company, navLinks } from "../data/company";
import logo from "../assets/beerflow-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="BeerFlow Technologies"
                className="h-9 w-9 rounded-xl object-cover"
              />
              <span className="text-sm font-semibold text-white">
                {company.name}
              </span>
            </a>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              {company.footerTagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {company.whatsappDisplay}
                </a>
              </li>
              <li className="text-sm text-zinc-500">{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
