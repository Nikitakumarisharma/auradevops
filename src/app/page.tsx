import HeroSection from "@/components/HeroSection";
import Movingcards from "@/components/movingcards";
import ServiceCard from "@/components/serivceCard"
import CompanyIntro from "@/components/CompanyIntro"
import OurProcess from "@/components/OurProcess";
import CustomService from "@/components/Customized"

export default function Home() {
  return (
    <main>
    <HeroSection />
    <ServiceCard />
    <CompanyIntro />
    <OurProcess />
    <CustomService />
    <Movingcards />
    </main>
  );
}
