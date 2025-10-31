/**
 * @author Rupesh Suthar
 * @component MainHeroSection
 * @description Reusable hero section for empty cart or other messages
 */

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MainHeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  redirectTo?: string;
}

const MainHeroSection: React.FC<MainHeroSectionProps> = ({
  title = "Your cart is empty",
  subtitle = "You can go to home page to view more restaurants",
  buttonText = "SEE RESTAURANTS NEAR YOU",
  imageSrc = "/empty-cart.png",
  redirectTo = "/",
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(redirectTo);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {imageSrc && (
        <div className="mb-8">
          <Image
            src="https://res.cloudinary.com/divfcyqpm/image/upload/v1759559951/Screenshot_2025-10-04_120759_fm9ujk.png"
            alt="Empty Cart Illustration"
            width={300}
            height={300}
            className="object-contain select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()} 
          />
        </div>
      )}
      <h1 className="text-[#35383D] text-xl md:text-2xl font-bold">{title}</h1>
      <p className="text-gray-500 text-sm md:text-base mt-2">{subtitle}</p>
      <button
        onClick={handleButtonClick}
        className="mt-5 px-6 py-3 bg-[#FF5200] text-white text-sm md:text-[16px] font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {buttonText}
      </button>
      <div className="flex gap-2 px-5 py-3 bg-black mt-38">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cart_error_icon_ymvz3v" alt="" 
        height={23} 
        className="w-6 h-auto"
        />
        <h1 className="font-bold">Oops! Something wrong</h1>
      </div>
    </div>
  );
};

export default MainHeroSection;
