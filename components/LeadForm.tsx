"use client";

import { useState, useId } from "react";
import { Send, MessageCircle, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const id = useId();
  const router = useRouter();

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (digits.length !== 10) e.phone = "Phone number must be exactly 10 digits.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.businessSetupIn) e.businessSetupIn = "Please select a setup type.";
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
          source: "lead-form",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-[#0A1628]" aria-labelledby="form-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="text-white lg:pr-8">
            <h2 id="form-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Not Sure Which Business Setup Is Right for You?
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10">
              Tell us about your preferred setup type and goals. Our consultants will help you choose the right jurisdiction and licensing route — for free.
            </p>

            <div className="space-y-8">
              {[
                { label: "Free consultation", sub: "No obligation, no pressure" },
                { label: "Personalized guidance", sub: "Based on your specific business" },
                { label: "All 7 Emirates covered", sub: "Mainland, Free Zone and Offshore" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#266464]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#266464] rounded-full" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base lg:text-lg">{item.label}</p>
                    <p className="text-slate-400 text-sm lg:text-base mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-12 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg"
              >
                <MessageCircle size={24} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            )}
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/30">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 bg-[#266464]/10 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-[#266464]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">Thank You!</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your enquiry has been received. A member of our team will be in touch shortly to discuss your business setup requirements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Business setup consultation request form">
                <h3 className="font-bold text-[#0A1628] text-xl mb-6">Get a Free Business Setup Consultation</h3>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor={`${id}-hp`}>Leave this field blank</label>
                  <input id={`${id}-hp`} name="honeypot" type="text" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor={`${id}-name`} className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Full Name <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                      id={`${id}-name`}
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/30 ${errors.fullName ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 focus:border-[#266464]"}`}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor={`${id}-phone`} className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Phone Number <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl px-3 text-slate-600 text-sm font-medium flex-shrink-0 select-none whitespace-nowrap">
                        🇦🇪 +971
                      </div>
                      <input
                        id={`${id}-phone`}
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="5X XXX XXXX"
                        maxLength={10}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/30 ${errors.phone ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 focus:border-[#266464]"}`}
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email (optional) */}
                  <div>
                    <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Email Address <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                    </label>
                    <input
                      id={`${id}-email`}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/30 ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50 focus:border-[#266464]"}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Business Setup In */}
                  <div>
                    <label htmlFor={`${id}-setup`} className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Business Setup In <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <select
                      id={`${id}-setup`}
                      name="businessSetupIn"
                      value={form.businessSetupIn}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#266464]/30 appearance-none bg-slate-50 ${errors.businessSetupIn ? "border-red-400" : "border-slate-200 focus:border-[#266464]"}`}
                      aria-invalid={!!errors.businessSetupIn}
                    >
                      <option value="">Select setup type</option>
                      {setupOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.businessSetupIn && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.businessSetupIn}
                      </p>
                    )}
                  </div>

                  {/* Message (optional) */}
                  <div>
                    <label htmlFor={`${id}-message`} className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Message <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                    </label>
                    <textarea
                      id={`${id}-message`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your business idea…"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#266464]/30 focus:border-[#266464] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 bg-[#266464] hover:bg-[#1C4A4A] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-[#266464]/20 hover:shadow-lg mt-2"
                    aria-busy={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" /> Sending…</>
                    ) : (
                      <><Send size={16} aria-hidden="true" /> Get a Free Business Setup Consultation</>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-red-600 text-sm flex items-center justify-center gap-1.5" role="alert">
                      <AlertCircle size={14} aria-hidden="true" />
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <p className="text-center text-slate-400 text-xs">
                    Your information is kept private. We do not share your details with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
