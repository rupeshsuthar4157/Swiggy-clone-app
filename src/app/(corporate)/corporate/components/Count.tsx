"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const counts = [
    { count: "3", suffix: " Billion+", name: "orders delivered" },
    { count: "220", suffix: "k+", name: "restaurant partners" },
    { count: "520", suffix: "k+", name: "delivery partners" },
    { count: "680", suffix: "+", name: "cities in India" },
];

const Count = () => {
    return (
        <div className="flex flex-wrap justify-center text-center gap-8 py-10 bg-gray-50">
            {counts.map((item, index) => (
                <motion.div
                    key={index}
                    className="w-1/5 min-w-[150px]"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#1BA672] text-3xl font-bold">
                        <CountUp
                            start={0}
                            end={parseInt(item.count)}
                            duration={2.5}
                            separator=","
                            suffix={item.suffix}
                        />
                    </p>
                    <p className="text-gray-700 font-medium">{item.name}</p>
                </motion.div>
            ))
            }
        </div >
    );
};

export default Count;
