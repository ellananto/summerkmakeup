import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Onest } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // pick the weights you need
  display: 'swap',
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: "Summer Kallunki | Utah Makeup Artist",
  description: "Summer Kallunki is a Utah-based makeup artist specializing in bridal, special events, and photoshoots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <body
        className={`${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
