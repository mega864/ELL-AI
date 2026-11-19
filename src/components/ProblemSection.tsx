"use client";

import React from "react";
import { FileCode, Combine, EyeOff, Clock, RotateCcw, ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const gaps = [
    {
      num: "1",
      title: "New firmware needs new tests",
      detail: "Frequent software updates create continuous testing overhead before integration.",
      solution: "Auto-generate test cases linked directly to requirements for engineering review.",
      icon: FileCode,
    },
    {
      num: "2",
      title: "Conditions interact unexpectedly",
      detail: "Voltage drops, temperature swings, and signal delays combine to create subtle bugs.",
      solution: "Target boundary combinations to uncover hidden failure points early.",
      icon: Combine,
    },
    {
      num: "3",
      title: "Edge cases get missed",
      detail: "Standard test scripts only verify expected operating limits, missing borderline transitions.",
      solution: "Test borderline transitions where physical sensors begin to drift or degrade.",
      icon: EyeOff,
    },
    {
      num: "4",
      title: "Root-cause analysis takes too long",
      detail: "Engineers spend hours parsing raw CAN logs and sensor telemetry to isolate anomalies.",
      solution: "Correlate telemetry with requirements to pinpoint the exact failure cause.",
      icon: Clock,
    },
    {
      num: "5",
      title: "Late discoveries cause costly rework",
      detail: "Finding defects right before production triggers expensive re-testing cycles.",
      solution: "Run targeted regression suites after code changes to catch issues immediately.",
      icon: RotateCcw,
    },
  ];

  return (
    <section id="problem" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Testing Challenges
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Five gaps that make validation difficult.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            Conventional validation relies on manual test scripts and fixed checklists.
            When hardware parameters interact under stress, critical defects slip through until late in development.
          </p>
        </div>

        {/* 5-Row Editorial List */}
        <div className="divide-y divide-[#2E2C2C] border-y border-[#2E2C2C]">
          {gaps.map((gap) => {
            const Icon = gap.icon;
            return (
              <div
                key={gap.num}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-[#212121]/50 px-3 -mx-3 rounded-lg transition-colors"
              >
                {/* Number & Title */}
                <div className="md:col-span-5 flex items-start gap-4">
                  <span className="text-base font-mono font-bold text-[#FF4545] shrink-0 w-6">
                    0{gap.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                      {gap.title}
                    </h3>
                    <p className="text-xs text-[#A1A5AD] mt-1 leading-relaxed">
                      {gap.detail}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="hidden md:flex md:col-span-1 justify-center text-[#A1A5AD]/40 group-hover:text-[#FF4545] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Solution */}
                <div className="md:col-span-6 pl-10 md:pl-0">
                  <span className="text-[10px] font-mono uppercase text-[#A1A5AD] tracking-wider block mb-1">
                    How ELL-AI Solves This:
                  </span>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    {gap.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Summary Banner */}
        <div className="mt-12 p-6 rounded-lg bg-[#212121] border border-[#2E2C2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#FF4545] uppercase tracking-wider block mb-0.5">
              The Real Industry Gap
            </span>
            <p className="text-base font-semibold text-white">
              Choosing the next useful test and turning results into action.
            </p>
          </div>

          <a
            href="#workflow"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#FF4545] transition-colors shrink-0"
          >
            <span>See the 10-Step Approach</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
