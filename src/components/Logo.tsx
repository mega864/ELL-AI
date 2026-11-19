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
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F36B] ${className}`}
      aria-label="ELL-AI Home"
    >
      {/* Precision Geometric Boundary Mark */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Enclosure Frame */}
          <rect
            x="3"
            y="3"
            width="34"
            height="34"
            rx="4"
            stroke="#292D35"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Precision Corner Calibrations */}
          <path d="M3 8V3H8" stroke="#A1A5AD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M37 8V3H32" stroke="#A1A5AD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 32V37H8" stroke="#A1A5AD" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M37 32V37H32" stroke="#A1A5AD" strokeWidth="1.5" strokeLinecap="round" />

          {/* Operating Envelope (Cobalt) */}
          <path
            d="M8 28V14C8 11.7909 9.79086 10 12 10H26"
            stroke="#2455E8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Boundary Limit Horizon (Acid Lime) */}
          <line
            x1="8"
            y1="28"
            x2="32"
            y2="28"
            stroke="#C7F36B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Discovery Frontier Probe (Accent Point) */}
          <circle cx="28" cy="14" r="3" fill="#C7F36B" />
          <circle cx="28" cy="14" r="5" stroke="#C7F36B" strokeWidth="1" strokeOpacity="0.4" />

          {/* Failure Horizon Exploration Axis */}
          <line
            x1="28"
            y1="14"
            x2="33"
            y2="9"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeDasharray="1.5 1.5"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-mono tracking-tight font-bold text-[#F5F6F2]">
          <span className={`${textSizes[size]} font-bold tracking-wider text-white`}>
            ELL
          </span>
          <span className="text-[#C7F36B] font-bold">/</span>
          <span className={`${textSizes[size]} font-bold tracking-wider text-[#2455E8]`}>
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#A1A5AD] -mt-0.5">
            Validation Platform
          </span>
        )}
      </div>
    </Link>
  );
}
