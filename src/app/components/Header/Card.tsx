"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

import { breakfastImag, BreakfastItemes } from "../../data/restaurants";

const Card = () => {
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
    <section className="container mx-auto mt-33 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl text-[#02060C]">
          Discover best restaurants on Dineout
        </h2>
        <div className="flex gap-4 md:flex ">
          <ArrowLeft
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer md:block hidden"
            size={38}
            onClick={() => scroll("left")}
          />
          <ArrowRight
            className="bg-[#D9DADB] text-[#23262B] p-2 rounded-full cursor-pointer md:block hidden"
            size={38}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
      <div ref={sliderRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 flex-nowrap">
          {breakfastImag.map((item: BreakfastItemes, index: number) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-lg shadow-sm min-w-[316px] flex-shrink-0 relative"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={500}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />

              <div className="absolute bottom-20 left-2 font-extrabold text-white px-2 py-1 rounded">
                {item.name}
              </div>

              <div className="p-4">
                <p className="text-sm text-[#6D7073] font-medium">
                  {item.description || "Asian • Burmese • Continental • Japanese"}
                </p>
                <p className="text-sm text-[#6D7073] font-medium">
                  Location: {item.location || "Location not available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;