"use client";
import Image from "next/image";

export function PictureAbout() {
  return (
    <div className="relative w-full h-[60vw] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden pb-20 mb-20">
      <Image
        src="/images/picAboutMe.jpg"
        alt="Summer K Makeup Picture About"
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
