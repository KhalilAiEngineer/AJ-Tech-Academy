"use client";

import { useState } from "react";
import { Search, Filter, Star, Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/constants";
import { Card } from "@/components/ui";
import Button from "@/components/ui/Button";

const categories = ["All", "AI & Machine Learning", "Full-Stack Development", "Cloud & DevOps", "Product & UX Design"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");

  const filtered = COURSES.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || c.category === category;
    const matchLevel = level === "All Levels" || c.level === level;
    return matchSearch && matchCategory && matchLevel;
  });

  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-copper mb-4 block">
            Course Catalog
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
            Explore Our Courses
          </h1>
          <p className="text-cream-muted text-lg max-w-2xl mx-auto">
            Find the perfect learning track to accelerate your career in tech.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-muted" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface border border-cream-faint rounded-xl text-cream placeholder:text-cream-muted focus:outline-none focus:border-copper/50"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-surface border border-cream-faint rounded-xl text-cream appearance-none cursor-pointer focus:outline-none focus:border-copper/50"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="px-6 py-3 bg-surface border border-cream-faint rounded-xl text-cream appearance-none cursor-pointer focus:outline-none focus:border-copper/50"
          >
            {levels.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-cream-muted text-sm mb-6">
          Showing <span className="text-copper font-mono">{filtered.length}</span> courses
        </p>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card hover className="overflow-hidden h-full">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  {course.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-copper text-bg text-xs font-mono font-bold">
                      {course.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <span className="font-mono text-xs text-lavender uppercase tracking-wider">
                    {course.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-cream mt-2 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {course.description}
                  </p>

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

                  <div className="flex items-center justify-between pt-4 border-t border-cream-faint">
                    <div>
                      <span className="font-mono text-xl font-bold text-copper">
                        ${course.price}
                      </span>
                      <span className="text-cream-muted text-sm line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-copper fill-copper" />
                      <span className="font-mono text-sm text-cream">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-cream-muted text-lg">No courses found matching your criteria.</p>
            <Button variant="secondary" className="mt-4" onClick={() => { setSearch(""); setCategory("All"); setLevel("All Levels"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
