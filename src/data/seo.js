// Pure data + helpers (no JSX) so both React and the build-time prerender script can use it.
// Live, deployed domain. If you later connect a custom domain, change this one line and redeploy.
export const SITE_URL = "https://beerflow-tech.vercel.app";
export const BRAND = {
  name: "BeerFlow Technologies",
  alternateName: ["BeerFlow", "BeerFlow Tech"],
  email: "beerflowtechnologies@gmail.com",
  phone: "+923222301920",
  logo: "/favicon.png",
  ogImage: "/og-image.png",
  sameAs: ["https://github.com/kabeer-web"],
};

export const landings = {
  "/restaurant-pos-karachi": {
    title: "Restaurant POS Software in Karachi | BeerFlow Technologies",
    description: "Custom restaurant POS and management software built in Karachi: online ordering, kitchen display, one-tap billing and ingredient-level stock tracking.",
    h1: "Restaurant POS software in Karachi",
    crumb: "Restaurant POS",
    lead: "Replace the billing register and the WhatsApp order notes with one system that follows every order from the customer's phone to the kitchen, the bill and the stock shelf.",
    demo: "pos",
    schema: { name: "Restaurant POS & Management Software", type: "SoftwareApplication", category: "BusinessApplication" },
    features: [
      ["Online ordering page", "A branded menu link customers open on their phone. No app download, orders arrive straight on your dashboard."],
      ["Kitchen display", "New orders appear on a kitchen screen. Staff tap once to start preparing and once more when the food is ready."],
      ["One-tap billing", "Print the bill or mark it paid from the same screen, for dine-in and delivery."],
      ["Stock by ingredient", "Stock is tracked per ingredient, not just per dish, so every sale reduces what is actually left on the shelf."],
      ["Live owner dashboard", "Today's sales, active orders and table status in one place, on your phone or the counter PC."],
      ["Menu and price control", "Change prices, categories and availability once. Customers and staff see it immediately."],
    ],
    useCases: ["Restaurants and cafes moving from a paper register or Excel", "Delivery-heavy kitchens that take orders on WhatsApp calls", "Owners who want to see sales and stock without being at the counter"],
    faqs: [
      ["Is this a ready-made POS or custom software?", "It is built around your menu, staff flow and billing format. We start from a working restaurant system and adapt it to how you already operate."],
      ["Do customers need to install an app?", "No. Customers order from a web link on their phone."],
      ["Can it track ingredients and wastage?", "Yes. Stock is recorded per ingredient and is reduced automatically as dishes are sold."],
      ["How much does it cost?", "It depends on the size of your restaurant and the features you need. Message us on WhatsApp with a few details and we will quote you directly."],
    ],
    related: ["/inventory-management", "/billing-accounting", "/work", "/contact"],
  },
  "/factory-management-software": {
    title: "Factory & Inventory Management Software in Pakistan | BeerFlow Technologies",
    description: "Factory management and inventory software from Karachi: roll-by-roll stock, production, sale and purchase invoices and automatic party ledgers.",
    h1: "Factory and inventory management software",
    crumb: "Factory Management",
    lead: "Built with and for a tape manufacturer in Karachi: know exactly what stock you hold, what was produced, who owes you and what every bill was, without registers or scattered Excel files.",
    demo: "tape",
    schema: { name: "Factory & Inventory Management Software", type: "SoftwareApplication", category: "BusinessApplication" },
    features: [
      ["Roll-by-roll inventory", "Every roll is recorded with its size, weight and yards, and its live stock is always visible."],
      ["Production hub", "Record jumbo-to-core slitting and let the system calculate yards and update stock."],
      ["Sale and purchase invoices", "Professional invoices in a click. Purchases add stock, sales deduct it automatically."],
      ["Party ledger", "Each customer's and supplier's running balance is calculated for you."],
      ["Full activity log", "Every add, edit and delete is tracked, so you can see what changed and when."],
      ["Works on a phone", "Check stock and bills from the shop floor or from home."],
    ],
    useCases: ["Manufacturers and distributors who manage stock in registers or Excel", "Businesses that deal with many parties and need clear balances", "Owners who want one view of stock, production and bills"],
    faqs: [
      ["Can this be adapted to my type of factory?", "Yes. The tape-factory system is the starting point, and we adjust fields, production steps and invoice formats to your product."],
      ["Can we move our existing Excel data in?", "In most cases yes. We can import your current stock and party lists so you do not start from zero."],
      ["Does it work on mobile?", "Yes, the system is used from phones as well as computers."],
      ["How do I get a price?", "Message us on WhatsApp with what you manufacture or distribute and how you track stock today."],
    ],
    related: ["/inventory-management", "/custom-business-software-karachi", "/work", "/contact"],
  },
  "/inventory-management": {
    title: "Inventory & Stock Management Software in Pakistan | BeerFlow Technologies",
    description: "Inventory and stock management software from BeerFlow in Karachi: live stock, roll-by-roll or ingredient-level tracking, low-stock alerts and a full activity log.",
    h1: "Inventory and stock management software",
    crumb: "Inventory Management",
    lead: "Stop guessing what is on the shelf. Every purchase adds stock, every sale deducts it, and you can see the exact quantity at any moment instead of counting registers or Excel sheets.",
    demo: "tape", slide: 7,
    schema: { name: "Inventory & Stock Management Software", type: "SoftwareApplication", category: "BusinessApplication" },
    features: [
      ["Live stock levels", "Current quantity of every item, updated the moment something is bought, produced or sold."],
      ["Tracking that fits your business", "Roll-by-roll with size and weight for manufacturers, or ingredient-by-ingredient for restaurants."],
      ["Purchases add, sales deduct", "Stock updates itself from your invoices, so there is no second entry."],
      ["Full activity log", "See every item added, edited or deleted, so mistakes and missing stock can be traced."],
      ["Searchable and filterable", "Find an item or roll in seconds by type, size or party."],
      ["Works on a phone", "Check stock from the shop floor, the warehouse or home."],
    ],
    useCases: ["Factories and distributors tracking stock in registers or Excel", "Restaurants and cafes that want to know ingredient usage and avoid running out", "Shops with many products and frequent purchases"],
    faqs: [
      ["Can you track stock the way my business measures it?", "Yes. We have built roll-based tracking (size, weight, yards) for a factory and ingredient-based tracking for restaurants, and we adapt the units to your products."],
      ["Can I import my current Excel stock list?", "In most cases yes, so you do not start from zero."],
      ["Does stock update automatically when I bill a customer?", "Yes. Sales deduct stock and purchases add it."],
      ["How do I get a price?", "Message us on WhatsApp with what you stock and how you track it today, and we will quote you directly."],
    ],
    related: ["/factory-management-software", "/restaurant-pos-karachi", "/billing-accounting", "/contact"],
  },
  "/billing-accounting": {
    title: "Billing & Accounting Software in Pakistan | BeerFlow Technologies",
    description: "Billing and accounting software built in Karachi: fast invoices, purchase bills, automatic party ledgers and searchable bill history for Pakistani businesses.",
    h1: "Billing and accounting software",
    crumb: "Billing & Accounting",
    lead: "Create professional invoices in a click, record supplier purchases, and see how much each party owes without calculating balances by hand.",
    demo: "tape", slide: 8,
    schema: { name: "Billing & Accounting Software", type: "SoftwareApplication", category: "BusinessApplication" },
    features: [
      ["Fast sale invoices", "Pick the items, review the total and print or save the invoice in one flow."],
      ["Purchase invoices", "Record what you buy from suppliers, and stock updates automatically."],
      ["Party ledger", "Each customer's and supplier's running balance is calculated for you."],
      ["Searchable bill history", "Find any past sale or purchase bill in seconds."],
      ["AI-assisted bill entry", "Reduce typing by letting the system help read and fill in bill details."],
      ["Restaurant billing", "Print a bill or mark it paid in one tap from the kitchen-to-counter flow."],
    ],
    useCases: ["Businesses writing bills by hand or in Excel", "Distributors and manufacturers with many credit customers", "Restaurants that want quick, accurate billing"],
    faqs: [
      ["Can the invoice follow my own format?", "Yes. We shape the invoice layout and fields around how you already bill."],
      ["Does it keep customer balances?", "Yes. Every sale and payment updates that party's running balance."],
      ["Is this full accounting software?", "It covers invoicing, purchases and party ledgers. If you need more, tell us what you need and we will tell you honestly what fits."],
    ],
    related: ["/inventory-management", "/restaurant-pos-karachi", "/factory-management-software", "/contact"],
  },
  "/custom-business-software-karachi": {
    title: "Custom Business Software Development in Karachi | BeerFlow Technologies",
    description: "BeerFlow builds custom business software, billing systems, SaaS tools and business websites for small and medium companies in Karachi and across Pakistan.",
    h1: "Custom business software development in Karachi",
    crumb: "Custom Business Software",
    lead: "If your business runs on registers, Excel sheets and WhatsApp messages, we turn that workflow into software your team can actually use.",
    demo: null,
    schema: { name: "Custom Business Software Development", type: "Service", category: "Software development" },
    features: [
      ["Billing and accounts", "Invoices, ledgers and payment tracking shaped around how you already bill."],
      ["Inventory and stock", "Know what you hold, what is low and what moved."],
      ["Cloud SaaS tools", "Web-based software your staff open in a browser from any device."],
      ["Business websites", "Fast, mobile-friendly websites that show your work and bring in enquiries."],
      ["Automation", "Remove repeated manual entry from your daily routine."],
      ["Support after launch", "We stay available when your team has questions or needs changes."],
    ],
    useCases: ["Small and medium businesses outgrowing registers and Excel", "Shops and distributors with many products and customers", "Companies that need a professional website along with their software"],
    faqs: [
      ["How does a project start?", "We talk through how your business runs today, show you a similar working system, then agree on what to build first."],
      ["Do you only work with Karachi businesses?", "We are based in Karachi and work with businesses across Pakistan."],
      ["Who will I deal with?", "You work directly with the developer who builds your system."],
    ],
    related: ["/restaurant-pos-karachi", "/factory-management-software", "/billing-accounting", "/contact"],
  },
};

