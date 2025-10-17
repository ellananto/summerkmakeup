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
    <div className="flex flex-col md:flex-row w-full min-h-screen pt-0 md:pt-30">
      {/* Image Section */}
      <div className="flex flex-col items-center md:items-start md:mr-10 mt-20 md:mt-0">
        {/* Arrow image */}
        <Image
          src="/images/arrow2.jpg"
          alt="Arrow design"
          width={220}
          height={220}
          className="object-contain ml-0 md:ml-[5rem] max-w-[50%] sm:max-w-[150px] md:max-w-[220px]"
          priority
        />
        {/* Main about image */}
        <Image
          src="/images/about2.jpg"
          alt="Makeup session"
          width={400}
          height={400}
          className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out ml-0 md:ml-[10rem] max-w-[80%] sm:max-w-[300px] md:max-w-[400px]"
          priority
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start ml-0 md:ml-[5rem] mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row text-9xl text-white mb-15 items-center md:items-start">
          <h1
            className="mr-2 mt-3 text-6xl sm:text-6xl md:text-8xl"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Happy
          </h1>
          <h1
            className="text-red-700 text-6xl sm:text-6xl md:text-8xl mr-10"
            style={{ fontFamily: "DarlineSerif, sans-serif" }}
          >
            you&apos;re here!
          </h1>
          <div className="hidden md:block ml-auto -mr-20">
            <Image
              src="/images/swirl.jpg"
              alt="Arrow design"
              width={220}
              height={220}
              className="object-contain rotate-12"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-full md:max-w-3xl w-full px-10 md:px-0 md:ml-[5rem] flex justify-center md:justify-start">
          {/* Background Checkerboard */}
          <div className="absolute mt-15 right-0 md:-right-10 w-full md:w-[110%] h-full  pointer-events-none">
            <Image
              src="/images/8.jpg"
              alt="Checkerboard pattern"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>

          {/* Text Div */}
          <div className="relative bg-white border-2 border-black z-10 drop-shadow-2xl p-5 md:p-10 w-full sm:w-[90%] md:w-auto">
            <p className={`text-base md:text-lg mb-3 ${montserrat.className}`}>
              Hi, I’m Summer Kallunki!
            </p>
            <p className={`text-base md:text-lg ${montserrat.className}`}>
              I&apos;m a professional makeup artist from Utah.
              My goal as an artist is for my clients to feel effortlessly
              themselves. I adore making everyone that sits in my chair feel
              confident and beautiful! My love for others, excitement to meet
              new people, and joy for learning drives me and my work! I am passionate about collaborating with my clients to ensure satisfaction within a fun and safe environment. I can&apos;t wait to  meet you! {"<3"}
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex mt-20 md:mt-20 justify-center md:justify-start mb-20">
          <Image
            src="/images/cherries.jpg"
            alt="Arrow design"
            width={220}
            height={220}
            className="rotate-12 ml-0 md:-ml-20 max-w-[50%] sm:max-w-[150px] md:max-w-[220px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
