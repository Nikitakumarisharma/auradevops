import Services from "@/components/service"
import OurProcess from "@/components/OurProcess";
import NewsLetter from "@/components/newsletter"

// import Movingcards from "@/components/movingcards";
const AboutPage = () => {
  return (
    <div className="mt-16">
      <Services />
      <OurProcess />
      <NewsLetter />
      {/* <Movingcards /> */}
    </div>
  );
};

export default AboutPage;
