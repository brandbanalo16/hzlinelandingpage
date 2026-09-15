"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Business",
    description: "We learn about your business activity, ownership structure, objectives and specific requirements to identify the most suitable approach.",
    color: "#266464",
    rgb: "38,100,100",
  },
  {
    number: "02",
    title: "Choose Your Setup Type",
    description: "Compare Mainland, Free Zone and Offshore options and understand how each structure aligns with your business goals.",
    color: "#2c3650",
    rgb: "44,54,80",
  },
  {
    number: "03",
    title: "Choose Your Emirate",
    description: "Identify the most suitable Emirate and jurisdiction for your business, taking into account your activity, market and operational needs.",
    color: "#266464",
    rgb: "38,100,100",
  },
  {
    number: "04",
    title: "Complete the Registration",
    description: "Prepare the required documentation and proceed with the applicable registration, licensing and approval processes.",
    color: "#2c3650",
    rgb: "44,54,80",
  },
  {
    number: "05",
    title: "Start Your Business",
    description: "Move forward after the required approvals and setup formalities are completed, with ongoing support where needed.",
    color: "#266464",
    rgb: "38,100,100",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="process-heading"
      style={{ background: "#f8f9fc" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(38,100,100,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 mb-5 text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#266464" }}
          >
            <span className="w-8 h-px" style={{ background: "linear-gradient(to right, transparent, #266464)" }} />
            How It Works
            <span className="w-8 h-px" style={{ background: "linear-gradient(to left, transparent, #266464)" }} />
          </div>
          <h2
            id="process-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-5 tracking-tight"
          >
            Set Up Your UAE Business
            <br />
            <span className="text-[#266464]">
              in 5 Simple Steps
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, guided process from initial consultation through to business launch.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[44px] left-[calc(10%+28px)] right-[calc(10%+28px)] h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, #266464, #2c3650, #266464)" }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Glowing orb */}
                <div
                  className="relative z-10 w-[88px] h-[88px] rounded-full flex items-center justify-center mb-6 transition-all duration-400"
                  style={{
                    background: `linear-gradient(135deg, rgba(${step.rgb},0.15), rgba(${step.rgb},0.05))`,
                    border: `2px solid rgba(${step.rgb},0.40)`,
                    boxShadow: `0 0 0 6px rgba(${step.rgb},0.06)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 8px rgba(${step.rgb},0.12), 0 0 30px rgba(${step.rgb},0.25)`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = step.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 6px rgba(${step.rgb},0.06)`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${step.rgb},0.40)`;
                  }}
                >
                  {/* Outer ring */}
                  <div
                    className="absolute inset-2 rounded-full flex items-center justify-center"
                    style={{ background: `rgba(${step.rgb},0.08)` }}
                  >
                    <span
                      className="font-serif font-black text-2xl"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-[#0A1628] text-base mb-2 leading-tight tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

                {/* Mobile connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="lg:hidden w-px h-8 my-2"
                    style={{ background: `linear-gradient(to bottom, ${step.color}, transparent)` }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="#lead-form"
            className="btn-teal inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base"
            style={{ boxShadow: "0 8px 32px rgba(38,100,100,0.30)" }}
          >
            Start Your Business Setup
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
