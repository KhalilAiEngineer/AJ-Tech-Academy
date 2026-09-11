"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Card } from "@/components/ui";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            What Our Students Say
          </h2>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            Real stories from engineers who transformed their careers.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 lg:p-12 relative">
            <Quote className="w-12 h-12 text-copper/20 absolute top-6 right-6" />

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
            <blockquote className="font-heading text-xl lg:text-2xl text-cream leading-relaxed mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-copper/30"
              />
              <div>
                <div className="font-medium text-cream">{testimonial.name}</div>
                <div className="text-cream-muted text-sm">
                  {testimonial.role} at {testimonial.company}
                </div>
                <div className="font-mono text-xs text-lavender mt-1">
                  Course: {testimonial.course}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream-faint">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-lg border border-cream-faint flex items-center justify-center text-cream-muted hover:text-copper hover:border-copper/30 transition-colors"
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
                      i === current ? "bg-copper" : "bg-cream-faint"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-lg border border-cream-faint flex items-center justify-center text-cream-muted hover:text-copper hover:border-copper/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
