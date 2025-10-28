"use client";

import { IntroAbout } from "@/components/about/intro";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Socials from "@/components/home/socials";
import { PictureAbout } from "@/components/about/journal";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function AboutHero() {
  return (
    <div className="flex flex-col">
      {/* Hero image with extra top space on mobile */}
      <div className="pt-24 sm:pt-0">
        <div className="relative w-full h-[70vw] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
          <Image
            src="/images/Portfolio (11).jpg"
            alt="Summer K Makeup About"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "top",
            }}
          />
        </div>
      </div>

      {/* Scrolling text banner */}
      <div className="w-full bg-white bg-opacity-90 py-5 sm:py-6 md:py-7 border-2 border-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-xl sm:text-2xl md:text-3xl lg:text-3xl">
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          {/* Repeat for seamless loop */}
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
          <span className={`px-6 sm:px-8 md:px-10 lg:px-12 ${montserrat.className} italic`}>summer k makeup</span>
        </div>
      </div>
      <IntroAbout />
      <Socials />
    </div>
  );
}
