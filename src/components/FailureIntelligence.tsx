"use client";

import React, { useState } from "react";
import { AlertOctagon, HelpCircle, ArrowRight, CheckCircle, XCircle, Search, Sliders, Shield, Terminal, Info } from "lucide-react";

export default function FailureIntelligence() {
  const [selectedCase, setSelectedCase] = useState<"case1" | "case2">("case1");

  const cases = {
    case1: {
      title: "Obstacle Detection Boundary Dropout",
      testId: "TC-OBSTACLE-20CM-EDGE",
      subsystem: "Front Ultrasonic Transceiver Cluster",
      requirement: "REQ-ENV-402: Target detection within approved operating range (min 20cm).",
      condition: "Obstacle Distance: 20cm @ Ambient Temp +54°C, Transducer pulse voltage 14.2V",
      expected: "Echo reception confirmed within 1.18 ms ± 0.05 ms with amplitude > 1.2V.",
      actual: "Echo response missing. Receiver timed out at 15.0 ms with zero valid return peak.",
      result: "FAIL",
      explanation:
        "The observed response did not meet expected detection behavior. High ambient temperature caused resonant frequency drift in the piezo crystal (+41.2kHz vs 40.0kHz nominal), attenuating return echo below receiver comparator threshold.",
      reproduction: [
        "Set acoustic chamber temperature to +54°C.",
        "Position reflective acoustic target at exactly 20.0 cm axial distance.",
        "Transmit 40.0 kHz standard excitation pulse train (16 pulses).",
        "Observe RX waveform on Channel B — echo amplitude drops to 140mV (below 450mV detection floor).",
      ],
      investigation:
        "Review sensor response curve, signal amplification threshold, and transducer temperature compensation coefficients in firmware Rev 2.4.",
    },
    case2: {
      caseTitle: "CAN Bus Arbitration Delay at Over-Voltage Boundary",
      title: "ECU High-Speed Bus Communication Delay",
      testId: "TC-CAN-OVERVOLT-BOUNDARY",
      subsystem: "Chassis Electronic Control Unit (ECU)",
      requirement: "REQ-BUS-108: Priority alert frames must arbitrate and broadcast in < 5.0ms.",
      condition: "Supply Voltage: 15.8V (Upper operating bound) + 85% Bus Traffic Load",
      expected: "Frame 0x120 broadcast within 4.8 ms without frame error or retransmission.",
      actual: "Frame latency delayed to 11.4 ms due to 3 repeated CRC bit error retransmissions.",
      result: "FAIL",
      explanation:
        "Operating at upper voltage boundary caused transient thermal throttling in CAN transceiver driver, inducing slew rate degradation and bus edge ringing.",
      reproduction: [
        "Elevate DC supply voltage to 15.8V on bench line.",
        "Generate 85% background CAN traffic on 500kbps channel.",
        "Trigger emergency braking message 0x120.",
        "Capture logic analyzer trace showing bus recessive-to-dominant fall time degradation.",
      ],
      investigation:
        "Inspect CAN transceiver termination resistor tolerance under elevated supply voltage. Verify decoupling capacitor ESR values at high temperature.",
    },
  };

  const current = cases[selectedCase];

  return (
    <section id="failure-intelligence" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Watermark */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-red-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>07 / FAILURE INTELLIGENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
              A failure should tell you more <br className="hidden sm:inline" />
              than just PASS or FAIL.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
              A failed test is not just a negative result. It is an engineering opportunity to understand how a
              physical system behaves under particular boundary conditions — turning raw test anomalies into actionable
              diagnostic clarity.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#151922] border border-[#292D35] text-[11px] font-mono text-[#A1A5AD] shrink-0">
            <Info className="w-4 h-4 text-[#C7F36B]" />
            <span>ILLUSTRATIVE FAILURE INVESTIGATION DEMONSTRATION</span>
          </div>
        </div>

        {/* Case Toggle Controls */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#A1A5AD] uppercase">Investigate Scenario:</span>
          <button
            type="button"
            onClick={() => setSelectedCase("case1")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              selectedCase === "case1"
                ? "bg-[#2455E8] text-white font-bold"
                : "bg-[#101216] text-[#A1A5AD] border border-[#292D35] hover:text-white"
            }`}
          >
            01 / Sensor Detection Boundary
          </button>
          <button
            type="button"
            onClick={() => setSelectedCase("case2")}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              selectedCase === "case2"
                ? "bg-[#2455E8] text-white font-bold"
                : "bg-[#101216] text-[#A1A5AD] border border-[#292D35] hover:text-white"
            }`}
          >
            02 / High-Voltage CAN Latency
          </button>
        </div>

        {/* The Failure Intelligence Interface Panel */}
        <div className="rounded-2xl bg-[#101216] border border-[#292D35] shadow-2xl overflow-hidden">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#08090B] border-b border-[#292D35] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-red-950/40 text-red-400 border border-red-500/30">
                <AlertOctagon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A1A5AD] uppercase block">
                  {current.testId} • {current.subsystem}
                </span>
                <h3 className="text-base font-bold text-white">{current.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400" />
                <span>RESULT: {current.result}</span>
              </div>
            </div>
          </div>

          {/* Core Structured Investigation Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Row 1: Condition & Requirement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35] text-xs font-mono">
                <span className="text-[10px] text-[#A1A5AD] uppercase tracking-wider block mb-1">
                  Which Requirement Was Involved?
                </span>
                <p className="text-[#F5F6F2] font-medium leading-relaxed">{current.requirement}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35] text-xs font-mono">
                <span className="text-[10px] text-[#A1A5AD] uppercase tracking-wider block mb-1">
                  Which Condition Triggered The Failure?
                </span>
                <p className="text-orange-300 font-medium leading-relaxed">{current.condition}</p>
              </div>
            </div>

            {/* Row 2: Expected vs Actual Behaviour */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#08090B] border-l-4 border-l-[#2455E8] border border-[#292D35]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#2455E8] font-bold uppercase">Expected Behaviour</span>
                  <CheckCircle className="w-4 h-4 text-[#2455E8]" />
                </div>
                <p className="text-xs font-mono text-zinc-300 leading-relaxed">{current.expected}</p>
              </div>

              <div className="p-5 rounded-lg bg-[#08090B] border-l-4 border-l-red-500 border border-[#292D35]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-red-400 font-bold uppercase">Actual Observed Behaviour</span>
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-xs font-mono text-white leading-relaxed font-medium">{current.actual}</p>
              </div>
            </div>

            {/* Row 3: Failure Explanation (Deep Root-Cause Hint) */}
            <div className="p-5 rounded-lg bg-[#151922] border border-[#292D35]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] font-bold uppercase mb-2">
                <Search className="w-4 h-4" />
                <span>Failure Explanation & Physical Root-Cause Hint</span>
              </div>
              <p className="text-xs font-mono text-[#F5F6F2] leading-relaxed">
                {current.explanation}
              </p>
            </div>

            {/* Row 4: Reproduction Steps & Recommended Investigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Reproduction Steps */}
              <div className="p-5 rounded-lg bg-[#08090B] border border-[#292D35]">
                <div className="text-xs font-mono text-[#A1A5AD] uppercase font-bold mb-3 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#2455E8]" />
                  <span>Deterministic Reproduction Sequence</span>
                </div>
                <ol className="space-y-2 text-xs font-mono text-zinc-300">
                  {current.reproduction.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2455E8] font-bold shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Recommended Investigation */}
              <div className="p-5 rounded-lg bg-[#151922] border-l-4 border-l-[#C7F36B] border border-[#292D35] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#C7F36B] uppercase font-bold mb-2 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#C7F36B]" />
                    <span>What Should Be Investigated Next?</span>
                  </div>
                  <p className="text-xs font-mono text-white leading-relaxed">
                    {current.investigation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#292D35]/60 text-[11px] font-mono text-[#A1A5AD]">
                  <span>Action: </span>
                  <strong className="text-[#C7F36B]">Dispatch next automated boundary sweep probe</strong>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Banner */}
          <div className="px-6 py-3 bg-[#08090B] border-t border-[#292D35] flex items-center justify-between text-[11px] font-mono text-[#A1A5AD]">
            <span>ELL-AI FAILURE REASONING ENGINE • EVIDENCE SYNTHESIS</span>
            <span className="text-zinc-500">Not live data — Illustrative demonstration</span>
          </div>

        </div>

      </div>
    </section>
  );
}
