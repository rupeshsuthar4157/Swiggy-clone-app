"use client";

import { Search, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-22 px-4  sm:px-6 md:px-10">
      <div className="w-full max-w-4xl">
        {/* Top section */}
        <div className="flex items-start justify-between gap-4">
          {/* Delivery Info */}
          <div className="flex items-start gap-3 w-full sm:w-auto">
            <div className="flex-shrink-0">
              <h1 className="flex flex-col items-center justify-center bg-[#0050FF] text-[#FBFCFF] rounded-xl px-2 py-1 sm:px-1.5 sm:py-1.5">
                <span className="text-base sm:text-lg font-extrabold leading-none">5</span>
                <span className="text-[9px] sm:text-[10px] font-extrabold">MINS</span>
              </h1>
            </div>

            <div className="mt-0.5 sm:mt-1 overflow-hidden">
              <p className="text-[#1E2227] text-sm sm:text-base font-semibold truncate">
                Delivery to Other
              </p>
              <p className="text-xs sm:text-sm text-[#686B6E] font-medium leading-snug line-clamp-2 sm:line-clamp-none">
                No.3275/a, 12th main rd, hal 2nd stage, ward 72, domlur, bengaluru,
                karnataka 560038, india
              </p>
            </div>
          </div>

          {/* Profile Icon */}
          <Link href="/">
            <button className="bg-[#43464A] rounded-full flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:scale-105 transition-transform duration-200">
              <User className="text-white" size={18} />
            </button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search for 'Flowers'"
            readOnly
            onClick={() => router.push("/search")}
            className="w-full border placeholder:text-[#8D8F91] rounded-2xl text-black border-[#C6C7C8] px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-[15px] outline-none cursor-pointer bg-white"
          />
          <Search
            onClick={() => router.push("/search")}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
