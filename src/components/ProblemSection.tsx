"use client";

import React, { useState } from "react";
import { AlertCircle, ChevronRight, Split, GitCommit, Search, RefreshCw, Cpu } from "lucide-react";

export default function ProblemSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const problems = [
    {
      num: "01",
      title: "Manual Test Creation",
      icon: Cpu,
      summary:
        "Engineers spend considerable time translating complex engineering requirements and multi-variable specifications into test cases and scripts.",
      detail:
        "Validation engineers often write test scripts manually line-by-line, creating cognitive bottlenecks between requirement specifications and test execution pipelines.",
    },
    {
      num: "02",
      title: "Limited Test Coverage",
      icon: Split,
      summary:
        "Fixed test plans may miss unusual combinations of operating conditions and unexpected physical scenarios.",
      detail:
        "Conventional test matrices test typical nominal conditions and isolated minimum/maximum values, leaving high-dimensional parameter interactions unprobed.",
    },
    {
      num: "03",
      title: "Hidden Operating Boundaries",
      icon: AlertCircle,
      summary:
        "The exact point where system behaviour begins to change, degrade, or fail is not always known.",
      detail:
        "Without adaptive boundary exploration, systems operate close to unmapped cliff-edges where temperature, voltage drop, and acoustic noise intersect destructively.",
    },
    {
      num: "04",
      title: "Difficult Failure Analysis",
      icon: Search,
      summary:
        "Engineers must investigate sensor readings, system responses and execution logs to understand why a test failed.",
      detail:
        "Raw trace logs, oscilloscope dumps, and CAN traffic logs require hours of manual forensic analysis to decouple hardware dropouts from firmware logic discrepancies.",
    },
    {
      num: "05",
      title: "Repeated Validation Effort",
      icon: RefreshCw,
      summary:
        "Requirement changes and firmware updates can introduce additional regression and validation work.",
      detail:
        "A single firmware calibration tweak can invalidate hundreds of pre-existing test assumptions, forcing engineering teams into exhaustive re-validation loops.",
    },
  ];

  const transitionStages = [
    {
      id: "normal",
      label: "Normal Operation",
      status: "Verified Domain",
      color: "border-[#2455E8] text-[#2455E8]",
      bg: "bg-[#2455E8]/10",
      description: "Deterministic behavior under standard lab conditions.",
    },
    {
      id: "boundary",
      label: "Boundary Conditions",
      status: "Transitional Edge",
      color: "border-[#C7F36B] text-[#C7F36B]",
      bg: "bg-[#C7F36B]/10",
      description: "Environmental stress approaches requirement envelope.",
    },
    {
      id: "out-of-boundary",
      label: "Out-of-Boundary",
      status: "Uncharted Vectors",
      color: "border-orange-500 text-orange-400",
      bg: "bg-orange-500/10",
      description: "Multi-parameter combinations exceed approved limits.",
    },
    {
      id: "failure",
      label: "Potential Failure",
      status: "System Anomaly",
      color: "border-red-500 text-red-400",
      bg: "bg-red-500/10",
      description: "Sensory dropout, signal collapse, or unexpected state.",
    },
  ];

  return (
    <section id="problem" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/60 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-[#A1A5AD] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
            <span>01 / THE VALIDATION BOTTLENECK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            Physical systems don&apos;t fail <br className="hidden sm:inline" />
            only under normal conditions.
          </h2>

          <p className="text-2xl sm:text-3xl font-semibold text-[#C7F36B] tracking-tight">
            They fail at the edges.
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            Conventional validation relies on manual test scripts and fixed test vectors. But complex physical systems —
            combining microcontrollers, analog sensors, environmental tolerances, and firmware — encounter their most
            critical failures in edge-case regions that fixed plans never anticipated.
          </p>
        </div>

        {/* Technical Transition Flow Visualization: Normal -> Boundary -> Out-of-Boundary -> Failure */}
        <div className="mb-20 p-6 sm:p-8 rounded-xl bg-[#101216] border border-[#292D35] shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#292D35] mb-6 gap-2">
            <div>
              <span className="text-xs font-mono text-[#A1A5AD] uppercase tracking-wider block">
                Technical Failure Horizon Concept
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                How Physical Systems Transition into Failure
              </h3>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#08090B] text-[#C7F36B] border border-[#292D35]">
              DYNAMIC FRONTIER MODEL
            </span>
          </div>

          {/* Interactive Flow Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {transitionStages.map((stage, idx) => (
              <div
                key={stage.id}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeStep === idx
                    ? `${stage.bg} ${stage.color} border-current shadow-lg`
                    : "bg-[#08090B] border-[#292D35] text-[#A1A5AD] hover:border-[#A1A5AD]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider opacity-75">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#101216] border border-[#292D35]">
                    {stage.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F6F2] mb-1">{stage.label}</h4>
                <p className="text-xs text-[#A1A5AD] leading-relaxed">{stage.description}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ChevronRight className="w-5 h-5 text-[#292D35]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#292D35]/60 flex flex-wrap items-center justify-between text-xs font-mono text-[#A1A5AD]">
            <span>Where standard testing stops: Stage 01</span>
            <span className="text-[#C7F36B] font-semibold">Where ELL-AI explores: Stages 02 & 03</span>
            <span className="text-red-400">Where failures are prevented: Stage 04</span>
          </div>
        </div>

        {/* Editorial Numbered Problem Grid (Structured, non-repetitive) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Problem 01 & 02 as large feature panels */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {problems.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative p-8 rounded-xl bg-[#101216] border border-[#292D35] hover:border-[#2455E8]/60 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-mono font-bold text-[#2455E8]">{item.num}</span>
                      <div className="h-4 w-px bg-[#292D35]" />
                      <h3 className="text-xl font-bold text-[#F5F6F2] group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-lg bg-[#08090B] border border-[#292D35] text-[#A1A5AD] group-hover:text-[#C7F36B] group-hover:border-[#C7F36B]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-base text-[#F5F6F2] font-medium leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <p className="text-sm text-[#A1A5AD] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Problems 03, 04, 05 with focus on Hidden Boundaries */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {problems.slice(2, 5).map((item) => {
              const Icon = item.icon;
              const isBoundary = item.num === "03";
              return (
                <div
                  key={item.num}
                  className={`group relative p-6 rounded-xl transition-all duration-300 ${
                    isBoundary
                      ? "bg-[#151922] border-2 border-[#C7F36B]/40 shadow-xl shadow-[#C7F36B]/5"
                      : "bg-[#101216] border border-[#292D35] hover:border-[#2455E8]/60"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-lg font-mono font-bold ${
                          isBoundary ? "text-[#C7F36B]" : "text-[#2455E8]"
                        }`}
                      >
                        {item.num}
                      </span>
                      <div className="h-3 w-px bg-[#292D35]" />
                      <h4 className="text-base font-bold text-[#F5F6F2]">
                        {item.title}
                      </h4>
                    </div>
                    <Icon className={`w-4 h-4 ${isBoundary ? "text-[#C7F36B]" : "text-[#A1A5AD]"}`} />
                  </div>

                  <p className="text-sm font-medium text-[#F5F6F2] mb-1.5 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs text-[#A1A5AD] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
