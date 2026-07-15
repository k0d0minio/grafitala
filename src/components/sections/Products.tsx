"use client";

import { motion } from "framer-motion";
import {
  Beef,
  CakeSlice,
  IceCreamCone,
  Tags,
  UtensilsCrossed,
  type LucideIcon
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/content";

const icons: Record<string, { Icon: LucideIcon; tint: string }> = {
  jelly: { Icon: IceCreamCone, tint: "var(--cmyk-magenta)" },
  "ready-meals": { Icon: UtensilsCrossed, tint: "var(--cmyk-cyan)" },
  pudding: { Icon: CakeSlice, tint: "var(--primary)" },
  meat: { Icon: Beef, tint: "oklch(0.55 0.2 20)" },
  labels: { Icon: Tags, tint: "var(--kraft)" }
};

export default function Products() {
  return (
    <section id="products" className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we print"
          title="Cartons and labels, built for food"
          description="Grafitala specialises in printed packaging for the food industry — the boxes that protect your product and do the selling on a crowded shelf."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const { Icon, tint } = icons[p.key];
            const featured = p.key === "jelly";
            return (
              <motion.article
                key={p.key}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  featured ? "sm:col-span-2 lg:row-span-1" : ""
                }`}
              >
                {/* tint wash on hover */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: tint }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-soft"
                    style={{ background: tint }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  {featured && (
                    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      Our roots
                    </span>
                  )}
                </div>

                <div className="relative mt-6">
                  <h3
                    className={`font-display font-semibold tracking-tight ${
                      featured ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            );
          })}

          {/* Closing note card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary/40 p-6"
          >
            <p className="font-display text-lg font-semibold">
              Something else in mind?
            </p>
            <p className="text-sm text-muted-foreground">
              If it&apos;s a printed food carton or label, we can most likely make
              it. Tell us about your product.
            </p>
            <a
              href="#contact"
              className="mt-2 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Start a conversation →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