export const pages = {
  "/": { title: "BeerFlow Technologies | Custom Business Software in Karachi", description: "BeerFlow Technologies builds custom POS, factory management, inventory and billing software for restaurants, factories and businesses in Karachi, Pakistan.", h1: "Business software, simplified." },
  "/work": { title: "Our Work: Restaurant POS & Tape Factory Systems | BeerFlow", description: "Click through real systems built by BeerFlow: a restaurant ordering and POS system and a tape factory management system used in Karachi.", h1: "Our work", crumb: "Work" },
  "/services": { title: "Software Services: POS, Inventory, Billing & Websites | BeerFlow", description: "Restaurant POS, factory management, inventory, billing, business websites and cloud software from BeerFlow Technologies, Karachi.", h1: "Services", crumb: "Services" },
  "/about": { title: "About BeerFlow Technologies | Software Developer in Karachi", description: "Meet the developer behind BeerFlow Technologies, a Karachi software company building practical systems for restaurants and factories.", h1: "About BeerFlow", crumb: "About" },
  "/contact": { title: "Contact BeerFlow Technologies | Karachi Software Company", description: "Message BeerFlow Technologies on WhatsApp or email to discuss a POS, factory, inventory or custom software project in Karachi.", h1: "Contact us", crumb: "Contact" },
  ...Object.fromEntries(Object.entries(landings).map(([p, l]) => [p, { title: l.title, description: l.description, h1: l.h1, crumb: l.crumb }])),
};

