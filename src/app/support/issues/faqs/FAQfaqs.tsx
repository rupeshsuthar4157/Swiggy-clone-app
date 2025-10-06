"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "What is Swiggy Customer Care Number?",
  "I want to explore career opportunities with Swiggy",
  "I want to provide feedback",
  "Can I edit my order?",
  "I want to cancel my order",
  "Will Swiggy be accountable for quality/quantity?",
  "Is there a minimum order value?",
  "Do you charge for delivery?",
  "How long do you take to deliver?",
  "Is single order from many restaurants possible?",
  "Do you support bulk orders?",
  "Can I order in advance?",
  "What is Swiggy Customer Care Number?",
  "I want to explore career opportunities with Swiggy",
  "I want to provide feedback",
  "Can I edit my order?",
  "I want to cancel my order",
  "Will Swiggy be accountable for quality/quantity?",
  "Is there a minimum order value?",
  "Do you charge for delivery?",
  "How long do you take to deliver?",
  "Is single order from many restaurants possible?",
  "Do you support bulk orders?",
  "Can I order in advance?",
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
      <h1 className="text-2xl font-bold mb-6 mt-15">FAQs</h1>
      <div className="space-y-2 cursor-pointer ">
        {faqs.map((q, index) => (
          <div key={index} className="border-b pb-2 hover:text-[#FF5200] cursor-pointer">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left py-3"
            >
              <span>{q}</span>
              <ChevronDown
                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-2">
                These terms of use (the &#34;Terms of Use&#34;) govern your use of our website www.swiggy.in.

              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
