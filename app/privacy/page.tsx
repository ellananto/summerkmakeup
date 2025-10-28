"use client";

import Policy from "@/components/privacy/policy";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Privacy() {
  const ref = useRef(null);

  // Track scroll progress on the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move image slower than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div>
      {/* Hero Section */}
      <div ref={ref} className="relative w-full h-screen overflow-hidden">
        {/* Fullscreen Parallax Image */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/images/privacy.jpg"
            alt="Summer K Makeup Privacy"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top ",
              filter: "brightness(0.6)",
            }}
            priority
          />
        </motion.div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p
            className="text-2xl md:text-6xl text-white"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Because your privacy matters
          </p>
          <h1
            className="text-5xl md:text-[12rem] font-bold text-white"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            Privacy Policy
          </h1>
        </div>
      </div>
      <Policy />
    </div>
  );
}
