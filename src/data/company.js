export const company = {
  name: "BeerFlow Technologies",
  shortName: "BeerFlow",
  founder: {
    name: "Kabeer",
    title: "Founder & Lead Developer",
    description:
      "Kabeer is the founder and lead developer of BeerFlow Technologies. He designs and builds practical custom websites, business software, and digital systems that match how real companies operate.",
  },
  // Public-facing team is founder-only. Do not display other individuals as founders, partners, or public representatives.
  team: [
    {
      id: "kabeer",
      name: "Kabeer",
      title: "Founder & Lead Developer",
      role: "Software development & technical leadership",
      description:
        "Designs and builds custom websites, business applications, POS systems, factory management platforms, inventory solutions, and cloud-based software tailored to each client's workflow.",
      photo: "kabeer",
      phone: "+923222301920",
      phoneDisplay: "+92 322 2301920",
    },
  ],
  email: "beerflowtechnologies@gmail.com",
  whatsapp: "+923222301920",
  whatsappDisplay: "+92 322 2301920",
  location: "Karachi, Pakistan",
  // Keep conservative, verifiable claims only
  experience: "Hands-on software development experience building real business systems.",
  activeClients: null, // do not publish unverified client counts
  tagline: "Custom Websites. Custom Software. Powerful Business Solutions.",
  description:
    "BeerFlow Technologies is a custom software and website development company based in Karachi, Pakistan. We help businesses improve operations, establish a professional digital presence, automate workflows, and grow through tailored technology solutions.",
  footerTagline: "Custom websites and business software built around real workflows.",
  primaryCta: "Discuss Your Project",
  secondaryCta: "Explore Our Work",
};

export const services = [
  {
    id: "custom-website",
    title: "Custom Website Development",
    description:
      "Professional, fast, mobile-first websites designed around your brand and business goals — not generic templates.",
    icon: "Globe",
    href: "/services/custom-website-development",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Bespoke software built around your exact processes so your team works faster with fewer errors.",
    icon: "Code2",
    href: "/services/custom-software-development",
  },
  {
    id: "web-apps",
    title: "Business Web Applications",
    description:
      "Internal tools, client portals, dashboards and operational systems that run in the browser.",
    icon: "LayoutDashboard",
    href: "/services/web-application-development",
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    description:
      "Online stores with product catalogues, carts, payments and order management tailored to your catalogue.",
    icon: "ShoppingCart",
    href: "/services/ecommerce-website-development",
  },
  {
    id: "erp",
    title: "ERP Software Development",
    description:
      "Integrated systems that connect inventory, production, sales, purchasing and accounts.",
    icon: "Boxes",
    href: "/services/erp-software-development",
  },
  {
    id: "crm",
    title: "CRM Software Development",
    description:
      "Customer relationship systems that track leads, conversations, deals and follow-ups.",
    icon: "Users",
    href: "/services/crm-software-development",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS & Management",
    description:
      "Ordering, kitchen display, billing, table management and stock tracking built for restaurants.",
    icon: "UtensilsCrossed",
    href: "/services/restaurant-pos-software",
  },
  {
    id: "inventory",
    title: "Inventory Management Software",
    description:
      "Real-time stock visibility, multi-location tracking, low-stock alerts and movement history.",
    icon: "Package",
    href: "/services/inventory-management-software",
  },
  {
    id: "factory",
    title: "Factory & Manufacturing Software",
    description:
      "Production tracking, raw-material control, finished goods inventory and operational reporting.",
    icon: "Factory",
    href: "/services/factory-management-software",
  },
  {
    id: "billing",
    title: "Billing & Accounting Systems",
    description:
      "Invoicing, party ledgers, payment tracking and financial summaries that match your process.",
    icon: "Receipt",
    href: "/services/billing-accounting-software",
  },
  {
    id: "automation",
    title: "Business Process Automation",
    description:
      "Reduce repetitive work by connecting systems and automating routine operational steps.",
    icon: "Workflow",
    href: "/services/business-process-automation",
  },
  {
    id: "saas",
    title: "SaaS Application Development",
    description:
      "Multi-tenant, cloud-hosted products with authentication, roles, billing readiness and scalable architecture.",
    icon: "Cloud",
    href: "/services/saas-application-development",
  },
];

