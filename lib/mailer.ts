/**
 * Shared Nodemailer SMTP transport for Horizon Line UAE.
 * Server-side only — never import this from client components.
 *
 * Works across:
 *   - Local development (npm run dev)
 *   - Vercel (Node.js runtime)
 *   - Hostinger (Next.js Node.js application)
 *
 * All credentials come from environment variables. Never hard-code them.
 */

import nodemailer from "nodemailer";

export function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // false for STARTTLS on port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true, // always verify TLS cert
    },
  });
}

export const MAIL_FROM =
  process.env.MAIL_FROM || "Horizon Line UAE <enquiry@horizonlineuae.com>";

export const MAIL_TO = "enquiry@horizonlineuae.com";
export const MAIL_BCC = process.env.MAIL_BCC || "brandbanalo16@gmail.com";

/**
 * Send an enquiry email.
 * Non-blocking — caller should not await this if fast redirect is needed.
 */
export async function sendEnquiryEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const transport = createTransport();
  await transport.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    bcc: MAIL_BCC,
    replyTo: opts.replyTo && opts.replyTo !== "—" ? opts.replyTo : undefined,
    subject: opts.subject,
    text: opts.text,
  });
}
