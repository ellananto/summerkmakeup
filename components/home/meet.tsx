"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

function MeetSummer() {
  return (
    <div
      className={`${montserrat.className} flex flex-col lg:flex-row items-center justify-center py-16 lg:py-20 gap-8 overflow-x-hidden`}
      style={{ paddingLeft: "10px", paddingRight: "10px" }} // 10px space on each side
    >
      {/* Top image on mobile / left image on desktop */}
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src="/images/meet.jpg"
          alt="Summer Left"
          width={450}
          height={650}
          className="rounded-lg object-cover shadow-xl w-full h-auto"
        />
      </div>

      {/* Center text */}
      <div className="flex-1 w-full text-center px-2 sm:px-4">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-light py-4 flex flex-col tracking-wider items-center"
          style={{ fontFamily: "DarlineSerif, sans-serif" }}
        >
          Meet{" "}
          <span
            className="text-red-700 text-8xl sm:text-8xl lg:text-9xl pt-3 lg:pt-5"
            style={{
              display: "inline-block",
              fontFamily: "DarlineScript, sans-serif",
            }}
          >
            Summer.
          </span>
        </h2>
        <p className="text-center sm:text-lg text-gray-700 mt-4">
          Summer is a professional makeup artist with years of experience
          helping people feel{" "}
          <span className="text-red-700 font-bold">confident</span> in their own
          skin. She specializes in creating looks that enhance{" "}
          <span className="text-red-700 font-bold">natural</span> beauty and
          your unique{" "}
          <span className="text-red-700 font-bold">personality</span>. Whether
          it’s everyday makeup or special occasions, Summer has you covered.
        </p>
        <div className="text-center">
          <Link href="/contact">
            <Button
              className={`mt-6 p-6 text-lg text-center rounded-lg drop-shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 font-medium ${montserrat.className}`}
              style={{ backgroundColor: "#b91c1c" }}
            >
              Book With Summer!
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom image on mobile / right image on desktop */}
      <div className="flex-shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
        <Image
          src="/images/meet-right.jpg"
          alt="Summer Right"
          width={450}
          height={650}
          className="rounded-lg object-cover shadow-xl w-full h-auto"
        />
      </div>
    </div>
  );
}

export default MeetSummer;
