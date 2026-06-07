"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_CONTENT } from "@/lib/constants";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-start lg:items-center justify-center bg-brand-black overflow-hidden pt-32 sm:pt-36 lg:pt-28 pb-20 px-6 md:px-12">
      {/* Background looping video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-brand-black/55 z-10" />
        <video
          src="/videos/hero_loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-50 z-0"
        />
      </div>

      {/* Decorative ambient glowing circles */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[75px] md:blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
            </span>
            <span className="text-white/80 text-xs md:text-sm font-semibold tracking-wide">
              {HERO_CONTENT.socialProof}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            {HERO_CONTENT.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance"
          >
            Porto energia, contenuto e attenzione{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow">
              dove succede qualcosa.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-base md:text-lg lg:text-xl font-medium max-w-xl leading-relaxed mb-8 text-balance"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* Actions buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#contatti"
              className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-black font-bold text-base px-8 py-4 rounded-full tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,204,0,0.2)] flex items-center justify-center gap-2 group"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="#pov-interviste"
              className="border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold text-base px-8 py-4 rounded-full tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play size={16} fill="white" className="text-white" />
              {HERO_CONTENT.ctaSecondary}
            </a>
          </motion.div>

        </div>

        {/* Right Column: Visual/Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Elegant overlay gradient to fit text and background seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80 z-10 transition-opacity duration-300 group-hover:opacity-60" />
            <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
            
            {/* The premium generated image */}
            <Image
              src="/images/federico_hero.webp"
              alt="Federico Pasini Presentatore"
              fill
              sizes="(max-w-768px) 100vw, 400px"
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Info Card on image */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
              <div>
                <p className="text-white font-extrabold text-lg tracking-tight">Federico Pasini</p>
                <p className="text-brand-yellow text-xs font-semibold tracking-wider uppercase">Presentatore & Creator</p>
              </div>
              <div className="bg-brand-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest">Live & Digital</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-2 bg-brand-yellow rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
