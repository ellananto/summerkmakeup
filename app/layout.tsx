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
  title: "Summer K Makeup | Summer Kallunki",
  description:
    "Makeup Artist located in Utah for bridals, wedding party makeup, and editorials.",
  openGraph: {
    title: "Summer K Makeup | Summer Kallunki",
    description:
      "Makeup Artist located in Utah for bridals, wedding party makeup, and editorials.",
    url: "https://summerkmakeup.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer K Makeup | Summer Kallunki",
    description:
      "Makeup Artist located in Utah for bridals, wedding party makeup, and editorials.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
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
