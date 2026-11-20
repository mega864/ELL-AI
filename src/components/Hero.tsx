"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-5 drop-shadow-lg">
            We test your hardware so it doesn&apos;t fail in the real world.
          </h1>

          <p className="text-lg sm:text-xl text-[#FF4545] font-semibold mb-6 drop-shadow">
            Find the problem before your customer does.
          </p>

          <p className="text-base text-zinc-200 max-w-2xl leading-relaxed mb-10 drop-shadow">
            ELL-AI is an AI assistant for testing machines and electronics. It plans the tests, runs them, finds what goes wrong, and tells your engineers what to fix and what to test next.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#problem"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF4545] text-sm font-semibold text-white transition-all hover:bg-[#e03a3a] shadow-xl shadow-[#FF4545]/25"
            >
              <span>See why testing is hard</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#212121]/90 backdrop-blur-sm border border-[#2E2C2C] text-sm font-medium text-white transition-all hover:border-[#FF4545]/50 hover:bg-[#262424]"
            >
              See it in action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
