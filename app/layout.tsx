import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horizonlineuae.com"),
  title: {
    template: "%s | Horizon Line",
    default: "Business Setup in UAE | Mainland, Free Zone & Offshore | Horizon Line",
  },
  description:
    "Start your business in the UAE with Horizon Line. Get expert guidance for Mainland, Free Zone and Offshore company setup across all 7 Emirates.",
  keywords: [
    "business setup UAE",
    "company formation UAE",
    "UAE business setup",
    "mainland business setup UAE",
    "free zone business setup UAE",
    "offshore company formation UAE",
    "business setup consultant UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.horizonlineuae.com",
    siteName: "Horizon Line",
    title: "Start Your Business in the UAE With Horizon Line",
    description:
      "Explore Mainland, Free Zone and Offshore business setup options across all 7 Emirates with professional guidance from Horizon Line.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Horizon Line — Business Setup in UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Business in the UAE With Horizon Line",
    description:
      "Explore Mainland, Free Zone and Offshore business setup options across all 7 Emirates with professional guidance from Horizon Line.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.horizonlineuae.com",
  },
  icons: {
    icon: "/src/img/favicon.png",
    shortcut: "/src/img/favicon.png",
    apple: "/src/img/favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Horizon Line",
  url: "https://www.horizonlineuae.com",
  logo: "https://www.horizonlineuae.com/logo.png",
  description:
    "Horizon Line provides professional business setup and company formation guidance across all 7 Emirates of the UAE.",
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  knowsAbout: [
    "Business Setup UAE",
    "Company Formation UAE",
    "Mainland Business Setup",
    "Free Zone Business Setup",
    "Offshore Company Formation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Horizon Line",
  url: "https://www.horizonlineuae.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.horizonlineuae.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#0A1628]">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  );
}
