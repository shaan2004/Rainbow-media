"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ANNOUNCEMENT_TEXT } from "@/lib/constants";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Read localstorage on mount to avoid hydration mismatch
    const isDismissed = localStorage.getItem("billit_announcement_dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("billit_announcement_dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-50 h-10 w-full overflow-hidden border-b border-white/10 flex items-center justify-center bg-gradient-hero animate-gradient-slide">
      {/* Content */}
      <a
        href="#pricing"
        className="relative flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-white px-8 hover:underline decoration-white/70"
      >
        {ANNOUNCEMENT_TEXT}
      </a>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
