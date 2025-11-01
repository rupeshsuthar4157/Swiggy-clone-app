"use client";
import BestSellers from "./components/best-sellers";
import Footer from "../instamart/components/Footer";
import GroceryCategory from "./components/GroceryCategory";
import Link from "next/link";
import Hero from "./components/Hero";
import ItemProducts from "./components/ItemProducts";
import Navigstion from "./components/Navigstion";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import {
  ChevronUp,
  CircleArrowLeft,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-start w-full overflow-x-hidden">
      <div className="w-full max-w-4xl">
        <div className="lg:hidden">
          <div className="fixed top-0 z-10 left-0 right-0 bg-black shadow-md px-4 py-2 flex items-center justify-between">
            <div className="items-center gap-3">
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48,w_156/Logos/Swiggy-Logo.png"
                  alt="Burger King"
                  className="w-22"
                />
              </div>
              <div className="text-[12px] font-semibold">
                <p className="flex gap-1 text-white items-center">
                  Best offers just for  the Swiggy App!{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="bg-[#0050FF] text-[#BBE4D5] rounded-3xl w-29 text-sm px-4 py-2 ">
                <span className="text-[16px] font-semibold  text-[#FFFFF6]">
                  GET APP
                </span>
              </p>
            </div>
          </div>
          {/* Bottom Navigation Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t px-5 py-4 flex justify-between items-center text-gray-600">
            <Link href={"/"}>
              <button className="flex  flex-col items-center">
                <CircleArrowLeft size={25} />
                <span className="text-gray-500 mt-1 text-[10px] font-medium">
                  Home
                </span>
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex flex-col items-center">
                <RiShoppingBasket2Fill size={25} className="text-black" />
                <span className="text-black mt-1 text-[11px] font-stretch-ultra-expanded font-medium">
                  instamart
                </span>
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex flex-col items-center">
                <TbCategory2 size={25} />
                <span className="text-gray-500 mt-1 text-[11px] font-medium">
                  categories
                </span>
              </button>
            </Link>
          </div>
        </div>
        <Navigstion />
        <Hero />
        <GroceryCategory />
        <ItemProducts />
        <BestSellers />
        <Footer />

        {/* mobaile devais responsive */}

        <div className="lg:hidden">
          <div className="fixed bottom-19 left-0 right-0 bg-white shadow-md px-4 py-2 flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 border border-gray-200 rounded-sm overflow-hidden">
                <Image
                  src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80,w_72/NI_CATALOG/IMAGES/CIW/2024/8/12/db5cc304-9d52-471c-9b52-60ebe7062696_77342_1.png"
                  alt="Burger King"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[12px] font-semibold">
                <p className="flex gap-1">
                  1 item
                  <ChevronUp size={15} className="text-blue-500" />
                </p>
                <p className="flex gap-1 text-[#21A16C] items-center">
                  1091 saved, coming up!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="bg-[#0050FF] text-[#BBE4D5] w-29 text-sm px-4 py-2 rounded-lg">
                <span className="text-[16px] font-semibold text-[#FFFFF6]">
                  Go to card
                </span>
              </p>
            </div>
          </div>
          {/* Bottom Navigation Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t px-5 py-4 flex justify-between items-center text-gray-600">
            <Link href={"/"}>
              <button className="flex  flex-col items-center">
                <CircleArrowLeft size={25} />
                <span className="text-gray-500 mt-1 text-[10px] font-medium">
                  Home
                </span>
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex flex-col items-center">
                <RiShoppingBasket2Fill size={25} className="text-black" />
                <span className="text-black mt-1 text-[11px] font-stretch-ultra-expanded font-medium">
                  instamart
                </span>
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex flex-col items-center">
                <TbCategory2 size={25} />
                <span className="text-gray-500 mt-1 text-[11px] font-medium">
                  categories
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
