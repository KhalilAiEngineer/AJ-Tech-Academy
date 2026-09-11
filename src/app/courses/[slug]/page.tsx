import { notFound } from "next/navigation";
import { Star, Clock, BookOpen, Users, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COURSES, SITE } from "@/lib/constants";
import { Card } from "@/components/ui";
import Button from "@/components/ui/Button";

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
        {/* Back */}
        <Link href="/courses" className="inline-flex items-center gap-2 text-cream-muted hover:text-cream mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
              {course.badge && (
                <span className="absolute top-4 right-4 px-4 py-2 rounded-full bg-copper text-bg text-sm font-mono font-bold">
                  {course.badge}
                </span>
              )}
            </div>

            {/* Title & Category */}
            <span className="font-mono text-xs text-lavender uppercase tracking-wider">
              {course.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-cream mt-2 mb-4">
              {course.title}
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Instructor */}
            <Card className="p-6 mb-8">
              <h3 className="font-heading text-lg font-bold text-cream mb-4">Your Instructor</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-lavender/20 flex items-center justify-center">
                  <span className="text-lavender font-mono text-lg font-bold">
                    {course.instructor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-cream font-medium">{course.instructor.name}</div>
                  <div className="text-cream-muted text-sm">{course.instructor.role}</div>
                  <div className="text-copper text-sm">{course.instructor.company}</div>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-6 mb-8">
              <h3 className="font-heading text-lg font-bold text-cream mb-4">Skills You&apos;ll Learn</h3>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-copper/10 border border-copper/20 text-copper text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* What's Included */}
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-cream mb-4">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  `${course.lessons} Lessons`,
                  `${course.projects} Projects`,
                  `${course.duration} Duration`,
                  "Lifetime Access",
                  "Certificate of Completion",
                  "Mentor Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                    <span className="text-cream-muted">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-4xl font-bold text-copper">${course.price}</span>
                    <span className="text-cream-muted text-lg line-through">${course.originalPrice}</span>
                  </div>
                  <span className="text-copper text-sm font-mono">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Meta */}
                <div className="space-y-4 mb-6 pb-6 border-b border-cream-faint">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Duration</span>
                    <span className="text-cream font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Lessons</span>
                    <span className="text-cream font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Projects</span>
                    <span className="text-cream font-medium">{course.projects}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Level</span>
                    <span className="text-cream font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-copper fill-copper" />
                      <span className="text-cream font-medium">{course.rating}</span>
                      <span className="text-cream-muted">({course.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cream-muted">Students</span>
                    <span className="text-cream font-medium">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full mb-3">Enroll Now</Button>
                <a
                  href={SITE.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer px-6 py-3 text-base border border-cream-faint text-cream hover:bg-cream-faint w-full"
                >
                  Contact Us
                </a>

                <p className="text-center text-cream-muted text-xs mt-4">
                  Next cohort starts {course.instructor.name ? "soon" : "soon"}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
