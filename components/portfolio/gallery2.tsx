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

export function Gallery2() {
  const testimonialImages = [
    "/portfolio-2/testim22.jpg",
    "/portfolio/port4.jpg",
    "/portfolio/port12.jpg",
    "/portfolio/port2.jpg",
    "/portfolio/port6.jpg",
    "/portfolio/port3.jpg",
    "/portfolio/port1.jpg",
    "/portfolio/port9.jpg",
    "/portfolio/port5.jpg",
    "/portfolio/port7.jpg",
    "/portfolio/port10.jpg",
    "/portfolio/port13.jpg",
    "/portfolio/port11.jpg",
    "/images/testim35.jpg"
  ];

  return (
    <div className="py-20">
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-7xl text-red-700 mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Editorial
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
      </div>
      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 text-center text-red-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        A space for creativity and high-fashion artistry—where each look tells a
        visual story through color, texture, and emotion.
      </p>
      <div className="flex mt-10 relative">
        <Carousel opts={{ align: "start" }} className="w-full px-15">
          <CarouselContent>
            {testimonialImages.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/4 px-2" 
              >
                <div className="w-full aspect-square">
                  <Image
                    src={src}
                    alt={`Summer K Makeup ${index + 1}`}
                    width={300}
                    height={300}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>
      </div>
    </div>
  );
}
