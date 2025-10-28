"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Button } from "./button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

interface CaseProps {
  images: string[];
}

function Case({ images }: CaseProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className={`w-full py-10 sm:py-16 lg:py-10 ${montserrat.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            The Summer Collection
          </h1>
          <h2
            className="text-5xl sm:text-6xl lg:text-8xl text-red-700 tracking-wider"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            PORTFOLIO
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal pt-4 lg:pt-4 max-w-4xl mx-auto">
            From soft glam to bold editorial, Summer creates looks that capture your
            personality and elevate any occasion. The goal is to make every client
            feel effortlessly confident and radiant. And trust me, Summer{" "}
            <span className="italic">always</span> looks good on you.
          </p>
          <Link href="/contact">
            <Button
              className={`mt-4 sm:mt-6 p-4 sm:p-6 text-base sm:text-lg rounded-lg drop-shadow-md hover:cursor-pointer hover:scale-105 transition-transform duration-300 font-medium ${montserrat.className}`}
              style={{ backgroundColor: "#b91c1c" }}
            >
              Book Your Look!
            </Button>
          </Link>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="w-full py-8 sm:py-12">
          <CarouselContent className="pl-2 sm:pl-4 lg:pl-8">
            {images.map((src, index) => (
              <CarouselItem className="flex-none px-2 sm:px-4" key={index}>
                <div className="w-[200px] sm:w-[300px] lg:w-[350px] h-[250px] sm:h-[350px] lg:h-[400px] mx-auto rounded-md overflow-hidden bg-muted relative flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 350px"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export { Case };
