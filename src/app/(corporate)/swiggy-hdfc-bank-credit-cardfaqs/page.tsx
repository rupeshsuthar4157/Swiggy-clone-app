import React from "react";
import HdfcNavbar from "./components/HdfcNavbar";
import HdfcHeroSection from "./components/HdfcHeroSection";
import Welcomebenefit from "./components/Welcomebenefit";
import CashbackText from "./components/CashbackText";
import Bonusbenefits from "./components/Bonusbenefits";
import KeyDetails from "./components/Keydetails";
import ScantheQRcode from "./components/ScantheQRcode";
import Frequentlyquestions from './components/Frequentlyquestions'

const page = () => {
  return (
    <div>
      <HdfcNavbar />
      <HdfcHeroSection />
      <Welcomebenefit />
      <CashbackText />
      <Bonusbenefits />
      <KeyDetails/>
      <ScantheQRcode/>
      <Frequentlyquestions/>
    </div>
  );
};

export default page;
