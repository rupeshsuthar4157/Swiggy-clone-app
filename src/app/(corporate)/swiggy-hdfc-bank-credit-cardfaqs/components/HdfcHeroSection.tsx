import React from "react";

const HdfcHeroSection = () => {
  const data = {
    hero: {
      title: "Swiggy\nHDFC Bank\nCredit Card",
      subtitle:
        "Get ready to experience the awesome world of cashback and benefits with the Swiggy HDFC Bank Credit Card!",
      button: "Apply Now",
      image:
        "https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bb93fb778125db877f1992_hero-card-cropped-min.png",
    },
    cashbackHeading: "It's raining cashback!",
    sections: [
      {
        title: "10% cashback on Swiggy spends*",
        description:
          "That's in addition to the regular offers & discounts! Across ordering food, dining out, groceries and more",
        note: "Up to Rs 1500 cashback per month",
        image:
          "https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bfbdc6d35c9c317036_10-min.png",
        reverse: false,
      },
      {
        title: "5% cashback on online spends*",
        description:
          "On 1000s of online platforms & apps. This is for all you digital shopping enthusiasts!",
        note: "Up to Rs 1500 cashback per month",
        image:
          "https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bf51f2b2991116ae9e_5-min-p-800.png",
        reverse: true,
      },
      {
        title: "1% cashback on other spends*",
        description:
          "On offline spends and other food, grocery & dining apps",
        note: "Up to Rs 500 cashback per month",
        image:
          "https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba1bf40139f5a57e33e9e_1-min-p-500.png",
        reverse: false,
      },
    ],
    calculator: {
      heading: "Savings calculator",
      description:
        "Check out how much you will be saving with the card",
      button: "Calculate now",
      image:
        "https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/65cc9c5519a2a4bce864b6b7_banner-min.png",
    },
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-[#8E3483] to-[#AC5DC4] py-20 md:py-40">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 text-white">
          <div className="text-center md:text-left max-w-lg  md:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight whitespace-pre-line">
              {data.hero.title}
            </h1>

            <p className="text-base sm:text-sm opacity-90">
              {data.hero.subtitle}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-white text-[#91398A] font-semibold px-16 sm:px-20 py-3 rounded-2xl hover:bg-opacity-90 transition cursor-pointer">
                {data.hero.button}
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={data.hero.image}
              alt="HDFC Swiggy Credit Card"
              className="w-64 sm:w-80 md:w-[430px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mt-16 text-center px-4">
        <h1 className="text-[#823A8F] text-2xl sm:text-5xl font-extrabold">
          {data.cashbackHeading}
        </h1>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {!section.reverse && (
              <img
                src={section.image}
                alt={section.title}
                className="w-80 md:w-[430px]   sm:w-[130px]  h-auto object-contain"
              />
            )}

            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                {section.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {section.description}
              </p>
              <p className="font-normal text-sm mt-2">{section.note}</p>
            </div>

            {section.reverse && (
              <img
                src={section.image}
                alt={section.title}
                className="w-80 md:w-[430px] h-auto object-contain order-1 md:order-2"
              />
            )}
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-semibold text-[#823A8F]">
              {data.calculator.heading}
            </h3>
            <p className="mt-6 text-black text-3xl sm:text-4xl whitespace-pre-line">
              {data.calculator.description}
            </p>
            <button className="mt-16 bg-[#F15700] font-bold text-2xl text-white px-32 sm:px-40 py-6 rounded-2xl hover:bg-opacity-90 transition cursor-pointer">
              {data.calculator.button}
            </button>
          </div>
          <img
            src={data.calculator.image}
            alt={data.calculator.heading}
            className="w-80 md:w-[430px] h-auto object-contain order-1 md:order-2"
          />
        </div>
      </section>
    </div>
  );
};

export default HdfcHeroSection;
