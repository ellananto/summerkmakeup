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
    <div className="flex flex-col md:flex-row w-full h-auto">
      {/* Right side image (mobile first) */}
      <div className="w-full md:w-1/2 h-auto md:h-screen md:sticky md:top-0 flex flex-col justify-center items-center bg-gray-100 border-b-2 border-black order-1 md:order-2 px-4 sm:px-8">
        <h2
          className="text-6xl sm:text-8xl text-red-700 text-center pt-10 pb-4"
          style={{ fontFamily: "DarlineScript, sans-serif" }}
        >
          Details
        </h2>
        <Image
          src="/collage/shoot3.jpg"
          alt="Static Right"
          width={400}
          height={400}
          className="mb-10 mt-5 w-full max-w-md object-cover"
        />
      </div>

      {/* Left side content (Policies, Fees, Location) */}
      <div
        className={`${montserrat.className} w-full md:w-1/2 border-r-0 md:border-r-2 border-black order-2 md:order-1`}
      >
        {/* Required Policies */}
        <section className="h-auto flex flex-col text-left bg-red-700 border-b-2 border-black text-white">
          <div className="mx-6 sm:mx-10 mb-10">
            <h1
              className="text-4xl sm:text-5xl md:text-5xl py-5 font-bold tracking-wider"
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
                The final payment and deposits need to come from one source.
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                The final balance is due on the day of the event, before
                departure.
              </li>
            </ul>
          </div>
        </section>

        {/* Early Riser Fee */}
        <section className="h-auto flex flex-col text-left bg-white border-b-2 border-black text-red-700">
          <div className="mx-6 sm:mx-10 mb-10">
            <h1
              className="text-4xl sm:text-5xl md:text-5xl py-5 font-bold tracking-wider"
              style={{ fontFamily: "DarlineSerif, sans-serif" }}
            >
              Early Riser Fee
            </h1>
            <p className="pb-5 text-base sm:text-lg">
              An early riser fee applies for appointments scheduled before
              standard business hours. This helps accommodate early starts while
              fairly compensating for the added time and preparation.
            </p>
            <ul className="text-base sm:text-lg">
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Travel or start before or at 8 AM is an additional $20
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Travel or start before or at 6 AM is an additional $40
              </li>
            </ul>
          </div>
        </section>

        {/* Location */}
        <section className="h-auto flex flex-col text-left bg-red-700 text-white border-b-2 border-black">
          <div className="mx-6 sm:mx-10 mb-10">
            <h1
              className="text-4xl sm:text-5xl md:text-5xl py-5 font-bold tracking-wider"
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
                My studio is available in Pleasant Grove, UT—the address will be
                sent upon appointment booking.
              </li>
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                Travel cost is calculated at $1 per mile starting from Provo,
                UT.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
