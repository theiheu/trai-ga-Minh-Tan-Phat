import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Statistic from "./components/Statistic/Statistic";
import { CarouselDefault } from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <CarouselDefault />
      <Hero />
      <Statistic />
      <Services />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
