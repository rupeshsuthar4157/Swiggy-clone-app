"use client";
import { TiHome } from "react-icons/ti";
import { FaUserLarge } from "react-icons/fa6";

import { ArrowUpRight, X, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignupLoginForm from "@/app/components/Header/SignUAndLoginForm";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCreateAccount(false);
    setIsMobileMenuOpen(false);
  };

  // ✅ Scroll to #scan-section when clicking "Get The App"
  const handleScrollToAppSection = () => {
    const section = document.getElementById("scan-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = (
    <>
      <Link
        href="/corporate"
        className="flex items-center gap-1 font-semibold text-white hover:text-gray-200 transition-colors mt-3"
      >
        Swiggy Corporate
      </Link>

      <Link
        href="https://partner.swiggy.com/login#/swiggy"
        className="flex items-center gap-1 font-semibold text-white hover:text-gray-200 transition-colors mt-3"
      >
        Partner with us
      </Link>

      {/* ✅ Scroll to scan-section on click */}
      <button
        onClick={handleScrollToAppSection}
        className="border border-white rounded-lg px-4 py-3.5 flex items-center gap-2 transition mt-3"
      >
        <span className="font-semibold text-[16px] text-white">
          Get The App
        </span>
        <ArrowUpRight size={28} className="text-white font-bold" />
      </button>
    </>
  );

  return (
    <div className="bg-[#FF5200] w-full">
      <header className="flex justify-between items-center container mx-auto px-4 py-3 md:px-8 md:py-4">
        {/* ✅ Logo (Desktop) / Home (Mobile) */}
        <div className="flex items-center">
          {/* Desktop Logo */}
          <Link href="/" className="hidden sm:block mt-3">
            <Image
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Mobile Home Section */}
          <Link href="/search" className="sm:hidden">
            <div className="flex flex-col gap-1 text-white">
              <div className="flex items-center gap-2">
                <TiHome size={24} />
                <p className="font-semibold text-[15px]">Home</p>
                <ChevronDown size={22} />
              </div>
              <p className="text-xs text-gray-100 truncate w-44">
                Temple Tree Apartment Road, Halasuru
              </p>
            </div>
          </Link>
        </div>

        {/* ✅ Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-black rounded-xl px-9 py-4 font-bold text-white flex items-center gap-1 transition mt-3"
          >
            Sign In
          </button>
        </div>

        {/* ✅ Mobile Menu / Profile Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="sm:hidden bg-black rounded-full flex items-center justify-center w-10 h-10 cursor-pointer hover:scale-105 transition-transform"
        >
          <FaUserLarge size={18} className="text-white" />
        </button>
      </header>

      {/* ✅ Overlay Background */}
      {(isSidebarOpen || isMobileMenuOpen) && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* ✅ Sidebar / Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-11/12 sm:w-2/3 md:w-1/3 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen || isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-gray-700 text-lg">
            {isSidebarOpen ? "Welcome Back" : "Menu"}
          </h2>
          <button onClick={closeSidebar}>
            <X size={26} className="text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6">
          {isSidebarOpen ? (
            <SignupLoginForm
              isCreateAccount={isCreateAccount}
              setIsCreateAccount={setIsCreateAccount}
            />
          ) : (
            <>
              <nav className="flex flex-col gap-5">
                <Link
                  href="/corporate"
                  className="text-gray-700 font-medium hover:text-[#FF5200]"
                >
                  Swiggy Corporate
                </Link>
                <Link
                  href="/partner"
                  className="text-gray-700 font-medium hover:text-[#FF5200]"
                >
                  Partner with us
                </Link>

                {/* ✅ Mobile "Get The App" scroll */}
                <button
                  onClick={() => {
                    closeSidebar();
                    handleScrollToAppSection();
                  }}
                  className="text-gray-700 font-medium hover:text-[#FF5200] text-left"
                >
                  Get The App
                </button>
              </nav>

              <button
                onClick={() => {
                  setIsSidebarOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-8 w-full bg-[#FF5200] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#e64a00] transition"
              >
                <User size={18} />
                Sign In
              </button>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
