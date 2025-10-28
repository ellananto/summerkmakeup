"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function PortfolioHero() {
  const ref = useRef(null);

  // Track scroll progress on the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move image slower than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Load Tally script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div ref={ref} className="relative w-full h-screen overflow-hidden">
        {/* Fullscreen Parallax Image */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/collage/shoot4.jpg"
            alt="Summer K Makeup Contact"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              filter: "brightness(0.5)",
            }}
            priority
          />
        </motion.div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <p
            className="text-xl sm:text-3xl md:text-6xl text-white"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            So excited to hear from you!
          </p>
          <h1
            className="text-4xl sm:text-6xl md:text-[12rem] font-bold text-white break-words"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            Contact
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 flex justify-center py-16 px-4 sm:px-6">
        <div className="w-full max-w-4xl h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg bg-gray-50">
          <iframe
            data-tally-src="https://tally.so/r/woWVrx?transparentBackground=1"
            className="w-full h-full"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Makeup Inquiry"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
