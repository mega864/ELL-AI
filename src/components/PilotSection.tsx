"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function PilotSection() {
  const steps = [
    {
      step: "01",
      title: "One system function",
      detail: "Select a single critical physical function (e.g. obstacle detection, actuator limit, or bus latency).",
    },
    {
      step: "02",
      title: "One agreed set of requirements",
      detail: "Define the exact functional specifications, operating envelopes, and pass/fail thresholds.",
    },
    {
      step: "03",
      title: "One controlled testing setup",
      detail: "Connect via software simulation, Hardware-in-the-Loop rig, or safe bench test adapter.",
    },
    {
      step: "04",
      title: "Compare test effort & evidence",
      detail: "Measure test execution effort, boundary edge-cases found, and diagnostic repeatability.",
    },
  ];

  return (
    <section id="pilot" className="py-24 bg-[#1E1C1C] border-t border-[#2E2C2C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF4545] mb-3">
            Engagement Model
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Start small. Prove the value.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            We propose starting with a focused, controlled proof-of-concept on a single system function to deliver clear evidence and measurable improvement.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st) => (
            <div
              key={st.step}
              className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C] flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-mono font-bold text-[#FF4545] block mb-4">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-[#A1A5AD] leading-relaxed">
                  {st.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Anchor Strip */}
        <div className="p-8 rounded-xl bg-[#212121] border border-[#2E2C2C] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white">
              One system function. Clear evidence. Measurable improvement.
            </h4>
            <p className="text-sm text-[#A1A5AD]">
              Which validation challenge should we explore together?
            </p>
          </div>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FF4545] text-sm font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a] shadow-lg shadow-[#FF4545]/20 shrink-0"
          >
            <span>Propose a Pilot Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
