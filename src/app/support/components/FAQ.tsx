"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "I want to partner my restaurant with Swiggy",
  "What are the mandatory documents needed to list my restaurant on Swiggy?",
  "I want to opt-out from Google reserve",
  "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
  "What is this one time Onboarding fees? Do I have to pay for it while registering?",
  "Who should I contact if I need help & support in getting onboarded?",
  "How much commission will I be charged by Swiggy?",
  "I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex-1 p-8 mt-15 bg-">
      <h1 className="text-2xl font-bold ">Partner Onboarding</h1>
      <div className="space-y-2 cursor-pointer ">
        {faqs.map((q, index) => (
          <div key={index} className="border-b pb-2 hover:text-[#FF5200] cursor-pointer">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left py-3"
            >
              <span>{q}</span>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-2">
                Answer content goes here (aap apna text daal sakte ho).
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
