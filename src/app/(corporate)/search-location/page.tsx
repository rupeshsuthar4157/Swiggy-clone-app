"use client";
import {
    Crosshair,
    ClockAlert,
    X,
} from "lucide-react";


const Page = () => {


    return (
   <div className="lg:hidden px-6 flex flex-col gap-6 mt-12">
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
    );
};

export default Page;


