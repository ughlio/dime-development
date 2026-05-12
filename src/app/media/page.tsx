import { mediaItems } from "@/data/media";
import { MediaGrid } from "@/components/MediaGrid";

export const metadata = {
  title: "Media | Dime Development",
  description:
    "Training photos, camp highlights, and player development moments from Dime Development.",
};

export default function MediaPage() {
  return (
    <>
      {/* HERO */}
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(120px,28vw,360px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          GYM
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Media</div>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
            style={{ fontSize: "clamp(3.5rem,12vw,11rem)" }}
          >
            In The<br /><span style={{ color: "var(--color-brand)" }}>Gym.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            Training sessions, camp highlights, and player development moments. Click any photo to expand.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
          <MediaGrid items={mediaItems} />
        </div>
      </section>
    </>
  );
}
