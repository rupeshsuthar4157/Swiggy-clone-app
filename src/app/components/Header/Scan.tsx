import React from "react";
import Image from "next/image";

const Scan = () => {
  return (
    <div
      id="scan-section"
      className="mt-24 flex justify-center items-center"
    >
      <Image
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        alt="Scan App"
        height={1240}
        width={1930}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default Scan;
