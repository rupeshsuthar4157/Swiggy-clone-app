"use client";
import React, { useEffect, useRef } from "react";

const Ipo = () => {
    const headingRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (headingRef.current) observer.observe(headingRef.current);
        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative mt-10 mb-16 bg-[#FFFFFF] py-10 px-4">
            <div
                ref={headingRef}
                className="relative flex flex-col items-center animate-slideUp"
            >
                <span className="hidden sm:block absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2">
                    <hr className="border border-orange-600 w-10 md:w-[44px]" />
                </span>

                <h1 className="text-[#414449] font-extrabold text-xl sm:text-2xl md:text-4xl text-center">
                    IPO DELIVERED - NOVEMBER 2025
                </h1>

                <span className="hidden sm:block absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2">
                    <hr className="border border-orange-600 w-10 md:w-[44px]" />
                </span>
            </div>

            <div
                ref={videoRef}
                className="relative flex items-center mt-10 md:mt-20 justify-center animate-slideUp"
            >
                <div className=" max-w-3xl aspect-video rounded-2xl w-full overflow-hidden shadow-lg border border-gray-200">
                    <video
                        className="w-full h-full rounded-2xl object-cover"
                        src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4"
                        controls
                        preload="metadata"
                        autoPlay
                    />
                </div>
            </div>
        </div>
    );
};

export default Ipo;
