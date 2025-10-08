"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { breakfastImag, BreakfastItemes } from "../data/Carddenecout";

const Card = () => {
  const [imageIndexes, setImageIndexes] = useState(
    breakfastImag.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % breakfastImag[i].src.length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto mt-10 px-4 cursor-pointer">
      <h2 className="font-bold text-2xl text-[#02060C] mb-6">
        Discover best restaurants on Dineout
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {breakfastImag.map((item: BreakfastItemes, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm flex-shrink-0"
          >
            <div className="relative w-full h-52 rounded-t-lg overflow-hidden">

              <img
                src={item.src[imageIndexes[index]]}
                alt={item.name}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />


              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white font-semibold text-lg flex justify-between items-center">
                  <span>{item.name}</span>
                  <span className="flex items-center gap-1">
                    <Star
                      className="bg-[#1E943C] text-white rounded-full p-1"
                      size={20}
                    />
                    <p className="text-sm">{item.rating || 0}</p>
                  </span>
                </h3>
              </div>
            </div>

            <div className="p-4 space-y-2">
              {/* Your existing content */}
              <p className="text-[12px] font-bold text-[#6D7073] flex justify-between">
                <span>
                  {item.description ||
                    "Asian • Burmese • Continental • Japanese"}
                </span>
                <span>{item.income}</span>
              </p>

              <p className="text-[12px] font-bold text-[#6D7073] flex justify-between">
                <span>{item.location || "Location not available"}</span>
                <span>{item.kg}</span>
              </p>

              <div className="flex items-center gap-2 bg-[#F0F0F5] rounded-2xl px-2 py-1 w-fit">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />

                <p className="text-sm text-[#6d7073]">Table booking</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1BA672] rounded-2xl px-4 py-2 text-white shadow-md">
                <p className="font-medium">{item.box}</p>
                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
                    alt="Offer"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain "
                  />
                  <p className="text-sm font-medium ">
                    Flat 20% off on pre-booking
                  </p>
                </div>
                <p className="text-sm font-semibold">+ 4 more</p>
              </div>

              <div className="flex items-center justify-between bg-[#C8F9E5] rounded-2xl px-4 py-2 shadow-md">
                <p className="font-medium">{item.box2}</p>
                <p className="text-sm text-[#1EA874] font-medium">
                  Up to 10% off with bank offers
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
