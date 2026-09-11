"use client";

import { Star, Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/constants";

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Our Courses
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            More <span className="italic">ways</span> to sell
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            There&apos;s no all-in-one formula for success as a creator.
            That&apos;s why we let you choose how to build your business.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="group bg-surface-alt rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Course Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  {course.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-copper text-white text-xs font-mono font-bold">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-copper">
                    {course.category}
                  </span>
                  <h3 className="font-heading text-base font-bold text-navy mt-1 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-text-light mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.lessons}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="font-mono text-xl font-bold text-navy">
                        ${course.price}
                      </span>
                      <span className="text-text-light text-xs line-through ml-1">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-copper fill-copper" />
                      <span className="font-mono text-xs text-navy font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white rounded-full font-semibold hover:bg-navy-light transition-colors group"
          >
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
