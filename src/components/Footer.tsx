"use client";

import React from "react";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { FOUNDERS_DATA } from "@/data/founders";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1C1C] border-t border-[#2E2C2C] text-[#A1A5AD] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2E2C2C]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-xs text-[#A1A5AD] max-w-sm leading-relaxed">
              {SITE_CONFIG.statement}
            </p>
            <p className="text-[11px] font-mono text-zinc-500">
              Physical connection through test adapters. Engineers retain sign-off.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-white text-[11px] block mb-3 font-semibold">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#A1A5AD] hover:text-white transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Founders LinkedIn */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-white text-[11px] block mb-3 font-semibold">
              Founding Team
            </span>
            {FOUNDERS_DATA.map((f) => (
              <div key={f.id} className="flex items-center justify-between py-1">
                <span className="text-white">{f.name}</span>
                {f.linkedInUrl ? (
                  <a
                    href={f.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A5AD] hover:text-[#FF4545] transition-colors p-1"
                    aria-label={`${f.name} LinkedIn`}
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-600">Pending</span>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-3">
          <span>© {currentYear} ELL-AI. All rights reserved.</span>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Physical AI Validation Platform</span>
            <span>•</span>
            <span className="text-[#FF4545]">Engineered for Reliability</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
