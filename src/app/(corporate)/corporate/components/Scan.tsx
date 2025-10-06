"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Scan = () => {
    return (
        <div id="scan-section" className="relative w-full h-[100px] sj:h-[100px] sm:h-[200px] md:h-[200px] lg:h-[300px] overflow-hidden">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0"
            >
                <Image
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
                    alt="Scan App"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </motion.div>
        </div>
    );
};

export default Scan;
