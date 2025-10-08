"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const HdfcNavbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white relative">
      <header className="w-full bg-gradient-to-b from-[#5A2069] to-[#903687]">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6 py-4 text-white">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/Swiggy_logo_bml6he.png"
                alt="Logo"
                height={100}
                width={300}
                className="h-12 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[16px] font-semibold">
            <Link href="/corporate">
              <button className="hover:underline">Benefits</button>
            </Link>
            <Link href="/search">
              <button className="hover:underline">FAQs</button>
            </Link>
            <Link href="/apply">
              <button className="hover:underline">Apply Now</button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            {open ? <Menu size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white text-black absolute w-full left-0 transition-all rounded-2xl duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center px-6 py-3 space-y-3 font-semibold">
          <Link href="/corporate" onClick={() => setOpen(false)}>
            Benefits
          </Link>
          <Link href="/search" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <Link href="/apply" onClick={() => setOpen(false)}>
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HdfcNavbar;
