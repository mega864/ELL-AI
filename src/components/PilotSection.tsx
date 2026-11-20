"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function PilotSection() {
  const steps = [
    {
      step: "01",
      title: "Pick one thing",
      detail: "One function that matters, such as \"does it stop when something is in the way?\"",
    },
    {
      step: "02",
      title: "Agree on good",
      detail: "We set the limits and what counts as a pass together.",
    },
    {
      step: "03",
      title: "Set it up safely",
      detail: "We connect through a simulator or a small test setup.",
    },
    {
      step: "04",
      title: "Compare the results",
      detail: "Time saved, extra problems found, and clear reasons for each failure.",
    },
  ];

  return (
    <section id="pilot" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            How we work with you
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Start small. See the proof.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            No big commitment. We pick one thing to test and show you clear results.
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
              One function. Clear evidence. Real improvement.
            </h4>
            <p className="text-sm text-[#A1A5AD]">
              What&apos;s the one thing you&apos;d like tested?
            </p>
          </div>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF4545] text-sm font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a] shadow-lg shadow-[#FF4545]/20 shrink-0"
          >
            <span>Suggest a test for us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
