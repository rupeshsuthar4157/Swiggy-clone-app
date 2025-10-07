import React from "react";

const HdfcHeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#8E3483] to-[#AC5DC4] py-40">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-white">
          {/* Left Text */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl font-bold leading-tight">
              Swiggy <br /> HDFC Bank <br /> Credit Card
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Get ready to experience the awesome world of cashback and benefits
              with the Swiggy HDFC Bank Credit Card!
            </p>
            <button className="mt-6 bg-white text-[#91398A] font-semibold px-20 py-3 rounded-2xl hover:bg-opacity-90 transition cursor-pointer">
              Apply Now
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0">
            <img
              src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bb93fb778125db877f1992_hero-card-cropped-min.png"
              alt="HDFC Swiggy Credit Card"
              className="w-80 md:w-[430px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Cashback Heading */}
      <div className="flex items-center justify-center mt-16">
        <h1 className="text-[#823A8F] text-5xl font-extrabold">
          It's raining cashback!
        </h1>
      </div>

      {/* Feature Sections */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bfbdc6d35c9c317036_10-min.png"
            alt="Smooth Shopping"
            className="w-80 md:w-[430px] h-auto object-contain"
          />
          <div>
            <h3 className="text-4xl font-semibold text-gray-900">
              10% cashback on Swiggy spends*
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Thats in addition to the regular offers & discounts! Across
              ordering food, dining out, groceries and more
            </p>
            <p className="font-normal text-sm">
              Up to Rs 1500 cashback per month
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-semibold text-gray-900">
              5% cashback on online spends*
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              On 1000s of online platforms & apps. This is for all you digital
              shopping enthusiasts!
            </p>
            <p className="font-normal text-sm">
              Up to Rs 1500 cashback per month
            </p>
          </div>
          <img
            src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bf51f2b2991116ae9e_5-min-p-800.png"
            alt="Secure Payments"
            className="w-80 md:w-[430px] h-auto object-contain order-1 md:order-2"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bf40139f5a57e33e9e_1-min-p-500.png"
            alt="Growth Insights"
            className="w-80 md:w-[430px] h-auto object-contain"
          />
          <div>
            <h3 className="text-4xl font-semibold text-gray-900">
              1% cashback on other spends*
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              On offline spends and other food, grocery & dining apps
            </p>
            <p className="font-normal text-sm">
              Up to Rs 500 cashback per month
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-semibold  text-[#823A8F]">
              Savings calculator
            </h3>
            <p className="mt-6 text-black text-4xl">
              Check out how much you <br /> will be saving with the <br /> card
            </p>
            <button className="mt-16  bg-[#F15700] font-bold text-2xl text-white  px-40 py-6 rounded-2xl hover:bg-opacity-90 transition cursor-pointer">
              Calculate now
            </button>
          </div>
          <img
            src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/65cc9c5519a2a4bce864b6b7_banner-min.png"
            alt="Instant Add to Cart"
            className="w-80 md:w-[430px] h-auto object-contain order-1 md:order-2"
          />
        </div>
      </section>
    </div>
  );
};

export default HdfcHeroSection;
