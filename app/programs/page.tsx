import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Programs · HODA Wellness Group",
  description:
    "Explore HODA Wellness Group's personalized programs — from our 6-Week Optimization to VIP Coaching, Workshops, and Corporate Wellness.",
};

const timeline = [
  {
    week: "1st Week",
    phase: "Assessment",
    color: "#5B7461",
    items: [
      "Comprehensive intake",
      "3-day food log analysis",
      "Fitness assessment",
      "Labs and body composition analysis",
      "CGM introduction",
    ],
  },
  {
    week: "Weeks 2–6",
    phase: "HODA Longevity Blueprint",
    color: "#6E8CA0",
    items: [
      "Personalized plan integrating nutrition, fitness, nervous system regulation and supplement recommendations",
      "Twice-weekly training sessions",
      "Weekly RD support session",
      "Weekly nervous system coaching session",
    ],
  },
  {
    week: "Week 6",
    phase: "Re-assessment",
    color: "#8AA194",
    items: [
      "Integrated review — what improved, what matters most",
      "Refined HODA Longevity Blueprint — an updated roadmap for continued progress, resilience, and durable aging",
    ],
  },
];

const programs = [
  {
    id: "6-week-optimization",
    title: "A Personalized Path To Your Best Health",
    shortDescription:
      "Our flagship program begins with a deep understanding of your biology, your lifestyle, and your goals. From there, our team builds a plan that evolves with you.",
    duration: "",
    format: "",
    image: "/images/PersonMountainHoda.jpg",
    highlights: [
      "Comprehensive assessment & lab review",
      "Wearable & CGM integration",
      "Personalized plan & expert coaching",
      "Ongoing support & accountability",
      "Measurable progress & sustainable results",
    ],
    fullDescription: "",
    closingText: "",
    accent: "#5B7461",
    showTimeline: true,
  },
  {
    id: "vip-coaching",
    title: "HODA Health Optimization Membership",
    shortDescription:
      "The HODA Health Optimization Membership provides continuous, coordinated support through one integrated Health Optimization Program. Our multidisciplinary team works together to ensure every component is aligned, personalized, and adjusted as your needs change.",
    duration: "",
    format: "",
    image: "/images/YogandflowersHoda.jpg",
    highlights: [
      "Priority access to your HODA care team",
      "1:1 progressive fitness coaching",
      "Quarterly comprehensive reassessments",
      "Ongoing personalized nutrition adjustments",
      "Ongoing nervous system regulation and recalibration",
    ],
    fullDescription: "",
    closingText: "",
    accent: "#6E8CA0",
    showTimeline: false,
  },
  {
    id: "workshops-seminars",
    title: "Workshops & Seminars",
    shortDescription:
      "Our evidence-informed seminars are designed for individuals who want to take a proactive role in their health. These seminars are a great way to experience the HODA method, learn about our integrated approach, and gain practical strategies you can begin applying immediately.",
    duration: "",
    format: "",
    image: "/images/GroupNatureHoda.jpg",
    highlights: [
      "Expert-led sessions",
      "Live Q&A",
      "Take-home resource guide",
      "Open to non-clients",
    ],
    fullDescription: "",
    closingText:
      "Sample topics include Metabolic Health & Healthy Aging; Nutrition for Lifelong Vitality; Strength, Mobility & Physical Resilience; Stress, Recovery & Nervous System Regulation; The HODA Method: Integrating the Pillars of Lasting Health.\n\nWhether you're exploring ways to improve your health or considering one of our programs, our seminars offer an inspiring introduction to the HODA philosophy and the science behind sustainable health optimization.",
    bulletsLast: true,
    accent: "#8AA194",
    showTimeline: false,
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    shortDescription:
      "Bring HODA's integrated approach to your team — workshops, assessments, and ongoing programs for organizations.",
    duration: "",
    format: "",
    image: "/images/IMG_3470.jpg",
    highlights: [
      "Custom program design",
      "On-site or virtual delivery",
      "Group + individual options",
    ],
    fullDescription:
      "Corporate Wellness brings the full HODA approach to your team. We design custom programs for organizations — combining group workshops, individual assessments, and ongoing coaching tracks.\n\nDelivery is flexible: on-site at your office, virtual across distributed teams, or a hybrid of both. Programs are scoped to your goals — reducing burnout, improving energy and focus, supporting executive performance, or building a longer-term culture of health.",
    closingText: "",
    accent: "#2E4A38",
    showTimeline: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF7F2]">
        {/* Hero */}
        <section className="relative h-72 md:h-96 flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/IMG_2152-1.jpeg"
              alt="Beach landscape"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#2E2A26]/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white/60 mb-3">
              What We Offer
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Our Programs
            </h1>
          </div>
        </section>

        {/* Programs list */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-24">
          {programs.map((program, i) => (
            <div key={program.id} id={program.id}>
              {/* Program card */}
              <div
                className={`flex flex-col lg:flex-row gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative flex-1 min-h-[320px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {(program.duration || program.format) && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {program.duration && (
                        <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#E7DFD3] text-[#6B5E52]">
                          {program.duration}
                        </span>
                      )}
                      {program.format && (
                        <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#E7DFD3] text-[#6B5E52]">
                          {program.format}
                        </span>
                      )}
                    </div>
                  )}

                  <h2
                    className="text-3xl sm:text-4xl font-light text-[#2E2A26] mb-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {program.title}
                  </h2>

                  <p className="text-[#6B5E52] text-sm leading-relaxed mb-6">
                    {program.shortDescription}
                  </p>

                  {program.fullDescription && (
                    <div className="space-y-3 mb-8">
                      {program.fullDescription.split("\n\n").map((para, j) => (
                        <p key={j} className="text-[#6B5E52] text-sm leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {program.id === "vip-coaching" && (
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6E8CA0] mb-3">
                      Membership Includes
                    </p>
                  )}

                  {"bulletsLast" in program && program.bulletsLast && program.closingText && (
                    <div className="space-y-3 mb-6">
                      {program.closingText.split("\n\n").map((para, j) => (
                        <p key={j} className="text-[#6B5E52] text-sm leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2 mb-8">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: program.accent }}
                        >
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-[#2E2A26] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {!("bulletsLast" in program && program.bulletsLast) && program.closingText && (
                    <div className="space-y-3 mb-8">
                      {program.closingText.split("\n\n").map((para, j) => (
                        <p key={j} className="text-[#6B5E52] text-sm leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/#contact"
                    className="inline-flex items-center px-6 py-3 rounded-full text-white text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
                    style={{ backgroundColor: program.accent }}
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>

              {/* Timeline cards — only for 6-week program */}
              {program.showTimeline && (
                <div className="mt-14">
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#5B7461] mb-6">
                    How It Works
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {timeline.map((step) => (
                      <div
                        key={step.phase}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm"
                      >
                        <div
                          className="px-6 pt-5 pb-5 min-h-[100px] flex flex-col justify-between"
                          style={{ backgroundColor: step.color }}
                        >
                          <p className="text-white/70 text-[11px] font-semibold tracking-widest uppercase">
                            {step.week}
                          </p>
                          <h3 className="text-white text-xl font-semibold tracking-wide mt-2">
                            {step.phase}
                          </h3>
                        </div>
                        <div className="px-6 py-6">
                          <ul className="space-y-3">
                            {step.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-[#6B5E52] text-sm leading-relaxed"
                              >
                                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#5B7461] flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#2E2A26] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl sm:text-4xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Not sure which program is right for you?
            </h2>
            <p className="text-white/70 text-base mb-8">
              Book a free 20-minute discovery call and we'll help you find the best fit.
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
