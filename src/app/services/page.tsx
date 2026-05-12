import Link from "next/link";

const services = [
  {
    num: "01",
    name: "1-on-1 Training",
    tag: "Personal Development",
    blurb:
      "Pure focus. Every minute, every rep — built around what your game needs most.",
    bullets: [
      "Custom skill plan after intake session",
      "Film review available between sessions",
      "Ball handling · finishing · shooting · IQ",
      "60 or 90 minute slots",
    ],
    price: "From $90 / session",
  },
  {
    num: "02",
    name: "Group Sessions",
    tag: "2–4 Players",
    blurb:
      "Small-group work with players at your level. Compete, share reps, push each other.",
    bullets: [
      "Up to 4 players per session",
      "Skill blocks + live competition",
      "Best for friends / teammates training together",
      "Split cost, keep the intensity",
    ],
    price: "From $45 / player",
  },
  {
    num: "03",
    name: "Clinics & Camps",
    tag: "Multi-Day",
    blurb:
      "Position-specific intensives. Guards on guards. Bigs on bigs. Real work, real reps.",
    bullets: [
      "Weekend & holiday camp schedules",
      "Position-specific skill tracks",
      "Combine-style testing on day one",
      "Limited spots — registration required",
    ],
    price: "From $150 / camp",
  },
  {
    num: "04",
    name: "Online Training",
    tag: "Remote",
    blurb:
      "Out of town? No gym time with the coach? You still train. Built for the grind.",
    bullets: [
      "Weekly drill plans delivered to you",
      "Submit film, get coach breakdowns",
      "Strength & conditioning add-on available",
      "Monthly + quarterly programs",
    ],
    price: "From $60 / month",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Services
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Pick Your
            <br />
            <span className="text-brand">Path.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
            Four ways to train. Each one built around real reps, real
            accountability, and a plan that pushes you forward.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {services.map((s, i) => (
            <article
              key={s.num}
              className={`grid gap-8 border-b border-[var(--color-line)] py-16 lg:grid-cols-[auto_1fr_auto] lg:gap-12 lg:py-20 ${
                i === services.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="font-[family-name:var(--font-display)] text-7xl leading-none text-brand lg:text-9xl">
                {s.num}
              </div>

              <div>
                <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-mute">
                  {s.tag}
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight md:text-6xl">
                  {s.name}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
                  {s.blurb}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-bone"
                    >
                      <span className="mt-1 h-[2px] w-4 shrink-0 bg-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-bone">
                  {s.price}
                </div>
                <Link
                  href={`/booking?service=${encodeURIComponent(s.name)}`}
                  className="group inline-flex items-center bg-brand px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-2"
                >
                  Book Now
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
              Not sure which fits?
            </h2>
            <p className="mt-3 max-w-xl text-mute">
              Send a message. Coach will reach out with a recommendation based
              on your level, goals, and schedule.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center border border-[var(--color-line)] px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:border-brand hover:text-brand"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
