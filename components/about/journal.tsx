"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function PictureAbout() {
  return (
    <div className="relative w-full h-[60vw] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden pb-20 mb-20">
      <Image
        src="/images/picAboutMe.jpg"
        alt="About Me"
        fill
        priority
        style={{
          objectFit: "contain",
          objectPosition: "top",
        }}
      />
    </div>
  );
}
