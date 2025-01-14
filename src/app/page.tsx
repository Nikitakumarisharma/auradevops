import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/serivceCard"
import CompanyIntro from "@/components/CompanyIntro"
import OurProcess from "@/components/OurProcess";
import CustomService from "@/components/Customized"
import Feedback from "@/components/feedback"

export default function Home() {
  return (
    <main>
    <HeroSection />
    <ServiceCard />
    <CompanyIntro />
    <OurProcess />
    <CustomService />
    <Feedback />
    </main>
  );
}
