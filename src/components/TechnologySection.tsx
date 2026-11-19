"use client";

import React, { useState } from "react";
import { BookOpen, BrainCircuit, PlayCircle, LineChart, ArrowDown, ChevronRight, Layers, Sparkles } from "lucide-react";

export default function TechnologySection() {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      num: "01",
      name: "Engineering Knowledge Layer",
      icon: BookOpen,
      color: "text-[#2455E8]",
      borderColor: "border-[#2455E8]",
      badge: "GROUND TRUTH",
      summary: "Understand engineering specifications, requirements, parameters and previous validation information.",
      details:
        "Extracts explicit and implicit physical constraints from system specifications, interface control documents, signal catalogs, and prior test logs. Converts human engineering context into a structured, queryable knowledge base.",
      components: [
        "Requirement specification parsing",
        "Signal & parameter boundary definitions",
        "Historical test outcome repository",
        "Physical tolerance mapping",
      ],
    },
    {
      num: "02",
      name: "AI Reasoning Layer",
      icon: BrainCircuit,
      color: "text-[#C7F36B]",
      borderColor: "border-[#C7F36B]",
      badge: "HYPOTHESIS ENGINE",
      summary: "Interpret engineering requests, identify relevant knowledge and help determine appropriate test scenarios.",
      details:
        "Evaluates the parameter space to identify unexplored boundaries, ambiguous conditions, and high-risk multi-variable intersections. Formulates targeted test scenarios spanning nominal, edge, and stress regimes.",
      components: [
        "Natural language intent interpretation",
        "Boundary hypothesis generation",
        "Combinatorial parameter exploration",
        "Safety limit checking & risk assessment",
      ],
    },
    {
      num: "03",
      name: "Validation Execution Layer",
      icon: PlayCircle,
      color: "text-blue-400",
      borderColor: "border-blue-400",
      badge: "DISPATCH INTERFACE",
      summary: "Connect approved test scenarios to supported simulation and hardware execution environments.",
      details:
        "Bridges abstract test vectors with physical and virtual execution environments. Enforces human engineer approval gates and safety clamp limits before any hardware excitation commences.",
      components: [
        "Simulation environment connectors",
        "Hardware-in-the-Loop (HIL) adapters",
        "Signal bus & telemetry capture",
        "Deterministic test orchestrator",
      ],
    },
    {
      num: "04",
      name: "Engineering Intelligence Layer",
      icon: LineChart,
      color: "text-emerald-400",
      borderColor: "border-emerald-400",
      badge: "CLOSED-LOOP SYNTHESIS",
      summary: "Analyse results, compare expected and actual behaviour, identify failure patterns and recommend further experiments.",
      details:
        "Transforms raw waveform logs and bus traces into actionable engineering insights. Identifies behavioral transitions near limits, isolates root-cause clues, and recommends what to test next.",
      components: [
        "Automated delta comparison (Expected vs Observed)",
        "Boundary shift & drift detection",
        "Root-cause diagnostic synthesis",
        "Next experiment recommendation loop",
      ],
    },
  ];

  return (
    <section id="technology" className="relative py-28 bg-[#101216] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#2455E8] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2455E8]" />
            <span>08 / ARCHITECTURE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            Intelligence built around <br className="hidden sm:inline" />
            engineering knowledge.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            ELL-AI is conceptualized as a four-layer architecture that grounds AI reasoning in rigorous physical
            engineering principles — connecting domain specifications to execution environments and actionable diagnostic
            learning.
          </p>
        </div>

        {/* Four Conceptual Layers Interactive Architecture Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): The Vertical Visual Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="text-xs font-mono text-[#A1A5AD] uppercase px-1 mb-1 flex items-center justify-between">
              <span>Architectural Stack</span>
              <span>Click to inspect layer</span>
            </div>

            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === index;

              return (
                <div key={layer.num} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveLayer(index)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#151922] border-2 border-[#2455E8] shadow-lg shadow-[#2455E8]/10"
                        : "bg-[#08090B] border-[#292D35] hover:border-[#A1A5AD]/40 hover:bg-[#151922]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#101216] border border-[#292D35] text-[#2455E8]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#A1A5AD]">LAYER {layer.num}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#101216] text-[#C7F36B] border border-[#292D35]">
                            {layer.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-0.5">{layer.name}</h4>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#C7F36B] translate-x-1" : "text-[#A1A5AD]"
                      }`}
                    />
                  </button>

                  {/* Flow Arrow between layers */}
                  {index < 3 && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-[#292D35]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Detailed Layer Inspection Panel */}
          <div className="lg:col-span-7 rounded-2xl bg-[#08090B] border border-[#292D35] p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#292D35] mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#2455E8]">
                  LAYER {layers[activeLayer].num} DEEP DIVE
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-xs font-mono text-[#C7F36B]">
                  {layers[activeLayer].badge}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#A1A5AD]">CONCEPTUAL ARCHITECTURE</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {layers[activeLayer].name}
            </h3>

            <p className="text-sm text-[#C7F36B] font-mono mb-4">
              {layers[activeLayer].summary}
            </p>

            <p className="text-sm text-[#A1A5AD] leading-relaxed mb-6">
              {layers[activeLayer].details}
            </p>

            {/* Core Subsystem Components */}
            <div className="p-5 rounded-xl bg-[#101216] border border-[#292D35]">
              <span className="text-xs font-mono text-[#A1A5AD] uppercase tracking-wider block mb-3">
                Core Functional Subsystems
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {layers[activeLayer].components.map((comp, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#F5F6F2] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Disclaimer */}
            <p className="mt-6 text-[11px] font-mono text-[#A1A5AD] border-t border-[#292D35]/80 pt-4">
              * Note: This represents the conceptual architecture vision behind the ELL-AI platform. Capabilities are
              incrementally developed and validated with engineering partners.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
