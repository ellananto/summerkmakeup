"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function IntroAbout() {
  return (
    <div className={`${montserrat.className} relative w-full overflow-hidden`}>
      <div className="relative w-full h-[50vw] sm:h-[60vw] md:h-[80vh] lg:h-screen">
        <Image
          src="/images/aboutMe.jpg"
          alt="About Me Postcard"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    </div>
  );
}
