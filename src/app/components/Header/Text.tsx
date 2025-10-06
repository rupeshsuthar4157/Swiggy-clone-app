import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Text = () => {
  return (
    <>
      <section className="container mx-auto mt-24 px-4">
        <h2 className="font-bold text-[23px] text-[#02060C]">
          Cities with food delivery
        </h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {Array(4).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(4).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(6).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(1).fill("Show More").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-18 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[#FF5504] rounded-2xl text-center flex items-center 
              justify-center gap-2 w-full sm:w-auto"
            >
              {text}
              <FaArrowRight />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-24 px-4">
        <h2 className="font-bold text-[23px] text-[#02060C]">
          Cities with grocery delivery
        </h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {Array(4).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(4).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(6).fill("order food online in Rajasthan").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-6 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[rgba(2,6,12,0.75)] rounded-2xl text-center
              w-full sm:w-auto"
            >
              {text}
            </div>
          ))}
          {Array(1).fill("Show More").map((text, index) => (
            <div
              key={index}
              className="font-gilroy border border-[#D9DADB] 
              px-18 py-3 font-bold text-[13px] sm:text-[14px] 
              leading-[18px] tracking-[-0.35px] 
              text-[#FF5504] rounded-2xl text-center flex items-center 
              justify-center gap-2 w-full sm:w-auto"
            >
              {text}
              <FaArrowRight />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Text
