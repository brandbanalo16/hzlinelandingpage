import { AlertCircle } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <aside
      aria-label="Legal Disclaimer"
      className="bg-amber-50/70 border-y border-amber-200/60 py-2.5 px-4 text-[#2c3650]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-[13px] leading-relaxed">
        <AlertCircle
          size={15}
          className="text-amber-600 shrink-0 hidden sm:inline-block"
          aria-hidden="true"
        />
        <p>
          <strong className="font-semibold text-slate-800">Disclaimer: </strong>
          Horizon Line is an independent consultancy, not a government authority. We provide business setup consultancy services. All final approvals, licences, and permits are subject to the decision of the relevant UAE government authorities. Approval is not guaranteed.
        </p>
      </div>
    </aside>
  );
}
