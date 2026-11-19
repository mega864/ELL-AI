"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#1E1C1C] border-t border-[#2E2C2C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-2xl bg-[#212121] border border-[#2E2C2C] p-8 sm:p-14 text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1C1C] border border-[#2E2C2C] text-xs font-mono text-[#A1A5AD] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
            <span>OEM Pilot Discussion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Which testing challenge should we explore together?
          </h2>

          <p className="text-lg text-[#FF4545] font-medium mb-6">
            One system function. One controlled setup. Clear evidence.
          </p>

          <p className="text-sm sm:text-base text-[#A1A5AD] max-w-xl mx-auto leading-relaxed mb-10">
            Have a physical system, firmware integration challenge, or edge failure condition you want to test?
            Connect directly with our engineering founders to outline a scoped pilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#FF4545] text-base font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a] shadow-xl shadow-[#FF4545]/25"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{SITE_CONFIG.whatsappLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2E2C2C] flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-[#FF4545]" />
            <span>Direct engineering channel • Closed-loop validation discussion</span>
          </div>

        </div>

      </div>
    </section>
  );
}
