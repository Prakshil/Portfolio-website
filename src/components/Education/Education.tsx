import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-base md:text-lg font-semibold text-gray-100">
            Higher Secondary Education — Terf School
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            Percentage: 88.01%
          </p>
        </div>
      ),
    },
    {
      title: "2023–2027",
      content: (
        <div className="mt-2">
          <h4 className="text-base md:text-lg font-semibold text-gray-100">
            Adani University, Ahmedabad, Gujarat, India
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            B.Tech in Information and Communication Technology
          </p>
          <p className="mt-2 text-sm text-gray-400">
            CGPA: 8.66/10.0
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Focused on core engineering fundamentals, problem-solving, and
            project-based learning in technology and communication systems.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section
      id="education"
      data-reveal
      data-reveal-margin="0px 0px 20% 0px"
      data-reveal-threshold="0.04"
      className="min-h-screen text-white px-6 py-24 bg-black"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-xl md:text-2xl font-light tracking-wider mb-12 text-gray-400">
          EDUCATION
        </h2>
        <Timeline
          showHeader={false}
          variant="dark"
          className="bg-transparent md:px-0"
          maxWidthClassName="max-w-5xl"
          data={data}
        />
      </div>
    </section>
  );
}
