
import HeroLanding from "@/components/home/hero";
import { DemoLTR } from "@/components/home/demo";
import MeetSummer from "@/components/home/meet";
import PortfolioMini from "@/components/home/portfolio";
import Socials from "@/components/home/socials";

export default function Home() {
  return (
    <div className="">
      {/* Hero Main */}
      <HeroLanding />
      <DemoLTR />
      <MeetSummer />
      <PortfolioMini />
      <Socials />
    </div>
  );
}
