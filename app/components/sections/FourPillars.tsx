"use client";

import { useScrollReveal } from "../useScrollReveal";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Nutrition",
    blurb:
      "Personalized nutrition strategies that reduce inflammation, support metabolism, and fuel your body for lasting energy and vitality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Metabolic Health",
    blurb:
      "Lab testing, CGM insights, and data-driven strategies to optimize metabolism and hormones, so your body runs the way it was designed to.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Strength & Movement",
    blurb:
      "Strength, mobility, and conditioning programs designed to build lean muscle, improve function, and prevent injury - training that supports you for life.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Nervous System Regulation",
    blurb:
      "Stress resilience, sleep optimization, HRV tracking, and recovery practices, building a calm, strong nervous system as the foundation of lasting health.",
  },
];

export default function FourPillars() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pillars" className="py-24 lg:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#5B7461] mb-4">
            Our Four Pillars
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E2A26]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            An Integrated Approach{" "}
            <em>to Lasting Health</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  delay,
}: {
  pillar: (typeof pillars)[0];
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-[#5B7461]/10 flex items-center justify-center text-[#5B7461] group-hover:bg-[#5B7461] group-hover:text-white transition-colors duration-300">
        {pillar.icon}
      </div>
      <h3
        className="text-2xl font-semibold text-[#2E2A26] min-h-[4rem] flex items-start"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {pillar.title}
      </h3>
      <p className="text-[#6B5E52] text-sm leading-relaxed">{pillar.blurb}</p>
      <div className="mt-auto w-8 h-0.5 bg-[#5B7461]/40 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
