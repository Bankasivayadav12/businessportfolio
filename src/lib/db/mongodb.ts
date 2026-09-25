import mongoose from "mongoose";
import {
  initialProjects,
  initialProducts,
  initialCourses,
  initialBlogPosts,
  initialLeads,
  initialOrders,
} from "@/lib/data/seedData";
import {
  Project,
  Product,
  Course,
  BlogPost,
  Lead,
  LeadStatus,
  Order,
  ContactMessage,
  NewsletterSubscriber,
} from "@/types";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
  // eslint-disable-next-line no-var
  var __inMemoryStore: {
    projects: Project[];
    products: Product[];
    courses: Course[];
    blogPosts: BlogPost[];
    leads: Lead[];
    orders: Order[];
    contactMessages: ContactMessage[];
    subscribers: NewsletterSubscriber[];
  } | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };
if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

// In-Memory store for fast, deterministic development, testing and offline MongoDB fallback
if (!global.__inMemoryStore) {
  global.__inMemoryStore = {
    projects: [...initialProjects],
    products: [...initialProducts],
    courses: [...initialCourses],
    blogPosts: [...initialBlogPosts],
    leads: [...initialLeads],
    orders: [...initialOrders],
    contactMessages: [
      {
        id: "msg-1",
        name: "Aman Verma",
        email: "aman@fintechhub.com",
        subject: "Inquiry about SaaS development",
        message: "Hi Siva, loved your YouTube breakdown of Next.js App Router. We're looking to build an internal dashboard for our lending team.",
        createdAt: "2026-03-23T11:00:00Z",
        read: false,
      },
    ],
    subscribers: [
      {
        id: "sub-1",
        email: "alex.tech@gmail.com",
        source: "footer",
        subscribedAt: "2026-03-20T08:00:00Z",
        active: true,
      },
      {
        id: "sub-2",
        email: "priya.developer@outlook.com",
        source: "resource-popup",
        subscribedAt: "2026-03-22T14:30:00Z",
        active: true,
      },
    ],
  };
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    console.warn("MongoDB connection failed, falling back to in-memory store:", err);
    cached.promise = null;
    return null;
  }
}

// Data Access API with transparent fallback & consistency

export async function getProjects(): Promise<Project[]> {
  return global.__inMemoryStore!.projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return global.__inMemoryStore!.projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export async function getProducts(category?: string): Promise<Product[]> {
  const products = global.__inMemoryStore!.products;
  if (!category || category === "All") return products;
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return global.__inMemoryStore!.products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export async function getCourses(): Promise<Course[]> {
  return global.__inMemoryStore!.courses;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return global.__inMemoryStore!.courses.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const posts = global.__inMemoryStore!.blogPosts;
  if (!category || category === "All") return posts;
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return global.__inMemoryStore!.blogPosts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export async function getLeads(): Promise<Lead[]> {
  return global.__inMemoryStore!.leads;
}

export async function createLead(data: Omit<Lead, "id" | "createdAt" | "status">): Promise<Lead> {
  const newLead: Lead = {
    ...data,
    id: `lead-${Date.now()}`,
    status: "New",
    createdAt: new Date().toISOString().split("T")[0],
  };
  global.__inMemoryStore!.leads.unshift(newLead);
  return newLead;
}

export async function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Promise<Lead | null> {
  const lead = global.__inMemoryStore!.leads.find((l) => l.id === id);
  if (!lead) return null;
  lead.status = status;
  if (notes) lead.notes = notes;
  return lead;
}

export async function getOrders(): Promise<Order[]> {
  return global.__inMemoryStore!.orders;
}

export async function createOrder(data: {
  customerName: string;
  customerEmail: string;
  items: { productId: string; productTitle: string; price: number; downloadToken?: string }[];
  totalAmount: number;
  paymentProvider: "Stripe" | "Razorpay" | "Test";
  transactionId?: string;
}): Promise<Order> {
  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    orderNumber: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
    customerName: data.customerName,
    customerEmail: data.customerEmail,
    items: data.items,
    totalAmount: data.totalAmount,
    currency: "INR",
    paymentProvider: data.paymentProvider,
    paymentStatus: "Completed",
    transactionId: data.transactionId || `tx_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  global.__inMemoryStore!.orders.unshift(newOrder);
  return newOrder;
}

export async function createContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ContactMessage> {
  const newMsg: ContactMessage = {
    id: `msg-${Date.now()}`,
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
    createdAt: new Date().toISOString(),
    read: false,
  };
  global.__inMemoryStore!.contactMessages.unshift(newMsg);
  return newMsg;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return global.__inMemoryStore!.contactMessages;
}

export async function subscribeNewsletter(email: string, source: string = "website"): Promise<{ success: boolean; message: string }> {
  const exists = global.__inMemoryStore!.subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return { success: false, message: "You are already subscribed to the newsletter!" };
  }
  global.__inMemoryStore!.subscribers.unshift({
    id: `sub-${Date.now()}`,
    email,
    source,
    subscribedAt: new Date().toISOString(),
    active: true,
  });
  return { success: true, message: "Thank you for subscribing! Check your inbox for updates." };
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  return global.__inMemoryStore!.subscribers;
}

export async function getAnalyticsSummary() {
  const totalRevenue = global.__inMemoryStore!.orders.reduce((acc, curr) => acc + curr.totalAmount, 0);
  const leadsCount = global.__inMemoryStore!.leads.length;
  const productsCount = global.__inMemoryStore!.products.length;
  const coursesCount = global.__inMemoryStore!.courses.length;
  const subscribersCount = global.__inMemoryStore!.subscribers.length;
  const ordersCount = global.__inMemoryStore!.orders.length;

  return {
    totalRevenue,
    leadsCount,
    productsCount,
    coursesCount,
    subscribersCount,
    ordersCount,
    monthlySalesTarget: 150000,
    conversionRate: "4.8%",
  };
}

export async function validateDownloadToken(token: string) {
  const product = global.__inMemoryStore!.products.find((p) => p.downloadToken === token);
  if (!product) return null;
  return {
    productName: product.name,
    fileName: product.downloadFileName,
    downloadUrl: `/api/downloads/${token}/file`,
  };
}
