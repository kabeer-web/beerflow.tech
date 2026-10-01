const items = ["Restaurant POS", "Factory management", "Inventory & stock", "Billing & ledgers", "Business websites", "Cloud software", "AI bill entry"];
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/10 bg-white/[0.02] backdrop-blur py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee flex w-max gap-12">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-lg sm:text-xl font-semibold text-zinc-300 whitespace-nowrap">
            {t}<span className="h-1.5 w-1.5 rounded-full accent-gradient" />
          </span>
        ))}
      </div>
    </div>
  );
}
