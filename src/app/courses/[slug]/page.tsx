import { notFound } from "next/navigation";
import { Star, Clock, BookOpen, Users, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COURSES, SITE } from "@/lib/constants";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = COURSES.find((c) => c.id === params.slug);
  if (!course) return { title: "Course Not Found" };
  return { title: course.title };
}

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = COURSES.find((c) => c.id === params.slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/courses" className="inline-flex items-center gap-2 text-text-muted hover:text-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-8 shadow-xl">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              {course.badge && (
                <span className="absolute top-4 right-4 px-4 py-2 rounded-full bg-copper text-white text-sm font-mono font-bold">
                  {course.badge}
                </span>
              )}
            </div>

            <span className="font-mono text-xs text-copper uppercase tracking-wider">{course.category}</span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">{course.title}</h1>
            <p className="text-text-muted text-lg leading-relaxed mb-8">{course.description}</p>

            {/* Instructor */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-border">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">Your Instructor</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center">
                  <span className="text-copper font-mono text-lg font-bold">{course.instructor.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div>
                  <div className="text-navy font-medium">{course.instructor.name}</div>
                  <div className="text-text-muted text-sm">{course.instructor.role}</div>
                  <div className="text-copper text-sm">{course.instructor.company}</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-border">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">Skills You&apos;ll Learn</h3>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-copper/10 border border-copper/20 text-copper text-sm font-mono">{skill}</span>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[`${course.lessons} Lessons`, `${course.projects} Projects`, `${course.duration} Duration`, "Lifetime Access", "Certificate of Completion", "Mentor Support"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 border border-border shadow-lg">
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-4xl font-bold text-navy">${course.price}</span>
                    <span className="text-text-light text-lg line-through">${course.originalPrice}</span>
                  </div>
                  <span className="text-copper text-sm font-mono">{Math.round((1 - course.price / course.originalPrice) * 100)}% OFF</span>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  {[["Duration", course.duration], ["Lessons", course.lessons], ["Projects", course.projects], ["Level", course.level]].map(([label, val]) => (
                    <div key={label as string} className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">{label as string}</span>
                      <span className="text-navy font-medium">{val as string | number}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-copper fill-copper" />
                      <span className="text-navy font-medium">{course.rating}</span>
                      <span className="text-text-light">({course.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                </div>

                <a href={SITE.phoneLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-copper text-white rounded-xl text-center font-semibold hover:bg-copper-dark transition-colors mb-3">
                  Enroll Now
                </a>
                <a href={SITE.phoneLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-surface-alt border border-border text-navy rounded-xl text-center font-semibold hover:bg-bg transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
