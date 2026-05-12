import Link from "next/link";

const products = [
  {
    id: "tee-classic",
    name: "Classic Logo Tee",
    price: "£28",
    tag: "Apparel",
    swatch: "from-ink-2 to-ink",
    accent: "DIME",
  },
  {
    id: "hoodie-black",
    name: "Heavyweight Hoodie",
    price: "£55",
    tag: "Apparel",
    swatch: "from-ink-2 to-brand/20",
    accent: "DD",
  },
  {
    id: "ball-training",
    name: "Training Basketball",
    price: "£38",
    tag: "Gear",
    swatch: "from-brand/30 to-ink",
    accent: "29.5",
  },
  {
    id: "shorts-mesh",
    name: "Mesh Training Shorts",
    price: "£32",
    tag: "Apparel",
    swatch: "from-ink to-ink-2",
    accent: "·",
  },
  {
    id: "cap-snapback",
    name: "DD Snapback Cap",
    price: "£24",
    tag: "Accessories",
    swatch: "from-ink-2 to-brand/15",
    accent: "DD",
  },
  {
    id: "bottle-steel",
    name: "Steel Water Bottle",
    price: "£18",
    tag: "Accessories",
    swatch: "from-ink to-brand/20",
    accent: "H2O",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-end lg:px-10 lg:py-28">
          <div>
            <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
              <span className="h-[2px] w-10 bg-brand" />
              Shop
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
              Wear The
              <br />
              <span className="text-brand">Work.</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-mute">
              Apparel + gear for players who put in the time. To order, hit the
              button on any item — coach handles fulfillment directly.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-mute">
              Full checkout coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col border border-[var(--color-line)] bg-ink-2 transition-colors hover:border-brand"
              >
                <div
                  className={`relative aspect-square overflow-hidden border-b border-[var(--color-line)] bg-gradient-to-br ${p.swatch}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-[family-name:var(--font-display)] text-7xl tracking-tight text-bone/30 group-hover:text-brand/50 transition-colors">
                      {p.accent}
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bg-ink/90 px-3 py-1 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight">
                    {p.name}
                  </h3>
                  <div className="mt-1 font-[family-name:var(--font-display)] text-xl tracking-tight text-brand">
                    {p.price}
                  </div>
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}`}
                    className="group/btn mt-6 inline-flex items-center justify-center bg-brand px-5 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-2"
                  >
                    Order
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center lg:px-10">
          <p className="font-[family-name:var(--font-display)] text-xl uppercase tracking-tight text-bone md:text-2xl">
            Bulk order for your team?
          </p>
          <p className="mt-3 text-mute">
            Team kits and custom drops available. Reach out and we&apos;ll put a
            package together.
          </p>
          <Link
            href="/contact?subject=Team%20order"
            className="mt-6 inline-flex items-center border border-[var(--color-line)] px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-bone hover:border-brand hover:text-brand transition-colors"
          >
            Inquire →
          </Link>
        </div>
      </section>
    </>
  );
}
