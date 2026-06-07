"use client";

import React, { useEffect, useRef } from "react";
import { STATS } from "@/lib/constants";
import { useInView } from "framer-motion";
import SectionReveal from "./SectionReveal";

// Animated counter sub-component
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const start = 0;
      const end = value;
      const duration = 2000; // Animation duration in milliseconds
      const startTime = performance.now();

      const animateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(start + (end - start) * easeProgress);
        
        if (ref.current) {
          if (end >= 1000000) {
            ref.current.textContent = (currentValue / 1000000).toFixed(0) + "M";
          } else {
            ref.current.textContent = currentValue.toLocaleString("it-IT");
          }
        }

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          if (ref.current) {
            if (end >= 1000000) {
              ref.current.textContent = (end / 1000000).toFixed(0) + "M";
            } else {
              ref.current.textContent = end.toLocaleString("it-IT");
            }
          }
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [inView, value]);

  return (
    <span className="flex items-baseline justify-center">
      <span ref={ref} className="text-brand-yellow font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter">
        0
      </span>
      <span className="text-brand-yellow font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter ml-1">
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-black px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Dynamic ambient highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-yellow/5 rounded-full blur-[80px] md:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <SectionReveal>
            <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              I NUMERI
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {"I numeri contano. Ma conta soprattutto l'attenzione."}
            </h2>
            <p className="text-white/60 text-sm md:text-base mt-4">
              Risultati concreti nati dalla combinazione di format virali, conduzione professionale e connessione col pubblico.
            </p>
          </SectionReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <SectionReveal key={idx} delay={idx * 0.08} yOffset={30}>
              <div className="glass p-8 rounded-3xl flex flex-col justify-between items-center text-center h-full hover:border-brand-yellow/30 hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden">
                {/* Visual accent top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-brand-yellow transition-all duration-300" />
                
                {/* Counter */}
                <div className="mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wide leading-relaxed max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
