"use client";

import Image from "next/image";
import { UnifrakturCook, Montserrat, Lora } from "next/font/google";
import Gallery from "@/components/portfolio/gallery";

const unifrakturCook = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"], // UnifrakturCook only has 400 weight
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Hero image (full width)
const heroImage = "/collage/shoot1.jpg";

export default function Banner1() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="py-20">
      {/* Full width white background */}
      <div className="w-full">
        {/* Inner content with padding */}
        <div className="px-8">
          <h1
            className={`${lora.className} text-9xl border-b-4 border-black text-center p-4 mb-2`}
          >
            The Portfolio
          </h1>
          <div className="flex flex-row justify-between items-center mb-10">
            <h1 className={`${lora.className} font-semibold uppercase `}>
              {formattedDate}
            </h1>
            <h1 className={`${lora.className} font-semibold `}>
              THE SUMMER EDITION
            </h1>
            <h1 className={`${lora.className} font-semibold `}>
              SUMMER K MAKEUP
            </h1>
          </div>
          <div>
            <div className="flex justify-center gap-4 mb-10">
              <Image
                src="/collage/Portfolio (4).jpg"
                alt="Hero Image"
                width={800}
                height={800}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
