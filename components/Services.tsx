"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { Mic, Sparkles, Video, TrendingUp, ArrowRight } from "lucide-react";

// Icon lookup dictionary
const iconMap = {
  Mic: Mic,
  Sparkles: Sparkles,
  Video: Video,
  TrendingUp: TrendingUp,
};

export default function Services() {
  return (
    <section id="servizi" className="relative py-24 md:py-32 bg-brand-black px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-white/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <SectionReveal>
            <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              SERVIZI
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Cosa posso fare per il tuo evento o brand.
            </h2>
            <p className="text-white/60 text-sm md:text-base mt-4">
              {"Soluzioni su misura studiate per catturare il pubblico offline e amplificare l'impatto online."}
            </p>
          </SectionReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Mic;
            
            return (
              <SectionReveal key={service.id} delay={idx * 0.1} yOffset={30}>
                <div className="glass glass-hover p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between group relative overflow-hidden transition-all duration-300">
                  
                  {/* Glowing background card element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:bg-brand-yellow/15 transition-all duration-500" />
                  
                  <div>
                    {/* Icon container */}
                    <div className="bg-brand-yellow/10 p-4 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-brand-yellow group-hover:text-brand-black text-brand-yellow">
                      <IconComponent size={24} />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Interactive footer tag */}
                  <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm font-semibold tracking-wide mt-auto group-hover:text-brand-yellow transition-colors duration-300">
                    <span>Parliamone</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>

                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
