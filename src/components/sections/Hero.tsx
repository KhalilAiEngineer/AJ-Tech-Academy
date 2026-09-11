"use client";

import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-top via-sky-bottom to-bg" />

      {/* Cloud decorations */}
      <div className="absolute top-20 left-10 w-64 h-20 bg-white/40 rounded-full blur-2xl" />
      <div className="absolute top-32 right-20 w-48 h-16 bg-white/30 rounded-full blur-xl" />
      <div className="absolute top-48 left-1/3 w-56 h-14 bg-white/25 rounded-full blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        {/* Top badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 text-text-muted text-sm">
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            Next Cohort: Oct 14 — Limited Spots
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-tight mb-6">
            With a <span className="italic text-copper">strong focus</span> on{" "}
            making money through{" "}
            <span className="italic text-copper">teaching</span>
          </h1>
          <p className="text-text-muted text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We help creators engage their online audiences and get paid on their own terms
            with courses, coaching, and downloadable content.
          </p>
        </div>

        {/* Video Demo Card */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
            {/* Video placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-surface-alt to-bg flex items-center justify-center">
              <Image
                src="/images/team-coding.jpg"
                alt="Learning platform demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/10" />

              {/* Play button */}
              <button className="relative z-10 w-20 h-20 rounded-full bg-copper flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>

              {/* Floating elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-copper/20 border-2 border-white flex items-center justify-center">
                      <span className="text-[8px] font-bold text-copper">{i}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono text-text-muted">24:12</span>
              </div>

              {/* Bottom toolbar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center">
                  <Play className="w-4 h-4 text-navy" />
                </div>
                <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GO</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-navy rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating testimonial card - left */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-border max-w-[200px] hidden lg:block">
            <p className="text-[10px] font-mono uppercase tracking-wider text-text-light mb-2">
              &ldquo;This is an excellent platform for educators to monetize their skills.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center">
                <span className="text-xs font-bold text-copper">AS</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-navy">Arslan Shavo</div>
                <div className="text-[10px] text-text-light">Teacher</div>
              </div>
            </div>
          </div>

          {/* Floating stats card - right */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-border hidden lg:block">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-navy">25K</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-light">
                Satisfied Users
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border text-center">
              <p className="text-[10px] text-text-muted">
                We are chosen for <span className="font-semibold text-navy">our quality</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-navy">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
