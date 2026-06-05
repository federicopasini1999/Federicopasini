"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { EXPERIENCE_CONTENT } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { Play, Pause, Sparkles, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure video is unmuted and volume is set before playing (required by browsers)
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play().catch((err) => {
          console.log("Auto-play blocked or error: ", err);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="esperienze" className="relative py-24 md:py-32 bg-brand-black px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionReveal>
            <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              ESPERIENZA LIVE
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {EXPERIENCE_CONTENT.title}
            </h2>
            <p className="text-brand-yellow font-medium text-sm md:text-base mt-2">
              {EXPERIENCE_CONTENT.subtitle}
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content and Event Photo */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="mb-8">
              <SectionReveal delay={0.05}>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                  {EXPERIENCE_CONTENT.description}
                </p>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="glass p-6 rounded-2xl border-l-4 border-brand-yellow flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-2.5 rounded-xl text-brand-yellow">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base mb-1">RiminiWellness Stage Host</h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                      {EXPERIENCE_CONTENT.highlight}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Event Photo Block */}
            <SectionReveal delay={0.15}>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden glass border border-white/10 group shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent z-10" />
                
                <Image
                  src={EXPERIENCE_CONTENT.photoSrc}
                  alt="RiminiWellness De Cecco High Protein Arena Stage"
                  fill
                  sizes="(max-w-768px) 100vw, 650px"
                  className="object-cover object-center transition-transform duration-750 group-hover:scale-103"
                />
                
                {/* Image info caption tag */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-brand-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-white/90">
                  <Sparkles size={12} className="text-brand-yellow" />
                  <span>DE CECCO HIGH PROTEIN ARENA STAGE</span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Smartphone Mockup with Playback invite */}
          <div className="lg:col-span-5 flex justify-center">
            <SectionReveal delay={0.2}>
              <div className="relative flex flex-col items-center">
                
                {/* Visual arrow indicator or label above the phone */}
                <div className="mb-4 text-center animate-bounce pointer-events-none">
                  <span className="text-[10px] bg-brand-yellow text-brand-black font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                    Guarda il video
                  </span>
                </div>

                {/* Smartphone Device Frame */}
                <div 
                  onClick={handlePlayToggle}
                  className="relative w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] rounded-[44px] border-[8px] border-zinc-800 bg-brand-black shadow-[0_30px_60px_rgba(0,0,0,0.7),_inset_0_4px_16px_rgba(255,255,255,0.1)] overflow-hidden group cursor-pointer select-none"
                >
                  {/* Speaker bar / notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-zinc-900 rounded-full z-30 border border-white/5" />

                  {/* Video Player */}
                  <video
                      ref={videoRef}
                      src={EXPERIENCE_CONTENT.videoSrc}
                      loop
                      muted
                      preload="metadata"
                      playsInline
                      className="w-full h-full object-cover"
                    />

                  {/* Overlay Dark layer when paused */}
                  <div className={`absolute inset-0 bg-black/45 z-10 transition-opacity duration-300 pointer-events-none ${
                    isPlaying ? "opacity-0" : "opacity-100"
                  }`} />

                  {/* Large Pulsing Play Button overlay (Invite to watch) */}
                  <AnimatePresence>
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-20"
                      >
                        {/* Pulse Ring */}
                        <div className="relative flex items-center justify-center">
                          <span className="absolute animate-ping inline-flex h-20 w-20 rounded-full bg-brand-yellow opacity-40"></span>
                          <button 
                            className="relative bg-brand-yellow text-brand-black p-5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200"
                            aria-label="Riproduci video"
                          >
                            <Play size={28} fill="currentColor" className="ml-1" />
                          </button>
                        </div>
                        <span className="text-[10px] text-white font-extrabold tracking-widest uppercase mt-4 text-center max-w-[150px] drop-shadow-md">
                          {"Guarda l'intervista a Elisabetta Canalis"}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Pause Button overlay on hover when playing */}
                  {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 z-20">
                      <div className="bg-brand-black/60 text-white p-4 rounded-full backdrop-blur-sm border border-white/10">
                        <Pause size={20} />
                      </div>
                    </div>
                  )}

                  {/* Floating Action Details at the bottom when playing */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none flex justify-between items-end text-white">
                    <div>
                      <p className="text-[10px] font-extrabold tracking-wide uppercase text-brand-yellow">Federico & Elisabetta</p>
                      <p className="text-[8px] font-medium text-white/70">RiminiWellness Stage Conduction</p>
                    </div>
                    <div className="bg-brand-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                      <Sparkles size={10} className="text-brand-yellow" />
                    </div>
                  </div>

                  {/* Progress Bar indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-20 pointer-events-none">
                    <div 
                      className="h-full bg-brand-yellow transition-all duration-300" 
                      style={{ width: isPlaying ? "100%" : "0%" }} 
                    />
                  </div>

                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
