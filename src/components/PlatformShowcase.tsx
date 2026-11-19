"use client";

import React, { useState } from "react";
import {
  Sliders,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Cpu,
  Layers,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  Sparkles,
  Info
} from "lucide-react";

export default function PlatformShowcase() {
  const [activeScenario, setActiveScenario] = useState<"01" | "02" | "03">("02");
  const [isSimulating, setIsSimulating] = useState(false);

  const scenarios = {
    "01": {
      tag: "TEST SCENARIO 01 — NORMAL",
      name: "Nominal Obstacle Distance",
      badge: "PASS",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      obstacleDistance: "100 cm",
      expected: "Detect obstacle correctly within defined operating conditions.",
      actual: "Echo received in 5.88 ms with SNR 24 dB. Object identified at 99.8 cm.",
      status: "COMPLIANT WITH SPECIFICATION",
      statusDetail: "Deterministic echo profile. Acoustic reflection amplitude well within nominal envelope.",
      sensorData: [
        { time: "0.0ms", signal: "TX Pulse (40kHz)" },
        { time: "2.4ms", signal: "Ambient Noise: Low" },
        { time: "5.88ms", signal: "Echo RX: 3.2V Peak" },
        { time: "8.0ms", signal: "DSP Filtered: Confirmed" },
      ],
      recommendation:
        "Nominal parameters validated. Proceed to sweep adjacent temperature profiles (-10°C to +45°C).",
      nextTest: "EXP-104: Thermal Variation Sweep at 100cm",
      failureExplanation: null,
      operatingBoundMargin: "Margin: +400% above limit boundary",
    },
    "02": {
      tag: "TEST SCENARIO 02 — BOUNDARY",
      name: "Near-Limit Horizon Exploration",
      badge: "BOUNDARY OBSERVED",
      badgeClass: "bg-[#C7F36B]/10 text-[#C7F36B] border-[#C7F36B]/40",
      obstacleDistance: "20 cm",
      expected: "Validate obstacle detection near the defined operating limit (Minimum distance boundary).",
      actual: "Echo received in 1.18 ms. Near-field ring-down damping overlapping primary return pulse.",
      status: "BOUNDARY EDGE DETECTED",
      statusDetail: "Signal attenuation and transducer blind-zone proximity detected. Response is valid but margin is critically narrow.",
      sensorData: [
        { time: "0.0ms", signal: "TX Pulse (40kHz)" },
        { time: "0.6ms", signal: "Transducer Ringing" },
        { time: "1.18ms", signal: "Echo RX: 0.82V (Near Blind Zone)" },
        { time: "1.5ms", signal: "DSP Threshold: Near Margin" },
      ],
      recommendation:
        "Operating near transducer ring-down boundary. Recommend probing 18cm, 16cm, and reduced excitation voltage to locate exact blind-spot cutoff.",
      nextTest: "EXP-208: Blind-Zone Ring-Down Boundary Fine-Step Sweep",
      failureExplanation: "Operating envelope margin reduced to 4.2%. Behavior transition detected.",
      operatingBoundMargin: "Margin: 4.2% from sensor blind-zone limit",
    },
    "03": {
      tag: "TEST SCENARIO 03 — OUTSIDE APPROVED CONDITIONS",
      name: "Out-of-Envelope Stress & Dropout",
      badge: "FAIL (ANOMALY)",
      badgeClass: "bg-red-500/10 text-red-400 border-red-500/30",
      obstacleDistance: "Sensor Response: Missing / Invalid",
      expected: "Identify the failure condition and follow the specified safe response state.",
      actual: "Echo reception timed out (>15 ms). Transducer ring-down completely masked echo return.",
      status: "SPECIFICATION VIOLATION / DROPOUT",
      statusDetail: "The observed response did not meet expected detection behavior. Sensor output failed to assert valid distance flag.",
      sensorData: [
        { time: "0.0ms", signal: "TX Pulse (40kHz High Stress)" },
        { time: "1.2ms", signal: "Prolonged Transducer Saturation" },
        { time: "6.0ms", signal: "No Distinct Peak Detected" },
        { time: "15.0ms", signal: "TIMEOUT FLAG: 0xEE_DROPOUT" },
      ],
      recommendation:
        "Review sensor damping resistor, firmware blanking period, and signal quality under multi-factor stress. Conduct hardware impedance check on transducer line.",
      nextTest: "EXP-312: Firmware Blanking Period Calibration & Damping Sweep",
      failureExplanation: "Critical failure: Signal dropout without immediate safe-state bus notification.",
      operatingBoundMargin: "Boundary Exceeded: Unapproved operation regime",
    },
  };

  const current = scenarios[activeScenario];

  const handleSimulate = (key: "01" | "02" | "03") => {
    setIsSimulating(true);
    setActiveScenario(key);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section id="platform" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Watermark Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-[#2455E8] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2455E8]" />
              <span>03 / THE PLATFORM EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
              Meet ELL-AI.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
              An integrated engineering validation experience designed to connect requirements, intelligent test
              generation, execution, and failure analysis.
            </p>
          </div>

          {/* Mandatory Watermark Notice per Prompt Requirement */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#151922] border border-[#C7F36B]/30 text-[11px] font-mono text-[#C7F36B] shrink-0">
            <Info className="w-4 h-4 text-[#C7F36B]" />
            <span className="font-semibold uppercase tracking-wider">
              ILLUSTRATIVE PRODUCT DEMONSTRATION — NOT LIVE DATA
            </span>
          </div>
        </div>

        {/* The Workspace Interface Container */}
        <div className="rounded-2xl bg-[#101216] border border-[#292D35] shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#08090B] border-b border-[#292D35]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              </div>
              <div className="h-4 w-px bg-[#292D35]" />
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F6F2]">
                <Cpu className="w-4 h-4 text-[#2455E8]" />
                <span className="font-bold">ELL-AI WORKSPACE</span>
                <span className="text-[#A1A5AD]">/</span>
                <span className="text-[#A1A5AD]">DUT: Ultrasonic Parking Sensor Module (Rev-2.4)</span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-mono">
              <span className="text-[#A1A5AD]">Target: <span className="text-white">CAN / HIL Rig 03</span></span>
              <span className="text-[#A1A5AD]">Mode: <span className="text-[#C7F36B]">Boundary Discovery</span></span>
              <span className="px-2 py-0.5 rounded bg-[#151922] text-[#C7F36B] border border-[#C7F36B]/20">
                ACTIVE PROFILE
              </span>
            </div>
          </div>

          {/* Scenario Quick Selector Bar */}
          <div className="p-4 bg-[#151922]/60 border-b border-[#292D35] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#A1A5AD] uppercase">Select Scenario:</span>
              <div className="flex items-center gap-1.5">
                {(["01", "02", "03"] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSimulate(key)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                      activeScenario === key
                        ? "bg-[#2455E8] text-white font-bold shadow-md shadow-[#2455E8]/30"
                        : "bg-[#08090B] text-[#A1A5AD] border border-[#292D35] hover:text-white hover:border-[#A1A5AD]/40"
                    }`}
                  >
                    <span>Scenario {key}</span>
                    {key === "01" && <span className="text-[10px] text-emerald-300">Nominal</span>}
                    {key === "02" && <span className="text-[10px] text-[#C7F36B]">Boundary</span>}
                    {key === "03" && <span className="text-[10px] text-red-300">Failure</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A5AD]">
              <span>Illustrative System: <strong className="text-white">Parking Sensor</strong></span>
              <span>•</span>
              <span>Parameter: <strong className="text-[#C7F36B]">Obstacle Distance</strong></span>
            </div>
          </div>

          {/* Main Dashboard Multi-Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#292D35]">
            
            {/* Left Column (4 cols): System Requirements & Parameters Panel */}
            <div className="lg:col-span-4 p-6 bg-[#08090B]/60 flex flex-col justify-between space-y-6">
              
              {/* Requirement Ingestion Card */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#A1A5AD] uppercase tracking-wider flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#2455E8]" />
                    Requirement Ingestion
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151922] text-[#A1A5AD] border border-[#292D35]">
                    REQ-PS-88
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#101216] border border-[#292D35] text-xs font-mono text-[#F5F6F2] leading-relaxed">
                  &ldquo;The ultrasonic sensing unit shall detect solid obstacles within the detection cone down to a
                  minimum approved threshold distance of <strong className="text-[#C7F36B]">20 cm</strong> with latency
                  under <strong className="text-[#C7F36B]">20 ms</strong>.&rdquo;
                </div>
              </div>

              {/* Engineering Parameters & Operating Limits */}
              <div>
                <span className="text-xs font-mono text-[#A1A5AD] uppercase tracking-wider block mb-3">
                  Engineering Parameters & Limits
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded bg-[#101216] border border-[#292D35]">
                    <span className="text-[#A1A5AD]">Parameter:</span>
                    <span className="text-white font-semibold">Obstacle Distance</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-[#101216] border border-[#292D35]">
                    <span className="text-[#A1A5AD]">Operating Limits:</span>
                    <span className="text-[#C7F36B] font-semibold">20 cm — 250 cm</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-[#101216] border border-[#292D35]">
                    <span className="text-[#A1A5AD]">Excitation Frequency:</span>
                    <span className="text-white font-semibold">40.0 kHz (±1.5 kHz)</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-[#101216] border border-[#292D35]">
                    <span className="text-[#A1A5AD]">Safe Fallback State:</span>
                    <span className="text-orange-400 font-semibold">Bus Flag 0xEE_FAILSAFE</span>
                  </div>
                </div>
              </div>

              {/* Boundary Proximity Metric */}
              <div className="p-3 rounded-lg bg-[#151922] border border-[#292D35]">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-[#A1A5AD]">Boundary Horizon Margin:</span>
                  <span className="text-[#C7F36B] font-bold">{current.operatingBoundMargin}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#08090B] overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      activeScenario === "01"
                        ? "w-[90%] bg-[#2455E8]"
                        : activeScenario === "02"
                        ? "w-[25%] bg-[#C7F36B]"
                        : "w-[5%] bg-red-500"
                    }`}
                  />
                </div>
              </div>

              {/* Execution Target Info */}
              <div className="pt-2 border-t border-[#292D35]/60 text-[11px] font-mono text-[#A1A5AD]">
                <span>Execution Interface: </span>
                <span className="text-white">CANoe Virtual Bus / Vector HIL Testbench</span>
              </div>
            </div>

            {/* Right Column (8 cols): Test Execution, Waveform Telemetry & Failure Explanation */}
            <div className="lg:col-span-8 p-6 flex flex-col justify-between space-y-6">
              
              {/* Header Status & Scenario Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#292D35]">
                <div>
                  <div className="text-[11px] font-mono text-[#A1A5AD] uppercase tracking-wider mb-1">
                    {current.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {current.name}
                  </h3>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${current.badgeClass} flex items-center gap-1.5 self-start sm:self-auto`}>
                  {activeScenario === "01" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  {activeScenario === "02" && <AlertTriangle className="w-4 h-4 text-[#C7F36B]" />}
                  {activeScenario === "03" && <XCircle className="w-4 h-4 text-red-400" />}
                  <span>{current.badge}</span>
                </div>
              </div>

              {/* Comparison Matrix: Expected vs Observed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35]">
                  <div className="text-xs font-mono text-[#A1A5AD] uppercase mb-1">Expected Behaviour</div>
                  <div className="text-xs text-zinc-300 leading-relaxed font-mono">
                    {current.expected}
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-zinc-500">
                    Threshold: Distance = {current.obstacleDistance}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35]">
                  <div className="text-xs font-mono text-[#A1A5AD] uppercase mb-1">Observed Telemetry Response</div>
                  <div className="text-xs text-white leading-relaxed font-mono font-medium">
                    {current.actual}
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-[#C7F36B]">
                    Status: {current.status}
                  </div>
                </div>
              </div>

              {/* Illustrative Sensor Waveform Trace Table */}
              <div className="p-4 rounded-lg bg-[#08090B] border border-[#292D35]">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[#A1A5AD] uppercase flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#2455E8]" />
                    Illustrative Transducer Waveform Trace
                  </span>
                  <span className="text-[10px] text-zinc-500">Sample Rate: 2.5 MS/s</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {current.sensorData.map((pt, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#101216] border border-[#292D35] text-[11px] font-mono">
                      <div className="text-[#A1A5AD] text-[10px]">{pt.time}</div>
                      <div className="text-white font-medium truncate">{pt.signal}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Failure Explanation (if any) */}
              {current.failureExplanation && (
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-500/30 text-xs font-mono text-red-200">
                  <div className="flex items-center gap-2 font-bold mb-1 text-red-400">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>Boundary & Failure Explanation:</span>
                  </div>
                  <p className="leading-relaxed">{current.statusDetail}</p>
                </div>
              )}

              {/* Actionable Next Experiment Recommendation */}
              <div className="p-4 rounded-lg bg-[#151922] border-l-4 border-l-[#C7F36B] border border-[#292D35]">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#C7F36B] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C7F36B]" />
                    Recommended Next Experiment (Closed-Loop Discovery)
                  </span>
                  <span className="text-[10px] text-[#A1A5AD]">AI Generated</span>
                </div>
                <p className="text-xs text-white leading-relaxed mb-2 font-mono">
                  {current.recommendation}
                </p>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090B] border border-[#292D35] text-[11px] font-mono text-[#C7F36B]">
                  <span>Next Target:</span>
                  <strong className="text-white">{current.nextTest}</strong>
                  <ArrowRight className="w-3 h-3 text-[#C7F36B]" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer of Workspace */}
          <div className="px-6 py-3 bg-[#08090B] border-t border-[#292D35] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#A1A5AD]">
            <span>ENGINEERING NOTE: These values are illustrative demonstration examples only. Operating limits are defined by specific system requirements.</span>
            <span className="text-[#C7F36B]">ELL-AI ENGINE v1.2</span>
          </div>

        </div>

      </div>
    </section>
  );
}
