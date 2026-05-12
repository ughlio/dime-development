"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const faqs = [
  { q: "What age groups do you coach?",  a: "Primary school through college, plus adult players. Every plan is built around the player's level, not just age." },
  { q: "Where are sessions held?",        a: "In-person sessions are held at partner gyms in London. Location confirmed on booking. Online sessions are fully remote." },
  { q: "What should I bring?",           a: "Court shoes, a ball, water, and a willingness to work. Coach provides cones, gear, and drill setup." },
  { q: "Cancellation policy?",           a: "24 hours' notice for a free reschedule. Inside 24 hours the session is forfeit unless there's a genuine emergency." },
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
        ? <textarea name={name} rows={6} required={required} className="field resize-y" />
        : <input name={name} type={type} required={required} className="field"
            value={value} onChange={e => onChange?.(e.target.value)} />
      }
    </label>
  );
}

function ContactForm() {
  const params = useSearchParams();
  const product = params.get("product");
  const subjectParam = params.get("subject");
  const [subject, setSubject] = useState(subjectParam ?? (product ? `Order: ${product}` : ""));
  const [status, setStatus]   = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error,  setError]    = useState("");

  useEffect(() => {
    if (product) setSubject(`Order: ${product}`);
    else if (subjectParam) setSubject(subjectParam);
  }, [product, subjectParam]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("sending"); setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""), email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""), message: String(fd.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error ?? "Something went wrong."); }
      setStatus("ok"); (e.target as HTMLFormElement).reset(); setSubject("");
    } catch (err) {
      setStatus("error"); setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "ok") {
    return (
      <div className="p-10 text-center" style={{ border: "1px solid var(--color-brand)" }}>
        <div className="font-[family-name:var(--font-display)] uppercase" style={{ fontSize: "clamp(2rem,6vw,3.5rem)", color: "var(--color-brand)" }}>Message Sent.</div>
        <p className="mt-4" style={{ color: "var(--color-bone)" }}>Coach will get back to you within 1–2 business days.</p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-8">Send Another →</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name"  label="Name"  required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field name="subject" label="Subject" value={subject} onChange={setSubject} />
      <Field name="message" label="Message" textarea required />
      {error && (
        <div className="p-4 text-sm" style={{ border: "1px solid rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.08)", color: "#fca5a5" }}>{error}</div>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-brand disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="noise relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 inset-y-0 flex items-center font-[family-name:var(--font-display)] select-none leading-none"
          style={{ fontSize: "clamp(100px,24vw,320px)", color: "var(--color-brand)", opacity: 0.04 }}
        >
          HMU
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="eyebrow">Contact</div>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] uppercase leading-[0.85]"
            style={{ fontSize: "clamp(3.5rem,12vw,11rem)" }}
          >
            Get In<br /><span style={{ color: "var(--color-brand)" }}>Touch.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            Questions, custom packages, team enquiries — drop a message and coach will follow up personally.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto grid max-w-7xl gap-0 px-0 lg:grid-cols-[2fr_1fr]">
          {/* Form */}
          <div className="px-5 py-14 lg:px-10 lg:py-20" style={{ borderRight: "1px solid var(--color-line)" }}>
            <div className="eyebrow mb-6">Send A Message</div>
            <Suspense fallback={<div style={{ color: "var(--color-mute)" }}>Loading…</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-0 divide-y" style={{ borderColor: "var(--color-line)" }}>
            <div className="p-6 lg:p-8">
              <div className="eyebrow mb-4">Direct</div>
              <a href="mailto:Dimedevelopment@hotmail.com"
                className="block font-[family-name:var(--font-display)] uppercase leading-tight transition-colors hover:text-brand break-all"
                style={{ fontSize: "clamp(1rem,2vw,1.4rem)", color: "var(--color-bone)" }}>
                Dimedevelopment<br/>@hotmail.com
              </a>
              <a href="tel:+447311883899"
                className="mt-3 block font-[family-name:var(--font-display)] uppercase transition-colors hover:text-brand"
                style={{ fontSize: "clamp(1rem,2vw,1.4rem)", color: "var(--color-bone)" }}>
                07311 883 899
              </a>
              <a href="https://instagram.com/dimedevelopment" target="_blank" rel="noopener noreferrer"
                className="mt-3 block font-[family-name:var(--font-display)] uppercase transition-colors"
                style={{ fontSize: "clamp(0.9rem,1.8vw,1.2rem)", color: "var(--color-brand)" }}>
                @dimedevelopment →
              </a>
            </div>
            <div className="p-6 lg:p-8">
              <div className="eyebrow mb-3">Response Time</div>
              <p style={{ color: "var(--color-mute)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Coach personally reviews every message. Expect a reply within 1–2 business days.
              </p>
            </div>
            <div className="p-6 lg:p-8">
              <div className="eyebrow mb-3">Location</div>
              <p className="font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "1.2rem" }}>
                London, United Kingdom
              </p>
              <p style={{ color: "var(--color-mute)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Sessions at partner gyms · remote available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-ink-2)" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-20">
          <div className="eyebrow mb-6">FAQ</div>
          <dl>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="grid gap-4 py-6 sm:grid-cols-[1fr_2fr]"
                style={{ borderTop: "1px solid var(--color-line)", borderBottom: i === faqs.length - 1 ? "1px solid var(--color-line)" : "none" }}
              >
                <dt className="font-[family-name:var(--font-display)] uppercase tracking-tight" style={{ fontSize: "clamp(1rem,2vw,1.3rem)" }}>
                  {f.q}
                </dt>
                <dd style={{ color: "var(--color-mute)", lineHeight: 1.75, fontSize: "0.9rem" }}>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
