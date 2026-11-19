"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Compass, Activity, AlertTriangle, CheckCircle2, Sliders, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const [activeZone, setActiveZone] = useState<"normal" | "boundary" | "failure">("boundary");

  const telemetryData = {
    normal: {
      title: "Normal Operating Envelope",
      status: "NOMINAL",
      statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      description: "Baseline parameters within approved engineering tolerances (Obstacle Distance: 100 cm).",
      parameter: "Distance: 100cm | Latency: 12ms",
      response: "Sensors report verified reflection pattern. Deterministic output.",
      action: "Regression validation maintained",
    },
    boundary: {
      title: "Boundary Exploration Region",
      status: "EXPLORING LIMIT",
      statusColor: "text-[#C7F36B] bg-[#C7F36B]/10 border-[#C7F36B]/40",
      description: "Operating near the edge of sensitivity where non-linear physics emerge (Obstacle Distance: 20 cm).",
      parameter: "Distance: 20cm | Threshold proximity: 94%",
      response: "Signal attenuation detected. AI probes alternate pulse widths.",
      action: "Next experiment dynamically suggested",
    },
    failure: {
      title: "Outside Approved Limits",
      status: "FAIL ANOMALY",
      statusColor: "text-red-400 bg-red-500/10 border-red-500/30",
      description: "Sensor drop-out / missing echo beyond critical thermal and distance threshold.",
      parameter: "Missing echo response | Error code: ERR_TIME_OUT",
      response: "Critical anomaly isolated. Root-cause synthesis generated.",
      action: "Safety clamp invoked — physical protection active",
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#08090B]"
    >
      {/* Background Engineering Coordinate Grid & Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />

      {/* Decorative Technical Top Grid Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#292D35] to-transparent" />
      <div className="absolute top-24 left-10 hidden xl:flex items-center gap-2 text-[10px] font-mono text-[#A1A5AD]/60 tracking-widest">
        <span>REF: COORD-SYSTEM_v4.2</span>
        <span>•</span>
        <span>AXIS: PARAMETER [X] vs RESPONSE [Y]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Product Positioning & Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Descriptor Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101216] border border-[#292D35] text-[11px] font-mono text-[#C7F36B] tracking-wider mb-6 w-fit shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse"></span>
              <span className="font-semibold">{SITE_CONFIG.descriptor}</span>
              <span className="text-[#A1A5AD] text-[10px]">|</span>
              <span className="text-[#A1A5AD] text-[10px] uppercase font-mono">எல்லை • Boundary</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              ENGINEERED TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F6F2] to-[#A1A5AD]">
                FIND THE LIMITS.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-medium text-[#C7F36B] tracking-tight mb-5">
              Discover failures before they reach the real world.
            </p>

            {/* Core Description */}
            <p className="text-base sm:text-lg text-[#A1A5AD] max-w-2xl font-normal leading-relaxed mb-8">
              {SITE_CONFIG.description}
            </p>

            {/* Core Positioning Callout */}
            <div className="p-4 rounded-lg bg-[#101216]/80 border-l-2 border-[#2455E8] border-r border-t border-b border-[#292D35] mb-8 max-w-xl">
              <p className="text-xs font-mono text-[#A1A5AD] uppercase tracking-wider mb-1">
                Core Positioning
              </p>
              <p className="text-sm font-semibold text-[#F5F6F2]">
                &ldquo;Engineers define what a system should do. <br />
                <span className="text-[#C7F36B]">ELL-AI discovers where it fails.&rdquo;</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#2455E8] text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:bg-[#1d46c2] shadow-lg shadow-[#2455E8]/25 hover:shadow-[#2455E8]/40 active:scale-[0.98]"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-[#C7F36B]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#101216] border border-[#292D35] text-sm font-medium text-[#F5F6F2] transition-all duration-200 hover:border-[#A1A5AD]/60 hover:text-white hover:bg-[#151922]"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight className="w-4 h-4 text-[#A1A5AD]" />
              </a>
            </div>

            {/* Subtle Engineering Credibility Metrics / Workflow Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#292D35]/80 max-w-lg">
              <div>
                <span className="text-[11px] font-mono text-[#A1A5AD] uppercase block">Workflow</span>
                <span className="text-xs font-semibold text-[#F5F6F2] mt-0.5 block">10-Step Feedback</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#A1A5AD] uppercase block">Target Execution</span>
                <span className="text-xs font-semibold text-[#F5F6F2] mt-0.5 block">Sim • HIL • Hardware</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#A1A5AD] uppercase block">Validation Mode</span>
                <span className="text-xs font-semibold text-[#C7F36B] mt-0.5 block">Boundary Exploration</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Technical Boundary Coordinate Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl bg-[#101216] border border-[#292D35] p-5 shadow-2xl overflow-hidden">
              
              {/* Header Bar of Coordinate Console */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#292D35] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2455E8] animate-ping" />
                  <span className="text-xs font-mono font-medium text-[#F5F6F2]">
                    BOUNDARY EXPLORATION MATRIX
                  </span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151922] text-[#A1A5AD] border border-[#292D35]">
                  INTERACTIVE PREVIEW
                </div>
              </div>

              {/* Interactive Zone Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#08090B] rounded-lg border border-[#292D35] mb-4">
                <button
                  type="button"
                  onClick={() => setActiveZone("normal")}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-all duration-200 ${
                    activeZone === "normal"
                      ? "bg-[#151922] text-white border border-[#2455E8]/40 shadow-sm"
                      : "text-[#A1A5AD] hover:text-[#F5F6F2]"
                  }`}
                >
                  01 Nominal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveZone("boundary")}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-all duration-200 ${
                    activeZone === "boundary"
                      ? "bg-[#151922] text-[#C7F36B] border border-[#C7F36B]/40 shadow-sm font-semibold"
                      : "text-[#A1A5AD] hover:text-[#F5F6F2]"
                  }`}
                >
                  02 Boundary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveZone("failure")}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-all duration-200 ${
                    activeZone === "failure"
                      ? "bg-[#151922] text-red-400 border border-red-500/40 shadow-sm font-semibold"
                      : "text-[#A1A5AD] hover:text-[#F5F6F2]"
                  }`}
                >
                  03 Failure
                </button>
              </div>

              {/* Technical SVG Coordinate Plane */}
              <div className="relative aspect-square w-full rounded-lg bg-[#08090B] border border-[#292D35] p-3 flex flex-col justify-between">
                
                {/* SVG Graph */}
                <svg
                  viewBox="0 0 320 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    {/* Linear Gradients */}
                    <linearGradient id="cobaltZone" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2455E8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2455E8" stopOpacity="0.08" />
                    </linearGradient>
                    <linearGradient id="failureZone" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  {[40, 80, 120, 160, 200, 240, 280].map((x) => (
                    <line key={`x-${x}`} x1={x} y1="20" x2={x} y2="240" stroke="#1F232B" strokeWidth="1" />
                  ))}
                  {[50, 90, 130, 170, 210].map((y) => (
                    <line key={`y-${y}`} x1="30" y1={y} x2="290" stroke="#1F232B" strokeWidth="1" />
                  ))}

                  {/* Failure Outside Envelope (Zone C) */}
                  <path
                    d="M 180 30 Q 240 60 270 120 L 290 230 L 180 230 Z"
                    fill="url(#failureZone)"
                  />
                  <text x="210" y="70" fill="#EF4444" fontSize="8" fontFamily="monospace" opacity="0.8">
                    FAILURE UNCERTAINTY
                  </text>

                  {/* Nominal Operating Region (Zone A - Cobalt) */}
                  <path
                    d="M 40 230 L 40 100 Q 110 95 140 140 Q 150 190 150 230 Z"
                    fill="url(#cobaltZone)"
                    stroke="#2455E8"
                    strokeWidth="1.5"
                  />
                  <text x="50" y="180" fill="#2455E8" fontSize="9" fontFamily="monospace" fontWeight="600">
                    NOMINAL ENVELOPE
                  </text>
                  <text x="50" y="195" fill="#A1A5AD" fontSize="7" fontFamily="monospace">
                    Zone A: Requirements Met
                  </text>

                  {/* Dynamic Boundary Horizon Line (Acid Lime) */}
                  <path
                    d="M 140 30 C 145 90 160 140 210 230"
                    stroke="#C7F36B"
                    strokeWidth="2.5"
                    strokeDasharray={activeZone === "boundary" ? "none" : "4 2"}
                    className="transition-all duration-300"
                  />
                  <text x="120" y="45" fill="#C7F36B" fontSize="9" fontFamily="monospace" fontWeight="700">
                    LIMIT BOUNDARY (எல்லை)
                  </text>

                  {/* Test Point 1: Nominal Point */}
                  <circle
                    cx="90"
                    cy="160"
                    r={activeZone === "normal" ? 6 : 4}
                    fill="#2455E8"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveZone("normal")}
                  />
                  <circle cx="90" cy="160" r="10" stroke="#2455E8" strokeWidth="1" strokeOpacity="0.4" />
                  <text x="96" y="155" fill="#F5F6F2" fontSize="7" fontFamily="monospace">
                    TP-01 (100cm)
                  </text>

                  {/* Test Point 2: Frontier Boundary Point */}
                  <circle
                    cx="155"
                    cy="115"
                    r={activeZone === "boundary" ? 7 : 4}
                    fill="#C7F36B"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveZone("boundary")}
                  />
                  <circle
                    cx="155"
                    cy="115"
                    r="12"
                    stroke="#C7F36B"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    className={activeZone === "boundary" ? "animate-ping" : ""}
                  />
                  <text x="168" y="118" fill="#C7F36B" fontSize="8" fontFamily="monospace" fontWeight="bold">
                    TP-02 (20cm EDGE)
                  </text>

                  {/* Test Point 3: Failure Point (Red/Orange Accent) */}
                  <circle
                    cx="235"
                    cy="95"
                    r={activeZone === "failure" ? 6 : 4}
                    fill="#EF4444"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveZone("failure")}
                  />
                  <line x1="230" y1="90" x2="240" y2="100" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="240" y1="90" x2="230" y2="100" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="245" y="98" fill="#EF4444" fontSize="7" fontFamily="monospace">
                    TP-03 (NO ECHO)
                  </text>

                  {/* Continuous Feedback Loop Vector Curve */}
                  <path
                    d="M 235 110 C 240 180 180 260 110 210"
                    stroke="#A1A5AD"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    markerEnd="url(#arrow)"
                  />
                  <text x="160" y="250" fill="#A1A5AD" fontSize="7" fontFamily="monospace">
                    Continuous feedback loop → Learn & Recommend
                  </text>

                  {/* Axis Marks */}
                  <line x1="30" y1="230" x2="300" y2="230" stroke="#292D35" strokeWidth="1.5" />
                  <line x1="30" y1="20" x2="30" y2="230" stroke="#292D35" strokeWidth="1.5" />
                  <text x="250" y="244" fill="#A1A5AD" fontSize="7" fontFamily="monospace">
                    STRESS (X) →
                  </text>
                  <text x="15" y="30" fill="#A1A5AD" fontSize="7" fontFamily="monospace" transform="rotate(-90 15 30)">
                    RESPONSE (Y) →
                  </text>
                </svg>

                {/* Sub-Card: Live State Telemetry for Active Zone */}
                <div className="mt-2 p-2.5 rounded bg-[#101216] border border-[#292D35] text-[11px] font-mono">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#2455E8]" />
                      {telemetryData[activeZone].title}
                    </span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${telemetryData[activeZone].statusColor}`}>
                      {telemetryData[activeZone].status}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#A1A5AD] leading-relaxed mb-1.5">
                    {telemetryData[activeZone].description}
                  </p>
                  <div className="flex items-center justify-between pt-1 border-t border-[#292D35]/60 text-[10px]">
                    <span className="text-[#C7F36B]">{telemetryData[activeZone].parameter}</span>
                    <span className="text-[#A1A5AD]">{telemetryData[activeZone].action}</span>
                  </div>
                </div>

              </div>

              {/* Engineering Annotation Footer */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#A1A5AD]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2455E8]" /> Cobalt: Operating Zone
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" /> Acid Lime: Boundary Limit
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Red: Failure Marker
                </span>
              </div>
            </div>

            {/* Subtle glow backdrop */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2455E8]/20 to-[#C7F36B]/15 blur-2xl -z-10 opacity-50 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#problem"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-[#A1A5AD] hover:text-[#C7F36B] transition-colors"
        aria-label="Scroll down to Problem Section"
      >
        <span className="tracking-widest uppercase">Explore Challenges</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
