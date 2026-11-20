"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function DemoSection() {
  const cards = [
    {
      tag: "Everyday test",
      description: "The obstacle is clear and the motor runs slowly.",
      question: "Does it see the obstacle and stop?",
      color: "border-[#2E2C2C]",
    },
    {
      tag: "Close to the limit",
      description: "The obstacle is near, the motor is faster, or the signal is weak.",
      question: "Does it still stop without a long delay?",
      color: "border-[#FF4545]/30",
    },
    {
      tag: "Beyond the limit",
      description: "The obstacle is out of range, or the sensor readings are missing or late.",
      question: "Does it raise a warning and respond safely?",
      color: "border-[#2E2C2C]",
    },
  ];

  return (
    <section id="demo" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Our first demo
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Does it stop in time? We test that.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            To show how ELL-AI works, we built a small model of a car&apos;s emergency braking system. Distance sensors watch for an obstacle, and a small motor must stop when one appears. The AI then tests how well it really works.
          </p>
        </div>

        {/* Simple SVG Illustration */}
        <div className="mb-10 flex items-center justify-center gap-4 sm:gap-8 py-6 px-4 rounded-xl bg-[#212121] border border-[#2E2C2C]">
          {/* Obstacle */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-14 sm:w-12 sm:h-16 rounded-md bg-[#2E2C2C] border border-[#403D3D] flex items-center justify-center">
              <div className="w-4 h-6 bg-[#403D3D] rounded-sm" />
            </div>
            <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider">Obstacle</span>
          </div>

          {/* Arrow */}
          <svg viewBox="0 0 60 20" className="w-10 sm:w-16 text-[#FF4545]" fill="none">
            <path d="M2 10 H52 M42 2 L52 10 L42 18" stroke="#FF4545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Sensor */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-14 sm:w-12 sm:h-16 rounded-md bg-[#212121] border border-[#FF4545]/40 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF4545]" fill="none">
                <circle cx="12" cy="12" r="3" fill="#FF4545" />
                <path d="M12 2C6.5 2 2 6.5 2 12" stroke="#FF4545" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M12 6C8.7 6 6 8.7 6 12" stroke="#FF4545" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
              </svg>
            </div>
            <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider">Sensor</span>
          </div>

          {/* Arrow */}
          <svg viewBox="0 0 60 20" className="w-10 sm:w-16 text-[#FF4545]" fill="none">
            <path d="M2 10 H52 M42 2 L52 10 L42 18" stroke="#FF4545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Motor Stop */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-14 sm:w-12 sm:h-16 rounded-md bg-[#212121] border border-[#2E2C2C] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FF4545] rounded-full" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider">Motor stop</span>
          </div>
        </div>

        {/* 3 Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-[#212121] border ${card.color} flex flex-col gap-4`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF4545] block mb-2">
                  {card.tag}
                </span>
                <p className="text-sm text-[#A1A5AD] leading-relaxed">{card.description}</p>
              </div>
              <div className="pt-4 border-t border-[#2E2C2C]">
                <p className="text-sm font-semibold text-white leading-snug">
                  &ldquo;{card.question}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Result line */}
        <div className="p-5 rounded-xl bg-[#212121] border border-[#2E2C2C]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FF4545] mt-0.5 shrink-0" />
            <p className="text-base font-bold text-white leading-relaxed">
              The AI shows where the system works well, where it struggles, and what to improve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
