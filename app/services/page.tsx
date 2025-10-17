"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ServiceList from "@/components/services/service-list";
import Details from "@/components/services/details";
import FAQs from "@/components/services/faqs";
import Socials from "@/components/home/socials";

export default function ServicesSplit() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative overflow-x-visible">
      {/* HERO */}
      <div ref={ref} className="relative w-full h-screen overflow-hidden">
        {/* Clip the hero image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div style={{ y }} className="w-full h-full">
            <Image
              src="/images/polaroids-socials.jpg"
              alt="Services Hero"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 67%",
                filter: "brightness(0.7)",
              }}
              priority
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none text-center px-4">
          <p
            className="text-2xl md:text-6xl text-white mb-4 drop-shadow-lg"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Beauty designed for every occasion
          </p>
          <h1
            className="text-5xl md:text-[12rem] font-bold text-white drop-shadow-lg"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            Services
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="service-page">
        <ServiceList />
        <Details />
        <FAQs /> 
        <Socials />
      </div>
    </div>
  );
}
