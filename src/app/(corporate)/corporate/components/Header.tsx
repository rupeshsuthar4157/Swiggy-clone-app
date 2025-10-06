
"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "About Swiggy", url: "/corporate" },
  { name: "Our Businesses", url: "/our-business" },
  { name: "Delivering For Everyone", url: "/delivering-for-everyone" },
  { name: "Newsroom", url: "/newsroom" },
  { name: "Investor Relations", url: "#", dropdown: true },
  { name: "Sustainability", url: "/sustainability" },
  { name: "Contact Us", url: "/contact" },
];

const investorDropdown = [
  { name: "Financial Reports", url: "#" },
  { name: "Reports and Publications", url: "#" },
  { name: "Corporate Governance", url: "#" },
  { name: "Analyst Coverage", url: "#" },
  { name: "Disclosures under SEBI LODR", url: "#" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname(); // 🔥 get current page path

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(true);
    }, 250);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 300);
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex mt-5 items-center">
          <img
            src="https://i.imgur.com/AzDQQcz.png"
            alt="Swiggy Logo"
            className="w-36 h-auto cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center mt-5 gap-8 text-gray-700 font-medium relative">
          {navlinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`relative flex items-center gap-1 text-md font-semibold transition-colors duration-200
                    ${
                      openDropdown
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:transition-all after:duration-300
                    ${
                      openDropdown
                        ? "after:w-full after:bg-orange-500"
                        : "after:w-0 hover:after:w-full hover:after:bg-orange-500"
                    }`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      openDropdown ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {openDropdown && (
                  <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2 z-50 animate-fadeIn">
                    {investorDropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 font-semibold transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={link.url}
                className={`relative text-md font-semibold transition-colors duration-200
                  ${
                    pathname === link.url
                      ? "text-orange-500 after:w-full after:bg-orange-500"
                      : "text-gray-700 hover:text-orange-500 hover:after:w-full hover:after:bg-orange-500"
                  }
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300`}
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white border-t shadow-lg flex flex-col justify-center items-center py-4 space-y-3 overflow-hidden"
          >
            {navlinks.map((link, index) =>
              link.dropdown ? (
                <motion.div
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col ml-3 justify-center items-center"
                >
                  <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className={`flex justify-between items-center text-md font-semibold transition 
                      ${
                        mobileDropdown
                          ? "text-orange-500"
                          : "text-gray-700 hover:text-orange-500"
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        mobileDropdown ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown inside mobile */}
                  <AnimatePresence>
                    {mobileDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {investorDropdown.map((item, i) => (
                          <motion.a
                            key={i}
                            href={item.url}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="block px-2 py-1 text-center text-gray-600 font-semibold hover:text-orange-500 transition"
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.a
                  key={index}
                  href={link.url}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block text-md font-semibold transition
                    ${
                      pathname === link.url
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                >
                  {link.name}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
