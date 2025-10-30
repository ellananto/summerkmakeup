"use client";
import HeroLanding from "@/components/home/hero";
import MeetSummer from "@/components/home/meet";
import PortfolioMini from "@/components/home/portfolio";
import Socials from "@/components/home/socials";
import { CarouselSize } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }
      `}</style>
      <div className="overflow-x-hidden">
        <HeroLanding />
        <MeetSummer />
        <PortfolioMini />
        <CarouselSize />
        <Socials />
      </div>
    </>
  );
}
