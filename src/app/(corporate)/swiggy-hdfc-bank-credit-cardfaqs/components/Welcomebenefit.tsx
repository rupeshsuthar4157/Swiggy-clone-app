import React from "react";

const Welcomebenefit = () => {
  return (
    <div className="relative bg-[#F8EFFF] py-18 flex justify-center px-4 overflow-hidden">
      {/* Center Content */}
      <div className="text-center max-w-lg z-10">
        <h1 className="text-[#823A8F] font-semibold text-4xl md:text-5xl mt-24">
          Welcome Benefit
        </h1>

        <img
          src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bc4f8ec380dc07d9c1b023_dweb_swiggy_one-min.png"
          alt="Swiggy One Membership"
          className="mt-10 mx-auto w-60 md:w-72 h-auto"
        />

        <h2 className="mt-10 text-black font-semibold text-3xl md:text-4xl">
          FREE 3 Month Membership
        </h2>

        <h3 className="mt-3 text-black font-medium text-xl md:text-2xl">
          worth ₹1199
        </h3>

        <p className="text-[#453639] font-medium text-sm md:text-base mt-4 leading-relaxed">
          Complimentary with Swiggy HDFC Bank Credit Card. <br />
          Enjoy free deliveries & extra discounts on Food, Instamart, Dineout &
          more!
        </p>

        <p className="text-[#453639]  mt-4 font-medium text-sm italic">
          Redeemable upon card activation
        </p>
      </div>

      <img
        src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bc4b3b03823445f3498b0e_hand-with-balloons-5x-min.png"
        alt="Left decoration"
        className="absolute bottom-0  left-0 w-32 md:w-48 opacity-90 transform -scale-x-100"
      />

      <img
        src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bc4b3b03823445f3498b0e_hand-with-balloons-5x-min.png"
        alt="Right decoration"
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-90 "
      />
    </div>
  );
};

export default Welcomebenefit;
