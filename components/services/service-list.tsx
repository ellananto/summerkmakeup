"use client";
import { Montserrat } from "next/font/google";
import { BookHeart, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function ServiceList() {
  const [showBridal, setShowBridal] = useState(true);
  const [showWedding, setShowWedding] = useState(false);

  return (
    <div className="flex w-full min-h-screen">
      {/* Left side (pinned/static) */}
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center items-center bg-gray-100">
        <h2
          className={`${montserrat.className} text-5xl text-red-700 font-bold italic text-center pt-20`}
        >
          PRICING
        </h2>
        <Image
          src="/collage/shoot1.jpg"
          alt="Static Left"
          width={400}
          height={400}
          className="mb-10 mt-5"
        />
      </div>

      {/* Right side (scrolling) */}
      <div className={`${montserrat.className} w-1/2`}>
        {/* Events */}
        <section className="h-[70h] flex flex-col text-left bg-red-700 border-b-2 border-black text-white">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl py-5 font-bold text-center">Events</h1>
            <h1 className="text-2xl py-5 font-bold ">
              General Event Makeup - $125
            </h1>
            <ul className="text-lg">
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Includes skin prep and lashes
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Travel available upon request
              </li>
            </ul>
          </div>
        </section>

        {/* Bridal Pricing */}
        <section className="h-auto flex flex-col text-left bg-white text-red-700">
          <div className="mx-10 mb-10">
            <button
              onClick={() => setShowBridal(!showBridal)}
              className="w-full flex justify-between items-center py-5"
            >
              <h1 className="text-4xl font-bold text-center w-full">Bridal</h1>
              {showBridal ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showBridal && (
              <div className="transition-all duration-300 ease-in-out">
                <div>
                  <h1 className="text-2xl py-5 font-bold ">
                    Wedding Day - $140
                  </h1>
                  <ul className=" text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes a 1-1.5 hour service
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $50 deposit
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-2xl py-5 font-bold ">
                    Wedding Day & Trial - $270
                  </h1>
                  <ul className=" text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes a 1-1.5 hour service
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $100 deposit
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-2xl py-5 font-bold ">
                    Additional Bridal Sessions - $135
                  </h1>
                  <ul className=" text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes a 1-1.5 hour service
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $50 deposit
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Wedding Party Pricing */}
        <section className="h-auto flex flex-col text-left bg-white border-b-2 border-black text-red-700">
          <div className="mx-10 mb-10">
            <button
              onClick={() => setShowWedding(!showWedding)}
              className="w-full flex justify-between items-center py-5"
            >
              <h1 className="text-4xl font-bold text-center w-full">
                Wedding Party
              </h1>
              {showWedding ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showWedding && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="text-left">
                  <h1 className="text-2xl py-5 font-bold ">
                    Bridal Party - $110
                  </h1>
                  <ul className="text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes 2 makeup services
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $100 deposit
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl py-5 font-bold ">
                    Junior Bridesmaid - $65
                  </h1>
                  <ul className="text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes 2 makeup services
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $100 deposit
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl py-5 font-bold ">
                    Flower Girl - $20
                  </h1>
                  <ul className="text-lg">
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Includes 2 makeup services
                    </li>
                    <li className="mb-2 flex items-center gap-2">
                      <BookHeart />
                      Requires a $100 deposit
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Commercial */}
        <section className="h-[70h] flex flex-col bg-red-700 text-white border-b-2 border-black">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl font-bold py-5 text-center">Commercial</h1>
            <div className="text-left">
              <h1 className="text-2xl py-5 font-semibold">Commercial Makeup</h1>
              <ul className=" text-lg">
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Rate is project dependent
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Web and social use is included
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Custom quotes are available for larger campaigns or extended
                  usage
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="h-[70h] flex flex-col bg-white text-red-700">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl font-bold py-5 text-center">Lessons</h1>
            <div className="text-left">
              <h1 className="text-2xl py-5 font-semibold">
                One on One Lessons - $175
              </h1>
              <ul className=" text-lg">
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Perfect for beginners or anyone wanting to refine their skills
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Hands-on practice with step-by-step instruction
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <BookHeart />
                  Opportunity to ask questions and get feedback in real time
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
