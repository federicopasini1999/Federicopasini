import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import ManageConsentButton from "@/components/ManageConsentButton";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy · Federico Pasini",
  description:
    "Informativa sul trattamento dei dati personali e sull'uso dei cookie del sito di Federico Pasini.",
};

const LAST_UPDATE = "Giugno 2026";

export default function PrivacyPage() {
  return (
    <>
      <main className="relative bg-brand-black min-h-screen px-6 md:px-12 pt-28 pb-24">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-yellow text-sm font-medium mb-10 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Torna alla home
          </Link>

          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Privacy &amp; Cookie Policy
          </h1>
          <p className="text-white/40 text-sm mb-12">Ultimo aggiornamento: {LAST_UPDATE}</p>

          <div className="space-y-10 text-white/70 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-bold mb-3">1. Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati è <strong className="text-white">Federico Pasini</strong> (P. IVA
                IT04798890408). Per qualsiasi richiesta relativa alla privacy puoi scrivere a{" "}
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-brand-yellow hover:underline"
                >
                  {SOCIAL_LINKS.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">2. Dati raccolti</h2>
              <p className="mb-3">Questo sito raccoglie due tipologie di dati:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Dati di navigazione e statistici</strong> (in forma aggregata e
                  pseudonimizzata) tramite Google Analytics, solo previo tuo consenso: pagine visitate, durata della
                  visita, tipo di dispositivo, area geografica approssimativa.
                </li>
                <li>
                  <strong className="text-white">Dati che ci comunichi volontariamente</strong>, ad esempio quando ci
                  contatti via e-mail o tramite i profili social collegati.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">3. Cookie utilizzati</h2>
              <p className="mb-3">
                I <strong className="text-white">cookie tecnici</strong> sono necessari al funzionamento del sito e non
                richiedono consenso.
              </p>
              <p className="mb-3">
                I <strong className="text-white">cookie statistici</strong> di{" "}
                <strong className="text-white">Google Analytics 4</strong> vengono installati solo dopo il tuo consenso
                esplicito tramite il banner. Servono a misurare in modo anonimo l'utilizzo del sito per migliorarlo.
                Finché non accetti, Analytics resta disattivato (Google Consent Mode).
              </p>
              <p>
                Il fornitore è Google Ireland Ltd.; il trattamento può comportare il trasferimento di dati verso gli
                Stati Uniti, sulla base delle garanzie previste dalla normativa europea (clausole contrattuali standard
                e Data Privacy Framework).
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">4. Base giuridica e finalità</h2>
              <p>
                I dati statistici sono trattati sulla base del tuo <strong className="text-white">consenso</strong> (art.
                6, par. 1, lett. a del GDPR), con la finalità di analizzare e migliorare l'esperienza del sito. I dati
                che ci invii volontariamente sono trattati per rispondere alle tue richieste.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">5. Gestione del consenso</h2>
              <p className="mb-4">
                Puoi modificare o revocare in qualsiasi momento il consenso ai cookie statistici. Cliccando qui sotto
                ricomparirà il banner con le tue opzioni.
              </p>
              <ManageConsentButton />
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-3">6. I tuoi diritti</h2>
              <p>
                In qualità di interessato puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 del
                GDPR: accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati. Per farlo,
                scrivi a{" "}
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-brand-yellow hover:underline">
                  {SOCIAL_LINKS.email}
                </a>
                . Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali
                (www.garanteprivacy.it).
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <p className="text-white/40 text-xs">
                Questa informativa è un modello di base e va verificata e adattata alla tua situazione specifica,
                preferibilmente con il supporto di un consulente. Non costituisce consulenza legale.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
