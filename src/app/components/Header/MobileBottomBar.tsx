"use client";
import { ChevronRight, Home, Search } from "lucide-react";
import { SiSwiggy } from "react-icons/si";
import Image from "next/image";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden">
      <div className="fixed bottom-13 left-0 right-0 bg-white shadow-md px-4 py-2 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-sm overflow-hidden">
            <Image
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80,h_80/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/cf169db1-661b-4cf7-9664-877f048c978d_233329.jpg"
              alt="Burger King"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-[12px] font-semibold">
            <p className="flex gap-1">
              Burger <span>King</span>{" "}
            </p>
            <p className="flex gap-1 text-[#6297E4] items-center">
              View <span>Full</span> <span>Menu</span>{" "}
              <ChevronRight size={20} />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="bg-green-600 text-[#BBE4D5] w-29 text-sm px-4 py-2 rounded-lg">
            1 item | ₹323{" "}
            <span className="text-[16px] font-semibold text-[#FFFFF6]">
              Checkout
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md py-2 flex justify-around items-center text-gray-600">
        <button className="flex  flex-col items-center">
          <SiSwiggy size={22} />
          <span className="text-xs font-medium">Swiggy</span>
        </button>
        <button className="flex flex-col items-center">
          <Search size={22} />
          <span className="text-xs font-medium">Search</span>
        </button>
      </div>
    </div>
  );
}
