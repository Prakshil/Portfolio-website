"use client";

import React from "react";
import { Github, Clock, CheckCircle2, Terminal } from "lucide-react";
import { aiProjects, type AiProject } from "./data";

function getSkillIcon(tech: string): string | null {
  const lower = tech.toLowerCase();
  if (lower.includes("python")) return "python";
  if (lower.includes("pytorch")) return "pytorch";
  if (lower.includes("opencv")) return "opencv";
  if (lower.includes("scikit-learn")) return "sklearn";
  if (lower.includes("pandas")) return "pandas";
  if (lower.includes("streamlit")) return "streamlit";
  if (lower.includes("arduino")) return "arduino";
  if (lower.includes("github actions")) return "githubactions";
  return null;
}

function AiProjectCard({ project }: { project: AiProject }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-6 md:p-8 transition-colors duration-200 hover:border-white/20">
      <div>
        <p className="text-xs tracking-[0.35em] text-gray-400">AI / ML PROJECT</p>

        {/* Project Title with the gradient text */}
        <h4 className="mt-3 text-2xl md:text-4xl font-light">
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            {project.title}
          </span>
        </h4>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base leading-7 text-gray-300">
          {project.description}
        </p>

        {/* Key Highlights (if any) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900/40 p-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
              <Terminal className="h-3.5 w-3.5" />
              Key Highlights
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, hIdx) => (
                <li
                  key={hIdx}
                  className="flex items-start gap-2 text-xs md:text-sm text-gray-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-fuchsia-400 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const icon = getSkillIcon(tech);
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-3 py-1 text-xs text-gray-200"
              >
                {icon ? (
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                    alt={tech}
                    loading="lazy"
                    className="h-4 w-4"
                  />
                ) : null}
                <span>{tech}</span>
              </span>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-8 flex items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-2 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
            >
              <Github size={18} />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-2 text-sm text-gray-400">
              <Clock size={16} />
              {project.repoStatusText ?? "Repository Publishing Soon"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AiProjectsSection() {
  return (
    <div id="ai-projects" className="mt-28 scroll-mt-24">
      {/* Catchy Section Header */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.35em] text-gray-400">
          INTELLIGENT SYSTEMS & RESEARCH
        </p>
        <h3 className="mt-4 text-3xl md:text-5xl font-light text-white">
          Beyond the Code:{" "}
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            The AI / ML Engineer
          </span>
        </h3>
        <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          You&apos;ve seen the software engineer craft responsive frontends and resilient backends — now welcome to the laboratory of the AI/ML engineer. Where convolutional backbones, multi-agent reasoning graphs, generative LLM pipelines, and edge hardware converge into real-world intelligence.
        </p>
      </div>

      {/* Projects Line-wise List */}
      <div className="mt-14 space-y-12 md:space-y-16">
        {aiProjects.map((project) => (
          <AiProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
