import React from "react";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" data-reveal className="min-h-screen text-white px-6 py-24 bg-black">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-xs md:text-sm tracking-[0.35em] text-gray-400">
          MY SKILLS
        </p>
        <h2 className="mt-4 text-center text-4xl md:text-6xl font-light text-white">
          The Secret{" "}
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            Sauce
          </span>
        </h2>

        <div className="mt-14 flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-5">
            {skills.map((skill) => (
              <div key={skill.name} className="relative group">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-white/20">
                  <img
                    src={
                      skill.asset ??
                      `https://skillicons.dev/icons?i=${skill.icon}&theme=dark`
                    }
                    alt={skill.name}
                    loading="lazy"
                    className="h-9 w-9 md:h-10 md:w-10 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
                  />
                </div>

                <div className="pointer-events-none absolute left-1/2 -top-2 z-30 w-56 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+0.5rem)]">
                  <div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur-md px-3 py-2 shadow-lg">
                    <div className="text-sm font-medium text-white">
                      {skill.name}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-gray-300">
                      {skill.description ?? "Used across my projects."}
                    </div>
                  </div>
                  <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-r border-b border-white/10 bg-black/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
