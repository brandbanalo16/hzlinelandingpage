"use client";

import { useState, useEffect, useId, useCallback } from "react";
import Image from "next/image";
import { X, Phone, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  businessSetupIn: string;
  message: string;
  honeypot: string;
};

const initialForm: FormData = {
  fullName: "",
  phone: "",
  email: "",
  businessSetupIn: "",
  message: "",
  honeypot: "",
};

const setupOptions = ["Mainland", "Free Zone", "Offshore", "Not Sure Yet"];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const id = useId();

  const handleOpen = useCallback(() => {
    setOpen(true);
    setStatus("idle");
    setForm(initialForm);
    setErrors({});
  }, []);

  useEffect(() => {
    window.addEventListener("open-popup-form", handleOpen);
    return () => window.removeEventListener("open-popup-form", handleOpen);
  }, [handleOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (digits.length !== 10) e.phone = "Phone number must be exactly 10 digits.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.businessSetupIn) e.businessSetupIn = "Please select an option.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || form.honeypot) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: `+971 ${form.phone}`,
          email: form.email || "—",
          businessSetupIn: form.businessSetupIn,
          message: form.message || "—",
          source: "popup-form",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Get Free Consultation">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0D1F3C] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeInUp">

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors z-20"
          aria-label="Close form"
        >
          <X size={16} />
        </button>

        {/* ── Left Panel ── */}
        <div className="relative md:w-[42%] flex-shrink-0 min-h-[260px] md:min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            alt="Business consultant"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/65 via-[#0D1F3C]/55 to-[#0D1F3C]/90" />

          <div className="relative z-10 p-7 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white leading-tight mb-6">
                Calculate Business<br />Setup Cost
              </h2>
              <ul className="space-y-3 mb-8">
                {["Free Consultation", "Lowest price guaranteed", "Visa processing assistance"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-white/90 text-sm font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#266464] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/50 text-xs mb-3 uppercase tracking-widest font-semibold">Contact us on</p>
              <a href="tel:+971541787863" className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm font-semibold transition-all mb-2.5">
                <Phone size={15} className="text-[#90B8B8]" />
                +971 541 787 863
              </a>
              <a href="https://wa.me/971541787863" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-xl px-4 py-2.5 text-white text-sm font-semibold transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp +971 541 787 863
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Panel — Form ── */}
        <div className="flex-1 bg-[#0F2440] p-7 flex flex-col">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-8">
              <div className="w-16 h-16 bg-[#266464]/20 rounded-full flex items-center justify-center mb-5">
                <CheckCircle size={32} className="text-[#266464]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-white/60 leading-relaxed text-sm max-w-xs">
                Your enquiry has been received. We&apos;ll be in touch shortly to discuss your business setup.
              </p>
              <button onClick={() => setOpen(false)} className="mt-6 px-6 py-2.5 bg-[#266464] hover:bg-[#1C4A4A] text-white text-sm font-semibold rounded-xl transition-colors">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Free consultation request" className="flex flex-col gap-4 flex-1">
              <div className="hidden" aria-hidden="true">
                <input name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor={`${id}-popup-name`} className="block text-sm font-semibold text-white/90 mb-1.5">
                  Full Name <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                  id={`${id}-popup-name`}
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/30 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/50 ${errors.fullName ? "border-red-500/60" : "border-white/15 focus:border-[#266464]"}`}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert"><AlertCircle size={11} /> {errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor={`${id}-popup-phone`} className="block text-sm font-semibold text-white/90 mb-1.5">
                  Phone Number <span className="text-red-400" aria-label="required">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center bg-white/5 border border-white/15 rounded-xl px-3 text-white/70 text-sm font-medium flex-shrink-0 select-none whitespace-nowrap">
                    🇦🇪 +971
                  </div>
                  <input
                    id={`${id}-popup-phone`}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="5X XXX XXXX"
                    maxLength={10}
                    className={`flex-1 px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/30 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/50 ${errors.phone ? "border-red-500/60" : "border-white/15 focus:border-[#266464]"}`}
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert"><AlertCircle size={11} /> {errors.phone}</p>}
              </div>

              {/* Email (optional) */}
              <div>
                <label htmlFor={`${id}-popup-email`} className="block text-sm font-semibold text-white/90 mb-1.5">
                  Email Address <span className="text-white/40 font-normal text-xs">(Optional)</span>
                </label>
                <input
                  id={`${id}-popup-email`}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-white/30 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/50 ${errors.email ? "border-red-500/60" : "border-white/15 focus:border-[#266464]"}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert"><AlertCircle size={11} /> {errors.email}</p>}
              </div>

              {/* Business Setup In */}
              <div>
                <label htmlFor={`${id}-popup-setup`} className="block text-sm font-semibold text-white/90 mb-1.5">
                  Business Setup In <span className="text-red-400" aria-label="required">*</span>
                </label>
                <select
                  id={`${id}-popup-setup`}
                  name="businessSetupIn"
                  value={form.businessSetupIn}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#0D1F3C] text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/50 appearance-none ${errors.businessSetupIn ? "border-red-500/60" : "border-white/15 focus:border-[#266464]"}`}
                  aria-invalid={!!errors.businessSetupIn}
                >
                  <option value="" disabled>Select setup type</option>
                  {setupOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.businessSetupIn && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert"><AlertCircle size={11} /> {errors.businessSetupIn}</p>}
              </div>

              {/* Message (optional) */}
              <div>
                <label htmlFor={`${id}-popup-message`} className="block text-sm font-semibold text-white/90 mb-1.5">
                  Message <span className="text-white/40 font-normal text-xs">(Optional)</span>
                </label>
                <textarea
                  id={`${id}-popup-message`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Share your business idea here…"
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/50 focus:border-[#266464] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-[#266464] hover:bg-[#1C4A4A] disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#266464]/25 hover:-translate-y-px mt-auto"
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                ) : (
                  <>Submit <ArrowRight size={16} /></>
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-red-400 text-xs flex items-center justify-center gap-1" role="alert">
                  <AlertCircle size={12} /> Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
