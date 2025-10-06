/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    imgSrc: string;
    title: string;
    description: string;
    readMore: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, readMore }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white border border-gray-400 shadow-lg rounded-[20px] overflow-hidden group"
        >
            <div className="w-full group-hover:scale-110 duration-300 transform transition relative mx-auto h-auto overflow-hidden rounded-lg">
                <img
                    src={imgSrc}
                    alt={title}
                    className="object-cover mb-4 w-full h-auto relative z-0 rounded-lg"
                />
            </div>
            <div className="p-3">
                <h2 className="text-sm font-medium mb-2 text-gray-500">{title}</h2>
                <p className="text-gray-600 font-semibold">{description}</p>
                <button className="bg-[#FFEEE5] text-[#FF5200] text-sm rounded-[12px] px-4 py-2 mt-4">
                    {readMore}
                </button>
            </div>
        </motion.div>
    );
};

const CardSection: React.FC = () => {
    const cards = [
        {
            imgSrc: "https://i.imgur.com/jivGNzz.png",
            title: "October 02, 2025",
            description: "Bridging cultures through cuisine: The Nasi and Mee Story",
            readMore: "Read More",
        },
        {
            imgSrc: "https://i.imgur.com/fLmhHVM.png",
            title: "October 02, 2025",
            description: "Hiring from 1x to 10x via Swiggy’s Future Proofing Strategy",
            readMore: "Read More",
        },
        {
            imgSrc: "https://i.imgur.com/HWp3hpR.png",
            title: "October 02, 2025",
            description: "Taking Local Campaigns to the National Stage, ft. Rana Bayas, Senior Area Sales Manager at Swiggy",
            readMore: "Read More",
        },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            description={card.description}
                            readMore={card.readMore}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#FF5200] text-white font-bold text-xs rounded-[12px] px-4 py-2"
                >
                    Explore
                </motion.button>
            </div>
        </>
    );
};

export default CardSection;
