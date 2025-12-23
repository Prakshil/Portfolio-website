"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Github } from "lucide-react";
import {
  awwwardsProjects,
  featuredProjects,
  moreProjects,
  type Project,
  type ProjectTech,
} from "./data";

function isNonEmpty(value?: string) {
  return typeof value === "string" && value.trim().length > 0;
}

function TechBadge({ tech }: { tech: ProjectTech }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/50 px-3 py-1 text-xs text-gray-200">
      {tech.icon ? (
        <img
          src={`https://skillicons.dev/icons?i=${tech.icon}&theme=dark`}
          alt={tech.name}
          loading="lazy"
          className="h-4 w-4"
        />
      ) : null}
      <span>{tech.name}</span>
    </span>
  );
}

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const hasLive = isNonEmpty(project.liveUrl);
  const hasImage = isNonEmpty(project.imageSrc);
  const hasGithub = isNonEmpty(project.githubUrl);
  const hasSummary = isNonEmpty(project.summary);

  const ImageWrapper: React.ElementType = hasLive ? "a" : "div";
  const imageWrapperProps = hasLive
    ? {
        href: project.liveUrl,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <div
      className={`grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ImageWrapper
        {...imageWrapperProps}
        className="group relative block overflow-hidden rounded-xl border border-white/10 bg-neutral-950/40"
      >
        {hasImage ? (
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.imageSrc as string}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.01]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center px-6 text-center text-sm text-gray-400">
            Add image for {project.name}
          </div>
        )}
      </ImageWrapper>

      <div>
        <p className="text-xs tracking-[0.35em] text-gray-400">PROJECT</p>
        <h3 className="mt-4 text-3xl md:text-4xl font-light">
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            {project.name}
          </span>
        </h3>

        <p className="mt-4 text-sm md:text-base leading-7 text-gray-300">
          {hasSummary ? project.summary : "Description coming soon."}
        </p>

        {project.tech && project.tech.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge key={`${project.slug}-${tech.name}`} tech={tech} />
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex items-center gap-3">
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-2 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
            >
              <Github size={18} />
              GitHub
            </a>
          ) : null}

          {hasLive ? (
            <span className="text-sm text-gray-400">
              Click the image to view live
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(
    () => (showAll ? [...featuredProjects, ...moreProjects] : featuredProjects),
    [showAll]
  );

  return (
    <section id="projects" data-reveal className="min-h-screen text-white px-6 py-24 bg-black">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
          PROJECTS
        </p>
        <h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
          Featured{" "}
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            Work
          </span>
        </h2>

        <div className="mt-14 space-y-16 md:space-y-24">
          {visibleProjects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full border border-white/10 bg-neutral-900/50 px-6 py-3 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
          >
            {showAll ? "Show less" : "See all projects"}
          </button>
        </div>

        <div className="mt-24">
          <p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
            AWWWARDS DESIGNS
          </p>
          <h3 className="mt-4 text-center text-3xl md:text-5xl font-light text-white">
            Design-forward{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
              Builds
            </span>
          </h3>

          <div className="mt-14 space-y-16 md:space-y-24">
            {awwwardsProjects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
