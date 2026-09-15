"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { emirates } from "@/lib/data";

export default function EmirateCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = itemWidth + 24;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = itemWidth + 24;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const itemWidth = container.firstElementChild?.clientWidth || 0;
        const gap = 24; // gap-6 is 24px
        const scrollAmount = itemWidth + gap;

        // If at the end, scroll back to start, else scroll next
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="emirates-heading"
      style={{ background: "#f4f6f9" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-5">
            UAE-Wide Business Setup
          </div>
          <h2
            id="emirates-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3650] mb-5 tracking-tight"
          >
            Business Setup Across
            <br />
            <span className="text-[#266464]">
              All 7 Emirates
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Horizon Line helps entrepreneurs and companies explore business setup opportunities across every Emirate of the UAE.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {emirates.map((emirate, idx) => {
            const num = (idx + 1).toString().padStart(2, "0");
            return (
              <article 
                key={emirate.id} 
                className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)]"
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event("open-popup-form"));
                  }}
                  className="group relative flex flex-col h-[400px] bg-white transition-all duration-500 hover:-translate-y-2 overflow-hidden text-left"
                  style={{ border: "1px solid rgba(10,22,40,0.06)", boxShadow: "0 4px 20px rgba(10,22,40,0.03)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 20px 40px rgba(10,22,40,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(38,100,100,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(10,22,40,0.03)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(10,22,40,0.06)";
                  }}
                  aria-label={emirate.title}
                >
                  {/* Subtle Expanding Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#266464] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20" aria-hidden="true" />
                  
                  {/* Top-left number badge */}
                  <div className="absolute top-0 left-0 bg-[#266464] text-white font-bold text-sm px-3.5 py-1.5 flex items-center justify-center transition-transform duration-500 origin-top-left group-hover:scale-110 z-10">
                    {num}
                  </div>

                  {/* Top-right icon */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[#2c3650]/40 flex items-center justify-center text-[#2c3650] transition-all duration-500 group-hover:bg-[#266464] group-hover:border-[#266464] group-hover:text-white z-10 group-hover:rotate-12">
                    <Building2 size={18} strokeWidth={2} />
                  </div>

                  <div className="p-8 pt-20 flex flex-col h-full relative z-10">
                    <h3 className="text-[#2c3650] font-bold text-2xl mb-4 leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                      {emirate.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 transition-transform duration-500 group-hover:translate-x-1">
                      {emirate.description}
                    </p>

                    <div className="mt-auto transition-transform duration-500 group-hover:translate-x-1">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2c3650]">
                        Explore Setup
                        <span className="bg-[#e91e63] text-white rounded-full p-[3px] flex items-center justify-center transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 shadow-sm">
                          <ArrowRight size={11} strokeWidth={4} aria-hidden="true" />
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-[#2c3650]/20 flex items-center justify-center text-[#2c3650] hover:bg-[#2c3650] hover:text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-[#2c3650]/20 flex items-center justify-center text-[#2c3650] hover:bg-[#2c3650] hover:text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
