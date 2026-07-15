"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Factory,
  Palette,
  Sparkles,
  Printer,
  Scissors
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { reasons, techniques } from "@/lib/content";

const equipment = [
  { Icon: Printer, value: "2", label: "Industrial printers" },
  { Icon: Factory, value: "2", label: "Production lines" },
  { Icon: Palette, value: "1", label: "In-house designer" },
  { Icon: Scissors, value: "1", label: "Cutting & gluing line" }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: story + reasons */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Grafitala"
              title="A print house that started with lenticular, and never stopped refining"
              description="Two generations of the same family have run these presses for more than 30 years. We began in lenticular printing and grew into a dedicated packaging house for the food industry — the same hands-on standards, at real scale."
            />

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 space-y-6"
            >
              {reasons.map((r) => (
                <motion.li key={r.title} variants={item} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: equipment + techniques */}
          <div className="space-y-6 lg:pt-24">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-4"
            >
              {equipment.map(({ Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={item}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <p className="mt-4 font-display text-3xl font-bold tracking-tight">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-gradient-to-br from-primary/8 via-card to-card p-6"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">
                  Techniques we run
                </h3>
              </div>
              <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {techniques.map((t) => (
                  <div key={t.title}>
                    <dt className="font-medium">{t.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
