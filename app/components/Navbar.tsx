"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Our Approach", href: "#pillars" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="w-full px-6 lg:px-10 flex items-center justify-between h-20 overflow-visible"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 relative z-10 mt-4">
          <Image
            src={scrolled ? "/LogoHodaHorizontalGreen.png" : "/LogoHodaHorizontalWhite.png"}
            alt="HODA Wellness Group"
            width={500}
            height={500}
            className="h-36 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#5B7461] ${
                  scrolled ? "text-[#2E2A26]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[#5B7461] text-white text-sm font-medium tracking-wide hover:bg-[#4a6050] transition-colors duration-200"
        >
          Book Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#2E2A26]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FAF7F2]/98 backdrop-blur-sm border-t border-[#E7DFD3] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[#2E2A26] text-base font-medium py-1 hover:text-[#5B7461] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#5B7461] text-white text-sm font-medium mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
