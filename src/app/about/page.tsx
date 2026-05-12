import Link from "next/link";

const principles = [
  {
    num: "01",
    name: "Reps Over Talk",
    blurb:
      "We don't romanticize the work. We do it. Then we do it again. The standard is what you do when nobody's watching.",
  },
  {
    num: "02",
    name: "IQ + Skill",
    blurb:
      "Skill without IQ stalls. IQ without skill is theory. Every session sharpens both — the move and the moment.",
  },
  {
    num: "03",
    name: "Player First",
    blurb:
      "No two players need the same plan. Your goals, your weaknesses, your timeline — that drives the work.",
  },
  {
    num: "04",
    name: "Accountable Work",
    blurb:
      "Show up. Track progress. Own the gaps. Growth is uncomfortable — that's the price.",
  },
];

const timeline = [
  { year: "2014", text: "Started coaching at the youth level." },
  { year: "2017", text: "First full season at the prep / high school level." },
  { year: "2020", text: "Built private skill-development program from the ground up." },
  { year: "2024", text: "Dime Development Ltd. registered in London — full-service player development launches." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
          <div>
            <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
              <span className="h-[2px] w-10 bg-brand" />
              About
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
              Daniel
              <br />
              <span className="text-brand">Maxwell.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute md:text-xl">
              London-based. A decade in player development. Hundreds of players
              sharpened. Built on a simple belief — the work doesn&apos;t lie.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] bg-ink-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-8xl text-brand">
                  DM
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-mute">
                  Photo Placeholder
                </div>
              </div>
            </div>
            <div className="absolute -bottom-px -right-px bg-brand px-4 py-2 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-ink">
              Director · Founder
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            The Story
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
            Built on the grind, not the glamour.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-mute">
            <p>
              [Placeholder bio — coach to replace.] Daniel grew up in the gym.
              The lights, the smell of rubber, the squeak of fresh sneakers on
              hardwood — that was home. Long before he was a coach, he was a
              kid putting up shots after every team practice ended.
            </p>
            <p>
              That work ethic became the foundation for everything that came
              next. After years competing and learning under coaches who shaped
              him, he turned his attention to giving back — building the kind
              of program he wished he&apos;d had.
            </p>
            <p>
              Today, Dime Development trains players from middle school
              through college, online and in-person. The mission stays the
              same: meet the player where they are, push them where they need
              to go.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Philosophy
          </div>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
            We don&apos;t teach moves.{" "}
            <span className="text-brand">We build players.</span>
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.num}
                className="border border-[var(--color-line)] bg-ink-2 p-8"
              >
                <div className="font-[family-name:var(--font-display)] text-5xl text-brand">
                  {p.num}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 leading-relaxed text-mute">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Track Record
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
            10+ years in the gym.
          </h2>

          <ol className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className={`grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-[var(--color-line)] py-6 ${
                  i === timeline.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-[family-name:var(--font-display)] text-4xl text-brand md:text-5xl">
                  {t.year}
                </div>
                <div className="text-lg leading-relaxed text-bone">
                  {t.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight text-ink md:text-7xl">
            Let&apos;s
            <br />
            Get To Work.
          </h2>
          <Link
            href="/booking"
            className="group inline-flex items-center bg-ink px-8 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-brand transition-colors hover:bg-ink-2"
          >
            Book A Session →
          </Link>
        </div>
      </section>
    </>
  );
}
