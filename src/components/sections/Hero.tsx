"use client";

import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CartonArt from "@/components/CartonArt";
import { company, stats } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};
const item = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Ambient CMYK mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="mesh-blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan/25" />
        <div className="mesh-blob absolute right-0 top-0 h-96 w-96 rounded-full bg-magenta/20" />
        <div className="mesh-blob absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {company.location} · Since {company.foundedYear}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Packaging that
            <br className="hidden sm:block" /> sells what&apos;s{" "}
            <span className="text-cmyk">inside</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            For over 30 years, Grafitala has printed the boxes the food industry
            relies on — jelly, ready meals, puddings, meat and labels. We design,
            print, cut and glue every carton in-house. You get finished packaging,
            ready to fill.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="group h-12 px-6 text-base">
              <a href="#contact">
                Request a quote
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
            >
              <a href="#products">See what we print</a>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <PackageCheck className="h-4 w-4 text-primary" />
            We do the packaging — not the packing.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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
        <dl className="grid grid-cols-2 divide-border overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur sm:grid-cols-4 sm:divide-x">
          {stats.map((s) => (
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
