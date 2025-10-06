"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Sidebar from "../../components/Sidebar";
import FAQfaqs from "../faqs/FAQfaqs";

const Page = () => {


  return (
    <>
      <Navbar />
      <div className="bg-[#37718E] ">
        <HeroSection />

        <div className="container mx-auto flex mt-23 bg-[#FFFFFF] text-[#02060C]">
          <Sidebar />
          <FAQfaqs />
        </div>
      </div>
    </>
  );
};

export default Page;
