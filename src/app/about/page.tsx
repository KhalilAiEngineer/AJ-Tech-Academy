import { Users, Target, Award, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We believe everyone deserves access to world-class tech education." },
  { icon: Users, title: "Community First", description: "Learning is better together. Our cohorts build lifelong connections." },
  { icon: Award, title: "Excellence", description: "We partner only with instructors who have proven track records." },
  { icon: Heart, title: "Student Success", description: "Your career advancement is our primary metric of success." },
];

const milestones = [
  { year: "2022", title: "Founded", description: "Started with a vision to make quality tech education accessible." },
  { year: "2023", title: "10K Students", description: "Reached 10,000 enrolled students across 20+ countries." },
  { year: "2024", title: "50+ Courses", description: "Expanded to over 50 expert-led courses in tech and product." },
  { year: "2025", title: "120K+ Engineers", description: "Trained over 120,000 engineers with industry-leading outcomes." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">About Us</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-6">
            We&apos;re Building the Future of{" "}
            <span className="italic text-copper">Tech Education</span>
          </h1>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            AJ Tech Academy was founded with a simple mission: make world-class tech education
            accessible to every ambitious professional.
          </p>
        </div>

        {/* Image + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/team-coding.jpg" alt="Team collaborating" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy mb-6">
              Training Engineers Who Build the Future
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Our instructors are engineers and leaders from top companies like Google, Stripe,
              DeepMind, and Figma. They don&apos;t just teach theory — they share real-world patterns from production systems at scale.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[["120K+", "Engineers Trained"], ["4.9", "Average Rating"], ["94%", "Completion Rate"], ["85%", "Career Advancement"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-heading text-3xl font-bold text-copper">{val}</div>
                  <div className="text-text-muted text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">Our Journey</h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-sm font-bold text-copper">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-bold text-navy mb-1">{m.title}</h3>
                  <p className="text-text-muted text-sm">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">Ready to Start?</h2>
          <p className="text-text-muted mb-8">Join thousands of engineers who are building their future.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="px-8 py-3.5 bg-copper text-white rounded-full font-semibold hover:bg-copper-dark transition-colors">
              Explore Courses
            </Link>
            <Link href="/contact" className="px-8 py-3.5 bg-white border border-border text-navy rounded-full font-semibold hover:bg-surface-alt transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
