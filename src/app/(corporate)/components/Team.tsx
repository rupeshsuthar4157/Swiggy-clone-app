/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";

const managementTeam = [
    {
        name: "Sriharsha Majety",
        role: "Managing Director and Group CEO",
        image: "https://i.imgur.com/7wUGQeg.jpeg",
    },
    {
        name: "Nandan Reddy",
        role: "Whole-time Director and Head of Innovation",
        image: "https://i.imgur.com/BecjHMb.jpeg",
    },
    {
        name: "Rohit Kapoor",
        role: "CEO – Food Marketplace",
        image: "https://i.imgur.com/TzfGjDq.jpeg",
    },
];

const boardOfDirectors = [
    {
        name: "John Doe",
        role: "Independent Director",
        image: "https://i.imgur.com/fedvOml.jpeg",
    },
    {
        name: "Jane Smith",
        role: "Board Member",
        image: "https://i.imgur.com/ugzmeMd.jpeg",
    },
];

const TeamSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"management" | "board">(
        "management"
    );

    const data = activeTab === "management" ? managementTeam : boardOfDirectors;

    return (
        <div className="bg-white py-12 max-w-5xl mx-auto px-5">
            <div className="flex justify-start gap-4 mb-10">
                <button
                    onClick={() => setActiveTab("management")}
                    className={`px-6 py-2 rounded-full font-medium ${activeTab === "management"
                        ? "bg-[#FF5200] text-white"
                        : "border border-gray-300 text-gray-700"
                        }`}
                >
                    Management Team
                </button>
                <button
                    onClick={() => setActiveTab("board")}
                    className={`px-6 py-2 rounded-full font-medium ${activeTab === "board"
                        ? "bg-[#FF5200] text-white"
                        : "border border-gray-300 text-gray-700"
                        }`}
                >
                    Board of Directors
                </button>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={3}
                className="max-w-6xl mx-auto"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map((member, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            className="flex flex-col p-6"
                        >
                            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover mb-4 w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <span>
                                    <h3 className="text-lg font-bold text-black">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </span>
                                <button className="mt-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                                    <ArrowRight className="bg-gray-700 rounded-full text-white h-8 w-8" />
                                </button>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamSection;
