"use client";

import Image from "next/image";

export default function Banner2() {
  return (
    <div className="relative w-full h-[500px] flex">
      {/* Row of 3 images */}
      <div className="flex w-full h-full">
        <div className="w-1/3 relative">
          <Image
            src="/collage/shoot1.jpg"
            alt="Shoot 1"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-1/3 relative">
          <Image
            src="/collage/shoot2.jpg"
            alt="Shoot 2"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-1/3 relative">
          <Image
            src="/collage/shoot3.jpg"
            alt="Shoot 3"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Overlay image in the center */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/collage/thetitle2.jpg"
          alt="Overlay"
          width={600} // adjust size
          height={600}
          className="object-contain rounded-lg shadow-lg opacity-85"
          loading="lazy"
        />
      </div> */}
    </div>
  );
}
