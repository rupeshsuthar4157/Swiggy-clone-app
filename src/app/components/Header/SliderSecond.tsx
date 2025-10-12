"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { breakfastImages, BreakfastItem } from "../../data/shop";

const SliderSecond = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateScrollButtons(); // Initial check
    slider.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      slider.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <section className="container mx-auto mt-34 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#02060C]">
          Shop groceries on Instamart
        </h2>

        <div className="flex gap-3 sm:gap-4">
          {/* Left Arrow */}
          <ArrowLeft
            size={36}
            onClick={() => canScrollLeft && scroll("left")}
            className={`p-2 rounded-full cursor-pointer md:block hidden transition-all duration-200 ${
              canScrollLeft
                ? "bg-[#D9DADB] text-[#23262B] hover:bg-[#c7c9cb]"
                : "bg-[#b4b4b4] text-[#6b6b6b] cursor-not-allowed"
            }`}
          />
          {/* Right Arrow */}
          <ArrowRight
            size={36}
            onClick={() => canScrollRight && scroll("right")}
            className={`p-2 rounded-full cursor-pointer md:block hidden transition-all duration-200 ${
              canScrollRight
                ? "bg-[#D9DADB] text-[#23262B] hover:bg-[#c7c9cb]"
                : "bg-[#b4b4b4] text-[#6b6b6b] cursor-not-allowed"
            }`}
          />
        </div>
      </div>

      {/* Slider Section */}
      <div
        ref={sliderRef}
        className="overflow-x-auto scrollbar-hide mt-5 scroll-smooth"
      >
        <div className="flex gap-4 sm:gap-6 flex-nowrap">
          {breakfastImages.map((item: BreakfastItem, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 flex-shrink-0"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={400}
                height={400}
                className="w-[100px] sm:w-[100px] md:w-[160px] lg:w-[180px] h-auto rounded-lg object-cover select-none pointer-events-none"
              />
              <p className="font-medium sm:font-semibold text-sm sm:text-base md:text-lg text-[rgba(2,6,12,0.75)] text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSecond;
