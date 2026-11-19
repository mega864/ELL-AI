"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageSquare, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#212121] border border-[#2E2C2C] p-8 sm:p-14 text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            Which testing challenge should we explore together?
          </h2>

          <p className="text-base text-[#FF4545] font-medium mb-4">
            One system function. One controlled setup. Clear evidence.
          </p>

          <p className="text-sm text-[#A1A5AD] max-w-lg mx-auto leading-relaxed mb-8">
            Have a physical system or integration challenge you want to test?
            Reach out directly to our engineering founders to outline a pilot.
          </p>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF4545] text-sm font-semibold text-white transition-all hover:bg-[#e03a3a] shadow-lg shadow-[#FF4545]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{SITE_CONFIG.whatsappLabel}</span>
          </a>

          <div className="mt-8 pt-6 border-t border-[#2E2C2C] flex items-center justify-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF4545]" />
            <span>Direct conversation with our engineering team</span>
          </div>

        </div>
      </div>
    </section>
  );
}
