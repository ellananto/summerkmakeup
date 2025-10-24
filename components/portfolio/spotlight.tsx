"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Spotlight() {
  return (
    <div
      className="w-full mx-auto bg-white text-black p-4 md:p-6 font-serif mb-20"
      style={{ fontFamily: "DarlineSerif, sans-serif" }}
    >
      {/* Top Title */}
      <h1
        className="text-4xl md:text-[7.5rem] text-left border-b-2 border-black pb-2 tracking-wider"
        style={{ fontFamily: "DarlineScript, sans-serif" }}
      >
        Breaking News!
      </h1>

      {/* Subline */}
      <div className="flex flex-col md:flex-row justify-between text-lg md:text-2xl mb-2 uppercase tracking-wider border-b-2 border-black pb-2">
        <span>{new Date().toLocaleDateString()}</span>
        <span>Special Edition</span>
        <span>Summer K Makeup</span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl md:text-[6rem] text-center tracking-widest">
        CLIENT SPOTLIGHT
      </h2>
      <h2
        className="text-4xl md:text-7xl text-center mb-10"
        style={{ fontFamily: "DarlineScript, sans-serif" }}
      >
        Kamryn Franke
      </h2>

      {/* Main Content */}
      <div
        className={`grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-10 items-start ${montserrat.className}`}
      >
        {/* Left Image (1/3) */}
        <div className="col-span-1 md:col-span-3 flex justify-center mb-6 md:mb-0">
          <Link
            href="https://people.com/ruby-franke-son-chad-marries-kamryn-anderson-11829063/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/portfolio-2/spotlight1.jpg"
              alt="Kamryn Franke"
              width={400}
              height={500}
              className="object-cover shadow-md w-full h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Right 2/3 Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col">
          {/* Top row of the right side */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10">
            {/* Left Text (2/6) */}
            <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6 text-base md:text-xl leading-relaxed text-justify">
              <p>
                Chad Franke and Kamryn Anderson’s wedding was a stunning blend
                of romance and style, filled with joy, elegance, and heartfelt
                moments that captured the essence of their relationship. Set
                against a picturesque backdrop, the day felt like a scene from a
                modern love story — emotional, refined, and deeply personal.
                Surrounded by family and friends, the couple celebrated in a way
                that was both intimate and cinematic, a true reflection of their
                love.
              </p>
            </div>

            {/* Center Quote (2/6) */}
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center text-center border-x-0 md:border-x-2 border-black px-4 md:px-6 py-6 md:py-12">
              <blockquote className="text-2xl md:text-4xl italic font-bold leading-snug">
                “Summer gave me the confidence to feel like myself on the best
                day of my life.”
              </blockquote>
              <span
                className="block mt-4 md:mt-6 text-xl md:text-3xl tracking-wider"
                style={{ fontFamily: "DarlineScript, sans-serif" }}
              >
                - Kamryn Franke
              </span>
            </div>

            {/* Right Text (2/6) */}
            <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6 text-base md:text-xl leading-relaxed text-justify">
              <p>
                Behind the scenes, the wedding’s atmosphere was elevated by the
                artistry of Summer K Makeup, whose touch brought elegance and
                cohesion to the entire event. Kamryn’s soft, luminous bridal
                glow — paired with subtle highlights and a seamless finish — set
                the tone for the day’s photos and aesthetic. The expert
                coordination of makeup, hair, and lighting transformed the
                celebration in a timeless and personally polished way.
              </p>
            </div>
          </div>

          {/* Sponsored Line */}
          <Link href="/contact">
            <div
              className="mt-5 text-center text-lg md:text-xl tracking-widest rounded-lg p-3 shadow-lg bg-black"
              style={{ fontFamily: "DarlineSerif, sans-serif", color: "white" }}
            >
              SPONSORED BY: SUMMER K MAKEUP
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
