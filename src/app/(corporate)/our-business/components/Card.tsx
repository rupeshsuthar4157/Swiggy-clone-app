"use client";

import React, { useEffect, useRef, useState } from "react";

const Card = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);
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

  const services = [
    {
      title: "Swiggy Food",
      description:
        "On our Food Delivery marketplace, users can conveniently search and discover multiple restaurant listings, browse their menus, place food orders, pay seamlessly, and track order deliveries. These orders are received and prepared by our restaurant partners and delivered to users through the large fleet of delivery partners on our platform.",
      buttonText: "Place your order here",
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Resto-Comp_TB.webp",
      buttonLink: "/",
    },
    {
      title: "Swiggy Instamart",
      description:
        "On Instamart, users can access and browse a wide selection of grocery and household items. These orders are processed through our dark stores and delivered to users through delivery partners.",
      buttonText: "Place your order here",
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Resto.webp",
      buttonLink: "instamart",
    },
    {
      title: "Swiggy Dineout",
      description:
        "Dineout facilitates a user's eating-out experience, through which users can discover restaurants, access menus and images, make reservations, and make digital payments on our platform.",
      buttonText: "Click here to make reservations",
      image:
        "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-1.webp",
      buttonLink: "https://www.dineout.co.in/",
    },
  ];

  return (
    <section ref={headingRef} className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-[3rem] p-8 flex flex-col items-center text-center transition-all duration-700 
                transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{
                boxShadow: "0 6px 20px rgba(255, 82, 0, 0.25)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(255, 82, 0, 0.45)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(255, 82, 0, 0.25)")
              }
            >
              <div className="mb- overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={100}
                  className={`mx-auto transition-transform duration-500 transform group-hover:scale-110 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } rounded-xl shadow-lg`}
                />
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-3">
                {service.title}
              </h2>
              <div className="w-full h-[3px] bg-[#F6F0F1] mb-5"></div>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                {service.description}
              </p>

              <a
                href={service.buttonLink}
                className="bg-[#ff5200] hover:bg-[#e64b00] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-md"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
