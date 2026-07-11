import type { Metadata } from "next";
import { Playfair_Display, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800", "900"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PrimeLabs — Software studio, Accra",
  description:
    "PrimeLabs designs and builds the ordering, membership, and operations software Ghanaian businesses and institutions run on.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${archivo.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}