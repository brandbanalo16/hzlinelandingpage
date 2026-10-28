"use client";

import Image from "next/image";
import { Play, MessageSquare } from "lucide-react";

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
                From company registration and business licensing to corporate advisory, PRO services, office solutions, and ongoing business support, our team manages the essential steps of your business setup journey under one roof. We simplify complex procedures, explain your options clearly, and ensure every stage is handled efficiently and professionally.
              </p>
              <p>
                Whether you are launching a new venture in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, Horizon Line is committed to making your UAE business setup experience simple, transparent, and hassle-free—so you can focus on building and growing your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* <a
                href={`https://wa.me/971566866849?text=${encodeURIComponent("Hello! I'm interested in business setup services in the UAE. Can you help me?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bb5c] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us Now
              </a> */}
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
