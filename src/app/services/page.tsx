import Link from "next/link";

type PriceTable = {
  headers: string[];
  rows: { label: string; prices: string[] }[];
};

type Service = {
  slug: string;
  num: string;
  name: string;
  tag: string;
  blurb: string;
  bullets?: string[];
  pricing: PriceTable;
  footnote?: string;
};

const services: Service[] = [
  {
    slug: "1-2-1",
    num: "01",
    name: "1-2-1 Basketball Session",
    tag: "Skill Development",
    blurb:
      "Pure focus, tailored to the player. Every rep on what your game needs most — handles, finishing, shooting, IQ.",
    bullets: [
      "Custom skill plan after intake session",
      "All ages — youth, teen, adult, students, SEN",
      "Bundle discounts on 3 / 5 / 10 session packs",
      "Free kit on block bookings (see incentives)",
    ],
    pricing: {
      headers: ["1hr", "3 sessions", "5 sessions*", "10 sessions*"],
      rows: [
        { label: "5–12 years", prices: ["£25", "£70", "£120", "£240"] },
        { label: "13–18 years", prices: ["£25", "£70", "£120", "£240"] },
        { label: "18+ years", prices: ["£30", "£80", "£140", "£280"] },
        { label: "Students (college/uni)", prices: ["£20", "£55", "£100", "£200"] },
        { label: "SEN", prices: ["£20", "£50", "£100", "£200"] },
      ],
    },
    footnote: "*Block bookings include free kit — see incentives below. 2hr sessions available on request.",
  },
  {
    slug: "mentoring",
    num: "02",
    name: "1-2-1 Mentoring & Intervention",
    tag: "Player Development",
    blurb:
      "Weekly basketball-based mentoring. On-court work paired with off-court development — habits, mindset, accountability.",
    bullets: [
      "Weekly programmes — 1 or 2 sessions per week",
      "Academic term (6 weeks) packages",
      "Designed for players who need consistency",
      "Tailored for SEN and student support",
    ],
    pricing: {
      headers: ["1 session / wk", "2 sessions / wk", "Term (6 wks)"],
      rows: [
        { label: "5–11 years", prices: ["£35", "£65", "£200"] },
        { label: "12–18 years", prices: ["£40", "£75", "£230"] },
        { label: "18+ years", prices: ["£45", "£85", "£260"] },
        { label: "Students (college/uni)", prices: ["£40", "£75", "£230"] },
        { label: "SEN", prices: ["£30", "£55", "£170"] },
      ],
    },
    footnote: "Academic year packages available on request.",
  },
  {
    slug: "speaking",
    num: "03",
    name: "Guest Speaker & Presentations",
    tag: "Schools · Conferences · Workshops",
    blurb:
      "Bring the message off the court. Talks, workshops, and presentations on player development, mindset, and the work behind the game.",
    pricing: {
      headers: ["1 hour", "2 hour", "2+ hours"],
      rows: [
        { label: "Schools & Colleges", prices: ["£150", "£250", "TBD"] },
        { label: "Conferences", prices: ["£250", "£450", "TBD"] },
        { label: "Workshops", prices: ["£250", "£450", "TBD"] },
      ],
    },
    footnote: "Get in touch for full-day or multi-day bookings.",
  },
  {
    slug: "schools",
    num: "04",
    name: "Schools & Colleges Extra-Curricular",
    tag: "Group · Max 25 Players",
    blurb:
      "Weekly basketball sessions for schools and colleges. After-school clubs, lunchtime sessions, or PE add-ons — priced per child.",
    bullets: [
      "Max 25 players per session",
      "Term and academic year packages",
      "All gear & cones provided",
      "Suitable for primary through college",
    ],
    pricing: {
      headers: ["1hr (per child)", "Term (1×/wk)", "2 Terms (12 wks)"],
      rows: [
        { label: "5–12 years", prices: ["£7", "£125 / £750", "TBD"] },
        { label: "13–18 years", prices: ["£9", "£175 / £1000", "TBD"] },
        { label: "19+ years", prices: ["£12", "£225 / £1300", "TBD"] },
      ],
    },
    footnote: "Term pricing shown as per-child / whole-group flat rate. Academic year quotes on request.",
  },
  {
    slug: "camps",
    num: "05",
    name: "Basketball Camps",
    tag: "Half-Term · Holiday",
    blurb:
      "Multi-day intensives. Skill blocks, live competition, and real coaching. Run across half-term and school holidays.",
    bullets: [
      "Single-day or full-week options",
      "Christmas / Easter / Summer schedules",
      "Skill tracks by position and age",
      "Limited spots — registration required",
    ],
    pricing: {
      headers: ["Per day", "Week (5 days)", "School Holiday"],
      rows: [
        { label: "5–12 years", prices: ["From £40", "£180", "TBD"] },
        { label: "13–18 years", prices: ["From £40", "£180", "TBD"] },
        { label: "19+ years", prices: ["From £50", "£230", "TBD"] },
      ],
    },
    footnote: "School holiday camp pricing varies by location and duration.",
  },
  {
    slug: "parties",
    num: "06",
    name: "Basketball Party Sessions",
    tag: "Birthdays · Min 6 / Max 15",
    blurb:
      "Run the birthday on the court. Drills, games, and friendly competition — coach-led from start to finish.",
    bullets: [
      "1hr or 2hr session formats",
      "Minimum 6 players, max 15 per session",
      "Party bundles include free kit + medals",
      "Suitable for ages 5 upwards",
    ],
    pricing: {
      headers: ["1hr (per child)", "2hr (per child)", "Bundle (per child)"],
      rows: [
        { label: "5–12 years", prices: ["£8", "£12", "£20"] },
        { label: "13–18 years", prices: ["£10", "£14", "£25"] },
        { label: "19+ years", prices: ["TBD", "TBD", "TBD"] },
      ],
    },
    footnote: "Party bundle includes T-shirt, workout booklet, and medals for every player.",
  },
];

