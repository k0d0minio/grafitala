"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
