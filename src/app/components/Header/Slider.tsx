"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { breakfastImages, breakfastImagesDuplicate } from "../../data/breakfast";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 440;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    checkScroll(); // Initial check
    slider.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <section className="container mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#02060C]">
          Order our best food options
        </h2>
        <div className="flex gap-3 sm:gap-4">
          {/* Left Arrow */}
          <ArrowLeft
            size={38}
            onClick={() => canScrollLeft && scroll("left")}
            className={`p-2 rounded-full cursor-pointer md:block hidden transition-all duration-200 ${
              canScrollLeft
                ? "bg-[#D9DADB] text-[#23262B] hover:bg-[#c7c9cb]"
                : "bg-[#b4b4b4] text-[#6b6b6b] cursor-not-allowed"
            }`}
          />
          {/* Right Arrow */}
          <ArrowRight
            size={38}
            onClick={() => canScrollRight && scroll("right")}
            className={`p-2 rounded-full cursor-pointer md:block hidden transition-all duration-200 ${
              canScrollRight
                ? "bg-[#D9DADB] text-[#23262B] hover:bg-[#c7c9cb]"
                : "bg-[#b4b4b4] text-[#6b6b6b] cursor-not-allowed"
            }`}
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
                className="w-[100px] sm:w-[100px] md:w-[160px] lg:w-[180px] h-auto rounded-lg object-cover select-none pointer-events-none"
              />
              <Image
                src={breakfastImagesDuplicate[index]}
                alt={`Food item ${index + 1} duplicate`}
                width={180}
                height={180}
                className="w-[100px] sm:w-[100px] md:w-[160px] lg:w-[180px] h-auto rounded-lg object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
