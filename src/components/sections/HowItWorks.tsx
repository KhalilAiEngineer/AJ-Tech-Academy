import Image from "next/image";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Your Path to <span className="italic">Mastery</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A proven 3-step process to transform your skills and career.
          </p>
        </div>

        {/* Steps with images */}
        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="group">
              <div className="relative bg-surface-alt rounded-3xl overflow-hidden mb-6 aspect-[4/3]">
                <Image
                  src={index === 0 ? "/images/course-ai.jpg" : index === 1 ? "/images/team-coding.jpg" : "/images/course-fullstack.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <span className="font-mono text-lg font-bold text-copper">{item.step}</span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
