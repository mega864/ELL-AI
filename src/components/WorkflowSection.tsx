"use client";

import React from "react";
import {
  FileText,
  Cpu,
  Search,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export default function WorkflowSection() {
  const stages = [
    {
      num: "01",
      title: "Describe",
      text: "Tell us what the product should do, in plain words.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Test",
      text: "The AI writes a set of tests, from normal use to extreme cases, and runs them once your engineer approves.",
      icon: Cpu,
    },
    {
      num: "03",
      title: "Find",
      text: "It compares what should happen with what did happen, and spots the failures.",
      icon: Search,
    },
    {
      num: "04",
      title: "Improve",
      text: "You get a clear report: what failed, why, how to fix it, and which test to run next. Every result makes the next test smarter.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="workflow" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            How it works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            How ELL-AI turns testing into clear answers.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            Four simple stages. Your engineers stay in control the whole time.
          </p>
        </div>

        {/* 4 Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-mono font-bold text-[#FF4545]">{stage.num}</span>
                    <div className="p-2 rounded-md bg-[#1E1C1C] border border-[#2E2C2C]">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-xs text-[#A1A5AD] leading-relaxed">{stage.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Strip */}
        <div className="p-4 rounded-lg bg-[#212121] border border-[#2E2C2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A1A5AD]">
          <div className="flex items-center gap-2 text-white font-medium">
            <ShieldCheck className="w-4 h-4 text-[#FF4545] shrink-0" />
            <span>AI suggests. Engineers approve and sign off. Tests always stay within limits you set.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
