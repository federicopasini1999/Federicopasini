"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "fp-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "granted") {
      // L'utente aveva già accettato: riattiva il consenso (il default a ogni caricamento è "denied")
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    localStorage.setItem(STORAGE_KEY, "granted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[100] glass rounded-2xl border border-white/15 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-brand-yellow/10 text-brand-yellow p-2 rounded-xl shrink-0">
          <Cookie size={18} />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm mb-1">Questo sito usa i cookie</h3>
          <p className="text-white/60 text-xs leading-relaxed">
            Usiamo cookie tecnici e, con il tuo consenso, cookie di statistica (Google
            Analytics) per capire come viene usato il sito. Leggi la{" "}
            <Link href="/privacy" className="text-brand-yellow hover:underline">
              Privacy &amp; Cookie Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-black font-bold text-sm py-2.5 rounded-lg transition-colors duration-200"
        >
          Accetta
        </button>
        <button
          onClick={reject}
          className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold text-sm py-2.5 rounded-lg border border-white/10 transition-colors duration-200"
        >
          Rifiuta
        </button>
      </div>
    </div>
  );
}
