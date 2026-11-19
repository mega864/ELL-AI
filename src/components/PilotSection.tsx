"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function PilotSection() {
  const steps = [
    {
      step: "01",
      title: "One system function",
      detail: "Select a single critical hardware function such as obstacle detection, actuator travel, or bus latency.",
    },
    {
      step: "02",
      title: "Agreed specifications",
      detail: "Define the target operating parameters, tolerance envelopes, and clear pass criteria.",
    },
    {
      step: "03",
      title: "Controlled test setup",
      detail: "Connect through a software simulation, Hardware-in-the-Loop rig, or isolated bench adapter.",
    },
    {
      step: "04",
      title: "Measurable validation",
      detail: "Compare testing time, uncovered edge anomalies, and root-cause diagnostics directly against baseline logs.",
    },
  ];

  return (
    <section id="pilot" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            How We Work With You
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Start small. Prove the value.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            We begin with a focused, controlled proof-of-concept on a single system function to deliver clear evidence and measurable improvement.
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF4545] text-sm font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a] shadow-lg shadow-[#FF4545]/20 shrink-0"
          >
            <span>Propose a Pilot Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
