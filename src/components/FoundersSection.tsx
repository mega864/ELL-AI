"use client";

import React from "react";
import { FOUNDERS_DATA, Founder } from "@/data/founders";
import { ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

export default function FoundersSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FF4545] mb-3">
            Founding Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Built by engineers. Driven by a shared vision.
          </h2>
          <p className="text-lg text-[#A1A5AD] leading-relaxed">
            Combining systems engineering, AI product architecture, and physical validation experience.
          </p>
        </div>

        {/* 4 Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS_DATA.map((founder: Founder) => {
            const hasLinkedIn = Boolean(founder.linkedInUrl);

            return (
              <div
                key={founder.id}
                className="p-6 rounded-xl bg-[#212121] border border-[#2E2C2C] hover:border-[#3D3A3A] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Clean Initial Avatar */}
                  <div className="w-14 h-14 rounded-lg bg-[#1E1C1C] border border-[#2E2C2C] flex items-center justify-center mb-5">
                    <span className="text-lg font-mono font-bold text-white">
                      {founder.initials}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {founder.name}
                  </h3>

                  <p className="text-xs font-mono text-[#FF4545] mb-3">
                    {founder.focusArea}
                  </p>

                  <p className="text-xs text-[#A1A5AD] leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2E2C2C] mt-auto">
                  {hasLinkedIn ? (
                    <a
                      href={founder.linkedInUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A5AD] hover:text-white transition-colors group"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#FF4545]" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3 h-3 text-[#A1A5AD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-500">
                      Profile Link Pending
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
