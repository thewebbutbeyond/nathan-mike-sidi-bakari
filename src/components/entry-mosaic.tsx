import { useEffect, useState } from "react";
import { X } from "lucide-react";
import m1 from "@/assets/mosaic-01.jpg";
import m2 from "@/assets/mosaic-02.jpg";
import m3 from "@/assets/mosaic-03.jpg";
import m4 from "@/assets/mosaic-04.jpg";
import m5 from "@/assets/mosaic-05.jpg";

const IMAGES = [m1, m2, m3, m4, m5];

// A "tile" is a position in the mosaic grid. We use Tailwind's static class
// names so the JIT picks them up. Each layout is a 6-column grid; rows are
// implied by aspect ratio classes per tile.
type Tile = { className: string };
type Layout = Tile[];

const LAYOUTS: Layout[] = [
  // 0 — big-left + two stacked + wide bottom (the original)
  [
    { className: "col-span-4 row-span-2 aspect-[4/3]" },
    { className: "col-span-2 aspect-square" },
    { className: "col-span-2 aspect-square" },
    { className: "col-span-6 aspect-[16/7]" },
  ],
  // 1 — three across + tall hero on the right
  [
    { className: "col-span-2 aspect-square" },
    { className: "col-span-2 aspect-square" },
    { className: "col-span-2 row-span-2 aspect-[3/5]" },
    { className: "col-span-4 aspect-[2/1]" },
  ],
  // 2 — two equal squares on top + wide panorama
  [
    { className: "col-span-3 aspect-[5/4]" },
    { className: "col-span-3 aspect-[5/4]" },
    { className: "col-span-6 aspect-[21/9]" },
  ],
  // 3 — wide top + three equal columns below
  [
    { className: "col-span-6 aspect-[16/7]" },
    { className: "col-span-2 aspect-square" },
    { className: "col-span-2 aspect-square" },
    { className: "col-span-2 aspect-square" },
  ],
];

// Deterministic hash so the same seed always picks the same layout + image set.
function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

function pickImages(seed: string, count: number) {
  const h = hash(seed);
  const start = h % IMAGES.length;
  // small offset so two seeds with the same start don't always go in the same
  // direction through the pool
  const step = (h % 3) + 1;
  return Array.from(
    { length: count },
    (_, i) => IMAGES[(start + i * step) % IMAGES.length],
  );
}

export function EntryMosaic({ seed }: { seed: string }) {
  const h = hash(seed);
  const layout = LAYOUTS[h % LAYOUTS.length];
  const images = pickImages(seed, layout.length);
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

  return (
    <section className="mt-12" aria-label="Media mosaic">
      <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
        {layout.map((tile, i) => {
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
