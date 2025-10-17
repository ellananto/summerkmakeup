"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export function Footer() {
  return (
    <div className="max-w-full overflow-x-hidden pt-20 lg:pt-24 bg-[#FFCCDD]">
      <footer className="relative bg-white">
        {/* Full-width Wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFCCDD"
              fillOpacity="1"
              d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,186.7C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Footer content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-40 pb-10 text-gray-800 max-w-full overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {/* Navigation */}
            <div className={`${montserrat.className}`}>
              <h3
                className="text-3xl sm:text-5xl mb-5"
                style={{ fontFamily: "DarlineScript, sans-serif" }}
              >
                Navigation
              </h3>
              <ul className="space-y-2">
                <Link href="/"><li className="fh-items">Home</li></Link>
                <Link href="/services"><li className="fh-items">Services</li></Link>
                <Link href="/portfolio"><li className="fh-items">Portfolio</li></Link>
                <Link href="/about"><li className="fh-items">About</li></Link>
                <Link href="/contact"><li className="fh-items">Contact</li></Link>
              </ul>
            </div>

            {/* Socials */}
            <div className={`${montserrat.className}`}>
              <h3
                className="text-3xl sm:text-5xl mb-5"
                style={{ fontFamily: "DarlineScript, sans-serif" }}
              >
                Socials
              </h3>
              <ul className="space-y-2">
                <Link href="https://www.instagram.com/summerkmakeup/" target="_blank">
                  <li className="fh-items">Instagram</li>
                </Link>
                <Link href="https://www.tiktok.com/@sumshine7" target="_blank">
                  <li className="fh-items">Tik Tok</li>
                </Link>
              </ul>
            </div>

            {/* Privacy */}
            <div className={`${montserrat.className}`}>
              <h3
                className="text-4xl sm:text-5xl mb-5"
                style={{ fontFamily: "DarlineScript, sans-serif" }}
              >
                Privacy
              </h3>
              <ul className="space-y-2">
                <Link href="/privacy"><li className="fh-items">Privacy Policy</li></Link>
                <li>© 2025 Summer K Makeup</li>
                <li>All rights reserved.</li>
              </ul>
            </div>
          </div>

          {/* Center text */}
          <div className="flex flex-col items-center justify-center space-y-2 mt-12 text-center">
            <h1
              className={`text-4xl sm:text-6xl md:text-8xl font-bold italic ${montserrat.className} break-words`}
              style={{ color: "#FFADCA" }}
            >
              summer k makeup
            </h1>
            <Link
              href="https://www.linkedin.com/in/ella-nanto/"
              target="_blank"
              className="underline fh-items"
            >
              Website Created by Ella Nanto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
