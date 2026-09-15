/**
 * /api/contact — handles enquiries from:
 *   - Hero form       (source: "hero-form")
 *   - Lead section    (source: "lead-form")
 *   - Popup form      (source: "popup-form")
 *
 * Uses Nodemailer + Gmail SMTP (STARTTLS / port 587).
 * Works on Local, Vercel, and Hostinger — same code, different env vars.
 *
 * Credentials are read from environment variables ONLY.
 * Nothing sensitive is returned to the browser.
 */

import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/mailer";

// Force Node.js runtime — required for Nodemailer / SMTP.
// This prevents Next.js from running this route on the Edge runtime.
export const runtime = "nodejs";

/** Format Asia/Kolkata date and time for the email body. */
function getFormattedDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date, time };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      businessSetupIn,
      message,
      source,
    } = body;

    // ── Server-side validation ──
    if (!fullName || !phone || !businessSetupIn) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    if (
      email &&
      email !== "—" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Build plain-text email body ──
    const { date, time } = getFormattedDateTime();

    const pageSource = source
      ? `Source: ${source}`
      : "Source: horizonlineuae.com";

    const emailText = [
      "New Enquiry Received - Horizon Line UAE",
      "",
      `Name:             ${fullName}`,
      `Phone:            ${phone}`,
      `Email:            ${email && email !== "—" ? email : "Not provided"}`,
      `Business Setup:   ${businessSetupIn}`,
      `Message:          ${message && message !== "—" ? message : "Not provided"}`,
      "",
      pageSource,
      `Date:             ${date}`,
      `Time:             ${time}`,
    ].join("\n");

    const visitorEmail =
      email && email !== "—" ? email : undefined;

    // ── Fire email without blocking the response ──
    // The server accepts the enquiry and returns success immediately.
    // The email is dispatched asynchronously so the user is redirected
    // to /thank-you in approximately 1 second regardless of SMTP latency.
    sendEnquiryEmail({
      subject: `New Business Setup Enquiry – ${fullName}`,
      text: emailText,
      replyTo: visitorEmail,
    }).catch((err) => {
      // Log server-side only — never expose to the browser.
      console.error("[mailer] SMTP send error:", err?.message || "Unknown error");
    });

    // ── Return success immediately ──
    return NextResponse.json(
      { success: true, message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch (err) {
    // Generic error — no sensitive details returned.
    console.error("[api/contact] Unexpected error:", (err as Error)?.message);
    return NextResponse.json(
      { error: "Unable to submit your enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
