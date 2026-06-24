"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/HodaHero.png"
          alt="Person standing on a mountain peak surrounded by misty golden light"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay — lighter on top so logo stays clean, darker toward center for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen flex items-start w-full px-6 lg:px-16 text-center text-white pt-44">
        <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">
          <div className="text-left max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-[450] italic leading-[1.1] mb-8 text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Personalized Health Optimization
              <br />
              for Durable Aging
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-xs leading-relaxed mt-24">
              An evidence-informed, integrated health optimization program combining nutrition, fitness, metabolic health, and nervous system regulation to help you build resilience and age with strength and vitality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start xl:flex-shrink-0 mt-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm sm:px-8 sm:py-3.5 sm:text-base rounded-full bg-[#5B7461] text-white font-medium tracking-wide hover:bg-[#4a6050] transition-all duration-200 shadow-lg"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Book Your Assessment
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm sm:px-8 sm:py-3.5 sm:text-base rounded-full border-2 border-white/70 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.preventDefault(); document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Learn Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
