"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserSession,
  Lead,
  Order,
  Product,
  Course,
  BlogPost,
  Project,
  ContactMessage,
  NewsletterSubscriber,
  LeadStatus,
} from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  GraduationCap,
  FileText,
  Layers,
  Mail,
  Shield,
  Search,
  Filter,
  TrendingUp,
  CheckCircle2,
  Clock,
  DollarSign,
  AlertCircle,
  Plus,
  Trash2,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

interface AdminClientProps {
  user: UserSession | null;
  initialLeads: Lead[];
  initialOrders: Order[];
  initialProducts: Product[];
  initialCourses: Course[];
  initialBlogPosts: BlogPost[];
  initialProjects: Project[];
  initialMessages: ContactMessage[];
  initialSubscribers: NewsletterSubscriber[];
  analytics: {
    totalRevenue: number;
    leadsCount: number;
    productsCount: number;
    coursesCount: number;
    subscribersCount: number;
    ordersCount: number;
    monthlySalesTarget: number;
    conversionRate: string;
  };
}

export function AdminClient({
  user,
  initialLeads,
  initialOrders,
  initialProducts,
  initialCourses,
  initialBlogPosts,
  initialProjects,
  initialMessages,
  initialSubscribers,
  analytics,
}: AdminClientProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "leads" | "orders" | "products" | "courses" | "blog" | "messages"
  >("overview");

  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [leadSearch, setLeadSearch] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("All");

  const [orders] = useState<Order[]>(initialOrders);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [courses] = useState<Course[]>(initialCourses);
  const [blogPosts] = useState<BlogPost[]>(initialBlogPosts);

  const leadStatuses: LeadStatus[] = [
    "New",
    "Contacted",
    "Discussion",
    "Proposal",
    "Negotiation",
    "Won",
    "Lost",
  ];

  const handleUpdateLeadStatus = async (leadId: string, nextStatus: LeadStatus) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: nextStatus } : l))
        );
      }
    } catch (err) {
      console.error("Failed to update lead status:", err);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus =
      leadStatusFilter === "All" || l.status.toLowerCase() === leadStatusFilter.toLowerCase();
    const matchesSearch =
      l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(leadSearch.toLowerCase())) ||
      l.projectType.toLowerCase().includes(leadSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 light:border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Siva Executive CRM & CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Platform Administration
          </h1>
        </div>

        {/* Quick Nav switcher */}
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 light:text-slate-700 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 border border-white/10 transition-colors"
          >
            Switch to Learning Dashboard
          </Link>
          <Link
            href="/"
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            View Live Site
          </Link>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {[
          { id: "overview", label: "Overview", icon: LayoutDashboard },
          { id: "leads", label: `Client CRM (${leads.length})`, icon: Users },
          { id: "orders", label: `Orders (${orders.length})`, icon: ShoppingCart },
          { id: "products", label: `Products (${products.length})`, icon: Package },
          { id: "courses", label: `Courses (${courses.length})`, icon: GraduationCap },
          { id: "blog", label: `Blog CMS (${blogPosts.length})`, icon: FileText },
          { id: "messages", label: `Inquiries (${initialMessages.length})`, icon: Mail },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? "bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-500/20"
                  : "bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-700 border-white/5 light:border-slate-200 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW METRICS */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-2">
              <span className="text-xs text-slate-400 font-mono">TOTAL REVENUE</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {formatCurrency(analytics.totalRevenue)}
              </div>
              <p className="text-[11px] text-slate-500">Stripe & Razorpay Gross</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-2">
              <span className="text-xs text-slate-400 font-mono">ACTIVE CLIENT LEADS</span>
              <div className="text-2xl sm:text-3xl font-black text-blue-400">
                {leads.length}
              </div>
              <p className="text-[11px] text-slate-500">In CRM Pipeline</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-2">
              <span className="text-xs text-slate-400 font-mono">ORDERS COMPLETED</span>
              <div className="text-2xl sm:text-3xl font-black text-violet-400">
                {orders.length}
              </div>
              <p className="text-[11px] text-slate-500">Digital downloads delivered</p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-2">
              <span className="text-xs text-slate-400 font-mono">NEWSLETTER AUDIENCE</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                {initialSubscribers.length}
              </div>
              <p className="text-[11px] text-slate-500">Active email subscribers</p>
            </div>
          </div>

          {/* Recent Leads Preview */}
          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white light:text-slate-900">
                High-Priority Client Leads
              </h3>
              <button
                onClick={() => setActiveTab("leads")}
                className="text-xs text-blue-400 hover:underline"
              >
                View full CRM pipeline
              </button>
            </div>

            <div className="space-y-3">
              {leads.slice(0, 3).map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-bold text-white light:text-slate-900 text-sm">
                      {lead.name}
                    </span>
                    <span className="text-slate-400 ml-2">({lead.email})</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {lead.projectType} • Budget: <strong className="text-emerald-400">{lead.budget}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 font-mono font-bold text-[10px]">
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CLIENT CRM PIPELINE */}
      {activeTab === "leads" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={leadSearch}
                onChange={(e) => setLeadSearch(e.target.value)}
                placeholder="Search leads by name, email, project..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900"
              />
            </div>

            {/* Filter by status */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Status:</span>
              <select
                value={leadStatusFilter}
                onChange={(e) => setLeadStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900"
              >
                <option value="All">All Statuses</option>
                {leadStatuses.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Leads Table / Cards */}
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-white/5 light:border-slate-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-white light:text-slate-900">
                        {lead.name}
                      </h3>
                      {lead.company && (
                        <span className="text-xs text-slate-400">@ {lead.company}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                      <span>{lead.email}</span>
                      {lead.phone && <span>• {lead.phone}</span>}
                      <span>• Submitted: {lead.createdAt}</span>
                    </div>
                  </div>

                  {/* Status Dropdown Controller */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Pipeline Status:</span>
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleUpdateLeadStatus(lead.id, e.target.value as LeadStatus)
                      }
                      className="px-3 py-1.5 rounded-xl bg-slate-950 light:bg-slate-100 border border-white/15 text-xs font-bold text-blue-400 focus:outline-none"
                    >
                      {leadStatuses.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">
                      PROJECT TYPE
                    </span>
                    <span className="font-semibold text-white light:text-slate-900">
                      {lead.projectType}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">
                      ESTIMATED BUDGET
                    </span>
                    <span className="font-semibold text-emerald-400">{lead.budget}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">
                      TARGET TIMELINE
                    </span>
                    <span className="font-semibold text-slate-300 light:text-slate-700">
                      {lead.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/40 light:bg-slate-50 border border-white/5 text-xs">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                    PROJECT SCOPE
                  </span>
                  <p className="text-slate-300 light:text-slate-700 leading-relaxed">
                    {lead.projectDescription}
                  </p>
                  {lead.requiredFeatures && (
                    <p className="mt-2 text-[11px] text-blue-300">
                      <strong>Required Integrations:</strong> {lead.requiredFeatures}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: ORDERS MANAGEMENT */}
      {activeTab === "orders" && (
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/10 light:border-slate-200 text-slate-400 font-mono uppercase">
                <tr>
                  <th className="pb-3">Order Number</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Products</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Gateway</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 light:divide-slate-100 text-slate-300 light:text-slate-700">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 font-mono font-bold text-white light:text-slate-900">
                      {ord.orderNumber}
                    </td>
                    <td className="py-3">
                      <div>{ord.customerName}</div>
                      <div className="text-[10px] text-slate-500">{ord.customerEmail}</div>
                    </td>
                    <td className="py-3">
                      {ord.items.map((i) => i.productTitle).join(", ")}
                    </td>
                    <td className="py-3 font-bold text-emerald-400">
                      {formatCurrency(ord.totalAmount)}
                    </td>
                    <td className="py-3 font-mono text-[11px]">{ord.paymentProvider}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
                        {ord.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 text-slate-400">{formatDate(ord.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: PRODUCTS CMS */}
      {activeTab === "products" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white light:text-slate-900 text-sm block">
                    {p.name}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {p.category} • {formatCurrency(p.price)} • {p.salesCount} sales
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/products/${p.slug}`}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: COURSES CMS */}
      {activeTab === "courses" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white light:text-slate-900 text-sm block">
                    {c.title}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {c.level} • {c.duration} • {c.enrolledCount} enrolled
                  </span>
                </div>
                <Link
                  href={`/courses/${c.slug}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: BLOG CMS */}
      {activeTab === "blog" && (
        <div className="space-y-4">
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-white light:text-slate-900 text-sm block">
                    {post.title}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {post.category} • {post.readingTime} • {formatDate(post.publishedAt)}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: MESSAGES & SUBSCRIBERS */}
      {activeTab === "messages" && (
        <div className="space-y-8">
          <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white light:text-slate-900">
              Direct Contact Inquiries
            </h3>
            <div className="space-y-3">
              {initialMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-white/5 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-white light:text-slate-900">
                    <span>{msg.name} ({msg.email})</span>
                    <span className="text-[10px] text-slate-500 font-mono">{formatDate(msg.createdAt)}</span>
                  </div>
                  <div className="text-blue-400 font-semibold">{msg.subject}</div>
                  <p className="text-slate-400 leading-relaxed">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white light:text-slate-900">
              Newsletter Subscribers ({initialSubscribers.length})
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {initialSubscribers.map((s) => (
                <span
                  key={s.id}
                  className="px-3 py-1 rounded-xl bg-slate-950/60 border border-white/10 font-mono text-slate-300"
                >
                  {s.email}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
