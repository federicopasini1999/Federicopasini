"use client";

import React from "react";
import { CTA_FINAL, SOCIAL_LINKS } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { Mail, ArrowRight } from "lucide-react";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function FinalCTA() {
  return (
    <section id="contatti" className="relative py-28 md:py-36 bg-brand-black px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Intense background glow at the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Eyebrow */}
        <SectionReveal>
          <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            CONTATTI
          </span>
        </SectionReveal>

        {/* Title */}
        <SectionReveal delay={0.1}>
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto text-balance">
            {CTA_FINAL.title}
          </h2>
        </SectionReveal>

        {/* Subtitle */}
        <SectionReveal delay={0.2}>
          <p className="text-white/60 text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed mb-12 text-balance">
            {CTA_FINAL.subtitle}
          </p>
        </SectionReveal>

        {/* Action buttons */}
        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            
            {/* Primary CTA (Email) */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-black font-extrabold text-base px-8 py-4.5 rounded-full tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(255,204,0,0.25)] flex items-center justify-center gap-2.5 group"
            >
              <Mail size={20} />
              <span>{CTA_FINAL.primaryCta}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA (Instagram) */}
            <a
              href={SOCIAL_LINKS.instagramPersonal}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-extrabold text-base px-8 py-4.5 rounded-full tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <InstagramIcon size={20} />
              <span>{CTA_FINAL.secondaryCta}</span>
            </a>

          </div>
        </SectionReveal>

        {/* Grid reference contact blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10 text-left max-w-3xl mx-auto">
          
          <SectionReveal delay={0.4} yOffset={10}>
            <div className="glass p-5 rounded-2xl flex flex-col justify-between h-full hover:border-brand-yellow/30 transition-colors duration-300">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider block mb-2">
                Invia una E-mail
              </span>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-white hover:text-brand-yellow text-sm font-semibold tracking-wide transition-colors duration-200 truncate"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.45} yOffset={10}>
            <div className="glass p-5 rounded-2xl flex flex-col justify-between h-full hover:border-brand-yellow/30 transition-colors duration-300">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider block mb-2">
                DM Personale
              </span>
              <a
                href={SOCIAL_LINKS.instagramPersonal}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-brand-yellow text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                @pasini.io
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.5} yOffset={10}>
            <div className="glass p-5 rounded-2xl flex flex-col justify-between h-full hover:border-brand-yellow/30 transition-colors duration-300">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider block mb-2">
                DM Format POV
              </span>
              <a
                href={SOCIAL_LINKS.instagramPOV}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-brand-yellow text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                @pov.interviste
              </a>
            </div>
          </SectionReveal>

        </div>

      </div>
    </section>
  );
}
