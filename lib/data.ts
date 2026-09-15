import type { SetupType, Emirate, OtherService, FAQ, NavItem, ComparisonRow } from "@/types";

export const setupTypes: SetupType[] = [
  {
    id: "mainland",
    title: "Mainland Business Setup in UAE",
    description:
      "A Mainland company is licensed by the Department of Economic Development (DED) in the respective Emirate. It is the most flexible setup type, allowing you to trade freely anywhere within the local UAE market and internationally, with no limitations on business activities or office locations.",
    href: "/services/mainland-company-formation-uae/",
    icon: "Building2",
    features: [
      "No geographic restrictions on trade within UAE",
      "Ability to undertake government contracts",
      "Flexibility to open multiple branches",
      "100% foreign ownership available for many activities",
      "No currency restrictions or capital repatriation limits",
      "Flexible office requirements (physical or virtual)",
    ],
  },
  {
    id: "freezone",
    title: "Free Zone Business Setup in UAE",
    description:
      "Free Zones are designated economic areas offering 100% foreign ownership, tax exemptions, and specialized infrastructure. They are ideal for international trade, service-based businesses, and startups looking for a cost-effective setup with world-class facilities.",
    href: "/services/free-zone-company-formation-uae/",
    icon: "Landmark",
    features: [
      "100% foreign ownership with full capital repatriation",
      "0% corporate tax for qualifying free zone persons",
      "Exemption from import and export duties",
      "Seamless and expedited incorporation process",
      "State-of-the-art infrastructure and networking",
      "Variety of affordable licensing packages",
    ],
  },
  {
    id: "offshore",
    title: "Offshore Company Setup in UAE",
    description:
      "An Offshore company is a legal business entity set up with the intention of operating outside its registered jurisdiction and the UAE. It serves as an excellent vehicle for wealth management, asset protection, property holding, and international trade.",
    href: "/services/offshore-company-formation-uae/",
    icon: "Globe",
    features: [
      "Complete privacy and confidentiality",
      "No requirement for a physical office space in UAE",
      "Hold multi-currency bank accounts globally",
      "Act as a holding company for real estate or shares",
      "No annual audit reporting required in most zones",
      "Fast registration process with minimal documentation",
    ],
  },
];

export const emirates: Emirate[] = [
  {
    id: "dubai",
    name: "Dubai",
    title: "Business Setup in Dubai",
    description:
      "Explore business formation and licensing options for establishing your company in Dubai, the UAE's leading commercial hub.",
    href: "/business-setup-dubai/",
    keyword: "Business Setup in Dubai",
    highlight: "UAE's Global Business Hub",
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    title: "Business Setup in Abu Dhabi",
    description:
      "Explore company formation and business setup options for establishing your business in Abu Dhabi, the UAE capital and economic centre.",
    href: "/business-setup-abu-dhabi/",
    keyword: "Business Setup in Abu Dhabi",
    highlight: "UAE Capital & Economic Centre",
  },
  {
    id: "sharjah",
    name: "Sharjah",
    title: "Business Setup in Sharjah",
    description:
      "Discover business setup and company formation options available for businesses in Sharjah, the UAE's cultural and industrial Emirate.",
    href: "/business-setup-sharjah/",
    keyword: "Business Setup in Sharjah",
    highlight: "Industrial & Cultural Emirate",
  },
  {
    id: "ajman",
    name: "Ajman",
    title: "Business Setup in Ajman",
    description:
      "Explore practical company formation and business setup options for entrepreneurs and companies in Ajman.",
    href: "/business-setup-ajman/",
    keyword: "Business Setup in Ajman",
    highlight: "Cost-Effective Business Environment",
  },
  {
    id: "umm-al-quwain",
    name: "Umm Al Quwain",
    title: "Business Setup in Umm Al Quwain",
    description:
      "Explore business formation and licensing options for establishing your company in Umm Al Quwain.",
    href: "/business-setup-umm-al-quwain/",
    keyword: "Business Setup in Umm Al Quwain",
    highlight: "Emerging Business Destination",
  },
  {
    id: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    title: "Business Setup in Ras Al Khaimah",
    description:
      "Explore company formation and business setup opportunities in Ras Al Khaimah, one of the UAE's fastest-growing Emirates.",
    href: "/business-setup-ras-al-khaimah/",
    keyword: "Business Setup in Ras Al Khaimah",
    highlight: "Fastest-Growing Emirate",
  },
  {
    id: "fujairah",
    name: "Fujairah",
    title: "Business Setup in Fujairah",
    description:
      "Explore company formation and business setup options for entrepreneurs and businesses in Fujairah, the UAE's east coast Emirate.",
    href: "/business-setup-fujairah/",
    keyword: "Business Setup in Fujairah",
    highlight: "East Coast Trading Gateway",
  },
];

