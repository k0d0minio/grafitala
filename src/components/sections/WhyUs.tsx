"use client";

import { motion } from "framer-motion";
import {
  Check,
  Factory,
  Palette,
  Printer,
  Scissors
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/lib/i18n/context";

const equipmentIcons = [Printer, Factory, Palette, Scissors];

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
  const { t } = useI18n();
  const why = t.why;
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: story + reasons */}
          <div>
            <SectionHeading
              align="left"
              eyebrow={why.eyebrow}
              title={why.title}
              description={why.description}
            />

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 space-y-6"
            >
              {why.reasons.map((r) => (
                <motion.li key={r.title} variants={item} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/8 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
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
              {why.equipment.map(({ value, label }, i) => {
                const Icon = equipmentIcons[i];
                return (
                <motion.div
                  key={label}
                  variants={item}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
                  <p className="mt-4 font-display text-3xl font-semibold tracking-tight">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg font-semibold">
                {why.techniquesTitle}
              </h3>
              <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {why.techniques.map((tech) => (
                  <div key={tech.title} className="border-l-2 border-primary/30 pl-4">
                    <dt className="font-medium">{tech.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {tech.description}
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
