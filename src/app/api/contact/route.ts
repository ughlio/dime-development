import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "@/lib/email";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const subject = body.subject?.trim() || "(no subject)";

  const html = `
    <h2>New Contact Message</h2>
    <table cellpadding="6" style="font-family:system-ui,Arial,sans-serif;border-collapse:collapse;">
      <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><b>Subject</b></td><td>${escapeHtml(subject)}</td></tr>
      <tr><td valign="top"><b>Message</b></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const result = await sendEmail({
    subject: `[Dime] Contact — ${subject} — ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
