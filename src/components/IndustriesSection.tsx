"use client";

import React from "react";
import { Car, Plane, Truck, Zap, Bot, Smartphone, ArrowRight } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Automotive",
      detail: "Confidence in connected vehicles.",
      systems: "ECUs, radar/ultrasonic sensors, in-vehicle networks.",
      icon: Car,
    },
    {
      title: "Aerospace",
      detail: "Reliability in critical systems.",
      systems: "Flight instrumentation, telemetry nodes, actuators.",
      icon: Plane,
    },
    {
      title: "Heavy machinery",
      detail: "Dependable equipment in demanding conditions.",
      systems: "Hydraulic controllers, thermal limits, ruggedized sensors.",
      icon: Truck,
    },
    {
      title: "Energy & power",
      detail: "Resilience in essential infrastructure.",
      systems: "Grid synchronizers, inverter bridges, battery telemetry.",
      icon: Zap,
    },
    {
      title: "Robotics & automation",
      detail: "Reliable machines in real-world environments.",
      systems: "Autonomous navigation, kinematic actuators, LiDAR arrays.",
      icon: Bot,
    },
    {
      title: "Consumer electronics",
      detail: "Confidence in everyday products.",
      systems: "Smart devices, power management ICs, RF antennas.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="industries" className="py-24 bg-[#1E1C1C] border-t border-[#2E2C2C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF4545] mb-3">
            Expansion Opportunity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            One platform. A broader industry opportunity.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            Start with a focused use case. Expand where physical reliability matters.
          </p>
        </div>

        {/* 6 Clean Editorial Sector Cards (No clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C] hover:border-[#3D3A3A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-md bg-[#1E1C1C] border border-[#2E2C2C] text-white">
                      <Icon className="w-5 h-5 text-[#FF4545]" />
                    </div>
                    <span className="text-xs font-mono text-[#A1A5AD]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {ind.title}
                  </h3>

                  <p className="text-sm font-medium text-[#A1A5AD] mb-4">
                    {ind.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2E2C2C] text-xs font-mono text-zinc-400">
                  <span className="text-[10px] text-[#A1A5AD] uppercase block mb-1">Subsystems:</span>
                  <span>{ind.systems}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expansion Thesis Banner */}
        <div className="mt-12 p-6 rounded-lg bg-[#212121] border border-[#2E2C2C] text-center">
          <span className="text-xs font-mono text-[#FF4545] uppercase tracking-wider block mb-1">
            Expansion Thesis
          </span>
          <p className="text-base sm:text-lg font-semibold text-white">
            Reuse the core platform, adapt to each industry.
          </p>
        </div>

      </div>
    </section>
  );
}
