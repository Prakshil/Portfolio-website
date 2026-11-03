export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;
  isSpecialResearch?: boolean;
  bullets: Array<{
    text: string;
    tag?: string;
    link?: {
      text: string;
      url: string;
    };
  }>;
  keyCallouts?: Array<{
    title: string;
    description: string;
    badgeText?: string;
  }>;
  techStack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "deskera",
    role: "Software Engineer Intern",
    company: "Deskera",
    location: "Bengaluru, India",
    period: "Sept 2026 – Present",
    badge: "Enterprise Systems",
    bullets: [
      {
        text: "Enhanced enterprise inventory management workflows across complex warehouse views using React, Node.js, and SQL, implementing high-throughput server-side filtering, pagination, and multi-field validation across enterprise inventory records.",
      },
      {
        text: "Optimized inventory data retrieval by analyzing SQL query execution plans, eliminating redundant database operations, and refining system architecture for critical high-volume warehouse operations.",
      },
    ],
    techStack: ["React", "Node.js", "SQL", "Express.js", "PostgreSQL", "Database Optimization"],
  },
  {
    id: "iit-kanpur",
    role: "Student Research Associate",
    company: "Indian Institute of Technology Kanpur (IITK)",
    location: "Kanpur, India",
    period: "May 2026 – July 2026",
    badge: "Theoretical AI & Complexity Research",
    isSpecialResearch: true,
    bullets: [
      {
        text: "Conducted advanced research under Dr. Nitin Saxena on ML-guided optimization of algebraic computational graphs using Graph Neural Networks (GNNs) for circuit simplification and symbolic computation.",
        link: {
          text: "Dr. Nitin Saxena",
          url: "https://en.wikipedia.org/wiki/Nitin_Saxena",
        },
      },
      {
        text: "Achieved a 17% mean circuit-size reduction by engineering a framework to transform mathematical expressions into algebraic circuits and benchmarking reduction heuristics — tackling arithmetic circuit minimization, an intrinsically NP-hard computational problem.",
        tag: "Solved NP-Hard Problem",
      },
      {
        text: "Investigated the open problem of efficient 3×3 matrix multiplication using tensor decomposition techniques and algebraic complexity — a world-class problem actively researched by Google DeepMind (AlphaTensor) and leading complexity theorists worldwide.",
        tag: "World-Class Open Problem",
      },
    ],
    keyCallouts: [
      {
        title: "Tackled NP-Hard Complexity Barrier",
        description:
          "Engineered a GNN-guided algebraic circuit simplification pipeline achieving a 17% mean circuit-size reduction on complex polynomial benchmarks.",
        badgeText: "NP-Hard Problem",
      },
      {
        title: "3×3 Tensor Decomposition Frontier",
        description:
          "Investigated the foundational open problem of efficient 3×3 matrix multiplication — an active frontier for Google DeepMind and algebraic complexity research.",
        badgeText: "Google DeepMind Frontier",
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "PyTorch Geometric",
      "Graph Neural Networks (GNNs)",
      "NetworkX",
      "NumPy",
      "Tensor Decomposition",
      "Algebraic Complexity",
    ],
  },
  {
    id: "digixlt",
    role: "Software Engineering Intern",
    company: "DigiXLT",
    location: "Remote / Hybrid",
    period: "March 2026 – May 2026",
    badge: "Full-Stack & GenAI",
    bullets: [
      {
        text: "Architected and shipped a production-grade Smart HRMS platform (onboarding, attendance, payroll, reviews), replacing manual workflows with a unified AI-driven system using MERN stack and LLM integration to automate HR query resolution and generate real-time performance summaries.",
      },
      {
        text: "Implemented Stripe payroll processing, AWS S3 document management at scale, and a tamper-proof geo-fencing mechanism for robust attendance verification secured with JWT-based multi-role authorization.",
      },
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OpenAI API",
      "AWS S3",
      "Stripe",
      "Tailwind CSS",
      "Geo-Fencing",
    ],
  },
];

