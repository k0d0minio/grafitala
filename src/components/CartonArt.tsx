/**
 * Hero centerpiece: a single, calm isometric folding carton — the
 * product itself, rendered cleanly with a restrained CMYK swatch to
 * nod at the print floor without the clutter.
 */
export default function CartonArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* Restrained CMYK swatch — a quiet reference to the process */}
      <div className="absolute -left-1 top-1/2 z-20 flex -translate-y-1/2 flex-col overflow-hidden rounded-full border border-border bg-card p-1 shadow-soft">
        {["var(--cmyk-cyan)", "var(--cmyk-magenta)", "var(--cmyk-yellow)", "var(--ink)"].map(
          (c) => (
            <span
              key={c}
              className="my-0.5 h-3.5 w-3.5 rounded-full"
              style={{ background: c }}
            />
          )
        )}
      </div>

      <svg
        viewBox="0 0 320 320"
        fill="none"
        className="h-full w-full drop-shadow-[0_24px_44px_rgba(20,30,22,0.14)]"
        role="img"
        aria-label="A printed folding carton"
      >
        <defs>
          <linearGradient id="topFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.97 0.008 150)" />
            <stop offset="1" stopColor="oklch(0.93 0.012 150)" />
          </linearGradient>
          <linearGradient id="leftFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.56 0.11 151)" />
            <stop offset="1" stopColor="oklch(0.47 0.11 150)" />
          </linearGradient>
          <linearGradient id="rightFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="oklch(0.43 0.1 150)" />
            <stop offset="1" stopColor="oklch(0.36 0.09 149)" />
          </linearGradient>
        </defs>

        {/* Right face */}
        <path d="M160 150 L280 90 L280 220 L160 290 Z" fill="url(#rightFace)" />
        {/* Left face */}
        <path d="M160 150 L40 90 L40 220 L160 290 Z" fill="url(#leftFace)" />
        {/* Top face */}
        <path
          d="M160 150 L40 90 L160 30 L280 90 Z"
          fill="url(#topFace)"
          stroke="oklch(0.88 0.012 150)"
          strokeWidth="1"
        />

        {/* Printed label panel on the left face */}
        <g opacity="0.97">
          <rect
            x="62"
            y="150"
            width="76"
            height="96"
            rx="6"
            transform="skewY(26.5)"
            fill="oklch(0.99 0.006 150)"
          />
        </g>
        {/* Label content (drawn upright, then skewed to sit on the face) */}
        <g transform="translate(160 150)">
          <g transform="matrix(1,0.5,0,1,-98,0)">
            <rect x="0" y="14" width="70" height="12" rx="3" fill="var(--primary)" />
            <rect x="0" y="34" width="52" height="6" rx="3" fill="oklch(0.85 0.008 150)" />
            <rect x="0" y="45" width="60" height="6" rx="3" fill="oklch(0.85 0.008 150)" />
            <rect x="0" y="68" width="44" height="6" rx="3" fill="oklch(0.85 0.008 150)" />
          </g>
        </g>

        {/* Seam */}
        <path
          d="M160 150 L160 290"
          stroke="oklch(0.3 0.02 150)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
