"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-light overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-copper/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-top/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-copper" />
              <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                Limited Spots Available
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Next Role Is{" "}
              <span className="italic text-copper">12 Weeks</span> Away
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of engineers who accelerated their careers with
              expert-led, project-based learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-copper text-white rounded-full font-semibold hover:bg-copper-dark transition-colors group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={SITE.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Talk to Admissions
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                7-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
