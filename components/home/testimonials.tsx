"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export function CarouselSize() {
  const testimonialImages = [
    "/testimonials/t1.png",
    "/testimonials/t3.png",
    "/testimonials/t2.png",
    "/testimonials/t4.png",
    "/testimonials/t5.png",
    "/testimonials/t6.png",
    "/testimonials/t7.png",
    "/testimonials/t8.png",
  ];

  return (
    <div className="relative overflow-hidden pt-15">
      {/* 🖥️ Desktop heels (left-aligned) */}
      <div className="hidden md:block absolute left-10 -top-0 rotate-180 z-20">
        <Image
          src="/testimonials/heels2.png"
          alt="Heels"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* 📱 Mobile heels (centered) */}
      <div className="md:hidden absolute inset-x-0 -top-0 flex justify-center z-20">
        <Image
          src="/testimonials/heels2.png"
          alt="Heels"
          width={120}
          height={120}
          className="object-cover rotate-180"
        />
      </div>

      {/* 🖥️ Desktop lipmark bottom-right */}
      <div className="hidden md:block absolute right-10 bottom-1 rotate-6 z-0">
        <Image
          src="/testimonials/lipmark.png"
          alt="Lipmark"
          width={130}
          height={130}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div
        className={`
          flex flex-col items-center justify-center text-center relative z-10
          pt-40 md:pt-10
          sm:pt-[5rem]  /* adds ~20px extra space on small screens */
        `}
      >
        <h2
          className="mx-4 text-3xl sm:text-5xl lg:text-7xl text-black mt-4 font-bold"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          The Reviews Are In!
        </h2>
        <h3
          className={`mx-4 text-base sm:text-lg text-black mt-2 ${montserrat.className}`}
        >
          See why everyone&apos;s so obsessed.
        </h3>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center mt-10 relative z-10">
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl px-4 sm:px-8"
        >
          <CarouselContent>
            {testimonialImages.map((src, index) => (
              <CarouselItem
                key={index}
                className={`
                  basis-full sm:basis-1/2 lg:basis-1/3 px-2
                  ${index === 0 ? "pl-4" : ""}
                  ${index === testimonialImages.length - 1 ? "pr-4" : ""}
                `}
              >
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt={`testimonial ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-xl ml-4 max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>

      {/* 📱 Mobile lipmark bottom */}
      <div className="flex justify-center mt-10 md:hidden mb-8">
        <Image
          src="/testimonials/lipmark.png"
          alt="Lipmark"
          width={80}
          height={80}
          className="object-cover ml-2"
        />
      </div>
    </div>
  );
}
