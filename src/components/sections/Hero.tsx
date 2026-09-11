"use client";

import { ArrowRight, Play } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lavender/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-copper/30 bg-copper/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span className="font-mono text-xs text-copper uppercase tracking-wider">
                Next Cohort: Oct 14
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Master Senior-Level{" "}
              <span className="text-copper italic">Tech Skills</span>{" "}
              in 12 Weeks
            </h1>

            <p className="text-cream-muted text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              {SITE.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group">
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl font-bold text-copper">
                    {stat.value}
                  </div>
                  <div className="text-cream-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative grid */}
              <div className="absolute inset-0 rounded-2xl border border-cream-faint bg-surface/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(245,241,232,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,232,0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }} />
              </div>

              {/* Floating cards */}
              <div className="absolute top-8 left-8 bg-surface border border-cream-faint rounded-xl p-4 shadow-lg animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center">
                    <span className="text-copper font-mono text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-cream text-sm font-medium">Generative AI</div>
                    <div className="text-cream-muted text-xs">36 lessons</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-8 bg-surface border border-cream-faint rounded-xl p-4 shadow-lg animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lavender/20 flex items-center justify-center">
                    <span className="text-lavender font-mono text-sm font-bold">FS</span>
                  </div>
                  <div>
                    <div className="text-cream text-sm font-medium">Full-Stack</div>
                    <div className="text-cream-muted text-xs">52 lessons</div>
                  </div>
                </div>
              </div>

              {/* Center badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-copper/20 border border-copper/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-copper flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-bg">AJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
