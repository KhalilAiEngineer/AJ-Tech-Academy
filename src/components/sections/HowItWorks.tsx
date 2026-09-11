import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Your Path to Mastery
          </h2>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            A proven 3-step process to transform your skills and career.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-cream-faint" />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="relative w-20 h-20 rounded-full bg-surface border border-cream-faint flex items-center justify-center mx-auto mb-6">
                  <span className="font-mono text-2xl font-bold text-copper">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
