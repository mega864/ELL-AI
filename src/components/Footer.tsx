"use client";

import React from "react";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { FOUNDERS_DATA } from "@/data/founders";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowUpRight, Heart, Shield } from "lucide-react";

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
    <footer className="bg-[#08090B] border-t border-[#292D35] text-[#A1A5AD] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#292D35]">
          
          {/* Col 1 (5 cols): Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-[#A1A5AD] max-w-sm leading-relaxed mt-4 font-normal">
              {SITE_CONFIG.statement}
            </p>

            <div className="p-3.5 rounded-lg bg-[#101216] border border-[#292D35] text-xs font-mono max-w-md">
              <span className="text-[#C7F36B] font-bold block mb-1">எல்லை (Ellai) — Meaning Boundary</span>
              <span className="text-zinc-400 leading-relaxed text-[11px]">
                {SITE_CONFIG.meaning}
              </span>
            </div>

            <div className="pt-2 text-[11px] font-mono text-zinc-500">
              AI-Powered Physical Systems Validation Platform
            </div>
          </div>

          {/* Col 2 (3 cols): Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase mb-4">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#C7F36B] transition-colors flex items-center justify-between py-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7F36B]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (4 cols): Founding Team LinkedIn Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase mb-4">
              Founding Leadership
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOUNDERS_DATA.map((founder) => (
                <li key={founder.id} className="flex items-center justify-between py-1">
                  <div>
                    <span className="text-white font-medium block">{founder.name}</span>
                    <span className="text-[10px] font-mono text-[#A1A5AD]">{founder.focusArea}</span>
                  </div>

                  {founder.linkedInUrl ? (
                    <a
                      href={founder.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-[#101216] border border-[#292D35] hover:border-[#2455E8] hover:text-[#2455E8] transition-colors text-[#A1A5AD]"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#2455E8]" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-600 px-2 py-0.5 rounded bg-[#101216] border border-[#292D35]">
                      Pending
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Precision Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} ELL-AI. All rights reserved. Physical Systems Validation Platform.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-zinc-600">•</span>
            <span>Engineered for Deep-Tech Reliability</span>
            <span className="text-zinc-600">•</span>
            <span className="text-[#C7F36B]">Version 1.0 Alpha</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
