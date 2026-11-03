export type Skill = {
	name: string;
	description?: string;
	/** Icon id for https://skillicons.dev */
	icon?: string;

	asset?: string;
};

export const skills: Skill[] = [
	{ name: "Python", description: "Automation, backend, data tooling & ML", icon: "python" },
	{ name: "PyTorch", description: "Deep learning architecture & training", icon: "pytorch" },
	{ name: "OpenCV", description: "Computer vision and image processing", icon: "opencv" },
	{ name: "Scikit-learn", description: "Classical ML pipelines and modeling", icon: "sklearn" },
	{ name: "NumPy", description: "Numerical computing and vectorization", asset: "/assets/NumPy.svg" },
	{ name: "Pandas", description: "Data analysis, transformation & ETL", asset: "/assets/Pandas.svg" },
	{ name: "FastAPI", description: "High-performance Python APIs & inference", icon: "fastapi" },
	{ name: "JavaScript", description: "Frontend + backend development", icon: "javascript" },
	{ name: "TypeScript", description: "Type-safe React/Node codebases", icon: "typescript" },
	{ name: "React.js", description: "Component-driven reactive UIs", icon: "react" },
	{ name: "Next.js", description: "Full-stack React framework", icon: "nextjs" },
	{ name: "Node.js", description: "Server-side JavaScript runtime", icon: "nodejs" },
	{ name: "Express.js", description: "REST APIs and middleware", icon: "express" },
	{ name: "PostgreSQL", description: "Relational database + indexing", icon: "postgres" },
	{ name: "SQL", description: "Queries, joins, and data modeling", icon: "mysql" },
	{ name: "Tailwind CSS", description: "Utility-first modern styling", icon: "tailwind" },
	{ name: "Docker", description: "Containerized development & deployments", icon: "docker" },
	{ name: "Git", description: "Version control workflows", icon: "git" },
	{ name: "GitHub", description: "Collaboration + CI/CD automation", icon: "github" },
	{ name: "Linux", description: "CLI, systems & server environments", icon: "linux" },
	{ name: "C++", description: "DSA and performance-oriented computing", icon: "cpp" },
	{ name: "C", description: "Core programming + systems fundamentals", icon: "c" },
	{ name: "Supabase", description: "DB + auth + realtime storage", icon: "supabase" },
	{ name: "Google Colab", description: "GPU-accelerated ML experiments", icon: "gcp" },
	{ name: "Vercel", description: "Next.js deployments & edge compute", icon: "vercel" },
	{ name: "Figma", description: "UI design handoff and prototyping", icon: "figma" },
	{ name: "Flask", description: "Lightweight Python microservices", icon: "flask" },
	{ name: "HTML5", description: "Semantic web architecture", icon: "html" },
	{ name: "CSS3", description: "Layouts, animations and styling", icon: "css" },
	{ name: "Visual Studio Code", description: "Daily engineering workspace", icon: "vscode" },
	{ name: "n8n", description: "Workflow automation", asset: "/assets/n8n.svg" },
];
