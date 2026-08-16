import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  company: z.string().max(100).optional().or(z.literal("")),
  service: z.string().min(1),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, service, message } = parsed.data;
    const ownerEmail = process.env.OWNER_EMAIL || "kahmad9966@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("[contact] New inquiry (email not sent — RESEND_API_KEY missing):", parsed.data);
      return NextResponse.json({ ok: true, delivered: false });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM_EMAIL || "notifications@yourdomain.com",
        to: ownerEmail,
        reply_to: email,
        subject: `New inquiry — ${service} (${fullName})`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "n/a")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    return NextResponse.json({ ok: res.ok, delivered: res.ok });
  } catch (err) {
    console.error("[contact] submission failed", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
