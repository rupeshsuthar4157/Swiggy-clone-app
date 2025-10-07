// "use client"
// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "If you have an HDFC Bank credit card already",
//     answer: "If you already have an HDFC Bank credit card, please visit the bank’s website or nearest branch for details.",
//   },
//   {
//     question: "How and when do I get cashback?",
//     answer: "Cashback will be credited to your account as per the offer terms, typically within 90 days of the transaction.",
//   },
//   {
//     question: "Where all can I use this cashback?",
//     answer: "Cashback can be used for future purchases or adjusted against your outstanding credit card bill.",
//   },
//   {
//     question: "What categories of Swiggy will I get the 10% cashback on?",
//     answer: "You’ll receive 10% cashback on Swiggy Food Orders, Instamart, Dineout, and Genie.",
//   },
//   {
//     question: "What type of online spends will I get 5% cashback on?",
//     answer: "You’ll get 5% cashback on popular online merchants as listed in the card’s T&C document.",
//   },
// ];

// const Frequentlyquestions = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="max-w-3xl mx-auto py-16 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">
//         Frequently asked questions
//       </h2>

//       <div className="space-y-6">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-gray-200 pb-4 cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-medium text-gray-800">
//                 {faq.question}
//               </h3>
//               <ChevronDown
//                 className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </div>

//             {openIndex === index && (
//               <p className="mt-3 text-gray-600 text-sm leading-relaxed">
//                 {faq.answer}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Frequentlyquestions;
