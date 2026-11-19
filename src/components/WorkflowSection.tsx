"use client";

import React, { useState } from "react";
import {
  FileText,
  Brain,
  Database,
  Cpu,
  UserCheck,
  Play,
  Activity,
  BarChart3,
  FileCheck2,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "Engineer Request",
      summary: "Define the specific system function to validate.",
      input: "The engineer specifies functional limits, such as obstacle detection thresholds under acoustic noise.",
      output: "Target requirements and acceptable operating boundaries are indexed.",
      icon: FileText,
    },
    {
      num: 2,
      title: "AI Understands",
      summary: "Map the system architecture and validation intent.",
      input: "Sensor channels, physical parameters, signal rates, and operating constraints.",
      output: "Structured validation model with parameter thresholds.",
      icon: Brain,
    },
    {
      num: 3,
      title: "Retrieve Knowledge",
      summary: "Review past test outcomes and component specs.",
      input: "Historical test run logs, component datasheets, and baseline test matrices.",
      output: "Contextual knowledge graph for the specific device under test.",
      icon: Database,
    },
    {
      num: 4,
      title: "Generate Tests",
      summary: "Create nominal, boundary, and stress test scenarios.",
      input: "Multi-parameter test vector generation logic.",
      output: "Complete test suite covering standard operation, edge limits, and fault recovery.",
      icon: Cpu,
    },
    {
      num: 5,
      title: "Engineer Review",
      summary: "Review and approve test parameters before execution.",
      input: "Engineers inspect scenarios and set hard safety stops before bench execution.",
      output: "Approved test schedule with safety limits locked in.",
      icon: UserCheck,
    },
    {
      num: 6,
      title: "Run the Tests",
      summary: "Execute across hardware rigs, HIL benches, or simulators.",
      input: "Dispatch approved test vectors via CAN adapters or real-time test benches.",
      output: "Automated test execution under monitored safety boundaries.",
      icon: Play,
    },
    {
      num: 7,
      title: "Collect Results",
      summary: "Capture bus telemetry, sensor output, and system logs.",
      input: "High-speed bus logs, sensor signals, timestamps, and electrical metrics.",
      output: "Synchronized telemetry dataset ready for analysis.",
      icon: Activity,
    },
    {
      num: 8,
      title: "Analyse Results",
      summary: "Compare actual outputs against engineering criteria.",
      input: "Automated delta comparison between expected thresholds and measured performance.",
      output: "Identified anomalies, signal dropouts, and timing deviations.",
      icon: BarChart3,
    },
    {
      num: 9,
      title: "Engineering Report",
      summary: "Deliver clear diagnostic findings with root causes.",
      input: "Consolidated pass and fail criteria linked with exact timestamp traces.",
      output: "Actionable engineering summary highlighting verified failure causes.",
      icon: FileCheck2,
    },
    {
      num: 10,
      title: "Plan Next Test",
      summary: "Recommend the next logical test to deepen understanding.",
      input: "Empirical findings from the completed test run.",
      output: "Recommended follow-up experiments to probe adjacent edge conditions.",
      icon: RotateCcw,
    },
  ];

  const current = steps[activeStep - 1];

  return (
    <section id="workflow" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Our Approach
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            How our AI works.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            From requirements to engineering evidence. Results guide the next useful test.
          </p>
        </div>

        {/* 10-Step Timeline Strip */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {steps.map((st) => {
              const isSelected = activeStep === st.num;
              const Icon = st.icon;

              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setActiveStep(st.num)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? "bg-[#212121] border-[#FF4545] shadow-lg"
                      : "bg-[#212121]/60 border-[#2E2C2C] hover:border-[#3D3A3A] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-[#FF4545]" : "text-[#A1A5AD]"
                      }`}
                    >
                      {st.num < 10 ? `0${st.num}` : st.num}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-white" : "text-[#A1A5AD]"
                      }`}
                    />
                  </div>
                  <h4 className="text-xs font-semibold text-white leading-tight line-clamp-2">
                    {st.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Clean Deep-Dive */}
        <div className="rounded-xl bg-[#212121] border border-[#2E2C2C] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#2E2C2C] gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#1E1C1C] border border-[#2E2C2C] text-xs font-mono font-bold text-[#FF4545]">
                STEP {current.num < 10 ? `0${current.num}` : current.num} OF 10
              </span>
              <h3 className="text-xl font-bold text-white">{current.title}</h3>
            </div>

            <p className="text-sm text-[#A1A5AD] font-medium">
              {current.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 rounded-lg bg-[#1E1C1C] border border-[#2E2C2C]">
              <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider block mb-1">
                Input / Engineer Action:
              </span>
              <p className="text-xs text-white leading-relaxed font-mono">
                {current.input}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#1E1C1C] border border-[#2E2C2C]">
              <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider block mb-1">
                Output / System Evidence:
              </span>
              <p className="text-xs text-white leading-relaxed font-mono">
                {current.output}
              </p>
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#2E2C2C]">
            <button
              type="button"
              disabled={activeStep === 1}
              onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
              className="px-3.5 py-1.5 rounded bg-[#1E1C1C] border border-[#2E2C2C] text-xs font-mono text-[#A1A5AD] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>

            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              Continuous learning loop: results guide the next test
            </span>

            <button
              type="button"
              disabled={activeStep === 10}
              onClick={() => setActiveStep((p) => Math.min(10, p + 1))}
              className="px-3.5 py-1.5 rounded bg-[#FF4545] text-xs font-mono font-bold text-white hover:bg-[#e03a3a] disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <span>Next Step</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Safety & Sign-Off Guarantee */}
        <div className="mt-8 p-4 rounded-lg bg-[#212121] border border-[#2E2C2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A1A5AD]">
          <div className="flex items-center gap-2 text-white font-medium">
            <ShieldCheck className="w-4 h-4 text-[#FF4545]" />
            <span>Tests stay within approved limits. Engineers review evidence and retain sign-off.</span>
          </div>

          <span className="text-[11px] font-mono text-zinc-400">
            Physical safety clamps strictly enforced
          </span>
        </div>

      </div>
    </section>
  );
}
