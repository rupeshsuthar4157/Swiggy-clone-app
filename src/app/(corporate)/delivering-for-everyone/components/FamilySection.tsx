"use client";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const FamilySection = forwardRef<HTMLDivElement>((props, ref) => {
  const title = "Swiggy Restaurant Partner Programme";
  const text =
    "Our unified app approach enables our partner base to benefit from a larger user base across offerings, flexible and larger logistics and delivery network, and tools to expand their businesses.";
  const buttonText = "Partner with us";

  return (
    <section ref={ref} id="family-section">
      <div className="flex items-center justify-center min-h-screen bg-white p-4">
        <div className="flex flex-col md:flex-row items-center rounded-4xl md:w-[1200px] w-full p-6 md:py-1 gap-6">
          {/* Left Image */}
          <div className="relative md:w-1/2 w-full flex justify-center">
            <motion.div
              className="transition-all"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-768x699.png"
                alt="Family Logo"
                className="w-full max-w-[550px] object-contain"
              />
            </motion.div>
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center text-left">
            <motion.div
              className="transition-all"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#16191D]">{title}</h2>
              <p className="mt-4 text-[#1F2125] text-base md:text-lg leading-relaxed">
                {text}
              </p>
              <button className="mt-6 bg-[#FF5A1F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e04d1a] transition-all duration-200 w-max">
                {buttonText}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

FamilySection.displayName = "FamilySection";
export default FamilySection;
