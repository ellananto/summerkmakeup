"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

const backgroundImages = [
  "/images/mirror.jpg",
  "/images/makeup2.jpg",
  "/images/makeup3.jpg",
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
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden text-white overflow-x-hidden">
      {/* Background images */}
      {backgroundImages.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="Summer K Makeup-makeup-landing"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: objectPositions[i],
            opacity: i === bgIndex ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none" />

      {/* Foreground content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 sm:px-10 md:px-16 lg:pl-16 lg:items-start lg:text-left max-w-3xl`}
      >
        {/* <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold ${montserrat.className}`}
        >
          A look that feels effortlessly you.
        </h1> */}

        {/* <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl}`}
          style={{
            fontFamily: "DarlineScript, sans-serif",
          }}
        >
          A look that feels effortlessly you.
        </h1> */}

        <h1
          className={`text-4xl tracking-wide sm:text-5xl md:text-[6rem] lg:text-[5rem]}`}
          style={{
            fontFamily: "DarlineSerif, sans-serif",
          }}
        >
          A look that feels effortlessly you.
        </h1>

        <p
          className={`mt-4 text-base sm:text-lg md:text-xl font-light ${montserrat.className}`}
        >
          Creating flawless looks that feel authentic, unforgettable, and
          completely yours.
        </p>

        <Button
          className={`mt-6 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-lg drop-shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 font-bold ${montserrat.className}`}
          style={{ backgroundColor: "#FF99BD" }}
        >
          <Link href="/contact">Book Your Look</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroLanding;
