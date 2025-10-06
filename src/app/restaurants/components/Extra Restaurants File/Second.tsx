"use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { breakfastImag, BreakfastItemes } from "../../../data/Extra Restaurants "

const CardSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 440;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto mt-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#02060C]">
          Top restaurant chains in Bangalore
        </h2>

        <div className="flex gap-3 ">
          <ArrowLeft
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer hover:bg-[#c4c5c6] transition md:block hidden"
            size={38}
            onClick={() => scroll("left")}
          />
          <ArrowRight
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer hover:bg-[#c4c5c6] transition md:block hidden"
            size={38}
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* Scrollable row */}
      <div ref={sliderRef} className="flex gap-6 overflow-x-auto flex-nowrap scrollbar-hide pl-4">
        {breakfastImag.map((item: BreakfastItemes, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm min-w-[316px] flex-shrink-0 relative
                       overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out
                       hover:scale-95"
          >
            {/* Image */}
            <div className="relative overflow-x-hidden">
              <Image
                src={item.src}
                alt={item.name}
                height={300}
                width={500}
                className="w-full h-[180px] object-cover rounded-t-lg"
              />

              <div className="absolute top-8 left-2 text-white text-[16px] font-extrabold bg-opacity-50 px-2 py-1 rounded">
                {item.name}
              </div>
            </div>

            <div className="p-4">
              <p className="text-[16px] text-[black] font-bold">
                {item.description || "Asian • Burmese • Continental • Japanese"}
              </p>
              <div className="flex items-center gap-1 mt-1 text-sm text-[#161A1F] font-medium">
                <Star className="bg-[#1E943C] text-white rounded-full p-1" size={20} />
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
  );
};

export default CardSlider;
