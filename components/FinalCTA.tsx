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

              <button
                onClick={openPopup}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#2c3650] hover:bg-[#266464] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(38,100,100,0.4)] hover:-translate-y-1 text-base"
              >
                Call Us Now
                <ArrowRight size={18} aria-hidden="true" />
              </button>

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

