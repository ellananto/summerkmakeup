"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const galleryImages = [
  "/portfolio/port1.jpg",
  "/portfolio/port12.jpg",
  "/portfolio/port3.jpg",
  "/portfolio/port4.jpg",
  // "/portfolio/port9.jpg",
  "/portfolio/port2.jpg",
  "/portfolio/port5.jpg",
  "/portfolio/port7.jpg",
  "/portfolio/port6.jpg",
  "/portfolio/port13.jpg",
  "/portfolio/port11.jpg",
  "/portfolio/port10.jpg",
  "/images/testim18.jpg",
];

export default function Gallery() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-7xl text-red-700 mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Editorials
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
      </div>

      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 text-center text-red-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        A space for creativity and high-fashion artistry—where each look tells a
        visual story through color, texture, and emotion.
      </p>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 gap-y-4 sm:gap-y-8 pt-10 pb-24 sm:pb-40">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
