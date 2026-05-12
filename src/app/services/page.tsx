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
  { item: "Workout booklet", three: true, five: true, ten: true, party: true },
  { item: "T-shirt", three: false, five: true, ten: true, party: true },
  { item: "Tracksuit", three: false, five: false, ten: true, party: false },
  { item: "Backpack", three: false, five: false, ten: true, party: false },
  { item: "Medals", three: false, five: false, ten: false, party: true },
];

function ServiceBlock({ s }: { s: Service }) {
  return (
    <article
      id={s.slug}
      className="scroll-mt-24 border-b border-[var(--color-line)] py-16 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
        <div className="font-[family-name:var(--font-display)] text-7xl leading-none text-brand lg:text-9xl">
          {s.num}
        </div>

        <div>
          <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-mute">
            {s.tag}
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
            {s.name}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mute">
            {s.blurb}
          </p>
          {s.bullets && (
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
          )}

          {/* Pricing table */}
          <div className="mt-8 overflow-x-auto border border-[var(--color-line)]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-ink-2">
                <tr>
                  <th className="border-b border-[var(--color-line)] px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    Age / Group
                  </th>
                  {s.pricing.headers.map((h) => (
                    <th
                      key={h}
                      className="border-b border-l border-[var(--color-line)] px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.pricing.rows.map((r) => (
                  <tr
                    key={r.label}
                    className="border-b border-[var(--color-line)] last:border-b-0 hover:bg-ink-2/40"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-bone"
                    >
                      {r.label}
                    </th>
                    {r.prices.map((p, i) => (
                      <td
                        key={i}
                        className="border-l border-[var(--color-line)] px-4 py-3 font-[family-name:var(--font-display)] tracking-tight text-bone"
                      >
                        {p}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {s.footnote && (
            <p className="mt-3 text-xs text-mute">{s.footnote}</p>
          )}

          <div className="mt-8">
            <Link
              href={`/booking?service=${encodeURIComponent(s.name)}`}
              className="group inline-flex items-center bg-brand px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-2"
            >
              Book {s.name.split(" ").slice(0, 2).join(" ")}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
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
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Services & Pricing
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Pick Your
            <br />
            <span className="text-brand">Path.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
            Six ways to train with Dime Development. Age-tiered pricing, bundle
            discounts, and free kit on every block booking.
          </p>

          {/* Quick nav */}
          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="border border-[var(--color-line)] bg-ink-2 px-4 py-2 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-brand hover:text-brand"
              >
                {s.num} · {s.name.split(/[&·]/)[0].trim()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {services.map((s) => (
            <ServiceBlock key={s.slug} s={s} />
          ))}
        </div>
      </section>

      {/* BUNDLE INCENTIVES */}
      <section className="border-t border-[var(--color-line)] bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Block Booking Incentives
          </div>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.9] tracking-tight md:text-6xl">
            Block-book and get <span className="text-brand">kitted out.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-mute">
            Every bundle includes free Dime Development gear. The bigger the
            bundle, the bigger the drop.
          </p>

          <div className="mt-10 overflow-x-auto border border-[var(--color-line)] bg-ink">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-ink-2">
                <tr>
                  <th className="border-b border-[var(--color-line)] px-4 py-3 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    Bonus Item
                  </th>
                  <th className="border-b border-l border-[var(--color-line)] px-4 py-3 text-center font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    3 Session
                  </th>
                  <th className="border-b border-l border-[var(--color-line)] px-4 py-3 text-center font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    5 Session
                  </th>
                  <th className="border-b border-l border-[var(--color-line)] px-4 py-3 text-center font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    10 Session
                  </th>
                  <th className="border-b border-l border-[var(--color-line)] px-4 py-3 text-center font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-brand">
                    Party Bundle
                  </th>
                </tr>
              </thead>
              <tbody>
                {bundleIncentives.map((row) => (
                  <tr
                    key={row.item}
                    className="border-b border-[var(--color-line)] last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-bone"
                    >
                      {row.item}
                    </th>
                    {[row.three, row.five, row.ten, row.party].map((v, i) => (
                      <td
                        key={i}
                        className="border-l border-[var(--color-line)] px-4 py-3 text-center"
                      >
                        {v ? (
                          <span className="font-[family-name:var(--font-display)] text-xl text-brand">
                            ✓
                          </span>
                        ) : (
                          <span className="text-mute">—</span>
                        )}
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
      <section className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
              Not sure which fits?
            </h2>
            <p className="mt-3 max-w-xl text-mute">
              Send a message — coach will recommend the right package based on
              your level, goals, and schedule.
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
