import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { EntryMedia as EntryMediaItem } from "@/content/data";

export function EntryMedia({ items }: { items: EntryMediaItem[] }) {
  const videos = items.filter((item) => item.kind === "video");
  const images = items.filter((item) => item.kind === "image");
  const [open, setOpen] = useState<Extract<EntryMediaItem, { kind: "image" }> | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
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
    <section className="mt-12 space-y-5" aria-label="entry media">
      {videos.map((item) => (
        <figure key={item.src}>
          <div className="aspect-video overflow-hidden bg-secondary">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
              title={item.title}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          </div>
          {item.caption && (
            <figcaption className="mt-2 text-[11px] leading-relaxed text-ink-faint">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}

      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {images.map((item) => (
            <figure key={item.src}>
              <button
                type="button"
                onClick={() => setOpen(item)}
                aria-label={`open image: ${item.alt}`}
                className="group block w-full overflow-hidden bg-secondary cursor-zoom-in"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:aspect-video"
                />
              </button>
              {item.caption && (
                <figcaption className="mt-2 text-[11px] leading-relaxed text-ink-faint">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: Extract<EntryMediaItem, { kind: "image" }>;
  onClose: () => void;
}) {
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
        aria-label="close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ink-soft hover:text-ink p-2"
      >
        <X size={18} strokeWidth={1.5} />
      </button>
      <img
        src={item.src}
        alt={item.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-full max-w-full object-contain shadow-2xl cursor-default"
      />
    </div>
  );
}
