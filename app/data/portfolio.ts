import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiApachehive,
  SiApachespark,
  SiApachehadoop,
  SiPostman,
  SiRazorpay,
  SiCloudflare,
} from "react-icons/si";
import { TbBrandReactNative, TbApi, TbBrandVscode } from "react-icons/tb";
import { BsMicrosoft } from "react-icons/bs";
import type { IconType } from "react-icons";

/* ------------------------------------------------------------------ */
/*  Site / identity                                                    */
/* ------------------------------------------------------------------ */

export const siteConfig = {
  name: "Abhijit Sahane",
  role: "React & React Native Developer",
  tagline: "I build production-ready web & mobile products — end to end.",
  location: "Pune, India",
  email: "cloudabhi123@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL in prod for correct absolute OG/canonical URLs.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://abhijitsahane.vercel.app",
  resume: "/Abhijit_Sahane_Resume.pdf",
  socials: {
    github: "https://github.com/AbhiSahane0",
    linkedin: "https://www.linkedin.com/in/abhijit-sahane-034277229/",
    email: "mailto:cloudabhi123@gmail.com",
  },
  availability: "Available for freelance",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "freelance", label: "Freelance" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  Hero stats                                                         */
/* ------------------------------------------------------------------ */

export const heroStats: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}[] = [
  { value: 3, suffix: "+", label: "Years building" },
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 1, label: "Prod app on Play Store" },
];

