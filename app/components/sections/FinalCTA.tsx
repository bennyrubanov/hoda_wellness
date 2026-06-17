"use client";

import { useScrollReveal } from "../useScrollReveal";

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #1e3328 0%, #3d5c4e 45%, #6E8CA0 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div ref={ref}>
          <div className="w-16 h-0.5 bg-white/40 mx-auto mb-10" />
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Take the{" "}
            <em className="text-[#E7DFD3]">Next Step?</em>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Your best health is within reach. Let&apos;s build your personalized plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hodawellnessgroup.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#5B7461] font-medium tracking-wide hover:bg-[#FAF7F2] transition-all duration-200 shadow-md"
            >
              Book Your Assessment
            </a>
            <a
              href="tel:+12142848223"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white/60 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-200"
            >
              Call Us: +1 214-284-8223
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
