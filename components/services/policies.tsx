import { BookHeart } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export default function Policies() {
  return (
    <div className={`mt-30 ${montserrat.className}`}>
      <div className="text-left mb-12 ml-15">
        <h1 className="text-7xl font-light text-pink-600">Policies</h1>

        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            <span className="font-bold text-black">Early Risers Fee:</span>{" "}
            travel or start before or at 8 AM is an addition $20, and $40 before
            or at 6 AM.
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            <span className="font-bold text-black">Touch Ups:</span> available
            upon request, charged at $25 per hour based on the duration beyond
            the ending time or completion of makeup.
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            <span className="font-bold text-black">Location: </span>
            my studio is available in Pleasant Grove, UT, or travel cost is
            calculated at $1 per mile starting from Provo, UT.
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            Final payment and deposits need to come from one source.
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            The final balance is due on the day of the event, before departure.
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <span className="pt-2" style={{ color: "#FF99BD" }}>
            <BookHeart />
          </span>
          <p className="text-gray-600 mt-2 ml-2">
            To secure a date and time, deposits are non-refundable.
          </p>
        </div>
      </div>
    </div>
  );
}
