import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Body / UI face — clean and professional (variable font shipped in repo).
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Display face — characterful, editorial energy for headlines.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.federicopasini.it"),
  title: "Federico Pasini · Presentatore di eventi e Content Creator",
  description:
    "Federico Pasini presenta eventi, crea contenuti social e collabora con aziende, fiere e brand. Volto di POV Interviste, format da oltre 5 milioni di utenti raggiunti mensilmente.",
  keywords: [
    "Federico Pasini",
    "presentatore eventi",
    "content creator",
    "intrattenitore",
    "POV Interviste",
    "speaker eventi",
    "presentatore fiere",
    "brand activation",
  ],
  openGraph: {
    title: "Federico Pasini · Presentatore di eventi e Content Creator",
    description:
      "Federico Pasini presenta eventi, crea contenuti social e collabora con aziende, fiere e brand. Volto di POV Interviste, format da oltre 5 milioni di utenti raggiunti mensilmente.",
    url: "https://www.federicopasini.it",
    siteName: "Federico Pasini",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Pasini · Presentatore di eventi e Content Creator",
    description:
      "Federico Pasini presenta eventi, crea contenuti social e collabora con aziende, fiere e brand. Volto di POV Interviste, format da oltre 5 milioni di utenti raggiunti mensilmente.",
  },
  // Le icone (icon.svg, icon.png, apple-icon.png) sono rilevate automaticamente da Next dalla cartella app/.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable} scroll-smooth`}
    >
      <body className="font-sans bg-brand-black text-white antialiased min-h-screen overflow-x-hidden selection:bg-brand-yellow selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
