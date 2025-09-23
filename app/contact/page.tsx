"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: "italic",
  display: "swap",
});

export default function Contact() {
  const ref = useRef(null);

  // Track scroll progress on the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move image slower than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative">
      {/* Parallax Hero Image */}
      <div ref={ref} className="relative w-full h-[80vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/collage/just-makeup.jpg"
            alt="Services Hero"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom", filter: "brightness(0.7)" }}
            priority
          />
        </motion.div>

        {/* Centered Oval */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-red-700 text-white text-2xl sm:text-3xl md:text-6xl font-bold italic px-12 py-3 rounded-full shadow-lg">
            Contact
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-white">
      </div>
    </div>
  );
}
