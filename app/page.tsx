"use client";
import HeroLanding from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import MeetSummer from "@/components/home/meet";
import PortfolioMini from "@/components/home/portfolio";
import Socials from "@/components/home/socials";

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
        <Intro />
        <MeetSummer />
        <PortfolioMini />
        <Socials />
      </div>
    </>
  );
}
