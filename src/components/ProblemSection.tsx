"use client";

import React from "react";
import { FileCode, Combine, EyeOff, Clock, RotateCcw, ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const gaps = [
    {
      num: "1",
      title: "Every update needs new tests",
      detail: "Each software update means fresh testing, and teams fall behind.",
      solution: "We write the new tests for you, based on what the product is meant to do.",
      icon: FileCode,
    },
    {
      num: "2",
      title: "Small issues combine",
      detail: "A power dip, a hot day and a slight delay may each be fine alone. Together, they can break things.",
      solution: "We test combinations, not just one condition at a time.",
      icon: Combine,
    },
    {
      num: "3",
      title: "Nobody tests what they didn't think of",
      detail: "Checklists cover what people expect, not the surprises.",
      solution: "Our AI tries the 'just about too much' cases, right at the limit and slightly beyond.",
      icon: EyeOff,
    },
    {
      num: "4",
      title: "Finding the reason takes days",
      detail: "Engineers dig through huge piles of recorded data to find what went wrong.",
      solution: "We point to what failed, when it failed, and the likely reason.",
      icon: Clock,
    },
    {
      num: "5",
      title: "Late surprises cost a lot",
      detail: "A problem found near launch means starting the testing again.",
      solution: "We re-check automatically after every change, so issues show up early.",
      icon: RotateCcw,
    },
  ];

  return (
    <section id="problem" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Why testing is hard
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Testing physical products is slow, and problems still slip through.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            Most teams test with fixed checklists written by hand. But real life is messier. Heat, power changes and tiny delays can combine in ways nobody planned for, and the problem shows up late, when fixing it costs the most.
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
                    How ELL-AI helps:
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
              The real gap
            </span>
            <p className="text-base font-semibold text-white">
              Knowing which test to run next, and what the results mean.
            </p>
          </div>

          <a
            href="#workflow"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#FF4545] transition-colors shrink-0"
          >
            <span>See how it works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
