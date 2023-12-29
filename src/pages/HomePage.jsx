import { CarouselDefault } from "../components/Carousel/Carousel";
import Infrastructure from "../components/Infrastructure/Infrastructure";
import Establish from "../components/Establish/Establish";
import Hero from "../components/Hero/Hero";
import Statistic from "../components/Statistic/Statistic";
import Services from "../components/Services/Services";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <CarouselDefault />
      <Infrastructure />
      <Establish />
      <Hero />
      <Statistic />
      <Services />
      <Blogs />
      <Contact />
    </>
  );
};

export default HomePage;
