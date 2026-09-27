"use client";

// REMOVED FROM PAGE (kept for later): not currently rendered in app/page.tsx.
// Re-add `<Testimonials />` there (between Team and FinalCTA) to bring it back.
// A full dedicated page with these same reviews lives at app/testimonials/page.tsx.
import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

// REAL client reviews, sourced from HODA Wellness Group's Google Business listing
const testimonials = [
  {
    quote:
      "I had a wonderful experience working with the Health Optimization and Durable Aging Care Team. I especially appreciated their comprehensive approach to my health—they reviewed my blood work, diet, exercise habits, and overall lifestyle rather than looking at any one area in isolation.",
    author: "Tanya I.",
  },
  {
    quote:
      "I joined the HODA Wellness Group program and have been training with Jack. I've noticed significant improvements in my strength, balance, flexibility, and confidence, and my back pain has decreased. I feel stronger and more energetic.",
    author: "Inna O.",
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
          sizes="100vw"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
