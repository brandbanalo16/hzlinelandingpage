import { Building2, FileCheck, Landmark, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Building2, value: "Mainland", label: "DED Licenses" },
  { icon: Landmark, value: "Free Zone", label: "40+ Jurisdictions" },
  { icon: FileCheck, value: "Offshore", label: "Asset Protection" },
  { icon: ShieldCheck, value: "Pro Services", label: "Visa & Approvals" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-6 sm:py-10 relative z-10" aria-label="Business Setup Options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 gap-y-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.value}
                className={`flex flex-col items-center text-center px-4 ${
                  idx === 0 || idx === 1 ? "max-md:border-b max-md:pb-8 max-md:border-slate-100" : ""
                } ${idx % 2 === 0 ? "max-md:border-r max-md:border-slate-100" : "max-md:border-l-0"}`}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3"
                  style={{
                    background: `rgba(${idx % 2 === 0 ? "38,100,100" : "44,54,80"}, 0.1)`,
                  }}
                >
                  <Icon size={22} style={{ color: idx % 2 === 0 ? "#266464" : "#2c3650" }} aria-hidden="true" />
                </div>
                
                <h3
                  className="font-serif font-bold text-lg sm:text-2xl lg:text-3xl mb-1 tracking-tight text-[#0A1628]"
                >
                  {stat.value}
                </h3>
                <p className="text-slate-500 font-medium text-xs tracking-wider uppercase">
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
