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
    <div className={`w-full py-20 lg:py-20 ${montserrat.className}`}>
      {/* Container with horizontal padding */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-4xl lg:text-6xl pb-2 text-red-700">
            Summer looks good on you.
          </h2>
          <p className="text-xl md:text-xl lg:text-lg tracking-tighter lg:max-w-xl font-regular text-left pb-3">
            Click below to see more of her portfolio, and find a look you love!
          </p>
          <Link href="/portfolio">
            <button
              className="bg-red-700 text-white font-thin p-4 rounded-lg drop-shadow-md hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              
            >
              View Portfolio
            </button>
          </Link>

          {/* Carousel with padding */}
          <Carousel setApi={setApi} className="w-full py-10">
            <CarouselContent className="pl-4 lg:pl-8">
              {images.map((src, index) => (
                <CarouselItem className="flex-none px-4" key={index}>
                  <div className="w-[350px] h-[400px] mx-auto rounded-md overflow-hidden bg-muted relative flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`Logo ${index + 1}`}
                      fill
                      sizes="(min-width:1024px) 300px, (min-width:640px) 200px, 150px"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
