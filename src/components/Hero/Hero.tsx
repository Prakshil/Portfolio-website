"use client";
import React, { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      data-reveal
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1647323968696-0ea09525407c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHBsYW5ldCUyMGhvcml6b258ZW58MHx8fGJsYWNrfDE3NjY0OTQyNDd8MA&ixlib=rb-4.1.0&q=85)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-purple-600 to-blue-600" />
            Full-Stack Developer • AI/ML Enthusiast
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
            Prakshil Patel
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            I build scalable, user-focused web apps and intelligent, data-driven features from polished UI to robust APIs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-linear-to-r from-fuchsia-500 to-orange-500 text-white text-lg px-4 py-2 rounded-full group flex items-center gap-2 transition-all"
          >
            Let&apos;s Connect
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </a>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={20} />
            <span>prakshilmpatel@gmail.com</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
