/* eslint-disable @next/next/no-img-element */
import { ArrowRightLeft, Star } from 'lucide-react';
import React from 'react';
import { breakfastImag, BreakfastItemes } from "../../../data/HeroExtra"
import Text from '../../../components/Header/Text'
import Footer from '../../../components/Header/Footer'

const HeroSection = () => {
  const text = "Restaurants with online food delivery in Bangalore";
  const words = text.split(" ");

  const categories = [
    "Filter",
    "Sort by",
    "Fast Delivery",
    "New on Swiggy",
    "Ratings 4.0+",
    "Pure Veg",
    "Offers",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];


  return (
    <>
      <section className="container mx-auto mt-16 px-4">
        <div className="flex flex-wrap gap-2 mb-6 text-[22px] font-bold text-black">
          {words.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2 text-sm font-black text-[#414449] border rounded-full shadow-[0_1px_3px_0_rgba(33,33,33,0.2)] cursor-pointer"
            >
              {item}
              {index < 2 && <ArrowRightLeft size={20} className="text-gray-600" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {breakfastImag.slice(0, 20).map((item: BreakfastItemes, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out hover:scale-95"
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />

                <div className="absolute top-35 left-2 text-white text-[16px] font-extrabold bg-opacity-50 px-2 py-1 rounded">
                  {item.name}
                </div>
              </div>

              <div className="p-4">
                <p className="text-[16px] text-black font-bold">
                  {item.description || "Asian • Burmese • Continental • Japanese"}
                </p>
                <div className="flex items-center gap-1 mt-1 text-sm text-[#161A1F] font-medium">
                  <Star
                    className="bg-[#1E943C] text-white rounded-full p-1 hover:bg-[#c4c5c6]"
                    size={20}
                  />
                  <span>{item.location || "Location not available"}</span>
                </div>
                <p className="text-[15px] text-[#9FA1A2] mt-2 font-medium">
                  {item.heading || item.description || "Asian • Burmese • Continental • Japanese"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Text />
      <Footer />
    </>
  );
};

export default HeroSection;
