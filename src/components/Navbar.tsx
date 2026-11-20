"use client";

import React, { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while drawer is open; always clean up
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, handleKeyDown]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Fixed Header ── z-50 so it always sits above the drawer (z-40) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1E1C1C]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40"
            : "bg-[#1E1C1C]/80 md:bg-transparent md:backdrop-blur-none py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Logo size="md" showTagline={true} />

            {/* Desktop Nav */}
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
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md bg-[#212121] border border-[#2E2C2C] text-[#A1A5AD] hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#FF4545]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ──
          Rendered OUTSIDE <header> so backdrop-filter on the header
          does NOT make it the containing block for this fixed element.
          z-40 keeps it below the header (z-50) so the close button is always clickable.
          h-dvh uses dynamic viewport height so it fills the screen correctly
          on mobile browsers that subtract the address bar.
      */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col bg-[#1E1C1C] overflow-y-auto"
          style={{ paddingTop: "72px" }}  /* matches header height */
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col flex-1 px-6 py-8 justify-between">
            {/* Nav links */}
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-lg text-sm font-medium text-white hover:bg-[#212121] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A5AD]" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-between p-3 rounded-lg text-sm font-medium text-white hover:bg-[#212121] transition-colors"
              >
                <span>Talk to us</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4545]" />
              </a>
            </div>

            {/* WhatsApp CTA — anchored at the bottom */}
            <div className="pt-6 border-t border-[#2E2C2C]">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF4545] text-sm font-semibold text-white"
              >
                Talk to us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
