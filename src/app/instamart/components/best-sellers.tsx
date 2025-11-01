import React from 'react'
import Image from 'next/image'
import {
    image,
    imagep,
    imagei,
    imagel,
    imagea,
    imageaz,
    imageak,
    imageg,
    imaget,
    imageb,
} from "./../../data/itemimg.ts/total.img";
// } from "./../data/itemimg.ts/total.img";
const BestSellers = () => {
    return (
        <div>
            <div className="h-screen space-y-4 bg-[#E1ECFE] p-4 max-h-110">
                <Image
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/9/17/98c0ac07-719b-4bcf-9c5a-e6949c817d86_TB360X70.png"
                    alt="Best Seller"
                    width={1200}
                    height={700}

                    className="object-cover"
                />

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {image.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex bg-[#E2F9FF] overflow-x-hidden scrollbar-hide">
                <div className="flex justify-center  overflow-x-hidden ml-4  ">
                    {imagei.map((src, index) => (
                        <div
                            key={index}
                            className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                        >
                            <Image
                                src={src}
                                alt={`menu-${index}`}
                                width={200}
                                height={200}
                                className="w-26 h-32 "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-screen space-y-4 bg-[#E1ECFE] p-4 max-h-110">
                <Image
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/9/16/79243591-7f3b-410a-a2a1-b93281211d1c_TB3360x70.png"
                    alt="Best Seller"
                    width={1200}
                    height={700}

                    className="object-cover"
                />

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imagea.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex bg-[#E2F9FF] overflow-x-hidden scrollbar-hide">
                <div className="flex justify-center overflow-x-hidden ml-4  ">
                    {imagel.map((src, index) => (
                        <div
                            key={index}
                            className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                        >
                            <Image
                                src={src}
                                alt={`menu-${index}`}
                                width={200}
                                height={200}
                                className="w-26 h-32 "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-screen space-y-4 bg-[#E1ECFE] p-4 max-h-160">
                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imagep.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/9/16/01807ca3-eb4f-4a82-b289-20221a7bf7a3_tb71.png"
                    alt="Best Seller"
                    width={1200}
                    height={700}
                    className="object-cover"
                />

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageaz.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="h-screen space-y-4 bg-[#E1ECFE] p-4 max-h-160">
                <Image
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/9/16/e79f2acc-a942-447e-ab21-8aba0f5ed43d_tb8360x70.png"
                    alt="Best Seller"
                    width={1200}
                    height={700}
                    className="object-cover"
                />

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageak.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageg.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex bg-[#E2F9FF] overflow-x-hidden scrollbar-hide">
                <div className="flex justify-start  overflow-x-hidden ml-4  ">
                    {imaget.map((src, index) => (
                        <div
                            key={index}
                            className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                        >
                            <Image
                                src={src}
                                alt={`menu-${index}`}
                                width={200}
                                height={200}
                                className="w-26 h-32 "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-screen space-y-4 bg-[#E1ECFE] p-4 max-h-110">


                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageak.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageg.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "

                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className=" space-y-4 bg-[#E1ECFE] p-4 max-h-70">


                <div className="flex overflow-x-hidden scrollbar-hide">
                    <div className="flex justify-center overflow-x-hidden mt-4  ">
                        {imageb.map((src, index) => (
                            <div
                                key={index}
                                className="mt-3 flex flex-col items-center p-1 rounded-lg min-w-[100px] text-center text-white"
                            >
                                <Image
                                    src={src}
                                    alt={`menu-${index}`}
                                    width={200}
                                    height={200}
                                    className="w-32 h-36 "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers