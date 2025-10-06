import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Sidebar from "../../components/Sidebar";
import FAQlabel from "../legal/FAQlebal";


const Page = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-[#37718E]">
        <HeroSection/>
        <div className="container mx-auto flex mt-23 bg-[#FFFFFF] text-[#02060C]">
          <Sidebar />
          <FAQlabel/>
        </div>
      </div>
    </>
  );
};

export default Page;
