"use client";

import React from "react";
import { AUDIENCE_SECTIONS } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { ArrowRight, Landmark, Building2, Ticket, Sparkles } from "lucide-react";

// Icon dictionary for target audiences
const iconMap = [
  Landmark,  // Fiere
  Building2, // Aziende
  Ticket,    // Club ed eventi nightlife
  Sparkles,  // Brand
];

export default function Audience() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-black px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[350px] h-[350px] bg-white/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <SectionReveal>
            <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              TARGET
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Per chi è pensato.
            </h2>
            <p className="text-white/60 text-sm md:text-base mt-4">
              Collaborazioni strategiche studiate per connettere persone, brand e palcoscenici differenti.
            </p>
          </SectionReveal>
        </div>

        {/* Target Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AUDIENCE_SECTIONS.map((section, idx) => {
            const IconComponent = iconMap[idx] || Sparkles;
            
            return (
              <SectionReveal key={section.title} delay={idx * 0.08} yOffset={25}>
                <div className="glass glass-hover p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between group transition-all duration-300">
                  
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/5 text-white/70 p-3.5 rounded-2xl group-hover:bg-brand-yellow/10 group-hover:text-brand-yellow transition-all duration-300 border border-white/5 group-hover:border-brand-yellow/20">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-white text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-brand-yellow transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                      {section.description}
                    </p>
                  </div>

                  {/* Action link */}
                  <a
                    href="#contatti"
                    className="inline-flex items-center gap-2 text-brand-yellow font-bold text-xs md:text-sm uppercase tracking-widest group/link mt-auto w-fit"
                  >
                    <span>Parliamone</span>
                    <ArrowRight
                      size={14}
                      className="transform group-hover/link:translate-x-1.5 transition-transform duration-200"
                    />
                  </a>

                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
