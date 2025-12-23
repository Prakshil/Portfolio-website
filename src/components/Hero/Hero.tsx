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

      <div className="container mx-auto px-6 relative z-10 hero-content text-center">
    

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
          I help founders turn ideas
          <br />
          into seamless{" "}
          <span className="italic font-serif">digital experiences</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 text-xl md:text-2xl">
          <span>Hello, I'm</span>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-xl md:text-2xl text-white">
            PP
          </div>
          <span className="font-semibold">Prakshil Patel</span>
          <span>a Full Stack Developer</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full group flex items-center gap-2 transition-all"
          >
            Let's Connect
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
    </section>
  );
}
