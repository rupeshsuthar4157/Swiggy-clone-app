import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Sidebar from "../../components/Sidebar";
import FAQ from "../irctc_faq/FAQ"


const Page = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-[#37718E]">
        <HeroSection/>
        <div className="container mx-auto flex mt-23 bg-[#FFFFFF] text-[#02060C]">
          <Sidebar />
          <FAQ/>
        </div>
      </div>
    </>
  );
};

export default Page;
