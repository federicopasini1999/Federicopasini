export const SOCIAL_LINKS = {
  instagramPersonal: "https://www.instagram.com/pasini.io", // Instagram personale
  instagramPOV: "https://www.instagram.com/pov.interviste",
  tiktokPOV: "https://www.tiktok.com/@pov.interviste",
  email: "federico@pasinicreative.com", // Email
};

export const NAV_LINKS = [
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Esperienze", href: "#esperienze" },
  { label: "Servizi", href: "#servizi" },
  { label: "POV Interviste", href: "#pov-interviste" },
  { label: "Contatti", href: "#contatti" },
];

export const HERO_CONTENT = {
  eyebrow: "PRESENTATORE · CONTENT CREATOR · INTRATTENITORE",
  title: "Porto energia, contenuto e attenzione dove succede qualcosa.",
  subtitle: "Sono Federico Pasini: presento eventi, creo format social e collaboro con brand, fiere e aziende per trasformare ogni occasione in un contenuto che resta.",
  ctaPrimary: "Lavora con me",
  ctaSecondary: "Scopri POV Interviste",
  socialProof: "+5M utenti raggiunti ogni mese con POV Interviste",
};

export const EXPERIENCE_CONTENT = {
  title: "Una bella esperienza fatta",
  subtitle: "De Cecco High Protein Arena · RiminiWellness",
  description: "Durante il RiminiWellness, Federico ha condotto le attività live della De Cecco High Protein Arena. Ha presentato momenti dinamici, interviste ed esibizioni sul palco principale coinvolgendo ospiti speciali, tra cui Elisabetta Canalis, connettendo il pubblico presente all'evento fisico con la cassa di risonanza dei canali social.",
  highlight: "Presentazione live, ritmo di conduzione e interazione con ospiti di rilievo internazionale davanti a migliaia di visitatori.",
  videoSrc: "/videos/intervista-elisabetta.mp4",
  photoSrc: "/images/experience_photo.webp",
};

export const ABOUT_CONTENT = {
  title: "Non solo presentatore. Un volto che crea connessione.",
  description: "Federico Pasini lavora tra palco, camera e social. Presenta eventi, conduce attività live, crea contenuti verticali e costruisce format pensati per generare attenzione reale.",
  pillars: [
    {
      title: "Presentazione",
      description: "Padronanza del palco, ritmo ed eleganza per dare valore al tuo brand.",
    },
    {
      title: "Intrattenimento",
      description: "Energia pura e coinvolgimento del pubblico, per rendere ogni evento vivo.",
    },
    {
      title: "Contenuto",
      description: "Ideazione e produzione di video verticali ad alto tasso di viralità.",
    },
  ],
};

export const SERVICES = [
  {
    id: "presentation",
    title: "Presentazione eventi",
    description: "Per fiere, eventi aziendali, palchi, activation, serate, contest e format live. Gestione del ritmo e professionalità davanti al pubblico.",
    icon: "Mic",
  },
  {
    id: "entertainment",
    title: "Intrattenimento live",
    description: "Interazione con il pubblico, ritmo, conduzione dinamica, momenti palco e coinvolgimento attivo degli spettatori per evitare tempi morti.",
    icon: "Sparkles",
  },
  {
    id: "creation",
    title: "Content creation",
    description: "Video verticali, format social, interviste, contenuti comedy, backstage e contenuti branded pensati per catturare l'attenzione in pochi secondi.",
    icon: "Video",
  },
  {
    id: "activation",
    title: "Brand activation",
    description: "Attività live studiate ad hoc per aziende che vogliono generare contenuti di impatto, brand awareness e una forte presenza sui canali social.",
    icon: "TrendingUp",
  },
];

export const POV_CONTENT = {
  title: "POV Interviste: il format che porta gli eventi sui social.",
  subtitle: "Un format nato nei club e cresciuto online, capace di trasformare persone, momenti e situazioni in contenuti virali ad alto impatto emotivo.",
  stats: [
    { value: "+5M", label: "Utenti raggiunti mensilmente" },
    { value: "100%", label: "Format comedy / street-interview" },
    { value: "Instagram & TikTok", label: "Presenza social multicanale" },
    { value: "Active", label: "Community giovane e partecipe" },
  ],
  cta: "Guarda POV Interviste",
  marqueeWords: [
    "INTERVISTE",
    "EVENTI",
    "VIRALITÀ",
    "FORMAT",
    "COMMUNITY",
    "SOCIAL",
    "ENERGY",
    "NIGHTLIFE",
  ],
};

