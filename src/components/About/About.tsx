import React from "react";

export default function About() {
  return (
    <section id="about" data-reveal className="min-h-screen text-white px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-400">
          A BIT{" "}
          <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
            ABOUT ME
          </span>
        </h2>

        <div className="mt-12 space-y-8">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-200">
            I&apos;m{" "}
            <span className="font-normal text-white">Prakshil Patel</span> — a{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
              Full-Stack Developer
            </span>{" "}
            and{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-orange-500">
              AI/ML Engineer
            </span>
            , currently pursuing a B.Tech in ICT at Adani University.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-white/70 max-w-4xl">
            I build scalable, user-focused applications by combining clean frontend design with powerful backend and machine learning systems.
            My work spans full-stack web platforms, computer vision models, agentic data quality pipelines, and lightweight GPU monitoring infrastructure — engineered with a passion for high performance, modular code, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
