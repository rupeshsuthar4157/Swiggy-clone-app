"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-[#9A9B94] py-12 px-6 md:px-20 overflow-visible">
      {/* Logo Section */}
      <div className="hidden md:flex items-center justify-between mb-10">
        <div>
          <Image
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_96/Logo_f5xzza"
            alt="logo"
            width={180}
            height={50}
          />
          <p className="text-sm mt-3">
            © 2025 Bundi Technologies Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        {/* Category */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Category</h3>
          <ul className="space-y-2">
            {[
              "Office and Electricals in Delhi",
              "Sauces and Spreads in Delhi",
              "Dairy, Bread and Eggs in Delhi",
              "Office and Electricals in Mumbai",
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-sm hover:text-white transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="border border-gray-600 mt-5 p-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <p className="text-sm font-medium">144 Categories</p>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Cities */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">We deliver to</h3>
          <ul className="space-y-2">
            {[
              "Bangalore",
              "Delhi",
              "Jaipur",
              "Kochi",
              "Mumbai",
              "Noida",
              "Vadodara",
            ].map((city, idx) => (
              <li
                key={idx}
                className="text-sm hover:text-white transition-all duration-200 cursor-pointer"
              >
                {city}
              </li>
            ))}
          </ul>
          <div className="border border-gray-600 mt-4 p-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <p className="text-sm font-medium">27 Cities</p>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            {[
              "About",
              "Careers",
              "Team",
              "Swiggy One",
              "Swiggy Instamart",
              "Swiggy Genie",
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-sm hover:text-white transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
            {["Terms & Conditions", "Cookie Policy", "Privacy Policy"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="text-sm hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <h3 className="text-white font-semibold text-lg mt-6 mb-3">
            Contact Us
          </h3>
          <ul className="space-y-2">
            {["Help & Support", "Partner with Us", "Ride With Us"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="text-sm hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm font-medium">&copy; 2025 Swiggy</p>

        <div className="flex gap-5 mt-4 md:mt-0">
          {["facebook", "Pinterest", "Instagram", "Twitter"].map((name) => (
            <Image
              key={name}
              src={`https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/Dweb/${name}.png`}
              alt={`${name} logo`}
              width={24}
              height={24}
              className="hover:opacity-80 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
