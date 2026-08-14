"use client";

import { useScrollReveal } from "../useScrollReveal";
import { useState } from "react";

const FORMSPREE_ID = "xwleqykj";

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please email us directly at info@hodawellnessgroup.com");
    }
  }

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
            Ready to{" "}
            <em className="text-[#E7DFD3]">Optimize Your Health?</em>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Your best health is within reach. Let&apos;s build your personalized plan.
          </p>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#5B7461] font-medium tracking-wide hover:bg-[#FAF7F2] transition-all duration-200 shadow-md cursor-pointer"
              >
                Book Your Assessment
              </button>
              <a
                href="tel:+12142848223"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white/60 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-200"
              >
                Call Us: +1 214-284-8223
              </a>
            </div>
          ) : submitted ? (
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <p className="text-2xl font-light mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                Thank you — we&apos;ll be in touch soon!
              </p>
              <p className="text-white/70 text-sm">We typically respond within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left space-y-4"
            >
              <p className="text-white/80 text-sm text-center mb-6">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-xs font-medium uppercase tracking-wide mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-medium uppercase tracking-wide mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium uppercase tracking-wide mb-1.5">
                  Phone <span className="text-white/40 normal-case font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium uppercase tracking-wide mb-1.5">
                  Message <span className="text-white/40 normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 resize-none"
                  placeholder="Tell us a bit about your health goals..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-white text-[#5B7461] font-medium tracking-wide hover:bg-[#FAF7F2] transition-all duration-200 shadow-md disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
              <p className="text-center text-white/50 text-xs">
                Or email us directly at{" "}
                <a href="mailto:info@hodawellnessgroup.com" className="underline hover:text-white/80">
                  info@hodawellnessgroup.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
