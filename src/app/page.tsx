import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/serivceCard"
import CompanyIntro from "@/components/CompanyIntro"
import OurProcess from "@/components/OurProcess";
import CustomService from "@/components/service"
import NewsLetter from "@/components/newsletter"
import Feedback from "@/components/feedback"
import Message from "@/components/malik"

export default function Home() {
  return (
    <main>
    <HeroSection />
    <ServiceCard />
    <CompanyIntro />
    <CustomService />
    <OurProcess />
    <NewsLetter />
    <Message />
    {/* <Feedback /> */}
    </main>
  );
}
