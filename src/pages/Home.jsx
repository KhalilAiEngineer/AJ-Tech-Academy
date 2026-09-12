import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, TrendingUp, Play, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { courses, testimonials, stats } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[600px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-40 right-40 w-20 h-20 border-4 border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Elevate Your Skills<br />Learn <span className="text-yellow-300">Anything</span>,<br />Anywhere.
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Your gateway to comprehensive learning and skill development. Join thousands of students mastering new skills with expert-led courses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="gradient-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-flex items-center gap-2 shadow-lg">
                  Explore Courses <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/register" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2">
                  <Play className="w-5 h-5" /> Get Started Free
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop" alt="Students learning" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">50K+ Students</p>
                      <p className="text-sm text-gray-500">Already Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Welcome To Eduactly</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Your Gateway To Comprehensive Learning And Skill Development Empowering.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Flexible Learning", desc: "Learn at your own pace with 24/7 access to course materials and lifetime access to all enrolled courses." },
              { icon: Award, title: "World Class Instructors", desc: "Learn from industry experts and professionals who bring real-world experience to every lesson." },
              { icon: Users, title: "Skill Development", desc: "Build practical skills with hands-on projects, assignments, and real-world case studies." }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md card-hover text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Your Learning Journey Starts Here</h2>
              <h3 className="text-xl text-primary font-semibold mb-4">About Our Platform</h3>
              <p className="text-gray-500 mb-6">
                We believe everyone deserves access to quality education. Our platform connects passionate instructors with eager learners, creating an environment where knowledge flows freely and skills grow naturally.
              </p>
              <div className="space-y-3 mb-8">
                {["Expert-led courses with real-world projects", "Flexible learning that fits your schedule", "Industry-recognized certificates", "Supportive community of learners"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/courses" className="gradient-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-flex items-center gap-2">
                Start Learning <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Students collaborating" className="rounded-2xl shadow-xl" />
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Featured Courses</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore our most popular courses chosen by thousands of students worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="gradient-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-flex items-center gap-2">
              View All Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Students Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Join thousands of successful learners who transformed their careers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-bg-light rounded-2xl p-8 shadow-md card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-secondary">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join over 50,000 students who are already learning and advancing their careers. Start today and unlock your potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Create Free Account
            </Link>
            <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
