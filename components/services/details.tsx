"use client";
import { Montserrat } from "next/font/google";
import { BookHeart } from "lucide-react";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Details() {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-x-visible">
      {/* Right side image */}
      <div className="w-full md:w-1/2 flex flex-col bg-gray-100 border-b-2 border-black order-1 md:order-2 px-4 sm:px-8">
        <div className="flex-grow flex flex-col justify-center items-center min-h-[600px] md:h-full">
          <h2
            className="text-6xl sm:text-8xl sm:pt-4 md:pt-4 text-red-700 text-center mb-8"
            style={{ fontFamily: "DarlineScript, sans-serif" }}
          >
            Details
          </h2>
          <div className="w-[325px] sm:w-[375px] md:w-[350px] max-w-full">
            <Image
              src="/collage/shoot3.jpg"
              alt="Static Right"
              width={400}
              height={400}
              className="object-cover w-full h-auto border-2 border-black"
              priority
            />
          </div>
        </div>
      </div>

      {/* Left side content */}
      <div
        className={`${montserrat.className} w-full md:w-1/2 flex flex-col border-r-0 md:border-r-2 border-black order-2 md:order-1`}
      >
        {/* This ensures the left side matches the right’s height */}
        <div className="flex flex-col justify-between h-full min-h-[600px] md:min-h-full">
          <section className="flex-1 flex flex-col justify-center bg-red-700 border-b-2 border-black text-white p-8">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-wider mb-4"
              style={{ fontFamily: "DarlineSerif, sans-serif" }}
            >
              Required Policies
            </h1>
            <p className="pb-5 text-base sm:text-lg">
              The following policies help maintain a professional and
              stress-free experience for everyone! They ensure that appointments
              run smoothly and expectations are clear.
            </p>
            <ul className="text-base sm:text-lg">
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                To secure a date and/or time, deposits are non-refundable.
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                There is an early riser fee for appointments before 8 AM —
                message for details!
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                The final payment and deposits need to come from one source.
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                The final balance is due on the day of the event, before
                departure.
              </li>
            </ul>
          </section>

          <section className="flex-1 flex flex-col justify-center bg-white text-red-700 border-b-2 border-black p-8">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-wider mb-4"
              style={{ fontFamily: "DarlineSerif, sans-serif" }}
            >
              Location
            </h1>
            <p className="pb-5 text-base sm:text-lg">
              For the location of your makeup service, I offer two options:
            </p>
            <ul className="text-base sm:text-lg">
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                My studio is available in Pleasant Grove, UT — the address will
                be sent upon appointment booking.
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Travel cost is calculated at $1 per mile starting from Provo,
                UT.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
