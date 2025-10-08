import React from 'react'

const ScantheQRcode = () => {
    const keyDetailsData = [
  {
    text: `Scan the QR code to start the application in the Swiggy App.
Or open Swiggy App to start your application today`
  },
];
  return (
  <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-700 mb-10">
       So what are you waiting for? <br />
Apply Now!
      </h2>

      <div className="grid md:grid-cols-1 gap-8 text-center">
        {keyDetailsData.map((item, index) => (
          <div key={index}>
            <p className="text-gray-700 whitespace-pre-line text-xl">{item.text}</p>
            <div className='flex items-center justify-center mt-3'>

            <img 
            className='w-52 object-cover '
            src="https://media-assets.swiggy.com/co-web-assets/external_landing_pages/images/h2at0uuv_qr_code-p-500.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScantheQRcode