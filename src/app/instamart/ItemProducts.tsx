import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Product } from "../data/types";
import { card1Products } from "../data/top-offerss/card1";
import { card2Products } from "../data/top-offerss/card2";
import { card3Products } from "../data/top-offerss/card3";
import { card4Products } from "../data/top-offerss/card4";
import { card5Products } from "../data/top-offerss/card5";
import { card6Products } from "../data/top-offerss/card6";
import { videoProducts } from "../data/top-offerss/video";
import { video2Products } from "../data/top-offerss/video2";

// Reusable Slider Component
interface SliderProps {
  heading: string;
  products: Product[];
  type: "image" | "video";
}

const Slider: React.FC<SliderProps> = ({ heading, products, type }) => (
  <div className="space-y-4">
    {heading && <h2 className="text-lg font-semibold text-gray-700 px-2">{heading}</h2>}
    <div className="flex gap-2 overflow-x-auto flex-nowrap scrollbar-hide px-2">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex-shrink-0 relative rounded-lg ${
            type === "video" ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className={`relative ${
              type === "image"
                ? "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
                : "w-64 sm:w-72 md:w-96"
            }`}



          >
            {type === "image" ? (
              <Image 
                src={product.image!}
                alt={product.name}
                fill
                className="object-contain rounded-3xl"
              />
            ) : (
              <video
                src={product.video}
                className="object-contain w-full h-60 sm:h-72 md:h-80"
                controls
                muted={false}
                loop={false}
                playsInline
              />
            )}
          </div>



          {product.discount > 0 && (
            <div className="absolute top-0 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">
              {product.discount}% <br /> OFF
            </div>
          )}

          {product.showadd && (
            <button className="absolute top-0 right-2  bg-white text-blue-600 font-bold p-2.5 rounded-xl border border-blue-600 cursor-pointer flex items-center justify-center hover:bg-blue-50 transition">
              <Plus size={16} />
            </button>
          )}

          <h3
            className={`text-sm font-bold text-gray-700 mt-2 truncate ${
              type === "image" ? "w-32 sm:w-36 md:w-40" : "w-64 sm:w-72 md:w-80"
            }`}
          >
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-gray-800">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs line-through text-gray-400">{product.originalPrice}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ItemProducts = () => (
  <div className="w-full px-4 py-6 space-y-6">
    <p className="font-bold text-[#8E8F92]">Best from Noice!</p>
    <Slider products={card1Products} heading="" type="image" />

    <p className="font-bold text-[#8E8F92]">Shop by Store</p>
    <Slider products={card2Products} heading="" type="image" />

    <Slider products={videoProducts} heading="Worth Your Attention" type="video" />

    <p className="font-bold text-[#8E8F92]">Shop by Store</p>
    <Slider products={card3Products} heading="" type="image" />

    <p className="font-bold text-[#8E8F92]">The Veggie Store</p>
    <Slider products={card4Products} heading="" type="image" />

    <Slider products={video2Products} heading="Worth Your Attention" type="video" />

    <p className="font-bold text-[#8E8F92]">The Bread Store</p>
    <Slider products={card5Products} heading="" type="image" />

    <p className="font-bold text-[#8E8F92]">Pharma at your doorstep</p>
    <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/71dc092b19b3f0e24133a1c50caa00c6"
        alt="Pharma Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/036351de5b3d9de893f67bb6365c43ab"
        alt="Pharma Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
    </div>

    <Image
      src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/ae9af84f604e24ec605b16f9c136cd6b"
      alt="Pharma Banner"
      width={500}
      height={200}
      className="rounded-lg"
    />

    <p className="font-bold text-[#8E8F92]">Pens, Markers and More</p>
    <Slider products={card6Products} heading="" type="image" />

    <p className="font-bold text-[#606267]">Shop by Brand</p>
    <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/36dde4f0500c8bdd4e043c162007d3b4"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/0d833d6e509ccb8644e6daedab28457b"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
    </div>

    <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/b5b8351aff700830ca422397bca043fa"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/f0baff454a9d2bb83d71dcd921cafff3"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
    </div>

    <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/963f12506378094cc49205a7846c1ffd"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
      <Image
        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/51a15567a07b9d57206c1639a0e5c2e6"
        alt="Brand Banner"
        width={500}
        height={200}
        className="rounded-lg flex-shrink-0"
      />
    </div>
  </div>
);

export default ItemProducts;