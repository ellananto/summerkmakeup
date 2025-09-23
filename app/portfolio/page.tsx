"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Montserrat } from "next/font/google";
import Socials from "@/components/home/socials";
import ServiceCards from "@/components/services/service-list";
import PandF from "@/components/services/details";
import Image from "next/image";
import { useRef } from "react";
import Gallery from "@/components/portfolio/gallery";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: "italic",
  display: "swap",
});

export default function ServicesSplit() {
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
            src="/images/polaroids-socials.jpg"
            alt="Services Hero"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.7)",
            }}
            priority
          />
        </motion.div>

        {/* Centered Oval */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-pink-200 text-white text-2xl sm:text-3xl md:text-6xl font-bold italic px-12 py-3 rounded-full shadow-lg">
            Portfolio
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-white">
        <Gallery />
        <Socials />
      </div>
    </div>
  );
}
