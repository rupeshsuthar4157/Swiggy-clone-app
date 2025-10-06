"use client";

import { Search, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter(); 
  return (
    <div className="flex justify-center mt-4">
      <div className=" w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div>
              <h1 className="flex  flex-col items-center justify-center bg-[#0050FF] text-[#FBFCFF] rounded-xl px-1.5 py-1.5">
                <span className="text-lg font-extrabold leading-none">5</span>
                <span className="text-[10px] font-extrabold">MINS</span>
              </h1>
            </div>

            <div className="mt-1">
              <p className="text-[#1E2227] text-sm font-semibold">
                Delivery to Other
              </p>
              <p className="text-sm text-[#686B6E] font-medium leading-snug">
                No.3275/a, 12th main rd, hal 2nd stage, ward 72, domlur, bengaluru,
                karnataka 560038, india
              </p>
            </div>
          </div>

          <Link href="/">
            <button className="bg-[#43464A] rounded-full flex items-center justify-center w-7 h-7 md:w-9 md:h-9 cursor-pointer hover:scale-105 transition-transform duration-200">
              <User className="text-white" size={20} />
            </button>
          </Link>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search for 'Flowers'"
            readOnly
            onClick={() => router.push("/search")} // fixed typo here
            className="w-full border placeholder:text-[#8D8F91] rounded-2xl text-black border-[#C6C7C8] px-4 py-3 pr-12 text-[15px] outline-none cursor-pointer bg-white"
          />

          {/* Search icon (also clickable) */}
          <Search
            onClick={() => router.push("/search")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;