export const heroRoles = [
  "Frontend Developer",
  "React Native Developer",
  "Full-Stack Builder",
  "Node.js & APIs",
  "Cloud & Data Engineering",
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const skillGroups: {
  title: string;
  accent: string;
  blurb: string;
  skills: { name: string; Icon: IconType; color: string }[];
}[] = [
  {
    title: "Frontend",
    accent: "from-cyan-400 to-blue-500",
    blurb: "Interfaces that feel fast and effortless.",
    skills: [
      { name: "React", Icon: FaReact, color: "#61dafb" },
      { name: "React Native", Icon: TbBrandReactNative, color: "#61dafb" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "Redux", Icon: SiRedux, color: "#764abc" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
      { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" },
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-400 to-teal-500",
    blurb: "APIs, auth and real-time systems.",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "#5fa04e" },
      { name: "Express", Icon: SiExpress, color: "#e5e7eb" },
      { name: "REST APIs", Icon: TbApi, color: "#34d399" },
      { name: "Socket.IO", Icon: SiSocketdotio, color: "#e5e7eb" },
      { name: "JWT / Auth", Icon: SiJsonwebtokens, color: "#f472b6" },
    ],
  },
  {
    title: "Databases",
    accent: "from-fuchsia-400 to-purple-500",
    blurb: "Modeling, querying and scaling data.",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
      { name: "SQL Server", Icon: BsMicrosoft, color: "#cc2927" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
      { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "from-blue-400 to-indigo-500",
    blurb: "Ship it, host it, keep it running.",
    skills: [
      { name: "Azure", Icon: BsMicrosoft, color: "#0089d6" },
      { name: "Docker", Icon: FaDocker, color: "#2496ed" },
      { name: "Vercel", Icon: SiVercel, color: "#e5e7eb" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "#f38020" },
      { name: "GitHub", Icon: FaGithub, color: "#e5e7eb" },
    ],
  },
  {
    title: "Data Engineering",
    accent: "from-orange-400 to-amber-500",
    blurb: "Big-data pipelines & distributed compute.",
    skills: [
      { name: "Python", Icon: FaPython, color: "#3776ab" },
      { name: "PySpark", Icon: SiApachespark, color: "#e25a1c" },
      { name: "Hive", Icon: SiApachehive, color: "#fdee21" },
      { name: "Hadoop / HDFS", Icon: SiApachehadoop, color: "#66ccff" },
      { name: "Azure Data", Icon: BsMicrosoft, color: "#0089d6" },
    ],
  },
  {
    title: "Tools",
    accent: "from-rose-400 to-pink-500",
    blurb: "The everyday craft.",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "#f05032" },
      { name: "VS Code", Icon: TbBrandVscode, color: "#0098ff" },
      { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", Icon: FaFigma, color: "#f24e1e" },
      { name: "Android Studio", Icon: FaAndroid, color: "#3ddc84" },
      { name: "Razorpay", Icon: SiRazorpay, color: "#3395ff" },
    ],
  },
];

// Flat list used for the marquee of floating tech logos.
export const marqueeTech: { name: string; Icon: IconType; color: string }[] = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "React Native", Icon: TbBrandReactNative, color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", Icon: FaNodeJs, color: "#5fa04e" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
  { name: "Docker", Icon: FaDocker, color: "#2496ed" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Express", Icon: SiExpress, color: "#e5e7eb" },
  { name: "Socket.IO", Icon: SiSocketdotio, color: "#e5e7eb" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "PySpark", Icon: SiApachespark, color: "#e25a1c" },
  { name: "Azure", Icon: BsMicrosoft, color: "#0089d6" },
  { name: "Redux", Icon: SiRedux, color: "#764abc" },
  { name: "Razorpay", Icon: SiRazorpay, color: "#3395ff" },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string;
  title: string;
  year: string;
  category: "Mobile" | "Full-Stack" | "Frontend" | "Backend" | "Data";
  featured?: boolean;
  tagline: string;
  description: string;
  problem?: string;
  architecture?: string;
  challenges?: string;
  features: string[];
  tech: string[];
  gradient: string;
  accent: string; // hex, for glows
  status?: string; // e.g. "Production · Play Store"
  links: { github?: string; live?: string; caseStudy?: boolean };
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "gymbuddy",
    title: "GymBuddy",
    year: "2026",
    category: "Mobile",
    featured: true,
    tagline: "A production-scale gym management platform for Android.",
    description:
      "A full React Native product I designed, built, and shipped end-to-end to truly understand mobile product development — from the first schema to a signed Android App Bundle in Google Play closed testing. Owners run their gym; trainers manage members; members track everything.",
    problem:
      "Small gyms juggle attendance, plans, payments and members across WhatsApp and paper. GymBuddy puts the whole operation in one role-aware app.",
    architecture:
      "React Native app → Supabase (Postgres + RLS, Storage buckets, Edge Functions) for backend, Razorpay for payments, Firebase Cloud Messaging for push, deployed as a signed AAB with Play App Signing. Marketing site + privacy policy on a custom domain via Cloudflare.",
    challenges:
      "Row-level security across three roles, idempotent Razorpay webhooks, offline-safe auth re-init, FCM v1 push via Edge Functions, and passing Play Console data-safety & compliance for release.",
    features: [
      "Owner dashboard, trainer & member management",
      "Attendance, workout plans & diet plans",
      "Product store + subscription management",
      "Razorpay payment integration (server-priced, HMAC-verified)",
      "Firebase push notifications + realtime feed",
      "Supabase auth, storage buckets & edge functions",
      "Play closed testing, App Signing & data-safety compliance",
      "Production website, privacy policy & Cloudflare email routing",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Razorpay",
      "Firebase FCM",
      "Edge Functions",
      "Google Play",
      "Cloudflare",
    ],
    gradient: "from-violet-500 via-fuchsia-500 to-cyan-400",
    accent: "#a855f7",
    status: "Production · Play Store closed testing",
    links: { github: siteConfig.socials.github, caseStudy: true },
    metrics: [
      { label: "Roles", value: "3" },
      { label: "Owned end-to-end", value: "100%" },
      { label: "Payments", value: "Razorpay" },
      { label: "Release", value: "AAB" },
    ],
  },
  {
    id: "video-chat",
    title: "Random Video Chat",
    year: "2025",
    category: "Full-Stack",
    tagline: "An Omegle-style real-time video matching platform.",
    description:
      "A realtime, anonymous 1:1 video chat platform that pairs strangers instantly. Built to master WebRTC signaling, socket rooms and low-latency matching.",
    problem:
      "Instantly match two anonymous users into a peer-to-peer video call and let either one skip to the next match without leaking connection state.",
    architecture:
      "React client ↔ Node + Socket.IO signaling server managing a matching queue and room lifecycle, with WebRTC for peer-to-peer audio/video.",
    challenges:
      "Race-free matchmaking queue, clean room teardown on 'next', and reconnection handling under flaky networks.",
    features: [
      "Realtime stranger matching via a socket queue",
      "Peer-to-peer video calling with WebRTC",
      "Anonymous, no-signup chat",
      "Instant 'next' re-matching",
      "AI moderation layer (planned)",
    ],
    tech: ["React", "Node.js", "Socket.IO", "WebRTC", "Express"],
    gradient: "from-cyan-400 to-blue-600",
    accent: "#22d3ee",
    links: { github: siteConfig.socials.github },
  },
  {
    id: "event-booking",
    title: "Event Booking Backend",
    year: "2025",
    category: "Backend",
    tagline: "Concurrency-safe seat booking on SQL Server.",
    description:
      "A backend focused on the hard part of ticketing: preventing two people from booking the same seat. Deep dive into transactions, locking and stored procedures.",
    problem:
      "Under load, naive booking double-sells seats. This system guarantees a seat is sold exactly once, even with concurrent buyers.",
    architecture:
      "Normalized SQL Server schema with stored procedures that hold row locks inside serializable transactions to reserve, confirm or release seats atomically.",
    challenges:
      "Designing seat-locking with transactions to eliminate race conditions and deadlocks while keeping throughput high.",
    features: [
      "Relational database design & normalization",
      "Stored procedures for booking flows",
      "Seat-locking with transactions",
      "Concurrency & race-condition handling",
      "Atomic reserve / confirm / release",
    ],
    tech: ["SQL Server", "T-SQL", "Stored Procedures", "Transactions"],
    gradient: "from-rose-500 to-orange-500",
    accent: "#fb7185",
    links: { github: siteConfig.socials.github },
  },
  {
    id: "data-eng",
    title: "Data Engineering Labs",
    year: "2025",
    category: "Data",
    tagline: "A hands-on big-data stack, containerized.",
    description:
      "A self-built lab to learn distributed data processing: a Dockerized Hadoop ecosystem where I run PySpark jobs over HDFS and query with Hive/Hue.",
    problem:
      "Understand how big-data tooling actually fits together instead of reading about it — by standing up and operating the whole stack myself.",
    architecture:
      "Docker-composed Hadoop cluster (HDFS + Hive + Hue) with PySpark jobs reading and transforming data at scale.",
    challenges:
      "Wiring HDFS, Hive metastore and Spark together in containers and debugging distributed job failures.",
    features: [
      "Dockerized Hadoop / HDFS cluster",
      "PySpark transformation jobs",
      "Hive + Hue for querying",
      "Big-data processing patterns",
      "Foundation for Azure Data Services",
    ],
    tech: ["Python", "PySpark", "Hive", "Hue", "HDFS", "Docker"],
    gradient: "from-amber-400 to-orange-600",
    accent: "#fbbf24",
    links: { github: siteConfig.socials.github },
  },
  {
    id: "wild-oasis-web",
    title: "The Wild Oasis — Booking Site",
    year: "2025",
    category: "Full-Stack",
    tagline: "SEO-fast hotel booking with Next.js App Router.",
    description:
      "A production, SEO-optimized hotel booking site where guests explore cabins, check availability and reserve — built on the Next.js App Router.",
    features: [
      "Server-rendered pages & dynamic routing",
      "Auth & secure booking sessions",
      "Supabase realtime sync with the admin tool",
      "Image optimization, server actions & caching",
    ],
    tech: ["Next.js", "Supabase", "NextAuth", "Server Components", "Tailwind"],
    gradient: "from-emerald-500 to-lime-500",
    accent: "#34d399",
    links: {
      github: "https://github.com/AbhiSahane0/The_Wild_Oasis_Website",
      live: "https://the-wild-oasis-website-one-tau.vercel.app/",
    },
  },
  {
    id: "wild-oasis-admin",
    title: "The Wild Oasis — Admin Tool",
    year: "2025",
    category: "Full-Stack",
    tagline: "Internal hotel-ops dashboard in React.",
    description:
      "A production-grade internal tool to run daily hotel operations — cabins, bookings and guests — with heavy client + server state management.",
    features: [
      "React Query for realtime server state",
      "Reusable admin UI with React Hook Form",
      "Role-based booking & cabin management",
      "~30% fewer redundant network calls via caching",
    ],
    tech: ["React", "Supabase", "React Query", "React Hook Form", "Tailwind"],
    gradient: "from-teal-500 to-emerald-600",
    accent: "#2dd4bf",
    links: { github: "https://github.com/AbhiSahane0/the-wild-oasis" },
  },
  {
    id: "natours",
    title: "Natours — REST API",
    year: "2024",
    category: "Backend",
    tagline: "Secure, scalable tour-booking API.",
    description:
      "A production-standard REST API for a tour platform following an MVC architecture, with geospatial queries and hardened auth.",
    features: [
      "Full CRUD for tours, users, reviews & bookings",
      "Geospatial queries, filtering, pagination & aggregation",
      "JWT auth, authorization & password reset",
      "Rate limiting, sanitization & error middleware",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    gradient: "from-emerald-500 to-teal-600",
    accent: "#10b981",
    links: { github: "https://github.com/AbhiSahane0/natours-backend" },
  },
  {
    id: "rn-blog",
    title: "React Native Blog App",
    year: "2025",
    category: "Mobile",
    tagline: "Type-safe mobile CRUD with global state.",
    description:
      "A mobile blogging app built with React Native CLI: type-safe navigation, reusable forms and global state via Context + Reducer.",
    features: [
      "Type-safe stack navigation (React Navigation + TS)",
      "Reusable UI components & forms",
      "Global state with Context + Reducer",
      "Create / update / delete with smooth feedback",
    ],
    tech: ["React Native", "TypeScript", "Context API", "React Navigation"],
    gradient: "from-orange-500 to-red-500",
    accent: "#f97316",
    links: { github: siteConfig.socials.github },
  },
  {
    id: "movieverse",
    title: "MovieVerse",
    year: "2024",
    category: "Frontend",
    tagline: "Movie discovery with search & watchlist.",
    description:
      "A movie discovery app with search, ratings and a personal watchlist, powered by an external movie API.",
    features: [
      "Realtime data from an external movie API",
      "Dynamic UI with React hooks",
      "Search & filtering system",
    ],
    tech: ["React", "JavaScript", "REST APIs", "CSS"],
    gradient: "from-blue-500 to-cyan-500",
    accent: "#3b82f6",
    links: { github: "https://github.com/AbhiSahane0/MovieVerse" },
  },
  {
    id: "skycast",
    title: "SkyCast Weather",
    year: "2024",
    category: "Frontend",
    tagline: "Location-aware weather forecasts.",
    description:
      "A sleek weather app with city search and GPS-based forecasts, temperature, humidity and wind metrics.",
    features: [
      "City search & GPS location weather",
      "Responsive Tailwind interface",
      "Temperature, humidity & wind metrics",
    ],
    tech: ["JavaScript", "Tailwind", "Weather API"],
    gradient: "from-sky-500 to-blue-600",
    accent: "#0ea5e9",
    links: {
      github: "https://github.com/AbhiSahane0/Wheather.in",
      live: "https://abhisahane0.github.io/Wheather.in/",
    },
  },
];

export const projectFilters = [
  "All",
  "Mobile",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Data",
] as const;

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export const aboutParagraphs = [
  "I don't learn by watching tutorials on loop — I learn by building real products and shipping them. Every gap in my knowledge became a project until the concept was mine.",
  "To understand mobile development, I didn't build a to-do app. I built GymBuddy: a full React Native product with authentication, payments, a Supabase backend, cloud storage, edge functions, push notifications and an actual Google Play release pipeline — DevOps, custom domain and Play Console compliance included.",
  "That's the pattern. I chase the whole stack: deployment, authentication, payments, backends, cloud, databases and release engineering — because clients don't hire people who can only center a div. They hire people who can ship.",
];

export const aboutPhilosophy = "Learn by building. Ship real products.";

export const aboutHighlights = [
  { k: "Ships to production", v: "Not just localhost" },
  { k: "Owns the full stack", v: "Design → deploy" },
  { k: "Learns fast", v: "New tech, quickly" },
  { k: "Product mindset", v: "Users & business" },
];

/* ------------------------------------------------------------------ */
/*  Experience / journey timeline                                     */
/* ------------------------------------------------------------------ */

export type TimelineItem = {
  side?: "left" | "right";
  period: string;
  title: string;
  org?: string;
  type: string;
  location?: string;
  points: string[];
  tech?: string[];
  accent: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2021 – 2023",
    title: "Started Coding at 18",
    org: "B.Tech",
    type: "Foundations",
    points: [
      "Fell for the web during engineering and never looked back.",
      "Went from 'centering a div' to full applications by building, not memorizing.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    accent: "#22d3ee",
  },
  {
    period: "Oct 2023 – Jan 2024",
    title: "Frontend Development Intern",
    org: "Digitally Drunk",
    type: "Internship · Remote",
    location: "Remote",
    points: [
      "Built a responsive UI for a Bitcoin payment platform.",
      "Shipped reusable components with cross-browser support, collaborating over Git/GitHub.",
    ],
    tech: ["React", "Tailwind", "Material UI", "Git"],
    accent: "#a855f7",
  },
  {
    period: "2024 – 2025",
    title: "Going Full-Stack",
    org: "Self-driven",
    type: "Backend · Databases · Cloud",
    points: [
      "Built Natours (REST API), Wild Oasis (Next.js full-stack) and an SQL Server booking engine.",
      "Learned auth, payments, caching, transactions and deployment by shipping them.",
    ],
    tech: ["Node.js", "Next.js", "PostgreSQL", "MongoDB", "SQL Server"],
    accent: "#3b82f6",
  },
  {
    period: "Jun 2025 – Present",
    title: "Frontend Developer",
    org: "Dscission",
    type: "Full-time · Pune",
    location: "Pune",
    points: [
      "Build & maintain web + mobile apps for a harvesting platform — notifications, product management, contract creation.",
      "Optimized internal frontends and built interactive demo portals for healthcare clients.",
    ],
    tech: ["TypeScript", "React", "React Native", "REST APIs"],
    accent: "#8b5cf6",
  },
  {
    period: "2025 – 2026",
    title: "Shipped GymBuddy + Data Engineering",
    org: "Production apps",
    type: "Mobile · Cloud · Big Data",
    points: [
      "Took GymBuddy from schema to a signed Android App Bundle on Google Play.",
      "Built a Dockerized Hadoop/PySpark data lab; now moving into Azure Data Services.",
    ],
    tech: ["React Native", "Supabase", "Razorpay", "PySpark", "Docker"],
    accent: "#e879f9",
  },
  {
    period: "Now",
    title: "Open for Freelance",
    org: "Let's build",
    type: "Available worldwide",
    points: [
      "Taking on React, React Native and full-stack freelance work.",
      "From a quick bug-fix to shipping your product to the store.",
    ],
    tech: ["React", "React Native", "Node.js", "Supabase"],
    accent: "#2dd4bf",
  },
];

/* ------------------------------------------------------------------ */
/*  What makes me different                                            */
/* ------------------------------------------------------------------ */

export const differentiators = [
  {
    title: "I ship products, not components",
    body: "Anyone can write a React component. I take an idea all the way to a real app people use — planning, UI, backend, deploy.",
    icon: "rocket",
    accent: "#a855f7",
  },
  {
    title: "I understand deployment",
    body: "Vercel, custom domains, Cloudflare, signed Android App Bundles and Play Console compliance. I know how software actually goes live.",
    icon: "cloud",
    accent: "#22d3ee",
  },
  {
    title: "I understand backend architecture",
    body: "Auth, RLS, REST APIs, realtime sockets, edge functions and idempotent webhooks — the backend is not a black box to me.",
    icon: "server",
    accent: "#3b82f6",
  },
  {
    title: "I integrate payments",
    body: "Real Razorpay integration with server-side pricing, HMAC verification and safe webhooks — money handled correctly.",
    icon: "card",
    accent: "#34d399",
  },
  {
    title: "I understand databases",
    body: "PostgreSQL, SQL Server, MongoDB — modeling, transactions, seat-locking and row-level security under real concurrency.",
    icon: "database",
    accent: "#e879f9",
  },
  {
    title: "I learn new tech fast",
    body: "React Native, Supabase, PySpark, Azure — I pick up whatever the product needs and become productive quickly.",
    icon: "bolt",
    accent: "#fbbf24",
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements / counters                                           */
/* ------------------------------------------------------------------ */

export const achievements: {
  value: number;
  suffix?: string;
  label: string;
  sub: string;
}[] = [
  { value: 1, label: "Production Mobile App", sub: "Live on Google Play" },
  { value: 25, suffix: "+", label: "Technologies", sub: "Across the stack" },
  { value: 10, suffix: "+", label: "Full-Stack Projects", sub: "Web & mobile" },
  { value: 100, suffix: "%", label: "End-to-End Ownership", sub: "Idea → release" },
];

/* ------------------------------------------------------------------ */
/*  Testimonials (placeholders — replace with real client reviews)    */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "Your review goes here. Abhijit turned our idea into a shipped product faster than we expected — and handled the parts we didn't even know we needed.",
    name: "Your Client",
    role: "Founder · Startup",
    accent: "#a855f7",
  },
  {
    quote:
      "Placeholder testimonial. Rare to find a developer who owns frontend, backend and the release. Communication was clear the whole way through.",
    name: "Future Client",
    role: "Product Manager",
    accent: "#22d3ee",
  },
  {
    quote:
      "Reserved for a real review. He didn't just build the screens — he thought about our users, our data and how the thing scales.",
    name: "Next Client",
    role: "CTO · Agency",
    accent: "#e879f9",
  },
];

/* ------------------------------------------------------------------ */
/*  Freelancing                                                        */
/* ------------------------------------------------------------------ */

export const freelanceServices = [
  { title: "React Development", desc: "Modern, fast React web apps.", icon: "react" },
  { title: "React Native Apps", desc: "Cross-platform mobile, shipped to stores.", icon: "mobile" },
  { title: "Frontend Development", desc: "Pixel-accurate, responsive, accessible UI.", icon: "layout" },
  { title: "Full-Stack Projects", desc: "Frontend + backend + database + deploy.", icon: "stack" },
  { title: "API Integration", desc: "Payments, auth, third-party & REST APIs.", icon: "api" },
  { title: "Bug Fixes", desc: "Diagnose and fix tricky issues, fast.", icon: "bug" },
  { title: "Performance Optimization", desc: "Faster loads, smoother apps, better scores.", icon: "gauge" },
  { title: "Deployment", desc: "Vercel, cloud, custom domains & app stores.", icon: "cloud" },
];

/* Re-exports for convenience in components */
export const socialIcons = { FaGithub, FaLinkedin, FaEnvelope, SiVercel };
