"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Spotlight() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="w-12 sm:w-16 h-[1px] bg-black"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-8xl text-black mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Client Spotlight
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-black"></div>
        
      </div>
      <div className="flex items-center justify-center pt-10 pb-5">
                <h2
          className="mx-4 text-3xl sm:text-4xl lg:text-5xl text-black mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineSerif, sans-serif" }}
        >
          KAMRYN FRANKE
        </h2>
      </div>

      {/* Subtitle */}
      <p
        className={`mt-4 sm:mt-6 text-center text-black text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        One of our stunning brides made it all the way to{" "}
        <em>PEOPLE Magazine</em>! We’re still swooning over her look.
      </p>

      {/* Spotlight Images */}
      <div className="flex justify-center items-end gap-4 sm:gap-8 pt-10 pb-24 sm:pb-40 flex-wrap">
        {/* Left Image */}
        <div className="relative w-40 sm:w-56 md:w-64 aspect-[3/4] overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
          <Image
            src="/portfolio-2/spotlight1.jpg"
            alt="Client Spotlight Left"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        {/* Center Image */}
        <div className="relative w-56 sm:w-72 md:w-96 aspect-[3/4] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:cursor-pointer z-10">
          <Image
            src="/portfolio-2/spotlight2.jpg"
            alt="Client Spotlight Center"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-40 sm:w-56 md:w-64 aspect-[3/4] overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
          <Image
            src="/portfolio-2/spotlight3.jpg"
            alt="Client Spotlight Right"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
