"use client";

import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

export default function WhyHoda() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/GroupNatureHoda.jpg"
          alt="Group of women walking together through a mountain landscape at golden hour"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2E2A26]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div ref={ref}>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A9C0CE] mb-4">
            Why HODA
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            We look at the <em>whole you.</em>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We combine the best of modern science with a deep understanding of
            behavior change and human biology. Our integrated team works
            together to help you feel stronger, more energized, and more in
            control of your health, at every stage of life.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
            <span className="w-8 h-8 rounded-full bg-[#5B7461] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </span>
            <p
              className="text-lg font-semibold text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Evidence-informed.{" "}
              <span className="text-[#8AA194]">Personalized.</span>{" "}
              <span className="text-[#A9C0CE]">Sustainable.</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { value: "70+", label: "Years combined expertise" },
              { value: "4", label: "Integrated disciplines" },
              { value: "100%", label: "Personalized to you" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl font-light text-[#8AA194] mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
