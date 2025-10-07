import React from "react";

const keyDetailsData = [
  {
    title: "Card Fees",
    text: `Joining fee ₹500; 
Annual renewal fee ₹500 (waived-off for annual card spends over ₹2 lakhs)`
  },
  {
    title: "Cashback exclusions",
    text: `From any cashback: Rent, Utilities, Fuel, Insurance, EMI, Jewelry, Govt spends, Wallet loads & similar spends 
From 5% cashback: Flight, hotel bookings & others`
  },
  {
    title: "Monthly cashback limit",
    text: `On 10% cashback spends: ₹1500/month 
On 5% cashback spends: ₹1500/month 
On 1% cashback spends: ₹500/month`
  }
];

const KeyDetails = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-10">
        Key details
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {keyDetailsData.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-black text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyDetails;
