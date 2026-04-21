import m1 from "@/assets/mosaic-01.jpg";
import m2 from "@/assets/mosaic-02.jpg";
import m3 from "@/assets/mosaic-03.jpg";
import m4 from "@/assets/mosaic-04.jpg";
import m5 from "@/assets/mosaic-05.jpg";

const IMAGES = [m1, m2, m3, m4, m5];

// Deterministic pick based on a seed string so each artifact gets a stable
// but varied selection from the shared image pool.
function pick(seed: string, count: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const start = h % IMAGES.length;
  return Array.from({ length: count }, (_, i) => IMAGES[(start + i) % IMAGES.length]);
}

export function ArtifactMosaic({ seed }: { seed: string }) {
  const [a, b, c, d] = pick(seed, 4);
  return (
    <section className="mt-12">
      <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
        <figure className="col-span-4 row-span-2 aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={a}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </figure>
        <figure className="col-span-2 aspect-square overflow-hidden bg-secondary">
          <img
            src={b}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </figure>
        <figure className="col-span-2 aspect-square overflow-hidden bg-secondary">
          <img
            src={c}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </figure>
        <figure className="col-span-6 aspect-[16/7] overflow-hidden bg-secondary">
          <img
            src={d}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
