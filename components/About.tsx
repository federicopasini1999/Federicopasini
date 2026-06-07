"use client";

import React from "react";
import Image from "next/image";
import { ABOUT_CONTENT } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { Mic, Sparkles, Video } from "lucide-react";

const iconMap = {
  Presentazione: Mic,
  Intrattenimento: Sparkles,
  Contenuto: Video,
};

export default function About() {
  return (
    <section id="chi-sono" className="relative py-24 md:py-32 bg-brand-black overflow-hidden px-6 md:px-12 border-t border-white/5">
      {/* Decorative background glows */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-brand-yellow/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-white/3 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionReveal>
              <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
                CHI SONO
              </span>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {ABOUT_CONTENT.title}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                {ABOUT_CONTENT.description}
              </p>
            </SectionReveal>

            {/* Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ABOUT_CONTENT.pillars.map((pillar, idx) => {
                // Determine icon based on title
                const IconComponent = iconMap[pillar.title as keyof typeof iconMap] || Mic;

                return (
                  <SectionReveal key={pillar.title} delay={idx * 0.1} yOffset={20}>
                    <div className="glass glass-hover p-6 rounded-2xl h-full flex flex-col items-start group">
                      <div className="bg-brand-yellow/10 p-3 rounded-xl mb-4 group-hover:bg-brand-yellow/20 transition-colors duration-300">
                        <IconComponent className="text-brand-yellow" size={20} />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <SectionReveal delay={0.2} className="w-full max-w-[450px]">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
                
                <Image
                  src="/images/federico_about.webp"
                  alt="Federico Pasini Presentatore in Azione"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  className="object-cover object-center transition-transform duration-750 group-hover:scale-105"
                />

                {/* Micro info tag */}
                <div className="absolute top-6 right-6 z-20 bg-brand-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[10px] text-brand-yellow font-bold uppercase tracking-widest">
                    Live Presenter
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
