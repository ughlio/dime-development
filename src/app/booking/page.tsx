"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const sessionTypes = [
  {
    id: "1-2-1",
    name: "1-2-1 Basketball Session",
    tag: "Skill Development",
    blurb: "Solo session. Full attention.",
  },
  {
    id: "mentoring",
    name: "1-2-1 Mentoring & Intervention",
    tag: "Weekly Programme",
    blurb: "Term-based mentoring + on-court work.",
  },
  {
    id: "speaking",
    name: "Guest Speaker & Presentations",
    tag: "Schools / Conferences",
    blurb: "Talks, workshops, presentations.",
  },
  {
    id: "schools",
    name: "Schools & Colleges Extra-Curricular",
    tag: "Group · Max 25",
    blurb: "After-school clubs, PE add-ons.",
  },
  {
    id: "camps",
    name: "Basketball Camps",
    tag: "Half-Term · Holiday",
    blurb: "Multi-day camps.",
  },
  {
    id: "parties",
    name: "Basketball Party Session",
    tag: "Birthdays · Min 6 / Max 15",
    blurb: "1hr or 2hr coach-led party.",
  },
];

function BookingForm() {
  const params = useSearchParams();
  const initialFromQuery = params.get("service");

  const [type, setType] = useState<string>(
    sessionTypes.find((s) => s.name === initialFromQuery)?.id ?? "1-2-1"
  );
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialFromQuery) {
      const match = sessionTypes.find((s) => s.name === initialFromQuery);
      if (match) setType(match.id);
    }
  }, [initialFromQuery]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      sessionType: sessionTypes.find((s) => s.id === type)?.name ?? type,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      preferredDate: String(fd.get("preferredDate") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-brand bg-ink-2 p-10 text-center">
        <div className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight text-brand">
          Request Sent.
        </div>
        <p className="mt-4 text-lg text-bone">
          Coach will reach out within 24 hours to confirm your slot.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 border border-[var(--color-line)] px-6 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-bone hover:border-brand hover:text-brand transition-colors"
        >
          Send Another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Session type picker */}
      <div>
        <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
          01 · Session Type
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {sessionTypes.map((s) => {
            const active = type === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setType(s.id)}
                className={`text-left border p-5 transition-colors ${
                  active
                    ? "border-brand bg-brand/10"
                    : "border-[var(--color-line)] bg-ink-2 hover:border-brand/60"
                }`}
              >
                <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-mute">
                  {s.tag}
                </div>
                <div
                  className={`mt-1 font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight ${
                    active ? "text-brand" : "text-bone"
                  }`}
                >
                  {s.name}
                </div>
                <div className="mt-2 text-sm text-mute">{s.blurb}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Player details */}
      <div>
        <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
          02 · Your Details
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field name="name" label="Full Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="phone" label="Phone" type="tel" />
          <Field name="preferredDate" label="Preferred Date" type="date" />
        </div>
        <div className="mt-4">
          <Field
            name="notes"
            label="Notes (age / level / what you want to work on)"
            textarea
          />
        </div>
      </div>

      {error && (
        <div className="border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center bg-brand px-8 py-4 font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit Request"}
        <span className="ml-3 transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const baseClass =
    "w-full border border-[var(--color-line)] bg-ink-2 px-4 py-3 text-bone placeholder:text-mute focus:border-brand focus:outline-none";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-mute">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          className={`${baseClass} mt-2 resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={`${baseClass} mt-2`}
        />
      )}
    </label>
  );
}

export default function BookingPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Booking
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Lock It
            <br />
            <span className="text-brand">In.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
            Tell us what you need. Coach reviews every request personally and
            confirms within 24 hours.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
          <Suspense fallback={<div className="text-mute">Loading…</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
