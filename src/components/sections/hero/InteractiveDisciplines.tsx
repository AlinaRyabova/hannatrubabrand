"use client";

import { useState, useEffect } from "react";
import { Dictionary } from "@/dictionaries";

interface InteractiveDisciplinesProps {
  disciplines: Dictionary["hero"]["disciplines"];
}

export function InteractiveDisciplines({
  disciplines,
}: InteractiveDisciplinesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    disciplines.first, // LANGUAGE.
    disciplines.second, // RESEARCH.
    disciplines.third, // BRAND.
  ];

  // Автоматична циклічна зміна акценту кожні 2.5 секунди
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div
      className="mt-8 flex flex-col items-start border-l-2 border-sage/40 pl-4 transition-all duration-300 sm:mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-serif text-lg font-semibold tracking-wider sm:text-2xl">
        {items.map((word, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={word}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-300 focus:outline-hidden ${
                isActive
                  ? "scale-105 text-espresso drop-shadow-xs"
                  : "text-espresso/35 hover:text-espresso/70"
              }`}
            >
              {word}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 font-sans text-xs font-medium tracking-widest uppercase text-sage sm:text-sm">
        {disciplines.tagline}
      </p>
    </div>
  );
}