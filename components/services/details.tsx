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
    <div className="flex w-full min-h-screen">
      {/* Left side (scrolling) */}
      <div className={`${montserrat.className} w-1/2`}>
        <section className="h-[70h] flex flex-col text-left bg-red-700 border-b-2 border-black text-white">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl py-5 font-bold ">Required Policies</h1>
            <p className="pb-5 text-lg">
              The following policies helps maintain a professional and
              stress-free experience for everyone! They ensure that appointments
              run smoothly and expectations are clear.
            </p>
            <ul className="text-lg">
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
        {/* ...other sections stay the same */}
        <section className="h-[70h] flex flex-col text-left bg-white border-b-2 border-black text-red-700">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl py-5 font-bold ">Early Riser Fee</h1>
            <p className="pb-5 text-lg">
              An early riser fee applies for appointments scheduled before
              standard business hours. This helps accommodate early starts while
              fairly compensating for the added time and preparation
            </p>
            <ul className="text-lg">
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
        <section className="h-[70h] flex flex-col text-left bg-red-700 text-white">
          <div className="mx-10 mb-10">
            <h1 className="text-4xl py-5 font-bold ">Location</h1>
            <p className="pb-5 text-lg">
              For the location of your makeup service, I offer two options:
            </p>
            <ul className="text-lg">
              <li className="mb-2 flex items-center gap-2">
                <BookHeart />
                My studio is available in Pleasant Grove, UT- the address will
                be sent upon appointment booking.
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

      {/* Right side (pinned/static) */}
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center items-center bg-gray-100">
        <h2
          className={`${montserrat.className} text-5xl text-red-700 font-bold italic text-center pt-20`}
        >
          DETAILS
        </h2>
        <Image
          src="/collage/shoot3.jpg"
          alt="Static Right"
          width={400}
          height={400}
          className="mb-10 mt-5"
        />
      </div>
    </div>
  );
}
