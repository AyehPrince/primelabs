import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "PrimeLabsAfrica — Software studio, Accra",
  description:
    "PrimeLabsAfrica designs and builds the ordering, membership, marketplace and operations software that Ghanaian businesses and institutions run on, with Africa next.",
  openGraph: {
    title: "PrimeLabsAfrica — Software studio, Accra",
    description:
      "Production software for Ghana's businesses and institutions, built in Accra for Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}