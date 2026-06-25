"use client";

import Image from "next/image";
import { useScrollReveal } from "../useScrollReveal";

const teamMembers = [
  {
    name: "Olga Rubanov",
    title: "Founder",
    photo: "/images/team/olga.png",
    bio: "With nearly three decades of executive leadership experience in technology and consulting, Olga is also a doctoral candidate in Functional Medicine, has studied Polyvagal Theory and its applications, and specializes in the Focusing technique. She is passionate about practicing the same principles she teaches to support long-term vitality and well-being.",
  },
  {
    name: "Anna Rabinovich",
    title: "DNP, APRN, ANP-BC, CDCES, Nurse Practitioner",
    photo: "/images/team/anna.png",
    bio: "A board-certified Adult Nurse Practitioner with two decades of experience in endocrinology, diabetes management, and primary care, practicing across hospital, clinic, and telehealth settings. She specializes in managing complex chronic conditions through a holistic, patient-centered approach and the integration of advanced technologies.",
  },
  {
    name: "Eugenia Kobylatsky",
    title: "M.Sc., Registered Dietitian",
    photo: "/images/team/eugenia.png",
    bio: "Author of 4 books on nutrition and weight management, with two decades of experience. She specializes in disease prevention, cardiovascular health, type 2 diabetes, and sustainable weight control, translating complex scientific research into practical, personalized nutrition that fits everyday meals.",
  },
  {
    name: "Jack Johnston",
    title: "NASM-Certified Personal Trainer",
    photo: "/images/team/jack.png",
    bio: "Over 20 years of experience in fitness, performance, and corrective exercise. Specializing in longevity-focused training, human performance, and movement optimization, he helps clients build strength, improve function, and achieve sustainable long-term results through evidence-based coaching.",
  },
];

export default function Team() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="team" className="py-24 lg:py-32 bg-[#F2EEE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#5B7461] mb-4">
            Meet Our Team
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2E2A26] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Experts <em>Who Care</em>
          </h2>
          <p className="text-[#6B5E52] text-lg max-w-xl mx-auto">
            A collaborative team of specialists dedicated to your long-term health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  delay,
}: {
  member: (typeof teamMembers)[0];
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-44 h-44 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-md flex-shrink-0">
        <Image
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          width={176}
          height={176}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h3
        className="text-2xl font-semibold text-[#2E2A26] mb-1"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {member.name}
      </h3>
      <p className="text-[#5B7461] text-xs font-medium tracking-wide uppercase mb-4">
        {member.title}
      </p>
      <p className="text-[#6B5E52] text-sm leading-relaxed mt-auto">{member.bio}</p>
    </div>
  );
}
