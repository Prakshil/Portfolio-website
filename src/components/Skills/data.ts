export type Skill = {
	name: string;
	/** Icon id for https://skillicons.dev */
	icon?: string;

	asset?: string;
};

export const skills: Skill[] = [
	{ name: "Python", icon: "python" },
	{ name: "JavaScript", icon: "javascript" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "C", icon: "c" },
	{ name: "C++", icon: "cpp" },
	{ name: "SQL", icon: "mysql" },
	{ name: "React.js", icon: "react" },
	{ name: "Next.js", icon: "nextjs" },
	{ name: "HTML5", icon: "html" },
	{ name: "CSS3", icon: "css" },
	{ name: "Tailwind CSS", icon: "tailwind" },
	{ name: "FastAPI", icon: "fastapi" },
	{ name: "Node.js", icon: "nodejs" },
	{ name: "Express.js", icon: "express" },
	{ name: "Flask", icon: "flask" },
	{ name: "REST APIs", icon: "postman" },
	{ name: "Scikit-learn", icon: "sklearn" },
	{ name: "NumPy", asset: "/assets/NumPy.svg" },
	{ name: "Pandas", asset: "/assets/Pandas.svg" },
	{ name: "PostgreSQL", icon: "postgres" },
	{ name: "Supabase", icon: "supabase" },
	{ name: "Git", icon: "git" },
	{ name: "GitHub", icon: "github" },
	{ name: "Docker", icon: "docker" },
	{ name: "Figma", icon: "figma" },
	{ name: "Google Colab", icon: "gcp" },
	{ name: "Vercel", icon: "vercel" },
	{ name: "Netlify", icon: "netlify" },
	{ name: "Linux", icon: "linux" },
	{ name: "Visual Studio Code", icon: "vscode" },
	{ name: "Wordpress", icon: "wordpress" },
	{ name: "n8n", asset: "/assets/n8n.svg" },
];