const abs = (p) => SITE_URL + p;

export function metaFor(path) {
  const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
  const page = pages[clean];
  if (!page) return { title: "Page not found | BeerFlow Technologies", description: "This page does not exist.", canonical: abs(clean), robots: "noindex, follow", jsonld: [], known: false };
  return { ...page, canonical: abs(clean), robots: "index, follow", jsonld: jsonLd(clean), known: true };
}

export function jsonLd(path) {
  const org = {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": SITE_URL + "/#org",
    name: BRAND.name, alternateName: BRAND.alternateName, url: SITE_URL, logo: SITE_URL + BRAND.logo, image: SITE_URL + BRAND.ogImage,
    email: BRAND.email, telephone: BRAND.phone, sameAs: BRAND.sameAs,
    description: pages["/"].description,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressRegion: "Sindh", addressCountry: "PK" },
    areaServed: [{ "@type": "City", name: "Karachi" }, { "@type": "Country", name: "Pakistan" }],
  };
  const out = [];
  if (path === "/") out.push(org, { "@context": "https://schema.org", "@type": "WebSite", name: BRAND.name, alternateName: BRAND.alternateName, url: SITE_URL, publisher: { "@id": SITE_URL + "/#org" } });
  const page = pages[path];
  if (page && path !== "/") {
    out.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.crumb, item: abs(path) } ] });
  }
  const l = landings[path];
  if (l) {
    const base = { "@context": "https://schema.org", "@type": l.schema.type, name: l.schema.name, description: l.description, url: abs(path), provider: { "@id": SITE_URL + "/#org" }, areaServed: { "@type": "City", name: "Karachi" } };
    if (l.schema.type === "SoftwareApplication") { base.applicationCategory = l.schema.category; base.operatingSystem = "Web"; } else base.serviceType = l.schema.category;
    out.push(base, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: l.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  }
  return out;
}
