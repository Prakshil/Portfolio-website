export type ProjectTech = {
  name: string;
  icon?: string;
};

export type Project = {
  slug: string;
  name: string;
  summary?: string;
  imageSrc?: string;
  liveUrl?: string;
  githubUrl?: string;
  tech?: ProjectTech[];
};

export type AiProject = {
  id: string;
  title: string;
  badge?: string;
  status: "completed" | "in-progress";
  domains: string[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  repoStatusText?: string;
  highlights?: string[];
  categoryIcon: "vision" | "medical" | "agent" | "genai" | "mlops";
};

export const featuredProjects: Project[] = [
  {
    slug: "collabspace",
    name: "CollabSpace - Project Management Platform",
    imageSrc: "/project/collabspace.jpg",
    summary:
      "CollabSpace is a modern, full-stack project management platform that empowers teams to collaborate seamlessly, manage tasks efficiently, and track progress in real-time. Built with enterprise-grade authentication and responsive design, it delivers a production-ready solution for teams of all sizes.",
    liveUrl: "https://collabspace24.vercel.app",
    githubUrl: "https://github.com/Prakshil/CollabSpace-Project-management-App",
    tech: [
      { name: "React 19", icon: "react" },
      { name: "Redux Toolkit" },
      { name: "Vite" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Prisma ORM" },
      { name: "Clerk Authentication", icon: "jwt" },
      { name: "Tailwind CSS 4", icon: "tailwind" },
      { name: "Recharts" },
      { name: "Inngest" },
      { name: "Nodemailer" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    slug: "eduhub",
    name: "EduHub - An AI Powered Learning Platform",
    imageSrc: "/project/Eduhub.jpg",
    summary:
      "EduHub is a full-scale AI-powered Learning Management System designed to simplify digital education for students, teachers, and administrators. It centralizes course management, learning resources, and performance tracking through role-based dashboards, with a strong focus on usability, scalability, and automation.",
    liveUrl: "https://eduhub-lms-beta.vercel.app/",
    githubUrl: "https://github.com/Prakshil/EduHub-AI-Powered-LMS.git",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "REST APIs" },
      { name: "Authentication" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    slug: "civic-trust-portal",
    name: "Civic Trust Portal – Citizen-First Digital Platform (SDG-16)",
    imageSrc: "/project/civic.png",
    summary:
      "Civic Trust Portal is a centralized, citizen-first platform aligned with UN Sustainable Development Goal 16 (Peace, Justice and Strong Institutions). It bridges the information gap by unifying legal awareness, government welfare schemes, scholarships, internships, and job opportunities with interactive transparency dashboards and automated aggregation pipelines.",
    liveUrl: "https://civictrust-coral.vercel.app/",
    githubUrl: "https://github.com/Prakshil/Civic-Trust-Portal-SDG16.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Flask", icon: "flask" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "REST APIs" },
      { name: "RapidAPI" },
      { name: "Web Scraping" },
    ],
  },
  {
    slug: "cafe-pos",
    name: "Café POS – Restaurant Management & Point-of-Sale System",
    imageSrc: "/project/cafe.png",
    summary:
      "A comprehensive full-stack Restaurant Point-of-Sale (POS) system engineered to streamline dining operations across dedicated Admin, Waiter, Kitchen, and Cashier interfaces. Features end-to-end table management, real-time synchronized kitchen order workflows via Server-Sent Events (SSE), multi-mode payment processing (UPI/Cash/Card), and analytics reporting.",
    githubUrl: "https://github.com/Prakshil/Cafe-POS",
    tech: [
      { name: "React 18", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "Server-Sent Events (SSE)" },
      { name: "JWT Auth" },
      { name: "Razorpay" },
    ],
  },
  {
    slug: "schemacraft",
    name: "SchemaCraft - From a Product Idea to Deployable schema",
    imageSrc: "/project/schemacraft.jpg",
    summary:
      "SchemaCraft converts a plain-English product idea into a complete database design. Describe what your app needs, get tables/fields/relationships back, iterate by refining the description, and export the final schema as a foundation for building the application.",
    liveUrl: "https://schemacraft31.vercel.app/",
    githubUrl:
      "https://github.com/Prakshil/SchemaCraft-A-Unified-Schema-Solution.git",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "Groq (LLM)" },
      { name: "Render " },
    ],
  },
  {
    slug: "patternverse",
    name: "PatternVerse - A Pattern Library",
    imageSrc: "/project/Patternverse.jpg",
    summary:
      "PatternVerse is a UI/UX pattern library that provides reusable, production-ready components for modern web applications. It helps developers and designers build consistent interfaces faster by showcasing layouts, buttons, cards, forms, and interaction patterns in a clean, accessible format.",
    liveUrl: "https://pattern-verse.vercel.app/",
    githubUrl: "https://github.com/Prakshil/PatternVerse.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "js" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    slug: "renderbox",
    name: "RenderBox - A Saas Application",
    imageSrc: "/project/Renderbox.jpg",
    summary:
      "RenderBox is a SaaS-style web application built with scalability in mind. It demonstrates a structured dashboard experience, modular components, and a subscription-ready architecture—serving as a strong foundation for launching modern software products.",
    liveUrl: "https://renderbox-puce.vercel.app/",
    githubUrl: "https://github.com/Prakshil/RenderBox-A-SaaS-Application.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Authentication Flow" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const moreProjects: Project[] = [];

export const awwwardsProjects: Project[] = [
  {
    slug: "neonnectar",
    name: "NeonNectar",
    imageSrc: "/project/Neonnectar.jpg",
    summary:
      "NeonNectar is a visually rich 3D animated website showcasing advanced frontend animation techniques. It focuses on immersive UX, smooth transitions, and modern web aesthetics—great for premium brands or creative portfolios.",
    liveUrl: "https://neon-nectar.vercel.app/",
    githubUrl: "https://github.com/Prakshil/NeonNectar-A-3D-Animated-Website.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Three.js / 3D", icon: "threejs" },
      { name: "CSS Animations", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    slug: "rejouice",
    name: "Rejouice",
    imageSrc: "/project/rejouice.jpg",
    summary:
      "Rejouice is an Awwwards-inspired website emphasizing visual storytelling, motion design, and high-quality UI composition with interactive layouts.",
    liveUrl: "https://rejouice-awwards.vercel.app/",
    githubUrl: "https://github.com/Prakshil/Rejouice-AwwardsWebsite.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Advanced CSS", icon: "css" },
      { name: "JavaScript Animations", icon: "js" },
      { name: "Modern UI Design" },
    ],
  },
  {
    slug: "magma",
    name: "Magma",
    imageSrc: "/project/magma.png",
    summary:
      "A Web3 real estate experience clone featuring smooth scrolling, GSAP-driven animations, and immersive storytelling inspired by the Awwwards-winning Magma website.",
    liveUrl: "https://thisismagma-steel.vercel.app/",
    githubUrl: "https://github.com/Prakshil/Magma-Awwwards-website.git",
    tech: [
      { name: "Gsap" },
      { name: "Advanced CSS", icon: "css" },
      { name: "JavaScript Animations", icon: "js" },
      { name: "Modern UI Design" },
    ],
  },
];

