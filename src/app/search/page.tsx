"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    Search,
    User,
    ShoppingCart,
    LifeBuoy,
    GalleryVerticalEnd,
    BadgePercent,
    Crosshair,
    ClockAlert,
    X,
} from "lucide-react";

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Left sidebar
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false); // Right sidebar

    return (
        <div className="bg-white min-h-screen relative">
            {/* Navbar */}
            <header className="hidden md:block w-full shadow-sm bg-white">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Image
                                src="/logosearch.jpg"
                                alt="Logo"
                                height={400}
                                width={300}
                                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
                            />
                        </Link>
                        <div
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex items-center cursor-pointer text-gray-600 max-w-[250px] truncate gap-2 group"
                        >
                            <div className="group inline-block">
                                <p className="text-[15px] font-semibold text-black group-hover:text-[#FF5504]">
                                    Domlur
                                </p>
                                <div className="mt-1 w-8 h-0.5 bg-black group-hover:bg-[#FF5504]"></div>
                            </div>

                            <span className="text-sm text-[#808285] truncate group-hover:opacity-50">
                                No.3275/A, 12th Main Rd, HAL 2nd St...
                            </span>
                            <ChevronDown className="ml-1 shrink-0 text-orange-500 group-hover:opacity-70" />
                        </div>
                    </div>

                    <nav className="flex items-center flex-wrap gap-6 text-[16px] font-bold ">
                        <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                            <GalleryVerticalEnd size={20} /> Swiggy Corporate
                        </button>
                        <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                            <Search size={20} /> Search
                        </button>
                        <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 relative cursor-pointer">
                            <BadgePercent size={20} />
                            Offers
                            <span className="absolute -top-2 right-0 text-[#FFA700] text-[10px] font-semibold cursor-pointer">
                                NEW
                            </span>
                        </button>
                        <button className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer">
                            <LifeBuoy size={20} /> Help
                        </button>
                        <button
                            onClick={() => setIsRightSidebarOpen(true)}
                            className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer"
                        >
                            <User size={20} /> Sign In
                        </button>
                        <button
                            className="flex items-center gap-2 text-[#1B1E24] hover:text-orange-500 cursor-pointer"
                        >
                            <ShoppingCart size={20} /> Cart
                        </button>
                    </nav>
                </div>
            </header>
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}
            <aside
                className={`fixed top-0 left-0 h-full w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="mt-3 text-[#1B1E24]  cursor-pointer"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="px-6 flex flex-col gap-6">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Search for area, street name.."
                            className="w-full pl-10 text-[#BBBBBD] pr-4 py-3 border border-[#FFFFFF] shadow-sm focus:outline-none "
                        />
                    </div>
                    <div className="w-full py-4 px-4 border cursor-pointer hover:bg-gray-50 flex items-center gap-4">
                        <Crosshair className="text-black" size={20} />
                        <div>
                            <p className="text-black font-bold hover:text-orange-500">
                                Get current location
                            </p>
                            <p className="text-gray-500 text-sm">Using GPS</p>
                        </div>
                    </div>

                    {/* Recent Searches Box */}
                    <div className="w-full py-4 px-4 border rounded cursor-pointer hover:bg-gray-50 flex gap-4">
                        <ClockAlert className="text-black mt-1" size={20} />
                        <div className="flex flex-col">
                            <p className="text-gray-400 text-xs mb-1">RECENT SEARCHES</p>
                            <p className="text-black font-bold hover:text-orange-500">Get current location</p>
                            <p className="text-gray-500 text-xs">
                                12th Main Road, HAL 2nd Stage, Ward 72, Domlur, Bengaluru
                            </p>
                        </div>
                    </div>
                </div>
            </aside>


            {isRightSidebarOpen && (
                <div
                    onClick={() => setIsRightSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}
            <aside
                className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-start p-4">
                    <button
                        onClick={() => setIsRightSidebarOpen(false)}
                        className="text-[#353843] cursor-pointer mt-3 ml-2"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                        alt=""
                        height={300}
                        width={499}
                        className="absolute top-15 ml-63 h-23 w-auto "
                    />
                    <h2 className="text-2xl text-[black] font-bold mb-2">Login</h2>
                    <p className="text-[#FF5210] text-sm font-semibold"> <span className="text-[black]">or</span> create an account</p>
                    <div className="mt-5 w-8 h-0.5 bg-black group-hover:bg-[#FF5504]"></div>
                    <div className="relative mt-5 w-82">
                        <input
                            type="tel"
                            id="phone"
                            className="peer w-full border border-[#CCCDCE]  px-4 pt-6 pb-2 text-base placeholder-transparent focus:outline-none text-gray-500 focus:text-black"
                            placeholder="Phone number"
                            pattern="[0-9]*"
                            inputMode="numeric"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all 
                                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                    peer-placeholder-shown:text-gray-400 
                                      peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
                        >
                            Phone number
                        </label>
                    </div>
                    <div>
                        <p className="mt-4  border text-[16px] text-[#fffff] font-bold py-3 w-82 flex item-center justify-center bg-[#FF5504]">Login</p>
                        <p className="ml-1 mt-1 text-[#02060C] text-[11.2px]"><span className="text-[#4D5054]">By clicking on Login, I accept the</span> Terms & Conditions & Privacy
                            <br /> Policy</p>
                    </div>
                </div>
            </aside>
            <main className="flex flex-col items-center mt-10 px-4">
                <div className="w-full max-w-3xl flex items-center border border-[#BEBFC5] rounded-md">
                    <input
                        type="text"
                        placeholder="Search for restaurants and food"
                        className="flex-grow px-4 py-3 text-[#676A6D] rounded-md outline-none font-semibold"
                    />
                    <button className="px-3 text-gray-500 hover:text-orange-500">
                        <Search size={18} />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Page;


