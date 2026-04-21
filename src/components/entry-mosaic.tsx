import { useEffect, useState } from "react";
import { X } from "lucide-react";
import m1 from "@/assets/mosaic-01.jpg";
import m2 from "@/assets/mosaic-02.jpg";
import m3 from "@/assets/mosaic-03.jpg";
import m4 from "@/assets/mosaic-04.jpg";
import m5 from "@/assets/mosaic-05.jpg";

const IMAGES = [m1, m2, m3, m4, m5];

// Layouts are defined on a 6-column × N-row grid. Every cell of the rectangle
// must be filled by exactly one tile (sum of col*row spans = 6 * rows) so the
// mosaic always resolves to a clean rectangle with no gaps.
type Tile = { className: string };
type Layout = { rows: number; tiles: Tile[] };

const LAYOUTS: Layout[] = [
  // 0 — Big left (4×2) + two stacked squares right (2×1, 2×1) + wide bottom (6×1) = 6×3
  {
    rows: 3,
    tiles: [
      { className: "col-span-4 row-span-2" },
      { className: "col-span-2 row-span-1" },
      { className: "col-span-2 row-span-1" },
      { className: "col-span-6 row-span-1" },
    ],
  },
  // 1 — Two top tiles (3×1, 3×1) + tall left (3×2) + two stacked right (3×1, 3×1) ... keep simple: 3×1 + 3×1 then 6×1 = 6×2
  {
    rows: 2,
    tiles: [
      { className: "col-span-3 row-span-1" },
      { className: "col-span-3 row-span-1" },
      { className: "col-span-6 row-span-1" },
    ],
  },
  // 2 — Tall hero left (3×2) + 3 tiles right (3×1 split into 3×1 then 3×1; we need 6 cols total)
  // Layout: [3×2 hero] [3×1] / [3×2 hero cont.] [3×1] = 6×2
  {
    rows: 2,
    tiles: [
      { className: "col-span-3 row-span-2" },
      { className: "col-span-3 row-span-1" },
      { className: "col-span-3 row-span-1" },
    ],
  },
  // 3 — Three columns of equal squares (2×1, 2×1, 2×1) + wide bottom (6×1) = 6×2
  {
    rows: 2,
    tiles: [
      { className: "col-span-2 row-span-1" },
      { className: "col-span-2 row-span-1" },
      { className: "col-span-2 row-span-1" },
      { className: "col-span-6 row-span-1" },
    ],
  },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

function pickImages(seed: string, count: number) {
  const h = hash(seed);
  const start = h % IMAGES.length;
  const step = (h % 3) + 1;
  return Array.from(
    { length: count },
    (_, i) => IMAGES[(start + i * step) % IMAGES.length],
  );
}

export function EntryMosaic({ seed }: { seed: string }) {
  const h = hash(seed);
  const layout = LAYOUTS[h % LAYOUTS.length];
  const images = pickImages(seed, layout.tiles.length);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fixed row height (responsive) so row-span tiles always line up cleanly.
  // The whole grid resolves to a perfect rectangle of (rows × rowHeight) tall.
  return (
    <section className="mt-12" aria-label="Media mosaic">
      <div
        className="grid grid-cols-6 gap-1.5 sm:gap-2 [grid-auto-rows:7rem] sm:[grid-auto-rows:10rem] md:[grid-auto-rows:12rem]"
      >
        {layout.tiles.map((tile, i) => {
          const src = images[i];
          return (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(src)}
              aria-label="Open image"
              className={`${tile.className} group overflow-hidden bg-secondary relative cursor-zoom-in`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </button>
          );
        })}
      </div>

      {open && <Lightbox src={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-200"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ink-soft hover:text-ink p-2"
      >
        <X size={18} strokeWidth={1.5} />
      </button>
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full object-contain shadow-2xl cursor-default"
      />
    </div>
  );
}
