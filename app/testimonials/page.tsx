import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Testimonials · HODA Wellness Group",
  description:
    "Real client reviews for HODA Wellness Group — see what our clients are saying about their experience with our Health Optimization and Durable Aging Care Team.",
};

const testimonials = [
  {
    author: "Tanya I.",
    initial: "T",
    caption: "Verified Google Review",
    quote:
      "I had a wonderful experience working with the Health Optimization and Durable Aging Care Team. I especially appreciated their comprehensive approach to my health—they reviewed my blood work, diet, exercise habits, and overall lifestyle rather than looking at any one area in isolation.\n\nWhat I found particularly valuable were the durable aging recommendations they provided. They gave me practical, thoughtful suggestions for supporting my health and well-being over the long term, personalized to me and, importantly, realistic and easy to incorporate into my everyday life.\n\nThe team was knowledgeable, attentive, and genuinely supportive. I am very grateful for their guidance and would highly recommend the Health Optimization and Durable Aging Care Team to anyone looking for a personalized and thoughtful approach to improving their health and quality of life.",
  },
  {
    author: "Inna O.",
    initial: "I",
    caption: "Verified Google Review",
    quote:
      "I joined the HODA Wellness Group program and have been training with Jack. I really appreciate his individualized approach and how he tailors the workouts to my abilities and goals.\n\nI've noticed significant improvements in my strength, balance, flexibility, and confidence, and my back pain has decreased. I feel stronger and more energetic. I'm very happy with my progress and plan to continue the program.",
  },
  {
    author: "Olga, Founder",
    initial: "O",
    caption: "Client & Founder",
    quote:
      "I've followed the principles behind this program for years, and it keeps paying off. Checking my labs and wearing a CGM helped me identify issues with my metabolism and address them early. Working with our dietitian, her recommendations helped me adjust my diet and address deficiencies I didn't know I had.\n\nTraining with our coach has helped me improve year over year, so I can keep doing the things I love — pickleball, skiing, hiking — even as I get older.",
  },
];

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8C5.582 8 2 11.582 2 16s3.582 8 8 8V16H4c0-3.314 2.686-6 6-6V8zm16 0c-4.418 0-8 3.582-8 8s3.582 8 8 8V16h-6c0-3.314 2.686-6 6-6V8z" />
    </svg>
  );
}

function Stars({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#8AA194]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF7F2]">
        {/* Hero */}
        <section className="relative h-72 md:h-96 flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/YogaHoda.jpg"
              alt="Two people silhouetted doing yoga at sunset on an outdoor terrace"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#2E2A26]/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
              Client Stories
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What Our Clients <em className="text-[#8AA194] not-italic font-medium">Say</em>
            </h1>
          </div>
        </section>

        {/* Rating line */}
        <section className="max-w-3xl mx-auto px-6 lg:px-10 pt-16 pb-2 text-center">
          <div className="inline-flex items-center gap-3">
            <Stars />
            <span className="text-[#2E2A26] text-sm font-medium">5.0</span>
            <span className="text-[#6B5E52] text-sm">
              &middot; Based on verified Google reviews
            </span>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-2xl shadow-sm border border-[#E7DFD3] p-10 flex flex-col"
              >
                <QuoteMark className="w-9 h-9 text-[#8AA194]/70 mb-6" />

                <div className="flex-1 space-y-4 mb-8">
                  {t.quote.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-[#2E2A26] text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-[#E7DFD3]">
                  <div className="w-10 h-10 rounded-full bg-[#5B7461] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[#2E2A26] text-sm font-semibold">{t.author}</p>
                    <p className="text-[#8B7C6A] text-xs tracking-wide uppercase">
                      {t.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#2E2A26] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl sm:text-4xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Ready to write your own story?
            </h2>
            <p className="text-white/70 text-base mb-8">
              Book a free 20-minute discovery call and see what a personalized approach can do for you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#5B7461] text-white font-medium tracking-wide hover:bg-[#4a6050] transition-colors duration-200"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
