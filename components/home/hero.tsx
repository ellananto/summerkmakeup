"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

const backgroundImages = [
  "/images/mirror.JPG",
  "/images/makeup2.JPG",
  "/images/makeup3.JPG",
];

const objectPositions = ["center 50%", "center 44%", "center 50%"];

function HeroLanding() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden">
      {backgroundImages.map((src, i) => {
        return (
          <Image
            key={i}
            src={src}
            alt="makeup-landing"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: objectPositions[i],
              opacity: i === bgIndex ? 1 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          />
        );
      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10 text-left text-white pl-16 pr-8 max-w-3xl">
        <h1 className={`text-7xl leading-tight whitespace-pre-line font-extrabold ${montserrat.className}`}>
          Your Beauty.
          {"\n"}Your Confidence.
          {"\n"}Your Way.
        </h1>
        <p className={`mt-4 text-xl font-light max-w-lg ${montserrat.className}`}>
          Creating flawless looks that feel authentic, unforgettable, and completely yours.
        </p>
        <Button className={`mt-6 p-8 text-lg rounded-lg drop-shadow-md cursor-pointer pinkButton font-bold ${montserrat.className}`} style={{ backgroundColor: "#FF99BD" }}>
          Book Your Look
        </Button>
      </div>
    </div>
  );
}

export default HeroLanding;
