export const SITE = {
  name: "AJ Tech Academy",
  tagline: "Master in-demand tech skills with expert-led courses.",
  description:
    "AJ Tech Academy — The modern learning platform for ambitious professionals. Master AI, full-stack development, cloud, and product skills with expert-led interactive courses.",
  phone: "+92 324 0654394",
  phoneLink: "https://wa.me/923240654394",
  email: "info@ajtechacademy.com",
};

export const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COURSES = [
  {
    id: "ai-agent-systems",
    title: "Generative AI & Agentic Systems",
    category: "AI & Machine Learning",
    level: "Intermediate",
    description:
      "Architect autonomous multi-agent pipelines, LLM fine-tuning, RAG workflows, and production evals.",
    duration: "8 Weeks",
    lessons: 36,
    projects: 4,
    rating: 4.96,
    reviews: 1420,
    students: 8640,
    price: 349,
    originalPrice: 499,
    badge: "Trending",
    image: "/images/course-ai.jpg",
    instructor: {
      name: "Dr. Elena Rostova",
      role: "Staff AI Research Engineer",
      company: "Ex-DeepMind",
    },
    skills: ["LangGraph", "Vector DBs", "Fine-Tuning", "RAG", "Prompt Engineering"],
  },
  {
    id: "full-stack-dev",
    title: "Full-Stack Web Engineering",
    category: "Full-Stack Development",
    level: "Beginner",
    description:
      "Build production-grade applications with React, Node.js, databases, and deployment pipelines.",
    duration: "12 Weeks",
    lessons: 52,
    projects: 6,
    rating: 4.91,
    reviews: 2180,
    students: 14320,
    price: 299,
    originalPrice: 449,
    badge: "Best Seller",
    image: "/images/course-fullstack.jpg",
    instructor: {
      name: "James Mitchell",
      role: "Principal Engineer",
      company: "Ex-Stripe",
    },
    skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Mastery",
    category: "Cloud & DevOps",
    level: "Intermediate",
    description:
      "Master Kubernetes, Terraform, CI/CD pipelines, and cloud infrastructure at scale.",
    duration: "10 Weeks",
    lessons: 44,
    projects: 5,
    rating: 4.88,
    reviews: 980,
    students: 6240,
    price: 399,
    originalPrice: 549,
    badge: "New",
    image: "/images/course-cloud.jpg",
    instructor: {
      name: "Priya Sharma",
      role: "Cloud Architect",
      company: "Ex-Google Cloud",
    },
    skills: ["Kubernetes", "Terraform", "Docker", "AWS", "CI/CD"],
  },
  {
    id: "product-ux",
    title: "Product & UX Design",
    category: "Product & UX Design",
    level: "All Levels",
    description:
      "Design user-centered products with research, prototyping, and design systems.",
    duration: "8 Weeks",
    lessons: 32,
    projects: 4,
    rating: 4.93,
    reviews: 1120,
    students: 7800,
    price: 279,
    originalPrice: 399,
    image: "/images/course-design.jpg",
    instructor: {
      name: "Sarah Chen",
      role: "Head of Design",
      company: "Ex-Figma",
    },
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability"],
  },
];

export const BENEFITS = [
  {
    icon: "Users",
    title: "Expert Instructors",
    description:
      "Learn from engineers and leaders at top-tier companies like Google, Stripe, and DeepMind.",
  },
  {
    icon: "Rocket",
    title: "Project-Based Learning",
    description:
      "Build production-ready projects for your portfolio with real-world complexity.",
  },
  {
    icon: "Briefcase",
    title: "Career Support",
    description:
      "Get resume reviews, mock interviews, and direct introductions to hiring partners.",
  },
  {
    icon: "Clock",
    title: "Flexible Schedule",
    description:
      "Learn at your own pace with lifetime access to course materials and updates.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Track",
    description:
      "Browse our curated catalog and select the learning path that matches your career goals.",
  },
  {
    step: "02",
    title: "Learn & Build",
    description:
      "Follow structured weekly sprints, complete hands-on projects, and get mentor feedback.",
  },
  {
    step: "03",
    title: "Get Certified & Hired",
    description:
      "Earn your verified certificate and connect with our hiring network for your next role.",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "AJ Tech Academy completely transformed my career. The AI course gave me the skills to land a role at a top tech company within 3 months.",
    name: "Ahmed Khan",
    role: "ML Engineer",
    company: "TechCorp",
    rating: 5,
    course: "Generative AI & Agentic Systems",
    avatar: "/images/mentor-2.jpg",
  },
  {
    id: "2",
    quote:
      "The project-based approach is what sets this apart. I built a real portfolio that actually impressed interviewers.",
    name: "Maria Garcia",
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    rating: 5,
    course: "Full-Stack Web Engineering",
    avatar: "/images/mentor-1.jpg",
  },
  {
    id: "3",
    quote:
      "The mentors are incredible. Having someone from Google Cloud review your architecture decisions is invaluable.",
    name: "David Kim",
    role: "Cloud Architect",
    company: "InfraCo",
    rating: 5,
    course: "Cloud & DevOps Mastery",
    avatar: "/images/mentor-2.jpg",
  },
];

export const STATS = [
  { value: "120K+", label: "Engineers Trained" },
  { value: "4.9", label: "Average Rating" },
  { value: "94%", label: "Completion Rate" },
  { value: "85%", label: "Career Advancement" },
];
