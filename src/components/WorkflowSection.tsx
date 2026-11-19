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
  ArrowRight,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const steps = [
    {
      num: "01",
      title: "Engineer Request",
      category: "Ingestion & Analysis",
      icon: FileText,
      summary: "The engineer describes the system function or behaviour that needs validation.",
      details:
        "Input natural language specifications, engineering user stories, or raw DOORS/Jira requirements. No cumbersome scripting required upfront.",
      artifact: "Input: 'Validate ultrasonic sensor blind-zone down to 20cm limit under acoustic reverberation.'",
    },
    {
      num: "02",
      title: "AI Understands",
      category: "Ingestion & Analysis",
      icon: Brain,
      summary: "Identify the system, function, parameters and validation objective.",
      details:
        "Semantic extraction parses signal rates, baud tolerances, physical variables, environmental ranges, and identifies implicit assumptions or missing parameters.",
      artifact: "Parsed: DUT=Ultrasonic Transceiver | Domain=Distance [0..250cm] | Variable=Acoustic Ringing Decay",
    },
    {
      num: "03",
      title: "Retrieve Knowledge",
      category: "Ingestion & Analysis",
      icon: Database,
      summary: "Retrieve relevant requirements, operating limits, signal definitions and previous test results.",
      details:
        "Indexes historical hardware revision logs, prior test matrices, failure databases, and manufacturer sensor datasheets to contextualize the experiment.",
      artifact: "Context Loaded: 14 prior test runs indexed, 2 known past thermal anomalies at +50°C retrieved.",
    },
    {
      num: "04",
      title: "Generate Tests",
      category: "Ingestion & Analysis",
      icon: Cpu,
      summary: "Generate normal, boundary and unexpected-condition test cases.",
      details:
        "Synthesizes a multi-dimensional matrix covering nominal operation, boundary edge probes, and extreme out-of-boundary stress vectors.",
      artifact: "Generated: 8 Nominal vectors, 14 Boundary probes, 6 Out-of-Envelope Stress vectors.",
    },
    {
      num: "05",
      title: "Engineer Review",
      category: "Review & Execution",
      icon: UserCheck,
      summary: "The engineer reviews and approves the test cases, expected results and operating limits.",
      details:
        "Human-in-the-loop safety protocol: Engineers verify physical limits, test bounds, and testbench safety clamps before any hardware excitation occurs.",
      artifact: "Review Gate: Signed off by Lead Validation Engineer. Max excitation pulse capped at 18V.",
    },
    {
      num: "06",
      title: "Run Tests",
      category: "Review & Execution",
      icon: Play,
      summary: "Execute approved tests through simulation, HIL or physical hardware adapters.",
      details:
        "Dispatches test vectors to digital twin simulators, Hardware-in-the-Loop (HIL) benches, or direct physical hardware test adapters via CAN/LIN/Ethernet.",
      artifact: "Execution: Dispatched to Rig-02 (Vector CANoe + HIL ultrasonic target simulator).",
    },
    {
      num: "07",
      title: "Collect Results",
      category: "Review & Execution",
      icon: Activity,
      summary: "Collect sensor readings, system outputs and execution logs.",
      details:
        "High-frequency time-series capture of sensor waveforms, serial bus traffic, voltage fluctuations, and timestamped firmware execution logs.",
      artifact: "Telemetry: 1.2M points captured. 40kHz waveform samples, supply current trace, CAN frames.",
    },
    {
      num: "08",
      title: "Analyse Results",
      category: "Intelligence & Evidence",
      icon: BarChart3,
      summary: "Compare actual and expected behaviour and identify failure patterns.",
      details:
        "Automated delta comparison isolates discrepancies, timing jitters, transducer ring-down overlaps, and intermittent dropout states.",
      artifact: "Delta Analysis: 99.2% nominal correlation. Boundary anomaly isolated at 19.8cm.",
    },
    {
      num: "09",
      title: "Engineering Report",
      category: "Intelligence & Evidence",
      icon: FileCheck2,
      summary: "Provide evidence, failure explanations, reproduction steps and improvement recommendations.",
      details:
        "Produces comprehensive engineering evidence packages with annotated waveform plots, exact reproduction triggers, and root-cause hints.",
      artifact: "Report Generated: #REP-2026-981 with step-by-step reproduction sequence.",
    },
    {
      num: "10",
      title: "Plan Next Test",
      category: "Intelligence & Evidence",
      icon: RotateCcw,
      summary: "Recommend the next useful boundary, regression or follow-up experiment.",
      details:
        "Closes the loop: Generates the next targeted experimental hypothesis to explore the newly identified boundary and improve reliability.",
      artifact: "Loop Closed: Auto-suggested follow-up: Fine-grain acoustic attenuation sweep around 18-22cm.",
    },
  ];

  const current = steps[selectedStep - 1];

  return (
    <section id="how-it-works" className="relative py-28 bg-[#101216] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#C7F36B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
            <span>04 / THE VALIDATION WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            From engineering requirements <br className="hidden sm:inline" />
            to actionable evidence.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            A 10-step connected validation intelligence loop. From the engineer&apos;s initial request to boundary
            discovery and closed-loop recommendations for what to test next.
          </p>
        </div>

        {/* The 10-Step Timeline Stepper Grid */}
        <div className="mb-12">
          
          {/* Phase Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs font-mono">
            <div className="p-2.5 rounded-t-lg bg-[#08090B] border-t-2 border-[#2455E8] border-x border-[#292D35] flex items-center justify-between">
              <span className="text-[#2455E8] font-bold">PHASE 1: Ingestion & Generation</span>
              <span className="text-[#A1A5AD]">Steps 01–04</span>
            </div>
            <div className="p-2.5 rounded-t-lg bg-[#08090B] border-t-2 border-[#C7F36B] border-x border-[#292D35] flex items-center justify-between">
              <span className="text-[#C7F36B] font-bold">PHASE 2: Review & Execution</span>
              <span className="text-[#A1A5AD]">Steps 05–07</span>
            </div>
            <div className="p-2.5 rounded-t-lg bg-[#08090B] border-t-2 border-blue-400 border-x border-[#292D35] flex items-center justify-between">
              <span className="text-blue-400 font-bold">PHASE 3: Intelligence & Learning</span>
              <span className="text-[#A1A5AD]">Steps 08–10</span>
            </div>
          </div>

          {/* Stepper Buttons (10 Steps) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {steps.map((st, i) => {
              const stepNumber = i + 1;
              const isSelected = selectedStep === stepNumber;
              const Icon = st.icon;

              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setSelectedStep(stepNumber)}
                  className={`group relative p-3 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#151922] border-[#C7F36B] shadow-lg shadow-[#C7F36B]/10 ring-1 ring-[#C7F36B]"
                      : "bg-[#08090B] border-[#292D35] hover:border-[#2455E8]/60 hover:bg-[#151922]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-[#C7F36B]" : "text-[#A1A5AD] group-hover:text-white"
                      }`}
                    >
                      {st.num}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-[#C7F36B]" : "text-[#A1A5AD] group-hover:text-[#2455E8]"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-xs font-semibold leading-tight line-clamp-2 ${
                      isSelected ? "text-white" : "text-[#A1A5AD] group-hover:text-[#F5F6F2]"
                    }`}
                  >
                    {st.title}
                  </span>

                  {/* Indicator Pip */}
                  {isSelected && (
                    <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="rounded-xl bg-[#08090B] border border-[#292D35] p-6 sm:p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & Metadata */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono font-bold text-[#C7F36B]">
                  STEP {current.num} OF 10
                </span>
                <span className="text-xs font-mono text-[#A1A5AD] uppercase">
                  {current.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {current.title}
              </h3>

              <p className="text-base text-[#F5F6F2] font-medium leading-relaxed mb-4">
                {current.summary}
              </p>

              <p className="text-sm text-[#A1A5AD] leading-relaxed mb-6">
                {current.details}
              </p>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#292D35]/80">
                <button
                  type="button"
                  disabled={selectedStep === 1}
                  onClick={() => setSelectedStep((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-1.5 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-[#A1A5AD] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  disabled={selectedStep === 10}
                  onClick={() => setSelectedStep((prev) => Math.min(10, prev + 1))}
                  className="px-3.5 py-1.5 rounded bg-[#2455E8] text-xs font-mono font-bold text-white hover:bg-[#1d46c2] disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Illustrative Engineering Artifact */}
            <div className="lg:col-span-5">
              <div className="rounded-lg bg-[#101216] border border-[#292D35] p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-[#292D35] mb-3">
                  <span className="text-[10px] text-[#A1A5AD] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C7F36B]" />
                    Engineered Artifact / Trace
                  </span>
                  <span className="text-[10px] text-[#C7F36B]">STEP-{current.num} OUTCOME</span>
                </div>

                <div className="p-3 rounded bg-[#08090B] border border-[#292D35] text-[#F5F6F2] text-xs leading-relaxed mb-4">
                  {current.artifact}
                </div>

                {/* Closed Loop Callout on Step 10 */}
                {selectedStep === 10 ? (
                  <div className="p-3 rounded bg-[#151922] border border-[#C7F36B]/40 text-xs text-[#C7F36B] flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 shrink-0 animate-spin" />
                    <span>Feedback Loop Closes: Insights immediately feed back into Step 04 to generate next boundary experiments.</span>
                  </div>
                ) : (
                  <div className="text-[11px] text-[#A1A5AD] flex items-center justify-between">
                    <span>Forward Flow:</span>
                    <span className="text-white">Feeds into Step 0{selectedStep + 1}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Continuous Loop Bottom Ribbon */}
        <div className="mt-8 p-4 rounded-lg bg-[#08090B] border border-[#292D35] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-white">
            <RotateCcw className="w-4 h-4 text-[#C7F36B]" />
            <span className="font-bold">Continuous Engineering Feedback:</span>
            <span className="text-[#A1A5AD]">Step 10 outcomes dynamically refine Step 04 test generation.</span>
          </div>
          <a
            href="#boundaries"
            className="text-[#C7F36B] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Explore Boundary Intelligence</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
