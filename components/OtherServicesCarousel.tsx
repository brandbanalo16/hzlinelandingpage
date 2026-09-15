"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileCheck, Award, Shield, CreditCard, BookOpen, Receipt, Calculator, ClipboardList } from "lucide-react";
import { otherServices } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Award,
  Shield,
  CreditCard,
  BookOpen,
  Receipt,
  Calculator,
  ClipboardList,
};

export default function OtherServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, otherServices.length - visibleCount);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Touch swipe
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <section id="other-services" className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="services-carousel-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[#266464] text-sm font-bold tracking-widest uppercase mb-3">
              More Business Support
            </p>
            <h2 id="services-carousel-heading" className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
              More Services to Support Your UAE Business
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl leading-relaxed">
              Beyond company formation, Horizon Line can help businesses with additional services required during their UAE business journey.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0" role="group" aria-label="Carousel controls">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-[#266464]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#266464]/40"
              aria-label="Previous services"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === maxIndex}
              className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-[#266464]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#266464]/40"
              aria-label="Next services"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          className="overflow-hidden"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Other services carousel"
          aria-live="polite"
        >
          <div
            className="flex transition-transform duration-400 ease-in-out gap-5"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount}) - ${currentIndex} * 20px / ${visibleCount}))`,
            }}
          >
            {otherServices.map((service) => {
              const Icon = iconMap[service.icon] || FileCheck;
              return (
                <article
                  key={service.id}
                  className="flex-shrink-0 bg-white rounded-2xl border border-slate-200 p-7 hover:border-[#266464]/30 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 20 / visibleCount}px)` }}
                >
                  <div className="w-11 h-11 bg-[#266464]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#266464]/15 transition-colors flex-shrink-0">
                    <Icon size={20} className="text-[#266464]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-lg mb-2 leading-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new Event("open-popup-form"));
                    }}
                    className="inline-flex items-center gap-2 text-[#266464] text-sm font-semibold hover:gap-3 transition-all duration-200"
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore Service
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8" role="tablist" aria-label="Carousel position">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#266464]/40 ${
                idx === currentIndex ? "w-6 bg-[#266464]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to position ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
