import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="noise relative overflow-hidden"
      style={{ minHeight: "calc(100svh - 76px)" }}
    >
      {/* Ghost letterform */}
      <div
        aria-hidden
        className="ghost-drift pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] leading-none"
        style={{ fontSize: "clamp(200px,38vw,480px)", color: "var(--color-brand)", opacity: 0.04 }}
      >
        404
      </div>

      <div
        className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 lg:px-10"
        style={{ minHeight: "calc(100svh - 76px)" }}
      >
        <div className="eyebrow">Error 404</div>
        <h1
          className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
          style={{ fontSize: "clamp(4rem,14vw,11rem)" }}
        >
          Page Not<br />
          <span style={{ color: "var(--color-brand)" }}>Found.</span>
        </h1>
        <p className="lead mt-6 max-w-md">
          This page doesn&apos;t exist. Head back to the court and keep working.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-brand">Back Home →</Link>
          <Link href="/booking" className="btn-ghost">Book a Session</Link>
        </div>
      </div>
    </section>
  );
}
