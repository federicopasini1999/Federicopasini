import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Services from "@/components/Services";
import POVSection from "@/components/POVSection";
import Stats from "@/components/Stats";
import Audience from "@/components/Audience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed top navigation menu */}
      <Navbar />

      {/* Main page content sections */}
      <main className="relative bg-brand-black w-full min-h-screen">
        {/* 1. Hero Section (with loop video background) */}
        <Hero />

        {/* 2. Chi Sono Section */}
        <About />

        {/* 3. Esperienza (De Cecco & Elisabetta Canalis case study) */}
        <Experience />

        {/* 4. Servizi / Cosa faccio Section */}
        <Services />

        {/* 5. POV Interviste Section */}
        <POVSection />

        {/* 6. Numeri / Statistiche Section */}
        <Stats />

        {/* 7. Audience / Per chi è pensato Section */}
        <Audience />

        {/* 8. Call To Action Finale Section */}
        <FinalCTA />
      </main>

      {/* Minimum Footer */}
      <Footer />
    </>
  );
}
