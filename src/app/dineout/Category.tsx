"use client";
import React, { useState, useEffect } from "react";
import { Search, ArrowRightLeft } from "lucide-react";

const categories = [
  "Filter",
  "Sort by",
  "Book a Table",
  "Within 5km",
  "Rating 4+",
  "Pure Veg",
  "Serves Alcohol",
];

const Category = () => {
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 120) {
        setShowCategory(true);
      } else {
        setShowCategory(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="category"
      className={`w-full bg-white shadow-sm transition-all duration-300 ${
        showCategory
          ? "sticky top-0 z-40 opacity-100"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-3 px-4">
        {/* Categories Row */}
        <div className="flex flex-wrap gap-2">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs sm:text-sm font-semibold text-[#414449] border rounded-full shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
            >
              {item}
              {index < 2 && (
                <ArrowRightLeft size={16} className="text-gray-600" />
              )}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <div className="relative w-full sm:w-[300px] md:w-[400px]">
            <input
              type="text"
              placeholder="Search for restaurant and food"
              className="w-full pl-4 pr-10 py-2 sm:py-2.5 text-xs sm:text-sm md:text-[14px] text-[#85878C] placeholder:text-gray-400 rounded-xl bg-[#F0F0F5] outline-none font-semibold transition-all duration-300"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
