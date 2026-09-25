import mongoose, { Schema } from "mongoose";

// Lead Schema
const LeadSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    projectType: {
      type: String,
      enum: ["Website", "Mobile App", "SaaS", "E-commerce", "Admin Dashboard", "AI", "API", "Other"],
      default: "Website",
    },
    budget: {
      type: String,
      enum: ["₹25K–₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+"],
      default: "₹50K–₹1L",
    },
    timeline: { type: String, default: "1 Month" },
    projectDescription: { type: String, required: true },
    referenceWebsite: String,
    requiredFeatures: String,
    status: {
      type: String,
      enum: ["New", "Contacted", "Discussion", "Proposal", "Negotiation", "Won", "Lost"],
      default: "New",
    },
    notes: String,
  },
  { timestamps: true }
);

// Product Schema
const ProductSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    shortDescription: String,
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: Number,
    discountPercentage: Number,
    rating: { type: Number, default: 5.0 },
    reviewsCount: { type: Number, default: 0 },
    category: { type: String, required: true },
    productType: {
      type: String,
      enum: ["PDF", "Template", "Source Code", "Course", "UI Kit", "SaaS", "Digital Resource"],
      default: "PDF",
    },
    technologies: [String],
    features: [String],
    whatsIncluded: [String],
    requirements: [String],
    downloadFileName: String,
    downloadToken: String,
    previewUrl: String,
    demoUrl: String,
    coverImage: String,
    featured: { type: Boolean, default: false },
    salesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Course Schema
const CourseSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: String,
    description: { type: String, required: true },
    instructor: { type: String, default: "Siva" },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
      default: "All Levels",
    },
    duration: String,
    lessonsCount: Number,
    rating: { type: Number, default: 4.9 },
    reviewsCount: { type: Number, default: 0 },
    price: { type: Number, required: true },
    originalPrice: Number,
    thumbnail: String,
    modules: [
      {
        title: String,
        description: String,
        lessons: [
          {
            title: String,
            duration: String,
            videoUrl: String,
            isFreePreview: Boolean,
          },
        ],
      },
    ],
    requirements: [String],
    whatYouWillLearn: [String],
    enrolledCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Project Schema
const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tagline: String,
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["Web", "Mobile", "SaaS", "Education", "Business", "AI"],
      default: "Web",
    },
    technologies: [String],
    status: {
      type: String,
      enum: ["Live", "In Development", "Production", "Beta"],
      default: "Live",
    },
    featured: { type: Boolean, default: false },
    coverImage: String,
    demoUrl: String,
    githubUrl: String,
    caseStudy: {
      overview: String,
      problem: String,
      solution: String,
      architecture: String,
      features: [String],
      challenges: [String],
      solutions: [String],
      results: [String],
      performance: [{ metric: String, value: String }],
    },
  },
  { timestamps: true }
);

// BlogPost Schema
const BlogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: String,
    content: { type: String, required: true },
    category: String,
    tags: [String],
    coverImage: String,
    author: {
      name: { type: String, default: "Siva" },
      role: { type: String, default: "Full-Stack Developer" },
      avatar: String,
    },
    readingTime: String,
    publishedAt: { type: String, default: () => new Date().toISOString() },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Order Schema
const OrderSchema = new Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    items: [
      {
        productId: String,
        productTitle: String,
        price: Number,
        downloadToken: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    paymentProvider: {
      type: String,
      enum: ["Stripe", "Razorpay", "Test"],
      default: "Razorpay",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    transactionId: String,
  },
  { timestamps: true }
);

// Newsletter Subscriber Schema
const NewsletterSubscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    source: { type: String, default: "website" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Contact Message Schema
const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Safe export to prevent model re-registration during Next.js Hot Reloading
export const LeadModel = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
export const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export const CourseModel = mongoose.models.Course || mongoose.model("Course", CourseSchema);
export const ProjectModel = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export const BlogPostModel = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
export const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export const NewsletterSubscriberModel =
  mongoose.models.NewsletterSubscriber || mongoose.model("NewsletterSubscriber", NewsletterSubscriberSchema);
export const ContactMessageModel =
  mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);
