import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle ambient light at the footer */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center gap-10">
        <div>
          {/* Logo brand */}
          <a
            href="#"
            className="text-white font-extrabold text-2xl tracking-tighter hover:text-brand-yellow transition-colors duration-300 block mb-2"
          >
            FEDERICO PASINI
          </a>
          <p className="text-white/60 text-sm tracking-wide uppercase font-medium">
            Presentatore · Content Creator · Intrattenitore
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full md:w-auto">
          {/* Social Columns */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-white/40">
              Social
            </h4>
            <a
              href={SOCIAL_LINKS.instagramPersonal}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-brand-yellow text-sm font-medium flex items-center gap-1 group transition-colors duration-200"
            >
              Instagram Personale
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href={SOCIAL_LINKS.instagramPOV}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-brand-yellow text-sm font-medium flex items-center gap-1 group transition-colors duration-200"
            >
              Instagram POV
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktokPOV}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-brand-yellow text-sm font-medium flex items-center gap-1 group transition-colors duration-200"
            >
              TikTok POV Interviste
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest text-white/40">
              Contatti
            </h4>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-white/70 hover:text-brand-yellow text-sm font-medium flex items-center gap-1 group transition-colors duration-200"
            >
              {SOCIAL_LINKS.email}
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
        <p className="text-center sm:text-left">
          © {currentYear} Federico Pasini · Presentatore &amp; Content Creator
          <span className="block sm:inline sm:ml-2 text-white/30">
            P. IVA IT04798890408
          </span>
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/privacy"
            className="text-white/50 hover:text-brand-yellow transition-colors duration-200"
          >
            Privacy &amp; Cookie
          </Link>
          <a
            href="#"
            className="flex items-center gap-1.5 text-white/50 hover:text-brand-yellow transition-colors duration-200 group"
          >
            Torna su
            <ArrowUpRight
              size={14}
              className="-rotate-45 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
