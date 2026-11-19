"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageSquare, ArrowRight, ShieldCheck, Compass, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient-hero opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Panel */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#101216] border border-[#292D35] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#2455E8]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#C7F36B]/10 blur-3xl pointer-events-none" />

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#C7F36B] mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse" />
            <span>PARTNER WITH ELL-AI</span>
          </div>

          {/* Section Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Let&apos;s explore what better <br className="hidden sm:inline" />
            validation can look like.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#A1A5AD] max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Have a physical system, engineering challenge or validation problem you want to explore?
            Connect directly with our engineering founders.
          </p>

          {/* Centralized Primary CTA: WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2455E8] text-base font-semibold text-white tracking-wide transition-all duration-200 hover:bg-[#1d46c2] shadow-xl shadow-[#2455E8]/30 hover:shadow-[#2455E8]/45 active:scale-[0.98] group"
            >
              <MessageSquare className="w-5 h-5 text-[#C7F36B]" />
              <span>{SITE_CONFIG.whatsappLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C7F36B]" />
            </a>
          </div>

          {/* Direct Notice on Placeholder Number */}
          <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35] max-w-xl mx-auto text-[11px] font-mono text-[#A1A5AD] leading-relaxed">
            <div className="flex items-center justify-center gap-2 text-white font-semibold mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>DIRECT FOUNDER CHANNEL</span>
            </div>
            <span>
              Connect directly via WhatsApp to discuss technical trials, HIL simulation integrations, and physical
              validation challenges.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