const bundleIncentives = [
  { item: "Workout booklet", three: true,  five: true,  ten: true,  party: true  },
  { item: "T-shirt",         three: false, five: true,  ten: true,  party: true  },
  { item: "Tracksuit",       three: false, five: false, ten: true,  party: false },
  { item: "Backpack",        three: false, five: false, ten: true,  party: false },
  { item: "Medals",          three: false, five: false, ten: false, party: true  },
];

function ServiceBlock({ s }: { s: Service }) {
  return (
    <article id={s.slug} className="scroll-mt-24" style={{ borderBottom: "1px solid var(--color-line)" }}>
      <div className="py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[8rem_1fr] lg:gap-16">
          {/* Number */}
          <div
            className="font-[family-name:var(--font-display)] leading-none select-none"
            style={{ fontSize: "clamp(5rem,12vw,8rem)", color: "var(--color-brand)", opacity: 0.2, lineHeight: 1 }}
          >
            {s.num}
          </div>

          <div>
            <div className="eyebrow mb-3">{s.tag}</div>
            <h2
              className="font-[family-name:var(--font-display)] uppercase leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
            >
              {s.name}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--color-mute)", fontSize: "1.05rem", lineHeight: 1.75 }}>
              {s.blurb}
            </p>

            {s.bullets && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-bone)" }}>
                    <span className="mt-[0.45rem] shrink-0" style={{ display: "block", height: "2px", width: "1rem", background: "var(--color-brand)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Pricing table */}
            <div className="mt-10 overflow-x-auto" style={{ border: "1px solid var(--color-line)" }}>
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr style={{ background: "var(--color-ink-2)" }}>
                    <th className="px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em]"
                      style={{ color: "var(--color-brand)", borderBottom: "1px solid var(--color-line)" }}>
                      Age / Group
                    </th>
                    {s.pricing.headers.map((h) => (
                      <th key={h} className="px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em]"
                        style={{ color: "var(--color-brand)", borderBottom: "1px solid var(--color-line)", borderLeft: "1px solid var(--color-line)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.pricing.rows.map((r, ri) => (
                    <tr key={r.label} style={{ borderBottom: ri === s.pricing.rows.length - 1 ? "none" : "1px solid var(--color-line)" }}>
                      <th scope="row" className="px-4 py-3 text-left font-medium" style={{ color: "var(--color-bone)" }}>
                        {r.label}
                      </th>
                      {r.prices.map((p, i) => (
                        <td key={i} className="px-4 py-3 font-[family-name:var(--font-display)] tracking-tight"
                          style={{ color: "var(--color-bone)", borderLeft: "1px solid var(--color-line)" }}>
                          {p}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {s.footnote && (
              <p className="mt-3 text-xs" style={{ color: "var(--color-mute)" }}>{s.footnote}</p>
            )}

            <div className="mt-8">
              <Link href={`/booking?service=${encodeURIComponent(s.name)}`} className="btn-brand">
                Book {s.name.split(/[&·]/)[0].trim()} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(120px,28vw,360px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          DD
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Services & Pricing</div>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
            style={{ fontSize: "clamp(3.5rem,12vw,11rem)" }}
          >
            Pick Your<br /><span style={{ color: "var(--color-brand)" }}>Path.</span>
          </h1>
          <p className="lead mt-6 max-w-2xl">
            Six ways to train with Dime Development. Age-tiered pricing, bundle discounts, and free kit on every block booking.
          </p>

          {/* Quick nav */}
          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="nav-pill">
                {s.num} · {s.name.split(/[&·]/)[0].trim()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {services.map((s) => (
            <ServiceBlock key={s.slug} s={s} />
          ))}
        </div>
      </section>

      {/* BUNDLE INCENTIVES */}
      <section style={{ background: "var(--color-ink-2)", borderTop: "1px solid var(--color-line)" }}>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow mb-6">Block Booking Incentives</div>
          <h2
            className="mt-4 max-w-3xl font-[family-name:var(--font-display)] uppercase leading-[0.88]"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}
          >
            Block-book and get{" "}
            <span style={{ color: "var(--color-brand)" }}>kitted out.</span>
          </h2>
          <p className="mt-5 max-w-2xl" style={{ color: "var(--color-mute)", lineHeight: 1.75 }}>
            Every bundle includes free Dime Development gear. The bigger the bundle, the bigger the drop.
          </p>

          <div className="mt-10 overflow-x-auto" style={{ border: "1px solid var(--color-line)" }}>
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr style={{ background: "var(--color-ink-3)" }}>
                  {["Bonus Item", "3 Session", "5 Session", "10 Session", "Party Bundle"].map((h, i) => (
                    <th key={h} className="px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-center first:text-left"
                      style={{ color: "var(--color-brand)", borderBottom: "1px solid var(--color-line)", borderLeft: i > 0 ? "1px solid var(--color-line)" : undefined }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bundleIncentives.map((row, ri) => (
                  <tr key={row.item} style={{ borderBottom: ri === bundleIncentives.length - 1 ? "none" : "1px solid var(--color-line)" }}>
                    <th scope="row" className="px-4 py-3 text-left font-medium" style={{ color: "var(--color-bone)" }}>
                      {row.item}
                    </th>
                    {[row.three, row.five, row.ten, row.party].map((v, i) => (
                      <td key={i} className="px-4 py-3 text-center" style={{ borderLeft: "1px solid var(--color-line)" }}>
                        {v
                          ? <span className="font-[family-name:var(--font-display)] text-xl" style={{ color: "var(--color-brand)" }}>✓</span>
                          : <span style={{ color: "var(--color-mute)" }}>—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid var(--color-line)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "clamp(1.5rem,4vw,3rem)" }}>
              Not sure which fits?
            </p>
            <p className="mt-3 max-w-xl" style={{ color: "var(--color-mute)", lineHeight: 1.75 }}>
              Send a message — coach will recommend the right package based on your level, goals, and schedule.
            </p>
          </div>
          <Link href="/contact" className="btn-ghost shrink-0">Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}
