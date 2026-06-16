"use client";

import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

// PLACEHOLDER TESTIMONIALS: Replace with verified client quotes before launch
const testimonials = [
  {
    quote:
      "HODA Wellness Group helped me get my energy, focus, and strength back. I finally feel like myself again!",
    author: "Sarah T.",
  },
  {
    quote:
      "The integrated approach is unlike anything I've tried. The data, coaching, and support made all the difference.",
    author: "Mark L.",
  },
  {
    quote:
      "I sleep better, handle stress better, and have more vitality than I have in years. Highly recommend!",
    author: "Jennifer R.",
  },
];

export default function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/YogaHoda.jpg"
          alt="Two people silhouetted doing yoga at sunset on an outdoor terrace"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2E2A26]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What Our Clients <em className="text-[#8AA194]">Say</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[0];
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote mark */}
      <svg
        className="w-8 h-8 text-[#8AA194]/60"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8C5.582 8 2 11.582 2 16s3.582 8 8 8V16H4c0-3.314 2.686-6 6-6V8zm16 0c-4.418 0-8 3.582-8 8s3.582 8 8 8V16h-6c0-3.314 2.686-6 6-6V8z" />
      </svg>
      <p className="text-white/90 text-base leading-relaxed flex-1">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#5B7461] flex items-center justify-center text-white text-sm font-semibold">
          {testimonial.author[0]}
        </div>
        <p className="text-white/70 text-sm font-medium">{testimonial.author}</p>
      </div>
    </div>
  );
}
