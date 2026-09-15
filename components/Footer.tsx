"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const footerSections = [
  {
    title: "Business Setup",
    links: [
      { label: "Mainland Setup", href: "/#business-setup" },
      { label: "Free Zone Setup", href: "/#business-setup" },
      { label: "Offshore Setup", href: "/#business-setup" },
      { label: "Business Setup in Dubai", href: "/#business-setup" },
      { label: "Business Setup in Abu Dhabi", href: "/#business-setup" },
      { label: "Business Setup in Sharjah", href: "/#business-setup" },

    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#why-horizon-line" },
      { label: "Services", href: "/#services" },
      { label: "Business Setup", href: "/#business-setup" },
      { label: "Testimonials", href: "/#testimonials-heading" },
      { label: "Contact", href: "/#pop-up-form" }
    ],
  },
];

const initialForm = { name: "", phone: "", email: "", service: "" };

export default function Footer() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "footer" }),
      });
      if (res.ok) { setStatus("success"); setForm(initialForm); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#266464] focus:bg-white/8 transition-all duration-200";

  return (
    <footer className="bg-[#060E1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_2fr] gap-6 lg:gap-8">

          {/* COL 1 — Brand */}
          <div>
            <img src="/src/img/logo-black.webp" alt="Horizon Line" className="w-60 h-auto mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional business setup and company formation guidance across all 7 Emirates — Mainland, Free Zone and Offshore.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#266464] hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#e91e63] hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2 & 3 — Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white text-xs tracking-widest mb-4 uppercase">{section.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* RIGHT — Quick Enquiry Form */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Quick Enquiry</h3>
            <p className="text-slate-400 text-sm mb-6">Get a free consultation. We&apos;ll respond within 24 hours.</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 size={48} className="text-[#266464]" />
                <p className="text-white font-bold text-lg">Thank you! We&apos;ll be in touch shortly.</p>
                <p className="text-slate-400 text-sm">One of our experts will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="footer-name" className="block text-slate-400 text-xs font-medium mb-1.5">Full Name</label>
                    <input
                      id="footer-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-phone" className="block text-slate-400 text-xs font-medium mb-1.5">Phone Number</label>
                    <input
                      id="footer-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter Number"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Service */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="footer-email" className="block text-slate-400 text-xs font-medium mb-1.5">Email Address</label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-service" className="block text-slate-400 text-xs font-medium mb-1.5">Service Interested In</label>
                    <select
                      id="footer-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="bg-[#0A1628]">Select service…</option>
                      <option value="mainland" className="bg-[#0A1628]">Mainland Setup</option>
                      <option value="freezone" className="bg-[#0A1628]">Free Zone Setup</option>
                      <option value="offshore" className="bg-[#0A1628]">Offshore Setup</option>
                      <option value="visa" className="bg-[#0A1628]">Visa Services</option>
                      <option value="other" className="bg-[#0A1628]">Other</option>
                    </select>
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#266464] hover:bg-[#1d4b4b] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(38,100,100,0.35)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {status === "loading" ? "Sending…" : "Submit Enquiry"}
                  {status !== "loading" && <ArrowRight size={16} aria-hidden="true" />}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} Horizon Line. All rights reserved. Managed by <Link href="https://brandbanlo.com/" className="hover:text-slate-300 transition-colors">Brandbanlo</Link></p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
