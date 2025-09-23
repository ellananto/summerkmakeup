"use client";

import Image from "next/image";

// Regular gallery (port1–14)
const galleryImages = Array.from(
  { length: 14 },
  (_, i) => `/portfolio/port${i + 1}.jpg`
);

export default function Gallery() {
  return (
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pb-10 pt-10 pb-40">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-96 overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
        )
}
