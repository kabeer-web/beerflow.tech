const pos = import.meta.glob("../assets/work/pos/*.webp", { eager: true, import: "default" });
const tape = import.meta.glob("../assets/work/tape/*.webp", { eager: true, import: "default" });
const img = (set, n) => set[`../assets/work/${set === pos ? "pos" : "tape"}/${String(n).padStart(2, "0")}.webp`];

export const demos = [
  {
    id: "pos",
    tab: "Restaurant POS",
    badge: "Demo system",
    title: "Restaurant POS & Ordering",
    summary: "One order, tracked from the customer's phone to the kitchen, the bill and the stock shelf.",
    aspect: "portrait",
    slides: [
      [1, "Order → Kitchen → Billing → Stock", "A restaurant's whole order lifecycle in one system."],
      [2, "Customer orders on a branded site", "No app download. Diners open a link and order."],
      [3, "Menu with live pricing and photos", "Menu changes appear instantly for every customer."],
      [4, "Checkout on one screen", "Name, phone, address, place order."],
      [5, "Instant order confirmation", "Customer gets an order number right away."],
      [6, "Owner sees it live", "Sales, orders and table status on one dashboard."],
      [7, "Kitchen taps to start preparing", "The kitchen display shows every new order."],
      [8, "…and taps again when it's ready", "Staff know the moment food is ready."],
      [9, "Billing in one tap", "Print the bill or mark it paid."],
      [10, "Full menu and stock in one place", "Prices, categories and availability, managed together."],
      [11, "Stock tracked by ingredient", "Each sale deducts ingredients automatically."],
      [12, "Want this for your restaurant?", "Message us and see it running."],
    ].map(([n, title, text]) => ({ src: img(pos, n), title, text })),
  },
  {
    id: "tape",
    tab: "Tape Factory",
    badge: "Real client · HS Packages",
    title: "Tape Factory Management",
    summary: "Built for HS Packages, a packaging manufacturer in Karachi. Rolls, production, bills and party accounts, all in one place.",
    aspect: "portrait",
    slides: [
      [1, "Tape Factory, fully digital", "Live roll inventory, auto purchase and sale invoicing, production hub, party ledger."],
      [2, "Simple navigation", "Inventory, production and billing, all in one menu."],
      [3, "Business dashboard", "Sales, purchases and stock at a glance."],
      [4, "Full activity log", "Every roll added, edited or deleted is tracked."],
      [5, "All bills in one place", "Search sale and purchase history any time."],
      [6, "Party ledger", "Each party's running balance is calculated automatically."],
      [7, "Roll-by-roll stock", "Micron, width, yards and weight for every roll."],
      [8, "Live inventory", "The exact stock of each roll, in real time."],
      [9, "Sale invoice with AI bill entry", "A professional invoice ready in one click."],
      [10, "Production hub", "Jumbo to core slitting, with yards calculated for you."],
      [11, "Purchase invoice", "Supplier rolls arrive, stock updates itself."],
    ].map(([n, title, text]) => ({ src: img(tape, n), title, text })),
  },
];
