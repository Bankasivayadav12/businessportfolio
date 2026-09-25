import {
  Product,
  Course,
  Project,
  BlogPost,
  YouTubeVideo,
  ServiceItem,
  Lead,
  Order,
} from "@/types";

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    slug: "ridealott",
    title: "RideALott",
    tagline: "Car-sharing & peer-to-peer mobility ecosystem platform",
    description:
      "A complete car-sharing and vehicle booking application featuring real-time location tracking, driver verification, automated pricing, and cross-platform access.",
    category: "Mobile",
    technologies: ["Next.js", "Flutter", "MongoDB", "Firebase", "Tailwind CSS", "Node.js"],
    status: "Production",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://ridealott.demo.app",
    githubUrl: "https://github.com/YOUR_GITHUB_URL/ridealott",
    caseStudy: {
      overview:
        "RideALott was engineered to solve the friction of urban car rental and peer-to-peer vehicle sharing with instant KYC, real-time availability, and smooth payments.",
      problem:
        "Traditional vehicle rental systems suffer from cumbersome paper contracts, lack of real-time GPS fleet monitoring, high booking cancellation rates, and poor mobile user experiences.",
      solution:
        "Developed a synchronized Next.js administration portal and a high-performance Flutter mobile application for renters and car owners, powered by MongoDB geospatial indexing for sub-second nearby vehicle queries.",
      architecture:
        "Microservices architecture with Next.js web application for administrative control & booking management, Flutter cross-platform mobile client, MongoDB for flexible car schema and geo queries, and Firebase Cloud Messaging for push alerts.",
      features: [
        "Real-time GPS vehicle location & availability map",
        "Automated KYC document upload and instant verification",
        "Dynamic surge pricing based on fleet density and demand",
        "In-app trip extension and digital vehicle inspection checklist",
        "Multi-gateway checkout with automated host payouts",
      ],
      challenges: [
        "Handling low-latency geospatial queries across thousands of active vehicles simultaneously.",
        "Managing offline state transitions when users enter underground parking structures.",
      ],
      solutions: [
        "Implemented MongoDB 2dsphere indexes coupled with Redis geo-caching for location updates.",
        "Created a robust offline-first local cache in Flutter using Hive to queue trip events until network restoration.",
      ],
      results: [
        "Over 15,000 successful trips managed with a 99.8% uptime rate.",
        "Average booking completion time reduced from 8 minutes down to 45 seconds.",
        "4.8/5 average customer rating across app stores.",
      ],
      performance: [
        { metric: "API Response Time", value: "< 85ms" },
        { metric: "Booking Speed", value: "45 sec" },
        { metric: "Lighthouse Score", value: "98/100" },
        { metric: "Monthly Uptime", value: "99.95%" },
      ],
      futureImprovements: [
        "AI-assisted vehicle damage detection using mobile camera captures during pickup.",
        "Smart Bluetooth vehicle unlocking without physical key handover.",
      ],
    },
    createdAt: "2025-01-10",
  },
  {
    id: "proj-2",
    slug: "edualott",
    title: "EduALott",
    tagline: "AI-Powered Adaptive Learning & Student Analytics Platform",
    description:
      "A next-generation educational platform delivering personalized learning trajectories, auto-generated assessments, interactive coding playgrounds, and real-time student analytics.",
    category: "Education",
    technologies: ["Next.js", "MongoDB", "Prisma", "AI APIs", "Tailwind CSS", "TypeScript"],
    status: "Live",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://edualott.demo.app",
    githubUrl: "https://github.com/YOUR_GITHUB_URL/edualott",
    caseStudy: {
      overview:
        "EduALott modernizes digital learning by transforming one-size-fits-all curricula into intelligent, interactive modules tailored to individual student speeds and comprehension levels.",
      problem:
        "Most online course websites are static video repositories with no feedback loop, leading to average course completion rates below 12%.",
      solution:
        "Built an interactive Next.js web application incorporating AI-generated quizzes, code playground sandboxes, and automated progress milestones that actively prompt students when comprehension dips.",
      architecture:
        "Next.js App Router front-end with Server Components, MongoDB database modeling module graphs and question banks, and integration with LLM APIs for automated code explanation and custom study guides.",
      features: [
        "Adaptive modular curriculum that branches based on quiz performance",
        "Live interactive code sandbox with instantaneous test feedback",
        "Gamified progress dashboards with milestone certificates",
        "Teacher analytics portal monitoring student drop-off bottlenecks",
      ],
      challenges: [
        "Generating consistent, deterministic evaluation rubrics from generative AI prompts.",
        "Preventing cheating while maintaining an unobtrusive testing experience.",
      ],
      solutions: [
        "Structured JSON schema outputs validated through Zod for all LLM quiz outputs.",
        "Session telemetry analyzing keystroke cadence and tab focal shifts.",
      ],
      results: [
        "Course completion jumped from 12% industry average to 54%.",
        "Over 8,000 students enrolled across 20+ specialized modules.",
      ],
      performance: [
        { metric: "Quiz Generation", value: "< 1.2s" },
        { metric: "Completion Rate", value: "54%" },
        { metric: "Active Retention", value: "72%" },
        { metric: "Page Speed", value: "99/100" },
      ],
      futureImprovements: [
        "Voice-interactive AI tutoring bot for pronunciation and oral code defense.",
        "Mobile companion app built with Flutter.",
      ],
    },
    createdAt: "2025-02-15",
  },
  {
    id: "proj-3",
    slug: "evcafe",
    title: "EVCafe",
    tagline: "Modern EV Charging Network & Station Discovery Hub",
    description:
      "A sleek, high-conversion discovery platform for electric vehicle charging stations, amenities, live connector status, and route planning.",
    category: "Web",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Framer Motion"],
    status: "Live",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://evcafe.demo.app",
    githubUrl: "https://github.com/YOUR_GITHUB_URL/evcafe",
    caseStudy: {
      overview:
        "EVCafe bridges EV drivers with coffee shops, workspaces, and rapid charging hubs, turning charging downtime into productive, pleasant leisure time.",
      problem:
        "EV owners often spend 30-45 minutes waiting at desolate charging stalls without amenities, restrooms, or reliable high-speed Wi-Fi.",
      solution:
        "Engineered a premium, lightning-fast web platform that pinpoints verified charging cafes with real-time socket availability, menu previews, and slot reservation.",
      architecture:
        "Next.js SSG and ISR for ultra-fast SEO discovery pages for every city and station, integrated with Open Charge Map API feeds and MongoDB for venue profiles.",
      features: [
        "Interactive station locator with kW speed filters and plug types (CCS2, Type 2, CHAdeMO)",
        "Cafe amenity tags: specialty coffee, fast Wi-Fi, meeting booths, pet friendly",
        "Crowdsourced photo reviews and real-world charging speed benchmarks",
        "Sleek dark-mode aesthetic inspired by modern automotive dashboards",
      ],
      challenges: [
        "Aggregating disjointed real-time hardware status APIs from 6 different charging operators.",
        "Ensuring mobile web performance in poor cellular reception areas on highways.",
      ],
      solutions: [
        "Built a unified normalization pipeline caching charger telemetry every 60 seconds.",
        "Optimized SVG vector maps and compressed image assets for sub-100KB initial payload.",
      ],
      results: [
        "Featured in top electric mobility newsletters.",
        "Over 45,000 monthly active drivers discovering charging stops.",
      ],
      performance: [
        { metric: "Initial Bundle", value: "68 KB" },
        { metric: "FCP", value: "0.6s" },
        { metric: "Lighthouse", value: "100/100" },
        { metric: "Monthly Visitors", value: "45K+" },
      ],
      futureImprovements: [
        "Integrated in-car browser navigation presets via CarPlay / Android Auto.",
        "Pre-order coffee and snacks directly through the charging checkout.",
      ],
    },
    createdAt: "2025-03-01",
  },
  {
    id: "proj-4",
    slug: "matrimonial-platform",
    title: "Matrimonial Platform",
    tagline: "Privacy-first match-making platform concept with verified trust credentials",
    description:
      "A modern, respectful matrimonial ecosystem focused on verified credentials, privacy safeguards, family profile sharing, and algorithmic compatibility.",
    category: "SaaS",
    technologies: ["Next.js", "MongoDB", "Prisma", "TypeScript", "Tailwind CSS"],
    status: "Beta",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://matrimonial.demo.app",
    githubUrl: "https://github.com/YOUR_GITHUB_URL/matrimonial-platform",
    caseStudy: {
      overview:
        "Rethinking modern matrimonial discovery with an emphasis on authentic profiles, mutual consent access to contact data, and an ad-free, respectful user experience.",
      problem:
        "Existing heritage matrimonial sites are plagued with spam, unverified fake profiles, unwanted phone calls, and outdated clunky interfaces.",
      solution:
        "Crafted a modern SaaS application where profiles undergo two-factor photo and document verification. Photos and contact numbers can only be revealed upon reciprocal approval.",
      architecture:
        "Full-stack Next.js with secure MongoDB collections, granular role-based access control, cryptographic watermarking for user photos, and automated match-scoring algorithms.",
      features: [
        "Granular privacy controls: Blur photos until connection accepted",
        "Trust Score badge based on LinkedIn, phone, and government ID verification",
        "Collaborative family mode: Parents and candidates can tag favorites together",
        "Real-time encrypted chat once mutual connection is established",
      ],
      challenges: [
        "Preventing screenshots and unauthorized distribution of user photos.",
        "Building a fair match recommendation algorithm without biased stereotypes.",
      ],
      solutions: [
        "Dynamic SVG watermarking with recipient UID embedded into rendered image canvas.",
        "Preference weight matrix allowing users to prioritize values, lifestyle, and life vision.",
      ],
      results: [
        "98% verification rate among beta testers.",
        "Zero unsolicited contact reports due to strict reciprocal privacy walls.",
      ],
      performance: [
        { metric: "Trust Verification", value: "< 2 hrs" },
        { metric: "Mutual Match Rate", value: "32%" },
        { metric: "Security Audit", value: "Passed" },
        { metric: "User Satisfaction", value: "96%" },
      ],
      futureImprovements: [
        "Native Flutter iOS & Android apps.",
        "AI-assisted icebreakers for conversation starters based on shared interests.",
      ],
    },
    createdAt: "2025-04-12",
  },
];

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    slug: "javascript-interview-master-guide",
    name: "JavaScript Interview Master Guide",
    title: "JavaScript Interview Master Guide",
    shortDescription: "100+ JavaScript interview questions, detailed answers, event loop visualizers & tricky code challenges.",
    description:
      "A comprehensive, battle-tested PDF & code guide covering JavaScript fundamentals, closures, prototypes, event loop, async/await, memory leaks, and 50+ tricky coding interview problems frequently asked at top tech companies.",
    price: 499,
    originalPrice: 999,
    discountPercentage: 50,
    rating: 4.9,
    reviewsCount: 142,
    category: "Interview Preparation",
    productType: "PDF",
    technologies: ["JavaScript", "ES6+", "Event Loop", "V8 Engine", "TypeScript"],
    features: [
      "100+ curated interview questions with in-depth technical explanations",
      "Interactive runnable code snippets for every scenario",
      "Visual diagrams explaining the Event Loop, Microtasks & Call Stack",
      "Cheatsheet for Polyfills (bind, map, filter, reduce, promise.all)",
      "Lifetime updates whenever JavaScript specifications evolve",
    ],
    whatsIncluded: [
      "180-page DRM-free high-resolution PDF Guide",
      "Interactive code repository with test cases",
      "Quick-revision cheatsheet (printable 4-page card)",
      "Access to private Discord channel for mock interviews",
    ],
    requirements: ["Basic understanding of JavaScript variables and functions"],
    downloadFileName: "JavaScript-Interview-Master-Guide-Siva.pdf",
    downloadToken: "dl-js-interview-2026",
    coverImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 840,
    createdAt: "2025-01-05",
    faq: [
      {
        question: "Is this suitable for senior developer roles?",
        answer: "Yes, sections 4 through 8 cover advanced topics like V8 optimizations, prototype pollution, memory leak profiling, and custom promise implementations.",
      },
      {
        question: "How do I download the updates?",
        answer: "You will receive an automatic email whenever a revised version is released, and it is permanently accessible in your Siva account dashboard.",
      },
    ],
  },
  {
    id: "prod-2",
    slug: "react-interview-master-guide",
    name: "React Interview Master Guide",
    title: "React Interview Master Guide",
    shortDescription: "Master React 19, hooks under the hood, concurrency, reconciliation & architectural interview questions.",
    description:
      "Crack your next React interview with confidence. This guide breaks down the Fiber reconciler, useEffect traps, custom hooks patterns, React 19 Actions, useTransition, Context pitfalls, and system design for frontend applications.",
    price: 599,
    originalPrice: 1199,
    discountPercentage: 50,
    rating: 4.95,
    reviewsCount: 118,
    category: "Interview Preparation",
    productType: "PDF",
    technologies: ["React 19", "Hooks", "Fiber Reconciler", "Redux Toolkit", "Zustand"],
    features: [
      "Complete breakdown of React Fiber architecture and virtual DOM diffing",
      "React 19 features: useActionState, useOptimistic, Actions",
      "Deep dive into performance tuning: memo, useMemo, useCallback, and React Compiler",
      "30 real-world machine coding problems with step-by-step solutions",
    ],
    whatsIncluded: [
      "160-page PDF handbook",
      "GitHub repo containing 30 machine coding projects with starter files and tests",
      "React architecture checklist",
    ],
    requirements: ["Working knowledge of React basics (JSX, useState, props)"],
    downloadFileName: "React-Interview-Master-Guide-Siva.pdf",
    downloadToken: "dl-react-interview-2026",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 650,
    createdAt: "2025-02-01",
  },
  {
    id: "prod-3",
    slug: "nextjs-interview-master-guide",
    name: "Next.js Interview Master Guide",
    title: "Next.js Interview Master Guide",
    shortDescription: "App Router, Server Components vs Client Components, ISR, Streaming SSR & caching mechanisms.",
    description:
      "The definitive guide to passing Next.js technical rounds. Detailed practical examples showing Server Actions, Route Handlers, Middleware, Dynamic Routing, parallel routes, and cache management in Next.js 15+.",
    price: 699,
    originalPrice: 1399,
    discountPercentage: 50,
    rating: 5.0,
    reviewsCount: 96,
    category: "Interview Preparation",
    productType: "PDF",
    technologies: ["Next.js 15+", "React Server Components", "Server Actions", "Vercel"],
    features: [
      "In-depth explanation of the 4 Caching Layers in Next.js",
      "Server Components mental models & when to use 'use client'",
      "Production deployment and environment variable security",
      "Common interview architectural questions with diagrams",
    ],
    whatsIncluded: [
      "140-page illustrated PDF",
      "Full repository with live examples of each routing pattern",
      "Next.js SEO & Web Vitals audit guide",
    ],
    requirements: ["Basic React knowledge"],
    downloadFileName: "NextJS-Interview-Master-Guide-Siva.pdf",
    downloadToken: "dl-nextjs-interview-2026",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 520,
    createdAt: "2025-02-18",
  },
  {
    id: "prod-4",
    slug: "full-stack-developer-roadmap",
    name: "Full-Stack Developer Roadmap",
    title: "Full-Stack Developer Roadmap & Blueprint",
    shortDescription: "End-to-end curriculum roadmap from frontend to databases, system design, and cloud architecture.",
    description:
      "A crystal-clear, structured roadmap outlining exactly what to learn in 2026 to transition from beginner/intermediate to a highly-paid senior Full-Stack Engineer.",
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    rating: 4.85,
    reviewsCount: 210,
    category: "PDF Guides",
    productType: "PDF",
    technologies: ["System Design", "Node.js", "MongoDB", "PostgreSQL", "Docker", "DevOps"],
    features: [
      "Week-by-week actionable study schedule",
      "Curated free & premium resources for every milestone",
      "System design primers for microservices, caching & message queues",
      "Portfolio project recommendations that actually impress hiring managers",
    ],
    whatsIncluded: ["95-page interactive PDF with clickable references and diagrams"],
    requirements: ["Passion to learn modern full-stack development"],
    downloadFileName: "Full-Stack-Developer-Roadmap-Siva.pdf",
    downloadToken: "dl-fullstack-roadmap-2026",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    featured: false,
    salesCount: 1100,
    createdAt: "2025-01-20",
  },
  {
    id: "prod-5",
    slug: "nextjs-saas-starter",
    name: "Next.js SaaS Starter Kit",
    title: "Next.js Production SaaS Starter Kit",
    shortDescription: "Production-ready SaaS template with Auth, Stripe/Razorpay billing, MongoDB, Admin & Email system.",
    description:
      "Save 150+ hours of boilerplate development. Ship your SaaS this weekend with built-in authentication, role-based access, automated subscription webhooks, dark mode, responsive dashboard, and transactional emails.",
    price: 2499,
    originalPrice: 4999,
    discountPercentage: 50,
    rating: 4.98,
    reviewsCount: 78,
    category: "Next.js Templates",
    productType: "Source Code",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe", "Razorpay"],
    features: [
      "Complete user authentication with session tokens & protected routes",
      "Stripe and Razorpay billing with webhook verification",
      "Modern dark/light UI built with Tailwind CSS & custom design tokens",
      "Admin CMS dashboard for customer management and revenue metrics",
      "Pre-configured Resend transactional email templates",
    ],
    whatsIncluded: [
      "Full source code access with commercial license for unlimited personal & client projects",
      "Detailed step-by-step setup documentation & video walkthrough",
      "Free updates for 1 full year",
    ],
    requirements: ["Node.js v18+ installed on your machine"],
    downloadFileName: "nextjs-saas-starter-v2.zip",
    downloadToken: "dl-saas-starter-2026",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 310,
    createdAt: "2025-03-01",
  },
  {
    id: "prod-6",
    slug: "flutter-starter-kit",
    name: "Flutter Enterprise Starter Kit",
    title: "Flutter Enterprise Mobile App Starter Kit",
    shortDescription: "Clean Architecture, GetX state management, Firebase auth, offline sync & REST API wrapper.",
    description:
      "The ultimate starting point for your iOS and Android mobile apps. Features structured layered architecture (Domain, Data, Presentation), theme switching, multi-language i18n, and pre-built authentication screens.",
    price: 1999,
    originalPrice: 3999,
    discountPercentage: 50,
    rating: 4.9,
    reviewsCount: 54,
    category: "Flutter Templates",
    productType: "Template",
    technologies: ["Flutter", "Dart", "GetX", "Firebase", "REST APIs"],
    features: [
      "Clean architecture with separation of concerns",
      "Ready-to-use Auth flows: Login, Signup, Forgot Password, Phone OTP",
      "Dynamic Light & Dark mode support",
      "Automated network interceptor with auto-refresh token handling",
    ],
    whatsIncluded: [
      "Complete Flutter source code repository",
      "Figma design file with all UI screens",
      "Architecture diagram & setup guide",
    ],
    requirements: ["Flutter SDK 3.x installed"],
    downloadFileName: "flutter-clean-starter-v2.zip",
    downloadToken: "dl-flutter-starter-2026",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 220,
    createdAt: "2025-03-10",
  },
  {
    id: "prod-7",
    slug: "admin-dashboard-ui-kit",
    name: "Admin Dashboard UI Kit",
    title: "Modern Executive Admin Dashboard UI Kit",
    shortDescription: "15+ production dashboards, CRM pipelines, charts, tables with filters & responsive layouts.",
    description:
      "Supercharge your internal tools and client projects with over 50+ pre-styled components, data tables with pagination and sorting, interactive analytics charts, and kanban boards.",
    price: 1499,
    originalPrice: 2999,
    discountPercentage: 50,
    rating: 4.88,
    reviewsCount: 42,
    category: "UI Kits",
    productType: "UI Kit",
    technologies: ["Next.js", "React", "Tailwind CSS", "Recharts", "Lucide Icons"],
    features: [
      "15 modular dashboard layouts (CRM, Analytics, E-commerce, SaaS, Learning)",
      "High-performance data tables with client & server sorting",
      "Accessible modal dialogs, drawers, and notification toasts",
      "Sleek Apple & Linear inspired aesthetics",
    ],
    whatsIncluded: ["React + Next.js source code", "Figma design tokens", "Component documentation"],
    requirements: ["React 18 or 19"],
    downloadFileName: "admin-dashboard-ui-kit.zip",
    downloadToken: "dl-admin-ui-2026",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: false,
    salesCount: 185,
    createdAt: "2025-02-25",
  },
  {
    id: "prod-8",
    slug: "developer-portfolio-template",
    name: "Developer Portfolio Pro Template",
    title: "Developer Portfolio Pro Template",
    shortDescription: "The award-worthy personal website template with blog, products showcase & contact CRM.",
    description:
      "Stand out from the crowd with a high-converting, tech-forward personal portfolio template engineered to turn casual visitors into high-paying freelance clients and recruiters.",
    price: 999,
    originalPrice: 1999,
    discountPercentage: 50,
    rating: 4.96,
    reviewsCount: 88,
    category: "Developer Templates",
    productType: "Template",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MDX", "Vercel"],
    features: [
      "Subtle micro-animations with 100/100 Lighthouse performance",
      "Built-in MDX technical blog with syntax highlighting",
      "Client inquiry form with automated email notification ready",
      "Dynamic project case study page templates",
    ],
    whatsIncluded: ["Next.js App Router codebase", "Vercel 1-click deploy setup", "Video documentation"],
    requirements: ["Basic HTML & React familiarity"],
    downloadFileName: "developer-portfolio-template.zip",
    downloadToken: "dl-portfolio-pro-2026",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    featured: true,
    salesCount: 430,
    createdAt: "2025-01-15",
  },
];

