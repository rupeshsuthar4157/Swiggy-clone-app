/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef } from "react";

const HeroSection = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const textRef = useRef(null);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setVisibleIndex((prev) => {
                if (prev < 2) return prev + 1;
                clearInterval(interval);
                return prev;
            });
            index++;
        }, 600);

        return () => clearInterval(interval);
    }, []);

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

        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            name: "Food",
            img: "https://i.imgur.com/VYnUlAJ.png",
            position: "left-[15%] md:left-[25%] top-[60%] md:top-[50%]",
        },
        {
            name: "Instamart",
            img: "https://i.imgur.com/olGzzbB.png",
            position: "top-[35%] md:top-[30%] left-1/2 -translate-x-1/2",
        },
        {
            name: "Dineout",
            img: "https://i.imgur.com/aCQszu0.png",
            position: "right-[15%] md:right-[25%] top-[60%] md:top-[50%]",
        },
    ];

    return (
        <div className="relative w-full h-[500px] md:h-[600px] bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://i.imgur.com/WUQi8nX.png')] bg-cover bg-center opacity-10 z-0 bg-no-repeat"></div>


            <div
                ref={textRef}
                className="flex flex-col items-center pt-8 md:pt-12 relative z-10 animate-slideUp px-4"
            >
                <h1 className="text-3xl md:text-4xl text-gray-900 font-extrabold">
                    ABOUT US
                </h1>
                <p className="text-base md:text-xl text-gray-500 text-center mt-4 font-medium max-w-5xl">
                    Swiggy is a new-age consumer-first organization offering an
                    easy-to-use convenience platform,
                    accessible through a unified app.
                </p>
            </div>

            <div className="absolute left-1/2 top-[75%] md:top-[70%] -translate-x-1/2 -translate-y-1/2 z-20">
                <img
                    src="https://i.imgur.com/KsHuuDp.png"
                    alt="Swiggy"
                    className="w-16 h-16 md:w-[100px] md:h-[110px]"
                />
            </div>

            {services.map((service, index) => (
                <div
                    key={index}
                    className={`absolute ${service.position} flex flex-col items-center z-20 
            transition-all duration-700 ease-out
            ${visibleIndex >= index
                            ? "opacity-100 scale-100 animate-bounceForward"
                            : "opacity-0 scale-50"
                        }`}
                >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center relative">
                        <img
                            src={service.img}
                            alt={service.name}
                            className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                        <div className="absolute -bottom-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-orange-500"></div>
                    </div>
                    <span className="mt-2 md:mt-3 text-gray-800 font-semibold text-base md:text-xl text-center">
                        {service.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default HeroSection;
