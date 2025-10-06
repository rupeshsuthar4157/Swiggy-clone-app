"use client";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const HdfcCard = forwardRef<HTMLDivElement>((props, ref) => {
  const title = "HDFC Bank Credit Card";
  const text =
    "Get ready to experience the awesome world of cashback and benefits with the Swiggy HDFC Bank Credit Card!";
  const buttonText = "Apply now";

  return (
    <section ref={ref} id="hdfc-card-section">
      <div className="flex items-center justify-center min-h-screen bg-white p-4">
        <div className="flex flex-col md:flex-row items-center bg-[#8028A2] rounded-4xl md:w-[1200px] w-full p-6 md:py-1 gap-6">
          {/* Left Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center text-left">
           <motion.div
              className="transition-all"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
              {text}
            </p>
            <Link
            href="swiggy-hdfc-bank-credit-cardfaqs">
            <button className="mt-6 bg-white text-[#8028A2] font-semibold px-6 py-3 rounded-xl hover:bg-[#f1f1f1] transition-all duration-200 w-max cursor-pointer">
              {buttonText}
            </button>
            </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative md:w-1/2 w-full flex justify-center">
           <motion.div
              className="transition-all"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/hdfcs-card-768x714.webp"
              alt="HDFC Card Logo"
              className="w-full max-w-[450px] object-contain"
            />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

HdfcCard.displayName = "HdfcCard";
export default HdfcCard;
