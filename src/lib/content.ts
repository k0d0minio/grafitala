/**
 * Central content for the Grafitala landing page.
 * Keeping copy here makes it easy for the team to update wording
 * without touching component logic.
 */

export const company = {
  name: "Grafitala",
  tagline: "Packaging, printed to sell.",
  foundedYear: 1993,
  yearsExperience: "30+",
  location: "Abóboda, Portugal",
  email: "grafitala@grafitala.com",
  phone: "+351 214 441 161",
  phoneHref: "tel:+351214441161",
  address: {
    line1: "Rua Natael Rianço",
    line2: "2785-543 S. Domingos de Rana",
    region: "Abóboda · Cascais, Portugal"
  },
  hours: [
    { days: "Monday – Friday", time: "08:00 – 18:00" },
    { days: "Saturday", time: "09:00 – 13:00" },
    { days: "Sunday", time: "Closed" }
  ]
} as const;

export const nav = [
  { label: "What we print", href: "#products" },
  { label: "How we work", href: "#process" },
  { label: "Why Grafitala", href: "#why" },
  { label: "Contact", href: "#contact" }
] as const;

export const stats = [
  { value: "30+", label: "Years in print" },
  { value: "2", label: "Family generations" },
  { value: "2", label: "Production lines" },
  { value: "100%", label: "Made in-house" }
] as const;

export type Product = {
  key: string;
  title: string;
  description: string;
};

export const products: Product[] = [
  {
    key: "jelly",
    title: "Jelly & dessert boxes",
    description:
      "Bright, appetite-driven cartons that keep their shape on the shelf and in the fridge."
  },
  {
    key: "ready-meals",
    title: "Ready-meal packaging",
    description:
      "Sturdy folding cartons built for convenience food — freezer to microwave to table."
  },
  {
    key: "pudding",
    title: "Pudding cartons",
    description:
      "Small-format boxes with the crisp folds and rich colour that premium desserts deserve."
  },
  {
    key: "meat",
    title: "Meat boxes",
    description:
      "Robust, food-safe cartons engineered for weight, cold-chain and a clean presentation."
  },
  {
    key: "labels",
    title: "Labels",
    description:
      "Sharp, colour-accurate labels that carry your brand and every regulatory detail."
  }
];

export type Step = {
  n: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    n: "01",
    title: "Design",
    description:
      "Our in-house designer turns your brief into print-ready artwork — structure, dielines and colour, all considered."
  },
  {
    n: "02",
    title: "Print",
    description:
      "Two industrial presses run offset and UV printing across two production lines to keep pace with real demand."
  },
  {
    n: "03",
    title: "Cut",
    description:
      "Precision die-cutting gives every carton clean edges and folds that snap together exactly as designed."
  },
  {
    n: "04",
    title: "Glue",
    description:
      "Dedicated gluing, run by professionals, delivers finished, ready-to-fill packaging — not flat sheets."
  }
];

export const reasons = [
  {
    title: "A family name, two generations deep",
    description:
      "Grafitala has been printing for over 30 years and has passed from one generation of the family to the next. The craft — and the standards — carry over."
  },
  {
    title: "Everything under one roof",
    description:
      "Design, printing, cutting and gluing all happen in-house. Fewer hand-offs, tighter quality control and a single point of contact for your whole job."
  },
  {
    title: "Built to keep up",
    description:
      "Two big industrial printers and two production lines, plus a dedicated cutting-and-gluing machine, mean we can hold pace with serious volumes."
  },
  {
    title: "Offset and UV printing",
    description:
      "From large, cost-efficient offset runs to the punch and durability of UV, we match the technique to your product and budget."
  }
];

export const techniques = [
  {
    title: "Offset printing",
    description:
      "The workhorse for volume. Consistent colour and sharp detail across long runs, at the right cost per box."
  },
  {
    title: "UV printing",
    description:
      "Instant-cure inks for vivid colour, crisp finishes and durable surfaces that survive handling and cold storage."
  },
  {
    title: "Die-cutting",
    description:
      "Custom shapes and structural folds cut to tight tolerances, so every carton assembles cleanly."
  },
  {
    title: "Gluing & finishing",
    description:
      "Professional gluing turns printed, cut sheets into finished cartons — ready for your line to fill."
  }
] as const;
