"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E1C1C]/95 backdrop-blur-md border-b border-[#2E2C2C] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" showTagline={true} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-[#A1A5AD] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#212121] border border-[#2E2C2C] text-xs font-medium text-white transition-all hover:border-[#FF4545]/60 hover:bg-[#262424]"
            >
              <span>Explore Pilot</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4545]"></span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FF4545] text-xs font-semibold text-white tracking-wide transition-all hover:bg-[#e03a3a]"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#212121] border border-[#2E2C2C] text-[#A1A5AD] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#FF4545]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#1E1C1C]/98 backdrop-blur-xl border-b border-[#2E2C2C] px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#A1A5AD] uppercase px-2 mb-2">
              Menu
            </div>
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg text-sm font-medium text-white hover:bg-[#212121] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A5AD]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#2E2C2C] space-y-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF4545] text-sm font-semibold text-white"
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
