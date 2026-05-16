import Link from "next/link";

const principles = [
  { num: "01", name: "Reps Over Talk",   body: "We don't romanticise the work. We do it. Then we do it again. The standard is what you do when nobody's watching." },
  { num: "02", name: "IQ + Skill",       body: "Skill without IQ stalls. IQ without skill is theory. Every session sharpens both — the move and the moment." },
  { num: "03", name: "Player First",     body: "No two players need the same plan. Your goals, your weaknesses, your timeline — that drives the work." },
  { num: "04", name: "Accountable Work", body: "Show up. Track progress. Own the gaps. Growth is uncomfortable — that's the price." },
];

const timeline = [
  { year: "2014", text: "Started coaching at youth level." },
  { year: "2017", text: "First full season at prep / high school level." },
  { year: "2020", text: "Built private skill-development programme." },
  { year: "2024", text: "Dime Development Ltd. registered in London — full-service player development launches." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────── */}
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="ghost-drift pointer-events-none absolute -right-6 top-0 bottom-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(160px,32vw,420px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          DM
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-24">
          <div>
            <div className="eyebrow">About</div>
            <h1
              className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
              style={{ fontSize: "clamp(3.5rem,11vw,10rem)" }}
            >
              Daniel<br />
              <span style={{ color: "var(--color-brand)" }}>Maxwell.</span>
            </h1>
            <p className="lead mt-6 max-w-lg">
              London-based. A decade in player development. Hundreds of players sharpened. Built on a simple belief — the work doesn&apos;t lie.
            </p>
          </div>

          {/* Photo */}
          <div
            className="relative aspect-[3/4] w-full max-w-sm lg:w-72 overflow-hidden"
            style={{ border: "1px solid var(--color-line)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: "var(--color-ink-3)" }}>
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)]" style={{ fontSize: "6rem", color: "var(--color-brand)", opacity: 0.15 }}>DM</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}>
                  Photo Placeholder
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 right-0 font-[family-name:var(--font-display)] px-3 py-1 text-xs uppercase tracking-widest"
              style={{ background: "var(--color-brand)", color: "var(--color-ink)" }}
            >
              Director · Founder
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────── */}
      <section style={{ background: "var(--color-ink-2)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">The Story</div>
          <h2
            className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.9]"
            style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
          >
            Assisting in your future.
          </h2>
          <div className="mt-8 space-y-5 lead">
            <p>
              Dime Development is a sports service that specialises in using basketball as a vehicle for personal development — building young people&apos;s skills, confidence, and pathways. With a deep passion for the sport, Daniel brings everyday life lessons off the court and onto it, interpreting ethical skills through the game and providing opportunities to better themselves through sport.
            </p>
            <p>
              Working alongside schools and communities across London, the mission is clear: use sport to create opportunity, push young people to strive for more, and give every player — regardless of background, age, or ability — the support and advice to understand how to further their basketball career. Dime Development works to enforce social cohesion within the community and enlarge career paths for the youth through sport.
            </p>
            <p>
              With national and international basketball experience across education and sport — including work in the Brent community and the University of Middlesex — Daniel has built a programme that goes beyond skill. It is mentoring, accountability, and a genuine belief that every young person deserves a coach who takes them seriously.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ─────────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Philosophy</div>
          <h2
            className="mt-4 max-w-3xl font-[family-name:var(--font-display)] uppercase leading-[0.88]"
            style={{ fontSize: "clamp(2.5rem,7vw,6.5rem)" }}
          >
            We don&apos;t teach moves.{" "}
            <span style={{ color: "var(--color-brand)" }}>We build players.</span>
          </h2>

          <div className="mt-14 grid gap-px sm:grid-cols-2" style={{ background: "var(--color-line)" }}>
            {principles.map((p) => (
              <div key={p.num} className="p-8 lg:p-10" style={{ background: "var(--color-ink-2)" }}>
                <div
                  className="font-[family-name:var(--font-display)]"
                  style={{ fontSize: "clamp(3rem,7vw,5.5rem)", color: "var(--color-brand)", opacity: 0.25, lineHeight: 1 }}
                >
                  {p.num}
                </div>
                <h3
                  className="mt-3 font-[family-name:var(--font-display)] uppercase tracking-tight"
                  style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}
                >
                  {p.name}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--color-mute)", lineHeight: 1.75 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────── */}
      <section style={{ background: "var(--color-ink-2)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Track Record</div>
          <h2
            className="mt-4 font-[family-name:var(--font-display)] uppercase"
            style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
          >
            10+ years in the gym.
          </h2>

          <ol className="mt-12">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className="grid items-baseline gap-4 py-6 sm:grid-cols-[auto_1fr]"
                style={{ borderTop: "1px solid var(--color-line)", borderBottom: i === timeline.length - 1 ? "1px solid var(--color-line)" : "none" }}
              >
                <div
                  className="font-[family-name:var(--font-display)]"
                  style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "var(--color-brand)", lineHeight: 1, minWidth: "6rem" }}
                >
                  {t.year}
                </div>
                <div className="text-lg leading-relaxed" style={{ color: "var(--color-bone)" }}>
                  {t.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow mb-10">What They Say</div>
          <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--color-line)" }}>

            {/* Julius Joseph MBE */}
            <div className="p-8 lg:p-12" style={{ background: "var(--color-ink-2)" }}>
              <div
                className="font-[family-name:var(--font-display)] leading-none"
                style={{ fontSize: "4rem", color: "var(--color-brand)", opacity: 0.3 }}
              >&ldquo;</div>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--color-bone)", lineHeight: 1.8, fontSize: "1rem" }}>
                I have known Daniel for approximately 10 years alongside working with him in the sporting field. He is a tireless worker with relentless drive on and off the court — Daniel puts every ounce of his flesh into executing the game to perfection. His experience in the sport is above average having been in a basketball environment for more than half of his life. The majority of students he has coached showed early signs of improvement in their fundamental abilities and knowledge.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div style={{ height: 2, width: 32, background: "var(--color-brand)", flexShrink: 0 }} />
                <div>
                  <div className="font-[family-name:var(--font-display)] uppercase tracking-wide" style={{ fontSize: "0.9rem" }}>Julius Joseph MBE</div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}>
                    Basketball Professional
                  </div>
                </div>
              </div>
            </div>

            {/* Michael Quamina */}
            <div className="p-8 lg:p-12" style={{ background: "var(--color-ink-2)" }}>
              <div
                className="font-[family-name:var(--font-display)] leading-none"
                style={{ fontSize: "4rem", color: "var(--color-brand)", opacity: 0.3 }}
              >&ldquo;</div>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--color-bone)", lineHeight: 1.8, fontSize: "1rem" }}>
                Daniel is an inspiring coach — he has a love for the game which is refreshing to see and great support for new players. His tactical ability, strengthened by his national and international experience, is the driving force behind his successful coaching in the Brent community and the University of Middlesex.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div style={{ height: 2, width: 32, background: "var(--color-brand)", flexShrink: 0 }} />
                <div>
                  <div className="font-[family-name:var(--font-display)] uppercase tracking-wide" style={{ fontSize: "0.9rem" }}>Michael Quamina</div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-mute)", fontFamily: "var(--font-display)" }}>
                    Curriculum Lead · Basketball Academy Head Coach
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="noise relative overflow-hidden" style={{ background: "var(--color-brand)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(6rem,18vw,16rem)", color: "var(--color-ink)", opacity: 0.07 }}
        >
          WORK
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-10 lg:py-20">
          <h2
            className="font-[family-name:var(--font-display)] uppercase leading-[0.88]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)", color: "var(--color-ink)" }}
          >
            Let&apos;s<br />Get To Work.
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
