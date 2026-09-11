import { Users, Rocket, Briefcase, Clock } from "lucide-react";
import { BENEFITS } from "@/lib/constants";
import { Card } from "@/components/ui";

const iconMap = {
  Users,
  Rocket,
  Briefcase,
  Clock,
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Built for Serious Learners
          </h2>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            Everything you need to accelerate your career in tech.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <Card key={benefit.title} hover className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="font-heading text-lg font-bold text-cream mb-3">
                  {benefit.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
