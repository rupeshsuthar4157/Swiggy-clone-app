"use client";
import BestSellers from "./best-sellers";
import Footer from "./Footer";
import GroceryCategory from "./GroceryCategory";
import Hero from "./Hero";
import ItemProducts from "./ItemProducts";
import Navigstion from "./Navigstion";

export default function Home() {
  return (
    <div className="flex justify-center items-start w-full overflow-x-hidden">
      {/* Centered container with max width */}
      <div className="w-full max-w-[1100px]">
        <Navigstion />
        <Hero />
        <GroceryCategory />
        <ItemProducts />
        <BestSellers />
        <Footer />
      </div>
    </div>
  );
}
