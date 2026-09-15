"use client";

import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";

const topRowTestimonials = [
  { name: "James Carter", initials: "JC", text: "Horizon Line made our Dubai Mainland LLC setup completely stress-free. Their team is incredibly knowledgeable about the latest UAE compliance laws.", color: "bg-blue-100 text-blue-700" },
  { name: "Fatima Al-Sayed", initials: "FA", text: "Outstanding advisory services! They helped us choose the perfect Free Zone for our trading company. Truly the best business setup firm in the UAE.", color: "bg-green-100 text-green-700" },
  { name: "Michael Chang", initials: "MC", text: "Super fast and reliable DMCC registration process. They handled all the paperwork and secured our trade license without any delays.", color: "bg-orange-100 text-orange-700" },
  { name: "Sarah Jenkins", initials: "SJ", text: "My dedicated expert was patient and explained the entire Golden Visa process clearly. Highly recommend their services for expat investors.", color: "bg-purple-100 text-purple-700" },
  { name: "Ahmed Mansour", initials: "AM", text: "A highly professional team. They managed our corporate bank account opening and PRO services seamlessly. A huge burden off my shoulders.", color: "bg-teal-100 text-teal-700" },
  { name: "Elena Rostova", initials: "ER", text: "I was struggling to understand Offshore jurisdictions, but Horizon Line guided me perfectly. Their experts know exactly how to structure holding companies.", color: "bg-rose-100 text-rose-700" },
  { name: "Rajat Malhotra", initials: "RM", text: "Exceptional service for Abu Dhabi company registration! I had my business incorporated in record time with absolute zero hassle.", color: "bg-indigo-100 text-indigo-700" },
  { name: "David O'Connor", initials: "DO", text: "Very smooth experience setting up our tech startup in Dubai Internet City. The team calculated all costs perfectly with no hidden fees.", color: "bg-cyan-100 text-cyan-700" },
  { name: "Kunal Jain", initials: "KJ", text: "Horizon Line is our trusted partner for annual license renewals and VAT registration. We never have to worry about missing deadlines.", color: "bg-yellow-100 text-yellow-700" },
  { name: "Sophie Laurent", initials: "SL", text: "From initial consultation to final visa stamping, their advisory has been crucial for our agency's expansion into the Middle East.", color: "bg-pink-100 text-pink-700" },
];

const bottomRowTestimonials = [
  { name: "Ali Rahman", initials: "AR", text: "The team provided excellent guidance on local sponsor regulations for Mainland setup. Very proficient, responsive, and pleasant to work with.", color: "bg-emerald-100 text-emerald-700" },
  { name: "Priya Desai", initials: "PD", text: "Got my IFZA trade license in under 3 days! They securely collected all my documents and handled everything effortlessly. Super easy!", color: "bg-amber-100 text-amber-700" },
  { name: "Thomas Wright", initials: "TW", text: "Great service and even better human support. They ensured thorough checks before finalizing our commercial office lease agreements.", color: "bg-fuchsia-100 text-fuchsia-700" },
  { name: "Hassan Tariq", initials: "HT", text: "I've been using them for years and it just keeps getting better. Their proactive business advisory is an absolute game-changer for my company.", color: "bg-sky-100 text-sky-700" },
  { name: "Maria Garcia", initials: "MG", text: "Our consultant demonstrated exceptional professionalism. He patiently clarified every query regarding our e-commerce setup in Sharjah (Shams).", color: "bg-lime-100 text-lime-700" },
  { name: "Liam Smith", initials: "LS", text: "Such a relief that they handled the entire family visa sponsorship process for me. 10/10 for doing things on time and doing them right.", color: "bg-violet-100 text-violet-700" },
  { name: "Nidhi Sharma", initials: "NS", text: "They walked me through the entire RAKEZ manufacturing setup process, verified every document, and handled government portal issues without stress.", color: "bg-rose-100 text-rose-700" },
  { name: "Omar Farooq", initials: "OF", text: "We outsourced our entire PRO department to them. The accuracy and speed of their visa and immigration services is simply outstanding.", color: "bg-blue-100 text-blue-700" },
  { name: "Jessica Wong", initials: "JW", text: "Highly transparent pricing with no hidden fees. The consultation call cleared all my doubts about 100% foreign ownership laws in the UAE.", color: "bg-orange-100 text-orange-700" },
  { name: "Sanjay Nanda", initials: "SN", text: "Best business setup firm in Dubai. Their strategic insights have helped us optimize our corporate structure significantly.", color: "bg-teal-100 text-teal-700" },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="w-[350px] shrink-0 bg-white rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(44,54,80,0.03)] flex flex-col h-full mx-3 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(44,54,80,0.08)]">
    <div className="flex justify-between items-start mb-5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="fill-[#FFB800] text-[#FFB800]" />
        ))}
      </div>
      <div className="flex items-center gap-1.5 opacity-90">
        <Image src="/src/img/Google__G__logo.svg.webp" width={20} height={20} alt="Google Logo" className="object-contain" />
        <span className="text-slate-500 text-sm font-semibold tracking-tight">Google</span>
      </div>
    </div>

    <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-1">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
          {testimonial.initials}
        </div>
        <div>
          <h4 className="text-[#2c3650] font-bold text-sm tracking-tight">{testimonial.name}</h4>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[#F0FDF4] border border-[#DCFCE7] text-[#166534] px-2.5 py-1 rounded-md">
        <ShieldCheck size={13} className="text-[#16A34A]" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Verified User</span>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden bg-slate-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="section-label justify-center mb-5">
          Client Reviews
        </div>
        <h2
          id="testimonials-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3650] mb-5 tracking-tight"
        >
          Loved by over <span className="text-[#266464]">500+ businesses</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Trusted for Busniess Setup & Corporate Services across the UAE
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden pause-marquee group">

        {/* Left Fade Gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Top Row (Slides Left) */}
        <div className="flex w-max mb-6 animate-marquee-left">
          {[...topRowTestimonials, ...topRowTestimonials].map((t, i) => (
            <TestimonialCard key={`top-${i}`} testimonial={t} />
          ))}
        </div>

        {/* Bottom Row (Slides Right) */}
        <div className="flex w-max animate-marquee-right">
          {[...bottomRowTestimonials, ...bottomRowTestimonials].map((t, i) => (
            <TestimonialCard key={`bot-${i}`} testimonial={t} />
          ))}
        </div>

        {/* Right Fade Gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      </div>
    </section>
  );
}
