"use client";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

const Frequentlyquestions = () => {
  const questions = [
    {
      question: "If you already have an HDFC Bank Credit Card, how can you upgrade or manage it?",
      answer:
        "You can easily manage or upgrade your HDFC Bank Credit Card through net banking or by visiting your nearest branch.",
    },
    {
      question: "How can I apply for a new HDFC Bank Credit Card?",
      answer:
        "You can apply online through the official website or visit the nearest HDFC Bank branch.",
    },
    {
      question: "What are the benefits of using an HDFC Credit Card?",
      answer:
        "You can earn reward points, cashback, discounts on shopping, dining, and travel benefits.",
    },
    {
      question: "How can I check my credit card statement?",
      answer:
        "You can view your credit card statement via net banking or through the HDFC mobile app.",
    },
    {
      question: "What should I do if I lose my HDFC Credit Card?",
      answer:
        "Immediately block your card through net banking or call the customer care helpline to prevent unauthorized use.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-700 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-12 w-full md:w-[800px] mx-auto mt-18">
        {questions.map((item, index) => (
          <div key={index} className="text-left">
            {/* Question */}
            <div
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <p className="text-[#333333] text-lg md:text-xl hover:text-purple-600 transition">
                {item.question}
              </p>

              <button className="border border-[#CACBD2] rounded-full text-[#CACBD2] p-1 transition-transform">
                <ChevronDownIcon
                  size={28}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-600" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="mt-4 text-gray-600 text-base md:text-lg">
                {item.answer}
              </div>
            )}

            <div className="border-b border-gray-300 mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequentlyquestions;
