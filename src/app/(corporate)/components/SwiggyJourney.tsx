/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Journey = {
    year: number;
    text: string;
    image?: string;
    title?: string;
};

const journeyData: Journey[] = [
    {
        year: 2024,
        text: "Launch of Swiggy Instamart and Swiggy Genie",
        image: "https://i.imgur.com/cKCWllr.png",
    },
    {
        year: 2023,
        text: "Acquisition and integration of Dineout on Swiggy app",
        image: "https://i.imgur.com/Z9NOWir.png",
    },
    {
        year: 2022,
        text: "Launch of our Food Delivery business",
        image: "https://i.imgur.com/cKCWllr.png",
    },
    {
        year: 2021,
        text: "Acquisition and integration of Dineout on Swiggy app",
        title: "Launch of Swiggy Minis",
        image: "https://i.imgur.com/sXE2Xrg.png",
    },
    {
        year: 2021,
        text: "Launch of Swiggy HDFC Bank co-branded credit card",
        image: "https://i.imgur.com/ehpQ7Bo.png",
    },
    {
        year: 2021,
        text: "Swiggy platform crossed 110 million ever transacted users",
        image: "https://i.imgur.com/DBnRC9w.png",
    },
];

const JourneySlider: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const [headingVisible, setHeadingVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeadingVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (headingRef.current) observer.observe(headingRef.current);

        return () => {
            if (headingRef.current) observer.unobserve(headingRef.current);
        };
    }, []);

    return (
        <div className="bg-[#121212] text-white py-10 px-4 sm:px-6 md:px-10">
            <motion.h2
                ref={headingRef}
                initial={{ opacity: 0, y: 50 }}
                animate={headingVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF5200] mb-12"
            >
                <span className="hidden sm:block before:content-[''] before:absolute before:left-4 sm:before:left-20 md:before:left-87 before:top-1/2 before:w-8 sm:before:w-12 md:before:w-10 l before:border-t before:h-[2px] before:border-white"></span>
                <span className="relative font-extrabold block text-capitalize">
                    THE SWIGGY JOURNEY
                </span>
                <span className="hidden sm:block after:content-[''] after:absolute after:right-4 sm:after:right-20 md:after:right-87 after:top-1/2 after:w-8 sm:after:w-12 md:after:w-10 after:border-t after:border-white"></span>
            </motion.h2>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="max-w-3xl mx-auto"
            >
                {journeyData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-[#1c1c1c] rounded-xl shadow-md flex flex-col items-center justify-center p-6 sm:p-8 text-center"
                        >
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-300 mb-4">
                                {item.year}
                            </h3>

                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title || item.text}
                                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain mb-4"
                                />
                            )}

                            <p className="text-sm sm:text-base md:text-lg">{item.text}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default JourneySlider;
