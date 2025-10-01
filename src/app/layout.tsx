import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Grafitala - Professional Printing & Graphic Design Services",
  description:
    "Your trusted partner for professional printing and graphic design services. We deliver quality, innovation, and excellence in every project.",
  keywords:
    "printing, graphic design, digital printing, large format, business cards, banners, signs",
  authors: [{ name: "Grafitala" }],
  openGraph: {
    title: "Grafitala - Professional Printing & Graphic Design Services",
    description:
      "Your trusted partner for professional printing and graphic design services. We deliver quality, innovation, and excellence in every project.",
    type: "website",
    locale: "en_US"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
