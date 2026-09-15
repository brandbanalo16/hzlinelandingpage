"use client";

import Image from "next/image";
import { Play, Phone, MessageSquare } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-12 lg:py-24" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1B365D] mb-4 leading-snug tracking-tight">
              Horizon Line Your Trusted Partner for Business Setup in the UAE
            </h2>
            <div className="text-slate-600 space-y-3 text-sm leading-relaxed mb-6">
              <p>
                Horizon Line is a trusted business setup partner helping entrepreneurs, investors, startups, and established businesses establish and grow their presence across the UAE’s seven Emirates. With expertise in Mainland, Free Zone, and Offshore company formation, we provide practical, personalised guidance to help you choose the right business structure, jurisdiction, licence, and setup strategy for your goals.
              </p>
              <p>
                From company registration and business licensing to visa assistance, PRO services, office solutions, and ongoing corporate support, our team manages the essential steps of your business setup journey under one roof. We simplify complex procedures, explain your options clearly, and ensure every stage is handled efficiently and professionally.
              </p>
              <p>
                Whether you are launching a new venture in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain, Horizon Line is committed to making your UAE business setup experience simple, transparent, and hassle-free—so you can focus on building and growing your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+971541787863"
                className="inline-flex items-center justify-center bg-[#1B365D] hover:bg-[#11233e] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm gap-2"
              >
                <Phone size={16} />
                Call Us Now
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-popup-form"));
                }}
                className="inline-flex items-center justify-center bg-[#266464] hover:bg-[#1c4a4a] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm gap-2"
              >
                <MessageSquare size={16} />
                Free Consultation
              </a>
            </div>
          </div>

          {/* Right Image - hidden on mobile */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-xl w-full bg-slate-100 cursor-pointer group hidden lg:block" 
            style={{ aspectRatio: "1" }}
            onClick={() => window.dispatchEvent(new Event("open-popup-form"))}
          >
            <Image
              src="/src/img/about-us.webp"
              alt="About Horizon Line"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
