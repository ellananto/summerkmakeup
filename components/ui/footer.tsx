"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

export function Footer() {
  return (
    <div className="pt-20 lg:pt-24 bg-[#FFCCDD]"> {/* Pink background */}
      <footer className="relative bg-white"> {/* Footer also pink so wave sits on pink */}
        {/* Full-width Wave SVG on top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFCCDD" // wave is white
              fillOpacity="1"
              d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,186.7C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Footer content */}
        <div className="relative z-10 px-8 pt-40 pb-10 text-gray-800">
          <div className="grid grid-cols-2 pb-10">
            <div></div>
            <div className={`grid grid-cols-3 gap-8 ${montserrat.className}`}>
              <div className="text-center">
                <h3 className="font-bold mb-2">Navigation</h3>
                <ul>
                  <Link href="/"><li>Home</li></Link>
                  <Link href="/services"><li>Services</li></Link>
                  <Link href="/portfolio"><li>Portfolio</li></Link>
                  <Link href="/about"><li>About</li></Link>
                  <Link href="/contact"><li>Contact</li></Link>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Socials</h3>
                <ul>
                  <Link href="https://www.instagram.com/summerkmakeup/" ><li>Instagram</li></Link>
                  <Link href="https://www.facebook.com/summerkmakeup"><li>Facebook</li></Link>
                  <Link href="https://www.tiktok.com/@summerkmakeup"><li>Tik Tok</li></Link>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Privacy</h3>
                <ul>
                  <li>Privacy Policy</li>
                  <li>© 2025 SummerKMakeup</li>
                  <li>All rights reserved.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Center text */}
          <div className="flex justify-center pb-4 flex-col items-center space-y-2">
            <h1
              className={`text-8xl font-bold italic ${montserrat.className}`}
              style={{ color: "#FFADCA" }} // lighter pink text
            >
              summer k makeup
            </h1>
            <Link href="https://www.linkedin.com/in/ella-nanto/" target="blank" className="underline hover:text-pink-300">Website by Ella Nanto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
