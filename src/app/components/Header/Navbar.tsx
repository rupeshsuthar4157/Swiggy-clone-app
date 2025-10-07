"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSidebarVisible = isRightSidebarOpen || isMobileMenuOpen;

  const closeSidebar = () => {
    setIsRightSidebarOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openSignInSidebar = () => {
    setIsMobileMenuOpen(false);
    setIsRightSidebarOpen(true);
  };

  const openMobileMenu = () => {
    setIsRightSidebarOpen(false);
    setIsMobileMenuOpen(true);
  };

  const scrollToScan = () => {
    const section = document.getElementById("scan-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  /** Navigation Links Component */
  const NavigationLinks = ({ mobile = false }) => {
    const linkClasses = mobile
      ? "block py-3 border-b border-gray-100 font-bold text-lg text-black"
      : "font-bold text-white text-xs md:text-base";

    return (
      <>
        <Link
          href="/corporate"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          Swiggy Corporate
        </Link>

        <Link href="/partner" className={linkClasses}>
          Partner with us
        </Link>

        <button
          onClick={scrollToScan}
          className={`flex items-center gap-1 font-semibold cursor-pointer ${mobile
            ? "text-lg text-[#FF5200] py-3"
            : "border border-white rounded-lg px-3 py-2 md:rounded-xl md:px-5 md:py-3 text-white text-xs md:text-base"
            }`}
        >
          Get the App {!mobile && <ArrowUpRight size={14} />}
        </button>
      </>
    );
  };

  return (
    <div className="bg-[#FF5200]">
      <header className="flex justify-between items-center container mx-auto px-4 py-3 md:px-8 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy Logo"
            width={150}
            height={40}
            className="h-8 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center md:max-w-3xl">
          <nav className="flex items-center gap-3 md:gap-8">
            <NavigationLinks />
            <button
              onClick={openSignInSidebar}
              className="bg-black rounded-lg md:rounded-2xl px-4 py-2 md:px-8 md:py-3 font-bold text-white flex items-center text-xs md:text-base"
            >
              Sign In
            </button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={openMobileMenu}
          className="sm:hidden text-white p-2"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Overlay */}
      {isSidebarVisible && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarVisible ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeSidebar}
            className="text-[#353843] cursor-pointer"
            aria-label="Close Menu or Sidebar"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sign In Sidebar */}
        {isRightSidebarOpen && (
          <div className="p-6 flex flex-col items-start">
            <Image
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Login Banner"
              height={200}
              width={400}
              className="w-full max-h-48 object-contain mb-6"
            />

            <h2 className="text-xl md:text-2xl text-black font-bold mb-1">
              Login
            </h2>
            <p className="text-[#FF5210] text-sm font-semibold mb-4">
              <span className="text-black">or</span> create an account
            </p>

            <div className="w-full h-0.5 bg-black"></div>

            <div className="relative mt-6 w-full">
              <input
                type="tel"
                id="phone"
                className="peer w-full border rounded-md border-[#CCCDCE] px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                placeholder="Phone number"
                pattern="[0-9]*"
                inputMode="numeric"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
              >
                Phone number
              </label>
            </div>

            <button className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md">
              Login
            </button>

            <p className="mt-3 text-xs text-[#02060C] leading-snug">
              <span className="text-[#4D5054]">
                By clicking on Login, I accept the
              </span>{" "}
              <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
              &{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        )}

        {/* Mobile Menu Sidebar */}
        {isMobileMenuOpen && (
          <nav className="p-6 flex flex-col items-start">
            <h2 className="text-2xl text-black font-bold mb-6">Menu</h2>
            <NavigationLinks mobile />
            <button
              onClick={openSignInSidebar}
              className="mt-6 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md text-lg"
            >
              Sign In
            </button>
          </nav>
        )}
      </aside>
    </div>
  );
}
