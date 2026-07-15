import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://grafitala.com";
const title = "Grafitala — Print packaging for the food industry";
const description =
  "For over 30 years and two family generations, Grafitala designs, prints, cuts and glues folding-carton packaging and labels for jelly, ready meals, puddings and meat — offset and UV printing, end-to-end and in-house, from Abóboda, Portugal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Grafitala"
  },
  description,
  keywords: [
    "packaging printing",
    "folding carton",
    "food packaging",
    "carton boxes",
    "label printing",
    "offset printing",
    "UV printing",
    "die cutting",
    "gluing",
    "Grafitala",
    "Abóboda",
    "Portugal"
  ],
  authors: [{ name: "Grafitala" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
    siteName: "Grafitala",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
