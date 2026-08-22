"use client";

import { useState, useEffect } from "react";
import { Dictionary } from "@/dictionaries";

interface InteractiveDisciplinesProps {
  concept: Dictionary["hero"]["concept"];
}

export function InteractiveDisciplines({
  concept,
}: InteractiveDisciplinesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    concept.language,
    concept.research,
    concept.brand,
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div
      className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((word, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={word} className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer font-sans text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 sm:text-sm focus:outline-hidden ${
                isActive
                  ? "scale-105 text-[#304832] underline underline-offset-4 decoration-[#D4B58A]"
                  : "text-[#5A3828]/40 hover:text-[#5A3828]"
              }`}
            >
              {word}
            </button>
            {index < items.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-[#D4B58A]" />
            )}
          </div>
        );
      })}
    </div>
  );
}