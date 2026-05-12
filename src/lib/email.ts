import { Resend } from "resend";

export type SendResult = { ok: true } | { ok: false; error: string };

export async function sendEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM ?? "Dime Development <onboarding@resend.dev>";
  const coachEmail = process.env.COACH_EMAIL;

  if (!apiKey) {
    return {
      ok: false,
      error:
        "Email is not configured yet. Set RESEND_API_KEY in .env.local — see README.",
    };
  }
  if (!coachEmail) {
    return {
      ok: false,
      error:
        "Coach email is not configured. Set COACH_EMAIL in .env.local.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [coachEmail],
    subject,
    html,
    replyTo,
  });

  if (error) {
    return { ok: false, error: error.message ?? "Email send failed." };
  }
  return { ok: true };
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
