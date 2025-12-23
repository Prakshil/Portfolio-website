"use client";
import {
} from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  heading,
  subheading,
  showHeader = true,
  variant = "light",
  className,
  maxWidthClassName = "max-w-7xl",
}: {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
  showHeader?: boolean;
  variant?: "light" | "dark";
  className?: string;
  maxWidthClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useLayoutEffect(() => {
    if (!containerRef.current || !progressRef.current || height <= 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 10%",
      end: "bottom 50%",
      scrub: true,
      onUpdate: (self) => {
        const nextHeight = height * self.progress;
        const nextOpacity = Math.min(1, self.progress / 0.1);
        gsap.set(progressRef.current, {
          height: nextHeight,
          opacity: nextOpacity,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [height]);

  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "w-full font-sans md:px-10",
        isDark ? "bg-black" : "bg-white",
        className,
      )}
      ref={containerRef}
    >
      {showHeader && (
        <div
          className={cn(
            maxWidthClassName,
            "mx-auto py-20 px-4 md:px-8 lg:px-10",
          )}
        >
          <h2
            className={cn(
              "text-lg md:text-4xl mb-4 max-w-4xl",
              isDark ? "text-white" : "text-black",
            )}
          >
            {heading ?? "Changelog from my journey"}
          </h2>
          <p
            className={cn(
              "text-sm md:text-base max-w-sm",
              isDark ? "text-neutral-300" : "text-neutral-700",
            )}
          >
            {subheading ??
              "I\u0027ve been working on Aceternity for the past 2 years. Here\u0027s a timeline of my journey."}
          </p>
        </div>
      )}

      <div
        ref={ref}
        className={cn("relative mx-auto pb-20", maxWidthClassName)}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={cn(
                  "h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center",
                  isDark ? "bg-black" : "bg-white",
                )}
              >
                <div
                  className={cn(
                    "h-4 w-4 rounded-full border p-2",
                    isDark
                      ? "bg-neutral-800 border-neutral-700"
                      : "bg-neutral-200 border-neutral-300",
                  )}
                />
              </div>
              <h3
                className={cn(
                  "hidden md:block text-xl md:pl-20 md:text-5xl font-bold",
                  isDark ? "text-neutral-400" : "text-neutral-500",
                )}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={cn(
                  "md:hidden block text-2xl mb-4 text-left font-bold",
                  isDark ? "text-neutral-400" : "text-neutral-500",
                )}
              >
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={cn(
            "absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
            isDark ? "via-neutral-700" : "via-neutral-200",
          )}
        >
          <div
            ref={progressRef}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
