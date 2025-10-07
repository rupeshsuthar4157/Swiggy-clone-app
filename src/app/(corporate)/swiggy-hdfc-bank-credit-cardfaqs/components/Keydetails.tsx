import React from "react";

const KeyDetails = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-10">
        Key details
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Card Fees</h3>
          <p className="text-black">
            Joining fee ₹500; <br />
            Annual renewal fee ₹500 (waived-off for annual card spends over ₹2
            lakhs)
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Cashback exclusions</h3>
          <p className="text-gray-700">
            From any cashback: Rent, Utilities, Fuel, Insurance, EMI, Jewelry,
            Govt spends, Wallet loads & similar spends <br />
            From 5% cashback: Flight, hotel bookings & others
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Monthly cashback limit</h3>
          <p className="text-gray-700">
            On 10% cashback spends: ₹1500/month <br />
            On 5% cashback spends: ₹1500/month <br />
            On 1% cashback spends: ₹500/month
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyDetails;
