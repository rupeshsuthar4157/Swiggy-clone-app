/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

const swiggy = [
    {
        title: `When you work at Swiggy, you’re joining a culture of innovation, teamwork, and endless possibilities. We believe in empowering our employees to take charge of their careers and make a real impact. Whether you’re a software engineer, a marketing guru, a logistics expert, or someone who loves delivering exceptional customer experiences, there’s a place for you at Swiggy.`,
        titlesecond: `If you’re excited about making a difference and want to be part of a team that’s transforming the way people live, then we want to hear from you!`,
        titletr: `Explore our current openings and embark on your next career adventure with Swiggy. Let’s deliver unparalleled convenience together!`,
        button: `Know More`,
    }
]

const Atswiggy = () => {
    return (
        <div className="flex flex-col sj:flex-col sj:items-center md:flex-row justify-between items-center gap-6">

            <motion.div
                className="w-full relative mx-auto h-auto overflow-hidden rounded-2xl order-1 sj:order-1 md:order-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://i.imgur.com/z94BR0U.jpeg"
                    alt="logs"
                    className="object-cover mb-4 w-120 h-auto rounded-2xl transition-all duration-500 hover:scale-110"
                />
            </motion.div>

            <motion.div
                className="max-w-md mx-auto order-2 sj:order-2 md:order-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p className="text-[#8E8F92] text-sm">{swiggy[0].title}</p>
                <p className="text-[#8E8F92] mt-4 text-sm">{swiggy[0].titlesecond}</p>
                <p className="text-[#8E8F92] mt-4 text-sm">{swiggy[0].titletr}</p>
                <button className='bg-[#FF5200] text-white text-sm rounded-[12px] px-4 py-2 mt-4'>
                    {swiggy[0].button}
                </button>
            </motion.div>
        </div>
    )
}

export default Atswiggy
