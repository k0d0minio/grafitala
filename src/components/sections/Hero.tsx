"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CartonArt from "@/components/CartonArt";
import { company } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};
const item = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Hero() {
  const { t } = useI18n();
  const hero = t.hero;
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Soft top-down fade so the grid recedes into the page */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {company.location} · {hero.since} {company.foundedYear}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {hero.titleLead}
            <br className="hidden sm:block" /> {hero.titleMid}{" "}
            <span className="text-primary">{hero.titleHighlight}</span>
            {hero.titleTrail}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="group h-12 px-6 text-base">
              <a href="#contact">
                {hero.requestQuote}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
            >
              <a href="#products">{hero.seeWhatWePrint}</a>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <PackageCheck className="h-4 w-4 text-primary" />
            {hero.note}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <CartonArt />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto mt-14 px-4 sm:px-6 lg:mt-20 lg:px-8"
      >
        <dl className="grid grid-cols-2 divide-border overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-4 sm:divide-x">
          {hero.stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center sm:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
