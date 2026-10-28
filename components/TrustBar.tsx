import { Building2, FileCheck, Landmark, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "Mainland",
    label: "Advisory on structure and activity options",
  },
  {
    icon: Landmark,
    value: "Free Zone",
    label: "Guidance on comparing free zone jurisdictions",
  },
  {
    icon: FileCheck,
    value: "Offshore",
    label: "Guidance on offshore structures & permitted uses",
  },
  {
    icon: ShieldCheck,
    value: "Corporate Support",
    label: "Advisory on business administration needs",
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-white border-y border-slate-100 py-8 sm:py-12 relative z-10"
      aria-label="Business Setup Options"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isTeal = idx % 2 === 0;
            return (
              <div
                key={stat.value}
                className={`group flex flex-col items-center text-center px-3 sm:px-4 lg:px-6 py-2 transition-all duration-300 ${
                  idx < 2 ? "max-md:border-b max-md:pb-6 max-md:border-slate-100" : "max-md:pt-4"
                } ${idx % 2 === 0 ? "max-md:border-r max-md:border-slate-100" : ""}`}
              >
                {/* Icon Container */}
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-105 shadow-sm"
                  style={{
                    background: isTeal ? "rgba(38,100,100,0.08)" : "rgba(44,54,80,0.08)",
                    border: `1px solid ${isTeal ? "rgba(38,100,100,0.18)" : "rgba(44,54,80,0.18)"}`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: isTeal ? "#266464" : "#2c3650" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Title: Always single line and baseline-aligned */}
                <h3 className="font-serif font-bold text-base sm:text-xl lg:text-2xl xl:text-[26px] tracking-tight text-[#0A1628] whitespace-nowrap mb-2">
                  {stat.value}
                </h3>

                {/* Subtitle / Description: Clean, balanced 2-line layout */}
                <p className="text-slate-500 font-medium text-[10px] sm:text-[11px] lg:text-xs tracking-wider uppercase leading-relaxed max-w-[210px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
