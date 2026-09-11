"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-cream-faint bg-surface overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-copper/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-copper/30 bg-copper/5 mb-6">
              <Sparkles className="w-4 h-4 text-copper" />
              <span className="font-mono text-xs text-copper uppercase tracking-wider">
                Limited Spots Available
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
              Your Next Role Is{" "}
              <span className="text-copper italic">12 Weeks</span> Away
            </h2>

            <p className="text-cream-muted text-lg max-w-2xl mx-auto mb-8">
              Join thousands of engineers who accelerated their careers with
              expert-led, project-based learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                Talk to Admissions
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream-muted">
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
