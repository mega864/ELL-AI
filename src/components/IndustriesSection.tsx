"use client";

import React, { useState } from "react";
import { INDUSTRIES_DATA } from "@/data/industries";
import { Car, Bot, Plane, Factory, Zap, Smartphone, ArrowUpRight, Check } from "lucide-react";

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("automotive");

  const iconMap: Record<string, React.ElementType> = {
    automotive: Car,
    robotics: Bot,
    aerospace: Plane,
    industrial: Factory,
    energy: Zap,
    consumer: Smartphone,
  };

  return (
    <section id="industries" className="relative py-28 bg-[#08090B] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#292D35] text-xs font-mono text-[#C7F36B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
            <span>09 / APPLICATION HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            One validation intelligence. <br className="hidden sm:inline" />
            Multiple industries.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            ELL-AI is being developed with a broad engineering vision. Physical boundary phenomena — acoustic
            attenuation, sensor ringing, bus contention, and thermal drift — affect mission-critical hardware across
            diverse industries.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => {
            const IconComponent = iconMap[ind.id] || Car;
            const isSelected = selectedIndustry === ind.id;

            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`group relative rounded-xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#151922] border-[#2455E8] shadow-2xl shadow-[#2455E8]/10 ring-1 ring-[#2455E8]"
                    : "bg-[#101216] border-[#292D35] hover:border-[#A1A5AD]/40 hover:bg-[#151922]/50"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#2455E8]">
                      {ind.number} / SECTOR
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#08090B] border border-[#292D35] text-[#A1A5AD] group-hover:text-[#C7F36B] group-hover:border-[#C7F36B]/30 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {ind.title}
                  </h3>

                  <p className="text-xs font-mono text-[#C7F36B] mb-3">
                    {ind.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A1A5AD] leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Systems Validated */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-wider block">
                      Target Physical Subsystems:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.systems.map((sys, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#08090B] border border-[#292D35] text-[11px] font-mono text-zinc-300"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Boundary Exploration Focus */}
                <div className="pt-4 border-t border-[#292D35]/80 mt-auto">
                  <span className="text-[10px] font-mono text-[#A1A5AD] uppercase block mb-1">
                    Boundary Focus:
                  </span>
                  <div className="text-[11px] font-mono text-[#F5F6F2]">
                    {ind.metrics[0]} • {ind.metrics[1]}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on integrations */}
        <div className="mt-8 text-center text-xs font-mono text-[#A1A5AD]">
          * Visionary application targets. Validation frameworks are systematically expanded across industrial domains.
        </div>

      </div>
    </section>
  );
}
