"use client";

import { Menu, X, User, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignupLoginForm from "@/app/components/Header/SignUAndLoginForm";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  type Props = {
    isCreateAccount: boolean;
    setIsCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCreateAccount(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link
        href="/corporate"
        className="flex items-center gap-1 font-bold text-white "
      >
        Swiggy Corporate
      </Link>

      <Link
        href="/offers"
        className="flex items-center gap-1 font-bold text-white  relative"
      >
        Partner with us
      </Link>
      <button className="border border-white rounded-lg px-5 py-4 flex items-center gap-2">
        <Link
          href="/swiggy-super"
          className="flex items-center gap-1 font-bold text-[16px] text-white "
        >
          Get The App
        </Link>
        <span>
          <MoveUpRight size={12} />
        </span>
      </button>
    </>
  );

  return (
    <div className="bg-[#FF5200]">
      <header className="flex justify-between items-center container mx-auto px-4 py-3 md:px-8 md:py-5">
        <Link href="/" className="flex items-center">
          <Image
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Logo"
            width={150}
            height={40}
          />
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {navLinks}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-black rounded-[12px] px-10 py-4 font-bold text-white flex items-center gap-1 cursor-pointer"
          >
            Sign In
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="sm:hidden text-white p-2"
        >
          <Menu size={28} />
        </button>
      </header>

      {(isSidebarOpen || isMobileMenuOpen) && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 "
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen || isMobileMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-start p-4 text-gray-500 mt-4">
          <button onClick={closeSidebar}>
            <X size={28} />
          </button>
        </div>

        {isSidebarOpen ? (
          <SignupLoginForm
            isCreateAccount={isCreateAccount}
            setIsCreateAccount={setIsCreateAccount}
          />
        ) : (
          <nav className="flex flex-col gap-4 p-6">
            {navLinks}
            <button
              onClick={() => {
                setIsSidebarOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 w-full bg-[#FF5504] text-white font-bold py-3 rounded-md flex items-center justify-center gap-1"
            >
              <User size={18} /> Sign In
            </button>
          </nav>
        )}
      </aside>
    </div>
  );
}
