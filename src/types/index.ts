export type Role = "USER" | "ADMIN";

export type ProductType =
  | "PDF"
  | "Template"
  | "Source Code"
  | "Course"
  | "UI Kit"
  | "SaaS"
  | "Digital Resource";

export interface Product {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  productType: ProductType;
  technologies: string[];
  features: string[];
  whatsIncluded: string[];
  requirements: string[];
  downloadFileName: string;
  downloadToken: string;
  previewUrl?: string;
  demoUrl?: string;
  coverImage: string;
  featured: boolean;
  salesCount: number;
  createdAt: string;
  faq?: { question: string; answer: string }[];
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isFreePreview?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  lessonsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  modules: CourseModule[];
  requirements: string[];
  whatYouWillLearn: string[];
  enrolledCount: number;
  featured: boolean;
  createdAt: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  architectureDiagram?: string;
  features: string[];
  uiScreens?: string[];
  developmentProcess?: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  performance: { metric: string; value: string }[];
  futureImprovements?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Web" | "Mobile" | "SaaS" | "Education" | "Business" | "AI";
  technologies: string[];
  status: "Live" | "In Development" | "Production" | "Beta";
  featured: boolean;
  coverImage: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "JavaScript"
    | "React"
    | "Next.js"
    | "Flutter"
    | "Python"
    | "PostgreSQL"
    | "MongoDB"
    | "AI"
    | "SaaS"
    | "Career"
    | "Tutorials";
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
}

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Discussion"
  | "Proposal"
  | "Negotiation"
  | "Won"
  | "Lost";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType:
    | "Website"
    | "Mobile App"
    | "SaaS"
    | "E-commerce"
    | "Admin Dashboard"
    | "AI"
    | "API"
    | "Other";
  budget: "₹25K–₹50K" | "₹50K–₹1L" | "₹1L–₹3L" | "₹3L+";
  timeline: string;
  projectDescription: string;
  referenceWebsite?: string;
  requiredFeatures?: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read?: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  source: string;
  subscribedAt: string;
  active: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  items: {
    productId: string;
    productTitle: string;
    price: number;
    downloadToken?: string;
  }[];
  totalAmount: number;
  currency: string;
  paymentProvider: "Stripe" | "Razorpay" | "Test";
  paymentStatus: "Pending" | "Completed" | "Failed";
  transactionId?: string;
  createdAt: string;
}

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: Role;
  purchasedProductIds: string[];
  enrolledCourseIds: string[];
  courseProgress?: Record<string, number>; // courseId -> percentage
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  views: string;
  publishedDate: string;
  category: string;
  youtubeUrl: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technology: string[];
  estimatedTimeline: string;
  pricingEstimate: string;
  icon: string;
}
