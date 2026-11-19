"use client";

import React, { useState } from "react";
import { Compass, ShieldAlert, CheckCircle, AlertTriangle, Layers, Info, Sliders } from "lucide-react";

export default function BoundarySection() {
  const [selectedRegion, setSelectedRegion] = useState<"A" | "B" | "C">("B");
  const [stressFactor, setStressFactor] = useState<number>(68);

  const regions = {
    A: {
      code: "REGION A",
      name: "Normal Operating Region",
      tagline: "Deterministic & Approved Domain",
      color: "text-[#2455E8]",
      borderColor: "border-[#2455E8]",
      badge: "APPROVED ENVELOPE",
      badgeStyle: "bg-[#2455E8]/10 text-blue-400 border-[#2455E8]/30",
      description:
        "The system operates comfortably within its defined, expected engineering specifications. Signals are clean, tolerances are wide, and outputs conform strictly to nominal transfer functions.",
      engineeringContext:
        "Example: Ambient Temp 25°C, Voltage 12.0V, Obstacle Distance 100cm. Standard factory regression suites thoroughly cover this region.",
      ellAiRole:
        "Monitors baseline conformance and maintains continuous regression tracking against original functional requirements.",
    },
    B: {
      code: "REGION B",
      name: "Boundary Region (எல்லை)",
      tagline: "The Frontier of Behavioral Transition",
      color: "text-[#C7F36B]",
      borderColor: "border-[#C7F36B]",
      badge: "CORE EXPLORATION TARGET",
      badgeStyle: "bg-[#C7F36B]/10 text-[#C7F36B] border-[#C7F36B]/40",
      description:
        "The system approaches its approved operating limits. Non-linear physical behaviors, acoustic attenuation, timing jitter, or thermal saturation begin to manifest.",
      engineeringContext:
        "Example: Ambient Temp 52°C, Voltage 9.6V (Brownout threshold), Obstacle Distance 21cm. Here is where subtle behavioral drifts start.",
      ellAiRole:
        "ELL-AI generates micro-stepped exploratory probes in this zone to map the exact boundary horizon and determine where deterministic behavior transitions.",
    },
    C: {
      code: "REGION C",
      name: "Outside Approved Limits",
      tagline: "Unapproved Regimes & Safe Response States",
      color: "text-red-400",
      borderColor: "border-red-500",
      badge: "SAFETY CLAMP EVALUATED",
      badgeStyle: "bg-red-500/10 text-red-400 border-red-500/30",
      description:
        "Conditions exceed the system's approved operational limits. In this region, ELL-AI validates that the system's specified safe-state responses, fault codes, and physical protection mechanisms execute properly.",
      engineeringContext:
        "Example: Total sensor echo dropout or over-voltage transient. The test validates that the ECU enters failsafe mode without causing physical damage.",
      ellAiRole:
        "Unsafe physical experiments are NEVER executed on hardware. Simulations or controlled safety clamps verify failsafe shutdown protocols.",
    },
  };

  const active = regions[selectedRegion];

  return (
    <section id="boundaries" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient-boundary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-[#C7F36B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
            <span>05 / BOUNDARY INTELLIGENCE (எல்லை)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            Know where the system works. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] to-[#2455E8]">
              Discover where it starts to fail.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            Every physical system has defined operating conditions. ELL-AI is built to help engineers understand normal
            behavior, systematically explore operating boundaries, and identify multi-variable conditions that lead to
            unexpected failure.
          </p>
        </div>

        {/* Region Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {(["A", "B", "C"] as const).map((key) => {
            const reg = regions[key];
            const isSelected = selectedRegion === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedRegion(key)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-[#151922] border-2 border-current shadow-xl"
                    : "bg-[#101216] border-[#292D35] hover:border-[#A1A5AD]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${reg.color}`}>{reg.code}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${reg.badgeStyle}`}>
                    {reg.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{reg.name}</h3>
                <p className="text-xs text-[#A1A5AD] line-clamp-2">{reg.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* The Big Interactive Boundary Visual & Technical Workspace */}
        <div className="rounded-2xl bg-[#101216] border border-[#292D35] p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols): Interactive Technical Coordinate Visual */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[#08090B] border border-[#292D35] p-4 sm:p-6 relative">
                
                {/* Header inside graph */}
                <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#292D35] mb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#2455E8]" />
                    <span className="text-white font-bold">2D BOUNDARY TOPOLOGY MAP</span>
                  </div>
                  <span className="text-[10px] text-[#A1A5AD]">STRESS vs SYSTEM RESPONSE</span>
                </div>

                {/* SVG Visual Canvas */}
                <div className="relative aspect-[16/11] w-full">
                  <svg
                    viewBox="0 0 500 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="regionACobalt" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2455E8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2455E8" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="regionBBoundary" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#C7F36B" stopOpacity="0.04" />
                      </linearGradient>
                      <linearGradient id="regionCFailure" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {/* Coordinate Grid Lines */}
                    {[60, 120, 180, 240, 300, 360, 420].map((x) => (
                      <line key={`gx-${x}`} x1={x} y1="30" x2={x} y2="290" stroke="#181B22" strokeWidth="1" />
                    ))}
                    {[60, 110, 160, 210, 260].map((y) => (
                      <line key={`gy-${y}`} x1="50" y1={y} x2="460" stroke="#181B22" strokeWidth="1" />
                    ))}

                    {/* REGION C: Outside Limits Area */}
                    <path
                      d="M 280 40 Q 380 90 440 220 L 460 290 L 280 290 Z"
                      fill="url(#regionCFailure)"
                      className="cursor-pointer transition-opacity hover:opacity-90"
                      onClick={() => setSelectedRegion("C")}
                    />
                    <text x="340" y="90" fill="#EF4444" fontSize="10" fontFamily="monospace" fontWeight="600">
                      REGION C: OUTSIDE LIMITS
                    </text>
                    <text x="340" y="105" fill="#A1A5AD" fontSize="8" fontFamily="monospace">
                      Failsafe evaluation & safe shutdown
                    </text>

                    {/* REGION B: Boundary Buffer Zone */}
                    <path
                      d="M 190 40 C 230 110 260 170 330 290 L 280 290 C 220 190 190 120 160 40 Z"
                      fill="url(#regionBBoundary)"
                      className="cursor-pointer transition-opacity hover:opacity-90"
                      onClick={() => setSelectedRegion("B")}
                    />

                    {/* REGION A: Nominal Envelope */}
                    <path
                      d="M 50 290 L 50 120 Q 120 110 160 160 Q 190 220 200 290 Z"
                      fill="url(#regionACobalt)"
                      stroke="#2455E8"
                      strokeWidth="2"
                      className="cursor-pointer transition-opacity hover:opacity-90"
                      onClick={() => setSelectedRegion("A")}
                    />
                    <text x="70" y="210" fill="#2455E8" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      REGION A: NOMINAL
                    </text>
                    <text x="70" y="225" fill="#A1A5AD" fontSize="8" fontFamily="monospace">
                      Verified Approved Domain
                    </text>

                    {/* THE CRITICAL BOUNDARY HORIZON (Acid Lime Curve) */}
                    <path
                      d="M 190 40 C 220 110 250 170 310 290"
                      stroke="#C7F36B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <text x="200" y="35" fill="#C7F36B" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      CRITICAL BOUNDARY (எல்லை)
                    </text>

                    {/* Dynamic Simulated Test Probes */}
                    {/* Normal Probe */}
                    <circle cx="110" cy="180" r="5" fill="#2455E8" />
                    <text x="120" y="184" fill="#F5F6F2" fontSize="8" fontFamily="monospace">
                      P_Nominal (100cm)
                    </text>

                    {/* Frontier Probes (Animated) */}
                    <circle cx="215" cy="120" r="6" fill="#C7F36B" className="animate-pulse" />
                    <circle cx="215" cy="120" r="14" stroke="#C7F36B" strokeWidth="1" strokeOpacity="0.4" />
                    <text x="228" y="115" fill="#C7F36B" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      ELL-AI Probe: 20cm
                    </text>

                    <circle cx="240" cy="170" r="5" fill="#C7F36B" />
                    <text x="250" y="174" fill="#C7F36B" fontSize="8" fontFamily="monospace">
                      P_NearLimit (21cm)
                    </text>

                    {/* Failure Anomaly Probes */}
                    <circle cx="370" cy="140" r="6" fill="#EF4444" />
                    <line x1="365" y1="135" x2="375" y2="145" stroke="#FFFFFF" strokeWidth="1.5" />
                    <line x1="375" y1="135" x2="365" y2="145" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="382" y="144" fill="#EF4444" fontSize="8" fontFamily="monospace">
                      Dropout Anomaly
                    </text>

                    {/* Axis Guides */}
                    <line x1="50" y1="290" x2="470" y2="290" stroke="#292D35" strokeWidth="2" />
                    <line x1="50" y1="30" x2="50" y2="290" stroke="#292D35" strokeWidth="2" />
                    <text x="400" y="308" fill="#A1A5AD" fontSize="9" fontFamily="monospace">
                      OPERATING STRESS →
                    </text>
                    <text x="30" y="45" fill="#A1A5AD" fontSize="9" fontFamily="monospace" transform="rotate(-90 30 45)">
                      UNCERTAINTY →
                    </text>
                  </svg>
                </div>

                {/* Sub-Legend */}
                <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#A1A5AD] pt-3 border-t border-[#292D35]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2455E8]" /> Region A: Nominal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#C7F36B]" /> Region B: Boundary Limits (எல்லை)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-red-400" /> Region C: Outside Limits
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Deep Technical Context Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold tracking-wider ${active.color}`}>
                    {active.code}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${active.badgeStyle}`}>
                    {active.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  {active.name}
                </h3>

                <p className="text-xs font-mono text-[#C7F36B] uppercase mb-4">
                  {active.tagline}
                </p>

                <p className="text-sm text-[#F5F6F2] leading-relaxed mb-4">
                  {active.description}
                </p>
              </div>

              {/* Engineering Context Callout */}
              <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35] text-xs font-mono space-y-2">
                <div className="text-[#A1A5AD] uppercase text-[10px]">Engineering Context:</div>
                <div className="text-white leading-relaxed">{active.engineeringContext}</div>
              </div>

              {/* ELL-AI Exploration Role */}
              <div className="p-4 rounded-lg bg-[#151922] border-l-2 border-l-[#C7F36B] border border-[#292D35] text-xs font-mono space-y-1.5">
                <div className="text-[#C7F36B] font-bold text-[10px] uppercase flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  ELL-AI Intelligence Role:
                </div>
                <div className="text-[#A1A5AD] leading-relaxed">{active.ellAiRole}</div>
              </div>

              {/* Safety Mandate Notice */}
              <div className="p-3 rounded bg-[#08090B] border border-[#292D35] text-[11px] font-mono text-[#A1A5AD] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
                <span>
                  Physical safety mandate: Unapproved or destructive stresses are isolated to virtual simulation environments.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
