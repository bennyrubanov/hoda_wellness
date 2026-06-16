"use client";

import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

const checkItems = [
  "Comprehensive assessment & lab review",
  "Wearable & CGM integration",
  "Personalized plan & expert coaching",
  "Ongoing support & accountability",
  "Measurable progress & sustainable results",
];

const timeline = [
  {
    week: "1st Week",
    phase: "Assessment",
    color: "bg-[#5B7461]",
    items: [
      "Comprehensive intake",
      "3-day food log analysis",
      "Fitness assessment",
      "Labs analysis",
      "CGM and body composition",
    ],
  },
  {
    week: "Weeks 2–6",
    phase: "Implementation",
    color: "bg-[#6E8CA0]",
    items: [
      "2x/week training sessions",
      "Weekly RD consultation",
      "Weekly nervous system consult and NP review",
      "Ongoing data tracking",
    ],
  },
  {
    week: "Week 6",
    phase: "Re-assessment",
    color: "bg-[#8AA194]",
    items: [
      "Integrated review (what improved, what matters most)",
      "HODA refined health optimization plan",
      "Individualized lifestyle plan",
    ],
  },
];

export default function Program() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="program" className="py-24 lg:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headingRef} className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#5B7461] mb-4">
            Our Program
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E2A26] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A Personalized Path To{" "}
            <em>Your Best Health</em>
          </h2>
          <p className="text-[#6B5E52] text-lg leading-relaxed">
            Every program begins with a deep understanding of your biology, your
            lifestyle, and your goals. From there, our team builds a plan that
            evolves with you.
          </p>
        </div>

        {/* Checklist + image */}
        <div ref={listRef} className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ul className="space-y-4">
            {checkItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#5B7461] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#2E2A26] text-base">{item}</span>
              </li>
            ))}
          </ul>
          <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/TouchGrassHoda.jpg"
              alt="Bare feet walking on lush green grass — grounded, natural wellness"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Timeline cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {timeline.map((step, i) => (
            <TimelineCard key={step.phase} step={step} index={i} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#5B7461] text-white font-medium tracking-wide hover:bg-[#4a6050] transition-colors duration-200 shadow-sm"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  step,
  index,
}: {
  step: (typeof timeline)[0];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`${step.color} px-6 py-5`}>
        <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-1">
          {step.week}
        </p>
        <h3
          className="text-white text-3xl font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {step.phase}
        </h3>
      </div>
      <div className="px-6 py-6">
        <ul className="space-y-2.5">
          {step.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[#6B5E52] text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5B7461] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
