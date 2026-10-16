"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  const openPopup = () => window.dispatchEvent(new Event("open-popup-form"));

  return (
    <section className="py-20 bg-[#f4f6f9] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#2c3650] rounded-[2rem] shadow-2xl">

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* Teal accent glow top-left */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(38,100,100,0.35) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center">

            {/* LEFT: Content */}
            <div className="flex-1 px-8 py-16 md:px-16 text-left">
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(38,100,100,0.25)",
                  border: "1px solid rgba(38,100,100,0.50)",
                  color: "#5ab5b5",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#266464] animate-pulse" aria-hidden="true" />
                Start Your Journey
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Let&apos;s Build Your Success Story in the UAE
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
                Take the first step towards your business journey in the UAE. Our experts are ready to guide you every step of the way with personalized advice.
              </p>

              <a
                href={`https://wa.me/971566866849?text=${encodeURIComponent("Hello! I'm interested in business setup services in the UAE. Can you help me?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5c] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us Now
              </a>

              <button
                onClick={openPopup}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#2c3650] hover:bg-[#266464] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(38,100,100,0.4)] hover:-translate-y-1 text-base"
              >
                Cost Calculator
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>

            {/* RIGHT: Image */}
            <div className="hidden lg:flex flex-shrink-0 w-[420px] xl:w-[500px] items-end self-end pr-0">
              <div className="relative w-full">
                <Image
                  src="/src/img/cta.png"
                  alt="Business Setup in UAE — Horizon Line"
                  width={500}
                  height={480}
                  className="object-contain object-bottom w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

