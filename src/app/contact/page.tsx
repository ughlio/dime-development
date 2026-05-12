"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const faqs = [
  {
    q: "What age groups do you coach?",
    a: "Middle school through college, plus motivated adult players. Every plan is built around the player's level — not their age.",
  },
  {
    q: "Where are sessions held?",
    a: "In-person sessions are held at partner gyms in the area. Specific location is confirmed when you book. Online sessions are remote.",
  },
  {
    q: "What should I bring?",
    a: "Court shoes, a ball, water, and a willingness to work. Coach provides cones, gear, and drill setup.",
  },
  {
    q: "Cancellation policy?",
    a: "24 hours notice for free reschedule. Inside 24 hours, the session is forfeit unless there's a real emergency.",
  },
];

function ContactForm() {
  const params = useSearchParams();
  const product = params.get("product");
  const subjectQuery = params.get("subject");

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");
  const [subject, setSubject] = useState<string>(
    subjectQuery ?? (product ? `Order: ${product}` : "")
  );

  useEffect(() => {
    if (product) setSubject(`Order: ${product}`);
    else if (subjectQuery) setSubject(subjectQuery);
  }, [product, subjectQuery]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
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
      setSubject("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-brand bg-ink-2 p-10 text-center">
        <div className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight text-brand">
          Message Sent.
        </div>
        <p className="mt-4 text-lg text-bone">
          Coach will get back to you within 1–2 business days.
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
      </div>
      <Field
        name="subject"
        label="Subject"
        value={subject}
        onChange={(v) => setSubject(v)}
      />
      <Field name="message" label="Message" textarea required />

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
        {status === "sending" ? "Sending…" : "Send Message"}
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
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
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
          rows={6}
          required={required}
          className={`${baseClass} mt-2 resize-y`}
          defaultValue={value}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={`${baseClass} mt-2`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
    </label>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-brand">
            <span className="h-[2px] w-10 bg-brand" />
            Contact
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Get In
            <br />
            <span className="text-brand">Touch.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
            Questions, custom packages, team inquiries — drop a message and
            coach will follow up.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[2fr_1fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
              Send A Message
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
              Tell us what you need.
            </h2>
            <div className="mt-8">
              <Suspense fallback={<div className="text-mute">Loading…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border border-[var(--color-line)] bg-ink-2 p-6">
              <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
                Direct
              </div>
              <a
                href="mailto:Dimedevelopment@hotmail.com"
                className="mt-3 block font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-bone hover:text-brand transition-colors break-words"
              >
                Dimedevelopment@hotmail.com
              </a>
              <a
                href="tel:+447311883899"
                className="mt-2 block font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-bone hover:text-brand transition-colors"
              >
                07311 883 899
              </a>
              <a
                href="https://instagram.com/dimedevelopment"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-[family-name:var(--font-display)] text-xl uppercase tracking-tight text-bone hover:text-brand transition-colors"
              >
                @dimedevelopment →
              </a>
            </div>

            <div className="border border-[var(--color-line)] bg-ink-2 p-6">
              <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
                Response Time
              </div>
              <p className="mt-3 text-bone">
                Coach personally reviews every message. Expect a reply within
                1–2 business days.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-brand">
            FAQ
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-5xl">
            Quick answers.
          </h2>

          <dl className="mt-10">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`grid gap-4 border-t border-[var(--color-line)] py-6 md:grid-cols-[1fr_2fr] ${
                  i === faqs.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="font-[family-name:var(--font-display)] text-lg uppercase tracking-tight text-bone">
                  {f.q}
                </dt>
                <dd className="text-mute leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
