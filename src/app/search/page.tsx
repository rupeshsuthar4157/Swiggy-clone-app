"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import SignupLoginForm from "@/app/components/Header/SignUAndLoginForm";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false); 
  const [isCreateAccount, setIsCreateAccount] = useState(false); 

  return (
    <div className="bg-white min-h-screen relative">
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
                <div className="mt-1 w-8 h-0.5 bg-black group-hover:bg-[#FF5504]"></div>
              </div>

              <span className="text-sm text-[#808285] truncate group-hover:opacity-50">
                No.3275/A, 12th Main Rd, HAL 2nd St...
              </span>
              <ChevronDown className="ml-1 shrink-0 text-orange-500 group-hover:opacity-70" />
            </div>
          </div>

          <nav className="flex items-center flex-wrap gap-6 text-[16px] font-bold ">
            <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
              <GalleryVerticalEnd size={20} /> Swiggy Corporate
            </button>
            <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
              <Search size={20} /> Search
            </button>
            <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 relative cursor-pointer">
              <BadgePercent size={20} />
              Offers
              <span className="absolute -top-2 right-0 text-[#FFA700] text-[10px] font-semibold cursor-pointer">
                NEW
              </span>
            </button>
            <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
              <LifeBuoy size={20} /> Help
            </button>
            <button
              onClick={() => setIsRightSidebarOpen(true)}
              className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer"
            >
              <User size={20} /> Sign In
            </button>
            <Link
            href={"checkout"}
            >
            <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
              <ShoppingCart size={20} /> Cart
            </button>
            </Link>
          </nav>
        </div>
      </header>

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

      {isRightSidebarOpen && (
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

        <SignupLoginForm
          isCreateAccount={isCreateAccount}
          setIsCreateAccount={setIsCreateAccount}
        />
      </aside>

      <main className="flex flex-col items-center mt-10 px-4">
        <div className="w-full max-w-3xl flex items-center border border-[#BEBFC5] rounded-md">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="flex-grow px-4 py-3 text-[#777777] rounded-md outline-none font-medium"
          />
          <button className="px-3 text-gray-500 hover:text-orange-500">
            <Search size={18} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
