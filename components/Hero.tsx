"use client";

import Image from "next/image";
import { MapPin, AlertCircle, ArrowRight, CheckCircle, Shield, Clock, Star } from "lucide-react";
import { useState, useId } from "react";
import { useRouter } from "next/navigation";
import { pushEvent } from "@/lib/gtm";

const setupOptions = ["Mainland", "Free Zone", "Offshore", "Not Sure Yet"];

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  businessSetupIn: string;
  message: string;
  honeypot: string;
};

const initialForm: FormData = { fullName: "", phone: "", email: "", businessSetupIn: "", message: "", honeypot: "" };

const trustStats = [
  { value: "500+", label: "Businesses Launched" },
  { value: "7", label: "Emirates Covered" },
  { value: "10+", label: "Years of Expertise" },
  { value: "100%", label: "Client Focused" },
];

export default function Hero() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const id = useId();
  const router = useRouter();

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.businessSetupIn) e.businessSetupIn = "Required";
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
          phone: form.phone,
          email: form.email || "—",
          businessSetupIn: form.businessSetupIn,
          message: form.message || "—",
          source: "hero-form",
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

  const openPopup = () => window.dispatchEvent(new Event("open-popup-form"));

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/src/img/banner-bg.png"
          alt="Dubai skyline"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Bright airy overlay */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* ── LEFT: Headline ── */}
          <div className="flex-1 text-center lg:text-left animate-fadeInUp" style={{ animationDelay: "0s" }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 border border-slate-200 text-[#266464] text-[10px] font-bold tracking-[0.22em] uppercase rounded-full px-5 py-2.5 backdrop-blur-sm mb-6 shadow-sm section-label">
              <MapPin size={11} aria-hidden="true" />
              UAE Business Setup &amp; Company Formation
            </div>

            {/* Decorative rule */}
            <div className="hidden lg:flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#266464]" />
              <div className="w-2 h-2 rounded-full bg-[#266464]" />
              <div className="w-24 h-px bg-[#266464]" />
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2c3650] leading-[1.1] tracking-tight mb-4 lg:mb-6"
            >
              Your Trusted Partner
              <br />
              <span className="text-[#266464]">
                for Business Setup in the UAE
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-md font-light mb-6 lg:mb-10 mx-auto lg:mx-0">
              Start and establish your business with confidence. Horizon Line provides professional,
              end-to-end company formation guidance across all&nbsp;7 Emirates.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 lg:mb-12">
              <button
                onClick={openPopup}
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg"
                aria-label="Calculate your business setup cost"
              >
                Cost Calculate
                <ArrowRight size={15} aria-hidden="true" />
              </button>
              <a
                href={`https://wa.me/971566866849?text=${encodeURIComponent("Hello! I'm interested in business setup services in the UAE. Can you help me?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5c] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Free Consultation
              </a>
            </div>

            {/* Trust stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/70 backdrop-blur-md rounded-xl px-3 py-4 sm:px-4 sm:py-5 text-center border border-slate-200/60 shadow-sm hover:shadow-[0_8px_30px_rgb(38,100,100,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background Accent */}
                  <div className="absolute inset-0 bg-[#266464] transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out z-0" />

                  <div className="relative z-10">
                    <div className="text-2xl font-bold mb-1 font-serif text-[#266464] group-hover:text-white transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 group-hover:text-white/90 text-[10px] font-bold tracking-wide uppercase transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div
            className="w-full lg:w-[430px] flex-shrink-0 animate-fadeInRight hidden lg:block"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Solid top accent line */}
            <div className="h-1.5 w-full mb-0 rounded-t-2xl bg-[#266464]" />
            <div
              className="rounded-b-2xl rounded-tr-2xl p-6 shadow-2xl glass-form"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-teal-50"
                    style={{ border: "1px solid rgba(38, 100, 100, 0.3)" }}
                  >
                    <CheckCircle size={28} className="text-[#266464]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3650] mb-2 font-serif">Thank You!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We&apos;ve received your enquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Free business setup consultation" className="space-y-3.5">
                  {/* Form header */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1 h-6 rounded-full bg-[#266464]" />
                      <h2 className="text-lg font-bold text-[#2c3650] font-serif">Get a Free Consultation</h2>
                    </div>
                    <p className="text-slate-500 text-xs pl-3">Expert guidance · No commitment required</p>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Input styles shared */}
                  {/* Full Name */}
                  <div>
                    <label htmlFor={`${id}-h-name`} className="block text-[11px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">
                      Full Name <span className="text-[#266464]">*</span>
                    </label>
                    <input
                      id={`${id}-h-name`}
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`w-full px-4 py-2.5 rounded-xl text-[#2c3650] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 bg-white transition-all ${errors.fullName ? "ring-2 ring-red-400/60 border-red-400/50" : "focus:ring-[#266464]/30 border-slate-200"}`}
                      style={{ border: "1px solid" }}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle size={10} />{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor={`${id}-h-phone`} className="block text-[11px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">
                      Phone Number <span className="text-[#266464]">*</span>
                    </label>
                    <input
                        id={`${id}-h-phone`}
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-2.5 rounded-xl text-[#2c3650] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 bg-white transition-all ${errors.phone ? "ring-2 ring-red-400/60 border-red-400/50" : "focus:ring-[#266464]/30 border-slate-200"}`}
                        style={{ border: "1px solid" }}
                        aria-invalid={!!errors.phone}
                      />
                    {errors.phone && <p className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle size={10} />{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={`${id}-h-email`} className="block text-[11px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">
                      Email <span className="text-slate-400 font-medium normal-case">(Optional)</span>
                    </label>
                    <input
                      id={`${id}-h-email`}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-[#2c3650] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 bg-white transition-all ${errors.email ? "ring-2 ring-red-400/60 border-red-400/50" : "focus:ring-[#266464]/30 border-slate-200"}`}
                      style={{ border: "1px solid" }}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle size={10} />{errors.email}</p>}
                  </div>

                  {/* Business Setup In */}
                  <div>
                    <label htmlFor={`${id}-h-setup`} className="block text-[11px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">
                      Business Setup In <span className="text-[#266464]">*</span>
                    </label>
                    <select
                      id={`${id}-h-setup`}
                      name="businessSetupIn"
                      value={form.businessSetupIn}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl text-[#2c3650] text-sm focus:outline-none focus:ring-2 bg-white appearance-none transition-all ${errors.businessSetupIn ? "ring-2 ring-red-400/60 border-red-400/50" : "focus:ring-[#266464]/30 border-slate-200"}`}
                      style={{ border: "1px solid" }}
                      aria-invalid={!!errors.businessSetupIn}
                    >
                      <option value="" disabled>Select setup type</option>
                      {setupOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.businessSetupIn && <p className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert"><AlertCircle size={10} />{errors.businessSetupIn}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={`${id}-h-message`} className="block text-[11px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">
                      Message <span className="text-slate-400 font-medium normal-case">(Optional)</span>
                    </label>
                    <textarea
                      id={`${id}-h-message`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Tell us about your business idea…"
                      className="w-full px-4 py-2.5 rounded-xl text-[#2c3650] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#266464]/30 border border-slate-200 bg-white resize-none transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-teal w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-[#266464]/20"
                    aria-busy={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <>Start Your Business Setup <ArrowRight size={15} /></>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-red-500 text-xs flex items-center justify-center gap-1" role="alert">
                      <AlertCircle size={11} /> Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-medium">
                      <Shield size={10} className="text-[#266464]" />
                      Secure & Confidential
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-medium">
                      <Clock size={10} className="text-[#266464]" />
                      Response within 24h
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-medium">
                      <Star size={10} className="text-[#266464]" />
                      Free consultation
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
