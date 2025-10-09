"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignupLoginForm from "@/app//components/Header/SignUAndLoginForm"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCreateAccount(false);
  };

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

        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-black rounded-lg px-4 py-2 font-bold text-white"
          >
            Sign In
          </button>
        </div>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="sm:hidden text-white p-2"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeSidebar}>
            <X size={28} />
          </button>
        </div>

        <SignupLoginForm
          isCreateAccount={isCreateAccount}
          setIsCreateAccount={setIsCreateAccount}
        />
      </aside>
    </div>
  );
}
