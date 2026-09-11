"use client";

import { Star, Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import { COURSES } from "@/lib/constants";
import { Card } from "@/components/ui";
import Button from "@/components/ui/Button";

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Our Courses
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Featured Learning Tracks
          </h2>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            Industry-leading curriculum designed by engineers from top tech companies.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <Card key={course.id} hover className="p-6">
              <div className="flex flex-col h-full">
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-lavender uppercase tracking-wider">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-cream mb-2">
                  {course.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed mb-4 flex-1">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-cream-faint">
                  <div className="w-9 h-9 rounded-full bg-lavender/20 flex items-center justify-center">
                    <span className="text-lavender font-mono text-xs font-bold">
                      {course.instructor.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-cream text-sm font-medium">
                      {course.instructor.name}
                    </div>
                    <div className="text-cream-muted text-xs">
                      {course.instructor.role}, {course.instructor.company}
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-cream-muted mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded bg-cream-faint text-cream-muted text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-cream-faint">
                  <div>
                    <span className="font-mono text-2xl font-bold text-copper">
                      ${course.price}
                    </span>
                    <span className="text-cream-muted text-sm line-through ml-2">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-copper fill-copper" />
                    <span className="font-mono text-sm text-cream">{course.rating}</span>
                    <span className="text-cream-muted text-xs">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="group">
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
