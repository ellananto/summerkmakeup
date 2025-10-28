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
    <div className="py-20">
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
        <h2
          className="mx-4 text-4xl sm:text-6xl lg:text-7xl text-red-700 mt-2 sm:mt-0"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Client Spotlight
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-red-700"></div>
      </div>
      <p
        className={`mt-4 sm:mt-6 text-center text-red-600 text-base sm:text-lg lg:text-xl font-light leading-relaxed ${montserrat.className}`}
      >
        We’re over the MOON to have Summer K Makeup featured in People Magazine
        Read below to see the perfect look for our bride&apos;s perfect day!
      </p>
      <div
        className={`${montserrat.className} flex flex-col lg:flex-row items-center justify-center px-10 sm:px-10 lg:px-10 py-10 lg:py-10 gap-8 overflow-x-hidden`}
      >
        {/* Top image on mobile / left image on desktop */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <Image
            src="/portfolio-2/spotlight1.jpg"
            alt="Summer Left"
            width={450}
            height={650}
            className="rounded-lg object-cover shadow-xl w-full h-auto"
          />
        </div>

        {/* Center text */}
        <div className="flex-1 w-full text-center lg:text-left px-2 sm:px-4">
          <h2
            className="text-4xl text-center sm:text-4xl lg:text-4xl text-black py-4 flex flex-col tracking-wider items-center lg:items-center"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            PEOPLE MAGAZINE PRESENTS
            <div className="text-center px-4">
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
          <div className="text-center">
            <Link
              href="/https://people.com/chad-franke-utah-wedding-kamryn-anderson-photos-exclusive-11829229"
              target="blank"
            >
              <Button
                className={`mt-6 p-6 text-lg text-center rounded-lg drop-shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 font-medium ${montserrat.className}`}
                style={{ backgroundColor: "#b91c1c" }}
              >
                See More!
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom image on mobile / right image on desktop */}
        <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
          <Image
            src="/portfolio-2/spotlight2.jpg"
            alt="Summer Right"
            width={450}
            height={650}
            className="rounded-lg object-cover shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Spotlight2;
