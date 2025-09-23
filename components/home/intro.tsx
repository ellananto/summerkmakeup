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
    <div className="flex w-full min-h-screen pt-20">
      {/* Left side: text */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`${montserrat.className} text-4xl md:text-6xl font-thin text-red-700 text-center`}
          >
            Tired of makeup that just doesn’t feel like{" "}
          </h1>
          <span className="text-5xl md:text-6xl font-thin text-red-700 mb-6 italic">you?</span>
        </div>

        <p className={`${montserrat.className} text-2xl text-red-700 mb-6`}>
          Struggling to get the look you want? Let&apos;s make it effortless and
          fun.
        </p>
        <ul className={`${montserrat.className} space-y-3 text-lg`}>
          {[
            "Natural glow without looking “overdone”",
            "Long-lasting beauty for your big day",
            "Makeup that enhances your features, not hides them",
            "A fun, stress-free experience from start to finish",
          ].map((text, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <BookHeart className="text-red-700 flex-shrink-0 text-lg" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: parallax image */}
      <div
        ref={ref}
        className="w-1/2 relative h-[80vh] overflow-hidden mr-10 rounded-lg shadow-lg" // smaller than full screen
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/collage/shoot2.jpg" // replace with your image
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