export const initialCourses: Course[] = [
  {
    id: "course-1",
    slug: "javascript-from-zero-to-advanced",
    title: "JavaScript From Zero to Advanced",
    subtitle: "Master the language that powers the web from absolute fundamentals to V8 engine internals",
    description:
      "A deep, no-fluff masterclass in modern JavaScript. Learn how JS actually works behind the scenes: execution contexts, closures, prototype chains, event loop, promises, generators, and async iterators through real-world projects.",
    instructor: "Siva",
    level: "All Levels",
    duration: "18.5 Hours",
    lessonsCount: 65,
    rating: 4.94,
    reviewsCount: 312,
    price: 1499,
    originalPrice: 3499,
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80",
    enrolledCount: 1420,
    featured: true,
    requirements: [
      "A computer with internet access and VS Code installed",
      "No prior coding experience required; we start from scratch",
    ],
    whatYouWillLearn: [
      "Understand the V8 Engine, Call Stack, Memory Heap, and Event Loop",
      "Write modern ES6+ through ES2025 code idiomatically",
      "Deeply master closures, lexical scope, and the 'this' keyword in all contexts",
      "Master Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
      "Build 5 real-world interactive JavaScript applications without any libraries",
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1: JavaScript Fundamentals & Mental Models",
        description: "Variables, primitive types, operators, and how the computer evaluates code.",
        lessons: [
          { id: "l1", title: "Course Introduction & Setup", duration: "12:30", isFreePreview: true },
          { id: "l2", title: "How JS Runs: V8, Call Stack & Memory", duration: "18:45", isFreePreview: true },
          { id: "l3", title: "Variables, Let, Const & Temporal Dead Zone", duration: "15:20" },
          { id: "l4", title: "Data Types & Type Coercion Mysteries", duration: "21:10" },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Advanced Functions & Scope",
        description: "Closures, currying, higher-order functions, and lexical environments.",
        lessons: [
          { id: "l5", title: "Functions as First-Class Citizens", duration: "16:00" },
          { id: "l6", title: "Deep Dive into Closures with Visual Memory Tracing", duration: "25:40", isFreePreview: true },
          { id: "l7", title: "The 'this' Keyword: 4 Rules Decoded", duration: "28:15" },
          { id: "l8", title: "Call, Apply, and Bind Implementations", duration: "22:50" },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Asynchronous Programming & The Event Loop",
        description: "Concurrency, microtasks, macrotasks, and custom promise polyfills.",
        lessons: [
          { id: "l9", title: "Synchronous vs Asynchronous Mental Model", duration: "14:10" },
          { id: "l10", title: "Event Loop, Task Queue & Microtask Priority", duration: "32:00", isFreePreview: true },
          { id: "l11", title: "Building a Custom Promise from Scratch", duration: "40:20" },
          { id: "l12", title: "Async/Await & Error Handling Patterns", duration: "24:30" },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Real-World Capstone Project",
        description: "Building an interactive productivity dashboard with zero external dependencies.",
        lessons: [
          { id: "l13", title: "Project Architecture & State Store", duration: "30:00" },
          { id: "l14", title: "DOM Manipulation & Event Delegation", duration: "35:00" },
          { id: "l15", title: "Offline Storage & Production Packaging", duration: "20:00" },
        ],
      },
    ],
    createdAt: "2025-01-10",
  },
  {
    id: "course-2",
    slug: "react-developer-bootcamp",
    title: "React Developer Bootcamp",
    subtitle: "From component fundamentals to full production applications with React 19",
    description:
      "Become a job-ready React developer. Learn modern component architecture, custom hooks, performance profiling, state management with Zustand, and server communication.",
    instructor: "Siva",
    level: "Intermediate",
    duration: "16.0 Hours",
    lessonsCount: 52,
    rating: 4.96,
    reviewsCount: 248,
    price: 1999,
    originalPrice: 3999,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    enrolledCount: 980,
    featured: true,
    requirements: [
      "Solid understanding of JavaScript (ES6+, array methods, promises)",
      "Basic HTML & CSS knowledge",
    ],
    whatYouWillLearn: [
      "Master React 19 Hooks: useState, useEffect, useMemo, useCallback, useActionState",
      "Manage complex application state using Zustand and Context API",
      "Eliminate unnecessary re-renders using the React DevTools Profiler",
      "Build 3 production-grade portfolio projects",
    ],
    modules: [
      {
        id: "rm1",
        title: "Module 1: React 19 Architecture & Mental Models",
        lessons: [
          { id: "rl1", title: "Introduction & React 19 Paradigms", duration: "15:00", isFreePreview: true },
          { id: "rl2", title: "JSX Under the Hood", duration: "18:00" },
          { id: "rl3", title: "Component Lifecycle & Reconciliation", duration: "24:00" },
        ],
      },
      {
        id: "rm2",
        title: "Module 2: Advanced Hooks & Custom Hooks",
        lessons: [
          { id: "rl4", title: "useEffect Mental Model & Cleanups", duration: "26:00", isFreePreview: true },
          { id: "rl5", title: "Crafting Reusable Custom Hooks", duration: "32:00" },
          { id: "rl6", title: "useTransition and useDeferredValue", duration: "28:00" },
        ],
      },
      {
        id: "rm3",
        title: "Module 3: Real-World E-Commerce App Project",
        lessons: [
          { id: "rl7", title: "Project Setup & Design Tokens", duration: "22:00" },
          { id: "rl8", title: "Shopping Cart & Zustand Store", duration: "35:00" },
          { id: "rl9", title: "Checkout & Optimistic UI Updates", duration: "29:00" },
        ],
      },
    ],
    createdAt: "2025-02-01",
  },
  {
    id: "course-3",
    slug: "nextjs-full-stack-development",
    title: "Next.js Full-Stack Masterclass",
    subtitle: "Build production-scale SaaS, Server Components, MongoDB integration & cloud deployment",
    description:
      "The definitive course on modern full-stack development. Learn App Router, React Server Components, Server Actions, MongoDB database integration, authentication, and payments from scratch to Vercel production.",
    instructor: "Siva",
    level: "Advanced",
    duration: "24.0 Hours",
    lessonsCount: 74,
    rating: 4.98,
    reviewsCount: 380,
    price: 2499,
    originalPrice: 4999,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    enrolledCount: 1650,
    featured: true,
    requirements: [
      "Comfortable with React basics and TypeScript syntax",
      "Understanding of REST API concepts",
    ],
    whatYouWillLearn: [
      "Master Next.js App Router, layout hierarchies, parallel & intercepted routes",
      "Leverage React Server Components for instant initial page loads and zero bundle size",
      "Build secure Server Actions with Zod validation and rate limiting",
      "Model scalable MongoDB databases with Mongoose",
      "Implement Stripe and Razorpay checkout workflows with verified webhooks",
    ],
    modules: [
      {
        id: "nm1",
        title: "Module 1: The App Router Revolution",
        lessons: [
          { id: "nl1", title: "Architecture & Server vs Client Components", duration: "22:00", isFreePreview: true },
          { id: "nl2", title: "Routing Conventions: Layouts, Templates, Error Boundaries", duration: "30:00" },
          { id: "nl3", title: "Streaming & Suspense Boundaries", duration: "25:00" },
        ],
      },
      {
        id: "nm2",
        title: "Module 2: Database & Server Actions",
        lessons: [
          { id: "nl4", title: "Connecting MongoDB with Connection Caching", duration: "28:00", isFreePreview: true },
          { id: "nl5", title: "Writing Secure Server Actions with Zod", duration: "34:00" },
          { id: "nl6", title: "Optimistic UI with useActionState", duration: "26:00" },
        ],
      },
      {
        id: "nm3",
        title: "Module 3: Full-Stack SaaS Capstone Project",
        lessons: [
          { id: "nl7", title: "Multi-Tenant Architecture Setup", duration: "45:00" },
          { id: "nl8", title: "Subscription Billing & Stripe/Razorpay Webhooks", duration: "50:00" },
          { id: "nl9", title: "Deploying to Vercel with Custom Domains & Edge Caching", duration: "32:00" },
        ],
      },
    ],
    createdAt: "2025-02-20",
  },
  {
    id: "course-4",
    slug: "flutter-development-course",
    title: "Flutter & Dart Mobile App Development",
    subtitle: "Build cross-platform iOS & Android mobile apps with clean architecture and Firebase",
    description:
      "Learn to build fluid, 60fps mobile applications for iOS and Android using Flutter 3.x and Dart. Covers state management with GetX, REST API integration, Firebase authentication, local storage, and app store deployment.",
    instructor: "Siva",
    level: "Intermediate",
    duration: "15.0 Hours",
    lessonsCount: 48,
    rating: 4.92,
    reviewsCount: 165,
    price: 1899,
    originalPrice: 3799,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    enrolledCount: 740,
    featured: false,
    requirements: [
      "Basic programming logic in any language (JavaScript, Python, C++, etc.)",
    ],
    whatYouWillLearn: [
      "Dart programming language fundamentals and object-oriented principles",
      "Flutter widget tree, layout constraints, animations, and custom painters",
      "State management using GetX and Clean Architecture principles",
      "Connecting to backend REST APIs and handling offline sync",
    ],
    modules: [
      {
        id: "fm1",
        title: "Module 1: Dart Fundamentals & Flutter Setup",
        lessons: [
          { id: "fl1", title: "Setting up Flutter on Mac & Windows", duration: "18:00", isFreePreview: true },
          { id: "fl2", title: "Dart OOP: Classes, Mixins, Futures", duration: "25:00" },
          { id: "fl3", title: "Stateless vs Stateful Widgets", duration: "22:00" },
        ],
      },
      {
        id: "fm2",
        title: "Module 2: Complete Delivery App Project",
        lessons: [
          { id: "fl4", title: "UI Layout & Custom Components", duration: "38:00" },
          { id: "fl5", title: "GetX State Controllers & Dependency Injection", duration: "32:00" },
          { id: "fl6", title: "Firebase Authentication & Cloud Firestore", duration: "40:00" },
        ],
      },
    ],
    createdAt: "2025-03-05",
  },
  {
    id: "course-5",
    slug: "full-stack-interview-preparation",
    title: "Full-Stack Interview Preparation Bootcamp",
    subtitle: "Crack senior full-stack developer rounds: System design, live coding, and behavioral mastery",
    description:
      "A fast-paced, high-impact bootcamp tailored to help developers clear rigorous technical screening rounds, machine coding challenges, system design interviews, and behavioral panels.",
    instructor: "Siva",
    level: "Advanced",
    duration: "12.0 Hours",
    lessonsCount: 40,
    rating: 4.97,
    reviewsCount: 195,
    price: 1699,
    originalPrice: 3299,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    enrolledCount: 890,
    featured: false,
    requirements: [
      "Prior experience building full-stack applications",
    ],
    whatYouWillLearn: [
      "System design principles: Rate limiting, caching, database sharding, and messaging queues",
      "How to ace the 60-minute live machine coding round under time pressure",
      "Top 50 tricky questions in JS, React, Node, and SQL/NoSQL databases",
      "Salary negotiation tactics that yielded 40-70% compensation bumps",
    ],
    modules: [
      {
        id: "im1",
        title: "Module 1: Machine Coding Mastery",
        lessons: [
          { id: "il1", title: "Framework for Solving Live Coding in 45 Mins", duration: "20:00", isFreePreview: true },
          { id: "il2", title: "Building an Infinite Scroll with Virtualization", duration: "35:00" },
          { id: "il3", title: "Building an Autocomplete with Debounce & Cache", duration: "28:00" },
        ],
      },
      {
        id: "im2",
        title: "Module 2: High-Level System Design for Full-Stack Engineers",
        lessons: [
          { id: "il4", title: "Designing a URL Shortener (Bitly)", duration: "35:00" },
          { id: "il5", title: "Designing a Notification System (Email, Push, SMS)", duration: "42:00" },
        ],
      },
    ],
    createdAt: "2025-03-15",
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "how-to-architect-nextjs-saas-2026",
    title: "How I Architect Next.js SaaS Applications in 2026 for Scalability & Speed",
    excerpt:
      "A deep dive into folder architecture, server vs client component isolation, caching strategies, and database connection pools for modern SaaS.",
    content: `
Building production-grade SaaS products with Next.js requires stepping away from traditional client-side SPA conventions and embracing React Server Components (RSC) with disciplined architectural boundaries.

### 1. The Core Mental Model: Server-First

In Next.js App Router, every component is a Server Component by default. You should only introduce \`'use client'\` at the furthest leaves of your component tree—specifically where user interaction (clicks, forms, drag-and-drop) or browser-only APIs (window, localStorage) are strictly required.

\`\`\`tsx
// Good: Server Component wrapper with isolated interactive client leaf
import { ProductList } from "@/components/products/ProductList";
import { FilterBar } from "@/components/products/FilterBar"; // Client component

export default async function ProductsPage() {
  const products = await getProducts(); // Direct server-side data fetch
  return (
    <div className="space-y-6">
      <FilterBar />
      <ProductList products={products} />
    </div>
  );
}
\`\`\`

### 2. Database Connection Pooling with MongoDB

When deploying on serverless runtimes like Vercel, each incoming HTTP request can potentially spin up a new Lambda instance. If you create a new database connection on every request, your MongoDB connection limit will quickly be exhausted.

Always maintain a cached client connection across warm invocations.

### 3. Zod-Validated Server Actions

Avoid writing boilerplate API route handlers when a Server Action suffices. Always pair your Server Action with Zod validation to ensure zero untrusted data enters your business logic.
    `,
    category: "Next.js",
    tags: ["Next.js", "SaaS", "Architecture", "MongoDB", "TypeScript"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Siva",
      role: "Full-Stack Developer & Product Builder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-02-10",
    readingTime: "7 min read",
    featured: true,
  },
  {
    id: "blog-2",
    slug: "build-once-sell-repeatedly-digital-products-guide",
    title: "Build Once. Sell Repeatedly: The Developer's Guide to Passive Income",
    excerpt:
      "How to turn code snippets, starter kits, and technical knowledge into profitable digital products that generate income while you sleep.",
    content: `
The traditional developer career trades time for money: 40 hours of engineering work equals a fixed salary or hourly invoice.

While consulting and employment are great foundations, true financial leverage comes from creating digital assets where the cost of reproduction is effectively zero.

### The 4 Pillars of Digital Developer Products

1. **PDF Guides & Interview Roadmaps**: High density of curated, structured information that saves the buyer 50+ hours of scattered Googling.
2. **Boilerplates & Starters**: Production-ready codebases with authentication, payments, and database schemas configured.
3. **UI Kits & Component Libraries**: Pre-styled, accessible design systems that cut frontend build times in half.
4. **Educational Video Courses**: Project-based tutorials breaking down advanced frameworks into digestible modules.

### Why Developers Fail at Digital Products

Most developers spend 6 months building an overly complex product before verifying whether anybody actually wants to pay for it.

The winning formula is:
1. Identify high-frequency developer pain points (e.g. "setting up Stripe webhooks in Next.js").
2. Build a minimal, beautiful, robust starter in 2-3 weeks.
3. Launch with rich documentation, transparent code preview, and high-impact design.
    `,
    category: "SaaS",
    tags: ["Passive Income", "Digital Products", "Entrepreneurship", "Career"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Siva",
      role: "Full-Stack Developer & Product Builder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-02-25",
    readingTime: "6 min read",
    featured: true,
  },
  {
    id: "blog-3",
    slug: "flutter-vs-react-native-2026-honest-comparison",
    title: "Flutter vs React Native in 2026: An Honest Full-Stack Developer Perspective",
    excerpt:
      "Having built production applications in both Flutter and React Native, here is the unfiltered breakdown of performance, developer velocity, and maintainability.",
    content: `
Choosing between Flutter and React Native in 2026 remains one of the most debated topics among cross-platform mobile developers.

### Where Flutter Shines
- **Pixel Perfection**: Because Flutter renders directly via Impeller/Skia rather than mapping to native OEM widgets, your UI looks identical across every iOS and Android device without styling discrepancies.
- **Consistent 60/120 FPS**: Smooth animations without JavaScript bridge bottlenecks.
- **Strong Typing with Dart**: Highly readable, structured object-oriented code that scales well in team environments.

### Where React Native Shines
- **Code Sharing with Web**: If your web application is built in Next.js or React, sharing utility logic, types, and hooks is straightforward.
- **OTA Updates**: Pushing instant hotfixes via Expo EAS without waiting for Apple App Store review cycles.
    `,
    category: "Flutter",
    tags: ["Flutter", "Mobile", "React Native", "Dart"],
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Siva",
      role: "Full-Stack Developer & Product Builder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-03-05",
    readingTime: "5 min read",
    featured: false,
  },
  {
    id: "blog-4",
    slug: "mongodb-aggregation-pipeline-mastery",
    title: "Mastering MongoDB Aggregation Pipelines for Real-Time Analytics",
    excerpt:
      "How to construct high-performance $lookup, $group, and $facet pipelines without crashing your database server.",
    content: `
MongoDB is much more than a simple document key-value store. When harnessed with its Aggregation Framework, it rivals dedicated analytics query engines for multi-stage data transformation.

In this tutorial, we construct a real-time revenue analytics query that groups daily orders, calculates customer lifetime value (LTV), and computes monthly recurring revenue (MRR) in a single server pass.
    `,
    category: "MongoDB",
    tags: ["MongoDB", "Database", "Backend", "Analytics"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Siva",
      role: "Full-Stack Developer & Product Builder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    publishedAt: "2026-03-12",
    readingTime: "8 min read",
    featured: false,
  },
];

export const initialYouTubeVideos: YouTubeVideo[] = [
  {
    id: "yt-1",
    title: "Next.js 15 App Router Full Course 2026 — Build a Production SaaS",
    description: "Complete 4-hour masterclass covering Server Components, Server Actions, MongoDB, Auth, and Stripe payment webhooks.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    views: "48.2K",
    publishedDate: "2 weeks ago",
    category: "Next.js",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
    featured: true,
  },
  {
    id: "yt-2",
    title: "How I Build Digital Products that Make Money While I Sleep",
    description: "The complete breakdown of my digital product ecosystem: templates, guides, roadmaps, and recurring subscriptions.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    views: "36.8K",
    publishedDate: "1 month ago",
    category: "Career",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
    featured: true,
  },
  {
    id: "yt-3",
    title: "Flutter Clean Architecture with Firebase & REST API",
    description: "Step-by-step tutorial structuring a production Flutter application using GetX, repository pattern, and offline Hive cache.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    views: "22.4K",
    publishedDate: "2 months ago",
    category: "Flutter",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
  },
  {
    id: "yt-4",
    title: "Top 25 React & Next.js Senior Developer Interview Questions Answered",
    description: "Tricky questions on Fiber, hydration mismatch, memory leaks, and RSC mental models with code demonstrations.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    views: "54.1K",
    publishedDate: "3 months ago",
    category: "Next.js",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
    featured: true,
  },
  {
    id: "yt-5",
    title: "PostgreSQL vs MongoDB: Which One Should You Pick in 2026?",
    description: "Real-world benchmarks, schema migration strategies, JSON queries, and developer ergonomics compared honestly.",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    views: "29.7K",
    publishedDate: "3 months ago",
    category: "Technology",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
  },
  {
    id: "yt-6",
    title: "Full-Stack Project from Scratch to Vercel Deployment in 60 Minutes",
    description: "Rapid prototyping workflow with Tailwind CSS, TypeScript, MongoDB, and continuous deployment on Vercel.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    views: "19.3K",
    publishedDate: "4 months ago",
    category: "Tutorials",
    youtubeUrl: "https://youtube.com/YOUR_YOUTUBE_URL",
  },
];

export const initialServices: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Website Development",
    slug: "website-development",
    shortDesc: "High-performance, beautifully styled business websites & landing pages built for high conversion.",
    problem: "Most company websites are slow, generic WordPress templates that fail to engage users or rank on Google.",
    solution: "Custom Next.js & Tailwind CSS websites engineered for sub-second loads, 100/100 Lighthouse scores, and seamless branding.",
    deliverables: ["Custom responsive design", "SEO & OpenGraph configuration", "Content CMS integration", "Contact form & CRM integration"],
    technology: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    estimatedTimeline: "1-2 Weeks",
    pricingEstimate: "From ₹25,000",
    icon: "Globe",
  },
  {
    id: "srv-2",
    title: "Full-Stack Web Applications",
    slug: "full-stack-development",
    shortDesc: "End-to-end custom web applications with complex workflows, user roles, and database architecture.",
    problem: "Off-the-shelf software doesn't fit custom company logic, leading to fractured manual spreadsheets and lost productivity.",
    solution: "Bespoke full-stack web platforms tailored to your exact business rules, customer journeys, and operational needs.",
    deliverables: ["Role-based user authentication", "Relational/NoSQL database models", "Custom REST/Server Action APIs", "Automated email alerts"],
    technology: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    estimatedTimeline: "3-6 Weeks",
    pricingEstimate: "From ₹60,000",
    icon: "Layers",
  },
  {
    id: "srv-3",
    title: "Next.js Development",
    slug: "nextjs-development",
    shortDesc: "Migration, optimization, or greenfield Next.js App Router applications with Server Components.",
    problem: "Outdated React SPA codebases suffering from poor SEO, huge bundle sizes, and slow mobile load times.",
    solution: "Modernize to Next.js with Server Components, streaming SSR, and edge caching for instant global delivery.",
    deliverables: ["App Router architecture", "Server Actions integration", "Image & font optimization", "SEO meta & JSON-LD setup"],
    technology: ["Next.js 15+", "React 19", "TypeScript", "Vercel Edge"],
    estimatedTimeline: "2-4 Weeks",
    pricingEstimate: "From ₹45,000",
    icon: "Code2",
  },
  {
    id: "srv-4",
    title: "Flutter App Development",
    slug: "flutter-app-development",
    shortDesc: "Native iOS and Android mobile applications built from a unified, high-performance Dart codebase.",
    problem: "Maintaining two separate native codebases (Swift + Kotlin) doubles development costs and slows feature launches.",
    solution: "Single Flutter codebase delivering smooth 60fps native performance, sleek UI, and unified maintenance.",
    deliverables: ["iOS and Android build artifacts", "Firebase push notifications", "Offline database caching", "App Store & Play Store deployment support"],
    technology: ["Flutter", "Dart", "GetX", "Firebase", "REST APIs"],
    estimatedTimeline: "4-8 Weeks",
    pricingEstimate: "From ₹75,000",
    icon: "Smartphone",
  },
  {
    id: "srv-5",
    title: "SaaS Development",
    slug: "saas-development",
    shortDesc: "Complete subscription software products with multi-tenancy, billing, and customer onboarding.",
    problem: "Launching a SaaS requires handling complex recurring billing, usage limits, user invites, and webhooks.",
    solution: "End-to-end SaaS architecture with Stripe/Razorpay subscription integration, admin oversight, and scalable data isolation.",
    deliverables: ["Subscription checkout & webhooks", "Team invites & multi-tenancy", "Usage-based quotas & billing", "Customer self-service portal"],
    technology: ["Next.js", "MongoDB", "Stripe", "Razorpay", "Tailwind CSS"],
    estimatedTimeline: "4-10 Weeks",
    pricingEstimate: "From ₹1,00,000",
    icon: "Cloud",
  },
  {
    id: "srv-6",
    title: "Admin Dashboard Development",
    slug: "admin-dashboard-development",
    shortDesc: "Intuitive internal tools, executive dashboards, CRM pipelines, and operations monitors.",
    problem: "Operations teams waste hours juggling disconnected spreadsheets and manual database queries.",
    solution: "Clean, responsive internal portals with granular search, CSV export, interactive analytics charts, and bulk actions.",
    deliverables: ["Interactive data tables with filters", "Visual analytics charts", "Role-based permissions", "Audit logging"],
    technology: ["Next.js", "Tailwind CSS", "Recharts", "MongoDB"],
    estimatedTimeline: "2-4 Weeks",
    pricingEstimate: "From ₹40,000",
    icon: "LayoutDashboard",
  },
  {
    id: "srv-7",
    title: "API Development & Integration",
    slug: "api-development",
    shortDesc: "Robust, documented RESTful and webhook APIs connecting third-party services and mobile apps.",
    problem: "Fragile API endpoints with poor validation leading to runtime crashes and security vulnerabilities.",
    solution: "Type-safe, documented APIs with Zod schema validation, JWT auth, rate limiting, and automated error logging.",
    deliverables: ["OpenAPI/Swagger documentation", "Authentication middleware", "Webhook retry mechanisms", "Unit & integration tests"],
    technology: ["Node.js", "Express", "Next.js", "TypeScript", "MongoDB"],
    estimatedTimeline: "1-3 Weeks",
    pricingEstimate: "From ₹30,000",
    icon: "Network",
  },
  {
    id: "srv-8",
    title: "Database Architecture",
    slug: "database-architecture",
    shortDesc: "Scalable schema design, indexing, performance optimization, and data migration for MongoDB.",
    problem: "Slow database queries causing sluggish page response times and unmanageable database bills.",
    solution: "Comprehensive database audit, index optimization, schema normalization or denormalization, and aggregation pipelines.",
    deliverables: ["Schema design diagrams", "Query execution plan audit", "Compound index setup", "Automated backup configuration"],
    technology: ["MongoDB", "Mongoose", "NoSQL Modeling", "Redis"],
    estimatedTimeline: "1-2 Weeks",
    pricingEstimate: "From ₹35,000",
    icon: "Database",
  },
  {
    id: "srv-9",
    title: "AI Integration & Automation",
    slug: "ai-integration",
    shortDesc: "Incorporate intelligent LLMs, document extraction, automated customer support, and semantic workflows.",
    problem: "Businesses miss out on massive labor savings by not automating repetitive manual data processing.",
    solution: "Deploy AI agent workflows, automated PDF parsing, and custom chatbot interfaces into existing web apps.",
    deliverables: ["LLM API pipeline integration", "Structured JSON output validation", "Vector search & embeddings", "Fallback error handling"],
    technology: ["OpenAI", "Ollama", "Anthropic", "Python", "Next.js"],
    estimatedTimeline: "2-4 Weeks",
    pricingEstimate: "From ₹50,000",
    icon: "Cpu",
  },
  {
    id: "srv-10",
    title: "Website Performance Optimization",
    slug: "website-performance-optimization",
    shortDesc: "Turn sluggish websites into sub-second powerhouses with 95+ Core Web Vitals scores.",
    problem: "Slow loading speeds directly degrade conversion rates and hurt search engine rankings on mobile.",
    solution: "Deep performance audit: bundle reduction, script deferral, dynamic code splitting, and caching headers.",
    deliverables: ["Core Web Vitals guarantee (LCP, FID, CLS)", "Image & media compression pipeline", "Render tree optimization", "Before/after benchmark audit"],
    technology: ["Lighthouse", "Web Vitals", "Next.js", "Vercel Analytics"],
    estimatedTimeline: "1 Week",
    pricingEstimate: "From ₹25,000",
    icon: "Zap",
  },
  {
    id: "srv-11",
    title: "Technical SEO Development",
    slug: "seo-development",
    shortDesc: "Structured data, dynamic XML sitemaps, robots.txt, and canonical tags to dominate search results.",
    problem: "Great websites hidden on page 5 of Google due to missing structured metadata and crawler crawlability errors.",
    solution: "Complete technical SEO implementation: JSON-LD schemas (Article, Product, Breadcrumb), dynamic sitemaps, and semantic HTML.",
    deliverables: ["Automated sitemap.xml generation", "JSON-LD schema markup", "Canonical URLs & OpenGraph tags", "Google Search Console audit"],
    technology: ["JSON-LD", "Next.js Metadata API", "Semantic HTML5"],
    estimatedTimeline: "1 Week",
    pricingEstimate: "From ₹20,000",
    icon: "Search",
  },
  {
    id: "srv-12",
    title: "Maintenance & Continuous Support",
    slug: "maintenance",
    shortDesc: "Proactive uptime monitoring, security patching, dependency upgrades, and ongoing feature enhancements.",
    problem: "Websites and apps left unattended suffer from security vulnerabilities and deprecated third-party APIs.",
    solution: "Peace of mind with monthly SLA support: 24/7 uptime pinging, security patches, regular backups, and minor iterations.",
    deliverables: ["24/7 uptime monitoring alerts", "Monthly dependency & security updates", "Scheduled database backups", "Priority bug resolution"],
    technology: ["GitHub Actions", "Vercel", "MongoDB Atlas", "Sentry"],
    estimatedTimeline: "Ongoing Monthly",
    pricingEstimate: "From ₹15,000/mo",
    icon: "ShieldCheck",
  },
];

export const initialLeads: Lead[] = [
  {
    id: "lead-1",
    name: "Vikram Malhotra",
    email: "vikram@techstart.io",
    phone: "+91 98765 43210",
    company: "TechStart Logistics",
    projectType: "SaaS",
    budget: "₹1L–₹3L",
    timeline: "1-2 Months",
    projectDescription: "Need a fleet dispatch and tracking portal with real-time GPS drivers app and customer SMS updates.",
    referenceWebsite: "https://ridealott.demo.app",
    requiredFeatures: "Real-time map tracking, driver dispatch, automated invoicing, customer reviews",
    status: "Proposal",
    notes: "Sent initial technical proposal; scheduled follow-up call for Tuesday.",
    createdAt: "2026-03-20",
  },
  {
    id: "lead-2",
    name: "Sarah Jenkins",
    email: "sarah@apexdesign.co",
    company: "Apex Design Agency",
    projectType: "Website",
    budget: "₹50K–₹1L",
    timeline: "2-3 Weeks",
    projectDescription: "High-end portfolio and case studies website for our 12-person UI/UX studio.",
    status: "Discussion",
    notes: "Discussed custom animations and dark mode styling.",
    createdAt: "2026-03-22",
  },
  {
    id: "lead-3",
    name: "Arjun Reddy",
    email: "arjun@edumaster.in",
    projectType: "Mobile App",
    budget: "₹1L–₹3L",
    timeline: "2 Months",
    projectDescription: "Flutter mobile application for online mock tests and video courses for students.",
    status: "New",
    notes: "New lead submitted via website contact form.",
    createdAt: "2026-03-24",
  },
];

export const initialOrders: Order[] = [
  {
    id: "ord-1001",
    orderNumber: "ORD-94812",
    customerName: "Rahul Sharma",
    customerEmail: "rahul.s@example.com",
    items: [
      {
        productId: "prod-1",
        productTitle: "JavaScript Interview Master Guide",
        price: 499,
        downloadToken: "dl-js-interview-2026",
      },
    ],
    totalAmount: 499,
    currency: "INR",
    paymentProvider: "Razorpay",
    paymentStatus: "Completed",
    transactionId: "pay_Rzp912048512",
    createdAt: "2026-03-21T10:15:00Z",
  },
  {
    id: "ord-1002",
    orderNumber: "ORD-94813",
    customerName: "David Miller",
    customerEmail: "david.m@example.com",
    items: [
      {
        productId: "prod-5",
        productTitle: "Next.js SaaS Starter Kit",
        price: 2499,
        downloadToken: "dl-saas-starter-2026",
      },
    ],
    totalAmount: 2499,
    currency: "INR",
    paymentProvider: "Stripe",
    paymentStatus: "Completed",
    transactionId: "ch_3N8192049182",
    createdAt: "2026-03-22T14:40:00Z",
  },
];
