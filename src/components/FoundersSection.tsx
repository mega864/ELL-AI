"use client";

import React from "react";
import { FOUNDERS_DATA, Founder } from "@/data/founders";
import { ArrowUpRight, ShieldCheck, User } from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

export default function FoundersSection() {
  return (
    <section id="about" className="relative py-28 bg-[#101216] border-t border-[#292D35]/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08090B] border border-[#292D35] text-xs font-mono text-[#2455E8] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2455E8]" />
            <span>10 / FOUNDING TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F6F2] tracking-tight leading-tight mb-4">
            Built by engineers. <br className="hidden sm:inline" />
            Driven by a shared vision.
          </h2>

          <p className="text-base sm:text-lg text-[#A1A5AD] leading-relaxed">
            We are a team combining engineering, AI product development, and entrepreneurial experience to rethink how
            physical systems are tested, validated, and analyzed at operating boundaries.
          </p>
        </div>

        {/* 4-Founder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS_DATA.map((founder: Founder) => {
            const hasLinkedIn = Boolean(founder.linkedInUrl);

            return (
              <div
                key={founder.id}
                className="group relative rounded-xl bg-[#08090B] border border-[#292D35] p-6 hover:border-[#2455E8]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Avatar / Profile Graphic Placeholder */}
                  <div className="relative w-full aspect-square rounded-lg bg-[#151922] border border-[#292D35] overflow-hidden mb-5 flex flex-col items-center justify-center group-hover:border-[#C7F36B]/40 transition-colors">
                    
                    {/* Architectural Coordinate Accent in Placeholder */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                    
                    {/* Initials & Geometric Emblem */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#101216] border border-[#292D35] flex items-center justify-center mb-2 shadow-inner group-hover:border-[#2455E8] transition-colors">
                        <span className="text-xl font-mono font-bold text-[#F5F6F2] tracking-wider">
                          {founder.initials}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#A1A5AD] uppercase tracking-widest">
                        CO-FOUNDER
                      </span>
                    </div>

                    {/* Corner Calibrations */}
                    <span className="absolute top-2 left-2 text-[8px] font-mono text-[#292D35] group-hover:text-[#A1A5AD]">
                      +
                    </span>
                    <span className="absolute top-2 right-2 text-[8px] font-mono text-[#292D35] group-hover:text-[#A1A5AD]">
                      +
                    </span>
                    <span className="absolute bottom-2 left-2 text-[8px] font-mono text-[#292D35] group-hover:text-[#A1A5AD]">
                      +
                    </span>
                    <span className="absolute bottom-2 right-2 text-[8px] font-mono text-[#292D35] group-hover:text-[#A1A5AD]">
                      +
                    </span>
                  </div>

                  {/* Founder Name & Role */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F5F6F2]">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-mono text-[#C7F36B] mt-0.5">
                      {founder.role} • {founder.focusArea}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#A1A5AD] leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* LinkedIn Action Bar */}
                <div className="pt-4 border-t border-[#292D35]/80 mt-auto">
                  {hasLinkedIn ? (
                    <a
                      href={founder.linkedInUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A5AD] hover:text-[#2455E8] transition-colors group/link"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4 text-[#2455E8]" />
                      <span>View LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                      <LinkedInIcon className="w-4 h-4 text-zinc-600" />
                      <span>Profile Link Pending</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Founding Philosophy Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#08090B] border border-[#292D35] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#A1A5AD]">
            <span className="text-white font-bold block mb-1">ELL-AI FOUNDING PRINCIPLE</span>
            <span>
              &ldquo;Engineering credibility is our foundation. We focus on real physical dynamics, rigorous boundary
              identification, and actionable diagnostic truth.&rdquo;
            </span>
          </div>
          <div className="text-[11px] font-mono text-[#C7F36B] shrink-0">
            எல்லை • BOUNDARY INTELLIGENCE
          </div>
        </div>

      </div>
    </section>
  );
}
