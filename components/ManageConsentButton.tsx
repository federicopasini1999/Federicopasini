"use client";

import React from "react";

const STORAGE_KEY = "fp-cookie-consent";

export default function ManageConsentButton() {
  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <button
      onClick={reset}
      className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-black font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200"
    >
      Gestisci / revoca il consenso
    </button>
  );
}
