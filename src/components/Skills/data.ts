export type Skill = {
	name: string;
	description?: string;
	/** Icon id for https://skillicons.dev */
	icon?: string;

	asset?: string;
};

export const skills: Skill[] = [
	{ name: "Python", description: "Automation, backend, data tooling", icon: "python" },
	{ name: "JavaScript", description: "Frontend + backend development", icon: "javascript" },
	{ name: "TypeScript", description: "Type-safe React/Node codebases", icon: "typescript" },
	{ name: "C", description: "Core programming + fundamentals", icon: "c" },
	{ name: "C++", description: "DSA and performance-oriented code", icon: "cpp" },
	{ name: "SQL", description: "Queries, joins, and data modeling", icon: "mysql" },
	{ name: "React.js", description: "Component-driven UIs", icon: "react" },
	{ name: "Next.js", description: "Full-stack React framework", icon: "nextjs" },
	{ name: "HTML5", description: "Semantic structure", icon: "html" },
	{ name: "CSS3", description: "Layout and responsive styling", icon: "css" },
	{ name: "Tailwind CSS", description: "Utility-first styling", icon: "tailwind" },
	{ name: "FastAPI", description: "High-performance Python APIs", icon: "fastapi" },
	{ name: "Node.js", description: "Server-side JavaScript runtime", icon: "nodejs" },
	{ name: "Express.js", description: "REST APIs and middleware", icon: "express" },
	{ name: "Flask", description: "Lightweight Python services", icon: "flask" },
	{ name: "REST APIs", description: "Design, auth, integrations", icon: "postman" },
	{ name: "Scikit-learn", description: "Classical ML workflows", icon: "sklearn" },
	{ name: "NumPy", description: "Numerical computing", asset: "/assets/NumPy.svg" },
	{ name: "Pandas", description: "Data analysis and ETL", asset: "/assets/Pandas.svg" },
	{ name: "PostgreSQL", description: "Relational database + indexing", icon: "postgres" },
	{ name: "Supabase", description: "DB + auth + storage", icon: "supabase" },
	{ name: "Git", description: "Version control workflows", icon: "git" },
	{ name: "GitHub", description: "Collaboration + CI basics", icon: "github" },
	{ name: "Docker", description: "Containerized development", icon: "docker" },
	{ name: "Figma", description: "UI handoff and prototyping", icon: "figma" },
	{ name: "Google Colab", description: "Notebooks for experiments", icon: "gcp" },
	{ name: "Vercel", description: "Next.js deployments", icon: "vercel" },
	{ name: "Netlify", description: "Static and JAMStack deploys", icon: "netlify" },
	{ name: "Linux", description: "CLI and servers", icon: "linux" },
	{ name: "Visual Studio Code", description: "Daily dev environment", icon: "vscode" },
	{ name: "Wordpress", description: "CMS + site building", icon: "wordpress" },
	{ name: "n8n", description: "Workflow automation", asset: "/assets/n8n.svg" },
];
