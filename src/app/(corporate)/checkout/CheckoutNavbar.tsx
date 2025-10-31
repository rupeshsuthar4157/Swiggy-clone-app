"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {

  User,
  LifeBuoy,
  Crosshair,
  ClockAlert,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

const CheckoutNavbar = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Loading Skeleton

  return (
    <div className="bg-white relative">
      {/* Navbar */}
      <header className="w-full shadow-sm bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3 flex-wrap gap-4">
          {/* Logo + Location */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logosearch.jpg"
                alt="Logo"
                height={400}
                width={300}
                className="h-19 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>

            <div
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center cursor-pointer text-gray-600 max-w-[250px] truncate gap-2 group"
            >
              <p className="text-[#1B1E24] text-xl font-bold">Secure Checkout</p>
            </div>
          </div>

          {/* Navbar Links */}
          <nav className="flex items-center flex-wrap gap-6 text-[16px] font-bold">
         

            <Link href="/support">
              <button
                className={`flex items-center gap-2 ${
                  pathname === "/support"
                    ? "text-[#FF5200]"
                    : "text-[#1B1E24] hover:text-orange-500"
                }`}
              >
                <LifeBuoy size={20} /> Help
              </button>
            </Link>

            <button
              onClick={() => setIsRightSidebarOpen(true)}
              className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500"
            >
              <User size={20} /> Sign In
            </button>

          </nav>
        </div>
      </header>

      {/* Left Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Left Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)} className="mt-3 text-[#1B1E24]">
            <X size={24} />
          </button>
        </div>

        <div className="px-6 flex flex-col gap-6">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for area, street name.."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 shadow-sm focus:outline-none text-gray-600"
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

      {/* Right Sidebar Overlay */}
      {isRightSidebarOpen && (
        <div
          onClick={() => setIsRightSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Right Sidebar */}
        <aside
                     className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
                         }`}
                 >
                     <div className="flex justify-start p-4">
                         <button
                             onClick={() => setIsRightSidebarOpen(false)}
                             className="text-[#353843] cursor-pointer mt-3 ml-2"
                         >
                             <X size={24} />
                         </button>
                     </div>
                     <div className="p-6">
                         <Image
                             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                             alt=""
                             height={300}
                             width={499}
                             className="absolute top-15 ml-63 h-23 w-auto "
                         />
                         <h2 className="text-2xl text-[black] font-bold mb-2">Login</h2>
                         <p className="text-[#FF5210] text-sm font-semibold"> <span className="text-[black]">or</span> create an account</p>
                         <div className="mt-5 w-8 h-0.5 bg-black group-hover:bg-[#FF5504]"></div>
                         <div className="relative mt-5 w-82">
                             <input
                                 type="tel"
                                 id="phone"
                                 className="peer w-full border border-[#CCCDCE]  px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                                 placeholder="Phone number"
                                 pattern="[0-9]*"
                                 inputMode="numeric"
                             />
                             <label
                                 htmlFor="phone"
                                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all 
                                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                         peer-placeholder-shown:text-gray-400 
                                           peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                             >
                                 Phone number
                             </label>
                         </div>
                         <div>
                             <p className="mt-4  border text-[16px] text-[#fffff] font-bold py-3 w-82 flex item-center justify-center bg-[#FF5504]">Login</p>
                             <p className="ml-1 mt-1 text-[#02060C] text-[11.2px]"><span className="text-[#4D5054]">By clicking on Login, I accept the</span> Terms & Conditions & Privacy
                                 <br /> Policy</p>
                         </div>
                     </div>
                 </aside>
    </div>
  );
};

export default CheckoutNavbar;
