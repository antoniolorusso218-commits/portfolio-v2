import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    template: "%s — Antonio Lorusso",
  },

  description:
    "Portfolio of Antonio Lorusso, Digital Marketing & E-commerce Specialist working across content, e-commerce, CRM, brand strategy and digital growth.",

  keywords: [
    "Antonio Lorusso",
    "Digital Marketing",
    "E-commerce",
    "CRM",
    "Content Strategy",
    "Social Media",
    "Brand Strategy",
    "Digital Growth",
    "Marketing Portfolio",
  ],

  authors: [
    {
      name: "Antonio Lorusso",
    },
  ],

  creator: "Antonio Lorusso",

  category: "portfolio",

  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    description:
      "Digital marketing, e-commerce, CRM and content strategy. Selected work and case studies by Antonio Lorusso.",
    siteName: "Antonio Lorusso Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Antonio Lorusso — Digital Marketing & E-commerce Specialist",
    description:
      "Digital marketing, e-commerce, CRM and content strategy. Selected work and case studies by Antonio Lorusso.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}