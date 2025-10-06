/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import IndustryPioneer from "./IndustryPioneer";

export default function AboutPage() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) observer.unobserve(headingRef.current);
        };
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    ref={headingRef}
                    className={`relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-4 animate-slideUp ${isVisible ? "active" : ""
                        }`}
                >
                    <span className="hidden sm:block before:content-[''] before:absolute before:left-4 sm:before:left-20 md:before:left-40 lg:before:left-72 before:top-1/2 before:w-8 sm:before:w-12 md:before:w-16 before:border-t before:border-orange-500"></span>

                    <span className="relative font-extrabold block text-capitalize">INDUSTRY PIONEER</span>

                    <span className="hidden sm:block after:content-[''] after:absolute after:right-4 sm:after:right-20 md:after:right-40 lg:after:right-72 after:top-1/2 after:w-8 sm:after:w-12 md:after:w-16 after:border-t after:border-orange-500"></span>
                </h2>
                <IndustryPioneer />
            </div>
        </section>
    );
}
