"use client";

import React from "react";
import Image from "next/image";
import { POV_CONTENT, POV_PROFILE, SOCIAL_LINKS } from "@/lib/constants";
import SectionReveal from "./SectionReveal";
import { Play, ArrowUpRight, Mail } from "lucide-react";

// Inline Instagram glyph
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.5 3c.3 2.2 1.5 3.8 3.5 4.2v2.6c-1.3.1-2.5-.2-3.6-.8v5.9c0 3.4-2.8 6.1-6.2 5.8a5.8 5.8 0 1 1 1.6-11.4v2.8a3 3 0 1 0 2 2.8V3h2.7z" />
  </svg>
);

export default function POVSection() {
  // Duplicate the words so the ribbon scrolls seamlessly.
  const marqueeItems = [...POV_CONTENT.marqueeWords, ...POV_CONTENT.marqueeWords, ...POV_CONTENT.marqueeWords, ...POV_CONTENT.marqueeWords];

  return (
    <section id="pov-interviste" className="relative bg-brand-black pt-20 pb-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 right-[-10%] w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-[65px] md:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />

      {/* Infinite marquee ribbon */}
      <div className="w-full bg-brand-yellow text-brand-black py-4 mb-20 overflow-hidden relative select-none -rotate-1 scale-[1.02] border-y-2 border-white shadow-[0_10px_30px_rgba(255,204,0,0.15)] z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeItems.map((word, index) => (
            <span key={index} className="text-sm md:text-lg font-black tracking-widest mx-6 flex items-center gap-2">
              <span>{word}</span>
              <span className="h-2 w-2 rounded-full bg-brand-black inline-block" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column: logo + text + stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionReveal>
              {/* POV Interviste logo */}
              <div className="relative h-16 w-44 md:h-20 md:w-56 mb-6">
                <Image
                  src="/images/logo-pov.webp"
                  alt="POV Interviste"
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {POV_CONTENT.title}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                {POV_CONTENT.subtitle}
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {POV_CONTENT.stats.map((stat, idx) => (
                <SectionReveal key={stat.label} delay={idx * 0.05} yOffset={20}>
                  <div className="glass p-5 rounded-2xl flex flex-col items-start hover:border-brand-yellow/30 transition-all duration-300 h-full">
                    <span className="text-brand-yellow text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-xs md:text-sm font-medium">
                      {stat.label}
                    </span>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SOCIAL_LINKS.instagramPOV}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-black font-bold text-base px-8 py-4 rounded-full tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,204,0,0.2)] flex items-center justify-center gap-2"
                >
                  <InstagramIcon size={18} />
                  {POV_CONTENT.cta}
                </a>
                <a
                  href={SOCIAL_LINKS.tiktokPOV}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold text-base px-8 py-4 rounded-full tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <TikTokIcon size={18} />
                  Segui su TikTok
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Right column: Instagram profile preview */}
          <div className="lg:col-span-5 flex justify-center">
            <SectionReveal delay={0.2} className="w-full max-w-[400px]">
              <div className="glass rounded-[28px] border border-white/10 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                {/* Profile header */}
                <div className="p-6">
                  <div className="flex items-center gap-5">
                    {/* Avatar = logo with Instagram-style gradient ring */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_215deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75)]" />
                      <div className="relative h-[72px] w-[72px] rounded-full bg-brand-black border-2 border-brand-black flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/logo-pov.webp"
                          alt="POV Interviste"
                          width={60}
                          height={60}
                          className="object-contain p-1"
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex-1 grid grid-cols-2 gap-2 text-center">
                      {POV_PROFILE.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-white font-bold text-lg leading-tight">{s.value}</p>
                          <p className="text-white/50 text-[11px]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Username + bio */}
                  <div className="mt-4">
                    <p className="text-white font-bold text-sm">{POV_PROFILE.displayName}</p>
                    <p className="text-white/50 text-xs mb-2">@{POV_PROFILE.handle}</p>
                    {POV_PROFILE.bioLines.map((line) => (
                      <p key={line} className="text-white/70 text-xs leading-relaxed">{line}</p>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <a
                      href={SOCIAL_LINKS.instagramPOV}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-brand-yellow hover:bg-white text-brand-black text-center text-sm font-bold py-2 rounded-lg transition-colors duration-300"
                    >
                      Segui
                    </a>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="flex-1 bg-white/8 hover:bg-white/15 text-white text-center text-sm font-bold py-2 rounded-lg border border-white/10 transition-colors duration-300"
                    >
                      Messaggio
                    </a>
                    <a
                      href={SOCIAL_LINKS.email ? `mailto:${SOCIAL_LINKS.email}` : "#"}
                      className="bg-white/8 hover:bg-white/15 text-white p-2 rounded-lg border border-white/10 transition-colors duration-300"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Reel grid */}
                <div className="grid grid-cols-3 gap-px bg-white/5 border-t border-white/5">
                  {POV_PROFILE.reels.map((tile) => (
                    <a
                      key={tile.label}
                      href={SOCIAL_LINKS.instagramPOV}
                      target="_blank"
                      rel="noreferrer"
                      className={`group relative aspect-square bg-gradient-to-br ${tile.tone} bg-brand-black flex items-center justify-center overflow-hidden`}
                    >
                      {tile.img ? (
                        <Image src={tile.img} alt={tile.label} fill sizes="130px" className="object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:9px_9px]" />
                          <span className="relative text-[8px] font-black tracking-[0.15em] text-white/70 group-hover:text-white transition-colors duration-300">
                            {tile.label}
                          </span>
                        </>
                      )}
                      <span className="absolute top-1.5 right-1.5 text-white/80 drop-shadow">
                        <Play size={11} fill="currentColor" />
                      </span>
                    </a>
                  ))}
                </div>

                {/* Footer CTA */}
                <a
                  href={SOCIAL_LINKS.instagramPOV}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white/[0.04] hover:bg-brand-yellow hover:text-brand-black text-white py-3.5 font-black text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 border-t border-white/5"
                >
                  Apri su Instagram
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
