/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Count from "./Count";

const data = [
    {
        title:
            "Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.",
    },
];

const IndustryPioneer = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">
                        {data[0].title}
                    </p>
                </motion.div>

                <motion.div
                    className="hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://i.imgur.com/13mwtT7.png"
                        alt="img"
                        className="w-[320px] h-[320px] object-contain"
                    />
                </motion.div>
            </div>
            <Count />
        </>
    );
};

export default IndustryPioneer;
