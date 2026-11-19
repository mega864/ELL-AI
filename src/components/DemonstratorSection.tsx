"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, Sliders, Play, RotateCcw, ShieldCheck, ArrowRight } from "lucide-react";

export default function DemonstratorSection() {
  const [selectedCondition, setSelectedCondition] = useState<"normal" | "nearLimit" | "outsideLimit">("nearLimit");

  const conditions = {
    normal: {
      tag: "Normal Conditions",
      title: "Clear target; motor runs slowly.",
      question: "Does it detect the target and stop the motor?",
      status: "PASS — BEHAVES AS EXPECTED",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "The sensor receives clean ultrasonic echo reflections. Motor speed is nominal (300 RPM) and deceleration initiates with plenty of stopping distance buffer.",
      telemetry: {
        targetDistance: "100 cm",
        motorSpeed: "300 RPM (Slow)",
        signalEcho: "Clear (SNR 24 dB)",
        stopMargin: "+35 cm safety margin",
      },
      aiFinding: "Operating well inside approved requirements. Deterministic response verified.",
      nextAction: "Probed: Passed nominal baseline. Advance to near-limit speed & distance exploration.",
    },
    nearLimit: {
      tag: "Near the Limit",
      title: "Target near stop point, faster motor or weak echo.",
      question: "Does it still detect the target and stop without a long delay?",
      status: "LIMIT DETECTED — STOPS NEAR CUTOFF",
      badgeClass: "bg-[#FF4545]/10 text-[#FF4545] border-[#FF4545]/30 font-semibold",
      description:
        "Higher motor velocity (850 RPM) and target placed at 22 cm near sensor blind-zone threshold. Signal attenuation and transducer ring-down emerge.",
      telemetry: {
        targetDistance: "22 cm",
        motorSpeed: "850 RPM (Fast)",
        signalEcho: "Attenuated (SNR 6 dB)",
        stopMargin: "3.5 cm (Near limit cutoff)",
      },
      aiFinding: "Sensor experiences delayed echo recognition near blind-zone cutoff. Deceleration margin is critically narrow.",
      nextAction: "AI recommends probing localized excitation pulse widths to prevent near-field echo blinding.",
    },
    outsideLimit: {
      tag: "Outside the Limit",
      title: "Target outside sensor range; missing or late readings.",
      question: "Does it flag the problem and follow the agreed response?",
      status: "OUTSIDE BOUNDS — SAFE FALLBACK ASSERTED",
      badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      description:
        "Extreme scenario: Sensor echo missing (>15ms timeout). The test checks if firmware reliably enters fallback safe-stop state.",
      telemetry: {
        targetDistance: "Invalid / No Echo",
        motorSpeed: "1200 RPM (Simulated)",
        signalEcho: "Missing Echo Return",
        stopMargin: "Failsafe Emergency Stop Invoked",
      },
      aiFinding: "Sensor dropout detected. System correctly asserted emergency motor shutdown within 12 ms.",
      nextAction: "Verified: Safe response executed properly. Flag firmware edge-case handling as robust.",
    },
  };

  const current = conditions[selectedCondition];

  return (
    <section id="demonstrator" className="py-24 bg-[#1E1C1C] border-t border-[#2E2C2C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF4545] mb-3">
            Physical Prototype & Test Approach
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Automatic Emergency Braking: from setup to tests.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            A controlled motor-and-sensor demonstrator, not a road-vehicle braking system.
          </p>
        </div>

        {/* 3-Column Demonstrator Overview Specs (Slide 5 Setup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A5AD] block mb-3">
              01 / What We Build
            </span>
            <ul className="space-y-2 text-sm font-medium text-white">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Arduino Mega 2560</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>4 ultrasonic sensors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>1 DC motor + motor driver</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A5AD] block mb-3">
              02 / Supporting Setup
            </span>
            <ul className="space-y-2 text-sm font-medium text-white">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Speed feedback + test target</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Regulated power + manual stop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>PC logging + AI test selection</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A5AD] block mb-3">
              03 / Function to Verify
            </span>
            <ul className="space-y-2 text-sm font-medium text-white">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Detect a target</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Request a motor stop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]" />
                <span>Measure the response</span>
              </li>
            </ul>
          </div>

        </div>

        {/* How AI Explores the Function (Interactive Comparison) */}
        <div className="rounded-xl bg-[#212121] border border-[#2E2C2C] p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2E2C2C] gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#A1A5AD] block mb-1">
                Demonstrator Exploration Logic
              </span>
              <h3 className="text-xl font-bold text-white">How AI Explores the Function</h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A5AD]">
              <span>Outside-limit speed tests are simulated.</span>
            </div>
          </div>

          {/* 3 Condition Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
            {(["normal", "nearLimit", "outsideLimit"] as const).map((key) => {
              const cond = conditions[key];
              const isSelected = selectedCondition === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedCondition(key)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    isSelected
                      ? "bg-[#262424] border-[#FF4545] shadow-lg"
                      : "bg-[#1E1C1C] border-[#2E2C2C] hover:border-[#3D3A3A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white">
                      {cond.tag}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#FF4545]" />}
                  </div>
                  <p className="text-xs text-[#A1A5AD] font-medium leading-relaxed mb-2">
                    {cond.title}
                  </p>
                  <p className="text-xs font-bold text-white">
                    {cond.question}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Exploration Outcome Card */}
          <div className="p-6 rounded-lg bg-[#1E1C1C] border border-[#2E2C2C] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2E2C2C] gap-2">
              <div>
                <span className="text-[10px] font-mono text-[#A1A5AD] uppercase block mb-0.5">
                  Observed Behavior:
                </span>
                <span className="text-base font-bold text-white">{current.title}</span>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-mono border self-start sm:self-auto ${current.badgeClass}`}>
                {current.status}
              </span>
            </div>

            <p className="text-sm text-[#A1A5AD] leading-relaxed">
              {current.description}
            </p>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded bg-[#212121] border border-[#2E2C2C]">
                <span className="text-[#A1A5AD] text-[10px] block">Target Distance:</span>
                <span className="text-white font-bold">{current.telemetry.targetDistance}</span>
              </div>
              <div className="p-3 rounded bg-[#212121] border border-[#2E2C2C]">
                <span className="text-[#A1A5AD] text-[10px] block">Motor Speed:</span>
                <span className="text-white font-bold">{current.telemetry.motorSpeed}</span>
              </div>
              <div className="p-3 rounded bg-[#212121] border border-[#2E2C2C]">
                <span className="text-[#A1A5AD] text-[10px] block">Echo Signal:</span>
                <span className="text-white font-bold">{current.telemetry.signalEcho}</span>
              </div>
              <div className="p-3 rounded bg-[#212121] border border-[#2E2C2C]">
                <span className="text-[#A1A5AD] text-[10px] block">Stop Margin:</span>
                <span className="text-[#FF4545] font-bold">{current.telemetry.stopMargin}</span>
              </div>
            </div>

            {/* AI Finding & Actionable Next Test */}
            <div className="p-4 rounded-lg bg-[#212121] border-l-2 border-[#FF4545] border-y border-r border-[#2E2C2C] text-xs">
              <div className="text-[#FF4545] font-bold font-mono uppercase mb-1">
                AI Discovery & Action:
              </div>
              <p className="text-white mb-2 leading-relaxed">{current.aiFinding}</p>
              <div className="text-[#A1A5AD] font-mono text-[11px]">
                <strong className="text-white">Next Step: </strong>
                {current.nextAction}
              </div>
            </div>
          </div>

          {/* Bottom Statement from Slide 5 */}
          <div className="mt-6 pt-4 border-t border-[#2E2C2C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A5AD] gap-2">
            <span className="text-white font-semibold">
              AI finds where it works, where it struggles, and what needs improvement.
            </span>
            <span className="text-zinc-500 font-mono text-[11px]">
              Physical tests stay within agreed bench limits.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
