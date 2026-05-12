"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const sessionTypes = [
  { id: "1-2-1",     name: "1-2-1 Basketball Session",            tag: "Skill Development",   price: "From £20" },
  { id: "mentoring", name: "1-2-1 Mentoring & Intervention",      tag: "Weekly Programme",    price: "From £30/wk" },
  { id: "speaking",  name: "Guest Speaker & Presentations",        tag: "Schools / Conferences",price: "From £150" },
  { id: "schools",   name: "Schools & Colleges Extra-Curricular",  tag: "Group · Max 25",      price: "From £7/child" },
  { id: "camps",     name: "Basketball Camps",                     tag: "Half-Term · Holiday", price: "From £40/day" },
  { id: "parties",   name: "Basketball Party Session",             tag: "Birthdays · 6–15",    price: "From £8/child" },
];

function Field({ name, label, type = "text", textarea = false, required = false, value, onChange }: {
  name: string; label: string; type?: string; textarea?: boolean;
  required?: boolean; value?: string; onChange?: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block mb-2 font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em]" style={{ color: "var(--color-mute)" }}>
        {label}{required && <span style={{ color: "var(--color-brand)" }}> *</span>}
      </span>
      {textarea
        ? <textarea name={name} rows={4} required={required} className="field resize-y" defaultValue={value} />
        : <input name={name} type={type} required={required} className="field"
            value={value} onChange={e => onChange?.(e.target.value)} />
      }
    </label>
  );
}

function BookingForm() {
  const params = useSearchParams();
  const [type, setType]     = useState(
    sessionTypes.find(s => s.name === params.get("service"))?.id ?? "1-2-1"
  );
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error,  setError]  = useState("");

  useEffect(() => {
    const match = sessionTypes.find(s => s.name === params.get("service"));
    if (match) setType(match.id);
  }, [params]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending"); setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      sessionType: sessionTypes.find(s => s.id === type)?.name ?? type,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      preferredDate: String(fd.get("preferredDate") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    };
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error ?? "Something went wrong."); }
      setStatus("ok"); (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error"); setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "ok") {
    return (
      <div className="p-10 text-center" style={{ border: "1px solid var(--color-brand)" }}>
        <div className="font-[family-name:var(--font-display)] uppercase" style={{ fontSize: "clamp(2rem,6vw,4rem)", color: "var(--color-brand)" }}>Request Sent.</div>
        <p className="mt-4 text-lg" style={{ color: "var(--color-bone)" }}>Coach will reach out within 24 hours to confirm your slot.</p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-8">Send Another →</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Session picker */}
      <div>
        <div className="eyebrow mb-5">01 · Session Type</div>
        <div className="grid gap-2 sm:grid-cols-2">
          {sessionTypes.map(s => {
            const active = type === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setType(s.id)}
                className="text-left p-5 transition-all"
                style={{
                  border: `1px solid ${active ? "var(--color-brand)" : "var(--color-line)"}`,
                  background: active ? "rgba(57,255,20,0.06)" : "var(--color-ink-2)",
                }}
              >
                <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em]" style={{ color: "var(--color-mute)" }}>{s.tag}</div>
                <div className="mt-1 font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "clamp(1.1rem,2.5vw,1.4rem)", color: active ? "var(--color-brand)" : "var(--color-bone)" }}>
                  {s.name}
                </div>
                <div className="mt-1 font-[family-name:var(--font-display)] text-xs" style={{ color: "var(--color-brand)", opacity: active ? 1 : 0.4 }}>{s.price}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="eyebrow mb-5">02 · Your Details</div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="name"  label="Full Name"  required />
          <Field name="email" label="Email"       type="email" required />
          <Field name="phone" label="Phone"       type="tel" />
          <Field name="preferredDate" label="Preferred Date" type="date" />
        </div>
        <div className="mt-4">
          <Field name="notes" label="Notes — age, level, what you want to work on" textarea />
        </div>
      </div>

      {error && (
        <div className="p-4 text-sm" style={{ border: "1px solid rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.08)", color: "#fca5a5" }}>{error}</div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-brand text-base disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Submit Request →"}
      </button>
    </form>
  );
}

export default function BookingPage() {
  return (
    <>
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(120px,28vw,360px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          BOOK
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Booking</div>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
            style={{ fontSize: "clamp(3.5rem,12vw,11rem)" }}
          >
            Lock It<br /><span style={{ color: "var(--color-brand)" }}>In.</span>
          </h1>
          <p className="lead mt-6 max-w-lg">
            Tell us what you need. Coach reviews every request personally and confirms within 24 hours.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-10 lg:py-20">
          <Suspense fallback={<div style={{ color: "var(--color-mute)" }}>Loading…</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
