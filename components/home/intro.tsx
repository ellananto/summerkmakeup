"use client";

import { BookHeart } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function Intro() {
  const ref = useRef(null);

  // Track scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move image slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen pt-20 overflow-x-hidden">
      {/* Left side: text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 h-auto md:h-[80vh] text-center md:text-left">
        <div className="flex flex-col">
          <h1
            className="text-3xl sm:text-4xl md:text-[8rem] font-thin text-red-700 mb-2"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            WELCOME TO
          </h1>
          <h1
            className="text-7xl sm:text-5xl md:text-6xl font-thin text-red-700 mb-5 w-full"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Summer K Makeup
          </h1>
        </div>
        <p className={`text-base sm:text-lg mb-6 ${montserrat.className}`}>
          Does any of this sound familiar? You are not alone!
        </p>
        <ul className={`${montserrat.className} space-y-3 text-base sm:text-lg`}>
          {[
            "Worried your makeup will look too heavy or unnatural?",
            "Frustrated when makeup fades before the night is over?",
            "Tired of artists who don’t listen to your vision?",
            "Looking for a stress-free, fun experience on your big day?",
          ].map((question, index) => (
            <li key={index} className="flex items-center gap-2">
              <BookHeart className="text-red-700 flex-shrink-0 text-lg" />
              <span>{question}</span>
            </li>
          ))}
        </ul>
        <p className={`text-base sm:text-lg mt-6 ${montserrat.className}`}>
          Summer K Makeup solves all of these by creating a{" "}
          <span className="italic">personalized, lasting </span>
          look that enhances your natural beauty and makes you feel
          confident and comfortable.
        </p>
      </div>

      {/* Right side: parallax image */}
      <div
        ref={ref}
        className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[80vh] overflow-hidden mt-6 md:mt-0 shadow-lg"
      >
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src="/collage/shoot2.jpg"
            alt="Makeup session"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