export const caseStudy = {
  client: "HS Packages",
  project: "Tape Factory Management System",
  industry: "Tape Manufacturing",
  solution: "Custom Factory Management Software",
  description:
    "Custom software developed for a local tape manufacturing business. The system manages manufacturing-related inventory, production, sales, purchases and accounts.",
  modules: [
    "Jambo Inventory",
    "Core Inventory",
    "Carton Inventory",
    "Production",
    "Sales",
    "Purchases",
    "Billing",
    "Party Ledger",
    "Analytics",
  ],
  features: [
    "Jambo → production/slitting → Core / Carton inventory flow",
    "Multiple tape categories (Clear, Super Clear, Brown/Tan, Super Yellow, Masking, Color, Cloth, Tissue, Foam, Lemon)",
    "Sale & purchase invoices with bill printing",
    "Customer / party ledger with opening balances and debit/credit entries",
    "Dashboard analytics and low-stock monitoring",
    "AI-assisted bill entry",
    "CSV export, ledger PDF printing, data backup & restore",
    "Authentication, staff login and role/access structure",
  ],
  tapeCategories: [
    "Clear Tape",
    "Super Clear",
    "Brown / Tan",
    "Super Yellow",
    "Masking",
    "Color Tape",
    "Cloth Tape",
    "Tissue Tape",
    "Foam Tape",
    "Lemon",
  ],
};

export const products = [
  {
    id: "tape-factory",
    name: "Tape Factory Management System",
    client: "HS Packages",
    status: "Live client project",
    type: "Software",
    description:
      "Custom business management system for a local tape manufacturing operation covering inventory, production, sales, purchases and accounts.",
  },
  {
    id: "restaurant-pos",
    name: "Restaurant POS & Ordering System",
    client: null,
    status: "Production-ready system",
    type: "Software",
    description:
      "Full restaurant POS with online customer menu, dine-in QR ordering, delivery, table management, kitchen display, billing, menu & stock management, and staff roles.",
  },
  {
    id: "qalandari-biryani",
    name: "Qalandari Biryani Food Center",
    client: "Qalandari Biryani",
    status: "Live client website",
    type: "Website",
    url: "https://qalandari-biryani.vercel.app",
    description:
      "Online ordering website for a biryani restaurant — menu, cart, and WhatsApp order flow so customers order in a few taps.",
  },
  {
    id: "pizza-party",
    name: "Pizza Party Baldia",
    client: "Pizza Party",
    status: "Live client website",
    type: "Website",
    url: "https://pizzapartybaldia.vercel.app",
    description:
      "Pizza ordering website with flavour picker, size options, deals and direct WhatsApp ordering for a pizza shop in Baldia, Karachi.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn how your business works today, the problems you face, and the outcomes you need.",
  },
  {
    number: "02",
    title: "Design",
    description: "We design the solution around your real workflows, not around a generic template.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop, test and refine the website or software with clear checkpoints.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, train your team, and continue improving the system as your business grows.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const faqs = [
  {
    q: "What does BeerFlow Technologies build?",
    a: "We build custom websites, business web applications, e-commerce platforms, POS systems, inventory and factory management software, billing systems, and other tailored digital solutions for companies that need technology shaped around their operations.",
  },
  {
    q: "Are you a product company or a custom development company?",
    a: "We are a custom development company. We design and build solutions around each client's specific needs. Some of our systems (such as restaurant POS and factory management) start from proven foundations and are then adapted.",
  },
  {
    q: "Do you work only with restaurants and factories?",
    a: "Those are strong examples of our work, but we also build websites and software for retail, professional services, startups and other growing businesses that need better digital systems.",
  },
  {
    q: "How does a project start?",
    a: "Message us on WhatsApp or use the contact form. We discuss your current workflow, share relevant examples, and define a practical first scope before any commitment.",
  },
  {
    q: "Where is BeerFlow based?",
    a: "BeerFlow Technologies is based in Karachi, Pakistan. We work with clients across Pakistan and are open to remote collaboration.",
  },
  {
    q: "Can you improve or rebuild an existing system?",
    a: "Yes. We can modernise an existing website, extend current software, or replace tools that no longer fit the way your team works.",
  },
];

export const industries = [
  {
    id: "restaurants",
    title: "Restaurants & Food Businesses",
    description: "Ordering systems, POS, online menus, kitchen workflows and inventory for food operations.",
    href: "/industries/restaurants",
  },
  {
    id: "retail",
    title: "Retail & Wholesale",
    description: "Inventory, billing, multi-location stock and customer management for trading businesses.",
    href: "/industries/retail",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Factories",
    description: "Production tracking, raw materials, finished goods and operational reporting.",
    href: "/industries/manufacturing",
  },
  {
    id: "logistics",
    title: "Logistics & Distribution",
    description: "Order tracking, inventory movement and operational visibility across the supply chain.",
    href: "/industries/logistics",
  },
  {
    id: "professional",
    title: "Professional Services",
    description: "Client portals, booking systems, CRM-style tools and professional websites.",
    href: "/industries/professional-services",
  },
  {
    id: "startups",
    title: "Startups & Growing Businesses",
    description: "MVPs, web applications and scalable systems that support early growth without over-engineering.",
    href: "/industries/startups",
  },
];
