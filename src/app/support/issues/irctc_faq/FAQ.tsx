"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  "Will my order be delivered according to the promised time?",
  "What will happen if the train is delayed?",
  "My train is scheduled for next week, when can I place my order?",
  "How is the confirmation of the booking done?",
  "Can I cancel my order?",
  "What is the minimum order value for IRCTC orders?",
  "What are the payment options available?",
  "Whom do I contact, if the meal is not delivered?",
  "What will happen if my train is canceled?",
  "I have a different phone number than what I have in the Swiggy Application",
  "Whom do I contact to receive my order on my seat/coach?",
  "I am not on my assigned seat/coach. How will the order be delivered to me?",
  "What will happen if Swiggy cannot deliver my order?",
  "My ticket is not confirmed and is wait-listed, can I book a meal?",
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
      <h1 className="text-2xl font-bold mb-6 mt-15">IRCTC FAQ</h1>
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
                These terms of use (the &ldquo;Terms of Use&rdquo;) govern your use of our website www.swiggy.in (the &quot;Website&ldquo;) and our &quot;Swiggy&quot; application for mobile and handheld devices (the &quot;App&ldquo;). The Website and the App are jointly referred to as the &quot;Services&#34;). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.

              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
