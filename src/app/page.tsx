import { Header, Footer } from "@/components/layout";
import {
  Hero,
  FeaturedCourses,
  Benefits,
  HowItWorks,
  Testimonials,
  FinalCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-navy">
      <Header />

      <main>
        <Hero />
        <FeaturedCourses />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
