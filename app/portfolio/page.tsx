"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Socials from "@/components/home/socials";
import Image from "next/image";
import { useRef } from "react";
import Spotlight2 from "@/components/portfolio/spotlight2";
import { Gallery } from "@/components/portfolio/gallery";
import { Gallery2 } from "@/components/portfolio/gallery2";

export default function Portfolio() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative overflow-x-hidden">
      {/* HERO */}
      <div
        ref={ref}
        className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:h-screen overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/brush-polaroids.jpg"
            alt="Portfolio Hero"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center 67%",
              filter: "brightness(0.6)",
            }}
          />
        </motion.div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 sm:px-6">
          <p
            className="text-[clamp(1.5rem,5vw,3rem)] sm:text-[clamp(2rem,5vw,4rem)] text-white mb-3 sm:mb-6 drop-shadow-lg max-w-[90vw] break-words"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            The Summer Collection
          </p>
          <h1
            className="text-[clamp(4rem,10vw,12rem)] sm:text-[clamp(5rem,10vw,14rem)] font-bold text-white leading-none drop-shadow-lg max-w-[90vw] break-words"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            Portfolio
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Gallery />
        <Gallery2 />
        <Spotlight2 />
        <div className="pt-8 sm:pt-12">
          <Socials />
        </div>
      </div>
    </div>
  );
}
