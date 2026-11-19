"use client";

import React, { useState } from "react";
import { Monitor, Cpu, Radio, ShieldCheck, CheckCircle2, ArrowRight, Layers, Lock } from "lucide-react";

export default function ExecutionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const environments = [
    {
      num: "01",
      name: "Simulation",
      subtitle: "High-Throughput Virtual Prototyping",
      icon: Monitor,
      status: "Virtual Domain",
      description:
        "Explore hundreds of multi-parameter scenario permutations in a deterministic software sandbox before touching physical test benches.",
      details: [
        "Rapid boundary scanning and parameter combinatorial exploration.",
        "Zero risk of physical hardware damage or sensor degradation.",
        "Ideal for early firmware testing and algorithmic transfer-function verification.",
      ],
      protocols: "Digital Twins • MATLAB/Simulink Models • Synthetic Noise Generators",
      safeguard: "Sandbox isolation with zero physical energy coupling.",
    },
    {
      num: "02",
      name: "Hardware-in-the-Loop (HIL)",
      subtitle: "Real ECU, Emulated Environment",
      icon: Cpu,
      status: "Hybrid Real-Time",
      description:
        "Connect actual production electronic control units to precision signal-generation racks and emulated physical sensors.",
      details: [
        "Real-time CAN, LIN, and Automotive Ethernet bus communication.",
        "Emulation of transient faults, voltage drops, and sensor signal noise.",
        "Bridges pure algorithmic modeling with actual silicon processing constraints.",
      ],
      protocols: "CANoe / Vector • dSPACE Interfaces • NI PXI Instrumentation",
      safeguard: "Automated hardware limit clamps and electrical overcurrent triggers.",
    },
    {
      num: "03",
      name: "Physical Hardware",
      subtitle: "Full-System Operational Validation",
      icon: Radio,
      status: "Physical Actuation",
      description:
        "Execute approved experiments on physical transducers, acoustic rigs, actuators, and connected electronic assemblies.",
      details: [
        "Captures real-world non-ideal acoustics, thermal gradients, and mechanical vibrations.",
        "Validates actual acoustic transducer ring-down and real environmental noise.",
        "Strictly gated behind human engineering sign-off and safety boundary checks.",
      ],
      protocols: "Direct Sensor Harness • Oscilloscope Probe Bridges • Physical Test Benches",
      safeguard: "Mandatory engineer authorization gate prior to physical actuation.",
    },
  ];

  return (
    <section id="execution" className="relative py-28 bg-[#101216] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#2455E8] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2455E8]" />
            <span>06 / EXECUTION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            From virtual experiments <br className="hidden sm:inline" />
            to physical validation.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            ELL-AI is being developed to support validation across multiple execution environments — moving
            gracefully from high-throughput virtual simulations toward connected Hardware-in-the-Loop benches and physical
            actuation under strict engineering control.
          </p>
        </div>

        {/* Three Execution Environments Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {environments.map((env, idx) => {
            const Icon = env.icon;
            const isSelected = activeTab === idx;

            return (
              <div
                key={env.num}
                onClick={() => setActiveTab(idx)}
                className={`group relative rounded-xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#151922] border-2 border-[#2455E8] shadow-2xl shadow-[#2455E8]/10"
                    : "bg-[#08090B] border border-[#292D35] hover:border-[#292D35]/90 hover:bg-[#151922]/40"
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#A1A5AD]">
                      ENV {env.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101216] text-[#C7F36B] border border-[#292D35]">
                      {env.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-[#101216] border border-[#292D35] text-[#2455E8] group-hover:text-[#C7F36B] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{env.name}</h3>
                      <span className="text-xs font-mono text-[#A1A5AD]">{env.subtitle}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A5AD] leading-relaxed my-4">
                    {env.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {env.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#F5F6F2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F36B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Guardrail Info */}
                <div className="pt-4 border-t border-[#292D35]/80 space-y-2 mt-auto">
                  <div className="text-[11px] font-mono text-[#A1A5AD]">
                    <span className="text-zinc-500">Protocols:</span> {env.protocols}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#C7F36B]">
                    <Lock className="w-3 h-3 shrink-0" />
                    <span>Safety: {env.safeguard}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Safety & Protocol Banner */}
        <div className="p-6 rounded-xl bg-[#08090B] border border-[#292D35] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#151922] border border-[#292D35] text-[#C7F36B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Engineering Approval Gate Architecture</h4>
              <p className="text-xs text-[#A1A5AD] mt-0.5">
                Physical test execution strictly respects approved operating limits and requires lead engineer confirmation.
                The platform is designed to protect physical assets from destructive over-stress.
              </p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#A1A5AD] shrink-0 px-3 py-1.5 rounded bg-[#101216] border border-[#292D35]">
            STATUS: ENFORCED SAFETY INTERLOCK
          </div>
        </div>

      </div>
    </section>
  );
}
