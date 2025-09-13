"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Button } from "../ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

function Intro() {
  return (
    <div
      className={`${montserrat.className} flex flex-col lg:flex-row items-center justify-center px-10 py-20 gap-8`}
    >
      {/* Left image */}
      <div className="flex-shrink-0">
        <Image
          src="/images/meet.jpg"
          alt="Summer Left"
          width={450}
          height={650}
          className="rounded-lg object-cover shadow-xl"
        />
      </div>

      {/* Center text */}
      <div className="flex-1 text-center px-4">
        <h2 className="text-5xl font-light py-5">
          Meet{" "}
          <span className="text-red-700 text-8xl" style={{ display: "inline-block" }}>
            Summer.
          </span>
        </h2>
        <p className="text-lg text-gray-700">
          Summer is a professional makeup artist with years of experience
          helping people feel{" "}
          <span className="text-red-700 font-bold">confident</span> in their own
          skin. She specializes in creating looks that enhance{" "}
          <span className="text-red-700 font-bold">natural</span> beauty and
          your <span className="text-red-700 font-bold">personality</span>.
          Whether it’s everyday makeup or special occasions, Summer has you
          covered.
        </p>
        <Button className={`mt-6 p-6 text-lg rounded-lg drop-shadow-md cursor-pointer pinkButton font-medium ${montserrat.className}`} style={{ backgroundColor: "#b91c1c" }}>
          Book Your Look
        </Button>
      </div>

      {/* Right image */}
      <div className="flex-shrink-0">
        <Image
          src="/images/meet-right.jpg"
          alt="Summer Right"
          width={450}
          height={650}
          className="rounded-lg object-cover shadow-xl"
        />
      </div>

      {/* Animation for SUMMER */}
      <style jsx>{`
        span {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}

export default Intro;