// Anteprima profilo Instagram POV Interviste.
// NB: i numeri qui sotto sono PLACEHOLDER — sostituire con i dati reali del profilo.
// Per le miniature: aggiungere screenshot dei reel in /public/images/reels/ e
// impostare "img" su ciascun elemento (es. img: "/images/reels/reel-1.png").
export const POV_PROFILE = {
  handle: "pov.interviste",
  displayName: "POV Interviste",
  bioLines: [
    "𝙌𝙪𝙚𝙨𝙩𝙤 𝙚’ 𝙋𝙊𝙑, 𝙞𝙤 𝙨𝙤𝙣𝙤 𝙋𝙖𝙨𝙞𝙣𝙞",
    "𝐢𝐧𝐟𝐨: 𝘣𝘰𝘰𝘬𝘪𝘯𝘨@𝘱𝘰𝘷𝘪𝘯𝘵𝘦𝘳𝘷𝘪𝘴𝘵𝘦.𝘪𝘵",
    "🎤 @pasini.io",
    "🎥 @samueldiac",
    "in elenco AGCOM",
  ],
  stats: [
    { value: "350", label: "Post" },
    { value: "50K", label: "Follower" },
  ],
  reels: [
    { label: "INTERVISTE", tone: "from-brand-yellow/25 to-amber-600/10", img: "" },
    { label: "EVENTI", tone: "from-fuchsia-500/20 to-purple-700/10", img: "" },
    { label: "NIGHTLIFE", tone: "from-sky-500/20 to-indigo-700/10", img: "" },
    { label: "COMEDY", tone: "from-rose-500/20 to-red-700/10", img: "" },
    { label: "STREET", tone: "from-emerald-500/20 to-teal-700/10", img: "" },
    { label: "VIRALE", tone: "from-orange-500/20 to-amber-700/10", img: "" },
  ],
};

export const EVENT_FLYERS = [
  { title: "Milano Gala Show", location: "Milano, IT", category: "Gala Dinner", color: "from-amber-500/10 to-yellow-500/5" },
  { title: "RiminiWellness Arena", location: "Rimini Fiera", category: "Wellness Live", color: "from-blue-500/10 to-teal-500/5" },
  { title: "Winter Club Tour", location: "M. di Campiglio", category: "Nightlife", color: "from-purple-500/10 to-indigo-500/5" },
  { title: "Summer Beach Festival", location: "Riccione", category: "Music Stage", color: "from-red-500/10 to-orange-500/5" },
  { title: "Tech Innovation Forum", location: "Bologna", category: "Corporate", color: "from-cyan-500/10 to-blue-500/5" },
  { title: "Expo Food & Wine", location: "Verona Fiere", category: "Exhibition", color: "from-emerald-500/10 to-green-500/5" },
  { title: "Automotive Launch", location: "Torino", category: "Brand Show", color: "from-rose-500/10 to-purple-500/5" },
  { title: "Ibiza Sound Session", location: "Ibiza, ES", category: "Club Guest", color: "from-violet-500/10 to-fuchsia-500/5" },
  { title: "Digital Summit", location: "Roma", category: "Creator Panel", color: "from-orange-500/10 to-amber-500/5" },
  { title: "Fashion Week Lounge", location: "Milano", category: "Luxury Event", color: "from-zinc-500/10 to-stone-500/5" },
];

export const STATS = [
  {
    value: 5000000,
    suffix: "+",
    label: "Utenti raggiunti ogni mese con POV Interviste",
  },
  {
    value: 10,
    suffix: "M+",
    label: "Visualizzazioni totali sui video del brand",
  },
  {
    value: 100,
    suffix: "+",
    label: "Eventi presentati e condotti live",
  },
  {
    value: 15,
    suffix: "+",
    label: "Brand e aziende partner nel 2025",
  },
];

export const AUDIENCE_SECTIONS = [
  {
    title: "Fiere",
    description: "Per activation, stand, interviste, presentazioni prodotto e contenuti live in grado di attirare visitatori e generare lead di valore.",
  },
  {
    title: "Aziende",
    description: "Per eventi corporate, lanci prodotto, contenuti branded e momenti di intrattenimento su misura per dipendenti e partner commerciali.",
  },
  {
    title: "Club ed eventi nightlife",
    description: "Per format social, interviste, contenuti verticali e intrattenimento dal vivo con lo stile irriverente e dinamico che caratterizza POV.",
  },
  {
    title: "Brand",
    description: "Per campagne social, video format, presenza ad eventi e uno storytelling umano che aumenta la vicinanza emotiva con il target di riferimento.",
  },
];

export const CTA_FINAL = {
  title: "Hai un evento, un brand o un'idea da far vivere?",
  subtitle: "Portiamola davanti alle persone giuste, dal vivo e online. Collaboriamo per creare attenzione reale.",
  primaryCta: "Contattami via E-mail",
  secondaryCta: "Scrivimi su Instagram",
};
