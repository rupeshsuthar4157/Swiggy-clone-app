"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const HdfcNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white relative">
      <header className="w-full  bg-gradient-to-b from-[#5A2069]  to-[#903687] ">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6  text-white ">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/Swiggy_logo_bml6he.png"
                alt="Logo"
                height={100}
                width={300}
                className="h-12 mt-4 w-auto object-contain cursor-pointer"
              />
            </Link>
            <div className="flex items-center cursor-pointer text-gray-600 max-w-[250px] truncate gap-2 group"></div>
          </div>
          <nav className="flex items-center flex-wrap gap-6 text-[16px] font-semibold ">
            <Link href={"/corporate"}>
              <button className="flex items-center gap-2 text-white hover:underline cursor-pointer">
                Benefits{" "}
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex items-center gap-2 text-white hover:underline cursor-pointer">
                FAQs
              </button>
            </Link>
            <Link href={"search"}>
              <button className="flex items-center gap-2 text-white hover:underline cursor-pointer">
                Apply Now
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Search */}
    </div>
  );
};
export default HdfcNavbar;
