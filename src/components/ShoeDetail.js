import React from "react";
import shoe from "../assets/images/SoloShoe.svg";

const ShoeDetail = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-center items-center border-2 border-black sm:px-16 px-4">
        <div className="border-2 border-black flex-1 flex flex-col items-start justify-center space-y-8">
          <h1 className="text-5xl font-bold leading-normal tracking-wide">
            We Provide You{" "}
            <span className="text-orange-500">Super Quality</span> Shoes
          </h1>
          <p className="text-gray-500 lg:max-w-lg text-lg tracking-wide">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-gray-500 lg:max-w-lg text-lg tracking-wide">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <button className="bg-orange-600 p-3 text-white rounded-3xl px-7 text-lg font-semibold">
            View details
          </button>
        </div>
        <div className="border-2 border-black flex-1 flex items-center justify-center">
          <img src={shoe} alt="shoes" />
        </div>
      </div>
    </>
  );
};

export default ShoeDetail;
