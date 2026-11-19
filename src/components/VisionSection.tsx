"use client";

import React, { useState } from "react";
import { Brain, Cpu, Compass, ArrowRight, CheckCircle2, Sliders, Sparkles, Terminal } from "lucide-react";

export default function VisionSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const capabilities = [
    {
      num: "01",
      name: "UNDERSTAND",
      headline: "Cognitive Ingestion of Engineering Knowledge",
      tagline: "Parses requirements, signals, and implicit boundary constraints.",
      icon: Brain,
      color: "text-[#2455E8]",
      borderColor: "border-[#2455E8]",
      bgAccent: "bg-[#2455E8]/10",
      points: [
        "Ingests functional specifications, signal interfaces (CAN/LIN, I2C, SPI), and hardware tolerance limits.",
        "Identifies specification ambiguities, conflicting parameter definitions, and unstated edge assumptions.",
        "Establishes a baseline physical domain map for the Device Under Test (DUT).",
      ],
      interactiveDemo: {
        title: "Requirement Parser Ingestion",
        input: 'Req-302: "Obstacle detection range must trigger below 150cm with <= 20ms response time between -10°C and 55°C."',
        analysis: "Extracted 3 Bounds: Distance [0..150cm], Latency [<=20ms], Temp [-10°C..+55°C]. Flagged: acoustic humidity sensitivity not specified.",
      },
    },
    {
      num: "02",
      name: "EXPERIMENT",
      headline: "Dynamic Generation & Boundary Exploration",
      tagline: "Probes nominal, edge, and multi-factor stress combinations.",
      icon: Compass,
      color: "text-[#C7F36B]",
      borderColor: "border-[#C7F36B]",
      bgAccent: "bg-[#C7F36B]/10",
      points: [
        "Synthesizes normal operating vectors, threshold boundary probes, and out-of-boundary stress combinations.",
        "Targeted execution across simulation environments, Hardware-in-the-Loop (HIL) benches, and lab test rigs.",
        "Ensures physical safety limits and strict engineering approval gates are enforced prior to hardware excitation.",
      ],
      interactiveDemo: {
        title: "Vector Exploration Matrix",
        input: "Selected Probe: Obstacle Distance 20cm @ High Temp +54°C (Simulated Acoustic Attenuation)",
        analysis: "Simulated pulse generation with 0.95 edge proximity factor. Target ready for HIL runner dispatch.",
      },
    },
    {
      num: "03",
      name: "RECOMMEND",
      headline: "Failure Synthesis & Closed-Loop Direction",
      tagline: "Transforms raw waveform telemetry into the next critical test.",
      icon: Sparkles,
      color: "text-blue-400",
      borderColor: "border-blue-400",
      bgAccent: "bg-blue-500/10",
      points: [
        "Compares measured physical responses against expected mathematical transfer functions.",
        "Isolates failure signatures, pinpoints root-cause hints, and extracts precise reproduction steps.",
        "Recommends what to test next based on empirical outcomes rather than blind brute force.",
      ],
      interactiveDemo: {
        title: "Next Experiment Recommendation",
        input: "Outcome: Drop-out at 20cm when ambient temperature exceeds +52°C. Return echo SNR dropped 18dB.",
        analysis: "Recommendation: Execute localized frequency sweep between 38kHz-42kHz to verify acoustic resonance shift.",
      },
    },
  ];

  return (
    <section id="vision" className="relative py-28 bg-[#101216] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#C7F36B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
            <span>02 / VISION & METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-5">
            From manual validation <br className="hidden sm:inline" />
            to intelligent discovery.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            ELL-AI aims to transform how physical systems are validated. Instead of relying entirely on manually
            written, static test plans, the platform leverages engineering requirements and empirical test outcomes to
            help explore meaningful validation experiments and discover boundary phenomena.
          </p>
        </div>

        {/* Featured Big Brand Statement */}
        <div className="mb-20 p-8 sm:p-12 rounded-2xl bg-[#08090B] border border-[#2455E8]/40 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#2455E8]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#C7F36B]/10 blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-[#A1A5AD] block mb-3">
            The Validation Paradigm Shift
          </span>
          <blockquote className="text-2xl sm:text-4xl font-extrabold text-[#F5F6F2] max-w-4xl mx-auto tracking-tight leading-snug">
            &ldquo;The real intelligence is not just running tests. <br className="hidden md:inline" />
            <span className="text-[#C7F36B]">It&apos;s knowing what to test next.&rdquo;</span>
          </blockquote>
          <p className="text-sm font-mono text-[#A1A5AD] mt-4">
            Closed-loop physical systems discovery • Continuous learning from edge failures
          </p>
        </div>

        {/* Three Connected Major Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isSelected = activeStage === index;
            return (
              <div
                key={cap.num}
                onClick={() => setActiveStage(index)}
                className={`group relative rounded-xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#151922] border-2 border-[#2455E8] shadow-2xl shadow-[#2455E8]/15"
                    : "bg-[#08090B] border border-[#292D35] hover:border-[#292D35]/90 hover:bg-[#151922]/50"
                }`}
              >
                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#A1A5AD]">
                      PHASE {cap.num}
                    </span>
                    <div
                      className={`p-2.5 rounded-lg border ${
                        isSelected ? "bg-[#2455E8]/20 border-[#2455E8] text-[#C7F36B]" : "bg-[#101216] border-[#292D35] text-[#A1A5AD]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white mb-1">
                    {cap.name}
                  </h3>
                  <h4 className="text-xs font-mono text-[#C7F36B] uppercase tracking-wider mb-4">
                    {cap.headline}
                  </h4>

                  <p className="text-sm text-[#A1A5AD] leading-relaxed mb-6">
                    {cap.tagline}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {cap.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F6F2] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F36B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-Interactive Demonstration Snippet */}
                <div className="pt-4 border-t border-[#292D35]/80 mt-auto">
                  <div className="p-3 rounded bg-[#08090B] border border-[#292D35] font-mono text-[11px]">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#A1A5AD] uppercase mb-1">
                      <Terminal className="w-3 h-3 text-[#2455E8]" />
                      <span>{cap.interactiveDemo.title}</span>
                    </div>
                    <div className="text-[#A1A5AD] text-[10px] truncate mb-1">
                      <span className="text-zinc-500">INPUT:</span> {cap.interactiveDemo.input}
                    </div>
                    <div className="text-[#C7F36B] text-[10px]">
                      <span className="text-zinc-400">ANALYSIS:</span> {cap.interactiveDemo.analysis}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Workflow Connection Ribbon */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-[#A1A5AD]">
          <span>Continuous Integration Loop:</span>
          <span className="text-white">Understand</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#2455E8]" />
          <span className="text-white">Experiment</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C7F36B]" />
          <span className="text-white">Recommend</span>
          <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[#C7F36B] font-semibold">Refine Limits</span>
        </div>

      </div>
    </section>
  );
}
