import { Users, Target, Award, Heart } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We believe everyone deserves access to world-class tech education." },
  { icon: Users, title: "Community First", description: "Learning is better together. Our cohorts build lifelong connections." },
  { icon: Award, title: "Excellence", description: "We partner only with instructors who have proven track records." },
  { icon: Heart, title: "Student Success", description: "Your career advancement is our primary metric of success." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-student.jpg"
                alt="Students learning together"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-border max-w-[220px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-copper">AS</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">Arslan Shavo</div>
                  <div className="text-xs text-text-light">Teacher</div>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                &ldquo;Empower your passion for teaching by sharing your expertise and unlock the path to financial freedom.&rdquo;
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Sell <span className="italic">your</span> expertise,{" "}
              gain financial{" "}
              <span className="italic">freedom</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We encourage teachers to leverage their knowledge, skills, and experience
              by creating and selling educational products or services. This could include
              online courses, coaching sessions, e-books, lesson plans, and other
              downloadable content.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-heading text-2xl font-bold text-navy">Top 1</div>
                <div className="text-xs text-text-light font-mono uppercase">In the Industry</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-navy">25K</div>
                <div className="text-xs text-text-light font-mono uppercase">Satisfied Users</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-navy">50M</div>
                <div className="text-xs text-text-light font-mono uppercase">Total Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
