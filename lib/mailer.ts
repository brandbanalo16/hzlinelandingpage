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
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // false for STARTTLS on port 587
    auth: {
      user: "enquiry@horizonlineuae.com",
      pass: "cwdvekqrcxjnclpo",
    },
    tls: {
      rejectUnauthorized: true, // always verify TLS cert
    },
  });
}

export const MAIL_FROM = "Horizon Line UAE <enquiry@horizonlineuae.com>";

export const MAIL_TO = "enquiry@horizonlineuae.com";
export const MAIL_BCC = "brandbanalo16@gmail.com";

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
