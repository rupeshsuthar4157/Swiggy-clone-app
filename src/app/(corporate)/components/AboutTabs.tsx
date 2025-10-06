/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = {
    id: string;
    title: string;
    content: string;
    media: string;
    button?: string;
};

const tabs: Tab[] = [
    {
        id: "mission",
        title: "Mission",
        content:
            "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, 'Let’s do this.'",
        media: "https://i.imgur.com/7mBqmvN.png",
    },
    {
        id: "vision",
        title: "Vision",
        media: "https://www.youtube.com/watch?v=fLz2fgU_x1Q",
        content: "",
    },
    {
        id: "values",
        title: "Values",
        content:
            "Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture.",
        media: "https://youtu.be/TjEK0MbJUz4?si=EpAeAX1L_3ty0iNI",
        button: "Khow more",
    },
];

function getEmbedUrl(url: string) {
    if (!url) return "";
    if (url.includes("watch?v=")) {
        return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be")) {
        return url.replace("youtu.be/", "www.youtube.com/embed/");
    }
    return url;
}

export default function AboutTabs() {
    const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

    const isYouTube =
        activeTab.media?.includes("youtube.com") ||
        activeTab.media?.includes("youtu.be");

    const videoTabs = ["vision", "values"];

    return (
        <motion.div
            className="flex flex-col md:flex-row gap-8 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
            }}
        >
            <motion.div
                className="flex md:flex-col gap-6 md:w-1/4 w-full"
                variants={{
                    hidden: { opacity: 0, x: -60 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`text-lg font-semibold transition-all text-left ${activeTab.id === tab.id
                            ? "text-orange-600 border-b-2 md:border-b-0 md:border-l-2 border-orange-600"
                            : "text-gray-400 hover:text-gray-700"
                            }`}
                    >
                        {tab.title} →
                    </button>
                ))}
            </motion.div>

            <motion.div
                className={`flex-1 flex flex-col md:flex-row gap-8 items-center ${videoTabs.includes(activeTab.id) ? "w-full" : ""
                    }`}
                variants={{
                    hidden: { opacity: 0, x: 60 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
            >
                <AnimatePresence mode="wait">
                    {activeTab.id !== "vision" && (
                        <motion.div
                            key={activeTab.id + "-text"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="md:w-1/2"
                        >
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {activeTab.content}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id + "-media"}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                        className={
                            videoTabs.includes(activeTab.id)
                                ? "w-full h-[300px] md:w-[650px] md:h-[350px]"
                                : "md:w-1/2"
                        }
                    >
                        {/* note:- ager hume koi do vals ko render karna ho toh hume use dono value ko ek variabale me store karna hoga jisse hum use variabale ka use karke dono me condition lga sakte hai */}

                        {isYouTube ? (
                            <iframe
                                src={getEmbedUrl(activeTab.media)}
                                title={activeTab.title}
                                className="rounded-xl w-full h-full shadow-md"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                        ) : (
                            <img
                                src={activeTab.media}
                                alt={activeTab.title}
                                className="rounded-xl w-full h-[250px] md:h-[320px] object-cover shadow-md"
                            />
                        )}
                        {/* {activeTab.id === "values" && (
                            <button className="absolute top-10 right-100 bg-[#FF5200] text-white px-4 py-2 rounded-lg">{activeTab.button}</button>
                        )} */}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
