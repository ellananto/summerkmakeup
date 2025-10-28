"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

function Spotlight2() {
  return (
    <div className="py-20" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      {/* Title */}
      <div className="flex items-center justify-center flex-wrap text-center mb-6">
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-7xl text-red-700 mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Client Spotlight
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
      </div>

      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 text-center text-red-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        We’re over the MOON to have Summer K Makeup featured in People Magazine.
        Read below to see the perfect look for our bride&apos;s perfect day!
      </p>

      {/* Spotlight Section */}
      <div
        className={`${montserrat.className} flex flex-col lg:flex-row items-center justify-center py-10 gap-8 overflow-x-hidden`}
      >
        {/* Left image */}
        <div className="flex-shrink-0" style={{ maxWidth: "450px", padding: "0 10px" }}>
          <Image
            src="/portfolio-2/spotlight1.jpg"
            alt="Summer K Makeup Left"
            width={450}
            height={650}
            className="rounded-lg object-cover w-full h-auto shadow-xl"
          />
        </div>

        {/* Center text (always centered) */}
        <div className="flex-1 text-center px-2 sm:px-4">
          <h2
            className="text-4xl sm:text-4xl lg:text-4xl text-black py-4 flex flex-col tracking-wider items-center"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            PEOPLE MAGAZINE PRESENTS
            <div className="px-4 mt-2">
              <h1
                className="text-5xl sm:text-7xl text-red-700 leading-tight"
                style={{ fontFamily: "DarlineScript, sans-serif" }}
              >
                Kamryn
                <span
                  className="-ml-1 sm:-ml-2"
                  style={{ fontFamily: "DarlineSerif, sans-serif" }}
                >
                  Franke
                </span>
              </h1>
            </div>
          </h2>
          <p className="text-center sm:text-lg text-gray-700 mt-4">
            The day was pure magic with{" "}
            <span className="text-red-700 font-bold">Summer K Makeup</span>,
            whose touch made everything feel effortlessly beautiful. Kamryn’s
            soft, radiant finish tied the whole look together — elegant, happy,
            and full of that just-married glow.
          </p>
          <div className="mt-6 text-center">
            <Link
              href="https://people.com/chad-franke-utah-wedding-kamryn-anderson-photos-exclusive-11829229"
              target="_blank"
            >
              <Button
                className={`p-6 text-lg rounded-lg drop-shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 font-medium ${montserrat.className}`}
                style={{ backgroundColor: "#b91c1c" }}
              >
                See More!
              </Button>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0" style={{ maxWidth: "450px", padding: "0 10px" }}>
          <Image
            src="/portfolio-2/spotlight2.jpg"
            alt="Summer K Makeup Right"
            width={450}
            height={650}
            className="rounded-lg object-cover w-full h-auto shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Spotlight2;
