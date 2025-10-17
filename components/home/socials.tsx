"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function Socials() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const typed = new Typed(titleRef.current, {
      strings: ["on Instagram!", "for our appointment!", "on TikTok!"],
      typeSpeed: 90,
      backSpeed: 65,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`${montserrat.className} relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-[600px] overflow-x-hidden`}
    >
      {/* Background image */}
      <Image
        src="/images/socials.jpg"
        alt="Socials Banner"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 sm:mb-6 leading-tight">
          Stay in touch <span ref={titleRef}></span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-4 sm:mt-6 w-full sm:w-auto items-center justify-center">
          <Button className="bg-white py-4 px-12 sm:py-6 sm:px-16 md:p-8 md:px-20 font-medium text-base sm:text-lg text-red-600 hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:bg-red-700 hover:text-white w-3/4 sm:w-auto">
            INSTAGRAM
          </Button>

          <Button className="bg-red-700 py-4 px-12 sm:py-6 sm:px-16 md:p-8 md:px-20 font-medium text-base sm:text-lg text-white hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:bg-white hover:text-red-700 w-3/4 sm:w-auto">
            BOOK NOW
          </Button>

          <Button className="bg-white py-4 px-12 sm:py-6 sm:px-16 md:p-8 md:px-20 font-medium text-base sm:text-lg text-red-600 hover:scale-105 transition-transform duration-300 hover:cursor-pointer hover:bg-red-700 hover:text-white w-3/4 sm:w-auto">
            TIKTOK
          </Button>
        </div>
      </div>
    </div>
  );
}
