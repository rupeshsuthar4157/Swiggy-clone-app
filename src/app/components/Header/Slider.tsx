"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";

// Import data
import { breakfastImages, breakfastImagesDuplicate } from "../../data/breakfast";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 440;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#02060C]">
          Order our best food options
        </h2>
        <div className="flex gap-3 sm:gap-4 ">
          <ArrowLeft
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer md:block hidden"
            size={36}
            onClick={() => scroll("left")}
          />
          <ArrowRight
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer md:block hidden"
            size={36}
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="overflow-x-auto scrollbar-hide mt-5">
        <div className="flex gap-4 sm:gap-6 flex-nowrap">
          {breakfastImages.map((imgSrc, index) => (
            <div key={index} className="flex flex-col gap-2 sm:gap-4 flex-shrink-0">
              <Image
                src={imgSrc}
                alt={`Food item ${index + 1}`}
                width={180}
                height={180}
                className="w-[100px] sm:w-[100px] md:w-[160px] lg:w-[180px] h-auto rounded-lg object-cover"
              />
              <Image
                src={breakfastImagesDuplicate[index]}
                alt={`Food item ${index + 1} duplicate`}
                width={180}
                height={180}
                className="w-[100px] sm:w-[100px] md:w-[160px] lg:w-[180px] h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
