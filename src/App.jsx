import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Statistic from "./components/Statistic/Statistic";
import { CarouselDefault } from "./components/Carousel/Carousel";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Establish from "./components/Establish/Establish";
import { SpeedDialWithTextOutside as SpeedDial } from "./components/SpeedDial/SpeedDial";

function App() {
  return (
    <>
      <Header />
      <CarouselDefault />
      <Infrastructure />
      <Establish />
      <Hero />
      <Statistic />
      <Services />
      <Blogs />
      <Contact />
      <Footer />

      <SpeedDial />
    </>
  );
}

export default App;
