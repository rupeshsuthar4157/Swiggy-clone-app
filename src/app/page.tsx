import HeroSection from "./components/Header/MainSection";
import Slider from "./components/Header/Slider";
import SliderSecond from "./components/Header/SliderSecond";
import Card from "./components/Header/Card";
import Scan from "./components/Header/Scan";
import Text from "./components/Header/Text";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Header/Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Slider />
      <SliderSecond />
      <Card />
      <Scan />
      <Text />
      <Footer />
    </div>
  );
}
