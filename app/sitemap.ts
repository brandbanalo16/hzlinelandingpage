import type { MetadataRoute } from "next";

const baseUrl = "https://www.horizonlineuae.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    // Setup type pages
    { url: "/services/mainland-company-formation-uae/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/free-zone-company-formation-uae/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/offshore-company-formation-uae/", priority: 0.9, changeFrequency: "monthly" as const },
    // Emirate pages
    { url: "/business-setup-dubai/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/business-setup-abu-dhabi/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/business-setup-sharjah/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/business-setup-ajman/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/business-setup-umm-al-quwain/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/business-setup-ras-al-khaimah/", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/business-setup-fujairah/", priority: 0.8, changeFrequency: "monthly" as const },
    // Service pages
    { url: "/business-visa-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/golden-visa-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/trademark-registration-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/corporate-bank-account-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/accounting-bookkeeping-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/vat-services-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/corporate-tax-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/pro-services-uae/", priority: 0.75, changeFrequency: "monthly" as const },
    // Company pages
    { url: "/about/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/contact/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/faq/", priority: 0.65, changeFrequency: "monthly" as const },
    { url: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms-and-conditions/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
