import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "@/lib/email";

type BookingPayload = {
  sessionType?: string;
  name?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  notes?: string;
};

export async function POST(req: Request) {
  let body: BookingPayload;
  try {
    body = (await req.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const sessionType = body.sessionType?.trim();
  if (!name || !email || !sessionType) {
    return NextResponse.json(
      { error: "Name, email, and session type are required." },
      { status: 400 }
    );
  }

  const html = `
    <h2>New Booking Request</h2>
    <table cellpadding="6" style="font-family:system-ui,Arial,sans-serif;border-collapse:collapse;">
      <tr><td><b>Session</b></td><td>${escapeHtml(sessionType)}</td></tr>
      <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(body.phone ?? "—")}</td></tr>
      <tr><td><b>Preferred date</b></td><td>${escapeHtml(body.preferredDate ?? "—")}</td></tr>
      <tr><td valign="top"><b>Notes</b></td><td>${escapeHtml(body.notes ?? "—").replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const result = await sendEmail({
    subject: `[Dime] Booking request — ${sessionType} — ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
