"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  User,
  ShoppingCart,
  LifeBuoy,
  GalleryVerticalEnd,
  BadgePercent,
  Crosshair,
  ClockAlert,
  X,
  ArrowUpRight,
} from "lucide-react";
import Slidebar2 from "./components/Extra Restaurants File/FistScrollBaar";
import CardSlider from "./components/Extra Restaurants File/Second";
import HeroSection from "./components/Extra Restaurants File/HeroSection";
import { usePathname } from "next/navigation";
import SignupLoginForm from "@/app/components/Header/SignUAndLoginForm";

const Page = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // left sidebar
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false); // right sidebar
  const [isCreateAccount, setIsCreateAccount] = useState(false); // for sign in/create account toggle

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-28 px-4">
        <div className="flex flex-col items-center justify-center h-[50vh] bg-[#1B1E24] text-white rounded-lg mb-4">
          <div className="animate-spin mb-4">
            <svg
              className="h-12 w-12 text-pink-500"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="32,60 24,36 40,36" className="fill-yellow-400" />
              <circle cx="32" cy="24" r="16" className="fill-pink-500" />
              <path
                d="M16 24c0 8 32 8 32 0s-16-12-16-12-16 4-16 12z"
                className="fill-brown-600"
              />
            </svg>
          </div>
          <p className="text-lg">Looking for great food near you...</p>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen relative">
      {/* Navbar */}
      <header className="w-full shadow-sm bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logosearch.jpg"
                alt="Logo"
                height={400}
                width={300}
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>
            <div
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center cursor-pointer text-gray-600 max-w-[250px] truncate gap-2 group"
            >
              <div className="group inline-block">
                <p className="text-[15px] font-semibold text-black group-hover:text-[#FF5504]">
                  Domlur
                </p>
                <div className="mt-1 w-8 h-0.5 bg-black group-hover:bg-[#FF5504]" />
              </div>
              <span className="text-sm text-[#808285] truncate group-hover:opacity-50">
                No.3275/A, 12th Main Rd, HAL 2nd St...
              </span>
              <ChevronDown className="ml-1 shrink-0 text-orange-500 group-hover:opacity-70" />
            </div>
          </div>

          <nav className="flex items-center flex-wrap gap-6 text-[16px] font-bold">
            <Link href="corporate">
              <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                <GalleryVerticalEnd size={20} /> Swiggy Corporate
              </button>
            </Link>
            <Link href="search">
              <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                <Search size={20} /> Search
              </button>
            </Link>
            <Link href="dineout">
              <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 relative cursor-pointer">
                <BadgePercent size={20} />
                Offers
                <span className="absolute -top-2 right-0 text-[#FFA700] text-[10px] font-semibold cursor-pointer">
                  NEW
                </span>
              </button>
            </Link>
            <Link href="support">
              <button
                className={`flex items-center gap-2 cursor-pointer ${
                  pathname === "/support"
                    ? "text-[red] hover:text-[black]"
                    : "text-[#1B1E24] hover:text-orange-500"
                }`}
              >
                <LifeBuoy size={20} /> Help
              </button>
            </Link>

            <button
              onClick={() => setIsRightSidebarOpen(true)}
              className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer"
            >
              <User size={20} /> Sign In
            </button>
            <Link href="checkout">
              <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                <ShoppingCart size={20} /> Cart
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Left Sidebar */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="mt-3 text-[#1B1E24] cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-6 flex flex-col gap-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for area, street name.."
              className="w-full pl-10 text-[#BBBBBD] pr-4 py-3 border border-[#FFFFFF] shadow-sm focus:outline-none"
            />
          </div>
          <div className="w-full py-4 px-4 border cursor-pointer hover:bg-gray-50 flex items-center gap-4">
            <Crosshair className="text-black" size={20} />
            <div>
              <p className="text-black font-bold hover:text-orange-500">
                Get current location
              </p>
              <p className="text-gray-500 text-sm">Using GPS</p>
            </div>
          </div>
          <div className="w-full py-4 px-4 border rounded cursor-pointer hover:bg-gray-50 flex gap-4">
            <ClockAlert className="text-black mt-1" size={20} />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs mb-1">RECENT SEARCHES</p>
              <p className="text-black font-bold hover:text-orange-500">
                Get current location
              </p>
              <p className="text-gray-500 text-xs">
                12th Main Road, HAL 2nd Stage, Ward 72, Domlur, Bengaluru
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Sidebar — uses SignupLoginForm */}
      {(isRightSidebarOpen) && (
        <div
          onClick={() => {
            setIsRightSidebarOpen(false);
            setIsCreateAccount(false);
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-start p-4">
          <button
            onClick={() => {
              setIsRightSidebarOpen(false);
              setIsCreateAccount(false);
            }}
            className="text-[#353843] cursor-pointer mt-3 ml-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* ✅ Imported SignupLoginForm */}
        <SignupLoginForm
          isCreateAccount={isCreateAccount}
          setIsCreateAccount={setIsCreateAccount}
        />
      </aside>

      {/* Main Section */}
      <Slidebar2 />
      <CardSlider />
      <HeroSection />
    </div>
  );
};

export default Page;