export const otherServices: OtherService[] = [
  {
    id: "business-visa",
    title: "Business Visa Services",
    description:
      "Professional assistance with eligible UAE business and residency visa requirements.",
    href: "/business-visa-uae/",
    icon: "FileCheck",
  },
  {
    id: "golden-visa",
    title: "Golden Visa",
    description:
      "Explore eligibility and application support for qualifying investors, entrepreneurs and professionals.",
    href: "/golden-visa-uae/",
    icon: "Award",
  },
  {
    id: "trademark",
    title: "Trademark Registration",
    description:
      "Protect your brand with professional trademark registration and application assistance.",
    href: "/trademark-registration-uae/",
    icon: "Shield",
  },
  {
    id: "bank-account",
    title: "Corporate Bank Account Assistance",
    description:
      "Get guidance on corporate banking documentation and application requirements.",
    href: "/corporate-bank-account-uae/",
    icon: "CreditCard",
  },
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description:
      "Keep your business accounts organized with professional accounting and bookkeeping support.",
    href: "/accounting-bookkeeping-uae/",
    icon: "BookOpen",
  },
  {
    id: "vat",
    title: "VAT Services",
    description:
      "Get assistance with applicable UAE VAT registration, compliance and related requirements.",
    href: "/vat-services-uae/",
    icon: "Receipt",
  },
  {
    id: "corporate-tax",
    title: "Corporate Tax Services",
    description:
      "Get professional guidance on applicable UAE Corporate Tax registration and compliance requirements.",
    href: "/corporate-tax-uae/",
    icon: "Calculator",
  },
  {
    id: "pro-services",
    title: "PRO Services",
    description:
      "Simplify eligible government-related documentation and business administration requirements.",
    href: "/pro-services-uae/",
    icon: "ClipboardList",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is business setup in the UAE?",
    answer:
      "Business setup in the UAE refers to the process of legally establishing a company or business entity within the United Arab Emirates. This involves selecting the appropriate business structure — Mainland, Free Zone or Offshore — choosing your business activity, obtaining the required trade licence, completing applicable registration procedures and fulfilling all relevant regulatory requirements. The UAE offers various business setup options across its seven Emirates to accommodate different business types, ownership structures and operational requirements.",
  },
  {
    question:
      "What is the difference between Mainland and Free Zone business setup?",
    answer:
      "Mainland business setup allows you to operate your business across the UAE market without geographic restrictions on trading within the country, subject to your licenced activities. Free Zone setup provides company formation within designated economic zones, each with their own regulatory authority. Free Zones offer their own licensing frameworks and infrastructure suited to specific business types. The most appropriate choice depends on your business activity, target market, office requirements and operational plans. Horizon Line can help you compare these options based on your specific circumstances.",
  },
  {
    question: "What is an Offshore company in the UAE?",
    answer:
      "An Offshore company in the UAE is a legal entity registered in a specific UAE jurisdiction that is generally intended for international business, holding assets or other permitted purposes rather than conducting day-to-day business operations within the UAE. Offshore companies typically cannot obtain a UAE operating licence or sponsor UAE residence visas under standard rules. Eligibility and permitted activities vary by jurisdiction. Professional guidance should be obtained to determine whether an offshore structure is appropriate for your specific requirements.",
  },
  {
    question: "How much does it cost to set up a business in the UAE?",
    answer:
      "The cost of business setup in the UAE depends on several factors including the Emirate you choose, whether you opt for a Mainland, Free Zone or Offshore structure, your chosen business activity, the type of trade licence required, office requirements, visa requirements and applicable government fees. Costs can vary significantly across different Emirates and jurisdictions. Horizon Line helps you understand the expected cost components before you proceed, so you can plan your budget appropriately.",
  },
  {
    question: "How long does company formation take in the UAE?",
    answer:
      "The timeline for UAE company formation varies depending on the Emirate, business structure, business activity, documentation completeness and the specific jurisdiction's processing times. Some Free Zone setups can be completed relatively quickly once all documentation is in order, while Mainland company registration may involve additional steps. Horizon Line can provide guidance on the expected timeline based on your chosen setup type and Emirate.",
  },
  {
    question: "Can foreigners start a business in the UAE?",
    answer:
      "Yes, non-UAE nationals can establish a business in the UAE. The ownership rules, permitted business activities and applicable requirements differ depending on the setup type, Emirate and jurisdiction. Free Zones typically allow full foreign ownership for eligible business activities. Mainland ownership regulations have evolved, and many activities now permit full foreign ownership. Offshore structures also accommodate foreign shareholders for permitted purposes. The specific rules depend on your business activity and the chosen Emirate or jurisdiction.",
  },
  {
    question: "Which Emirate is best for business setup?",
    answer:
      "The most suitable Emirate for your business setup depends on your specific business activity, target market, operational requirements, office needs, visa requirements and budget. Dubai is a major international business and trade hub. Abu Dhabi is the UAE's capital with a strong economic and regulatory environment. Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah each offer their own advantages for different business types. Horizon Line can help you assess which Emirate is best suited to your particular business and objectives.",
  },
  {
    question: "Can I set up a business in any of the seven Emirates?",
    answer:
      "Yes, business setup is available across all seven Emirates of the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. Each Emirate has its own regulatory authorities, Free Zones and Mainland licensing frameworks. Horizon Line provides business setup guidance across all seven Emirates to help you identify the most suitable location and jurisdiction for your business.",
  },
  {
    question: "What documents are required for UAE company formation?",
    answer:
      "The core documents typically required for UAE company formation include passport copies of all shareholders and managers, passport photographs, a proposed company name, details of your business activity, shareholder information, manager information and contact details. Additional documents may be required depending on your chosen Emirate, jurisdiction, business activity, ownership structure and individual circumstances. Horizon Line can guide you on the exact documentation required for your specific setup.",
  },
  {
    question: "Should I choose Mainland, Free Zone or Offshore?",
    answer:
      "The right choice depends on your specific business goals. Mainland setup is typically suited to businesses that need to operate across the UAE market, work with government entities or conduct activities that require a Mainland licence. Free Zone setup can suit businesses focused on international trade, specific sectors or those seeking particular Free Zone infrastructure. Offshore structures are generally for international business or holding purposes rather than UAE-based operations. Horizon Line provides personalised guidance to help you choose the most appropriate setup based on your activity, objectives and circumstances.",
  },
  {
    question:
      "Does Horizon Line provide business setup support across all seven Emirates?",
    answer:
      "Yes. Horizon Line provides professional business setup and company formation guidance across all seven Emirates of the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. Whether you are considering a Mainland, Free Zone or Offshore setup, Horizon Line can help you understand your options, navigate the process and complete the required steps for your chosen Emirate and structure.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "UAE Market Access",
    mainland: "Full access across the UAE",
    freeZone: "May be subject to restrictions for UAE trading",
    offshore: "Not for UAE market operations",
  },
  {
    feature: "International Business",
    mainland: "Permitted subject to activity",
    freeZone: "Often well-suited for international operations",
    offshore: "Designed for international purposes",
  },
  {
    feature: "Office Requirements",
    mainland: "Physical office typically required",
    freeZone: "Varies by Free Zone — flexi-desk and office options available",
    offshore: "No UAE office required",
  },
  {
    feature: "UAE Residency",
    mainland: "Visa sponsorship available",
    freeZone: "Visa sponsorship available",
    offshore: "Generally not available under standard rules",
  },
  {
    feature: "Typical Use Cases",
    mainland: "UAE market operations, retail, services, trading",
    freeZone: "International trade, specific sectors, startups",
    offshore: "International holding, cross-border business",
  },
  {
    feature: "Licensing Considerations",
    mainland: "DED or relevant authority licence",
    freeZone: "Free Zone-specific licence and regulations",
    offshore: "Registration only — no operating licence",
  },
  {
    feature: "Setup Flexibility",
    mainland: "Wide range of business activities",
    freeZone: "Activity-specific to Free Zone scope",
    offshore: "Limited to permitted offshore activities",
  },
];