export const aiProjects: AiProject[] = [
  {
    id: "industrial-ppe-detection",
    title: "Industrial PPE Detection System",
    badge: "Edge Prototype",
    status: "completed",
    domains: ["Computer Vision", "Edge AI"],
    description:
      "Developed an AI-powered computer vision system for automated PPE detection in industrial environments using a fine-tuned YOLOv8 object detection model. Consolidated and processed datasets from multiple sources, optimized model training, evaluated detection performance, and worked toward edge deployment for real-world industrial safety monitoring.",
    techStack: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "Ultralytics",
      "OpenCV",
      "Roboflow",
      "Arduino (Hardware Integration)",
    ],
    repoStatusText: "Repository Publishing Soon",
    categoryIcon: "vision",
  },
  {
    id: "chest-xray-classification",
    title: "Multi-Label Chest X-Ray Disease Classification",
    badge: "Healthcare Deep Learning",
    status: "completed",
    domains: ["Deep Learning", "Healthcare AI"],
    description:
      "Engineered a research-oriented deep learning pipeline for multi-label classification of 14 thoracic diseases from chest X-ray images. Leveraged ConvNeXt-Large with GCN-based label correlation modeling, class-imbalance-aware loss functions, probability calibration, and patient-level stratification. Evaluated cross-dataset generalization using independent CheXpert and MIMIC-CXR datasets.",
    techStack: [
      "Python",
      "PyTorch",
      "Torchvision",
      "ConvNeXt",
      "GCN",
      "OpenCV",
      "Albumentations",
      "MLflow",
      "Scikit-learn",
    ],
    githubUrl:
      "https://github.com/Prakshil/14-Disease-Multi-Label-Classification-CNN-model",
    categoryIcon: "medical",
  },
  {
    id: "datasentinel",
    title: "DataSentinel – Multi-Agent Data Quality Analysis Platform",
    badge: "Agentic AI System",
    status: "completed",
    domains: ["Agentic AI", "Data Engineering"],
    description:
      "Built an intelligent multi-agent system that automates data quality analysis in Snowflake data warehouses. Employs five specialized AI agents to plan investigations, execute SQL queries, perform statistical profiling, identify anomalies, and generate severity-based recommendations with comprehensive HTML reports through a natural-language interface.",
    techStack: [
      "Python",
      "Microsoft AutoGen",
      "Snowflake",
      "SQL",
      "OpenAI API",
      "OpenRouter",
      "Ollama",
      "Pandas",
      "YData Profiling",
      "Streamlit",
      "AsyncIO",
    ],
    githubUrl: "https://github.com/Prakshil/Datasentinel",
    categoryIcon: "agent",
  },
  {
    id: "researchbuddy",
    title: "ResearchBuddy – AI-Powered Research Paper Assistant",
    badge: "GenAI & LLM Assistant",
    status: "completed",
    domains: ["Generative AI", "LLM Applications"],
    description:
      "Developed an interactive AI-powered research assistant that transforms complex academic papers into understandable, step-by-step learning experiences. Processes uploaded research PDFs, enables contextual conversations, and uses Socratic-style prompting to assess prior knowledge, explain technical concepts, and improve research paper comprehension.",
    techStack: [
      "Python",
      "Streamlit",
      "OpenAI SDK",
      "GPT-4o-mini",
      "OpenRouter API",
      "PyMuPDF4LLM",
      "Python-dotenv",
    ],
    githubUrl: "https://github.com/Prakshil/ResearchBuddy",
    categoryIcon: "genai",
  },
  {
    id: "trainwatch",
    title: "TrainWatch – Lightweight ML Training & GPU Monitoring Library",
    badge: "In Progress",
    status: "in-progress",
    domains: ["ML Infrastructure", "MLOps"],
    description:
      "Developing a lightweight Python monitoring library for tracking machine learning training loops, identifying performance bottlenecks, and detecting potential GPU VRAM memory leaks in real time. Features a configurable, drop-in Watcher class that provides training heartbeats, GPU memory diagnostics, and step-level performance metrics, enabling reliable long-running experiments across cloud notebooks and remote GPU environments.",
    techStack: [
      "Python",
      "PyTorch",
      "CUDA",
      "NVIDIA NVML (pynvml)",
      "Setuptools",
      "Wheel Packaging",
      "GitHub Actions",
      "CI/CD",
    ],
    highlights: [
      "Real-time GPU VRAM monitoring & potential memory leak detection",
      "Training-loop heartbeats & step-level performance diagnostics",
      "Configurable drop-in Watcher class with minimal overhead",
      "Cross-platform compatibility & automated CI testing",
    ],
    githubUrl: "https://github.com/Prakshil/Train-watch",
    categoryIcon: "mlops",
  },
];
