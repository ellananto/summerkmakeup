"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Case2 } from "../ui/cases-with-infinite-scroll2";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const galleryImages = [
  "/images/testim15.jpg",
  "/images/testim2.jpg",
  "/portfolio-2/testim17.jpg",
  "/portfolio-2/IMG_3245.jpg",
  "/images/testim3.jpg",
  "/images/testim6.jpg",
  "/images/testim9.jpg",
  "/images/testim7.jpg",
  "/portfolio-2/IMG_1842.jpg",
  "/portfolio-2/testim18.jpg",
  "/images/testim13.jpg",
  "/images/testim1.jpg",
  "/images/testim12.jpg",
  "/portfolio-2/testim19.jpg",
  "/portfolio-2/testim20.jpg",
  "/portfolio-2/testim21.jpg",
  "/portfolio-2/testim22.jpg",
  "/portfolio-2/testim23.jpg",
  "/images/testim19.jpg",
  "/images/testim14.jpg",
  "/images/testim16.jpg",
];

export default function Gallery2() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-7xl text-red-700 mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Bridals
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
      </div>

      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 text-center text-red-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        From glowing brides to friends and family, these looks are designed to
        bring out everyone’s natural beauty on your most meaningful day.
      </p>

      {/* Gallery Grid */}
      <Case2
        images={[
          "/images/testim3.jpg",
          "/images/testim6.jpg",
          "/images/testim9.jpg",
          "/images/testim7.jpg",
          "/portfolio-2/IMG_1842.jpg",
          "/portfolio-2/testim18.jpg",
          "/images/testim13.jpg",
          "/images/testim1.jpg",
        ]}
      />
      <Case2
        images={[
          "/images/testim12.jpg",
          "/portfolio-2/testim19.jpg",
          "/portfolio-2/testim20.jpg",
          "/portfolio-2/testim21.jpg",
          "/portfolio-2/testim22.jpg",
          "/portfolio-2/testim23.jpg",
          "/images/testim19.jpg",
          "/images/testim14.jpg",
          "/images/testim16.jpg",
        ]}
      />
    </div>
  );
}
