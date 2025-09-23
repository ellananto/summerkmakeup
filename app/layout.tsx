import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Header1 } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick the weights you need
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Summer Kallunki | Utah Makeup Artist",
  description:
    "Summer Kallunki is a Utah-based makeup artist specializing in bridal, special events, and photoshoots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <body
        className={`${onest.variable} antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: "#FFCCDD" }}
      >
        <Header1 />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
