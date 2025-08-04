// components/HeroLanding.tsx
import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";
import { Button } from "../ui/button";

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function HeroLanding() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      {/* background */}
      <Image
        src="/images/makeup.png"
        alt="makeup-landing"
        fill
        priority
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center 60%" }}
        className="z-0"
      />

      {/* foreground content goes here */}
      <div className="relative z-10 text-center text-white">
        <h1 className={`text-7xl font-bold ${luckiest.className}`}>SUMMERKMAKEUP</h1>
        <p className="mt-2 text-2xl">Makeup that fits you, for you.</p>
        <Button className="p-7 m-5 text-lg rounded-lg drop-shadow-md cursor-pointer">Start Now</Button>
      </div>

      {/* optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-5 pointer-events-none" />
    </div>
  );
}

export default HeroLanding;
