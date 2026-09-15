import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Horizon Line UAE",
  description: "Thank you for contacting Horizon Line UAE.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center animate-fadeInUp">
        <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8" style={{ border: "1px solid rgba(38, 100, 100, 0.2)" }}>
          <CheckCircle2 size={40} className="text-[#266464]" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1628] mb-4">
          Thank You!
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Your enquiry has been successfully submitted. Our team will review your request and get in touch with you shortly.
        </p>

        <Link
          href="https://www.horizonlineuae.com/"
          className="inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#152744] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-1 w-full sm:w-auto"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
