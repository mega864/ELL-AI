"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showTagline = false, className = "" }: LogoProps) {
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none ${className}`}
      aria-label="ELL-AI Home"
    >
      {/* Precision Geometric Mark with Red Accent */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Subtle Frame */}
          <rect x="2" y="2" width="24" height="24" rx="4" stroke="#383535" strokeWidth="1.5" />
          {/* L shape for boundary */}
          <path d="M7 8V20H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Red Precision Probe Point */}
          <circle cx="19" cy="8" r="3" fill="#FF4545" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-mono tracking-tight font-bold text-white">
          <span className={`${textSizes[size]} font-bold tracking-wider text-white`}>
            ELL
          </span>
          <span className="text-[#FF4545] font-bold">.</span>
          <span className={`${textSizes[size]} font-bold tracking-wider text-white`}>
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#A1A5AD] -mt-0.5">
            Physical AI Validation
          </span>
        )}
      </div>
    </Link>
  );
}
