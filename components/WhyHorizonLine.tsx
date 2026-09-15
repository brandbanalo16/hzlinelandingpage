"use client";

import { Map, Layers, Target, Eye, FileText, LifeBuoy } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Map,
    title: "UAE-Wide Coverage",
    description: "Business setup guidance across all 7 Emirates of the UAE, from Dubai and Abu Dhabi to Fujairah and beyond.",
    color: "#266464",
  },
  {
    number: "02",
    icon: Layers,
    title: "Setup Type Guidance",
    description: "Understand Mainland, Free Zone and Offshore options with clear, practical explanations of each structure.",
    color: "#2c3650",
  },
  {
    number: "03",
    icon: Target,
    title: "Business-Focused Advice",
    description: "Recommendations based on your specific business activity, ownership requirements and long-term objectives.",
    color: "#266464",
  },
  {
    number: "04",
    icon: Eye,
    title: "Transparent Process",
    description: "Clear, step-by-step explanation of the business setup journey and all applicable requirements.",
    color: "#2c3650",
  },
  {
    number: "05",
    icon: FileText,
    title: "Documentation Support",
    description: "Practical guidance on preparing, organising and submitting the documents required for your chosen setup.",
    color: "#266464",
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "End-to-End Assistance",
    description: "Comprehensive support throughout the entire business setup process, from initial consultation to completion.",
    color: "#2c3650",
  },
];

export default function WhyHorizonLine() {
  return (
    <section
      id="why-horizon-line"
      className="py-12 sm:py-16 lg:py-28 relative overflow-hidden"
      aria-labelledby="why-heading"
      style={{ background: "#FFFFFF" }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(38,100,100,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(44,54,80,0.03) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="section-label justify-center mb-5">
            Why Horizon Line
          </div>
          <h2
            id="why-heading"
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4 tracking-tight"
          >
            Why Choose
            <span className="text-[#266464]">
              {" "}Horizon Line
            </span>
            ?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine professional expertise with a clear, transparent approach to guide you through every aspect of establishing your business in the UAE.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const isTeal = benefit.color === "#266464";
            const rgb = isTeal ? "38,100,100" : "44,54,80";
            return (
              <div
                key={benefit.title}
                className="group relative rounded-2xl p-7 transition-all duration-400 cursor-default overflow-hidden bg-white"
                style={{
                  border: "1px solid rgba(10,22,40,0.05)",
                  boxShadow: "0 4px 20px rgba(10,22,40,0.02)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${rgb},0.30)`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 30px rgba(${rgb},0.08)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(10,22,40,0.05)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(10,22,40,0.02)";
                }}
              >
                {/* Number watermark */}
                <div
                  className="absolute top-4 right-5 font-serif font-black text-5xl pointer-events-none select-none transition-colors duration-400"
                  style={{ color: "rgba(10,22,40,0.03)" }}
                  aria-hidden="true"
                >
                  {benefit.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-400"
                  style={{
                    background: `rgba(${rgb}, 0.08)`,
                    border: `1px solid rgba(${rgb}, 0.15)`,
                  }}
                >
                  <Icon size={20} style={{ color: benefit.color }} aria-hidden="true" />
                </div>

                <h3 className="text-[#0A1628] font-bold text-lg mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{benefit.description}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${benefit.color}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
