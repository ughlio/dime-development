import Link from "next/link";

const products = [
  { id: "tee-classic",   name: "Classic Logo Tee",    price: "£28", tag: "Apparel",     accent: "DIME" },
  { id: "hoodie-black",  name: "Heavyweight Hoodie",   price: "£55", tag: "Apparel",     accent: "DD" },
  { id: "ball-training", name: "Training Basketball",  price: "£38", tag: "Gear",        accent: "29.5" },
  { id: "shorts-mesh",   name: "Mesh Training Shorts", price: "£32", tag: "Apparel",     accent: "·" },
  { id: "cap-snapback",  name: "DD Snapback Cap",      price: "£24", tag: "Accessories", accent: "DD" },
  { id: "bottle-steel",  name: "Steel Water Bottle",   price: "£18", tag: "Accessories", accent: "H₂O" },
];

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(120px,28vw,360px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          SHOP
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 lg:flex-row lg:items-end lg:px-10 lg:py-24">
          <div>
            <div className="eyebrow">Shop</div>
            <h1
              className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
              style={{ fontSize: "clamp(3.5rem,12vw,11rem)" }}
            >
              Wear The<br /><span style={{ color: "var(--color-brand)" }}>Work.</span>
            </h1>
          </div>
          <div className="max-w-xs">
            <p style={{ color: "var(--color-mute)", lineHeight: 1.75 }}>
              Apparel + gear for players who put in the time. Hit the Order button — coach handles fulfilment directly.
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.22em]" style={{ color: "var(--color-mute)" }}>
              Full checkout coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--color-line)" }}>
            {products.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col"
                style={{ background: "var(--color-ink-2)" }}
              >
                {/* Image area */}
                <div
                  className="relative aspect-square overflow-hidden flex items-center justify-center"
                  style={{ background: "var(--color-ink-3)", borderBottom: "1px solid var(--color-line)" }}
                >
                  <div
                    className="font-[family-name:var(--font-display)] leading-none select-none transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                    style={{ fontSize: "clamp(5rem,14vw,9rem)", color: "var(--color-bone)", opacity: 0.06 }}
                  >
                    {p.accent}
                  </div>
                  <div
                    className="absolute top-3 left-3 font-[family-name:var(--font-display)] px-2 py-1 text-[0.6rem] uppercase tracking-[0.25em]"
                    style={{ background: "var(--color-ink)", color: "var(--color-brand)", border: "1px solid var(--color-line)" }}
                  >
                    {p.tag}
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(57,255,20,0.06)" }}
                  >
                    <div
                      className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em]"
                      style={{ border: "1px solid var(--color-brand)", padding: "0.4rem 1rem", color: "var(--color-brand)" }}
                    >Order →</div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <div className="font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)" }}>
                      {p.name}
                    </div>
                    <div className="font-[family-name:var(--font-display)] mt-0.5" style={{ fontSize: "1.1rem", color: "var(--color-brand)" }}>
                      {p.price}
                    </div>
                  </div>
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}`}
                    className="shrink-0 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all"
                    style={{ background: "var(--color-brand)", color: "var(--color-ink)" }}
                  >
                    Order
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team inquiry */}
      <section style={{ background: "var(--color-ink-2)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "clamp(1.3rem,3vw,2rem)" }}>Bulk order for your team?</p>
            <p className="mt-2" style={{ color: "var(--color-mute)", fontSize: "0.9rem" }}>Team kits and custom drops available on request.</p>
          </div>
          <Link href="/contact?subject=Team%20order" className="btn-ghost shrink-0">Enquire →</Link>
        </div>
      </section>
    </>
  );
}
