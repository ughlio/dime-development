import Link from "next/link";

const stats = [
  { num: "10+",  label: "Years\nCoaching"      },
  { num: "500+", label: "Players\nDeveloped"    },
  { num: "6",    label: "Service\nCategories"   },
  { num: "LDN",  label: "Based in\nLondon"      },
];

const services = [
  { num: "01", name: "1-2-1 Sessions",   tag: "Skill Dev",     href: "/services#1-2-1",     price: "From £20" },
  { num: "02", name: "Mentoring",        tag: "Intervention",  href: "/services#mentoring",  price: "From £30/wk" },
  { num: "03", name: "Schools",          tag: "Extra-curricular", href: "/services#schools", price: "From £7/child" },
  { num: "04", name: "Camps",            tag: "Half-term",     href: "/services#camps",      price: "From £40/day" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="noise relative overflow-hidden"
        style={{ minHeight: "calc(100svh - 76px)" }}
      >
        {/* Background grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px,transparent 1px),linear-gradient(90deg,var(--color-line) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.18,
          }}
        />
        {/* Ghost letterform */}
        <div
          aria-hidden
          className="ghost-drift pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] leading-none"
          style={{ fontSize: "clamp(240px,40vw,520px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          D
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 lg:px-10 lg:py-24" style={{ minHeight: "calc(100svh - 76px)" }}>
          {/* Eyebrow */}
          <div className="eyebrow anim-fade-in">
            Daniel Maxwell · London, UK
          </div>

          {/* Main headline */}
          <h1
            className="anim-fade-up delay-1 mt-5 font-[family-name:var(--font-display)] uppercase leading-[0.82] tracking-[-0.01em]"
            style={{ fontSize: "clamp(4.5rem,15vw,13.5rem)" }}
          >
            Dimes
            <br />
            Don&apos;t
            <br />
            <span className="anim-flicker" style={{ color: "var(--color-brand)" }}>Miss.</span>
          </h1>

          {/* Green rule */}
          <div
            className="anim-line delay-2 mt-8"
            style={{ height: 2, background: "var(--color-brand)", width: "clamp(60px,12vw,120px)" }}
          />

          {/* Sub-copy */}
          <p className="anim-fade-up delay-3 lead mt-6 max-w-md">
            Player development built on reps, IQ, and accountability. Train with a coach who&apos;s lived the standard.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up delay-4 mt-10 flex flex-wrap gap-3">
            <Link href="/booking" className="btn-brand">Book a Session →</Link>
            <Link href="/services" className="btn-ghost">View Services</Link>
          </div>

          {/* Scroll hint */}
          <div
            className="anim-fade-in delay-5 mt-16 hidden lg:flex items-center gap-3"
            style={{ color: "var(--color-mute)", fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "var(--font-display)" }}
          >
            <div
              style={{ width: 24, height: 1, background: "currentColor" }}
            />
            Scroll
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)", background: "var(--color-ink-2)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ borderColor: "var(--color-line)" }}>
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-10 lg:px-10 lg:py-12">
                <div
                  className="font-[family-name:var(--font-display)] leading-none"
                  style={{ fontSize: "clamp(2.8rem,7vw,5rem)", color: "var(--color-brand)" }}
                >
                  {s.num}
                </div>
                <div
                  className="mt-2 whitespace-pre-line"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <div className="eyebrow">Training</div>
              <h2
                className="mt-3 font-[family-name:var(--font-display)] uppercase leading-[0.88]"
                style={{ fontSize: "clamp(2.8rem,7vw,6rem)" }}
              >
                Pick Your<br /><span style={{ color: "var(--color-brand)" }}>Path.</span>
              </h2>
            </div>
            <Link href="/services" className="btn-ghost hidden sm:inline-flex">All Services →</Link>
          </div>

          <div className="flex flex-col" style={{ borderTop: "1px solid var(--color-line)" }}>
            {services.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-ink-2 px-2 -mx-2"
                style={{ borderBottom: "1px solid var(--color-line)" }}
              >
                <span
                  className="font-[family-name:var(--font-display)] leading-none shrink-0 transition-colors"
                  style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--color-line)", lineHeight: 1 }}
                >
                  {s.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-[family-name:var(--font-display)] uppercase tracking-tight transition-colors group-hover:text-brand"
                    style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}
                  >
                    {s.name}
                  </div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}>
                    {s.tag}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div
                    className="font-[family-name:var(--font-display)] tracking-tight"
                    style={{ fontSize: "clamp(1rem,2vw,1.5rem)", color: "var(--color-brand)" }}
                  >
                    {s.price}
                  </div>
                  <div
                    className="transition-transform group-hover:translate-x-1 inline-block"
                    style={{ color: "var(--color-mute)", fontSize: "1.2rem" }}
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/services" className="btn-ghost mt-8 sm:hidden">All Services →</Link>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────── */}
      <section className="noise relative overflow-hidden" style={{ background: "var(--color-ink-2)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          {/* Photo */}
          <div
            className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden"
            style={{ borderRight: "1px solid var(--color-line)" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "var(--color-ink-3)" }}>
              <div className="font-[family-name:var(--font-display)] leading-none" style={{ fontSize: "clamp(5rem,15vw,11rem)", color: "var(--color-brand)", opacity: 0.12 }}>DM</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--color-mute)", textTransform: "uppercase", fontFamily: "var(--font-display)" }}>Photo Placeholder</div>
            </div>
            {/* corner tag */}
            <div
              className="absolute bottom-0 right-0 font-[family-name:var(--font-display)] px-4 py-2 text-xs uppercase tracking-widest"
              style={{ background: "var(--color-brand)", color: "var(--color-ink)" }}
            >
              Director · Founder
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center px-6 py-14 lg:px-12 lg:py-20">
            <div className="eyebrow">Meet The Coach</div>
            <h2
              className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.88]"
              style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)" }}
            >
              Daniel<br />Maxwell.
            </h2>
            <p className="lead mt-6 max-w-md">
              A decade of coaching. Hundreds of players sharpened. The philosophy is simple — work doesn&apos;t lie.
            </p>
            <p className="mt-4 max-w-md" style={{ lineHeight: 1.75, color: "var(--color-mute)" }}>
              Whether you&apos;re grinding for varsity, the next level, or just love the game — the work meets you where you are.
            </p>
            <Link href="/about" className="btn-ghost mt-8 self-start">Full Story →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10 lg:py-28">
          <div
            className="font-[family-name:var(--font-display)] leading-none"
            style={{ fontSize: "clamp(4rem,12vw,9rem)", color: "var(--color-brand)", opacity: 0.3 }}
          >
            &ldquo;
          </div>
          <blockquote
            className="mt-2 font-[family-name:var(--font-display)] uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.8rem,5vw,4rem)" }}
          >
            A tireless worker with relentless drive on and off the court. Daniel puts every ounce into executing the game to{" "}
            <span style={{ color: "var(--color-brand)" }}>perfection.</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div style={{ height: 2, width: 40, background: "var(--color-brand)" }} />
            <div>
              <div className="font-[family-name:var(--font-display)] uppercase tracking-wider" style={{ fontSize: "0.85rem" }}>Julius Joseph MBE</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}>
                Basketball Professional · 10+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="noise relative overflow-hidden" style={{ background: "var(--color-brand)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 bottom-0 font-[family-name:var(--font-display)] select-none leading-none flex items-center"
          style={{ fontSize: "clamp(6rem,20vw,18rem)", color: "var(--color-ink)", opacity: 0.08 }}
        >
          GO
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-10 lg:py-20">
          <h2
            className="font-[family-name:var(--font-display)] uppercase leading-[0.88]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--color-ink)" }}
          >
            Ready To<br />Level Up?
          </h2>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-display)] uppercase tracking-[0.2em] px-8 py-4 transition-all hover:-translate-y-0.5"
            style={{ background: "var(--color-ink)", color: "var(--color-brand)", fontSize: "0.85rem" }}
          >
            Book A Session →
          </Link>
        </div>
      </section>
    </>
  );
}
