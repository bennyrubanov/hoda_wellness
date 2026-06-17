"use client";

import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

export default function BetterLife() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imgRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image — left on this section for visual rhythm variety */}
          <div ref={imgRef} className="order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[620px] w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/YogaHodaPic.png"
                alt="Woman standing in the ocean at sunset with arms raised"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text — right */}
          <div ref={textRef} className="order-1 lg:order-2 animate-delay-200">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E2A26] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Better Quality of <em className="text-[#5B7461]">Life</em>
            </h2>
            <div className="w-16 h-0.5 bg-[#5B7461] mb-10" />

            <div className="space-y-7 text-[#6B5E52] text-lg leading-relaxed">
              <p>
                At HODA, longevity means extending your health span, the years
                you feel strong, clear, mobile, and fully alive. We take a
                proactive, whole-body approach: identifying patterns and
                supporting you before they take hold.
              </p>
              <p>
                Our team brings together a registered dietitian, nurse
                practitioner, certified trainer, and functional medicine–informed
                health coach, combining decades of experience
                across nutrition, metabolic health, movement, hormonal health,
                and nervous system regulation. Together, we build individualized
                plans weaving nutrition, metabolic health, movement, hormonal
                awareness, and Polyvagal theory-based nervous system regulation
                into one sustainable path toward lasting vitality from the inside
                out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
