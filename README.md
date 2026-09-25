# SIVA — ALL-IN-ONE DEVELOPER, DIGITAL PRODUCTS & PASSIVE INCOME PLATFORM

> **"Build. Launch. Scale."**  
> *"I help businesses turn ideas into modern digital products — from websites and mobile apps to SaaS platforms, AI solutions and scalable full-stack systems."*

A production-quality, premium personal brand and digital business platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.

---

## 🌟 Platform Capabilities

1. **Personal Brand & Portfolio**: High-impact Apple + Linear + Vercel inspired aesthetic with custom dark/light theme, interactive developer ecosystem hub, and Core Web Vitals optimization.
2. **Flagship Projects Showcase**: Case studies for RideALott, EduALott, EVCafe, and Matrimonial Platform with interactive architecture topology diagrams, benchmark audits, and live links.
3. **Digital Products Marketplace**: Complete store for PDF guides, interview blueprints, and source code starters (Next.js SaaS starter, Flutter kits, UI kits).
4. **Server-Verified Checkout**: Multi-gateway payment architecture ready for **Stripe** and **Razorpay** with coupon code validation and instant order generation.
5. **Secure Digital Download Engine**: Tokenized download APIs (`/api/downloads/[token]`) protecting asset files behind authenticated verification.
6. **Course Platform & Learning Dashboard**: Course marketplace with expandable curriculum modules, interactive video player, notes editor, lesson completion toggles, and verified completion certificates.
7. **Client Onboarding & CRM**: Full lead capture form (`/hire-me`) with budget tiers, project classification, and an executive Kanban/pipeline status manager (`/admin`).
8. **Technical Blog CMS**: Markdown-rendered technical journal with reading times, category filtering, search, and instant link sharing.
9. **Siva TechVibes YouTube Showcase**: Dedicated media showcase with featured masterclasses, views telemetry, and tutorial playlists.
10. **Passive Income Flywheel**: Interactive explanation of the "Build Once. Sell Repeatedly" monetization model with live analytics metrics.
11. **Free Developer Resources**: Lead magnet vault with instant email unlocks for architecture cheat sheets and starter code.
12. **Printable / Downloadable Resume**: Web resume layout with one-click print and plain-text download.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with React 19
- **Language**: TypeScript (Strict type safety across API contracts and schemas)
- **Styling**: Tailwind CSS with custom glassmorphism and modern design tokens
- **Database**: MongoDB with Mongoose ODM (includes transparent in-memory data store fallback for zero-downtime offline dev)
- **Validation**: [Zod](https://zod.dev)
- **Icons**: [Lucide React](https://lucide.dev) & Custom SVG brand components
- **Payments**: Stripe & Razorpay server-verified architecture
- **Email**: Resend / Nodemailer transactional templates (Lead alerts, order confirmations, enrollment alerts)

---

## 📂 Project Structure

```text
src/
 ├── app/
 │   ├── (pages)/
 │   │   ├── about/              # Professional story, philosophy & timeline
 │   │   ├── skills/             # Categorized interactive technical skills
 │   │   ├── projects/           # Filterable projects portfolio & case studies
 │   │   │   └── [slug]/         # Deep case studies with architecture diagrams
 │   │   ├── products/           # Digital products marketplace
 │   │   │   └── [slug]/         # Product detail, license info, and buy flow
 │   │   ├── checkout/           # Multi-gateway checkout & success downloads
 │   │   ├── courses/            # Video courses marketplace & curriculum
 │   │   │   └── [slug]/         # Expandable course modules & syllabus
 │   │   ├── dashboard/          # Student learning portal, video player, notes
 │   │   ├── services/           # 12 client engineering services & timelines
 │   │   ├── hire-me/            # Client onboarding & project inquiry form
 │   │   ├── blog/               # Technical blog & articles
 │   │   │   └── [slug]/         # Rich markdown article pages
 │   │   ├── youtube/            # Siva TechVibes brand showcase
 │   │   ├── passive-income/     # Digital product flywheel & revenue metrics
 │   │   ├── resources/          # Free developer downloads & email unlock
 │   │   ├── contact/            # Direct contact form & social channels
 │   │   ├── resume/             # Web resume with print & download
 │   │   ├── login/ & register/  # User & Admin authentication
 │   │   └── admin/              # Executive CRM pipeline & CMS
 │   └── api/                    # Server Actions & REST endpoints
 ├── components/                 # Reusable UI components & layouts
 ├── config/                     # Central site metadata and social links
 ├── lib/
 │   ├── auth/                   # Session management with HTTP-only cookies
 │   ├── db/                     # MongoDB connection & Mongoose models
 │   ├── downloads/              # Protected digital token verification
 │   ├── email/                  # Transactional email templates
 │   ├── payments/               # Stripe & Razorpay verification
 │   └── utils.ts                # Formatting and utility functions
 └── types/                      # Universal TypeScript interfaces
```

---

## 🛠️ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your MongoDB URI (optional, in-memory store acts as fallback if not provided):
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/siva_platform?retryWrites=true&w=majority
AUTH_SECRET=your_jwt_secret_here
ADMIN_EMAIL=siva@example.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the platform.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🔑 Demo Access Accounts

For instant testing of protected routes, the platform includes pre-configured demo credentials on the `/login` page:

- **Admin Account**:
  - Email: `admin@siva.dev`
  - Password: `Admin@1234`
  - Access: Full Executive CRM, Leads pipeline, CMS, and Order records at `/admin`
- **User / Student Account**:
  - Email: `user@siva.dev`
  - Password: `User@1234`
  - Access: Learning Portal, video player, purchased products, and download tokens at `/dashboard`

---

## 📄 License
Commercial license. Copyright © 2026 Siva. All rights reserved.
