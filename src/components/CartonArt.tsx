"use client";

import { motion } from "framer-motion";

/**
 * Hero centerpiece: an isometric printed folding carton with CMYK
 * process bars and registration marks — the language of the print floor.
 */
export default function CartonArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Registration crosshairs */}
      <Crosshair className="absolute left-2 top-6 text-cyan/70" />
      <Crosshair className="absolute right-4 top-2 text-magenta/70" />
      <Crosshair className="absolute bottom-6 left-6 text-primary/60" />

      {/* CMYK process strip */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -left-2 top-1/2 z-20 flex -translate-y-1/2 flex-col overflow-hidden rounded-full border border-border bg-card/80 p-1.5 shadow-lift backdrop-blur"
      >
        {["var(--cmyk-cyan)", "var(--cmyk-magenta)", "var(--cmyk-yellow)", "var(--ink)"].map(
          (c) => (
            <span
              key={c}
              className="my-0.5 h-5 w-5 rounded-full"
              style={{ background: c }}
            />
          )
        )}
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="h-full w-full"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          className="h-full w-full drop-shadow-[0_30px_50px_rgba(30,20,10,0.18)]"
          role="img"
          aria-label="A printed folding carton"
        >
          <defs>
            <linearGradient id="topFace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="oklch(0.98 0.02 80)" />
              <stop offset="1" stopColor="oklch(0.93 0.03 75)" />
            </linearGradient>
            <linearGradient id="leftFace" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="oklch(0.7 0.16 42)" />
              <stop offset="1" stopColor="oklch(0.58 0.18 38)" />
            </linearGradient>
            <linearGradient id="rightFace" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="oklch(0.55 0.17 36)" />
              <stop offset="1" stopColor="oklch(0.44 0.16 34)" />
            </linearGradient>
          </defs>

          {/* Right face */}
          <path
            d="M160 150 L280 90 L280 220 L160 290 Z"
            fill="url(#rightFace)"
          />
          {/* Left face */}
          <path d="M160 150 L40 90 L40 220 L160 290 Z" fill="url(#leftFace)" />
          {/* Top face */}
          <path
            d="M160 150 L40 90 L160 30 L280 90 Z"
            fill="url(#topFace)"
            stroke="oklch(0.88 0.03 75)"
            strokeWidth="1"
          />

          {/* Printed label panel on the left face */}
          <g opacity="0.96">
            <rect
              x="62"
              y="150"
              width="76"
              height="96"
              rx="6"
              transform="skewY(26.5)"
              fill="oklch(0.99 0.01 83)"
            />
          </g>
          {/* Label content (drawn upright, then skewed to sit on the face) */}
          <g transform="translate(160 150)">
            <g transform="matrix(1,0.5,0,1,-98,0)">
              <rect x="0" y="14" width="70" height="14" rx="3" fill="oklch(0.62 0.19 40)" />
              <rect x="0" y="36" width="52" height="7" rx="3" fill="oklch(0.8 0.05 70)" />
              <rect x="0" y="48" width="60" height="7" rx="3" fill="oklch(0.8 0.05 70)" />
              <circle cx="52" cy="80" r="14" fill="oklch(0.72 0.14 220)" />
              <circle cx="40" cy="80" r="14" fill="oklch(0.62 0.25 350)" opacity="0.85" />
            </g>
          </g>

          {/* Highlight seam */}
          <path
            d="M160 150 L160 290"
            stroke="oklch(0.3 0.02 40)"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Floating small carton */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.5 },
          scale: { delay: 0.6, duration: 0.5 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        className="absolute -bottom-2 -right-1 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-lift"
      >
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <path d="M20 6 L33 12 L20 18 L7 12 Z" fill="var(--cmyk-yellow)" />
          <path d="M7 12 L20 18 L20 33 L7 27 Z" fill="var(--cmyk-cyan)" />
          <path d="M33 12 L20 18 L20 33 L33 27 Z" fill="var(--cmyk-magenta)" />
        </svg>
      </motion.div>
    </div>
  );
}

function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 ${className ?? ""}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
      <path
        d="M12 0 L12 24 M0 12 L24 12"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
