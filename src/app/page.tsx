import Link from "next/link";

const services = [
  {
    name: "1-on-1",
    tag: "Personal",
    blurb: "Tailored work on your handles, finishing, and IQ.",
  },
  {
    name: "Group",
    tag: "Small Squad",
    blurb: "Up to 4 players. Compete. Sharpen. Repeat.",
  },
  {
    name: "Clinics",
    tag: "Camps",
    blurb: "Multi-day intensives. Position-specific.",
  },
  {
    name: "Online",
    tag: "Remote",
    blurb: "Film breakdown + drill plans, delivered weekly.",
  },
];

const stats = [
  { num: "10+", label: "Years Coaching" },
  { num: "500+", label: "Players Developed" },
  { num: "D1", label: "Experience" },
  { num: "1", label: "Standard. Elite." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        {/* background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* green diagonal accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/2 h-[140%] w-[80%] -translate-y-1/2 rotate-12 bg-brand/[0.06]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10 lg:pt-32 lg:pb-40">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Daniel Maxwell · Basketball Coaching
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] tracking-[-0.01em] uppercase text-bone">
            Dimes
            <br />
            Don&apos;t
            <br />
            <span className="text-brand">Miss.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
            Player development built on reps, IQ, and accountability. Train with
            a coach who&apos;s lived the standard — and demands it from you.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center bg-brand px-8 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-2"
            >
              Book a Session
              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center border border-[var(--color-line)] px-8 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-bone transition-colors hover:border-brand hover:text-brand"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--color-line)] md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-8 lg:px-10 lg:py-12 [&:nth-child(2)]:border-l-0 md:[&:nth-child(2)]:border-l [&:nth-child(3)]:border-t border-t [&:nth-child(odd)]:border-t border-[var(--color-line)] md:[&]:border-t-0"
            >
              <div className="font-[family-name:var(--font-display)] text-5xl text-brand md:text-6xl">
                {s.num}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
                <span className="h-[2px] w-10 bg-brand" />
                Training
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight md:text-7xl">
                Pick Your Path
              </h2>
            </div>
            <Link
              href="/services"
              className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-bone hover:text-brand transition-colors"
            >
              All Services →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.name}
                href="/services"
                className="group relative block border border-[var(--color-line)] bg-ink-2 p-6 transition-colors hover:border-brand"
              >
                <div className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] uppercase text-mute group-hover:text-brand">
                  0{i + 1} · {s.tag}
                </div>
                <div className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight text-bone">
                  {s.name}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {s.blurb}
                </p>
                <div className="mt-6 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-b border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] bg-ink">
            {/* Placeholder for coach photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-6xl text-brand">
                  DM
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-mute">
                  Photo Placeholder
                </div>
              </div>
            </div>
            <div className="absolute -bottom-px -right-px bg-brand px-4 py-2 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-ink">
              Head Coach
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
              <span className="h-[2px] w-10 bg-brand" />
              Meet The Coach
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight md:text-6xl">
              Daniel
              <br />
              Maxwell
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">
              A decade of coaching. Hundreds of players sharpened. The philosophy
              is simple — work doesn&apos;t lie. Every rep matters.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-mute">
              Whether you&apos;re grinding for varsity, the next level, or just
              love the game — the work meets you where you are.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center border border-[var(--color-line)] px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:border-brand hover:text-brand"
              >
                Full Story
                <span className="ml-3 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="font-[family-name:var(--font-display)] text-7xl leading-none text-brand md:text-9xl">
            &ldquo;
          </div>
          <blockquote className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-[1.1] tracking-tight md:text-5xl">
            Coach took my game from{" "}
            <span className="text-brand">good to undeniable.</span> Every
            session he pushed me past where I thought I could go.
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-brand" />
            <div>
              <div className="font-[family-name:var(--font-display)] uppercase tracking-[0.2em] text-bone">
                Player Name
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-mute">
                Varsity · Class of 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-brand">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight text-ink md:text-7xl">
            Ready To
            <br />
            Level Up?
          </h2>
          <Link
            href="/booking"
            className="group inline-flex items-center bg-ink px-8 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-brand transition-colors hover:bg-ink-2"
          >
            Book A Session
            <span className="ml-3 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
