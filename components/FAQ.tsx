"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-5 tracking-tight">
            Frequently Asked Questions About Business Setup in UAE
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Find answers to common questions about UAE company formation, setup types and the registration process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                openIndex === idx
                  ? "border-[#266464]/30 shadow-sm"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              role="listitem"
            >
              <button
                id={`faq-btn-${idx}`}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-semibold text-[#0A1628] text-sm sm:text-base leading-snug pr-2">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#266464] transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
