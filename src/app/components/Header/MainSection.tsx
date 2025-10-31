"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";

const locations = [
  "No.3275/A, 12th Main Rd, Bangalore",
  "Use my current location",
  "Recent searches",
  "Recent searches",
  "Pizza 4P's Indiranagar, 12th Main Road, HAL 2nd Stage, Ward 72, Domlur, Bengaluru, Karna...",
];

const banners = [
  {
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
    route: "/restaurants",
  },
  {
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
    route: "/instamart",
  },
  {
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
    route: "/dineout",
  },
];

export default function HeroSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  return (
    <section className="bg-[#FF5200]">
      <section className="relative py-12 px-4 md:py-16 lg:py-20 md:px-6 lg:px-10">
        <h1 className="text-white text-2xl md:text-3xl lg:text-[45px] text-center font-semibold mb-6 leading-snug">
          Order food & groceries. Discover <br className="hidden lg:block" />
          best restaurants. Swiggy it!
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto mb-6 w-full">
          <div className="relative w-full md:w-[260px] lg:w-[300px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between text-sm md:text-base lg:text-lg bg-white px-3 py-3 lg:px-4 lg:py-4 rounded-xl lg:rounded-2xl border border-gray-300 text-[#676A6D] font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="flex items-center truncate w-[160px] md:w-[200px] lg:w-[220px]">
                <svg
                  className="mr-2 text-orange-500 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 23"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                    fill="#FF5200"
                  />
                </svg>
                <span className="truncate">{selectedLocation}</span>
              </span>
              <ChevronDown
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                size={22}
              />
            </button>

            {/* Dropdown List */}
            {isOpen && (
              <ul className="absolute mt-2 w-90 md:w-190 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-auto">
                {locations.map((loc, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 cursor-pointer text-sm md:text-base lg:text-lg truncate hover:bg-gray-100 ${
                      loc === "Use my current location"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    {loc}
                    {loc === "Use my current location" && (
                      <hr className="my-2 border-gray-300" />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Bar with redirect */}
          <div className="relative w-full md:w-[380px] lg:w-[480px]">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push("/search");
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push("/search");
              }}
              className="w-full pl-3 md:pl-4 pr-10 text-sm md:text-base font-semibold py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-white border border-gray-300 text-[#676A6D] focus:outline-none focus:ring-0"
              readOnly
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-alias"
              size={18}
              onClick={() => router.push("/search")}
            />
          </div>
        </div>

        {/* Side Images (desktop only) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[450px]">
          <Image
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="Food Bag"
            width={250}
            height={300}
          />
        </div>
        <div className="hidden lg:block absolute right-0 top-[35%] -translate-y-1/2 w-[250px] h-[300px]">
          <Image
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt="Sushi"
            width={300}
            height={400}
          />
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative bottom-6 md:bottom-10 lg:bottom-16 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 lg:gap-6 mx-auto max-w-6xl">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              onClick={() => router.push(banner.route)}
              className="relative w-full md:w-[320px] lg:w-[500px] h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={banner.url}
                alt={`Food Banner ${idx + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
