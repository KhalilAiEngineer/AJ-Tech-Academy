"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            What Our <span className="italic">Students</span> Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-border relative">
            <Quote className="w-16 h-16 text-copper/10 absolute top-6 right-6" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-copper fill-copper"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-heading text-xl lg:text-2xl text-navy leading-relaxed mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover border-2 border-copper/20"
              />
              <div>
                <div className="font-medium text-navy">{testimonial.name}</div>
                <div className="text-text-muted text-sm">
                  {testimonial.role} at {testimonial.company}
                </div>
                <div className="font-mono text-xs text-copper mt-1">
                  Course: {testimonial.course}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-navy hover:border-navy transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-copper" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-navy hover:border-navy transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
