export const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js and become a full-stack web developer. This comprehensive course covers everything from fundamentals to advanced concepts.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    instructor: "Dr. Sarah Mitchell",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    duration: "12 Weeks",
    level: "Beginner",
    category: "Development",
    price: 199,
    rating: 4.8,
    students: 2450,
    features: ["200+ Video Lectures", "Hands-on Projects", "Certificate", "Lifetime Access"],
    syllabus: ["HTML & CSS Fundamentals", "JavaScript Essentials", "React Framework", "Node.js & Express", "Database Integration", "Final Project"],
    videos: [
      { id: "v1", title: "HTML & CSS Crash Course for Beginners", videoId: "qz0aGYrrlhU", duration: "5:38:21" },
      { id: "v2", title: "JavaScript Full Course - Beginner to Pro", videoId: "hdI2bqOjy3c", duration: "8:43:15" },
      { id: "v3", title: "React Tutorial for Beginners", videoId: "LDB4uaJ87e0", duration: "3:48:32" },
      { id: "v4", title: "Node.js and Express.js Full Course", videoId: "Oe421EPjeBE", duration: "4:42:18" },
      { id: "v5", title: "MongoDB Tutorial for Beginners", videoId: "-56x56UppqQ", duration: "1:56:44" },
      { id: "v6", title: "Build a Full Stack Project", videoId: "nu_pCVPKzTk", duration: "3:20:15" }
    ]
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Learn data analysis, visualization, machine learning with Python. Gain skills in Pandas, NumPy, Matplotlib, Scikit-learn and real-world data projects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    instructor: "Prof. James Anderson",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    duration: "16 Weeks",
    level: "Intermediate",
    category: "Data Science",
    price: 249,
    rating: 4.9,
    students: 1820,
    features: ["Python Programming", "Machine Learning", "Real Datasets", "Industry Projects"],
    syllabus: ["Python for Data Science", "Data Analysis with Pandas", "Data Visualization", "Statistical Methods", "Machine Learning Basics", "Capstone Project"],
    videos: [
      { id: "v1", title: "Python for Data Science Full Course", videoId: "rfscVS0vtbw", duration: "4:26:01" },
      { id: "v2", title: "NumPy Tutorial for Beginners", videoId: "QUT1VHiLmmI", duration: "1:04:53" },
      { id: "v3", title: "Pandas Complete Course for Beginners", videoId: "vmEHCJofslg", duration: "4:38:22" },
      { id: "v4", title: "Data Visualization with Matplotlib & Seaborn", videoId: "OZOOLe2adFo", duration: "2:15:30" },
      { id: "v5", title: "Machine Learning with Scikit-Learn", videoId: "7eh4d6sabA0", duration: "2:43:44" },
      { id: "v6", title: "Real World Data Science Projects", videoId: "5pYKGrJ_wuU", duration: "3:12:18" }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and seamless user experiences. Learn Figma, Adobe XD, design thinking, prototyping, and user research methodologies.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    instructor: "Emily Chen",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    duration: "10 Weeks",
    level: "Beginner",
    category: "Design",
    price: 179,
    rating: 4.7,
    students: 3100,
    features: ["Figma & Adobe XD", "Portfolio Projects", "Design Systems", "User Research"],
    syllabus: ["Design Thinking", "UI Fundamentals", "Figma Mastery", "Prototyping", "User Testing", "Portfolio Building"],
    videos: [
      { id: "v1", title: "UI/UX Design Tutorial - Full Course for Beginners", videoId: "cKbBpZ0tdhE", duration: "3:53:17" },
      { id: "v2", title: "Figma Tutorial for Beginners", videoId: "jwCmIBJ8Jtc", duration: "1:32:44" },
      { id: "v3", title: "Design Thinking Process", videoId: "AhKzEhfmwpk", duration: "45:18" },
      { id: "v4", title: "Color Theory for Designers", videoId: "Qf1Vg8h3vO0", duration: "1:12:33" },
      { id: "v5", title: "Typography Fundamentals", videoId: "sByzHbYm0yg", duration: "52:15" },
      { id: "v6", title: "Build a Design System in Figma", videoId: "wcFu5IFUGJE", duration: "2:28:09" }
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Master SEO, social media marketing, content strategy, email marketing, and paid advertising. Build effective marketing campaigns that drive results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    instructor: "Michael Roberts",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    duration: "8 Weeks",
    level: "Beginner",
    category: "Marketing",
    price: 149,
    rating: 4.6,
    students: 1560,
    features: ["SEO Techniques", "Social Media", "Analytics Tools", "Campaign Strategy"],
    syllabus: ["Marketing Foundations", "SEO Fundamentals", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics & Optimization"],
    videos: [
      { id: "v1", title: "Digital Marketing Full Course for Beginners", videoId: "k-Nw4hzTJAQ", duration: "6:32:15" },
      { id: "v2", title: "SEO Tutorial for Beginners", videoId: "xs0Fp6P_y5Y", duration: "2:18:44" },
      { id: "v3", title: "Social Media Marketing Strategy", videoId: "hHjGMPOfDbI", duration: "1:45:30" },
      { id: "v4", title: "Email Marketing Complete Guide", videoId: "Yq5T4JHtPmA", duration: "1:22:18" },
      { id: "v5", title: "Google Ads Tutorial for Beginners", videoId: "oP7oQyLr_eo", duration: "2:44:12" },
      { id: "v6", title: "Facebook Ads Complete Tutorial", videoId: "5NgX1AVzP0o", duration: "1:58:33" }
    ]
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native. Deploy iOS and Android apps from a single codebase with native performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    instructor: "Dr. Lisa Park",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    duration: "14 Weeks",
    level: "Intermediate",
    category: "Development",
    price: 229,
    rating: 4.8,
    students: 1980,
    features: ["React Native", "Cross-Platform", "App Store Deploy", "Native Modules"],
    syllabus: ["React Native Basics", "Navigation & Routing", "Native APIs", "State Management", "Testing & Deployment", "App Store Launch"],
    videos: [
      { id: "v1", title: "React Native Tutorial for Beginners", videoId: "0-S5aHeJk8A", duration: "6:14:22" },
      { id: "v2", title: "React Native Navigation Course", videoId: "nKtbYqpXrN8", duration: "2:15:44" },
      { id: "v3", title: "Building Mobile UI Components", videoId: "qWRcGPMgMFY", duration: "1:48:30" },
      { id: "v4", title: "State Management in React Native", videoId: "bNIRhM91amY", duration: "1:32:15" },
      { id: "v5", title: "Deploy to App Store & Play Store", videoId: "FQdCABAknBs", duration: "1:22:08" },
      { id: "v6", title: "Full React Native App Project", videoId: "0PggTA7Ea-8", duration: "4:45:19" }
    ]
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description: "Learn Amazon Web Services from scratch. Master EC2, S3, Lambda, DynamoDB and build scalable cloud architectures for modern applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    instructor: "David Kim",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    duration: "12 Weeks",
    level: "Intermediate",
    category: "Cloud",
    price: 279,
    rating: 4.9,
    students: 1340,
    features: ["AWS Certification", "Hands-on Labs", "Architecture Design", "Cost Optimization"],
    syllabus: ["AWS Fundamentals", "Compute & Networking", "Storage Solutions", "Database Services", "Serverless Architecture", "Certification Prep"],
    videos: [
      { id: "v1", title: "AWS Certified Cloud Practitioner Course", videoId: "SOTamWNgDKc", duration: "11:22:05" },
      { id: "v2", title: "Amazon EC2 Tutorial for Beginners", videoId: "Z8jbangjaaY", duration: "1:45:33" },
      { id: "v3", title: "AWS S3 Complete Guide", videoId: "rWOQzBZnmFQ", duration: "1:28:18" },
      { id: "v4", title: "AWS Lambda & Serverless Computing", videoId: "eOBqNE52E28", duration: "2:12:44" },
      { id: "v5", title: "DynamoDB Full Tutorial", videoId: "yTFKfVxqqCI", duration: "1:55:22" },
      { id: "v6", title: "AWS Architecture Best Practices", videoId: "IaYbREDAvgk", duration: "1:42:15" }
    ]
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    description: "Protect systems and networks from digital attacks. Learn ethical hacking, network security, cryptography, and incident response procedures.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    instructor: "Alex Turner",
    instructorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    duration: "16 Weeks",
    level: "Advanced",
    category: "Security",
    price: 299,
    rating: 4.7,
    students: 980,
    features: ["Ethical Hacking", "Network Security", "Cryptography", "Pen Testing"],
    syllabus: ["Security Fundamentals", "Network Security", "Ethical Hacking", "Cryptography", "Incident Response", "Security Audit"],
    videos: [
      { id: "v1", title: "Cybersecurity Full Course for Beginners", videoId: "inWWhr5tnEA", duration: "4:28:30" },
      { id: "v2", title: "Ethical Hacking Tutorial", videoId: "fNz7G8kDNpM", duration: "3:45:18" },
      { id: "v3", title: "Network Security Fundamentals", videoId: "sKdA2FAS6c0", duration: "2:12:44" },
      { id: "v4", title: "Cryptography Explained", videoId: "j8XvEGdNJOY", duration: "1:55:33" },
      { id: "v5", title: "Penetration Testing Tutorial", videoId: "cWqUMP0q9pQ", duration: "2:28:15" },
      { id: "v6", title: "Incident Response & Digital Forensics", videoId: "sCQpU4Ixkm0", duration: "1:42:09" }
    ]
  },
  {
    id: 8,
    title: "Artificial Intelligence Essentials",
    description: "Explore AI concepts, neural networks, deep learning, and natural language processing. Build intelligent systems using TensorFlow and PyTorch.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    instructor: "Prof. Rachel Green",
    instructorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    duration: "20 Weeks",
    level: "Advanced",
    category: "AI/ML",
    price: 349,
    rating: 4.9,
    students: 890,
    features: ["Deep Learning", "TensorFlow & PyTorch", "NLP Projects", "Research Papers"],
    syllabus: ["AI Fundamentals", "Machine Learning Deep Dive", "Neural Networks", "Deep Learning", "NLP & Computer Vision", "Research Project"],
    videos: [
      { id: "v1", title: "Artificial Intelligence Full Course", videoId: "5bH2s1MKUQA", duration: "8:12:44" },
      { id: "v2", title: "Machine Learning Tutorial for Beginners", videoId: "i_LwzRVP7bg", duration: "10:28:18" },
      { id: "v3", title: "Deep Learning with TensorFlow", videoId: "tpcfK江山8dE", duration: "5:15:33" },
      { id: "v4", title: "Neural Networks Explained", videoId: "aircAruvnKk", duration: "1:48:22" },
      { id: "v5", title: "Natural Language Processing Course", videoId: "8rXD5-xhemo", duration: "3:42:15" },
      { id: "v6", title: "Build AI Projects from Scratch", videoId: "5bH2s1MKUQA", duration: "4:22:09" }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Adams",
    role: "Software Developer at Google",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    text: "This platform transformed my career. I went from knowing nothing about coding to landing my dream job in just 6 months!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Data Analyst at Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "The Data Science course was incredibly comprehensive. The hands-on projects gave me real-world experience that employers value.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Williams",
    role: "UX Designer at Apple",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "The UI/UX Design Masterclass helped me build a portfolio that got me interviews at top tech companies. Highly recommended!",
    rating: 5
  }
];

export const stats = [
  { label: "Students Enrolled", value: "50,000+" },
  { label: "Expert Instructors", value: "200+" },
  { label: "Courses Available", value: "150+" },
  { label: "Success Rate", value: "95%" }
];
