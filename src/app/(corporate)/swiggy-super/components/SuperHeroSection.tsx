import React from "react";
import Image from "next/image";

const SuperHeroSection = () => {
    return (
        <div className="fixed  h-screen w-full bg-gradient-to-b from-[#AE3841]  to-[#FFD6D6] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_900,h_1530/swiggy_one/dweb_right_2"
                    alt="Confetti"
                    className="absolute right-0 top-0 w-122 h-282 "
                />
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_1530/swiggy_one/dweb_left_2"
                    alt="Emoji"
                    className="absolute left-0 top-0 w-120 h-180 "
                />
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_940,h_560/swiggy_one/dweb_swiggy_one"
                    alt="Confetti"
                    className="absolute mr-26 right-1/3 top-30 w-120 h-80 "
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">

                <p className="text-[#D1CDE4]  text-xl font-bold mt-59">
                    Unlock access to unlimited convenience and benefits all across Swiggy.
                </p>
                <p className="text-[#D1CDE4]  text-xl font-bold mt-1">Find out how on the Swiggy app!</p>
                <div className="flex gap-14 mt-6">
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                        alt="App Store"
                        width={190}
                        height={65}
                        className="cursor-pointer hover:scale-105 transition-transform"
                    />
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                        alt="Google Play"
                        width={190}
                        height={85}
                        className="cursor-pointer hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </div>
    );
};

export default SuperHeroSection;
