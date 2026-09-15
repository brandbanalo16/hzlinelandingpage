import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SetupTypeCards from "@/components/SetupTypeCards";
import EmirateCards from "@/components/EmirateCards";
import AboutUs from "@/components/AboutUs";
import WhyHorizonLine from "@/components/WhyHorizonLine";
import ProcessTimeline from "@/components/ProcessTimeline";
import OtherServicesCarousel from "@/components/OtherServicesCarousel";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Setup in UAE | Mainland, Free Zone & Offshore | Horizon Line",
  description:
    "Start your business in the UAE with Horizon Line. Get expert guidance for Mainland, Free Zone and Offshore company setup across all 7 Emirates.",
  alternates: {
    canonical: "https://www.horizonlineuae.com/",
  },
  openGraph: {
    title: "Start Your Business in the UAE With Horizon Line",
    description:
      "Explore Mainland, Free Zone and Offshore business setup options across all 7 Emirates with professional guidance from Horizon Line.",
    url: "https://www.horizonlineuae.com/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustBar />
      <AboutUs />
      <SetupTypeCards />
      <EmirateCards />
      <WhyHorizonLine />
      <ProcessTimeline />
      <OtherServicesCarousel />
      <LeadForm />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
