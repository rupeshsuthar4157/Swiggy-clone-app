import React from "react";


const Bonusbenefits = () => {
  return (
    <div className="w-full  flex items-center justify-center">

    <section className="flex flex-col md:flex-row justify-between items-start md:items-center px-10 py-12 bg-white text-[#1a1a1a]">
      <div className="md:w-1/2 space-y-4">
        <img src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/mc-logo.png" alt="Mastercard" className="w-20 mb-2" />

        <h2 className="text-3xl font-bold text-black">Bonus benefits</h2>

        <p className="text-base text-gray-700 leading-relaxed">
          Enjoy a wide range of <strong>Mastercard World</strong> benefits with this card
        </p>

        <a
          href="#"
          className="text-purple-700 underline hover:text-purple-800 transition"
        >
          View all Mastercard World Benefits
        </a>
      </div>

      <div className="md:w-1/2 flex flex-col space-y-8 mt-10 md:mt-0">
        <div className="flex items-start space-x-4">
          <img src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba508292b8b8352f883cf_mc_golf-min.png" alt="Golf" className="w-12 h-12" />
          <div>
            <p className="font-semibold text-black">
              Premium golf club access worldwide*:
            </p>
            <p className="text-gray-700">
              12 free golf lessons/year in India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba5081adae7040349fe70_mc_freestaydine-min.png" alt="Bed" className="w-12 h-12" />
          <div>
            <p className="font-semibold text-black">
              Free stay & dine:
            </p>
            <p className="text-gray-700">
              One night & one dine free at select Mastercard partners globally
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/64bba508fd2a4cab9fadf67d_mc_agoda-min.png" alt="Hotel" className="w-12 h-12" />
          <div>
            <p className="font-semibold text-black">Agoda discounts:</p>
            <p className="text-gray-700">
              Up to 12% instant discount on worldwide hotels on Agoda*
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>

  );
};

export default Bonusbenefits;
