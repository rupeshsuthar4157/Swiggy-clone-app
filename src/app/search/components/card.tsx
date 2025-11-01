"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { breakfastImages } from "../../data/breakfast"

const CardSearch = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  // Shuffle function
  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Run only once on mount
  useEffect(() => {
    setShuffledImages(shuffleArray(breakfastImages));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 160 : 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto px-4 mt-9 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl text-[#3E3C4A]">
          Populer on <span className="text-[#9F1E62]">Instamart</span>
        </h2>
        <div className="flex gap-2 sm:gap-3 ">
          <ArrowLeft
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer hover:bg-[#c4c5c6] md:block hidden"
            size={38}
            onClick={() => scroll("left")}
          />
          <ArrowRight
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer hover:bg-[#c4c5c6] md:block hidden "
            size={38}
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div
        ref={sliderRef}
        className="overflow-x-auto scrollbar-hide mt-5"
      >
        <div className="flex gap-4 sm:gap-6 flex-nowrap">
          {shuffledImages.map((imgSrc, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 items-center flex-shrink-0"
            >
              <Image
                src={imgSrc}
                alt={`Food item ${index + 1}`}
                width={300}
                height={500}
                className="w-[100px] sm:w-[120px] md:w-[160px] lg:w-[154px] h-auto rounded-lg object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSearch;

