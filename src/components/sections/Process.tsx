"use client";

import { motion } from "framer-motion";
import { PenTool, Printer, Scissors, Layers, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const stepIcons = [PenTool, Printer, Scissors, Layers];

export default function Process() {
  const { t } = useI18n();
  const process = t.process;
  return (
    <section id="process" className="relative overflow-hidden py-20 lg:py-28">
      {/* Ink band */}
      <div className="absolute inset-0 -z-10 bg-[var(--ink)]" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.15]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-background to-transparent opacity-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/70 backdrop-blur">
            {process.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
            {process.title}
          </h2>
          <p className="text-lg leading-relaxed text-white/65 text-pretty">
            {process.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative"
              >
                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-sm text-white/35">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow */}
                {i < process.steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/25 lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl text-center text-sm text-white/50"
        >
          {process.noteLead}{" "}
          <span className="text-white/80">{process.noteEmphasis}</span>
          {process.noteTrail}
        </motion.p>
      </div>
    </section>
  );
}
