import React from "react";
import MagicBento, { BentoCardProps } from "@/components/MagicBento";

const services: BentoCardProps[] = [
	{
		label: "Agentic AI",
		title: "Agentic AI & Multi-Agent Systems",
		description:
			"Designing autonomous multi-agent systems with Microsoft AutoGen & LLMs — intelligent data profiling, autonomous reasoning, structured tool execution, and Socratic learning workflows.",
	},
	{
		label: "Vision & DL",
		title: "Computer Vision & Deep Learning",
		description:
			"Custom neural network pipelines using PyTorch, YOLOv8, and ConvNeXt — fine-tuned object detection, multi-label medical diagnosis, and edge AI hardware deployment.",
	},
	{
		label: "MLOps",
		title: "MLOps & GPU Diagnostics",
		description:
			"Telemetry tools for ML training loops, real-time GPU VRAM leak detection via NVIDIA NVML, experiment tracking with MLflow, and automated CI/CD for model delivery.",
	},
	{
		label: "Full Stack",
		title: "Full-Stack Web Engineering",
		description:
			"High-performance web applications with Next.js, React, Node, and TypeScript — combining modern design-forward interfaces with robust, scalable architectures.",
	},
	{
		label: "APIs & Cloud",
		title: "High-Performance APIs & Inference Endpoints",
		description:
			"Fast, asynchronous backends built with FastAPI and Express — secure authentication, database modeling, and low-latency model inference microservices.",
	},
	{
		label: "Data Systems",
		title: "Data Warehousing & Intelligent Automation",
		description:
			"Cloud data architectures with Snowflake & PostgreSQL, automated data quality anomaly detection, custom ETL pipelines, and repetitive workflow automation.",
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
					SERVICES & EXPERTISE
				</p>
				<h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
					What I Can <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">Engineer</span>
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
