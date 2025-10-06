/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";

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
      <div className="max-w-5xl mx-auto px-4">
        <h2
          ref={headingRef}
          className={`relative text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-4 animate-slideUp ${
            isVisible ? "active" : ""
          }`}
        >
          <span className="relative font-extrabold block text-capitalize">
            OUR BUSINESSES
          </span>
        </h2>
      </div>
    </section>
  );
}
