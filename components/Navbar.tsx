"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Monitor scroll for visual adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-white font-extrabold text-xl md:text-2xl tracking-tighter hover:text-brand-yellow transition-colors duration-300"
          >
            FEDERICO PASINI
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contatti"
              className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-black font-semibold text-sm px-6 py-3 rounded-full tracking-wide transition-all duration-300 hover:scale-105 inline-block"
            >
              Lavora con me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-brand-yellow p-1 transition-colors duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-brand-black z-40 flex flex-col justify-center px-6 md:px-12"
          >
            <div className="flex flex-col space-y-8 mt-12">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.label}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold tracking-tight text-white hover:text-brand-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
                className="pt-6 border-t border-white/10"
              >
                <a
                  href="#contatti"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-black font-bold text-center block w-full py-4 rounded-full text-lg tracking-wide transition-all duration-300"
                >
                  Lavora con me
                </a>
              </motion.div>

              {/* Social links inside drawer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-6 pt-4 text-white/50 text-sm"
              >
                <a
                  href={SOCIAL_LINKS.instagramPersonal}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-yellow transition-colors duration-200"
                >
                  Instagram Pers.
                </a>
                <a
                  href={SOCIAL_LINKS.instagramPOV}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-yellow transition-colors duration-200"
                >
                  Instagram POV
                </a>
                <a
                  href={SOCIAL_LINKS.tiktokPOV}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-yellow transition-colors duration-200"
                >
                  TikTok POV
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
