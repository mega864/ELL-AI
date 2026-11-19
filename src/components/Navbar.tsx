"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
          ? "bg-[#08090B]/90 backdrop-blur-md border-b border-[#292D35]/80 py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <div className="flex items-center gap-4">
            <Logo size="md" showTagline={true} />
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101216] border border-[#292D35] text-[11px] font-mono text-[#A1A5AD]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] animate-pulse"></span>
              <span>Physical Systems Validation</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#101216]/70 border border-[#292D35]/70 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#151922] text-[#C7F36B] border border-[#C7F36B]/30 shadow-sm"
                      : "text-[#A1A5AD] hover:text-[#F5F6F2] hover:bg-[#151922]/50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#101216] border border-[#292D35] text-xs font-medium text-[#F5F6F2] transition-all duration-200 hover:border-[#2455E8] hover:text-white hover:bg-[#151922]"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A5AD] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C7F36B]" />
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2455E8] text-xs font-semibold text-white tracking-wide transition-all duration-200 hover:bg-[#1e46c7] shadow-lg shadow-[#2455E8]/20 hover:shadow-[#2455E8]/35 active:scale-[0.98]"
            >
              <span>Connect</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]"></span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-2.5 py-1.5 rounded bg-[#2455E8] text-[11px] font-semibold text-white tracking-wider"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#101216] border border-[#292D35] text-[#A1A5AD] hover:text-white hover:border-[#A1A5AD]/40 focus:outline-none focus:ring-1 focus:ring-[#C7F36B]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C7F36B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#08090B]/98 backdrop-blur-xl border-b border-[#292D35] px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-[#A1A5AD] uppercase px-2 mb-2">
              Navigation
            </div>
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg text-sm font-medium text-[#F5F6F2] hover:bg-[#101216] hover:text-[#C7F36B] transition-colors border border-transparent hover:border-[#292D35]"
                >
                  <span>{item.label}</span>
                  {item.description && (
                    <span className="text-[11px] font-mono text-[#A1A5AD] hidden sm:inline">
                      {item.description}
                    </span>
                  )}
                  <ArrowUpRight className="w-4 h-4 text-[#A1A5AD]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#292D35] space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#101216] border border-[#292D35] text-sm font-medium text-white hover:border-[#2455E8]"
            >
              <span>Talk to Our Team</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#2455E8] text-sm font-semibold text-white shadow-lg shadow-[#2455E8]/30"
            >
              <span>Connect on WhatsApp</span>
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]"></span>
            </a>
            <p className="text-center text-[11px] font-mono text-[#A1A5AD] pt-2">
              எல்லை — Physical Systems Validation Platform
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
