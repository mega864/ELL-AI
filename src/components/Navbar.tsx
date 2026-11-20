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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E1C1C]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40"
          : "bg-[#1E1C1C]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Logo size="md" showTagline={true} />

          {/* Desktop Nav: All links in one row with Talk to us placed right next to Team */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#A1A5AD] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Talk to us placed right next to Team */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A1A5AD] hover:text-white transition-colors"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF4545]" />
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#212121] border border-[#2E2C2C] text-[#A1A5AD] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#FF4545]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#1E1C1C] px-6 py-8 flex flex-col justify-between z-50">
          <div className="flex flex-col space-y-2">
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

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-lg text-sm font-medium text-white hover:bg-[#212121] transition-colors"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF4545]" />
            </a>
          </div>

          <div className="pt-6 border-t border-[#2E2C2C]">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF4545] text-sm font-semibold text-white"
            >
              Talk to us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
