"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 overflow-hidden min-h-[92vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-lg">
            AI that runs physical tests, finds failures, and tells you what to fix.
          </h1>

          <p className="text-lg sm:text-xl text-[#FF4545] font-semibold mb-6 drop-shadow">
            Find failures before they reach the real world.
          </p>

          <p className="text-base text-zinc-200 max-w-2xl leading-relaxed mb-10 drop-shadow">
            ELL-AI takes your system requirements, generates focused test scenarios,
            runs them on real hardware or simulators, and pinpoints where issues occur and what to test next.
            Built for engineering teams working on critical physical systems.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#problem"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF4545] text-sm font-semibold text-white transition-all hover:bg-[#e03a3a] shadow-xl shadow-[#FF4545]/25"
            >
              <span>See the Gaps</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#workflow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#212121]/90 backdrop-blur-sm border border-[#2E2C2C] text-sm font-medium text-white transition-all hover:border-[#FF4545]/50 hover:bg-[#262424]"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
