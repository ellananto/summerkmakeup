"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    }, 2000); // autoplay every 2s

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Summer looks good on you.
          </h2>
          <p className="text-xl md:text-xl lg:text-lg tracking-tighter lg:max-w-xl font-regular text-left">
            Click here to see more of her portfolio, and find a look you love!
          </p>
          <Carousel setApi={setApi} className="w-full py-10">
            <CarouselContent>
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
