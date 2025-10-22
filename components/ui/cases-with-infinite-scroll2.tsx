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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

interface CaseProps {
  images: string[];
}

function Case2({ images }: CaseProps) {
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
    <div className={`w-full py-1 sm:py-1 lg:py-1 ${montserrat.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

export { Case2 };
