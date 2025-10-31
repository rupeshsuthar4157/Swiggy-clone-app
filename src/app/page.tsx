"use client";
import HeroSection from "./components/Header/MainSection";
import Slider from "./components/Header/Slider";
import SliderSecond from "./components/Header/SliderSecond";
import Card from "./components/Header/Card";
import Scan from "./components/Header/Scan";
import Text from "./components/Header/Text";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Header/Footer";
import "skeleton-image/dist/styles.css";
export default function Home() {
  return (
    <div>
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
