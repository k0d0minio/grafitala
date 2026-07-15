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

const icons: Record<string, LucideIcon> = {
  jelly: IceCreamCone,
  "ready-meals": UtensilsCrossed,
  pudding: CakeSlice,
  meat: Beef,
  labels: Tags
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

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = icons[p.key];
            const featured = p.key === "jelly";
            return (
              <motion.article
                key={p.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`group relative flex flex-col justify-between gap-8 bg-card p-6 transition-colors duration-200 hover:bg-secondary/50 sm:p-7 ${
                  featured ? "sm:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/30">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  {featured && (
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Our roots
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    className={`font-display font-semibold tracking-tight ${
                      featured ? "text-2xl" : "text-lg"
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-2 bg-secondary/50 p-6 sm:p-7"
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
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Start a conversation →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
