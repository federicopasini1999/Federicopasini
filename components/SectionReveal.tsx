"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  id?: string;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  id,
}: SectionRevealProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
