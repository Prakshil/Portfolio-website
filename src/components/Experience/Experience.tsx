"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Sparkles,
  Zap,
  Cpu,
} from "lucide-react";
import { experiences, type ExperienceItem } from "./data";

function getSkillIcon(tech: string): string | null {
  const lower = tech.toLowerCase();
  if (lower.includes("python")) return "python";
  if (lower.includes("pytorch")) return "pytorch";
  if (lower.includes("react")) return "react";
  if (lower.includes("node")) return "nodejs";
  if (lower.includes("express")) return "express";
  if (lower.includes("postgres")) return "postgres";
  if (lower.includes("mongo")) return "mongodb";
  if (lower.includes("aws")) return "aws";
  if (lower.includes("tailwind")) return "tailwind";
  if (lower.includes("numpy")) return null;
  return null;
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const isResearch = item.isSpecialResearch;

  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 transition-colors duration-200 ${
        isResearch
          ? "border-fuchsia-500/30 bg-linear-to-b from-neutral-950/90 via-neutral-900/40 to-neutral-950/90 shadow-[0_0_40px_rgba(217,70,239,0.06)]"
          : "border-white/10 bg-neutral-950/40 hover:border-white/20"
      }`}
    >
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {item.company}
            </h3>
            {item.badge && (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium ${
                  isResearch
                    ? "border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300"
                    : "border border-white/15 bg-white/5 text-gray-300"
                }`}
              >
                {isResearch && <Sparkles className="h-3 w-3 text-fuchsia-400" />}
                {item.badge}
              </span>
            )}
          </div>

          <h4 className="mt-1 text-lg md:text-xl font-light">
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
              {item.role}
            </span>
          </h4>
        </div>

        <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-gray-400 font-mono">
          <div className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>{item.period}</span>
          </div>
          {item.location && (
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-orange-400" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Special Highlights for IIT Kanpur */}
      {item.keyCallouts && item.keyCallouts.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.keyCallouts.map((callout, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-neutral-900/50 p-4 transition-colors hover:border-fuchsia-500/30"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-fuchsia-300">
                  {idx === 0 ? (
                    <Zap className="h-3.5 w-3.5 text-fuchsia-400" />
                  ) : (
                    <Cpu className="h-3.5 w-3.5 text-orange-400" />
                  )}
                  {callout.badgeText}
                </span>
              </div>
              <h5 className="text-sm font-medium text-white">{callout.title}</h5>
              <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                {callout.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Bullets List */}
      <div className="mt-6 space-y-3.5">
        {item.bullets.map((bullet, bIdx) => {
          if (bullet.link) {
            // Render text with clickable link for Dr. Nitin Saxena
            const parts = bullet.text.split(bullet.link.text);
            return (
              <div key={bIdx} className="flex items-start gap-3 text-sm md:text-base leading-7 text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                <p>
                  {parts[0]}
                  <a
                    href={bullet.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-orange-400 underline decoration-fuchsia-500/40 underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {bullet.link.text}
                    <ExternalLink className="inline h-3.5 w-3.5 text-orange-400" />
                  </a>
                  {parts[1]}
                </p>
              </div>
            );
          }

          return (
            <div key={bIdx} className="flex items-start gap-3 text-sm md:text-base leading-7 text-gray-300">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shrink-0" />
              <p>
                {bullet.text}
                {bullet.tag && (
                  <span className="ml-2 inline-flex items-center rounded-md border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-xs font-mono font-medium text-fuchsia-300">
                    {bullet.tag}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-mono mr-1">
          Skills:
        </span>
        {item.techStack.map((tech) => {
          const icon = getSkillIcon(tech);
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-900/50 px-3 py-1 text-xs text-gray-300"
            >
              {icon ? (
                <img
                  src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                  alt={tech}
                  loading="lazy"
                  className="h-3.5 w-3.5"
                />
              ) : null}
              <span>{tech}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" data-reveal className="min-h-screen text-white px-6 py-24 bg-black">
      <div className="container mx-auto max-w-5xl">
        <p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
          EXPERIENCE
        </p>
        <h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
          Work &{" "}
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            Research
          </span>
        </h2>
        <p className="mt-4 text-center text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          From production engineering at scale to solving NP-hard computational challenges and frontier algebraic research.
        </p>

        <div className="mt-14 space-y-8 md:space-y-10">
          {experiences.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

