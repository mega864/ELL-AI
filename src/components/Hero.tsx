"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Play, CheckCircle2, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"spec" | "engine" | "rig" | "gate">("engine");

  const stageData = {
    spec: {
      step: "01",
      title: "System Specification",
      subtitle: "Requirements + Firmware",
      description: "Ingests functional specifications, expected behaviors, and operating limits.",
      metrics: "Target: AEB Braking Function | Limits: 20cm - 250cm range",
    },
    engine: {
      step: "02",
      title: "Physical AI Engine",
      subtitle: "Intelligent Test Generation",
      description: "Generates normal, boundary, and unexpected-condition test vectors.",
      metrics: "Generated: 8 Nominal • 12 Edge Boundary • 4 Stress Fallback",
    },
    rig: {
      step: "03",
      title: "Rig Execution",
      subtitle: "Closed-Loop Hardware Bench",
      description: "Executes approved experiments through simulation, HIL, or physical hardware adapters.",
      metrics: "Adapter: Real-Time Bus | Bench Bounds: Enforced Safety Limits",
    },
    gate: {
      step: "04",
      title: "Quality Gate & Loop",
      subtitle: "Results Guide Next Test",
      description: "Captures sensor telemetry, highlights failures, and recommends the next test to run.",
      metrics: "Outcome: Drop-out isolated at 20cm | Recommended: Ring-down sweep",
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 bg-[#1E1C1C] overflow-hidden">
      {/* Very subtle background grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Product Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#212121] border border-[#2E2C2C] text-[11px] font-mono text-[#A1A5AD] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
          <span className="text-white font-medium">{SITE_CONFIG.descriptor}</span>
          <span className="text-zinc-600">•</span>
          <span>OEM Discussion & Concept</span>
        </div>

        {/* Editorial Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6">
            We are building AI that tests physical systems, finds failure conditions and recommends what to improve.
          </h1>

          <p className="text-xl sm:text-2xl text-[#FF4545] font-medium tracking-tight mb-8">
            Learn from every test. Choose the next useful test.
          </p>

          <p className="text-base sm:text-lg text-[#A1A5AD] max-w-2xl font-normal leading-relaxed mb-10">
            Engineers spend weeks translating requirements into test scripts, diagnosing ambiguous sensor logs, and
            repeating tests after firmware changes. ELL-AI closes the loop: intelligent scenario generation, boundary
            exploration on physical rigs, and clear evidence for engineer review.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FF4545] text-sm font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a] shadow-lg shadow-[#FF4545]/20"
            >
              <span>Explore Validation Gaps</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#demonstrator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#212121] border border-[#2E2C2C] text-sm font-medium text-white transition-all hover:border-[#FF4545]/60 hover:bg-[#262424]"
            >
              <span>See AEB Demonstrator</span>
              <ArrowUpRight className="w-4 h-4 text-[#A1A5AD]" />
            </a>
          </div>
        </div>

        {/* Clean, Non-Cluttered Interactive Validation Engine Preview */}
        <div className="mt-16 rounded-xl bg-[#212121] border border-[#2E2C2C] p-6 sm:p-8 shadow-2xl">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2E2C2C] gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A5AD] block mb-1">
                End-to-End Workflow Architecture
              </span>
              <h3 className="text-lg font-bold text-white">
                From System Requirements to Engineering Evidence
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A5AD]">
              <ShieldCheck className="w-4 h-4 text-[#FF4545]" />
              <span>Engineers retain final sign-off</span>
            </div>
          </div>

          {/* 4 Interactive Connected Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            {(["spec", "engine", "rig", "gate"] as const).map((key) => {
              const item = stageData[key];
              const isSelected = activeTab === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    isSelected
                      ? "bg-[#262424] border-[#FF4545] shadow-lg"
                      : "bg-[#1E1C1C] border-[#2E2C2C] hover:border-[#3D3A3A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#A1A5AD]">
                      STAGE {item.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#FF4545]" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-[#A1A5AD]">{item.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Status Strip */}
          <div className="p-4 rounded-lg bg-[#1E1C1C] border border-[#2E2C2C] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
            <div>
              <span className="text-[#A1A5AD] uppercase text-[10px] block mb-1">Active Stage Overview:</span>
              <span className="text-white font-medium">{stageData[activeTab].description}</span>
            </div>

            <div className="shrink-0 p-2.5 rounded bg-[#212121] border border-[#2E2C2C] text-zinc-300">
              <span className="text-[#FF4545] font-bold">STATE: </span>
              <span>{stageData[activeTab].metrics}</span>
            </div>
          </div>

          {/* Feedback Loop Notice */}
          <div className="mt-4 pt-4 border-t border-[#2E2C2C] flex flex-wrap items-center justify-between text-xs text-[#A1A5AD]">
            <span className="flex items-center gap-2">
              <span className="text-[#FF4545] font-semibold">Feedback Loop:</span>
              <span>Recommend an update, review it, then re-test automatically.</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              Physical connection through standard test adapters
            </span>
          </div>

        </div>

        {/* Minimal Bottom Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#2E2C2C] text-xs">
          <div>
            <span className="text-white font-semibold block mb-1">01 / Requirements-Linked</span>
            <p className="text-[#A1A5AD] leading-relaxed">
              Every generated test links directly to explicit functional specifications and hardware tolerance limits.
            </p>
          </div>
          <div>
            <span className="text-white font-semibold block mb-1">02 / Edge-Condition Discovery</span>
            <p className="text-[#A1A5AD] leading-relaxed">
              Probes multi-variable intersections (temperature + voltage + timing) where physical systems struggle.
            </p>
          </div>
          <div>
            <span className="text-white font-semibold block mb-1">03 / Actionable Engineering Insights</span>
            <p className="text-[#A1A5AD] leading-relaxed">
              Turns raw sensor readings and bus traces into clear reproduction steps and recommends what to test next.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
