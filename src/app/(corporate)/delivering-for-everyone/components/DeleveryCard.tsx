"use client";
import React, { useEffect, useRef, useState } from "react";
import SwiggyOne from "./SwiggyOne";
import HdfcCard from "./HdfcCard";
import RideWithSwiggy from "./RideWithSwiggyTwo";
import FamilySection from "./FamilySection";
import FlavourMeetsFame from "./FlavourMeetsFame";

const Card = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const swiggyOneRef = useRef<HTMLDivElement | null>(null);
  const hdfcCardRef = useRef<HTMLDivElement | null>(null);
  const rideCardRef = useRef<HTMLDivElement | null>(null);
  const familyRef = useRef<HTMLDivElement | null>(null);
  const flavourRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Swiggy One",
      ref: swiggyOneRef,
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-one.webp",
    },
    {
      title: "HDFC Credit Card",
      ref: hdfcCardRef,
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Hdfc.webp",
    },
    {
      title: "Ride With Swiggy",
      ref: rideCardRef,
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Group-1000006480.webp",
    },
    {
      title: "Family-section",
      ref: familyRef,
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/home-2.webp",
    },
    {
      title: "Flavour Meets Fame",
      ref: flavourRef,
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/flavour.webp",
    },
  ];

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

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div>
      {/* Top Card Grid */}
      <section ref={headingRef} className="py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-[#F7F6FB] border-2 border-white rounded-2xl p-6 flex flex-col items-center justify-between text-center transition-all duration-900 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  boxShadow: "0 6px 20px rgba(255, 82, 0, 0.25)",
                  minHeight: "320px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  service.ref.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 80px rgba(255, 82, 0, 0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(255, 82, 0, 0.25)")
                }
              >
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={200}
                    height={200}
                    className={`transition-transform duration-900 ease-out transform group-hover:scale-150 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      zIndex: 10,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                </div>
                <a className="mt-6 text-[1.1rem] font-semibold text-gray-800 bg-[#fff] border border-[#f1f1f1] p-3 rounded-xl flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {service.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <SwiggyOne ref={swiggyOneRef} />
      <HdfcCard ref={hdfcCardRef} />
      <RideWithSwiggy ref={rideCardRef} />
      <FamilySection ref={familyRef} />
      <FlavourMeetsFame ref={flavourRef} />
    </div>
  );
};

export default Card;
