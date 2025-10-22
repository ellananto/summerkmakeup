"use client";
import { Case2 } from "@/components/ui/cases-with-infinite-scroll2";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

function Gallery1() {
  return (
    <div className="block overflow-x-hidden pt-10">
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
      <Case2
        images={[
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
        ]}
      />
    </div>
  );
}

export default Gallery1;
