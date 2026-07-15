import type { ProductKey } from "@/lib/content";

/**
 * English copy for the Grafitala site. This object is the canonical shape for
 * every dictionary — other locales must mirror its structure (enforced via the
 * `Dictionary` type derived from it in `../dictionaries.ts`).
 */
export const en = {
  languageSwitcher: {
    label: "Language",
    ariaLabel: "Change language"
  },

  nav: [
    { label: "What we print", href: "#products" },
    { label: "How we work", href: "#process" },
    { label: "Why Grafitala", href: "#why" },
    { label: "Contact", href: "#contact" }
  ] as { label: string; href: string }[],

  header: {
    requestQuote: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Grafitala — home"
  },

  hero: {
    since: "Since",
    titleLead: "Packaging that",
    titleMid: "sells what's",
    titleHighlight: "inside",
    titleTrail: ".",
    description:
      "For over 30 years, Grafitala has printed the boxes the food industry relies on — jelly, ready meals, puddings, meat and labels. We design, print, cut and glue every carton in-house. You get finished packaging, ready to fill.",
    requestQuote: "Request a quote",
    seeWhatWePrint: "See what we print",
    note: "We do the packaging — not the packing.",
    stats: [
      { value: "30+", label: "Years in print" },
      { value: "2", label: "Family generations" },
      { value: "2", label: "Production lines" },
      { value: "100%", label: "Made in-house" }
    ]
  },

  products: {
    eyebrow: "What we print",
    title: "Cartons and labels, built for food",
    description:
      "Grafitala specialises in printed packaging for the food industry — the boxes that protect your product and do the selling on a crowded shelf.",
    ourRoots: "Our roots",
    items: {
      jelly: {
        title: "Jelly & dessert boxes",
        description:
          "Bright, appetite-driven cartons that keep their shape on the shelf and in the fridge."
      },
      "ready-meals": {
        title: "Ready-meal packaging",
        description:
          "Sturdy folding cartons built for convenience food — freezer to microwave to table."
      },
      pudding: {
        title: "Pudding cartons",
        description:
          "Small-format boxes with the crisp folds and rich colour that premium desserts deserve."
      },
      meat: {
        title: "Meat boxes",
        description:
          "Robust, food-safe cartons engineered for weight, cold-chain and a clean presentation."
      },
      labels: {
        title: "Labels",
        description:
          "Sharp, colour-accurate labels that carry your brand and every regulatory detail."
      }
    } as Record<ProductKey, { title: string; description: string }>,
    closing: {
      title: "Something else in mind?",
      description:
        "If it's a printed food carton or label, we can most likely make it. Tell us about your product.",
      cta: "Start a conversation →"
    }
  },

  process: {
    eyebrow: "How we work",
    title: "Four steps. One roof.",
    description:
      "No outside vendors, no waiting on someone else's schedule. Your job moves from artwork to finished carton entirely inside Grafitala.",
    steps: [
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
    ],
    noteLead: "One thing we don't do:",
    noteEmphasis: "packing your product",
    noteTrail:
      ". We make the packaging — filling it is yours. That focus is exactly why our cartons are so good."
  },

  why: {
    eyebrow: "Why Grafitala",
    title:
      "A print house that started with lenticular, and never stopped refining",
    description:
      "Two generations of the same family have run these presses for more than 30 years. We began in lenticular printing and grew into a dedicated packaging house for the food industry — the same hands-on standards, at real scale.",
    reasons: [
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
    ],
    equipment: [
      { value: "2", label: "Industrial printers" },
      { value: "2", label: "Production lines" },
      { value: "1", label: "In-house designer" },
      { value: "1", label: "Cutting & gluing line" }
    ],
    techniquesTitle: "Techniques we run",
    techniques: [
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
    ]
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Let's make your next box.",
    description:
      "Tell us about your product and volumes. We'll come back with the right approach — offset or UV, structure and finish — and a quote.",
    details: {
      visit: "Visit",
      call: "Call",
      email: "Email",
      hours: "Hours"
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Your company",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "What do you need?",
      messagePlaceholder: "Product, box type, approximate volumes, timeline…",
      submit: "Send request",
      footnoteLead: "This opens your email app with the details filled in.",
      footnoteCall: "Prefer to call?",
      mailSubject: "Quote request",
      mailName: "Name",
      mailCompany: "Company",
      mailEmail: "Email"
    }
  },

  footer: {
    blurb:
      "A family print house making folding-carton packaging and labels for the food industry — designed, printed, cut and glued in-house in {location}.",
    tagline: "We handle the packaging. You handle the packing.",
    explore: "Explore",
    whatWePrint: "What we print",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
    since: "Printing packaging in {location} since {year}."
  },

  hours: [
    { days: "Monday – Friday", time: "08:00 – 18:00" },
    { days: "Saturday", time: "09:00 – 13:00" },
    { days: "Sunday", time: "Closed" }
  ]
};
