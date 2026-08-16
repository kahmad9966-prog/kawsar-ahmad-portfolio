import { NextRequest, NextResponse } from "next/server";

// This route runs server-side only. RESEND_API_KEY never reaches the client.
export async function POST(req: NextRequest) {
  try {
    const { name, email, registeredAt, userAgent } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const ownerEmail = process.env.OWNER_EMAIL || "kahmad9966@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    // If no email provider is configured yet, don't fail the signup —
    // just log it so local development still works end to end.
    if (!apiKey) {
      console.log("[register] New user (email not sent — RESEND_API_KEY missing):", {
        name,
        email,
        registeredAt,
        userAgent,
      });
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
        subject: `New portfolio registration — ${name}`,
        html: `
          <h2>New user registered</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Registered:</strong> ${escapeHtml(registeredAt)}</p>
          <p><strong>Browser / Device:</strong> ${escapeHtml(userAgent || "n/a")}</p>
        `,
      }),
    });

    return NextResponse.json({ ok: res.ok, delivered: res.ok });
  } catch (err) {
    console.error("[register] notification failed", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
