
import HeroLanding from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import MeetSummer from "@/components/home/meet";
import PortfolioMini from "@/components/home/portfolio";
import Socials from "@/components/home/socials";

export default function Home() {
  return (
    <div className="">
      {/* Hero Main */}
      <HeroLanding />
      <Intro />
      <MeetSummer />
      <PortfolioMini />
      <Socials />
    </div>
  );
}
