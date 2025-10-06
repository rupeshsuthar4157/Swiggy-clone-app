


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const categoryElement = document.getElementById("category");
      if (!categoryElement) return;

      const categoryTop = categoryElement.getBoundingClientRect().top;

      if (categoryTop <= 123) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50 transition-transform duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link href="/restaurants">
            <Image
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
              alt="swiggy-logo"
              width={150}
              height={60}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Location Setup */}
          <div className="hidden md:flex items-center gap-1">
            <svg
              width="23"
              height="22"
              viewBox="0 0 16 17"
              fill="#FF5200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.1828 1.84246C13.7623 0.516285 15.0521 -0.146802 15.6759 0.448004C16.2997 1.04281 15.6986 2.36264 14.4965 5.00231L11.0318 12.6101C9.78188 15.3547 9.15692 16.727 8.28744 16.6338C7.41796 16.5407 7.09629 15.0596 6.45294 12.0973C6.29606 11.375 6.21761 11.0138 5.97533 10.7649C5.73305 10.5161 5.37563 10.4285 4.6608 10.2532L4.29783 10.1642C1.65419 9.51589 0.332363 9.19175 0.234059 8.35677C0.135754 7.52179 1.34615 6.89952 3.76695 5.65497L11.1828 1.84246Z"></path>
            </svg>
            <p className="hidden md:block text-[#414449] font-bold text-sm md:text-base">
              Setup your precise location
            </p>
          </div>
        </div>

        {/* Search & User */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-[200px] sm:w-[400px] md:w-[600px] lg:w-[700px] pl-4 pr-10 py-2 sm:py-3 md:py-4 text-[13px] md:text-[14px] text-[#85878C] placeholder:text-gray-400 rounded-xl bg-[#F0F0F5] outline-none font-semibold transition-all duration-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Link href="/">
            <button className="bg-[#43464A] rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer hover:scale-105 transition-transform duration-200">
              <User className="text-white" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

