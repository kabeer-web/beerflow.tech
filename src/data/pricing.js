// Single source of truth for website pricing. Keep in sync with the quotation PDF.
export const plans = [
  {
    id: "offline", group: "standard", tag: "Package A", name: "Offline POS",
    tagline: "Fast billing on your own computer. No internet needed for daily use.",
    dev: 20000, monthly: 2000, monthlyLabel: "Support Plan", internet: false,
    features: [
      "Works fully offline on your computer",
      "Dashboard, POS billing and order history",
      "Inventory in kg, gram, litre or piece",
      "Reports and day opening / closing",
      "Login with owner and staff roles",
      "Manual backup guidance and support",
    ],
  },
  {
    id: "cloud", group: "standard", tag: "Package B", name: "Cloud POS + AI", recommended: true,
    tagline: "An online system you can open on any device. Internet required.",
    dev: 30000, monthly: 2999, monthlyLabel: "Cloud Subscription", internet: true,
    features: [
      "Everything in Offline POS",
      "Open on phone, tablet and computer",
      "QR menu and online ordering",
      "Kitchen display and table management",
      "Recipe-based stock and customer khata",
      "Cloud hosting with automatic backup",
      "AI assistant (fair-usage limits)",
    ],
  },
  {
    id: "branded-offline", group: "branded", tag: "Package C1", name: "Branded Offline POS",
    tagline: "Your own POS product with your name, logo and idea. Works offline.",
    dev: 25000, monthly: 2500, monthlyLabel: "Support Plan", internet: false,
    features: [
      "Everything in Offline POS",
      "Your brand name, logo and colors",
      "Built around your own idea",
      "Custom receipt design",
      "White-label: no BeerFlow branding",
      "Works fully offline",
    ],
  },
  {
    id: "branded-cloud", group: "branded", tag: "Package C2", name: "Branded Cloud POS + AI", recommended: true,
    tagline: "Your own online product with AI, built around your brand and idea.",
    dev: 40000, monthly: 3499, monthlyLabel: "Cloud Subscription", internet: true,
    features: [
      "Everything in Cloud POS + AI",
      "Your brand name, logo and colors",
      "Built around your own idea",
      "Custom receipt design",
      "White-label: no BeerFlow branding",
      "Can run on your own domain (domain paid by you)",
    ],
  },
];

export const monthlyPlans = [
  {
    title: "Support Plan",
    for: "Offline packages (A and C1)",
    intro: "Offline software runs on your computer and needs no server, so this fee is not for running it. It pays for the people behind it.",
    items: [
      "Help on WhatsApp or phone when something goes wrong",
      "Bug fixes and software updates",
      "Help restoring your data from your backup",
      "Help updating menu, prices and receipt text",
    ],
  },
  {
    title: "Cloud Subscription",
    for: "Cloud packages (B and C2)",
    intro: "Your system lives online, so this fee covers the real running costs of keeping it online and safe.",
    items: [
      "Cloud hosting: open it from anywhere",
      "Automatic cloud backup of your data",
      "AI features within fair-usage limits",
      "Updates and support",
    ],
  },
];

export const monthlyStopNote =
  "If you stop the plan, offline software keeps working on your computer, but support and updates stop. Cloud access stops.";

export const pricingNotes = [
  "The development fee is paid 50% in advance and 50% before handover.",
  "The monthly plan is charged separately from the development fee, starting the month after handover.",
  "Prices are in PKR and exclude applicable taxes.",
  "Cloud plans need an internet connection. AI features have fair-usage limits.",
  "Multi-branch, expense tracking and WhatsApp bill sharing are optional add-ons, quoted separately.",
];

export const fmt = (n) => "PKR " + n.toLocaleString("en-US");