export const navigation: NavItem[] = [
  {
    label: "Business Setup",
    children: [
      { label: "Mainland", href: "/services/mainland-company-formation-uae/" },
      {
        label: "Free Zone",
        href: "/services/free-zone-company-formation-uae/",
      },
      { label: "Offshore", href: "/services/offshore-company-formation-uae/" },
    ],
  },
  {
    label: "Emirates",
    children: [
      { label: "Business Setup in Dubai", href: "/business-setup-dubai/" },
      {
        label: "Business Setup in Abu Dhabi",
        href: "/business-setup-abu-dhabi/",
      },
      {
        label: "Business Setup in Sharjah",
        href: "/business-setup-sharjah/",
      },
      { label: "Business Setup in Ajman", href: "/business-setup-ajman/" },
      {
        label: "Business Setup in Umm Al Quwain",
        href: "/business-setup-umm-al-quwain/",
      },
      {
        label: "Business Setup in Ras Al Khaimah",
        href: "/business-setup-ras-al-khaimah/",
      },
      {
        label: "Business Setup in Fujairah",
        href: "/business-setup-fujairah/",
      },
    ],
  },
  {
    label: "Other Services",
    children: [
      { label: "Business Visa", href: "/business-visa-uae/" },
      { label: "Golden Visa", href: "/golden-visa-uae/" },
      { label: "Trademark Registration", href: "/trademark-registration-uae/" },
      { label: "Corporate Bank Account", href: "/corporate-bank-account-uae/" },
      { label: "Accounting & Bookkeeping", href: "/accounting-bookkeeping-uae/" },
      { label: "VAT Services", href: "/vat-services-uae/" },
      { label: "Corporate Tax", href: "/corporate-tax-uae/" },
      { label: "PRO Services", href: "/pro-services-uae/" },
    ],
  },
  { label: "Why Horizon Line", href: "#why-horizon-line" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "#faq" },
];
