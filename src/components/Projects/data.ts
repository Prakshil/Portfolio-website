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

export const featuredProjects: Project[] = [
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
      { name: "Authentication", icon: "jwt" },
      { name: "Vercel", icon: "vercel" },
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
    slug: "job-portal",
    name: "Devconnects - A MERN Stack Job Portal",
    imageSrc: "/project/Devconnects.jpg",
    summary:
      "A complete MERN stack job portal where recruiters can post job listings and candidates can search, filter, and apply. Includes authentication, job management, and dynamic data handling via REST APIs.",
    liveUrl: "https://devconnects-psi.vercel.app/",
    githubUrl: "https://github.com/Prakshil/Job_Portal_MERN.git",
    tech: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Express", icon: "express" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs" },
      { name: "Authentication", icon: "jwt" },
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
      { name: "Authentication Flow", icon: "jwt" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const moreProjects: Project[] = [

  {
    slug: "stacklamp",
    name: "StackLamp - A QnA Platform",
    imageSrc: "/project/Stacklamp.jpg",
    summary:
      "StackLamp is a StackOverflow-inspired Q&A platform where users can ask questions, post answers, and engage through voting mechanisms. It focuses on community interaction, structured content, and scalable backend services.",
    liveUrl: "https://stacklamp-21.appwrite.network/",
    githubUrl:
      "https://github.com/Prakshil/StackLamp-A-Modern-StackOverflow-Clone.git",
    tech: [
      { name: "React", icon: "react" },
      { name: "Appwrite", icon: "appwrite" },
      { name: "JavaScript", icon: "js" },
      { name: "Authentication", icon: "jwt" },
      { name: "Cloud Backend" },
    ],
  },
  {
    slug: "authflow",
    name: "AuthFlow - Authentication System",
    imageSrc: "/project/authflow.jpg",
    summary:
      "AuthFlow is a secure, production-ready authentication system designed to be reused across multiple applications. It includes login, registration, session handling, password management, and authorization workflows aligned with best practices.",
    liveUrl: "https://authflow-two.vercel.app/",
    githubUrl:
      "https://github.com/Prakshil/AuthFlow-Production-level-AuthSystem.git",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "React", icon: "react" },
      { name: "Authentication Tokens", icon: "jwt" },
      { name: "Secure API Handling" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

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
