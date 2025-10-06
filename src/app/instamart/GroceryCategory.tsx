/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { slider1Products } from "../data/collections/slider1";
import { slider2Products } from "../data/collections/slider2";
import { slider3Products } from "../data/collections/slider3";
import { slider4Products } from "../data/collections/slider4";
import { slider5Products } from "../data/collections/slider5";
import { slider6Products } from "../data/collections/slider6";
import { Product } from "../data/types";
import { Plus } from "lucide-react";

interface SliderProps {
  heading: string;
  products: Product[];
}

const Slider: React.FC<SliderProps> = ({ heading, products }) => (
  <div className="space-y-4">
    <h3 className="sr-only">{heading}</h3>

    <div className="relative">
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide touch-scroll px-2 sm:px-4 md:px-6 max-w-full"
        role="list"
      >
        {products.map((product) => (
          <div
            key={product.id}
            role="listitem"
            className="flex-none w-36 sm:w-44 md:w-48 lg:w-52 bg-white rounded-lg shadow relative snap-start"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mt-2">
              <img
                src={product.image || "/default-image.png"}
                alt={product.name}

                className="object-contain rounded-2xl"
              />
            </div>

            {product.discount > 0 && (
              <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
                {product.discount}% <br /> OFF
              </div>
            )}

            {product.showadd && (
              <div className="absolute top-2 right-2 bg-white text-blue-600 font-bold p-2 rounded-xl border border-blue-600 cursor-pointer flex items-center gap-1">
                <Plus size={18} />
              </div>
            )}

            <h3 className="text-sm sm:text-base font-bold text-[#515458] mt-2 px-2 truncate">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 px-2 mb-2">
              <span className="font-bold text-[#414449] text-sm sm:text-base">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm line-through text-gray-400">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GroceryCategory = () => (
  <div className="w-full px-4 py-6 space-y-6 max-w-screen-xl mx-auto">
    <Slider heading="Top Deals" products={slider1Products} />

    <p className="font-bold text-[#8E8F92]">Hot deals</p>
    <Slider heading="Trending Now" products={slider3Products} />

    {/* Banner */}
    <div className="flex justify-center">
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/9/10/2436d307-5a79-4dd1-9ea1-59c8fcac76b2_Stripbanner328x61All2.png"
        alt="Banner"
        width={900}
        height={61}
        className="object-contain"
      />
    </div>

    <p className="font-bold text-[#8E8F92]">Grocery & Kitchen</p>
    <Slider heading="Hot Deals" products={slider2Products} />

    <p className="font-bold text-[#8E8F92]">Beauty & Wellness</p>
    <Slider heading="Trending Now" products={slider4Products} />

    <p className="font-bold text-[#8E8F92]">Snacks & Drinks</p>
    <Slider heading="Trending Now" products={slider5Products} />

    <p className="font-bold text-[#8E8F92]">Household & Lifestyle</p>
    <Slider heading="Trending Now" products={slider6Products} />
  </div>
);

export default GroceryCategory;
