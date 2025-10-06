"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "I want to partner with Instamart",
  "What is the time to onboard?",
  "What flavour/grammage moves the best?",
  "What are the expected volumes in the first 30 days?",
  "Do I get sales data?",
  "How do ads work?",
  "What are the opportunities for expansion into new cities/SKUs?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 200); 
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return (
        <div className="fixed inset-0 flex items-center  justify-center bg-transparent z-50">
          {/* Loader SVG only */}
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent mt-90 ml-45"></div>
        </div>
      );
    }
  

  return (
    <div className="flex-1 p-8 bg-">
      <h1 className="text-2xl font-bold mb-6 mt-15">Instamart Onboarding</h1>
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
              Instamart proudly serves customers in 30 vibrant cities and is consistently expanding its reach to bring convenience and quality to even more locations. We are dedicated to continuous growth, ensuring that more communities can benefit from our top-notch services.

              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
