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
      strings: ["Instagram!", "Facebook!", "TikTok!"],
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
        <h2 className="text-5xl md:text-7xl font-medium mb-6">
          Stay in touch on {" "}
          <span ref={titleRef}></span>
        </h2>

        <div className="flex gap-10 mt-6">
          <Button
            className="bg-white p-8 px-20 font-medium text-2xl text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white"
          >
            INSTAGRAM
          </Button>
          <Button
            className="bg-white p-8 px-20 font-medium text-2xl text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white"
          >
            FACEBOOK
          </Button>
          <Button
            className="bg-white p-8 px-20 font-medium text-2xl text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white"
          >
            TIK TOK
          </Button>
        </div>
      </div>
    </div>
  );
}
