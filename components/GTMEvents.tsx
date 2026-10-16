"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/gtm";

export default function GTMEvents() {
  useEffect(() => {
    try {
      const gclid = new URLSearchParams(window.location.search).get("gclid");
      if (gclid) localStorage.setItem("gclid", gclid);
    } catch {}

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      if (href.includes("wa.me/")) {
        pushEvent("whatsapp_click", { location: a?.id || "link" });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
