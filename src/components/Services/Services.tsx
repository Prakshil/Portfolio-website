import React from "react";
import MagicBento, { BentoCardProps } from "@/components/MagicBento";

const services: BentoCardProps[] = [

	{
		label: "MERN",
		title: "MERN Stack Development",
		description:
			"End-to-end MERN builds for startups, dashboards, and admin panels — secure APIs, smooth UX, and production-ready structure.",
	},
	{
		label: "APIs",
		title: "Backend & API Development",
		description:
			"Robust REST APIs and microservices with FastAPI/Fastify/Express — auth, roles, databases, and third‑party integrations.",
	},
	{
		label: "AI",
		title: "AI-Powered Applications",
		description:
			"AI features inside your product using ML + modern AI APIs  — chat, automation, recommendations, and smart workflows.",
	},
	{
		label: "Automation",
		title: "Workflow Automation",
		description:
			"Automating repetitive tasks and business workflows using APIs, backend logic, and AI. Automating Day to Day tasks to help reduce manual work and improve efficiency.",
	},
	{
		label: "Database",
		title: "Database Design & Optimization",
		description:
			"Efficient schemas + performance tuning with Postgres/Neon and modern ORMs (Drizzle/Prisma) for consistency and scale.",
	},
	{
		label: "Frontend",
		title: "UI Integration & Frontend Optimization",
		description:
			"Pixel-perfect, responsive UI with Tailwind — optimized for performance, SEO, and accessibility.",
	},


];

export default function Services() {
	return (
		<section
			id="services"
			data-reveal
			className="min-h-screen text-white px-6 py-24 bg-black"
		>
			<div className="container mx-auto max-w-6xl">
				<p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
					SERVICES
				</p>
				<h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
					What I Can <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">Build</span>
				</h2>

				<div className="mt-14 flex justify-center">
					<MagicBento
						cards={services}
						textAutoHide={false}
						enableHoverGradient
						enableStars
						enableSpotlight
						enableBorderGlow
						enableMagnetism
						clickEffect
					/>
				</div>
			</div>
		</section>
	);
}
