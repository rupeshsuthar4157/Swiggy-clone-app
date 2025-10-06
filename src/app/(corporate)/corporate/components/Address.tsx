import React from 'react'
import { motion } from 'framer-motion'

const address = [
    {
        title1: `Head Office Address:`,
        title2: `Swiggy Limited  (Formerly known as Bundl Technologies Private Limited & Swiggy Private Limited)`,
        title3: `No. 55 Sy No 8 to 14 I & J Block – Ground Floor, Embassy Tech Village | Outer Ring Road, Devarbisanahalli,  Bengaluru – 560103`,
        title4: `For help and support:`,
        title5: `Email : support@swiggy.in`,
    }
]

const Address = () => {
    return (
        <div>
            <div className='flex flex-col justify-between items-center gap-10 sj:flex-col  sj:items-center md:flex-row '>
                <motion.div
                    className="w-full max-w-[430px] h-[250px] md:h-[300px] relative mx-auto overflow-hidden rounded-2xl order-1 md:order-2"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2165.101178913766!2d71.74670945794723!3d24.939874374861176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3944979bce5079c9%3A0xfa1fc1215b8b1c82!2sZezo%20Softwares.!5e1!3m2!1sen!2sin!4v1759382686078!5m2!1sen!2sin"
                        className="w-full h-full border-0 rounded-2xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

                <motion.div className='max-w-lg order-2 sj:order-2 md:order-1'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div>
                        <p className='text-gray-900 font-extrabold '>{address[0].title1}</p>
                        <motion.p className='text-gray-600 mt-2 text-sm'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {address[0].title2}</motion.p>
                        <motion.p className='text-gray-600 text-sm'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {address[0].title3}</motion.p>
                        <p className='text-gray-900 font-extrabold mt-20 '>{address[0].title4}</p>
                        <motion.p className='text-gray-600 text-sm mt-1'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {address[0].title5}</motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Address
