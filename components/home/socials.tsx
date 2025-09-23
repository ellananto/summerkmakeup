"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

// Montserrat font
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
      typed.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <div className={`${montserrat.className} relative w-full h-[600px]`}>
      <Image
        src="/images/socials.jpg"
        alt="Socials Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-5xl md:text-6xl font-medium mb-6">
          Stay in touch <span ref={titleRef}></span>
        </h2>
        <div className="flex gap-10 mt-6">
          <Button className="bg-white p-8 px-20 font-medium text-lg text-red-600 hover:cursor-pointer hover:bg-red-700 hover:text-white">
            INSTAGRAM
          </Button>
          <Button className="bg-red-700 p-8 px-20 font-medium text-lg text-white hover:cursor-pointer hover:bg-white hover:text-red-700">
            BOOK NOW
          </Button>
          <Button className="bg-white p-8 px-20 font-medium text-lg text-red-600 hover:cursor-pointer hover:bg-red-700 hover:text-white">
            TIK TOK
          </Button>
        </div>
      </div>
    </div>
  );
}
