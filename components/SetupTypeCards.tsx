"use client";

import Image from "next/image";
import Link from "next/link";
import { setupTypes } from "@/lib/data";

const localImages = [
  "/src/img/mainland-card.png",
  "/src/img/free-zone-card.png",
  "/src/img/offshor-card.png",
];

const shortDesc = [
  "Perfect for businesses wanting to trade locally and internationally with 100% ownership options.",
  "Ideal for 100% foreign ownership, tax benefits, and full repatriation of profits.",
  "Designed for asset protection and wealth management with total confidentiality.",
];

const cardTitle = [
  "Mainland",
  "Free Zone",
  "Offshore",
];

export default function SetupTypeCards() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-28 relative overflow-hidden"
      aria-labelledby="setup-heading"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="section-label justify-center mb-5">
            Choose Your Business Setup
          </div>
          <h2 id="setup-heading" className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2c3650] mb-4 tracking-tight">
            Find the Right Setup
            <br />
            <span className="text-[#266464]">
              for Your Goals
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Every business has different requirements. Choose the jurisdiction that perfectly aligns with your comprehensive setup goals.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {setupTypes.map((setup, idx) => {
            return (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-popup-form"));
                }}
                key={setup.id}
                className="group relative h-[520px] lg:h-[600px] rounded-[2rem] overflow-hidden block transition-transform duration-300 hover:-translate-y-1 bg-[#f4f6f9] text-left"
              >
                {/* ── Hover Swipe Background ── */}
                <div className="absolute inset-0 bg-[#266464] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                {/* ── Content ── */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#266464] group-hover:stroke-white transition-colors duration-300">
                      <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0711 4.92893L16.2426 7.75736M7.75736 16.2426L4.92893 19.0711M19.0711 19.0711L16.2426 16.2426M7.75736 7.75736L4.92893 4.92893" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#266464] group-hover:text-white transition-colors duration-300 font-bold text-sm tracking-wide uppercase">
                      {cardTitle[idx]} SETUP
                    </span>
                  </div>

                  {/* Title (Replacing Price) */}
                  <h3 className="font-bold text-[#2c3650] group-hover:text-white transition-colors duration-300 leading-none mb-4" style={{ fontSize: "3rem" }}>
                    {cardTitle[idx]}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#266464] group-hover:text-white/90 transition-colors duration-300 text-base font-medium max-w-[220px] leading-snug">
                    {shortDesc[idx]}
                  </p>

                  {/* Bottom Left Label with Pointer Arrow */}
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <span className="text-[#000000] group-hover:text-white transition-colors duration-300 font-bold text-sm tracking-wide uppercase">
                      EXPLORE SETUP
                    </span>
                    {/* Animated Pointer Arrow */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  </div>
                </div>

                {/* ── Image Bottom Right ── */}
                <div className="absolute bottom-0 right-0 w-[95%] h-[75%] pointer-events-none transition-transform duration-500 group-hover:scale-105 origin-bottom-right z-10">
                  <Image
                    src={localImages[idx]}
                    alt={`${cardTitle[idx]} setup illustration`}
                    fill
                    className="object-contain object-bottom object-right"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
