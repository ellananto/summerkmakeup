"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function HeaderSplit() {
  return (
    <div className="flex w-full h-[300px] my-12">
      {/* Left side - image */}
      <div className="w-1/2 relative">
        <Image
          src="/collage/shoot1.jpg"
          alt="Section Visual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - solid bg with text */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <h1
          className={`${montserrat.className} text-white text-5xl uppercase tracking-wide`}
        >
          Portfolio
        </h1>
      </div>
    </div>
  );
}
