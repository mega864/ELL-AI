"use client";

import React from "react";
import { Car, Plane, Truck, Zap, Bot, Smartphone } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Cars",
      detail: "Safer, more dependable vehicle electronics.",
      systems: "Control computers, radar and parking sensors, in-car networks.",
      icon: Car,
    },
    {
      title: "Aerospace",
      detail: "Reliable systems where failure isn't an option.",
      systems: "Flight instruments, data links, moving parts controllers.",
      icon: Plane,
    },
    {
      title: "Heavy machinery",
      detail: "Equipment that holds up in tough conditions.",
      systems: "Hydraulic controls, temperature controls, rugged sensors.",
      icon: Truck,
    },
    {
      title: "Energy and power",
      detail: "Dependable systems behind electricity and batteries.",
      systems: "Grid connections, power converters, battery monitoring.",
      icon: Zap,
    },
    {
      title: "Robotics",
      detail: "Machines that work reliably in the real world.",
      systems: "Navigation units, robot arms and motors, laser scanners.",
      icon: Bot,
    },
    {
      title: "Consumer electronics",
      detail: "Everyday products people can trust.",
      systems: "Smart devices, power chips, wireless antennas.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="industries" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Where it helps
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Anywhere a machine must work every time.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            We start with one focused use case, then grow into industries where reliability really matters.
          </p>
        </div>

        {/* 6 Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C] hover:border-[#FF4545]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-md bg-[#1E1C1C] border border-[#2E2C2C]">
                      <Icon className="w-5 h-5 text-[#FF4545]" />
                    </div>
                    <span className="text-xs font-mono text-[#A1A5AD]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-[#A1A5AD] mb-4">
                    {ind.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2E2C2C] text-xs font-mono text-zinc-400">
                  <span className="text-[10px] text-[#A1A5AD] uppercase block mb-1">Examples:</span>
                  <span>{ind.systems}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
