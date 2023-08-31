import React from "react";
import ShoeCard from "./ShoeCard";
import ShoeCard1 from "../assets/images/shoeCard1.svg";
import ShoeCard2 from "../assets/images/shoeCard2.svg";
import ShoeCard3 from "../assets/images/shoeCard3.svg";
import ShoeCard4 from "../assets/images/shoeCard4.svg";
const shoePair = [ShoeCard1, ShoeCard2, ShoeCard3, ShoeCard4];

const PopulPrdct = () => {
  return (
    <>
      <div className="py-16 sm:px-16 px-4 space-y-8">
        <h1 className="text-black font-bold text-5xl tracking-wide">
          Our <span className="text-orange-500"> Popular</span> Products
        </h1>
        <p className="text-gray-500 text-lg max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="border-2 border-black flex items-center justify-between gap-10 flex-wrap">
          {shoePair.map((shoe, index) => (
            <ShoeCard shoe={shoe} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopulPrdct;
