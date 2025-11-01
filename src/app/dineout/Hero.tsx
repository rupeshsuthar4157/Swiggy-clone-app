import React from 'react'
import Image from 'next/image'
import { ArrowRightLeft } from 'lucide-react';


// const categories = [
//     "Filter",
//     "Sort by",
//     "Book a Table",
//     "Within 5km",
//     "Rating 4+",
//     "Pure Veg",
//     "Serves Alcohol",
// ];

const Hero = () => {
    return (
        <div className='mt-30'>
            <div className='container mx-auto'>
                <p className='absolute top-100 text-4xl ml-4 font-bold hidden md:block'>Explore Top Dining Out <br /> Restaurants in Jaipur</p>
                <div className=''>
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
                        alt=''
                        height={600}
                        width={1500}
                        className='overflow-auto'
                    />

                </div>

                {/* <div className=" flex flex-wrap  gap-2 mt-13">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[#414449] border rounded-full shadow-[0_1px_3px_0_rgba(33,33,33,0.2)] cursor-pointer"
                        >
                            {item}
                            {index < 2 && <ArrowRightLeft size={20} className="text-gray-600" />}
                        </div>
                    ))}
                </div> */}
            </div>


        </div>
    )
}

export default Hero