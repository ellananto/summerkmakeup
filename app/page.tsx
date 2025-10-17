"use client";
import HeroLanding from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import MeetSummer from "@/components/home/meet";
import PortfolioMini from "@/components/home/portfolio";
import Socials from "@/components/home/socials";
// import Testimonial from "@/components/home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroLanding />
      <Intro />
      <MeetSummer />
      <PortfolioMini />
      {/* <Testimonial /> */}
      <Socials />
    </div>
  );
}
